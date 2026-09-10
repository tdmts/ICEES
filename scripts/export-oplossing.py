#!/usr/bin/env python3
"""Genereer het ingevulde oplossingendocument (.pdf) van een opdracht.

    python scripts/export-oplossing.py Labo/Assemblage/Inventaris

Het document is de opdracht met de antwoorden erin, met "OPLOSSING" diagonaal
over elke bladzijde gestempeld.

WIE HET LEEST
-------------
De student, meteen nadat hij zijn opdracht ingediend heeft, om zijn eigen werk
mee na te kijken. Er is maar EEN uitvoering: er heeft hier een tweede gestaan
met correctienoten erbij, en die is er op 10 september 2026 uit.

EEN ANTWOORD IS EEN BLOK, EN ER HANGT NIETS ONDER
-------------------------------------------------
Waar het verslag een leeg kader of een lege tabelkolom heeft, staat hier
hetzelfde kader of dezelfde tabel met het antwoord erin. Daarmee is het af:
onder een kader komt geen uitleg, geen nuance en geen noot. Beslist door de
lector, en hier AFGEDWONGEN en niet onthouden, want zulke staarten sluipen er
per vraag een terug in. Wie er toch een schrijft, krijgt de regel te zien in
plaats van stil een document met commentaar eronder; zie ONDER_HET_KADER.

Wat je kwijt wil, hoort dus in het antwoord zelf, of het hoort er niet.

WAT ER NIET IN GIT MAG
----------------------
Geen van de twee, en de antwoorden evenmin. Een dropbox op Orion geeft de
oplossing pas vrij NA het indienen, en dat is precies het punt; alles onder
tdmts.github.io staat er meteen voor iedereen, ook voor wie nog moet indienen.
Daarom staat alles in `_oplossingen/`, dat in .gitignore staat, en schrijft dit
script standaard nergens anders naartoe. Dit script zelf draagt geen enkel
antwoord en mag dus wel mee.

Opladen naar Orion doe je met de hand. Dat is met opzet geen stap die hier
geautomatiseerd staat.

HOE HET NIET KAN VEROUDEREN
---------------------------
Zelfde afspraak als bij scripts/export-verslag.py: de vragen komen uit het
`<!-- verslag -->` blok van Opdracht.html en worden hier niet overgetypt. Het
antwoordbestand draagt alleen de ANTWOORDEN, per vraagnummer. Verdwijnt er een
vraag of komt er een bij, dan klopt de nummering niet meer en slaat dit script
af met de vraag welke sleutel er ontbreekt of te veel is. Dat is de enige
bewaking die er is, en ze is er precies omdat een oplossing die stil
achterloopt erger is dan geen oplossing.

De nummering is dezelfde als in het verslagsjabloon: EEN teller over het hele
blok, alleen voor `<ol class="vragen">`, dus vraag 11 volgt op vraag 10 ook al
staan er twee koppen tussen.

HET ANTWOORDBESTAND
-------------------
Platte tekst, per opdracht een bestand in `_oplossingen/`:

    # Een regel die met # begint is een noot voor jezelf en komt nergens.

    [kader] Foto van de opengemaakte computer
    Wat er op de foto te zien hoort te zijn.

    2.
    Het antwoord op vraag 2. Een lege regel begint een nieuwe alinea.

    3.
    Lengte: 305 mm
    Breedte: 244 mm

* `N.` op een eigen regel opent het antwoord op vraag N.
* `[kader]` opent het antwoord op het volgende invulkader, in de volgorde
  waarin de kaders in de opdracht staan. Wat erachter staat is een geheugensteun
  en wordt niet vergeleken.
* Draagt de vraag een `<table class="verslag-tabel">`, dan vullen de regels,
  in de vorm `Rijlabel: waarde`, die rijen in. Een label dat niet in de tabel
  staat slaat af, een rij zonder antwoord ook, en tekst NA de rijen ook: dat
  zou onder de tabel belanden. Draagt de vraag geen tabel, dan is een regel met
  een dubbelpunt gewoon een zin.

DE PARSER IS EEN KOPIE
----------------------
`Node`, `TreeBuilder` en `parse_fragment` hieronder komen woord voor woord uit
scripts/export-verslag.py. Ze zijn gekopieerd en niet geimporteerd, want dat
bestand stopt bij het inlezen al met een foutmelding als python-docx ontbreekt,
en dit script maakt geen docx. Wijzig je de een, kijk dan de ander na.

Nodig: pypdf en reportlab (pip install pypdf reportlab), plus Chrome of Edge
voor het afdrukken. Dezelfde drie als scripts/export-syllabus.py.
"""

import argparse
import html as html_mod
import os
import re
import shutil
import subprocess
import sys
import tempfile
from html.parser import HTMLParser
from pathlib import Path

try:
    from pypdf import PdfReader, PdfWriter
except ImportError:
    sys.exit("pypdf ontbreekt:  pip install pypdf")

try:
    from reportlab.lib.units import mm
    from reportlab.pdfgen import canvas as rl_canvas
except ImportError:
    sys.exit("reportlab ontbreekt:  pip install reportlab")


REPO = Path(__file__).resolve().parent.parent
UITMAP = REPO / "_oplossingen"

VERSLAG_MARKER = "verslag"
SKIP_CONTENT = {"script", "style", "head"}
VOID = {"img", "br", "hr", "input", "meta", "link"}

WATERMERK = "OPLOSSING"

CHROME_KANDIDATEN = [
    r"C:\Program Files\Google\Chrome\Application\chrome.exe",
    r"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe",
    r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
    r"C:\Program Files\Microsoft\Edge\Application\msedge.exe",
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
]
CHROME_OP_PAD = ["chrome", "google-chrome", "chromium", "msedge"]


# --------------------------------------------------------------- HTML -> boom

class Node:
    def __init__(self, tag, attrs=None):
        self.tag = tag
        self.attrs = dict(attrs or {})
        self.children = []
        self.text = ""

    @property
    def classes(self):
        return set((self.attrs.get("class") or "").split())

    def find_all(self, tag):
        for child in self.children:
            if child.tag == tag:
                yield child
            yield from child.find_all(tag)

    def _flat_text(self):
        parts = [self.text] if self.text else []
        for child in self.children:
            if child.tag in SKIP_CONTENT:
                continue
            parts.append(child._flat_text())
        return "".join(parts)

    def inner_text(self):
        return re.sub(r"\s+", " ", self._flat_text()).strip()

    def raw_text(self):
        parts = [self.text] if self.text else []
        for child in self.children:
            parts.append(child.raw_text())
        return "".join(parts)


class TreeBuilder(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.root = Node("root")
        self.stack = [self.root]

    def handle_starttag(self, tag, attrs):
        node = Node(tag, attrs)
        self.stack[-1].children.append(node)
        if tag not in VOID:
            self.stack.append(node)

    def handle_startendtag(self, tag, attrs):
        self.stack[-1].children.append(Node(tag, attrs))

    def handle_endtag(self, tag):
        if tag in VOID:
            return
        for i in range(len(self.stack) - 1, 0, -1):
            if self.stack[i].tag == tag:
                del self.stack[i:]
                return

    def handle_data(self, data):
        node = Node("#text")
        node.text = data
        self.stack[-1].children.append(node)

    def handle_comment(self, data):
        node = Node("#comment")
        node.text = data
        self.stack[-1].children.append(node)


def parse_fragment(markup):
    builder = TreeBuilder()
    builder.feed(markup)
    return builder.root


# ------------------------------------------------------- het antwoordbestand

class Antwoord:
    """De regels die bij een sleutel horen, nog niet uit elkaar gehaald.

    Of een regel `Label: waarde` een tabelrij is of gewone tekst, hangt af van
    de VRAAG en niet van de regel: "Ja, dat gebeurt vaak: dezelfde stick ..." is
    een zin. Die beslissing valt dus pas bij het renderen, wanneer bekend is of
    de vraag een invultabel draagt. Ze hier al nemen kostte een valse fout, en
    ze omgekeerd nemen zou een tabelrij stil als alinea afdrukken.
    """

    def __init__(self, sleutel):
        self.sleutel = sleutel
        self.regels = []        # ruwe regels, lege regels inbegrepen

    def alineas(self):
        tekst = "\n".join(self.regels).strip("\n")
        return [s.strip() for s in re.split(r"\n\s*\n", tekst) if s.strip()]

    def velden_en_rest(self):
        """De kopregels `Label: waarde`, en wat er daarna nog aan tekst staat.

        De reeks stopt bij de eerste regel die geen label draagt, dus een zin
        met een dubbelpunt halverwege het antwoord blijft een zin.
        """
        velden = []
        i = 0
        for i, regel in enumerate(self.regels):
            m = VELD.match(regel.strip())
            if regel.strip() and m:
                velden.append((m.group(1).strip(), m.group(2).strip()))
                continue
            break
        else:
            i = len(self.regels)
        rest = Antwoord(self.sleutel)
        rest.regels = self.regels[i:]
        return velden, rest


# DE REGEL. Een antwoord is precies EEN blok: het ingevulde kader, of de
# ingevulde tabel. Er hangt niets onder. Beslist door de lector, en hier
# afgedwongen in plaats van onthouden: uitleg onder een kader leest als een
# aanhangsel bij het antwoord, en de student hoort te zien wat het antwoord is
# en verder niets.
ONDER_HET_KADER = (
    "onder een kader hoort niets te staan: een antwoord is het kader of de "
    "tabel, en daarmee is het af. Zet wat je kwijt wil in het antwoord zelf, "
    "of laat het weg. Gevonden:"
)

VRAAGSLEUTEL = re.compile(r"^\s*(\d+)\s*\.\s*$")
KADERSLEUTEL = re.compile(r"^\s*\[kader\]", re.I)
VELD = re.compile(r"^([^:]{1,120}):\s*(.*)$")


def lees_antwoorden(pad):
    """Het antwoordbestand als {sleutel: Antwoord}, in leesvolgorde.

    Een vraag heet '3', een invulkader 'kader1', 'kader2', ... op volgorde.
    """
    antwoorden = {}
    huidig = None
    kaderteller = 0

    for regel in pad.read_text(encoding="utf-8").splitlines():
        if regel.lstrip().startswith("#"):
            continue

        m = VRAAGSLEUTEL.match(regel)
        if m:
            huidig = Antwoord(m.group(1))
            if huidig.sleutel in antwoorden:
                sys.exit(f"{pad.name}: vraag {huidig.sleutel} staat er twee keer in")
            antwoorden[huidig.sleutel] = huidig
            continue

        if KADERSLEUTEL.match(regel):
            kaderteller += 1
            huidig = Antwoord(f"kader{kaderteller}")
            antwoorden[huidig.sleutel] = huidig
            continue

        if huidig is None:
            if regel.strip():
                sys.exit(f"{pad.name}: tekst voor de eerste sleutel:\n  {regel.strip()}")
            continue

        # Er heeft hier een notensyntaxis gestaan, met > en >>, die tekst
        # ONDER het kader zette. Die is er op vraag van de lector uit, en de
        # regel eronder is wat ervoor in de plaats komt: wie zo'n regel toch
        # nog typt, krijgt de regel te zien in plaats van stil een document
        # met een staart eronder.
        if regel.lstrip().startswith(">"):
            sys.exit(f"{pad.name}, {ONDER_HET_KADER}\n  {regel.strip()[:70]}")

        huidig.regels.append(regel.strip())

    return antwoorden


# ----------------------------------------------------------- de opdracht lezen

def normaliseer(tekst):
    return re.sub(r"\s+", " ", html_mod.unescape(tekst or "")).strip().lower()


def opdrachtblok(pad):
    """(<h1>, lead, het verslagblok als boom) uit een Opdracht.html."""
    root = parse_fragment(pad.read_text(encoding="utf-8"))
    containers = [n for n in root.find_all("div") if "container" in n.classes]
    if not containers:
        sys.exit(f'Geen <div class="container"> in {pad}')
    container = containers[0]

    titels = list(container.find_all("h1"))
    titel = titels[0].inner_text() if titels else pad.parent.name

    leads = [n for n in container.find_all("p") if "lead" in n.classes]
    lead = leads[0].inner_text() if leads else ""

    blokken = [c for c in container.children
               if c.tag == "#comment" and c.text.strip().startswith(VERSLAG_MARKER)]
    if not blokken:
        sys.exit(f"{pad}: geen <!-- verslag --> blok")

    body = Node("div")
    for blok in blokken:
        inhoud = blok.text.strip()
        body.children.extend(parse_fragment(inhoud[len(VERSLAG_MARKER):]).children)
    return titel, lead, body


# --------------------------------------------------------------- HTML bouwen

def esc(tekst):
    return html_mod.escape(tekst, quote=False)


def antwoordblok(antwoord):
    """Het ingevulde kader onder een vraag. Er komt niets achter."""
    romp = "".join(f"<p>{esc(alinea)}</p>" for alinea in antwoord.alineas())
    return f'<div class="antwoord">{romp}</div>' if romp else ""


def ingevulde_tabel(node, velden, waar):
    """De invultabel met de antwoorden in de tweede kolom.

    De rijlabels van de opdracht zijn leidend: staat er een label in het
    antwoordbestand dat de tabel niet heeft, dan is de opdracht gewijzigd en
    slaat dit af in plaats van de waarde stil te laten vallen.
    """
    koppen = [c.inner_text() for c in node.find_all("th")]
    rijen = [r for r in node.find_all("tr") if any(c.tag == "td" for c in r.children)]
    if not koppen or not rijen:
        return ""

    per_label = {normaliseer(label): waarde for label, waarde in velden}
    gebruikt = set()

    uit = ['<table class="invul">', "<thead><tr>"]
    for kop in koppen:
        uit.append(f"<th>{esc(kop)}</th>")
    uit.append("</tr></thead><tbody>")

    for rij in rijen:
        cellen = [c for c in rij.children if c.tag == "td"]
        label = cellen[0].inner_text() if cellen else ""
        sleutel = normaliseer(label)
        uit.append("<tr>")
        uit.append(f"<td>{esc(label)}</td>")
        if sleutel in per_label:
            gebruikt.add(sleutel)
            uit.append(f'<td class="gevuld">{esc(per_label[sleutel])}</td>')
        else:
            uit.append('<td class="ontbreekt"></td>')
        # Een tabel met meer dan twee kolommen komt in deze opdrachten niet
        # voor; mocht ze er komen, blijven de extra kolommen leeg in plaats
        # van dat de rij scheeftrekt.
        for _ in range(len(koppen) - 2):
            uit.append('<td class="ontbreekt"></td>')
        uit.append("</tr>")
    uit.append("</tbody></table>")

    over = set(per_label) - gebruikt
    if over:
        namen = ", ".join(sorted(over))
        sys.exit(f"{waar}: deze labels staan niet in de tabel van de opdracht: {namen}")
    ontbreekt = [normaliseer([c for c in r.children if c.tag == "td"][0].inner_text())
                 for r in rijen]
    leeg = [n for n in ontbreekt if n not in per_label]
    if leeg:
        namen = ", ".join(leeg)
        sys.exit(f"{waar}: geen antwoord voor deze rijen: {namen}")
    return "".join(uit)


def lijst(node):
    uit = [f"<{node.tag}>"]
    for li in node.children:
        if li.tag != "li":
            continue
        genest = [c for c in li.children if c.tag in ("ol", "ul")]
        eigen = Node("li")
        eigen.children = [c for c in li.children if c.tag not in ("ol", "ul")]
        uit.append(f"<li>{esc(eigen.inner_text())}")
        for sub in genest:
            uit.append(lijst(sub))
        uit.append("</li>")
    uit.append(f"</{node.tag}>")
    return "".join(uit)


def render(container, uit, antwoorden, staat, waar):
    for node in container.children:
        klassen = node.classes
        if node.tag in SKIP_CONTENT:
            continue

        if "verslag-kader" in klassen:
            staat["kader"] += 1
            sleutel = f"kader{staat['kader']}"
            opschrift = node.attrs.get("data-verslag") or "Foto"
            antwoord = antwoorden.get(sleutel)
            if antwoord is None:
                sys.exit(f"{waar}: geen [kader]-antwoord nummer {staat['kader']} "
                         f"({opschrift})")
            staat["gezien"].add(sleutel)
            uit.append('<div class="kader">')
            uit.append(f'<p class="kaderkop">{esc(opschrift)}</p>')
            uit.append(antwoordblok(antwoord))
            uit.append("</div>")
            continue

        if node.tag == "h1":
            uit.append(f"<h2>{esc(node.inner_text())}</h2>")
        elif node.tag == "h2":
            uit.append(f"<h2>{esc(node.inner_text())}</h2>")
        elif node.tag == "h3":
            uit.append(f"<h3>{esc(node.inner_text())}</h3>")
        elif node.tag == "p":
            tekst = node.inner_text()
            if tekst:
                uit.append(f"<p>{esc(tekst)}</p>")
        elif node.tag == "pre":
            uit.append(f"<pre>{esc(html_mod.unescape(node.raw_text()).strip())}</pre>")
        elif node.tag == "ol" and "vragen" in klassen:
            vragenlijst(node, uit, antwoorden, staat, waar)
        elif node.tag in ("ol", "ul"):
            uit.append(lijst(node))
        elif node.tag in ("div", "section"):
            if "download-container" in klassen:
                continue
            render(node, uit, antwoorden, staat, waar)


def vragenlijst(node, uit, antwoorden, staat, waar):
    """Elke vraag als een alinea met een vet nummer, niet als een <li>.

    scripts/export-verslag.py doet het in de docx net zo: een gewone alinea met
    een vette run "N. " ervoor. Een echte <ol> springt in, en dan lopen het
    verslag en de oplossing niet meer gelijk.
    """
    for li in node.children:
        if li.tag != "li":
            continue
        staat["vraag"] += 1
        nummer = str(staat["vraag"])
        antwoord = antwoorden.get(nummer)
        if antwoord is None:
            sys.exit(f"{waar}: geen antwoord voor vraag {nummer}")
        staat["gezien"].add(nummer)

        tabellen = [c for c in li.children if c.tag == "table"]
        eigen = Node("li")
        eigen.children = [c for c in li.children
                          if c.tag != "table" and c.tag not in ("ol", "ul")]

        uit.append(f'<div class="vraag"><p class="vraagtekst">'
                   f'<span class="nr">{nummer}.</span> {esc(eigen.inner_text())}</p>')
        if tabellen:
            # Alleen HIER worden `Label: waarde` regels als tabelrijen gelezen.
            velden, rest = antwoord.velden_en_rest()
            if rest.alineas():
                sys.exit(f"{waar}, vraag {nummer}: {ONDER_HET_KADER}\n"
                         f"  {rest.alineas()[0][:70]}")
            for tabel in tabellen:
                uit.append(ingevulde_tabel(tabel, velden, f"{waar}, vraag {nummer}"))
        else:
            uit.append(antwoordblok(antwoord))
        uit.append("</div>")


STIJL = """
/* De maten hieronder zijn NIET gekozen: ze komen uit downloads/Labo-...-verslag.docx
   zelf, uit word/styles.xml en de sectPr, zodat de oplossing en het verslag die de
   student ingevuld heeft naast elkaar dezelfde bladspiegel hebben. Wijzig je
   scripts/export-verslag.py of het sjabloon van python-docx, lees ze dan opnieuw af
   in plaats van hier iets bij te schatten.
   Letter 8,5 x 11 duim, marges 1 duim boven en onder en 1,25 duim links en rechts;
   Normal is Calibri 11pt met 10pt eronder en regelafstand 1,15; Title 26pt #17365D
   met een onderrand van 1pt in #4F81BD; Heading 1 vet 14pt #365F91 met 24pt erboven;
   Heading 2 vet 13pt #4F81BD met 10pt erboven; Table Grid heeft randen van 0,5pt in
   zwart en celmarges van 0,19cm links en rechts. */

@page { size: 8.5in 11in; margin: 1in 1.25in; }
body { font-family: Calibri, Carlito, "Segoe UI", sans-serif; font-size: 11pt;
       line-height: 1.15; color: #000; margin: 0; }
p { margin: 0 0 10pt 0; }

h1 { font-family: Calibri, Carlito, sans-serif; font-size: 26pt; font-weight: normal;
     color: #17365D; letter-spacing: 0.25pt; line-height: 1.0;
     border-bottom: 1pt solid #4F81BD; padding-bottom: 4pt; margin: 0 0 15pt 0; }
h2 { font-size: 14pt; font-weight: bold; color: #365F91; margin: 24pt 0 0 0; }
h3 { font-size: 13pt; font-weight: bold; color: #4F81BD; margin: 10pt 0 0 0; }

/* De voorbladen lopen gelijk: titel, de inleiding van het labo, de cursieve regel
   die zegt wat je met dit document doet, en dan een bladovergang. */
div.voorblad { page-break-after: always; }
p.mededeling { font-size: 9pt; font-style: italic; color: #5A5A5A; }

/* Een vraag is in het verslag geen lijstitem maar een alinea met een vet nummer
   ervoor, dus hier ook. Een <ol> zou inspringen en dan lopen de twee documenten
   niet meer gelijk. */
div.vraag { page-break-inside: avoid; margin: 0 0 14pt 0; }
p.vraagtekst { margin: 0 0 10pt 0; }
p.vraagtekst span.nr { font-weight: bold; }

/* Waar het verslag een leeg kader zet, staat hier hetzelfde kader met het antwoord
   erin: dezelfde rand van 0,5pt en dezelfde celmarge van 0,19cm. */
div.antwoord { border: 0.5pt solid #000; padding: 0 0.19cm; margin: 0 0 6pt 0;
               page-break-inside: avoid; }
div.kader { margin: 0 0 14pt 0; page-break-inside: avoid; }
p.kaderkop { font-size: 9pt; font-style: italic; color: #5A5A5A; margin: 0 0 2pt 0; }

table.invul { border-collapse: collapse; width: 100%; margin: 0 0 6pt 0;
              page-break-inside: avoid; }
table.invul th, table.invul td { border: 0.5pt solid #000; padding: 0 0.19cm;
                                 vertical-align: top; width: 50%; }
table.invul th { text-align: left; font-weight: bold; }
table.invul td { height: 0.8cm; }
table.invul td p, table.invul th p { margin: 0; }

pre { font-family: Consolas, monospace; font-size: 9pt; margin: 0 0 10pt 0.6cm;
      white-space: pre-wrap; }
ol, ul { padding-left: 0.63cm; margin: 0 0 10pt 0; }
li { margin: 0; }
"""


HOOFDING = ("Dit is de modeloplossing bij je opdracht. Leg ze naast je eigen verslag "
            "en kijk na waar je antwoord verschilt.")


def bouw_html(titel, lead, body, antwoorden, waar):
    staat = {"vraag": 0, "kader": 0, "gezien": set()}
    uit = []
    render(body, uit, antwoorden, staat, waar)

    over = set(antwoorden) - staat["gezien"]
    if over:
        namen = ", ".join(sorted(over, key=lambda s: (not s.isdigit(), s)))
        sys.exit(f"{waar}: deze sleutels horen bij geen enkele vraag of kader "
                 f"van de opdracht: {namen}. Is de opdracht gewijzigd?")

    hoofding = HOOFDING
    return f"""<!DOCTYPE html>
<html lang="nl"><head><meta charset="utf-8"><title>{esc(titel)}</title>
<style>{STIJL}</style></head><body>
<div class="voorblad">
<h1>Oplossing {esc(titel)}</h1>
<p>{esc(lead)}</p>
<p class="mededeling">{esc(hoofding)}</p>
</div>
{''.join(uit)}
</body></html>
"""


# ------------------------------------------------------- afdrukken en stempelen

def zoek_chrome(opgegeven):
    for kandidaat in filter(None, [opgegeven, os.environ.get("CHROME")]):
        if Path(kandidaat).exists():
            return kandidaat
    for kandidaat in CHROME_KANDIDATEN:
        pad = Path(os.path.expandvars(kandidaat))
        if pad.exists():
            return str(pad)
    for naam in CHROME_OP_PAD:
        gevonden = shutil.which(naam)
        if gevonden:
            return gevonden
    sys.exit("geen Chrome of Edge gevonden; geef --chrome PAD of zet CHROME")


def druk_af(chrome, html_pad, pdf_pad):
    opdracht = [chrome, "--headless=new", "--disable-gpu", "--no-sandbox",
                "--no-pdf-header-footer", "--virtual-time-budget=20000",
                f"--print-to-pdf={pdf_pad}", html_pad.as_uri()]
    klaar = subprocess.run(opdracht, capture_output=True, text=True)
    if not Path(pdf_pad).exists():
        sys.exit(f"Chrome maakte geen PDF:\n{klaar.stderr[-2000:]}")


CALIBRI_KANDIDATEN = [
    ("C:/Windows/Fonts/calibri.ttf", "C:/Windows/Fonts/calibrib.ttf"),
    ("/usr/share/fonts/truetype/crosextra/Carlito-Regular.ttf",
     "/usr/share/fonts/truetype/crosextra/Carlito-Bold.ttf"),
]


def stempelletters():
    """(gewoon, vet) in Calibri, want dat is het lettertype van het document zelf.

    Zelfde aanpak als stempelletters() in scripts/export-syllabus.py, dat Arial
    zoekt omdat de syllabus in Arial staat. Vindt hij niets, dan is Helvetica de
    terugval en scheelt het alleen een haartje in de voettekst.
    """
    from reportlab.pdfbase import pdfmetrics
    from reportlab.pdfbase.ttfonts import TTFont
    for gewoon, vet in CALIBRI_KANDIDATEN:
        if Path(gewoon).exists() and Path(vet).exists():
            try:
                pdfmetrics.registerFont(TTFont("OplossingCalibri", gewoon))
                pdfmetrics.registerFont(TTFont("OplossingCalibri-Bold", vet))
                return "OplossingCalibri", "OplossingCalibri-Bold"
            except Exception:
                pass
    return "Helvetica", "Helvetica-Bold"


def stempel(bron_pdf, tekst):
    """Het watermerk diagonaal over elke bladzijde, plus het bladnummer.

    Bovenop de inhoud en niet eronder, met een alfa van 0,12: een stempel
    onder de tekst verdwijnt zodra Chrome ergens wel een achtergrond schildert,
    en dat merk je pas in de gedrukte PDF. Doorschijnend bovenop kan dat niet
    overkomen.

    EEN canvas voor alle bladzijden, zoals in scripts/export-syllabus.py: dat
    is daar de zwaarste post van het document gebleken.
    """
    lezer = PdfReader(str(bron_pdf))
    schrijver = PdfWriter()
    gewoon, vet = stempelletters()

    import io
    buffer = io.BytesIO()
    eerste = lezer.pages[0]
    c = rl_canvas.Canvas(buffer, pagesize=(float(eerste.mediabox.width),
                                           float(eerste.mediabox.height)))
    for i, bladzijde in enumerate(lezer.pages):
        breedte = float(bladzijde.mediabox.width)
        hoogte = float(bladzijde.mediabox.height)
        c.setPageSize((breedte, hoogte))

        c.saveState()
        c.setFillAlpha(0.12)
        # #4F81BD, de accentkleur waar Word de titelrand en de koppen mee zet.
        c.setFillColorRGB(0.310, 0.506, 0.741)
        c.translate(breedte / 2, hoogte / 2)
        # De hoek van de bladdiagonaal, zodat het woord de bladzijde volgt en
        # niet toevallig scheef staat.
        c.rotate(54.7)
        c.setFont(vet, 88)
        c.drawCentredString(0, -30, tekst)
        c.restoreState()

        c.setFont(gewoon, 8)
        c.setFillGray(0.45)
        c.drawCentredString(breedte / 2, 11 * mm, f"{tekst}   |   {i + 1}")
        c.showPage()
    c.save()
    buffer.seek(0)

    stempels = PdfReader(buffer).pages
    for i, bladzijde in enumerate(lezer.pages):
        bladzijde.merge_page(stempels[i])
        schrijver.add_page(bladzijde)
    return schrijver


# -------------------------------------------------------------------- main

def main():
    p = argparse.ArgumentParser(
        description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument("module", help="pad naar de opdracht, bv. Labo/Assemblage/Inventaris")
    p.add_argument("--antwoorden", help="pad naar het antwoordbestand "
                                        "(standaard _oplossingen/<Module>.md)")
    p.add_argument("--uitmap", help="map waarin de PDF komt (standaard _oplossingen/)")
    p.add_argument("--watermerk", default=WATERMERK)
    p.add_argument("--chrome")
    p.add_argument("--html-only", action="store_true",
                   help="schrijf alleen de tussen-HTML, voor het nakijken van de opmaak")
    args = p.parse_args()

    module = (REPO / args.module).resolve()
    opdracht = module / "Opdracht.html"
    if not opdracht.exists():
        sys.exit(f"Niet gevonden: {opdracht}")

    stam = "-".join(module.relative_to(REPO).parts[1:])
    antwoordpad = Path(args.antwoorden) if args.antwoorden else UITMAP / f"{stam}.md"
    if not antwoordpad.exists():
        sys.exit(f"Geen antwoordbestand: {antwoordpad}")

    titel, lead, body = opdrachtblok(opdracht)
    antwoorden = lees_antwoorden(antwoordpad)

    uitmap = Path(args.uitmap) if args.uitmap else UITMAP
    uitmap.mkdir(parents=True, exist_ok=True)
    vragen = sum(1 for s in antwoorden if s.isdigit())

    uit = uitmap / f"Labo-{stam}-oplossing.pdf"
    document = bouw_html(titel, lead, body, antwoorden, antwoordpad.name)

    if args.html_only:
        doel = uit.with_suffix(".html")
        doel.write_text(document, encoding="utf-8")
        print(f"Geschreven: {doel}")
        return

    with tempfile.TemporaryDirectory() as tmp:
        html_pad = Path(tmp) / "oplossing.html"
        html_pad.write_text(document, encoding="utf-8")
        ruw = Path(tmp) / "ruw.pdf"
        druk_af(zoek_chrome(args.chrome), html_pad, ruw)
        schrijver = stempel(ruw, args.watermerk)
        try:
            with open(uit, "wb") as f:
                schrijver.write(f)
        except PermissionError:
            # Een PDF-lezer houdt het bestand vergrendeld. Dat is geen fout in
            # dit script, en een traceback zegt niet wat je eraan doet. Zelfde
            # afhandeling als in scripts/export-verslag.py voor een open Word.
            sys.exit(f"Kan {uit.name} niet overschrijven. Staat het open in een "
                     f"PDF-lezer? Sluit het en draai dit opnieuw.")

    bladen = len(PdfReader(str(uit)).pages)
    print(f"Geschreven: {uit.name}  ({bladen} bladzijden, {vragen} vragen)")


if __name__ == "__main__":
    main()
