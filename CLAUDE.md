# CLAUDE.md

Guidance for Claude Code (claude.ai/code) when working in this repository.

## What this is

The course site for **Industriële computers en embedded systems** (Dutch, "je"-vorm), one of the
Orion course repos under `tdmts/`. Static HTML on **GitHub Pages** at
`https://tdmts.github.io/ICEES/`, iframed into a Brightspace/Orion topic through
[pasteInOrion.html](pasteInOrion.html) (edit only the iframe `src` per topic).

> **The only file ever uploaded to Orion is [pasteInOrion.html](pasteInOrion.html).** Everything
> else is served from GitHub Pages. Inside it, the iframe `src` must point at a
> `https://tdmts.github.io/ICEES/...` URL, not a local file.

Six labs, each an independent module: Assemblage + BIOS/UEFI, Virtualiseren, Partitioneren, Linux
Basis, Linux Geavanceerd, Embedded Systems. Beside them a theory track (a syllabus the student
prints) and a lecture track (six hoorcolleges, of which five have a deck).

**Three of the six modules are written.** `Labo/Assemblage/` holds its hub, its three theory pages and
its three `Opdracht.html`; `Labo/Virtualiseren/` holds its hub, four theory pages, a zelftest, one
`Opdracht.html` and the three stappenplan pages that hang under it; `Labo/Partitioneren/` holds its
hub, two theory pages, a spiekblad, a zelftest, one `Opdracht.html` and the four stappenplan pages
that hang under it; `Algemeen/` holds the four pages that sit beside both tracks. `check-content.py`
and `check-nav.js` are both green with no warnings. The other three modules are staged in
`_incoming/`.

No build system and no test suite: you edit HTML/CSS/JS directly. `scripts/` holds eight Python
scripts, of which `check-content.py` and `import-brightspace.py` are stdlib only, plus one Node
script, `check-nav.js`, which needs `jsdom` and is the only reason a `node_modules/` may exist here.

## De studiefiche, en waar ze het laatste woord heeft

The ECTS fiche is the official description of this course and the yardstick every module is held
against. It is public, no login:
`https://bamaflexweb.hogent.be/BMFUIDetailxOLOD.aspx?a=206743&b=5&c=1`. **The number matters:
`a=206743` is ICEES and `a=206742` is Datacommunicatie en netwerken**, the neighbouring course in
`tdmts/DeN`, and the two fiches look alike. Tom Demets is titularis on both and Stefan Lievens is
medewerker on both.

**The four doelstellingen are what a module has to serve**, quoted from the fiche:

1. De onderdelen in een industriële computer en embedded system herkennen, hun nut en de
   basisprincipes in eigen woorden ervan omschrijven.
2. Verantwoorde hardware keuzes maken en een industriële computer samenstellen uit losse onderdelen.
3. Een industrieel besturingssysteem installeren, configureren en up-to-date houden.
4. Eenvoudige programma's schrijven, installeren en configureren in functie van een grotere
   industriële toepassing.

Above those sits the opleiding's leerresultaat: "De bachelor kan op basis van een technisch probleem
of vraag een analyse maken en de verschillende oplossingen in kaart brengen en hierover passend
communiceren." The fiche also fixes 3 studiepunten, 75 hours of which 30 contactonderwijs, and two
werkvormen (activerend hoorcollege, oefensessie met leerpad) that map one to one onto the two tracks
here.

**One number on the fiche does not match this repo, and it is not resolved.** The fiche puts the
first examenkans at **schriftelijk examen 30% and geintegreerde evaluatie 70%** (second: 60/40),
where `Algemeen/Evaluatie.html` says **theorie 40% and labo's 60%**. Checked with the lecturer on 7
September 2026, who is verifying it against the studiewijzer; **40/60 stays on the page until then**
and nothing here was changed. `Algemeen/Studiefiche.html` therefore carries no percentage at all: it
names the *form* of the evaluation and sends the reader to `Evaluatie.html` for the weights, so the
site never prints two different numbers for the same thing. Resolve it before either page grows a
number.

**`Algemeen/Studiefiche.html` en `Algemeen/Studiemateriaal.html` worden door niets in deze repo
gelinkt, en dat is geen vergetelheid.** Beslist op 7 september 2026. `Planning.html` en
`Evaluatie.html` hangen aan elke hub omdat een labo er iets over te zeggen heeft: wanneer je werkt
en hoe het meetelt. Die twee andere gaan over het vak in zijn geheel en niet over een labo, dus een
regel eronder op elke hub is drie kopieen van dezelfde zin en een vierde plaats waar iets kan
verouderen. Hoe de student ze bereikt ligt in Orion en niet hier; wat deze repo doet is ze
publiceren. **Voeg er dus geen link naartoe toe vanaf een `overview.html`**, net zomin als bij de
syllabushub.

## De indeling in Orion, en waarom niets zijwaarts linkt

Identical to DeN, whose `CLAUDE.md` carries the full reasoning. Every rule below hangs off this
table:

| Menu-item | Pagina |
|---|---|
| Inleiding | `Labo/<Naam>/overview.html` |
| Theorie | `Labo/<Naam>/Theorie/reference.html` |
| Opdracht | `Labo/<Naam>/Opdracht.html` |
| Verslag indienen | a Brightspace dropbox, no page of ours |

A lab is four Orion topics, not one, and that menu does not move when the iframe does. Navigating
downward inside an entry is fine: the menu is then coarser than where you are, not wrong.
Navigating sideways leaves the menu pointing at a page the student is not reading. So **nothing in
this site links sideways inside the iframe**: you either name the entry and drop the link, or open
it with `target="_blank"`. Rule 10 of the content check fails a same-frame link between two entries.

`reeks` in [reference.js](reference.js) is the machine-readable version of that table. One reeks is
one menu entry, and every engine stays inside it. A page at the top of a reeks gets no nav row:
there is nothing above an Orion entry that this site may send you to.

## Relation to tdmts/DeN

This repo was started from DeN, and everything it shares with it was **copied, not shared**: the
four engines and the eight scripts started as byte-for-byte copies with the DeN-specific strings
rewritten. **Two scripts have since diverged for a reason that is not a string**, and both are
recorded below: `import-brightspace.py` (the `rCode` casing, under "Where the content comes from")
and `import-syllabus.py` (zwevende afbeeldingen, under "Wat de eerste hoofdstukimport ...").
`Theorie/Syllabus/syllabus.css` was copied too and has since **gained three rules that DeN does not
have**, all three under "De syllabus": a `ol.vragen > li` that stays whole, `.vragen-bij-figuur`,
and `.tekenkader`, the drawing frame under a question that asks the student to draw. Read DeN's
`CLAUDE.md` for the reasoning behind any shared part; read this section before you copy anything
across, in either direction.

**Whether the engines should live in a repo of their own is still open.** It gets decided once ICEES
has its six modules and the three courses lie side by side: today every difference is a rewritten
string, not a design choice. Two things already argue against a naive merge. `back-link.js` resolves
its sibling manifest off `document.currentScript.src`, so moving it to a shared origin is a rewrite
rather than a copy, and a shared engine makes every course's bug every course's bug.

| | DeN | ICEES |
|---|---|---|
| Modules | 5 labs | 6 labs |
| Theory source | a Word syllabus | a Word syllabus, same shape |
| Lecture decks | 3 | 5 (a sixth session has no deck) |
| Lesopnames | none | 3 Panopto recordings |
| Guided steps | already one page per topic | 25 command pages per lab, **grouped on import** |
| Spiekblad | none | one per grouped lab |
| Export quirks | `- Copy` duplicates, another course's files | `rCode` casing, an `embedded/` second copy, a stray lesopnames folder |

**The guided steps are grouped, not carried over one to one.** Brightspace gives Linux Basis 25
pages, one per command, each a title and three lines. They become roughly six theory pages by
subject. This is the one structural difference from DeN that touches every lab, and it is why the
page split gets approved before anything is written.

**A grouped lab gets a `Spiekblad.html`**: every command of that lab in one table, which the student
keeps beside him while he works through the opdracht. Grouping by subject is right for reading and
wrong for looking something up, and the spiekblad is what pays for it. It sits in the theory reeks,
because it belongs to the menu entry Theorie.

**Kept identical on purpose,** so the engines stay mergeable: the `window.LAB_REFERENCE` global, the
`reference.js` filename, the `reference.html` hub filename, and the
`msDashboard:{labId}:theory:{topicId}` storage key.

**The copied engines still carry DeN examples in their comments** (`RS485`, `ManagedSwitch`). Those
are the cases that shaped the code and they are described accurately, but nothing in this repo is
called that, so each file says so at the top. Replace them with this course's own once the modules
under `Labo/` exist.

## Layout

```
Labo/<Naam>/
    overview.html      the module hub: doelstellingen, studiemateriaal, evaluatie
    Opdracht.html      landing page; the assignment itself is in a <!-- verslag --> comment
    Theorie/
        reference.html the theory hub
        Spiekblad.html every command of this lab in one table
        *.html         one page per subject
Theorie/Syllabus/      the theory track: the source of the syllabus PDF
Hoorcollege/           the lecture decks: the source of the handout PDFs
Algemeen/              studiefiche, planning, evaluatie en studiemateriaal, outside both tracks
img/  datasheets/  downloads/  scripts/
reference.js           the manifest of every theory page, per module
back-link.js  reference-dashboard.js  reference-dashboard.css
oplossingen.js         the reveal that shows an answer, on every page with questions
```

**Named folders, not numbered ones.** The six labs are independent modules, so a number would assert
an order that does not exist, and renaming a folder would break links and wipe `localStorage` flags.

**No XP.** A module is one assignment, not a list of small ones to tick off. `dashboard.js`,
`exercises.js` and `checklist-sync.js` do not exist here, and `back-link.js` was already cut down to
match in DeN.

- `img/` — self-hosted images, descriptive filenames. Never hotlink Brightspace
  (`/content/enforced/...`): those paths break every academic year. Drawn diagrams are `.svg` here
  and are referenced from an `<img>` like any other picture; see "Labo Partitioneren" for how they
  are drawn and why they get rendered before they are trusted.
- `datasheets/` — self-hosted PDFs a page links to. Currently the five component datasheets of
  Labo Assemblage (moederbord, processor, geheugen, SSD, voeding). Same reason: a vendor URL dies
  mid-semester.
- `downloads/` — what the student downloads: the verslag templates (derived from `Opdracht.html` by
  `export-verslag.py`, kept in step by rule 6), the syllabus PDF (derived by `export-syllabus.py`,
  rule 13) and one handout PDF per deck (derived by `export-handout.py`). All committed, because
  Pages serves only tracked files.

**De syllabus-PDF ging op 9 september 2026 van 56,5 naar 11,1 MB, en `skip-worktree` staat sinds
dan weer uit.** Ze wordt dus gewoon meegecommit en Pages serveert de actuele versie. Wat er tussen
8 en 9 september op `skip-worktree` stond was een noodrem; die is opgeheven, en `git ls-files -v
downloads/` hoort voor dit bestand een `H` te tonen en geen `S`. **Zet hem niet opnieuw aan** zonder
te beseffen dat `git status` daarna over dat bestand zwijgt ook als het veranderd is: je draait
`export-syllabus.py`, alles ziet er goed uit, en er gaat niets omhoog.

Waar het gewicht vandaan kwam, want allebei de oorzaken zitten in `export-syllabus.py` en allebei
komen ze terug als je eraan werkt:

- **`stempel()` maakte een canvas per bladzijde**, dus reportlab bedde het HOGENT-logo 148 keer in,
  telkens op zijn volle 3490 bij 1968 pixels terwijl het op 19,4mm gedrukt wordt. Dat waren 148
  identieke objecten van 99 kB, samen **14,3 MB**, een derde van het bestand. Het is nu EEN canvas
  met `showPage()` per bladzijde, want reportlab deelt een afbeelding binnen een canvas, plus een
  logo dat via `stempellogo()` op 300 dpi voor zijn eigen vakje geschaald wordt. Unieke
  beeldobjecten gingen van 262 naar 115.
- **Chrome zet elke afbeelding lossless in de PDF**, dus de 22 MB PNG waar de syllabus naar wijst
  werd daar ruim 50 MB. `absolute_paden()` wijst een rasterafbeelding nu naar een kopie in de
  werkmap, geschaald op `KRIMP_DPI` (150) voor de breedte die de figuur zelf opgeeft in
  `--figuur-breedte`, en opgeslagen als JPEG. **`img/` blijft ongemoeid**, want `figure-zoom` heeft
  de volle resolutie op de site wel nodig.

**Dat tweede is meteen waarom dit beter uitkomt dan een nabewerking van de PDF achteraf**, met
Ghostscript of wat dan ook: de doel-dpi volgt PER FIGUUR uit haar gedrukte breedte, dus een foto op
160mm mag naar 150 dpi terwijl een tabel die een oefening moet kunnen lezen haar volle resolutie
houdt. Die staan in `ONAANGEROERD` in het script, met per bestand de reden: de ASCII-tabel van 10.3
en de zes datasheetbladzijden van 9.5. **Zet je er iets bij of haal je er iets af, kijk het dan na
IN de gedrukte PDF** en niet op het scherm.

Wat er na zo'n ingreep nagekeken hoort te worden, en wat op 9 september groen was: het aantal
bladzijden, de inhoudstafel rij voor rij tegen de vorige PDF, de schaalfactoren (zie de regel
daarover verderop), of de voettekst en het logo nog op elke bladzijde staan, en of de zeven
beschermde afbeeldingen nog op ware grootte in de PDF zitten. Dat laatste lees je met `pypdf` uit
`/Resources /XObject` en leg je naast de pixelmaten van de bestanden in `img/`.

**De geschiedenis is nog niet opgeschoond.** In `.git` staan nog zestien blobs van de oude, grote
PDF, samen zo'n 310 MB van de 400. Beslist op 9 september 2026: dat wacht tot de syllabus af is,
want `git filter-repo` herschrijft elke commit-hash en vraagt een force-push. **Nooit via Git LFS**,
want Pages lost LFS-pointers niet op en serveert dan het pointerbestand.

**A handout's filename is an agreement with Orion, so it is fixed.** The lecture track has no
landing page: its Orion topic links straight at
`https://tdmts.github.io/ICEES/downloads/ICEES-handout-<naam>.pdf`. Renaming a deck moves the file
and the Orion link 404s with nothing here failing.

## Styling comes from OrionCSS

`style.css` and `main.js` live in `tdmts/OrionCSS` and are linked by **absolute URL** on every page:

```html
<link rel="stylesheet" href="https://tdmts.github.io/OrionCSS/style.css">
<script type="text/javascript" src="https://tdmts.github.io/OrionCSS/main.js"></script>
```

Never copy or edit them here; a styling bug is reported there. `tdmts/OrionContent/template.html`
renders every component with its exact markup: read it before authoring rather than reproducing
markup from memory.

## The engines

Copies of DeN's, whose `CLAUDE.md` documents each one in full.

- [reference.js](reference.js) → `window.LAB_REFERENCE.<module>` — the single source of truth for
  every theory list. A page is added here, not in another page's HTML.
- [reference-dashboard.js](reference-dashboard.js) `initReferenceHub('<module>'[, '<reeks>'])` —
  renders the hub for one reeks, `theorie` by default.
- [back-link.js](back-link.js) — self-running, no init. Injects one sticky nav row above the `<h1>`.
  Everything it offers stays inside the current reeks. **A theory page must load `reference.js`** or
  the page renders perfectly and only the forward link silently vanishes; rule 3 asserts the include.
- [oplossingen.js](oplossingen.js) — self-running, syllabus only. Folds the answer of every question
  on the page into a `spoiler-container`.

Progress is `localStorage` only, one flag: `msDashboard:{moduleId}:theory:{topicId}`.

## The three tracks

**A lab produces a verslag.** The whole assignment lives in a `<!-- verslag ... -->` comment in
`Opdracht.html`; `scripts/export-verslag.py` generates the docx from it, so the template cannot
drift from the page. The page is a landing page: what the lab is about and one button reading
**"Opdracht downloaden"**, which rule 11 asserts literally. The docx is exactly three things: the
`<h1>`, the `<p class="lead">` and that comment block.

**The syllabus is a PDF that comes out of HTML.** The Word on OneDrive is the origin of the text,
not its source: after a chapter is imported it is archived, not edited. `import-syllabus.py`
translates formatting and never words; `export-syllabus.py` bundles the pages into
`downloads/Industriele-computers-en-embedded-systems-syllabus.pdf`. The drift this exists to stop
has already happened here: the Word is dated 5 June 2026 and the PDF students read on Brightspace
12 September 2025.

The Word is
`~/OneDrive - Hogeschool Gent/EDU/2025-2026/Industriële computers en embedded systems/Theorie/Syllabus/Industriële computers en embedded systems_.docx`,
which is the default in `import-syllabus.py`. **There are two docx in that folder**: the one without
the trailing underscore is dated April 2024 and is the previous version.

**The `AFKORTINGEN` table in `import-syllabus.py` now carries this course's vocabulary**, replaced on
7 September 2026 before the first chapter went in. Every value in it is the same PascalCase that
`pascal()` would produce anyway, and that is the point: the table *pins* the spelling rather than
changing it. This repo writes an abbreviation in a filename as an ordinary word (`BiosUefi.html`,
`MbrPartities.html`, `GptPartities.html`), not in capitals, and without the table that convention is
written down nowhere. Put `"bios": "BIOS"` in it and the syllabus page becomes `BIOS...` while the
labo page stays `Bios...`, a difference you only see when you lay the two side by side.

**A hoorcollege is a deck that becomes a handout.** One `.html` per session under `Hoorcollege/`,
one `<section class="slide">` per slide; `import-slides.py` converts a pptx once and after that the
HTML is the source, so a second run throws away every correction made by hand. The decks are in
`~/OneDrive - Hogeschool Gent/EDU/2025-2026/Industriële computers en embedded systems/Theorie/Les N/`.
**There are five, not six**: `Les 6/` is empty. Les 1 also holds an `- oplossing.pptx`, which is the
same deck with the answers filled in and is not the one to import.

## The content check

[`scripts/check-content.py`](scripts/check-content.py) is the single "is this repo publishable"
check. Run it before finishing any content edit; a `Stop` hook in
[`.claude/settings.json`](.claude/settings.json) also runs it. Its docstring lists the sixteen rules.
Two fail *silently* otherwise: **case** (Pages is case-sensitive, Windows is not) and **manifest
completeness** (a theory page missing from `reference.js` is unreachable from the hub and earns no
read-flag, and nothing about it looks wrong in a browser).

[`scripts/check-nav.js`](scripts/check-nav.js) covers what only exists after `back-link.js` has run.
It needs `npm install jsdom` and is deliberately **not** in the `Stop` hook: that must keep working
on a clean checkout with nothing installed. Run it whenever you move a page between folders, rename
one, or touch `back-link.js` or `reference.js`.

**One rule was changed on the way over from DeN, and it is the only one.** An empty manifest and a
broken manifest both parse to zero modules, and DeN failed on both with "geen enkele module
gevonden". A manifest that does not parse still fails, because rules 2 and 3 hang off that parse and
a broken regex would make every check under it vacuously green; a `window.LAB_REFERENCE` that is
literally `{}` is a warning instead. Both branches were verified by putting a broken manifest back.

## Prose style

[`SCHRIJFSTIJL.md`](SCHRIJFSTIJL.md), copied from DeN, is the single source of truth for how the
Dutch reads. All content in Dutch, students addressed with **`je`**. No em-dashes, which is the one
style rule the check enforces.

Two patterns carry over exactly and are worth naming: **patroon 17** (a page may not rely on another
lab, because the labs are independent modules and you do not know which ones a student has done) and
**patroon 18** (a page never refers to the history of the course material itself, which is precisely
the kind of sentence you write while migrating).

**Patroon 20 was written here**, out of the first style round: a term is used only after the student
has met it, the order that counts is the Orion menu, and where the text already has a name for the
thing, that is the word. It is the kind of sentence you write once the whole module is in your head.

**Patroon 12 gained this course's own vocabulary on 6 September 2026**, confirmed by the lecturer: a
lesgever is a **lector** and never a docent, a result is a **punt** and never a cijfer, and beside
those the site already says labo, indienen and test. The list is there because it fails silently:
`cijfer` stood on `Algemeen/Evaluatie.html` and on `Labo/Assemblage/overview.html` while every other
page said `punt`, and nothing but a reader catches that. Two of the words keep a second meaning that
stays (a `toets` on a keyboard, a `cijfer` as a digit), so grep the sense and not the string.

**The list went from 22 patterns to 16** in that same round, by folding six into the pattern each
already pointed at. No test was lost and the surviving numbers did not move, because a pattern is
cited by its number here and in DeN and Microcontrollers; `SCHRIJFSTIJL.md` carries the table of
where the six went. It also gained one rule above the list, in *Wat blijft*: every pattern is
negative, so a rewrite that drops a fact scores better on all sixteen, and after each rewrite you
ask which fact is gone.

Labo Assemblage and both `Algemeen/` pages had a full style round on 4 September 2026, and its diff
is the reference for what counts as factual here. The examples inside `SCHRIJFSTIJL.md` itself still
name DeN pages.

Filenames are **PascalCase Dutch nouns**: `Partitietabel.html`, `Opdracht.html`. The exceptions are
the two hub filenames, `overview.html` and `reference.html`, which the engines match on.

## The six modules

Approved on 4 September 2026, together with the assignment split below. These names are settled: a
module id is the folder name in lower case and it is also in the `localStorage` key, so renaming one
wipes the read-flags of every student who has already been in it.

| Folder | Theory pages | Spiekblad |
|---|---|---|
| `Labo/Assemblage/` | Veiligheid, Componenten, BiosUefi, TestJezelf | no |
| `Labo/Virtualiseren/` | WatIsVirtualisatie, VirtueleHardware, SchijfEnGeheugen, SoftwareInDeGuest, TestJezelf | no |
| `Labo/Partitioneren/` | Partitietabellen, Bestandssystemen, Spiekblad, TestJezelf | yes |
| `Labo/LinuxBasis/` | LinuxEnDistributies, DeTerminal, CommandoEnOpties, DeBestandsboom, GebruikersEnRechten, Spiekblad, TestJezelf | yes |
| `Labo/LinuxGeavanceerd/` | GebruikersEnGroepen, Rechten, SoftwareUitDeRepository, SoftwareBuitenDeRepository, Docker, Spiekblad, TestJezelf | yes |
| `Labo/EmbeddedSystems/` | WatIsEenEmbeddedSystem, RaspberryPiInstalleren, PiOpHetNetwerk, AlsHetNietLukt, CodesysInstalleren, CodesysProject, Docker, NodeRed, MqttBroker | yes |

**The row for Linux Basis was rewritten on 7 September 2026, and it is the only one in this table
that no longer names commands.** The approved list put the commands themselves on seven theory
pages, and writing the module showed that they are a stappenplan and not theory; the reasoning is
under "Labo Linux Basis" below, and the same test still has to be applied to the two rows under it.
What stayed is the grouping: 23 command pages become five theory pages and eight stappenplan pages.
The two labs without a spiekblad are the two with no commands in them: Assemblage is hardware and
Virtualiseren is a GUI. Partitioneren is a GUI too, and its spiekblad is a table of partition kinds
and their limits rather than of commands, which is what a student there keeps looking up.

**Every lab closes its theory reeks with a `TestJezelf.html`**, added to Assemblage on 4 September
2026 and to be written for the other five. It is a category `Zelftest` in the `theorie` reeks, not
one of its own: the zelftest is the last step of the theory, so the last theory page pages into it
and the nav row reads "Theorie 4 / 4". A reeks of its own would put it behind a button nobody
clicks.

**It is multiple choice only, and that is the point.** Every lab is assessed with a Brightspace test
that is meerkeuze met giscorrectie, so a zelftest in another form prepares for a test that does not
exist. The distractors are the misreadings the theory pages already correct (that the chipset
decides which processor fits, that dual channel adds the capacities together), so a wrong answer
sends the student back to a paragraph rather than to the whole page. Each answer therefore ends in
"Zie &lt;a href&gt;", which is a link inside the same reeks and so allowed by rule 10.

**The answer letter is written by hand**, in the `spoiler-container` markup DeN's four labo
zelftests use, and not through `oplossingen.js`. That is a deliberate choice and the trade-off is
real: `oplossingen.js` counts the letter off the position of `class="juist"`, so reordering two
options can never produce a wrong answer, while a written "Antwoord c." can. It is also the only
mechanism the syllabus may use, and rule 14 checks nothing outside `Theorie/Syllabus/`. If you
reorder the options of a labo zelftest, the letter is yours to fix.

**One submission is one folder and one Orion menu entry.** Three of the six labs hand in more than
once, and each dropbox gets its own `Opdracht.html` with its own verslag docx, the way
`Labo/ManagedSwitch/` does in DeN. A module with several assignments therefore has more than four
menu entries, and `Theorie/` stays a sibling of all of them because the theory is what they share.

```
Labo/Assemblage/Inventaris/Opdracht.html          Labo/LinuxGeavanceerd/Chmod/Opdracht.html
Labo/Assemblage/BiosUefi/Opdracht.html            Labo/LinuxGeavanceerd/Chown/Opdracht.html
Labo/Assemblage/InstallatieOs/Opdracht.html       Labo/LinuxGeavanceerd/Chgrp/Opdracht.html
Labo/EmbeddedSystems/InfoRaspberryPi/Opdracht.html
Labo/EmbeddedSystems/CodesysDemonstratie/Opdracht.html
```

Two consequences DeN paid for and this repo inherits, both of which failed silently there: a page is
matched on its **resolved path** and not on its filename, so two `Opdracht.html` in one module cannot
answer to each other's manifest entry, and the **manifest decides what is in the reading sequence,
not the folder**, so a page outside `Theorie/` still gets a forward link and a read-flag when
`reference.js` lists it. Both are covered by `scripts/check-nav.js` and by nothing else.

`InfoRaspberryPi` reads like a page and is a real assignment: the student fills in the hostname,
the username and the `os-release` of the image he just built, and hands that in. It is a dropbox in
Brightspace for exactly that reason.

**`Algemeen/Planning.html` and `Algemeen/Evaluatie.html` both exist**, and they carry four decisions
taken on 4 September 2026 and three more on 6 September 2026. Rule 9 sends every hub to them, so a hub may name the *form* of an
evaluation and never a percentage.

- **The final mark is 40% theory and 60% labs.** That is the denominator; the percentages on
  `Evaluatie.html` are within one lab.
- **Virtualiseren and Partitioneren produce one mark**, 50% for the opdracht and 50% for the test,
  and the test covers both labs. The export contradicted itself here (Virtualiseren said 30/70), and
  50/50 is the one that holds.
- **Embedded Systems is assessed for 2 AUTO only.** The red warning in the export is current, not a
  leftover. What the other programmes do with that lab is still open.
- **The planning is per student**, so `Planning.html` carries no timetable and no dates. It names the
  document that does, `PlanningLabo20262027`, and nothing more: that document is visible in the Orion
  content tree, it gets no link (its URL changes every time the lecturer replaces it) and **no copy
  here**, because it lists students by name, carries a `Pronouns` column, and everything under
  `tdmts.github.io` is public. What the page does carry is the campus rule and what a deadline moment
  is: you come to have your work checked, not to work on it. Corrected on 6 September 2026 against
  the document itself. The two deadlines the page used to hold (demonstrate by the last lab session,
  tests open until the end of the semester) are gone, because the document is what counts; the test
  grens moved to `Evaluatie.html`, which now says a test is taken by the deadline of that lab.
  Reading the document also settled that `(campus)` beside a lab there means the session happens on
  campus, not that the lab must be made there: only Assemblage + BIOS/UEFI must.
- **Linux Basis and Linux Geavanceerd produce one mark**, one test over both labs, the same shape as
  Virtualiseren and Partitioneren. Decided 6 September 2026, so `Evaluatie.html` holds one row for
  the two labs.
- **A test is not described as open boek.** Decided 6 September 2026, and the reason is one-way:
  loosening a rule later is possible, tightening it is not. The phrase stood on four pages
  (`Evaluatie.html` twice, the evaluatiebox of Virtualiseren and of Partitioneren) plus Assemblage,
  and it is gone from all of them. `_incoming/` may still carry it, so do not copy it back in.

Two couplings came out of the export and were never confirmed. **The first is now confirmed by the
opgave itself**: `Opdracht partitioneren.docx` opens with "Tijdens het labo Virtualiseren heb je
Ubuntu Linux geïnstalleerd op een Virtuele machine. Alle opdrachten die je nu moet uitvoeren gebeuren
op die Virtuele Ubuntu machine", so the graded work of Partitioneren needs the machine that
Virtualiseren builds. That is a hard dependency between two modules the students rotate through
independently, and **it is the one place where this repo breaks patroon 17 on purpose**, because the
opgave leaves no other reading. Both `Labo/Partitioneren/overview.html` and its `Opdracht.html` name
labo Virtualiseren once, as a material requirement and not as assumed knowledge. Whether the two
labs are always scheduled back to back is a question for the lecturer, not for the pages. **The
second coupling is now confirmed too**, by `PlanningLabo20262027` and by the lecturer: every student
in that document has one shared "Deadline Linux Basis + Geavanceerd" in the last lab session, and one
test covers both labs.

The table on `Evaluatie.html` links only the labs that exist. Add the link when a module lands: rule
1 fails on a link to a page that is not there yet, which is what keeps that table honest. The row
"Virtualiseren en Partitioneren" now links both halves.

## Where the content comes from

The Brightspace export (`D2LExport_15211_OON-PBAEM-206743-2627_20269402`) holds the current course:
189 items in `imsmanifest.xml`, 117 pages in `migration/paginas/`, 281 images, 6 documents, 3
lesopnames. [`scripts/import-brightspace.py`](scripts/import-brightspace.py) stages it into
`_incoming/`, one raw page per topic, with every image and document pulled out into `img/` and
`datasheets/`. It reads a `.zip`, so an unpacked export gets zipped first.

```
python scripts/import-brightspace.py <export>.zip --fetch-remote
```

That run staged **133 topics** (122 pages and 11 assignment descriptions), 289 image references into
230 files and 13 documents.

**Drive the import from `imsmanifest.xml`, never from the file listing.** The export dumps the org
unit's entire Manage Files area, which fills up on every Course Copy and never empties. Here that
costs nothing: 10 of the 117 pages are 988-byte empty stubs (`Labo.html`, `Theorie.html`,
`Terwijl je wacht....html`, `Software installeren.html`, `GParted Live gebruiken.html`,
`Gebruikers groepen en rechten.html`) that no `<item>` references, and the manifest walk skips all
ten for free. Unlike DeN's export there are **no `- Copy` duplicates** and no other course's files.

Four things about this export that DeN's did not have, and every one of them fails quietly:

- **`rCode` is capitalised on some quicklinks and not others.** D2L writes `rcode=` on a topic made
  in the editor and `rCode=` on one that came out of a Course Copy, in one and the same manifest.
  DeN's `QUICKLINK_RE` was case-sensitive, so it matched 6 of this export's 16 quicklinks, and the
  five dropboxes among the other ten (virtualiseren, Linux basis, chmod, chown, chgrp) were reported
  as "skipped" rather than staged, with one line in the summary saying a link was not understood.
  The regex now carries `re.I`. This is the one change to the importer beyond rewritten DeN strings.
- **The three lesopnames are in the export twice, and the manifest keeps the right copy.**
  `migration/lesopnames/` holds `Demontage`, `Assemblage` and `BIOS`, each a bare Panopto iframe,
  and no `<item>` references any of them. The same three recordings are embedded in the three pages
  the manifest *does* carry (`Demontage`, `Assemblage`, `BIOS/UEFI omgeving openen`), on the same
  three Panopto ids (`df19b7cf`, `d2e5a5cb`, `2d82f06b`). The standalone files are the leftover, the
  pages are the course. Check the ids before concluding either way; the id is the only thing that
  says whether two files are the same recording.
- **`embedded/` is a second, better copy of Labo Embedded Systems.** It appears as its own top-level
  org unit ("Labo: embedded systems", lowercase) and holds eleven pages that were rewritten by hand:
  clean `<div class="container">` markup instead of the chamilo wrapper, no `&nbsp;` padding, and in
  one case far more content (`(ze)nmap.html` is 20 KB against the 4.5 KB of the
  `migration/paginas/` version of the same subject). It covers eleven of that module's twenty-six
  topics. **Prefer it where it exists**, fall back to `migration/paginas/` for the rest. The
  overlapping pairs are inleiding/Inleiding, Image/Image branden, firststart/Eerste opstart,
  macaddress/mac adres, 4. help/Help! Het lukt niet, (ze)nmap/mac-adres → ip-adres, and codesys
  0 to 4 against CODESYS Control for Raspberry Pi, Add-Ons, firmware installeren, project and verie
  nummers & problemen.
- **58 of the 281 images are referenced by no page.** Eleven of them sit in the id range of the
  chmod, chown and chgrp pages, so they most likely belong to the docx attached to those three
  dropboxes rather than to a topic. The importer only writes what a page actually references, so
  `img/` holds 230 files and not 281; the rest stay in the export.

**The assignments themselves are not in the export, and nothing says so.** A dropbox in
`dropbox_d2l.xml` carries its opgave as an `<attachment_set>`, and for eight of the eleven that is a
SharePoint `<link>` to a docx on the lecturer's own OneDrive, not a file in the zip. The staged page
in `_incoming/` then reads "Vertrek vanaf de opgave die je op deze pagina kan downloaden" with no
document anywhere near it. Only chmod, chown and chgrp ship a real file, under
`_attachment_dropbox/196` to `198`.

The docx are on disk at
`~/OneDrive - Hogeschool Gent/EDU/2026-2027/Industriële computers en embedded systems/Labo/`, one
folder per lab (`Labo 1 Assemblage BIOS UEFI` to `Labo 6 Embedded systems`), each holding the opgave
and nothing else. That folder is where the `<!-- verslag -->` block of an `Opdracht.html` comes from,
so open it before writing one. **`Labo 5` and `Labo 6` are empty**, so the opgaven of Linux
Geavanceerd and Embedded Systems still have to come from somewhere.

The **2025-2026** folder beside it is the previous academic year, it is incomplete (it has no
Virtualiseren folder at all), and every opgave in it sits beside its `- oplossing` twin. Use it only
where 2026-2027 has nothing, and **read the opgave, never the oplossing**: the solutions are assessed
work and stay on Brightspace.

`--fetch-remote` is the one flag that touches the network. Several pages hotlink their screenshots
to `chamilo-downloads.hogent.be`, the platform this course lived on before Brightspace, through URLs
with an expiring `security_code` and no file extension. It works only while that server is up, and
it pulled five images in. Three refs stayed unresolved and are third-party pictures a page borrowed
(a blog, two webshops); they are not worth self-hosting and the pages that use them need their own
artwork.

**Solutions and quizzes stay on Brightspace.** The six oplossing PDFs and the three Brightspace
quizzes are assessed work, so they are deliberately absent here and the site refers to them in words
without a link. The importer stages a PDF that hangs in the module tree, so those six landed in
`datasheets/` on the first run and were deleted again; do not add them back. Two other files were
removed for a different reason: `ICEES Syllabus 20250912.pdf` and `les 1 - handouts.pdf` are both
things this repo generates itself, and a derived file may not have a second copy.

**The lesopnames are Panopto embeds behind the HOGENT login** and cannot be self-hosted. Whether
such an iframe plays from Pages inside the Orion iframe is **not settled**. What is known: Panopto
sends neither `X-Frame-Options` nor a `frame-ancestors` policy, so nothing blocks the framing
itself, and `Embed.aspx` redirects to `EmbedLogin.aspx` for a session. The risk is the session, not
the frame: the chain is Orion → our page on `tdmts.github.io` → Panopto, so the cookie is a
third-party cookie two levels deep, and Panopto's own `p3p` header says as much. That is fine in
Chrome today and blocked outright in Safari and Firefox.

**So a lesopname is a link, not an embed**: `target="_blank"` to `Viewer.aspx?id=<id>`, the same
treatment a PDF already gets, and for a second reason that holds regardless of cookies, which is
that a 720×405 player inside the narrow Orion iframe is unreadable. The three ids are
`df19b7cf-8390-41c1-81fd-b1e800a1cb6a` (Demontage), `d2e5a5cb-ce88-4a1d-91fb-b1e800a47a0e`
(Assemblage) and `2d82f06b-33e4-4c62-a685-b1e800a68d7d` (BIOS/UEFI). Never carry the `Embed.aspx`
iframe across from the Brightspace page: it renders as an empty frame under Safari's ITP with
nothing failing.

**A lesopname hangs on the opdracht, not on the theory.** It shows the work being done, so it
belongs beside the assignment that has the student do it, and a theory page that names a recording
sends him to a menu entry he is not in. Corrected on 4 September 2026: the three ids sat on
`Theorie/Demontage.html`, `Theorie/Assemblage.html` and `Theorie/BiosUefi.html`, and they now sit on
`Inventaris/Opdracht.html` (demontage and assemblage) and `BiosUefi/Opdracht.html` (BIOS/UEFI). Do
the same for the remaining modules.

**A theory page whose subject is a procedure the recording shows does not survive that move.**
`Theorie/Demontage.html` and `Theorie/Assemblage.html` were both a numbered list of the same steps
the opname demonstrates, so they were deleted rather than trimmed, and Assemblage's theory reeks is
now Veiligheid, Componenten, BiosUefi. `Theorie/BiosUefi.html` stayed: what it carries (BIOS against
UEFI, the POST, MBR against GPT, and the difference between the opstartvolgorde and the bootmenu) is
in no recording, and `BiosUefi/Opdracht.html` asks about that last one by name. The test to apply to
the other five modules is that one, not "did a recording move away from here".

What moved off those two pages rather than being dropped: photographing the front-panel cables
before they come off and the walk-through of the connections before a lecturer is called, both to
`Inventaris/Opdracht.html`, and `CPU_FAN` and dual channel to `Theorie/Componenten.html`. What went
with the pages: the two ordered lists of steps, the pea of koelpasta, the notch in a memory module,
the AM4 lever, and how you seat a processor in its socket, which is the one below.

**The processor stays in its socket and the cooler stays on it.** Demontage stops at the
motherboard. The opgave only ever implied this, in one line of the inventaris docx ("de ventilator
en koelvin mag je er op laten"), and this repo had turned that into its opposite: the deleted
`Theorie/Demontage.html` told the student to take the cooler off and lift the processor out, and
`Theorie/Veiligheid.html` explained how to hold a loose processor. Corrected on 4 September 2026 by
the lecturer. It is now a rule in two places, because a student in the Opdracht entry has not
necessarily read the Theorie entry: an info-box on `Theorie/Veiligheid.html`, where the labo
afspraken live, and one on `Inventaris/Opdracht.html`, beside the photo of the processor. The two
reasons are the koelpasta that lifts the processor with the cooler and the AM4 pins that bend under
a finger; both are in the Veiligheid box.

Restored in the same pass: each of the three verslag blocks says again that the photo with the
studentenkaart is the proof the opdracht was made in the lab. The original docx said so beside
every one of the three, and all three had lost it.

## De volgorde binnen het menu-item Opdracht, beslist 8 september 2026

**Een reeks `opdracht` heeft twee soorten, en ze verschillen in waar de downloadknop hoort.** Bij de
ene vult de student het document in TERWIJL hij het stappenplan doorloopt; bij de andere is het
stappenplan een begeleide oefening en doet hij het werk dat hij indient DAARNA, zelfstandig. Lees dat
af aan de eerste alinea van het `<!-- verslag -->` blok: zegt die "Vul dit document aan terwijl je de
oefening maakt", dan is het de eerste soort.

| Reeks | Soort | Wortel |
|---|---|---|
| Virtualiseren | document invullen tijdens de oefening | `Opdracht.html` |
| Partitioneren, Linux Basis, Chmod, Chown, Chgrp | begeleide oefening, daarna zelfstandig | `Overzicht.html` |
| Assemblage (drie opdrachten) | geen stappenplan op de site | `Opdracht.html` |

**Bij de tweede soort is `Opdracht.html` de LAATSTE pagina van de reeks en niet de eerste.** Tot 8
september 2026 was ze overal de wortel, dus wie in Orion op Opdracht klikte, kreeg eerst het document
dat hij moet invullen en pas daarna de oefening die eraan voorafgaat. Bij Linux Basis is dat een
echte fout en geen kwestie van smaak: de acht stappenplanpagina's bouwen een toestand op de machine
op (mappen, bestanden, een archief) en het verslag vertrekt daarvan.

**De wortel heet daarom `Overzicht.html`, en de naam is het hele trucje.** Elk script in deze repo
grijpt op de bestandsnaam `Opdracht.html`: `opdracht_paginas()` in `check-content.py` (waar regel 6,
8 en 11 aan hangen) globt erop, en `export-verslag.py` leest `module / "Opdracht.html"` hard. Laat je
die naam op de laatste pagina staan en zet je er een pagina onder een ANDERE naam voor, dan verandert
er aan de scripts niets. Het omgekeerde (de laatste pagina hernoemen naar `ZelfstandigeOefening.html`)
kost een scriptronde en levert hetzelfde op. `topic_van()` stuurt allebei naar het menu-item Opdracht,
want ze staan los in de modulemap, dus het blijft een enkel Orion-topic en er verandert niets in
Orion. `back-link.js` leidt de wortel af uit de eerste manifestregel van de reeks en niet uit de
naam. Dezelfde vorm die `SoftwareInstalleren/Overzicht.html` al had.

**Wat op zo'n `Overzicht.html` hoort, is wat te laat komt als het achteraan staat.** Concreet de
materiaalvereisten en de waarschuwingen: welke machine je nodig hebt, welke opdracht je eerst
afgewerkt moet hebben, en dat de pagina's op elkaar voortbouwen. Die kaders stonden op `Opdracht.html`
en zijn mee naar voren verhuisd. Wat op `Opdracht.html` blijft, is de lead, de downloadknop, het
verslagblok, en een waarschuwing die pas NA de opdracht geldt (bij Chmod: laat de gebruikers staan,
want chown en chgrp werken erop verder).

**En de lead van `Opdracht.html` beschrijft dan alleen nog het zelfstandige deel.** Ze komt op de
eerste bladzijde van het verslag terecht (regel 8), dus ze moet daar op zichzelf leesbaar zijn: geen
"Daarna maak je op diezelfde machine ...", want er staat in het document niets voor. Bij Partitioneren
en Linux Basis dekte een enkele lead allebei de delen en is ze in tweeen geschreven.

**Regel 12 ziet die nieuwe leads niet, en dat is een gat.** `leadpaginas()` kijkt naar
`overview.html`, `Theorie/reference.html` en elke `Opdracht.html`, dus de vijf leads van een
`Overzicht.html` (en die van `SoftwareInstalleren/Overzicht.html`) worden met niets vergeleken. Twee
introducties van hetzelfde labo mogen elkaar nog altijd niet navertellen; hier bewaakt alleen je
eigen lezing dat. Zelfde soort stille bewaker als regel 11.

**Een stappenplanpagina die afsluit met "ga terug naar de eerste pagina" liegt na deze wissel.** Drie
deden dat (`Partitioneren/GptPartities.html`, `LinuxBasis/ArchiverenEnAfsluiten.html`,
`LinuxGeavanceerd/Chmod/Opruimen.html`) en wijzen nu vooruit. Geen enkele regel valt daarover: de link
bleef binnen hetzelfde menu-item, dus regel 10 zwijgt, en de zin bleef grammaticaal. Grep na een
herordening op "eerste pagina", "hierboven" en "terug naar".

**Apostrof in een blurb, opnieuw.** `'de acht pagina's hierna'` brak `reference.js` bij het inlezen
met node en zou regel 2 stil half hebben afgekapt. Twee blurbs zijn erom herschreven. Zie ook de
noot bij Labo Linux Basis: geen enkel veld in een manifestblok draagt een apostrof.

## Labo Virtualiseren, written 4 September 2026

**The theory reeks holds begrippen, the opdracht reeks holds the click-through**, and that split is
the one thing to carry to the other four modules. The approved table named five theory pages, three
of which turned out to be a numbered list of the steps the student performs (the wizard of
VirtualBox, the twelve Ubuntu-installatieschermen, the Guest Additions installer). That is exactly
what got `Theorie/Demontage.html` and `Theorie/Assemblage.html` deleted in Assemblage, and the same
test applies where no lesopname exists to move the procedure to.

So the walkthrough did not disappear, it moved menu entries. What came off it and stayed behind is
the *why*, on two pages written for it: `Theorie/VirtueleHardware.html` (de
virtualisatie-uitbreiding van de processor, EFI, het ISO-bestand, de drie manieren om te stoppen) and
`Theorie/SoftwareInDeGuest.html` (proprietary software, en waarom Guest Additions op je eigen kernel
gebouwd wordt). Those two carry the three questions the verslag asks, so the zelftest keeps citing
theory pages only, and no answer in it links sideways.

```
Theorie (reeks theorie)          Opdracht (reeks opdracht)
  Theorie/reference.html           Opdracht.html          <- root of the reeks
  WatIsVirtualisatie                 VirtueleMachineAanmaken.html
  VirtueleHardware                   InstallatieUbuntu.html
  SchijfEnGeheugen                   GuestAdditions.html
  SoftwareInDeGuest
  TestJezelf
```

**The three stappenplan pages sit loose in the module folder, and that is not cosmetic.**
`topic_van()` in `check-content.py` reads the Orion entry off the *path*: a page in a subfolder
answers to that folder's name, and what lies loose in the module folder is the opdracht. A folder
`Opdracht/` beside `Opdracht.html` therefore reads as two different menu entries (`Opdracht` against
`opdracht`) and rule 10 would fail on any link between them, while they are one entry. DeN's
`ManagedSwitch/PacketTracer/` escapes that only because its `Opdracht.html` lives *inside* the
folder, which is what a lab with two submissions needs and this one does not.

**A stappenplan page links to theory with `target="_blank"`**, which is what rule 10 leaves open and
what DeN already does for its Packet Tracer exercises: je kijkt het na terwijl je bezig bent. There
are five such links and they all point at an `id` on a theory page.

`WatIsVirtualisatie.html` **has no source in the export.** The three doelstellingen it answers (why
virtualisation saves money, two programs that run a VM, one advantage and one disadvantage) are
covered by the syllabus chapters *Server*, *Virtual machines* and *Containers*, and the page was
written from those. When that chapter is imported into `Theorie/Syllabus/`, the two texts will say
the same thing twice, in the two tracks, and that is what patroon 17 asks for: a labo may lean on the
theory track but may not send the student there.

**Host and guest are swapped in the source material, in two places.** The staged
`022-werkgeheugen-aanpassen-2.html` writes "de host computer (= VM)" and "de guest computer (=
fysieke machine)", and a kernpunt in the syllabus Word says "op één fysieke guest machine kan je
meerdere virtuele host machines draaien". The host is the physical machine and the guest runs on it;
both pages here say so. **That kernpunt is kernpunt 2 of chapter 8, and it was fixed on 7 September
2026 when that chapter went in**, together with kernpunt 4, which swapped the two the same way. No
other chapter carries the inversion; chapter 5 was checked and does not. Both corrections are manual,
so a re-import undoes them and NOTITIES.md records them.

**The opdracht is one dropbox and one docx**, so `Labo/Virtualiseren/Opdracht.html` sits directly
under the module. Unlike the three Assemblage verslagen, that docx asks for **no photo and no
screenshot**: it is two invultabellen (versienummers, and the parameters of the VM) and three open
questions (EFI, `.iso`, proprietary software). The proof that the work was done is the demonstration
in the lab, which `Algemeen/Evaluatie.html` already carries, so nothing here invents a foto met
studentenkaart the way Assemblage has one. One question was added that the docx does not have:
motiveer de gekozen waarden, because doelstelling 5 asks for exactly that.

`Algemeen/Evaluatie.html` now links the word Virtualiseren in the row "Virtualiseren en
Partitioneren". The other half of that row got its link when `Labo/Partitioneren/` landed.

## Labo Partitioneren, written 5 September 2026

Same split as Virtualiseren, and this is now the second module to confirm it: **the theory reeks
holds begrippen, the opdracht reeks holds the click-through.** Four of the five approved theory
names (`GPartedStarten`, `PrimairePartities`, `ExtendedEnLogisch`, `GptPartities`) were a numbered
list of steps the student performs in GParted, so they moved to the opdracht reeks as stappenplan
pages. What came off them and stayed behind is the why.

```
Theorie (reeks theorie)          Opdracht (reeks opdracht)
  Theorie/reference.html           Opdracht.html          <- root of the reeks
  Partitietabellen                   Oefenmachine.html
  Bestandssystemen                   MbrPartities.html
  Spiekblad                          ExtendedEnLogisch.html
  TestJezelf                         GptPartities.html
```

**Two theory pages, not one.** The approved table named `Partitietabellen` and nothing about
bestandssystemen, and doelstellingen 1 and 3 (sector, cluster, journaal, two filesystems for Windows
and two for Linux) then had no page to live on. `Bestandssystemen.html` was written from syllabus
chapter 6, which covers all of it; the two texts will say the same thing twice once that chapter is
imported, and that is what patroon 17 asks for. `Partitietabellen.html` carries what the syllabus
does *not* have: the four tabelplaatsen of MBR, the extended/logical detour, the 128 entries of GPT
and the `/dev/sdaN` numbering. Chapter 6 mentions the primary/logical/extended distinction in one
kernpunt and never explains it.

**The spiekblad is four tables and no commands.** Partitioneren is a GUI, so what a student keeps
looking up is MBR against GPT, the three partition kinds and their limits, the Linux disk and
partition names, and the maximum partition and file size of each filesystem. It sits between the
theory pages and the zelftest in the theorie reeks, so the zelftest stays the last step.

**The stappenplan is an exercise, and the graded opdracht is somewhere else.** The four pages under
the opdracht reeks work on an oefenmachine with two empty 10 GB disks that boots straight from
GParted Live, and nothing on it is handed in. The docx works on the Ubuntu machine from labo
Virtualiseren: shrink the root partition by 500 MB, add a FAT32 partition named after the student,
boot back into Ubuntu and find it. Four screenshots, no photo, no studentenkaart; the proof is the
demonstration in the lab, the same as Virtualiseren.

**Two questions were added that the docx does not have**, both for doelstelling 4 (een verantwoorde
keuze maken wat betreft de partitietabel en het bestandssysteem): which partition table the Ubuntu
disk carries and how you see that in GParted, and why FAT32 works here and what limit you accept
with it. Without them nothing in the module asks the student to justify a choice.

**GParted runs in Dutch in this lab** (taal Dutch 06, mode 0), so the pages use the words on the
screen: `ongebruikt` and not unallocated, `Uitgebreide partitie` and not extended in the dialog.
The theory page names the thing `extended`, because that is how the partition type is called
everywhere else.

**The two theory pages carry eight figures, and seven of them are drawn here.** The abstract claims on
these pages (512 bytes split into 440 + 64, four ingangen of 16 bytes, an extended partition holding
logical ones, the jump from `sda3` to `sda5`, eight sectors under one cluster address, a write
passing through the journal) had no picture anywhere, so they became SVG files in `img/`, prefixed
`partitioneren-`. **This is the repo's first SVG**, and it works because `figure-zoom` only needs an
`<img>`; `check-content.py` does not care about the extension. They use the OrionCSS palette
(`#004d40` primary, `#222` body, `#e0e7e5`/`#b2dfdb` fills) and a `Segoe UI, Helvetica, Arial,
sans-serif` stack, because an SVG inside an `<img>` is isolated and reaches neither the site's CSS
nor a webfont. OrionCSS has no dark mode, so they are drawn on white.

**Render an SVG before you believe it.** Nothing here does layout, so overlapping text fails
silently in the file and only shows on screen. Two of the five had a label sitting under a leader
line or on top of a hatch pattern. Headless Edge is enough and needs no install:

```
& "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" --headless --disable-gpu `
  --window-size=740,360 --screenshot=out.png "file:///<pad>/img/<naam>.svg"
```

The same command with `--virtual-time-budget=6000` and a tall window screenshots a whole page,
OrionCSS and `back-link.js` included.

**One figure comes out of the syllabus Word**, extracted from `word/media/` and copied to `img/` as
`partitioneren-schijfbeheer-windows.png` (image47, Schijfbeheer met System Reserved, C: en DATA).
When syllabus chapter 6 is imported, `import-syllabus.py` writes its own copy as
`img/syllabus-06-*.png`, so that picture will be in `img/` twice under two names. That is
deliberate: the two tracks are independent and a labo page may not depend on a syllabus page
existing.

**Two more came out of that Word and were redrawn on 6 September 2026**, which is the test to apply
to any picture taken from the syllabus. Image48 (fragmentatie) was three unlabelled RGB bars, and
image49 (first, worst en best fit) was a whiteboard sketch whose arrows ran from the candidate
blocks to the file instead of the other way round, with the three abbreviations sitting above the
gaps rather than above the blocks they name. Both now say in the picture what the paragraph beside
them says in words: `partitioneren-fragmentatie.svg` carries the sizes that make the split
inevitable (a file of 180 MB, a gat of 100 MB, 80 MB verderop), and
`partitioneren-first-best-worst-fit.svg` draws the four vrije blokken to scale and puts the file
itself inside the block each algorithm picks, so what stays free is a strip you can see rather than
a number you have to believe: wide at worst fit, four pixels at best fit. That last step came out of
a second look at the drawing, and it is the test for any figure here, that the claim of the
paragraph beside it is *shown* and not captioned. The bracket over the leftover is `#c0392b`, the
same red that annotates the slack in `partitioneren-cluster-en-slack.svg`, because both mark the
part of a block that stays unused. A picture out of the Word is usable only when it is legible on
its own; check that before you copy it, the same way you check the watermark. **One image in that
chapter is unusable** and was left behind for the labo: image51 is a screenshot of a YouTube player,
with its title bar, its play button, its `0:00 / 2:20`, an HD badge and the presenter's pen tip in
shot. Check the watermark before you copy a picture out of the Word.

**Three claims that stood here about that chapter's images were wrong, and were corrected on 7
September 2026 by opening all eight.** image93 is not in chapter 6 at all but in chapter 11, Harde
schijf, where it turned out to be the How Stuff Works drawing of 11.2 (the loop is closed). image46 is not a loose product photo: it is one of the three cells of a comparison table in
6.1 that puts a mechanical 3.5" disk, a 2.5" SSD and a 1.8" M.2 SSD side by side, and the syllabus
uses all three. And image50 is not a screenshot with browser chrome: it is a clean before-and-after
drawing of defragmentation with a legend under it and no watermark, whose only faults are that it
is entirely in English and that 790 pixels on 160.0mm is 125 dpi. Open the file before you write
down what is on it.

**Wikimedia Commons was considered and not used.** `File:GUID Partition Table Scheme.svg` is the
obvious candidate and it is CC BY-SA 2.5: usable, but it labels its blocks in English with LBA
offsets, which is a level of detail this page does not carry, and share-alike puts an obligation on
a course site for a diagram we can draw in Dutch in twenty lines. Where a picture has to match a
paragraph word for word, drawing it wins; that is also what `Where the content comes from` already
says about the three unresolved third-party refs.

**The screenshots were read before they were described.** The source pages say "NTFS" where the
image shows `/dev/sda1 ntfs Windows OS` next to `/dev/sda2 fat32 Data`, and the GPT screenshot of
`gpt-partities-aanmaken` has `/dev/sda` in its title bar while the text says to work on
`/dev/sdb`. Open the PNG before writing a figcaption; three of the eight captions here would have
been wrong otherwise.

## Labo Linux Basis, written 7 September 2026

**Third confirmation of the split, and the first one that is countable in the source.** Theory
carries the begrippen, the opdracht reeks carries the click-through. The approved table put the
commands themselves on seven theory pages, and the 23 staged pages of the begeleide oefening turn
out to be one state machine: `backup` is filled on the cp page before `a.txt` is renamed on the mv
page, so the `ls -alh` on the rm page shows `a.txt` and not `d.txt`; `find` on the second-to-last
page turns up `todo.txt` in `Desktop/3auto/`, where the mv page moved it two pages earlier. Read as
theory, half those sentences are nonsense. That is the test to apply to Linux Geavanceerd and
Embedded Systems, and it is sharper than the one Virtualiseren and Partitioneren used: not "is this
a numbered list of steps" but "does this page depend on what the previous page left behind".

```
Theorie (reeks theorie)          Opdracht (reeks opdracht)
  Theorie/reference.html           Opdracht.html          <- root of the reeks
  LinuxEnDistributies                TerminalOpenen.html
  DeTerminal                         Navigeren.html
  CommandoEnOpties                   MappenEnBestanden.html
  DeBestandsboom                     Kopieren.html
  GebruikersEnRechten                VerplaatsenEnVerwijderen.html
  Spiekblad                          SchijfruimteEnZoeken.html
  TestJezelf                         ProcessenEnUitvoer.html
                                     ArchiverenEnAfsluiten.html
```

**A retyped terminal screenshot becomes a `terminal-window` and not a `code-wrapper`.** That
component is in `tdmts/OrionContent/template.html` and this is the first module here that uses it:
`term-prompt` and `term-cmd` on one line, `pre.term-out` under it, and the copy button lands on the
command alone instead of on the prompt and the output with it. It also carries a `span.highlight`,
which is what replaced the red arrows on three annotated screenshots: the five callouts on the
`ls -alh` picture, the TAB hint on the cd picture, and the blur effect that pointed at the `-r` line
of `cp --help`. **32 of the 54 images went that way, 15 stayed and 7 were dropped.** What stayed is
what a `<pre>` cannot hold: a desktop, a window of Files, nano, vi, and the shutdown dialog of
VirtualBox. What was dropped was a duplicate or a picture whose caption did not match it.

**And retyping is proofreading.** Ten corrections came out of it, all ten reported to the lecturer
before they went in, and none of them survives a re-import of `_incoming/`:

| Where | What the source says | What it says here |
|---|---|---|
| `rm` on a directory | "Dat komt omdat de map niet leeg is" | The message is `Is a directory`. `rm` refuses every directory, empty or not, and `-r` is what a directory needs |
| `sudo find` | "want dan stelt zich dat probleem niet" | Its own screenshot still shows two `Permission denied`, on the user's own gvfs mounts, where even root does not read |
| rm page 2 | `/home/klimatisering` | `/home/elm/klimatisering` |
| `more` | "eerst op CTRL+C en dan op CTRL+X" | `q`. CTRL+X is a nano shortcut and does nothing in `more` |
| `ps` | "process snapshot" | `process status` |
| `tar` | "gz staat voor gzip, een open source zip formaat" | A free compression format. Zip is something else |
| pwd page | Two figcaptions sit under the wrong image | The one that shows a command not yet run was dropped; the tree it promised is a text tree |
| terminal and mkdir pages | "Windows startmenu", "Windows Terminal", "Windows Verkenner" | All four are Ubuntu screens, and the file manager is Files |
| `ls` table | `ls –a`, `ls –t`, `ls –h` with an en-dash | A hyphen. On a page that just said streepjes matter, that is not a detail |
| `cp` page 3 | `cp automatisering 2auto` beside a screenshot of `cp automatisering/ 2auto` | The screenshot, so the command and its output belong together |

**The docx asks for four screenshots, not six**, and it asks for no photo with a studentenkaart. The
proof is the demonstration in the lab, the same as Virtualiseren and Partitioneren.

**Four questions were added to the verslag, one per doelstelling the docx leaves untouched.** The
docx tests mkdir, nano, cp, du and tar, which is doelstelling 5 and 6 and nothing else. So: two
distributions and what each is for (1), open-source against gratis with an example of software that
is free without being open (2), what `sudo` changes and why you do not log in as root (3), and an
invultabel with the Linux counterpart of the four Windows folders (4).

**`LinuxEnDistributies.html` carries text that has no source anywhere.** Doelstelling 2 asks for the
difference between open-source and gratis, and no staged page and no syllabus chapter mentions it.
The page answers it with a two-by-two table of the four combinations, because that is the shape of
the confusion: Acrobat Reader costs nothing and is closed, Red Hat Enterprise Linux is open and you
pay for it. Same case as `WatIsVirtualisatie.html`.

**One filename does not come from its heading, and the reason is a regex.** `check-content.py` reads
the manifest with `name:\s*'([^']*)'`, so an apostrophe inside a single-quoted field truncates the
value and a double-quoted field is not seen at all. "Commando's en parameters" therefore failed rule
2 with "veld 'name' ontbreekt of is leeg" while the page was perfectly fine. It is now
`CommandoEnOpties.html`, "Een commando en zijn opties", and no field in the `linuxbasis` block
contains an apostrophe. **`partitioneren` still has one**, in the blurb of its zelftest, and it
passes because a truncated value is not an empty one: the hub silently shows half a sentence. Worth
fixing when that module is next touched, in the manifest or in the regex.

**The Linux chapter of the syllabus was read beside these pages and needed no correction.**
`Theorie/Syllabus/Theorie/Besturingssystemen/` says the same thing about the kernel, about root
against a normal user and about file rights. The two tracks now say it twice, which is what patroon
17 asks for, and nothing links between them.

**046 leaned on another lab and no longer does.** It opened with "In het vorig labo heb je een
gebruiker elm ... aangemaakt". Labo Virtualiseren is now named once, on `overview.html`, as a
material requirement, the same treatment Partitioneren gives it. `InstallatieUbuntu.html` already
fixes `elm` and `mle` and says the Linux labs use that account, so the data is right; only the
reference is gone.

## Labo Linux Geavanceerd, written 7 September 2026

Fourth confirmation of the split, and the first module where the split test came out **negative** for
a whole submodule. The theory reeks holds begrippen, the opdracht reeksen hold the click-through, and
this lab adds a third kind of reeks.

```
Theorie (reeks theorie)            Software installeren (reeks software)
  Theorie/reference.html             SoftwareInstalleren/Overzicht.html   <- wortel
  GebruikersEnGroepen                  UitDeWinkel
  Rechten                              EigenRepository
  SoftwareUitDeRepository              DebBestand
  SoftwareBuitenDeRepository           InstallerScript
  Docker                               SourceCode
  Spiekblad                            ContainerMetDocker
  TestJezelf                           UpToDate

Opdracht chmod (reeks chmod)       Opdracht chown (chown)   Opdracht chgrp (chgrp)
  Chmod/Opdracht.html   <- wortel    Chown/Opdracht.html      Chgrp/Opdracht.html
    GebruikersAanmaken                 OwnerAanpassen           GroupAanpassen
    SudoRechten
    EenEigenGroep
    Opruimen
```

**Vijf reeksen, en de vijfde heeft geen dropbox.** Dat is nieuw in deze repo en het was de
belangrijkste vraag van dit labo. De negen bronpagina's over software installeren zijn **geen state
machine**: elk installeert een ander programma langs een andere weg op een verse machine, en geen
enkele regel leunt op wat de vorige achterliet. De toets van Linux Basis valt hier dus negatief uit.
De oudere toets van Virtualiseren en Partitioneren valt wel positief uit: vijf van de negen zijn een
genummerde klikreeks van 7 tot 13 stappen met veertig schermafdrukken. Ze zijn dus stappenplan en
geen theorie, en ze horen bij geen van de drie opdrachten, want geen van die drie gaat over software.

Vandaar een eigen Orion-menu-item, `Software installeren`, wat ook precies is wat Brightspace vandaag
heeft staan als submodule. **Een reeks is een menu-item en niet noodzakelijk een indienmoment**, en
dat is de regel die dit labo toevoegt. In Orion telt dit labo negen items: Inleiding, Theorie,
Software installeren, en per opdracht een pagina plus een dropbox.

De wortel van zo'n reeks is de eerste manifestregel ervan, dus `SoftwareInstalleren/Overzicht.html`.
Die naam is met opzet niet `overview.html`: `topic_van()` in `check-content.py` stuurt elke
`overview.html` naar het item Inleiding, ook een in een submap, en dan zou regel 10 over elke link
binnen deze reeks vallen.

**De drie opdrachten zijn zelf een keten, en dat staat in geen enkele docx.** De chmod-opgave maakt
`rechten1`, `rechten2` en `/home/rechten1/tekst.txt`; chown wijzigt de owner van dát bestand; chgrp
de group ervan, en die vraagt bovendien of `labopartner1` erbij kan, de gebruiker uit de begeleide
oefening van chmod. Elke `Opdracht.html` noemt daarom in één zin welke opdracht ervoor komt. Dat is
binnen hetzelfde labo en dus geen patroon 17.

**De gebruikersoefening hangt onder Chmod en niet onder een eigen reeks**, want de chmod-opgave
begint met twee gebruikers aanmaken. De zeven bronpagina's 074 tot 080 zijn wél een state machine
(`su` heeft de gebruiker van `adduser` nodig, `members sudo` heeft de `usermod` van twee pagina's
eerder nodig) en werden vier stappenplanpagina's.

**Vier beslissingen van de lector, genomen op 7 september 2026.**

- De negen softwarepagina's krijgen een eigen reeks (hierboven).
- **`passwd` wordt bijgeschreven.** Doelstelling 2 van 070 is "het wachtwoord van gebruikers
  wijzigen", en het commando komt op geen van de 23 bronpagina's voor en in geen van de drie
  opgaven. Het staat nu op `Theorie/GebruikersEnGroepen.html` en op het spiekblad, met een
  verslagvraag in het chmod-verslag. Dat is bijgeschreven tekst die een herimport niet overleeft.
- **De drie video's van 073 worden drie links op de theoriehub**, met `target="_blank"`, en geen
  `iframe`. Geen enkele andere pagina in deze repo sluit een video in, en de afspraak voor de
  lesopnames wijst dezelfde kant op. Ze staan onder de hubkaarten, buiten het manifest, want regel 2
  weigert een absolute URL in een `href`. Regel 4 laat zo'n link toe: `DOCUMENT_RE` grijpt alleen op
  een documentextensie.
- **De Spotify-route is helemaal herschreven en gebruikt geen `apt-key` meer.** Zie hieronder.
- **De drie terminals van 092 worden overgetypt met de prompt `elm@elm-VirtualBox`.** In de bron
  staan ze op `tom@tom-VirtualBox`, een andere machine en een oudere Ubuntu, en één prompt door het
  hele labo scheelt de student een zoektocht. De uitvoer eronder blijft letterlijk.

**32 van de 64 afbeeldingen werden een `terminal-window`, 18 bleven beeld en 14 gingen eruit.** Wat
bleef is wat een `<pre>` niet kan dragen: het Software Center, twee bladzijden van Spotify zelf, het
bestandsvenster met zijn rechtsklikmenu, Docker Hub en zijn handleiding, en vier nano-vensters. Drie
geannoteerde schermafdrukken kregen `span.highlight` in plaats van rode pijlen. Uiteindelijk bleven
er 20 in `img/` staan en zijn er 44 geschrapt.

**De veertien die eruit gingen, en waarom, want dit is de lijst die je bij een herimport opnieuw
moet maken:** een Google-resultatenpagina **in het Frans** uit 2016 (076), een **South Park-meme**
met `alt="Make install output"` (094), een VLC-venster met een spelletjestrailer op een oudere
Ubuntu waarvan het bijschrift iets anders beloofde (089), een dubbele schermafdruk van dezelfde
Spotify-bladzijde (090), drie die overgetypt werden, en **de zeven dialoogvensters van Software &
Updates** (090), die met de herschreven repositoryroute geen stap meer illustreren. Eén schrapping
is inhoudelijk en geen opruiming: het venster met de toegevoegde repository (090) toont de regel mét
de tikfout `repository.spotifiy.com`, terwijl de tekst ernaast de juiste spelling voorschrijft.

**Achttien inhoudelijke correcties, alle achttien gemeld voor ze doorgevoerd werden.** Geen ervan
overleeft een herimport van `_incoming/`.

| Waar | Wat de bron zegt | Wat het hier zegt |
|---|---|---|
| 091, Docker Hub | "Op **hub.docker.io** kan je alle **containers** terugvinden" | `hub.docker.com` (zoals op de schermafdruk ernaast; `hub.docker.io` bestaat niet), en wat er staat zijn **images** |
| 091, stap 6 | `mkdir public-html` gevolgd door `nano index.html` | Er ontbreekt `cd public-html`. Zonder die regel landt het bestand in `~/images` en kopieert de build een lege map; de titelbalk van de schermafdruk zegt `~/images/public-html` |
| 091, stap 9 | `docker run -dit ...` zonder sudo | `sudo docker run`. De schermafdruk eronder heeft sudo, en elk ander dockercommando ook |
| 090, stap 6 | `download.spotifiy.com` | `download.spotify.com`. De schermafdruk van Spotify zelf, op diezelfde pagina, schrijft het correct |
| 090, stap 5 | "omdat we de controle key nog niet hebben gedownload" | De melding gaat over een ontbrekende sleutel; de rest van de fout op de schermafdruk komt van de tikfout hierboven. De overgetypte uitvoer is de melding die je met de juiste host krijgt |
| 090, de hele route | De sleutel importeren via Software & Updates, en `apt-key` op de bladzijde van Spotify | De sleutel in `/etc/apt/keyrings/` en `signed-by` in de APT-regel, zie hieronder |
| 094, opening | "De compiler hier is niet Visual Studio maar wel **make**" | `make` is een bouwprogramma dat de compiler aanroept; de schermafdruk van `sudo make` toont `gcc` |
| 089, figcaption 1 | "VLC Media Player interface" | De afbeelding is een spelletjestrailer in VLC. Beeld en bijschrift zijn weg |
| 089, figcaption 2 | "Terminal output van snap installatie" | Het is het zoekvenster van Activities, geen terminal |
| 090, laatste alt | "Spotify installatie succesvol" | Het is het installatiecommando zoals het op spotify.com staat. Stap 13 gaf zelf geen commando; dat staat er nu |
| 094, alt | "Make output with warnings" | Staat onder een meme. Beeld weg |
| 076 | "We Googelen de foutmelding", met een Franse schermafdruk | De pagina zegt zelf wat er moet gebeuren: `usermod -aG sudo`, en waarom die groep bestaat |
| 085 tegen 083 | 085 begint met `rechten1 rechten1`, 083 eindigt op `rechten2 rechten1` | De overgetypte terminals sluiten wel op elkaar aan |
| 093, 074, 088 | "In het vorig labo heb je gezien hoe je tar kan gebruiken", "Tijdens de installatie heb je elm aangemaakt", "Ssh gebruiken we straks" | Patroon 17: `tar` wordt hier zelf uitgelegd, elm wordt een materiaalvereiste op `overview.html`, en `ssh` komt nergens meer terug |
| 070, doelstelling 2 | "Het wachtwoord van gebruikers wijzigen" | `passwd` is bijgeschreven, zie hierboven |
| 092 | `tom@tom-VirtualBox` | `elm@elm-VirtualBox`, zie hierboven |
| chown-opgave | Een schermafdruk van iemands privécollectie op `vulphere@arifuretaarch` | Eén overgetypte `ls -l` regel in het verslag. De vraag is of `vulphere` de owner of de group is, en daar heeft een muziekcollectie niets mee te maken |
| chgrp-opgave | Een schermafdruk van de doeltoestand van `tekst.txt` | Diezelfde regel als tekst: `----rw---- 1 rechten2 rechten1 15 Jan 2 17:47 tekst.txt`. Zo staat ze ook in de docx, die geen afbeelding meer draagt |

**De repositoryroute is herschreven, en dat is de grootste afwijking van de bron in dit labo.**
`EigenRepository.html` volgde het grafische pad van Software & Updates, met dertien stappen en negen
dialoogvensters, en de bladzijde van Spotify die de student ernaast leest, schrijft `apt-key` voor.
Dat commando zette elke sleutel op één hoop, waardoor elke repository voor elke andere kon tekenen,
en Ubuntu heeft het afgevoerd. Beslist op 8 september 2026: de pagina zet de sleutel nu in
`/etc/apt/keyrings/` en bindt ze aan die ene repository met `signed-by` in de APT-regel, die als
eigen bestand onder `/etc/apt/sources.list.d/` komt.

Dat kost de negen schermafdrukken en het wordt een terminaloefening, en er komt iets voor in de
plaats dat het grafische pad niet kon tonen: **een repository op je machine is twee bestanden**, en
de student maakt ze allebei en leest ze met `ls` en `cat` terug. De schermafdruk van de
Spotify-bladzijde blijft wel staan, met een kader erbij dat zegt welk van de twee commando's erop je
niet overneemt en waarom. Dat leest beter dan de bron verzwijgen. `Theorie/SoftwareUitDeRepository.html`
en het spiekblad zijn mee rechtgetrokken.

**Twee commando's zijn gesplitst omdat ze buiten beeld liepen.** De `curl ... | sudo gpg --dearmor`
van elke handleiding is hier twee stappen, en de APT-regel gaat met `sudo nano` in het bestand in
plaats van met `echo ... | sudo tee`. Een `terminal-window` scrolt horizontaal, en in het smalle
Orion-kader viel bij allebei precies de helft weg die de alinea eronder uitlegt. Wat onvermijdelijk
blijft scrollen is de APT-regel zelf, want die is één regel. **Meet dus de lengte van een commando
na**, en niet alleen of het klopt.

**Het sleutelbestand in de tekst is `pubkey_0D811D58.gpg`**, de naam die op onze eigen schermafdruk
van de Spotify-bladzijde staat. Die naam verandert wanneer Spotify de sleutel vervangt, en dat staat
er met zoveel woorden bij: neem het adres over van hun bladzijde. Een naam die hier vastligt en daar
niet, is anders een stille breuk midden in het semester.

**Zes verslagvragen zijn bijgeschreven**, want de drie docx toetsen `chmod`, `chown` en `chgrp` en
verder niets, terwijl 070 vijf doelstellingen belooft. Doelstelling 1 was maar half getoetst
(toevoegen wel, wissen niet), en 2, 4 en 5 helemaal niet. Chmod kreeg er twee (een gebruiker maken en
weer wissen mét zijn map, en `passwd`), chown vier (installeren uit het Software Center en met `apt`,
daarna langs een `.deb` of een script met de vraag wat je opgeeft, en het systeem bijwerken), en
chgrp één (welke van de vijf wegen je kiest voor dertig machines, en waarom de vier andere afvallen).
Chown telde in de docx maar vier vragen en was daarmee veruit de dunste van de drie.

**De vraag over `labopartner3` wissen werkt niet als verslagvraag**, want `Chmod/Opruimen.html` wist
die gebruiker al in de begeleide oefening. De vraag maakt daarom een wegwerpgebruiker `tijdelijk` aan
en wist die weer. Dat soort botsing tussen een stappenplan en zijn eigen verslag is precies wat je
mist zolang je de twee niet naast elkaar leest.

**Het kader "Zorg dat de machine draait voor de sessie begint" staat nergens meer.** Het stond
woord voor woord op de hub van Linux Basis en kwam mee naar deze; op 8 september 2026 is het uit
allebei weg. De virtuele machine staat al in de lijst Meebrengen naar het labo erboven, met de zin
dat het werk van dit labo erop gebeurt, en het kader herhaalde dat in een rood vak. Het is de enige
plaats waar de twee Linux-hubs van elkaar afweken, en ze doen dat nu niet meer.

**`img/linuxgeavanceerd-vm-versus-container.svg` is de derde byte-voor-byte kopie van dezelfde
tekening**, naast `virtualiseren-` en `syllabus-08-`. Docker staat in twee labo's en in de syllabus,
en de afspraak is een eigen kopie per module, met `diff` nagekeken. **Wijzig er dus nooit een zonder
de twee andere.**

**`img/linuxgeavanceerd-rechten-posities.svg` is nieuw**, en het is de eerste eigen tekening van dit
labo: de tien tekens van `drwxr-xr-x` uit elkaar getrokken, met de drie klassen erboven en de cijfers
7, 5 en 5 eronder. Gerenderd met headless Edge voor ze vertrouwd werd, zoals elke SVG hier.

**De zelftest telt negen meerkeuzevragen** en de afleiders zijn de misvattingen die de theorie
rechtzet: dat `sudo` je permanent root maakt, dat de eerste drie tekens voor other zijn, dat 7, 5 en
5 optellen, dat `chmod 000` ook root buitensluit, dat `chown` de rechten wijzigt, dat een groep
sterkere rechten geeft, dat snap en apt hetzelfde doen, dat een `.deb` met een dependency-fout
beschadigd is, en dat een container een ander besturingssysteem kan draaien.

**Twee dingen die stil misgaan en hier niet misgegaan zijn.** Geen enkel veld in het
`linuxgeavanceerd`-blok van `reference.js` draagt een apostrof, want regel 2 leest het manifest met
`name:\s*'([^']*)'` en kapt de waarde daar af; "zeven programma's" in een blurb werd daarom
herschreven. En de drie leads van de opdrachten zijn uitdrukkelijk uit elkaar geschreven, want regel
12 valt over zeven opeenvolgende gedeelde woorden en dit labo heeft vijf leads.

## De syllabus, hoofdstuk 1 tot 14 ingevoerd 7, 8 en 9 september 2026

De theorietrack bestond hier nog niet: `Theorie/Syllabus/` was leeg en het manifest kende geen
module `syllabus`. Wat er bij dit eerste hoofdstuk aan infrastructuur bij gekomen is, hoort erbij en
komt er geen tweede keer:

- **`Theorie/Syllabus/syllabus.css` en `img/syllabus-cover-logo.png` zijn uit DeN gekopieerd.** Het
  stijlblad is de huisstijl van het DOCUMENT en staat naast OrionCSS, dat de huisstijl van de site
  is; de bundel die naar de PDF gaat laadt alleen het eerste. **De maten erin zijn niet hermeten.**
  Ze komen uit DeN, waar de bestaande syllabus bladzijde per bladzijde opgemeten is; het HOGENT-
  sjabloon is hetzelfde, maar `ICEES Syllabus 20250912.pdf` is er nooit naast gelegd. Wijkt de
  gedrukte PDF af van wat de student gewend is, kijk daar dan eerst.
- **`Theorie/Syllabus/overview.html` en `Theorie/Syllabus/Theorie/reference.html`** zijn de twee
  Orion-ingangen van de theorietrack, geschreven voor dit vak en niet uit DeN overgenomen.
- **De module `syllabus` staat eerst in `reference.js`**, zoals in DeN. Een categorie is een
  hoofdstuk, een topic een sectie, en het hoofdstuknummer volgt uit de plaats in de lijst.

**De syllabushub wordt met opzet door niets gelinkt, en dat is geen vergetelheid.** De
theorietrack heeft in Orion een enkel menu-item, `Theorie/Syllabus/overview.html`, en dat biedt de
PDF aan. `Theorie/Syllabus/Theorie/reference.html` en de hoofdstukpagina's eronder zijn op de site
dus niet bereikbaar. Bevestigd op 7 september 2026: **van de hele syllabus is de PDF het enige dat
de student te zien krijgt**, precies zoals de motivatie bij regel 13 al zei. De HTML is de bron
waaruit gedrukt wordt, niet een tweede kanaal ernaast. DeN heeft hetzelfde gat en om dezelfde reden.

Laat het dus staan, en repareer het niet: een tweede Orion-topic of een link vanaf `overview.html`
zet een leeskanaal open dat niemand onderhoudt en dat naast de PDF een tweede waarheid wordt.

**Het manifest blijft daarom wel nodig, en om een andere reden dan de hub.**
`scripts/export-syllabus.py` leest `window.LAB_REFERENCE.syllabus` voor de volgorde en de nummering
van het gedrukte document, en regel 2 van de contentcheck eist dat elke pagina onder een module erin
staat. `reference.js` is hier dus de inhoudsopgave van de PDF, en de hub is wat er toevallig ook mee
te tekenen valt. `back-link.js` op een hoofdstukpagina is om dezelfde reden geen fout: hij hoort bij
het sjabloon van de importer en wordt in de gedrukte bundel niet geladen.

**Een sectie Studievragen achteraan een hoofdstuk wordt `TestJezelf.html` met de kop "Test jezelf".**
In deze Word heet het woord Studievragen twee dingen: vooraan het kader naast Kernpunten (dat samen
met de Kernpunten op `Overzicht.html` komt), achteraan de meerkeuzelijst die het hoofdstuk afsluit.
Elk labo van dit vak noemt zijn zelftest Test jezelf, en zonder deze regel heten twee verschillende
dingen in hetzelfde hoofdstuk hetzelfde. Een sectie die halverwege "Oefening" heet, houdt haar naam;
ze krijgt wel dezelfde vragenbehandeling (regel 14). De hernoeming staat per hoofdstuk in
`Theorie/Syllabus/NOTITIES.md`.

**Een hoofdstuk mag tekst bijkrijgen, en dat is een beslissing van de lector.**
Hoofdstuk 1 stelde in Test jezelf twee vragen (de wet van Moore, de afstand tussen
transistoren) waarop de tekst nergens antwoordt, terwijl het kader vooraan wel naar
Moore vraagt. Er is toen tekst bijgeschreven in plaats van dat de vragen wegvielen,
en er kwam een zesde vraag bij voor de studievraag die niets toetste. **Zulke
alinea's staan alleen in de HTML en niet in de Word, dus een herimport gooit ze
weg**; welke het zijn, staat per hoofdstuk in NOTITIES.md, zodat ze in de Word
bijgeschreven kunnen worden. Dat geldt net zo voor een rechtgetrokken spelling: de
importer vertaalt opmaak en nooit woorden, dus elke woordcorrectie is per definitie
een handmatige die een herimport niet overleeft.

**Code is een `<pre><code>`, en `syllabus.css` was er al op voorbereid.** De importer maakt van
elke regel code een eigen `<p>`, inspringing en al kwijt, en van een schermafdruk van een listing
een figuur. Het stijlblad draagt sinds DeN een regel `code, pre, kbd, samp` van 9pt Consolas met
`white-space: pre-wrap`, en **hoofdstuk 12 is het eerste hoofdstuk dat ze gebruikt**: de C-lus van
12.2 en de overgetypte assemblerlijst van 12.3. Dat `pre-wrap` is meteen ook waarom een lange
regel de bladspiegel niet kan doen overlopen. Meet toch de langste regel na: 9pt Consolas is
ongeveer 1,75mm per teken, dus 91 tekens is de grens.

**Een oefening in tabelvorm wordt een `ol.vragen`, en dat is de enige plaats waar regel 14 een gat
heeft.** 2.1 Hardware herkennen is in de Word geen genummerde lijst maar drie tabellen: een rij
foto's, daaronder een rij met een nummer en een regeleinde waarop de student de naam schrijft.
Dertig vragen dus, zonder een `<ol>` in de buurt. De verklikker van regel 14 zoekt naar een `<ol>`
met invulruimte eronder, dus die ziet zo'n tabel niet, en de export ziet er evenmin vragen in: het
hoofdstuk zou stilzwijgend zonder Oplossingen gedrukt worden. Herken je een oefening, maak er dan
een `ol.vragen` van voor je verder gaat, ook als de Word er niets genummerds van maakt.

Waar de student schrijft, beslis je daarbij zelf, en je zegt in NOTITIES.md waarom: `lege_kolommen()`
vindt niets zodra elke kolom tekst draagt, en bij deze drie tabellen droeg elke kolom de nummers.

Loopt de nummering door over een figuur of een tussenzin heen, dan draagt het volgende `<ol>` een
`start=`; regel 14 kijkt die aansluiting na.

**Twee bladspiegelregels kwamen daaruit voort, en `syllabus.css` wijkt daarmee als derde bestand van
DeN af.** Een `ol.vragen > li` breekt niet meer over een bladovergang, want een foto zonder haar
invulregels is geen vraag meer; en `.vragen-bij-figuur` is de omhulling om een figuur waar een hele
reeks nummers naar wijst, zodat de foto op hetzelfde blad blijft als de nummers die haar nodig
hebben. Die tweede werkt alleen zolang het blok op een bladzijde past, dus de breedte van zo'n foto
is een knop waar je aan draait: in hoofdstuk 2 is het moederbord daarvoor van 160.0mm naar 105.0mm
gegaan, wat de enige maat in dat hoofdstuk is die niet uit de Word komt. Hoofdstuk 5 legde er een
derde regel bovenop, `.tekenkader`; die staat verderop bij dat hoofdstuk.

**Een hoofdstuk zonder sectie Studievragen achteraan krijgt geen Test jezelf.** Hoofdstuk 2 heeft er
geen, en er is er dus ook geen geschreven. Of elk hoofdstuk er een hoort te hebben, wordt na
hoofdstuk 16 in een keer beslist, met alle zestien naast elkaar; tot dan noteert NOTITIES.md per
hoofdstuk of het er een had.

**Een meerkeuzevraag met meer dan een juist antwoord is een beslissing van de lector, niet van jou.**
Regel 14 en `export-syllabus.py` eisen per vraag precies een `<li class="juist">`, en bij een enkele
vraag zonder antwoord drukt het hele hoofdstuk geen Oplossingen. Hoofdstuk 3 had er drie op negen:
een vraag naar de nadelen van de BIOS met vier juiste van de vijf, een vraag naar situaties om de
instellingen te wijzigen met vier verdedigbare, en een vraag naar de POST waarop de tekst zelf twee
antwoorden geeft. **Tel dat na voor je een letter zet**, want de vraag ziet er in de Word volstrekt
normaal uit en de export klaagt pas over de vraag en niet over de reden.

Er zijn twee vormen die werken en ze kosten elk iets anders. **Omkeren** ("Welke van deze is GEEN
nadeel van...") houdt alle mogelijkheden woord voor woord en verandert alleen de vraagzin; het blijft
meerkeuze. **Een open vraag** met invulruimte en een `<div class="oplossing">` houdt de mogelijkheden
als antwoord, maar de Brightspace-test van elk labo is meerkeuze met giscorrectie, dus elke open
vraag is er een die niet meer op die test voorbereidt. In hoofdstuk 3 werd het een keer het eerste en
twee keer het tweede. Leg de keuze voor per vraag, en zet in NOTITIES.md welke het werd.

**Een open vraag krijgt een invulregel per ding dat het antwoord telt**, en niet een regel per vraag.
De importer schrijft een lege tabel van een rij, en dat is te weinig zodra het antwoord een opsomming
is: vraag 7 van hoofdstuk 3 noemt vier situaties en draagt dus vier regels. Een regel is 8,2mm, de
hoogte van gewoon gelinieerd papier. Reken daarbij na of de vragenlijst nog op een blad past; loopt
ze over, dan is dat geen fout, want `ol.vragen > li` houdt elke vraag heel en de lege ruimte eronder
is plaats om te schrijven. De ondermarge van een tabel is geen knop om dat mee bij te sturen: die
staat in de gedeelde `table`-regel en geldt voor elk hoofdstuk.

**De importer schrijft een gewone `<ol>` en laadt `oplossingen.js` niet.** Een vragenlijst wordt met
de hand een `<ol class="vragen">`, en de pagina krijgt met de hand `<script src=".../oplossingen.js">`
onder `back-link.js`. Zonder het eerste ziet de export geen vragen en drukt ze zwijgend geen
Oplossingen; het tweede vangt regel 14 wel op.

**Een studievraag die een imperatief is, krijgt een punt en geen vraagteken.** Deze Word schrijft
"Geef twee redenen waarom ...?" en "Geef enkele voordelen van UEFI?", en dat staat in het kader
Kernpunten naast vragen die wel echte vragen zijn. Beslist op 7 september 2026, en meteen
doorgevoerd in de drie hoofdstukken waar zo'n zin stond (1, 3 en 4). Een echte vraag houdt haar
vraagteken, dus "Waarvoor staat de afkorting UEFI?" is niet aangeraakt. Het is een woordcorrectie,
dus ze staat alleen in de HTML en een herimport draait ze terug; welke het zijn, staat per hoofdstuk
in NOTITIES.md.

**Reken de bladspiegel na na een redactionele ronde, en niet alleen na de import.** In hoofdstuk 4
paste de foto van de Raspberry Pi op 0,6mm onder de tekst erboven, en een enkel woord dat er later
bij kwam ("Windows Embedded Compact 7") maakte die alinea een regel langer en duwde de figuur naar
een eigen bladzijde. Een correctie aan een woord is dus een correctie aan de bladspiegel zodra er
een figuur onder staat.

**Een sectie die net zo heet als haar hoofdstuk, krijgt een andere bestandsnaam.** In hoofdstuk 3
heten de H1 en een van de H2's allebei BIOS / UEFI, dus de importer schreef
`Theorie/Syllabus/Theorie/BiosUefi/BiosUefi.html`. Dat is niet fout, maar het leest raar en het botst
in een grep met `Labo/Assemblage/Theorie/BiosUefi.html`. De pagina heet nu `DeUefiOmgeving.html`,
naar wat ze behandelt. **De kop op de pagina blijft de kop uit de Word** en de id in `reference.js`
staat er los van, dus dit raakt de tekst niet. Het is de eerste bestandsnaam in de syllabus die niet
`pascal()` van de kop is.

**Een figuur en haar bijschrift moeten samen onder de 240mm blijven, niet de figuur alleen.**
`figure` draagt in `syllabus.css` al een `page-break-inside: avoid`, maar Chrome negeert een avoid
die niet uit kan: bij 160.0mm zijn de vier artikelbladzijden van hoofdstuk 3 elk 233mm hoog, en het
bijschrift landde telkens op de bladzijde na zijn figuur. Op 152.0 en 153.0mm past het blok wel, en
dat scheelde meteen een bladzijde. De breedte is dus dezelfde knop als bij het moederbord van
hoofdstuk 2, alleen ligt de grens lager zodra er een bijschrift onder staat.

**Een afbeelding uit de Word mag hertekend worden, en `img/syllabus-<nn>-<naam>.svg` is dan haar
naam.** Hoofdstuk 3 deed dat met de MBR-tekening: Engelse labels in een Nederlandse tekst, een
tikfout erin, en 616 pixels die op 160.0mm neerkomen op 98 dpi tegen 247 voor de rest van het
hoofdstuk. Dat laatste is het argument dat je kan narekenen, en het is er een dat elke
schermafdruk uit deze Word kan treffen. De hertekening laat geen enkel gegeven van het origineel
vallen en gebruikt het palet van de SVG's van Labo Partitioneren; renderen voor je ze vertrouwt
geldt hier net zo goed. Dat een labopagina hetzelfde tekent, is geen reden om het niet te doen: de
twee tracks zijn onafhankelijk en een eigen kopie is de afspraak.

**Een vraag die de student laat tekenen, krijgt een `.tekenkader` en geen invulregels.** De Word zet
onder zo'n vraag dezelfde lege tabel van een rij als onder elke andere, en die is op papier ruim
zeven millimeter hoog: daar tekent niemand een schema met blokken en pijlen in. `.tekenkader` in
`syllabus.css` maakt van die ene cel een vlak, en het is de derde regel in dat bestand die DeN niet
heeft. **De hoogte wordt afgeleid en niet gekozen**: vraag 2 van hoofdstuk 5 laat de figuur van 5.1
natekenen, die staat op papier 90.9mm hoog, dus het kader is 90mm. Meet het na in de PDF in plaats
van het te rekenen, want een rand wordt op de rand van de cel getekend en niet ernaast: 89.7mm
`height` levert 90.0mm op. Bij dezelfde meting bleek **een invulregel op papier ongeveer 7,4mm te
meten en niet de 8,2mm** die bij hoofdstuk 3 genoteerd staat; de hoogte van zo'n rij komt van de
tekstregel erin en niet van de `height` van 6mm.

**De cursusinhoud moet juist zijn, en dat gaat voor op elke andere regel hier.** Beslist op 7
september 2026 door de lector. De Word is de HERKOMST van de tekst en niet haar gezag: staat er iets
fout in, dan wordt het rechtgezet, of dat nu in een kader staat of in de lopende tekst, en of de
tegenspraak nu binnen een hoofdstuk ligt of tussen de twee tracks. Wat beslist is welke van de twee
zinnen waar is, en niet waar ze staat. **Dit vervangt de regel die hier na hoofdstuk 6 stond**, dat
het kader letterlijk blijft en de lopende tekst bijgedraaid wordt: in dat hoofdstuk had het kader
toevallig gelijk, en daardoor was de plaats van de zin per ongeluk het criterium geworden in plaats
van haar juistheid. De twee gevallen hieronder zijn dus geen twee regels maar twee toepassingen van
deze ene.

**Je meldt een inhoudelijke correctie voor je ze doorvoert.** Ook dat is een uitdrukkelijke afspraak
van 7 september 2026. Een feitelijke fout wegwerken is nooit een stille bewerking: zeg welke zin
fout is, waarom, en wat ze wordt, en voer ze daarna uit. Dat geldt niet voor opmaak, spelling of een
bladspiegel, en het geldt wel voor elke bewering die de student als juist meeneemt. Zo'n correctie
overleeft geen herimport, dus ze gaat daarnaast altijd in NOTITIES.md.

**Een passage die een ander deel van dit vak tegenspreekt, wordt rechtgezet en niet overgenomen.**
Hoofdstuk 5 bood een virtuele machine aan als de manier om een x86-programma op ARM te draaien, met
"alle hardware wordt gesimuleerd" erbij, en `Labo/Virtualiseren/Theorie/VirtueleHardware.html` zegt
het omgekeerde en heeft gelijk: de instructies van de gast lopen rechtstreeks op de echte processor,
en nagebootst zijn de randapparaten. Daaruit volgt dat een virtuele machine nooit een andere
instructieset kan draaien, en dat x86-op-ARM emulatie heet. De regel is dus: leg een passage naast de
labopagina die er over gaat, zet de syllabus recht waar ze fout staat, en **raak de labopagina niet
aan** (patroon 17). De hele redenering hoort in NOTITIES.md, zoals hoofdstuk 3 dat doet.

**Datzelfde geval kwam in hoofdstuk 8 een tweede keer voor, en met dezelfde zin.** 8.3 schreef "De
hardware van de computer wordt geemuleerd" met de processor en het werkgeheugen in de opsomming
erachter, en kernpunt 1 vatte dat samen. Allebei rechtgezet, en dan in de bewoording die hoofdstuk 5
al draagt, want twee hoofdstukken van dezelfde syllabus horen hetzelfde te zeggen: nagebootst zijn
de randapparaten, de instructies lopen rechtstreeks op de echte processor en het werkgeheugen is
echt geheugen. **Leg een passage dus niet alleen naast de labopagina maar ook naast het hoofdstuk
dat er al over gaat**, en neem de formulering over die er staat in plaats van een tweede te
verzinnen.

**Een naam die je bijschrijft, mag de definitie van het hoofdstuk niet onwaar maken.** Hoofdstuk 8
vroeg in zijn kader naar een programma dat een virtuele machine draait en noemde er zelf geen, dus
er kwamen vier namen bij, dezelfde als in `Labo/Virtualiseren/`. Een ervan, Proxmox VE, draait op de
kale hardware, terwijl 8.3 virtualiseren juist definieert als een host besturingssysteem waarop
guests staan: die naam alleen neerzetten maakt de eigen definitie van het hoofdstuk onwaar. Er staat
daarom bij wat het verschil is met de drie andere. **Reken dus na of elk voorbeeld dat je bijschrijft
onder de definitie valt die het hoofdstuk zelf geeft**, en schrijf het onderscheid erbij als het er
niet onder valt. Het woord hypervisor is daarbij niet ingevoerd, want geen enkel hoofdstuk draagt
het (patroon 20).

**Een hoofdstuk dat zichzelf tegenspreekt, wordt rechtgezet in de lopende tekst en niet in het
kader.** Hoofdstuk 6 zei in 6.3 dat het bestandssysteem bepaalt welk besturingssysteem er
geinstalleerd wordt, en in kernpunt 5 dat het besturingssysteem het bestandssysteem bepaalt. Dat
zijn tegengestelde richtingen, en de rest van het hoofdstuk kiest partij: elk bestandssysteem draagt
onderaan zijn eigen regel "Type besturingssysteem". Het kernpunt heeft dus gelijk en de zin in 6.3
is omgedraaid, met alle drie de gevolgen (schijf-, partitie- en bestandsgrootte) die er al in
stonden. Wat hier beslist heeft is niet dat de fout in de lopende tekst stond maar dat het kernpunt
waar was, en de rest van het hoofdstuk koos die partij al. Dit is iets anders dan hoofdstuk 5, waar
de syllabus een **labopagina** tegensprak; hier ligt de tegenspraak binnen een hoofdstuk. Staat een
kader fout terwijl de lopende tekst het juist heeft, dan wordt het kader rechtgezet: hoofdstuk 8
heeft dat gedaan met de twee kernpunten die host en guest omdraaien.

**Een hertekening houdt de kleuren van de brontekst wanneer die tekst ze bij naam noemt, maar dempt
ze wel.** 6.5 schrijft "bestand 1 = rood, bestand 2 = blauw en bestand 3 = groen" en "bestand 4 =
zwart", dus `img/syllabus-06-fragmentatie.svg` en zijn kopie in de labotrack zijn de enige twee
SVG's hier die niet in het palet van OrionCSS staan: het palet zou de zin ernaast onwaar maken. Wat wel uit het palet komt is alles waar
de tekst niets over zegt, de vrije ruimte en de rode annotatie eronder. **Wat de brontekst vastlegt
is de hue en niet de verzadiging**, en dat is het onderscheid dat op 7 september 2026 gemaakt is:
`#cc0000`, `#2b3fbf` en `#2e9e3e` waren de enige drie kleuren in de hele `img/` die uit de toon
vielen, en ze zijn `#9e2f26`, `#2a4d7c` en `#3f7238` geworden. Een donkerder rood is nog altijd
rood, dus de zin ernaast blijft waar en de figuur staat niet meer te schreeuwen naast de teal van
elke andere tekening. Doe dat dus ook bij een volgende figuur waar de tekst een kleur noemt.
Elders geldt het palet gewoon.

**Diezelfde figuur staat in `img/` twee keer, en de twee bestanden zijn byte voor byte gelijk.**
`img/partitioneren-fragmentatie.svg` en `img/syllabus-06-fragmentatie.svg` tekenen hetzelfde
voorbeeld met dezelfde getallen, want het is een van de drie plaatsen waar de labotrack en de
theorietrack hetzelfde onderwerp behandelen. Een eigen kopie per track blijft de afspraak, maar een
*andere tekening* per track is het niet: dan ziet de student twee voorstellingen van hetzelfde en
gaat hij zoeken waar het verschil in zit. **Wijzig er dus nooit een zonder de andere**, en
controleer met `diff` dat ze gelijk blijven; de labopagina noemt in haar lopende tekst geen kleuren,
dus de tekst van de syllabus is wat de tekening vastlegt. **Het tweede zulke paar is op dezelfde
dag gelijkgetrokken**: `img/partitioneren-first-best-worst-fit.svg` en
`img/syllabus-06-first-best-worst-fit.svg` tekenden dezelfde vier blokken met dezelfde maten in
hetzelfde palet, maar de labotekening schreef first fit, best fit en worst fit voluit boven de
blokken terwijl de syllabustekening `FF`, `BF` en `WF` zette met een legende eronder, zoals de Word
doet. **De voluitversie heeft gewonnen**, want geen van beide lopende teksten gebruikt die
afkortingen ook maar een keer: de syllabus schrijft zelf First Fit, Best Fit en Worst Fit. De drie
regels eronder zijn daardoor geen legende meer maar drie definities, en ze staan er parallel: elk
zegt welk blok het algoritme neemt, en niet wat het gevolg is. Het gevolg (een bestand kan in het
grootste blok nog groeien) staat in de lopende tekst van allebei de tracks. De labokopie heette
`partitioneren-first-worst-best-fit.svg` en heet nu `...-first-best-worst-fit.svg`, zodat de twee
namen dezelfde volgorde dragen als de tekening en als de sectietitel. **Het derde paar is
`img/virtualiseren-vm-versus-container.svg` en `img/syllabus-08-vm-versus-container.svg`**, en dat
is het eerste dat niet uit de Word komt: hoofdstuk 8 heeft geen enkele tekening en 8.4 behandelt
precies wat het labo al tekent, dus de labotekening is er ongewijzigd naartoe gekopieerd. Een
hoofdstuk zonder figuur mag er dus een uit de labotrack krijgen, zolang de kopie byte voor byte
dezelfde blijft.

**Vier van de acht afbeeldingen van hoofdstuk 6 zijn hertekend**, meer dan in enig ander hoofdstuk
tot nu toe, en de vier redenen staan per figuur in NOTITIES.md. Drie ervan tekenen iets wat
`Labo/Partitioneren/` ook al tekent, en dat is geen reden om het niet te doen: de twee tracks zijn
onafhankelijk en een eigen kopie per track is de afspraak, precies zoals bij de MBR van hoofdstuk 3.

**Heading 4 bestaat, en hoofdstuk 7 is het enige hoofdstuk dat er een heeft.** Vijf, alle vijf de
scheduling algoritmes onder Procesbeheer. `import-syllabus.py` rekent de kop om met
`min(max(niveau - kop_offset + 1, 2), 6)` en `verplaats_koppen()` in `export-syllabus.py` schuift er
in de bundel nog een niveau overheen, dus een Heading 3 is op de pagina een `h2` en in de PDF een
`h3` van 11pt, en een Heading 4 een `h3` en dan een `h4` van 10pt. Die tak had nog nooit gedraaid en
hij klopt, nagemeten in de PDF. **Een Heading 4 is daarmee even groot als de lopende tekst** en
verschilt er alleen in vet en in de ruimte erboven; dat leest, en `syllabus.css` is er niet voor
aangepast, want die regel (`h4, h5, h6`) geldt voor elk hoofdstuk terwijl er maar een zo'n kop
gebruikt.

**Bijgeschreven tekst mag een eigen kop krijgen, en hoofdstuk 7 is de eerste die er een heeft.** De
vier alinea's over realtime staan achteraan Procesbeheer onder `Prioriteit en realtime`, een `h2` op
de pagina naast Cooperative multitasking en Preemptive multitasking. De reden is dat de vijf secties
ervoor stuk voor stuk een algoritme behandelen: een alinea erachter zonder kop leest als deel van de
laatste. Waar de bijgeschreven tekst in een bestaande gedachtegang past (hoofdstuk 1, 5 en 6) blijft
het een gewone alinea.

**Een productnaam die veroudert, wordt in het kader wel aangeraakt, en dan in elk hoofdstuk tegelijk.**
Dat is iets anders dan de regel bij hoofdstuk 5 en 6, waar het kader letterlijk blijft wat de Word
zegt: daar ging het om een tegenspraak binnen de tekst, en dan is de lopende tekst wat je bijdraait.
Bij een versienummer staat overal hetzelfde feit, dus laat je het kader staan, dan drukt dezelfde
bladzijde twee verschillende nummers. Op 7 september 2026 ging Windows 10 IoT Enterprise LTSC zo naar
**Windows 11**, in de vijf plaatsen van hoofdstuk 7 (kader inbegrepen) en in de drie van hoofdstuk 4,
omdat de twee hoofdstukken elkaar anders tegenspreken over wat er op een industriële pc draait.
**Leg een hoofdstuk dus naast de hoofdstukken die er al staan voor je een naam wijzigt**, en wijzig
ze dan alle.

**Een tabel die alleen als afbeelding bestaat, typ je over; een tabel van 128 rijen niet.**
Hoofdstuk 10 had er twee. De kibi/kilo-tabel van 10.4 is vijf rijen en zeven kolommen, en de
alinea ervoor verwijst er met zoveel woorden naar, dus die is een echte `<table>` geworden en
`img/syllabus-10-informatievoorstelling-03.png` is geschrapt. De ASCII-tabel van 10.3 is 128
rijen en blijft een afbeelding: overtypen kost daar veel markup en maakt de bladspiegel
onvoorspelbaar, en op 160.0mm en 200 dpi is ze ruim leesbaar. **De grens is dus de omvang en
niet het feit dat het een tabel is**, en de toets ernaast is of een oefening de tabel moet
kunnen lezen: oefening 5 laat er drie letters in opzoeken, dus de leesbaarheid is nagekeken in
de gedrukte PDF voor ze bleef staan.

**En overtypen is nakijken.** De kolom Windows van diezelfde kibi/kilo-tabel rekende in drie
van de vijf rijen verkeerd: ze nam de ratio van dezelfde rij maal 1000 in plaats van het aantal
bytes door 1024 te delen, zodat 1 GB als "931 Mega byte" verscheen waar het 953 moet zijn en
1 TB als "9,09 Giga byte" waar het 931 GB moet zijn. Dat is precies het getal waar oefening 7
naar vraagt. Zolang de tabel een afbeelding bleef, was er niets om na te rekenen; een
afgedrukte bladzijde wordt namelijk niet bewerkt, en dat is de regel van hoofdstuk 9. **Een
tabel die je overtypt, valt daar buiten en gaat dus door dezelfde toets als lopende tekst.**

**En de vorm van een productnaam is die van zijn eigenaar.** Beslist op 7 september 2026, nadat
hoofdstuk 4 en 7 dezelfde vijf namen verschillend bleken te schrijven (ETHERCAT tegen EtherCAT,
CODESYS tegen CodeSys, en zo voort) omdat de vorm per hoofdstuk gekozen was. Een huisregel zou hier
een smaakkeuze zijn; de schrijfwijze van de eigenaar is na te rekenen en ze werkt ook voor de
volgende naam die erbij komt. Het is daarom **Raspberry Pi, CODESYS, EtherCAT, PROFINET, EtherNet/IP
en Modbus TCP**, en dat die reeks er wisselend uitziet is het punt en geen slordigheid: CODESYS
schrijft zichzelf in kapitalen en EtherCAT niet. Doorgevoerd in de vier plaatsen van hoofdstuk 4 en
de ene van hoofdstuk 7, kaders inbegrepen, om dezelfde reden als hierboven. **EtherNet/IP kwam er
ongevraagd bij**: die naam stond in dezelfde opsommingen en zou anders als enige in kapitalen
achterblijven naast een rechtgezette buur.

**De syllabus mag een labo bij naam noemen, en linkt er nooit naar.** 7.4 zegt "In het labo Linux
Geavanceerd staan we daar uitgebreid bij stil", waar de Word "In een van de labo's" schreef. Een naam
in een zin kost niets en helpt de lezer; een link zou de twee tracks aan elkaar hangen, en de PDF is
bovendien papier. Patroon 17 gaat over de andere richting en verbiedt dit niet.

**En een kop draagt die schrijfwijze ook, zodra het om een merknaam gaat.** Beslist op 7 september
2026 bij hoofdstuk 9, waarvan sectie 9.2 "Raspberry PI" heette terwijl de foto eronder Raspberry Pi
op de printplaat draagt. Dat lijkt in strijd met hoofdstuk 8, waar de koppen juist met opzet bleven
staan zoals de Word ze zet, maar daar ging het om een gewone woordgroep (Virtual machines) en hier
om een naam die een eigenaar heeft. Een kop is de gedrukte sectietitel en staat ook in de
inhoudstafel, dus laat je hem staan, dan drukt dezelfde bladzijde de naam op twee manieren. **Kijk
er meteen bij na wat `pascal()` van de kop maakt**: bij Raspberry PI en Raspberry Pi is dat allebei
`RaspberryPi.html`, dus daar viel niets te hernoemen, maar dat hoeft niet altijd zo uit te komen.
In hetzelfde hoofdstuk gingen op dezelfde regel **C#** (hoofdstuk 4 schreef het al zo), **PCI
Express** (het hoofdstuk zelf schreef het twaalf keer zo en twee keer niet) en **NVIDIA** mee.

**Een foto onder de dpi-grens wordt versmald en niet hertekend.** De grens van 98 dpi uit hoofdstuk
3 is een diagnose en geen voorschrift over wat je doet: bij een tekening is het antwoord hertekenen,
bij een foto of een schermafdruk van een echt venster is dat onmogelijk (image52 van hoofdstuk 7).
De enige knop die een foto dan heeft is haar breedte, want dezelfde pixels op minder millimeter
drukken scherper. Hoofdstuk 9 heeft dat op vier foto's gedaan, van 81, 66, 62 en 56 dpi naar
ongeveer 98. **Open het bestand dus voor je beslist wat de ingreep is**: alle vier zagen ze er in de
lijst uit als schema's en het waren alle vier close-ups van een moederbord.

### Elke tekening wordt hertekend, beslist 9 september 2026

**Alles wat iemand getekend heeft, gaat naar een eigen SVG.** Dat is een beslissing van de lector en
ze vervangt de afweging per figuur die hierboven staat: de dpi, de taal van de labels en een
tegenspraak met de tekst waren tot dan de redenen om te hertekenen, en die blijven waar, maar ze zijn
geen voorwaarde meer. Een tekening die er alleen maar uitziet alsof ze uit een ander document komt,
is reden genoeg. **De regels waaronder het gebeurt veranderen niet**: geen enkel gegeven van het
origineel valt weg, de figuur wordt met headless Edge gerenderd voor je ze vertrouwt, het palet van
OrionCSS geldt tenzij de kleur zelf een gegeven is, en de bladspiegel wordt na de export
nagerekend.

**Die kleurregel is op 9 september 2026 verruimd, en dit is de enige plaats waar ze staat.** Ze luidde
"tenzij de lopende TEKST een kleur bij naam noemt", naar het geval van 6.5, waar de syllabus zelf
schrijft "bestand 1 = rood, bestand 2 = blauw". Twee figuren van hoofdstuk 11 lieten zien dat dat te
eng is: bij de SATA-kabels van 11.8 en de PATA-kabel van 11.7 noemt geen enkele zin een kleur, en toch
kan het palet er niet gelden, want de kleur van een draad in zo'n kabel IS de spanning of de plaats aan
de kabel. Vier draden in vier tinten teal zijn geen voedingskabel meer, en dan valt er een gegeven weg.
**Het palet wijkt dus wanneer de tekst een kleur vastlegt of wanneer het onderwerp dat doet**, en in
beide gevallen blijft alleen de hue overeind: de verzadiging gaat omlaag, zodat de figuur niet staat te
schreeuwen naast de teal van elke andere tekening. **Verzin daarbij geen nieuw gedempt palet**, maar
neem de waarden die er al zijn, `#9e2f26` voor rood en `#2a4d7c` voor blauw uit
`syllabus-06-fragmentatie.svg`, `#222222` voor zwart en `#9bb0ac` voor grijs. Alles waarover het beeld
niets beweert, staat gewoon in het palet.

**Teken een grote ronding als bezier en niet als `A`-boog, want een boog wordt duur in de PDF.**
Gevonden op 9 september 2026 bij de vijf RAID-cilinders. Chrome vlakt bij `--print-to-pdf` elke
`A`-boog af tot ongeveer zeventig `c`-operatoren en schrijft die alle zeventig weg: vier
bladzijden van hoofdstuk 11 gingen van 18 tot 52 kB naar 137 tot 328 kB, en het HELE bestand groeide
0,87 MB, meer dan de vijf schermafdrukken die eruit gingen ooit gewogen hebben. Dezelfde ronding als
twee expliciete `C`-bogen per halve ellips (de constante is 0,5522847498) tekent er hetzelfde uit en
kost niets. Een `<ellipse>` of een `<circle>` gaat langs dezelfde molen, dus een groot deksel schrijf
je ook als pad; **het is de gedrukte GROOTTE die telt en niet het aantal bogen**, want de afvlakking
volgt de straal, en een knoop van 3,5 eenheden in `syllabus-13-ras-cas.svg` kost niets.

Meet dat na zoals je de schaalfactor nameet, met `page.get_contents().get_data()` per bladzijde en
`len()` erop, en leg het naast de vorige PDF. Op het scherm zie je er niets van, en de figuur is
correct: het is alleen het bestand dat groeit.

**En verwacht niet dat hertekenen de PDF kleiner maakt, want het omgekeerde is waar.** Nagemeten op 9
september 2026, bij de export die de hele worklijst in een keer meenam: 24 figuren gingen van raster
naar vector, en het bestand ging van 13,21 naar 13,41 MB. De twee helften lopen tegen elkaar in. De
BEELDEN werden lichter, van 118 unieke objecten en 6,25 MB naar 105 en 5,92 MB, dus de rasters die
eruit gingen scheelden 0,33 MB. De CONTENTSTREAMS werden zwaarder, van 6,38 naar 6,92 MB, want daar
zit een vectortekening in. Netto 0,20 MB erbij.

Dat is geen fout en het is ook geen reden om iets terug te draaien: 13,41 MB is ruim binnen wat deze
repo aankan, en de winst van een hertekening zit in de scherpte, de taal en het palet en niet in
bytes. Maar het is wel de verwachting die je moet bijstellen. **`krimp()` heeft de rasters al op
`KRIMP_DPI` gezet**, dus je vervangt geen dure foto maar een al gekrompen foto, en een gedetailleerde
tekening kost makkelijk meer dan wat ze vervangt. Wil je weten waar een export naartoe is gegaan,
splits het dan zoals hierboven, in beeldbytes en contentstreams; het totaal alleen zegt niets over
welke van de twee bewoog.

**De grens loopt in drieen en niet in tweeen.** Een foto blijft, en een SCHERMAFDRUK VAN EEN ECHT
VENSTER blijft ook, want die natekenen levert een venster op dat lijkt op wat de student ziet zonder
het te zijn, en dan gaat hij het verschil zoeken. Dat is Schijfbeheer, het BIOS-scherm, de
rechtenvensters van Windows, de webwinkelbladzijden en de speedtest. Wat wel gaat: tekeningen,
schema's, grafieken en een tabel die alleen als afbeelding bestaat. Een geannoteerde foto blijft een
foto, ook als de aanwijzingen erop Engels zijn; dat is een gebrek dat je noteert en niet oplost door
de foto na te tekenen.

**Een geleende meting wordt hertekend met haar bron in woorden.** Ook beslist op 9 september 2026, en
het is een uitzondering op de toets van hoofdstuk 9 dat een watermerk met een leesbare naam mag
blijven. De getallen blijven wat ze zijn en worden nooit bijgewerkt; wat verandert is de taal van de
assen en het palet, en onder de figuur komt te staan van wie de meting is. Een AFGEDRUKTE BLADZIJDE
valt daar niet onder en blijft beeld: de datasheets van Beckhoff, het artikel van TechPulse en de
ASCII-tabel van 10.3, die om haar omvang al buiten deze regel viel.

**De worklijst, en ze wordt afgewerkt in stappen van twee per sessie.** Dat tempo is bewust: twee
tekeningen per sessie is wat er in een context past zonder dat de kwaliteit zakt. Streep af wat af
is.

**De rij van 9.4 is er op 9 september 2026 afgehaald zonder dat er iets hertekend is, en ze had er
nooit op mogen staan.** `syllabus-09-moederbord-15.png` is een bladzijde uit een datasheet van
Beckhoff, en de uitzondering hierboven noemt die met zoveel woorden. De verleiding was de
leesbaarheid: de tabel drukt op 82,3mm, dus haar tekst staat er ongeveer 1,3mm hoog tegen 2,5mm voor
de lopende tekst, en dat is de afweging die verloren heeft. Wat zwaarder weegt, is dat je aan die
tabel ZIET dat ze uit een datasheet komt, en dat is zelf een gegeven: het toont de student dat die
cijfers echt zijn en niet door ons bedacht. Overtypen maakt er onze tabel van. **Zet de rij er dus
niet opnieuw op**, en lees hetzelfde argument bij hoofdstuk 9 in NOTITIES.md.

**De lijst is op 9 september 2026 leeggewerkt**, in de laatste ronde door drie sessies naast elkaar,
en de tabel is daarom weg in plaats van leeg. Van alles wat erop gestaan heeft is er precies **een
rij afgevoerd zonder hertekening**, de vergelijkingstabel van 9.4, die er nooit op had mogen staan en
hierboven haar eigen alinea heeft; al de rest is hertekend. **De regels erboven blijven wel gelden**,
want ze zeggen HOE er hertekend wordt en niet WAT er nog ligt: elke tekening die nog binnenkomt gaat
langs dezelfde molen. **En er ligt nog werk**: hoofdstuk 15 draagt twee tekeningen en die kunnen pas
na de import van dat hoofdstuk. Zet ze hier weer als een lijst neer zodra er meer dan een handvol
openstaat; voor twee is een zin genoeg.

**De vijf RAID-tekeningen zijn op 9 september 2026 in een keer afgewerkt**, en dat was de reden dat
ze als een rij op deze lijst stonden: ze kwamen uit drie bronnen in drie stijlen, en precies daar
moet de student ze naast elkaar kunnen leggen. Ze heten nu `img/syllabus-11-raid-0.svg` tot
`-raid-10.svg`. **Wat een familie duurder maakt dan vijf losse tekeningen is dat de schaal gedeeld
is**: een schijf is in alle vijf even breed en een blok even hoog, dus de gedrukte breedte volgt uit
het aantal schijven en is geen knop meer per figuur. Wil je er een versmallen, dan versmal je ze
alle vijf. De vijf zijn met een generator geschreven om precies dat te kunnen waarmaken; die staat
niet in de repo, want de SVG's zijn de bron.

**`syllabus-11-harde-schijf-01.png` is het zwaarste stuk van de lijst en staat er met een
waarschuwing bij.** Het is geen schema maar een gedetailleerde doorsnedetekening met dertien
genummerde onderdelen, en NOTITIES.md had bij hoofdstuk 11 genoteerd dat je dat niet natekent. Onder
deze beslissing gaat ze wel mee, maar ze is geen tekening van een uur en het risico is dat de
hertekening minder toont dan het origineel. Neem ze niet samen met een tweede.

**Hoofdstuk 13, Random Access Memory, is op 9 september 2026 in een parallelle sessie ingevoerd**,
en die sessie heeft er meteen drie van zijn eigen gevallen afgewerkt: het blokschema van SDR SDRAM
werd `img/syllabus-13-sdr-sdram.svg`, en de twee Hamming-tabellen van 13.10 werden overgetypte
HTML-tabellen. De vijf die daarna overbleven zijn op diezelfde dag afgewerkt, in twee sessies naast
elkaar, en van dit hoofdstuk staat er dus niets meer op de lijst: `-01` werd
`img/syllabus-13-adresrooster.svg`, `-04` werd `img/syllabus-13-emmers.svg`, `-05` werd
`img/syllabus-13-ras-cas.svg`, `-08` werd `img/syllabus-13-sdr-tegen-ddr.svg` en `-11` werd
`img/syllabus-13-ddr3-prefetch.svg`. **Dat er twee sessies tegelijk in dezelfde werkboom aan een
en dezelfde lijst werkten, is wat het afstemmen kostte** en niet het tekenen: de lijst zelf, het
blok van hoofdstuk 13 in NOTITIES.md en `downloads/` zijn met zijn drieen de plaatsen waar twee
sessies elkaar overschrijven. Wat werkte was per rij afspreken wie hem vasthoudt, een gedeeld
bestand opnieuw inlezen vlak voor je erin schrijft, en de export aan een van de twee laten.

**`git commit --only` met een pathspec houdt de andere sessie er NIET buiten, en dat is precies
verkeerd om wat je verwacht.** Het commit de WERKBOOMVERSIE van elk bestand dat je noemt, dus het
beschermt de bestanden die je niet noemt en niet jouw eigen hunk in een bestand dat je wel noemt.
Op 9 september is zo de wijziging van de ene sessie aan `CLAUDE.md` meegegaan in de commit van de
andere: inhoudelijk klopte alles, maar de commit zegt iets anders dan hij draagt. Noemen twee
sessies hetzelfde bestand, dan is de enige die er iets aan verandert de laatste die commit, en de
afspraak hoort dus te zijn dat een gedeeld bestand aan EEN van de twee toebehoort tot het gecommit
is. Kijk na wat je commit met `git show --stat` en niet alleen wat je gestaged dacht te hebben.

**Er is een TWEEDE valkuil naast die, en ze werkt net andersom: de index is ook gedeeld.** Gevonden
op 9 september 2026, later diezelfde dag en met twee tekensessies tegelijk. Een kale `git commit`
commit de HELE index, dus ook wat de andere sessie er intussen in gezet heeft: er landden zo twee
bestanden van hoofdstuk 11.8 in de commit van 11.5. **Selectief `git add` beschermt je dus niet**,
want jouw `add` bepaalt alleen wat er bij komt en niet wat er al in staat. De twee valkuilen samen:
`--only <pad>` neemt te veel uit de WERKBOOM, en een kale commit neemt te veel uit de INDEX.

Wat wel werkt is `git commit -- <alle paden>` met elk pad expliciet genoemd, want dat sluit de index
van de ander uit. Voor je eigen bestanden kan dat altijd. Voor een bestand dat twee sessies
bewerken helpt geen enkele git-vorm, en daar is de afspraak een token: EEN sessie tegelijk schrijft
in `CLAUDE.md` en in `Theorie/Syllabus/NOTITIES.md`, en een derde sessie deelt dat token uit. Kijk
elke commit na met `git show --stat`; zit er een bestand in dat niet van jou is, commit dan niet
maar meld het.

**Twee details die elk een mislukte poging kosten.** `--` moet NA `-m` en zijn boodschap staan, want
anders leest git de `-m` zelf als pad en faalt de commit met "pathspec '-m' did not match any file".
En wil je alleen `check-content.py` groen krijgen, waar regel 1 valt over een bestand dat nog niet in
git zit, gebruik dan `git add -N` en geen echte `git add`: intent-to-add zet het pad in de index zonder
er inhoud in te leggen. **Stagen en dan doorwerken is precies hoe je werk in andermans commit belandt**,
want het venster tussen je `add` en je `commit` is het venster waarin de ander commit.

**Dat hoofdstuk heeft ook de eerste uitzondering op deze beslissing opgeleverd, en ze is door de
lector toegestaan.** De geannoteerde foto van de DIMM-sloten in 13.11 is `img/syllabus-13-channels.svg`
geworden, terwijl de regel hierboven zegt dat een geannoteerde foto een foto blijft. De reden is niet
de taal van de callouts maar hun inhoud: ze groeperen de twee gelijkgekleurde sloten als een channel,
en de lopende tekst is diezelfde dag rechtgezet naar een module per channel, dus de foto stuurde de
lezer precies de verkeerde kant op. **De uitzondering geldt dan ook alleen daarvoor**: wat een
geannoteerde foto vervangt is geen natekening van die foto maar een tekening van het begrip, en de
toets is of de aanwijzingen op het beeld de tekst ernaast tegenspreken. Staat er alleen Engels op,
dan blijft het een foto.

**Twee gevallen zijn afgewogen en blijven staan, en dat is geen vergetelheid.** De illustratie van de
kat van Schrodinger in 1.6 is een prent en geen schema: hertekenen maakt er iets anders van. En de
callouts op de CX9020-foto van 4.2 staan in het Engels, maar het is een foto, dus de enige uitweg zou
bewerken van het beeld zijn en dat doet deze repo niet.

**De dpi-grens zegt wanneer je moet hertekenen, niet wanneer het mag.** Een gescande tekening in
grijstinten mag ook boven die grens hertekend worden, en hoofdstuk 10 is het eerste dat het doet:
image86 van 10.1 droeg geen watermerk, stond in het Nederlands en drukte op 152 dpi, en NOTITIES.md
had daarom genoteerd dat er geen reden was om ze te hertekenen. Wat de doorslag gaf was de korrel
van de fotokopie naast tekeningen die in het palet van de syllabus staan. De voorwaarden blijven
dezelfde als bij de MBR van hoofdstuk 3: geen enkel gegeven van het origineel valt weg, de figuur
wordt gerenderd voor je ze vertrouwt, en de bladspiegel wordt nagerekend omdat een SVG zelden
dezelfde verhouding heeft als de scan. **Voeg daarbij geen getal toe dat de figuur niet op schaal
kan tonen**: de twee TTL-drempels van 0.4 V en 2.4 V liggen op 8 en 48 procent van 5 V, en op
87.0mm valt de eerste stippellijn dan op anderhalve millimeter van de nullijn. De figuur blijft dan
schematisch, zoals de scan, en de getallen blijven in de lopende tekst.

**Geleend materiaal mag ingekort worden tot de bladzijden die iets dragen, en de bron zegt dan wat
er niet staat.** 9.5 verwees naar dertien volle bladzijden datasheet van Beckhoff, waarvan er zes
het antwoord op de oefening dragen en zeven bestelnummers en toebehoren zijn. Beslist op 7 september
2026: het worden de zes, de bijschriften blijven "Bladzijde 1 van 4" en "Bladzijde 2 van 4" zodat de
lezer ziet dat de datasheet doorloopt, en de info-box Bron noemt het adres van de volledige versie.
Dat is iets anders dan het artikel van hoofdstuk 3, waar alle vier de bladzijden bleven staan: dat
telde er vier en niet dertien. **Schrap de bestanden dan ook uit `img/`**, want regel 1 valt over een
afbeelding waar geen pagina naar wijst, en noteer het, want een herimport zet ze alle zeven terug.

**Een watermerk zonder naam is iets anders dan een watermerk met een naam.** Hoofdstuk 2 liet twee
watermerken staan en hoofdstuk 3 liet er een staan en noemde de bron erbij, en dat leek de regel.
Hoofdstuk 9 wees uit dat het dat niet is: de socketfoto van 9.3 droeg ronde merktekens van een
fotobank over het hele beeld, zonder leesbare naam erin, dus er viel niet eens een bron bij te
schrijven, en zo een merkteken betekent dat het beeld van iemand is die ervoor betaald wil worden.
Beslist op 7 september 2026: **die gaat eruit en er komt een eigen foto in de plaats.** De toets is
dus of de bron te noemen valt, en niet of er een watermerk staat. Kijk voor je schrapt na of er
tekst aan hangt: deze foto zweefde, dus haar alinea was gewone lopende tekst en geen enkele zin
verwees ernaar. Een herimport zet zo een foto terug.

**Een productstatus of een prijs is geen argument in een oplossing.** De datasheet van de CX5620 in
9.5 draagt "product announcement" en die van de CX5120 "regular delivery", en de oplossing van de
derde vraag gebruikte dat eerst als het argument voor wie de goedkoopste koos. Beslist op 7
september 2026 door de lector: **dat gaat eruit**, want zo een status hangt aan de datum van de
datasheet en niet aan de afweging, en of hij vandaag nog klopt weet niemand hier. Een oplossing
steunt op wat er in de tekst of op de afgedrukte bladzijde staat en niet verandert. Dat de status op
de schermafdruk zelf te lezen is, blijft wel zo: een afgedrukte bladzijde wordt niet bewerkt.

**Een lege Heading 2 wordt een pagina zonder titel, en die gooi je weg.** Achteraan hoofdstuk 9
staat er een, een restant van een bladovergang, en de importer maakt er een volwaardige sectie van
met een lege `<title>`, een lege `<h1>` en `Pagina.html` als naam, de terugval van `pascal()` op een
lege kop. Ze hoort niet in `reference.js`, en na een herimport staat ze er weer en faalt regel 2 tot
ze opnieuw weg is.

**Een element dat breder is dan de bladspiegel krimpt het HELE gedrukte document, en niets faalt.**
Ontdekt op 7 september 2026 bij hoofdstuk 11, en het is de scherpste bladspiegelregel die hier
staat. Chrome past bij `--print-to-pdf` een schaal toe zodra de inhoud ergens breder is dan de
pagina, en die schaal geldt voor het document en niet voor de bladzijde: tekst en afbeeldingen
werden 8,25% kleiner, er paste meer op een blad, en **hoofdstuk 1 tot 10 kropen 1 tot 4 bladzijden
naar voren** terwijl er aan geen van die hoofdstukken iets veranderd was. De oorzaak lag in een
enkele invultabel in hoofdstuk 11.

De maat die telt is niet 160,1mm maar wat er op die plaats overblijft. `ol > li` springt in
`syllabus.css` **14,7mm** in, dus een tabel binnen een vraag heeft er nog **145,4mm**, en
`table-layout: fixed` maakt een tabel breder in plaats van de kolommen te knijpen zodra de
`--kolom-breedte` uit de Word meer optelt. De vijf bestaande `invulkolom`-tabellen in de syllabus
staan op 142,0mm, en dat is dus meteen de maat die je neemt.

**Kijk het na in de PDF en niet met het oog, en let op WELKE matrix je leest.** Elke bladzijde
opent met `q\n.23999999 0 0 -.23999999 0 841.91998 cm`, de omrekening van het papier, en die is op
elke bladzijde dezelfde. De schaal die je zoekt is de TWEEDE matrix, `3.1249194 0 0 3.1249194`
(0,75, de omrekening van CSS-pixels naar punten). **Die tweede matrix is alleen 3.1249194 wanneer de
bladzijde met tekst begint**: begint ze met een figuur, dan lees je de eigen schaal van die figuur
en niet die van de bladzijde, en dan lijkt er iets gekrompen terwijl er niets aan de hand is. Op 9
september 2026 zijn twee sessies daar op dezelfde ochtend in gelopen.

Wat wel werkt, en wat de controle is: **elke bladzijde opent met `.23999999 0 0 -.23999999`, en
elke bladzijde draagt ERGENS `3.1249194 0 0 3.1249194`** tenzij ze helemaal uit beeld bestaat.
Overloopt er iets, dan is die tweede reeks nergens te vinden en staat er een kleinere in de plaats.
Doe dat na elk hoofdstuk, want dit is precies het soort fout dat er op het scherm perfect uitziet.

**Lees die schaal met `pypdf` en niet met een regex over de ruwe bytes**, aangevuld bij hoofdstuk
12. De inhoudsbladzijden zitten in objectstreams, dus een grep over de gedecomprimeerde streams
vindt er maar een handvol, en dat zijn net de voorwerkbladzijden, die een eigen afdrukronde zijn en
dus nooit iets zouden melden. `PdfReader(...).pages[n].get_contents().get_data()` geeft ze wel
allemaal. Drie bladzijden vol beeld dragen helemaal geen tekstschaal, en dat is geen fout.
Vergelijk de verdeling met die van de vorige PDF (`git show HEAD:downloads/...pdf`) in plaats van
met een getal, want dan zie je meteen ook of de hoofdstukken ervoor verschoven zijn.

**Het voorwerk groeit mee, en sinds hoofdstuk 13 zijn het zes bladzijden en geen vijf.** De
inhoudstafel loopt over vier bladzijden en de twaalf rijen van dat hoofdstuk pasten er niet meer
bij, dus hoofdstuk 1 tot 12 zijn er allemaal een opgeschoven. **Dat is geen fout en het is ook niet
te vermijden**, maar het betekent wel dat "de hoofdstukken ervoor staan op exact dezelfde
bladzijde" niet meer de toets is. De toets is dat alle oude rijen er nog staan en dat de
verschuiving voor elke rij dezelfde is: leg de inhoudstafel dus rij voor rij naast de vorige met
die verschuiving erbij, in plaats van op gelijkheid te vergelijken. Verspringt een enkele rij
anders dan de rest, dan is dat een hoofdstuk dat een bladzijde gewonnen of verloren heeft, en dat
wil je weten.

**De importer laat twee soorten afbeelding vallen, en meldt geen van beide.** Ook dat kwam bij
hoofdstuk 11 boven, waar de Word er 44 plaatst en `img/` er 38 kreeg. Een afbeelding die aan een
KOP hangt verdwijnt: bij een Heading 1 of 2 snijdt `verwerk()` die kop eraf voor `renderen()` iets
ziet, dus het bestand wordt niet eens geschreven, en bij een Heading 3 wordt het wel geschreven maar
niet geplaatst, waarna regel 16 over het weesbestand valt. En een afbeelding die in een TABELCEL
zit verdwijnt zodra `lege_kolommen()` die tabel als invulruimte leest. In hoofdstuk 11 kostte dat de
QR-code naast de kop van 11.4 en de drie tekeningen waar vraag 5 naar verwijst, en die vraag was
daarmee onbeantwoordbaar. **De importer is niet aangepast**, dus tel na elke import de afbeeldingen
in het hoofdstuk tegen wat er in `img/` staat.

**Tel daarbij `r:embed` en niet `<a:blip`**, rechtgezet bij hoofdstuk 13. `<a:blip` matcht ook
`<a:blipFill` en de lege `<a:blip/>` die in een vulling zit, en dat scheelt: hoofdstuk 13 telt 21
keer `<a:blip` en heeft er 19. De maat die klopt is
`len(re.findall(r'<a:blip[^>]*r:embed=', xml))`. Trek daar de kadericoontjes van 5,4mm af, twee per
hoofdstuk, want die gooit de importer weg; wat overblijft hoort in `img/` te staan. Bij hoofdstuk 12
kwam de naieve telling toevallig ook uit, dus je merkt dit pas in een hoofdstuk waar het misgaat.

**Een adres in de syllabus mag een QR-code naast zich krijgen, en die staat soms al in de Word.**
11.4 hangt aan een YouTube-video en de tien vragen zijn er zonder niet te maken, dus het adres van
43 tekens moest overtypbaar zijn. De Word had dat zelf al opgelost met een QR-code naast de kop; die
was bij de import weggevallen. De regel van hoofdstuk 9 blijft wel gelden: het adres zelf is gewone
tekst en geen `<a>`.

**De dpi-grens van 98 is een diagnose en geen drempel waar je overheen moet.** Hoofdstuk 11 had er
acht onder, waarvan vier op 96, en die vier zijn blijven staan: twee millimeter versmallen tilt ze
formeel over de grens en levert op papier niets op. Hoofdstuk 9 versmalde foto's die op 56 tot 81
dpi stonden, en dat is het verschil. Wat wel telt naast de dpi is een tweede reden: Engelse labels
in een Nederlandse tekst, of een getal in het beeld dat de tekst intussen anders schrijft. Zo werd
de wear-levellingtekening van 11.5 hertekend op 96 dpi, omdat ze "4 KB" drukt waar de tekst nu 4 KiB
zegt.

**Een geleende schermafdruk die twee dingen naast elkaar zet, mag je splitsen om ze leesbaar te
krijgen.** De Word zet de vier vergelijkingen van 11.6 op 233 tot 240mm, want daar staan ze gedraaid
op een blad; op de bladspiegel van 160mm drukte de tekst erin op 1,10 tot 1,98mm inkthoogte per
regel, tegen 2,5mm voor de lopende tekst. Elk beeld is langs zijn eigen scheidingslijn in twee
gesneden en de twee helften staan onder elkaar, elk op 160mm, wat de druk verdubbelt naar 2,21 tot
3,95mm. **Meet dat na en gok het niet**: de inkthoogte van een regel is te tellen in de
bronafbeelding, en de vergelijking met de 2,5mm van de lopende tekst en de 3,18mm van het artikel
van hoofdstuk 3 zegt of het nog leest. De prijs is bladzijden, en die is hier aanvaard.

**Een kilo-etiket op een macht van twee wordt IEC waar de syllabus zelf rekent, en blijft GB waar ze
een fabrikant citeert.** Dat is de grens die hoofdstuk 13 getrokken heeft voor het geval dat
hoofdstuk 12 had opengelaten, en ze is scherper dan "elke macht van twee wordt KiB". 13.1 rekent
zelf uit hoeveel een processor kan aanspreken, dus 2^32 bytes wordt `4 GiB` en 2^64 bytes wordt
`16 EiB`; "16 exabytes" was daar decimaal 18,4 en dus gewoon fout. Maar "vaak 16 GB tot 32 GB
werkgeheugen aangetroffen" is wat er verkocht wordt, en "de capaciteit is 64 MB" leest een etiket op
een foto af. Die blijven staan, om dezelfde reden als waarom een afgedrukte bladzijde niet bewerkt
wordt. **Wat de twee helften bij elkaar houdt is een bijgeschreven alinea**: een geheugenfabrikant
rekent zelf ook in machten van twee maar drukt GB op de module, net zoals Windows dat doet in
hoofdstuk 10. Zonder die alinea staat er GiB naast GB in dezelfde sectie en weet niemand waarom.
Reken die grens dus na per zin, en kijk daarbij ook de hoofdstukken ernaast na: hoofdstuk 9 bleef
onaangeraakt omdat elk getal daar aan de fabrikantskant staat.

**Een naam met twee betekenissen is iets anders dan een bewering met twee waarheden, en de uitkomst
verschilt.** 10.4 zegt "Een word zijn 16 bits" en 13.1 zegt dat een woord de breedte van de
processor is. Allebei kloppen ze, elk in hun eigen wereld: in de computerarchitectuur is een woord de
natuurlijke breedte, en in assembler voor x86 zijn WORD en DWORD sinds de 8086 op 16 en 32 bits
blijven staan. De fout was dus niet een van de twee zinnen maar dat 10.4 een conventie als algemene
definitie gaf. **Allebei de hoofdstukken krijgen dan een zin die naar de andere betekenis wijst, en
geen van beide verliest een voorbeeld**, anders dan bij hoofdstuk 5 en 8, waar de ene passage
gewoon fout stond en herschreven werd. Toets welke van de twee het is voor je iets schrapt.

**Kijk een figuur die tekst draagt na in de KRIMP, en niet op haar dpi.** `ONAANGEROERD` in
`export-syllabus.py` is er voor beeld waarvan een lezer de tekst moet kunnen lezen, en de verleiding
is om dat op de bron-dpi te beslissen. Dat is de verkeerde maat: wat telt is hoe groot de letters IN
het beeld zijn. De drie modulefoto's van 13.4, 13.5 en 13.6 staan op 269 en twee keer 220 dpi en
laten de student PC100-222-620 64MB aflezen; op `KRIMP_DPI` nagebootst met PIL en bekeken, is dat
moeiteloos leesbaar, dus er hoefde niets beschermd te worden. Doe die proef, ze kost drie regels
Python, en zet alleen in `ONAANGEROERD` wat ze niet doorstaat.

### Wat de eerste hoofdstukimport aan de importer veranderd heeft

**Word plaatst een afbeelding op twee manieren, en `import-syllabus.py` kende er maar een.** Een
INLINE afbeelding staat in de tekstregel zelf, en dan is de alinea eromheen haar bijschrift: zo zijn
de meeste figuren in deze Word gemaakt, en daar rekende de importer op. Een ZWEVENDE afbeelding
(`wp:anchor` met `wrapSquare`) is aan een alinea verankerd en de tekst loopt eromheen; die alinea is
gewone lopende tekst die toevallig naast het plaatje staat.

Zonder dat onderscheid wordt zo'n alinea een klein gecentreerd onderschrift, en de tekst die de
student hoort te lezen staat in de opmaak van een bijschrift. In hoofdstuk 1 gebeurde dat vier keer
op vijf afbeeldingen, waaronder de hele alinea over de ENIAC. `zwevend_van()` en `vast_bijschrift()`
vangen dat nu op: een zwevende afbeelding krijgt geen bijschrift uit de Word en haar alinea blijft
een `<p>`. De importer noteert het per geval in `IMPORT.md`.

**Dat raakt DeN ook**, maar minder: daar zijn 9 van de 92 afbeeldingen zo verankerd, hier 21 van de
132. Wie de scripts ooit samenvoegt, neemt deze kant op en niet de andere.

**`pascal()` brak een woord in twee op elk diakritisch teken.** De regel eronder
houdt alleen `[a-z0-9]` over, dus "vacuümbuizen" werd `VacuMbuizen` en
"Industriële computer vs embedded system", de titel van hoofdstuk 4, wordt
`IndustriLeComputerVsEmbeddedSystem`. Dat laatste is geen gevolg van een
redactionele keuze: het staat zo in de Word en het hoofdstuk is nog niet ingevoerd.
`ontdiakritiseer()` normaliseert nu naar NFKD en gooit de combinerende tekens weg,
zodat de kale letter blijft staan. Dit raakt DeN even hard en is de tweede
wijziging aan `import-syllabus.py` die geen string is.

**`slug()` brak diezelfde woorden, en dat merk je pas aan een bestandsnaam in `img/`.**
`ontdiakritiseer()` zat op `pascal()` en niet op `slug()`, dus de map van hoofdstuk 4 heette wel
`IndustrieleComputerVsEmbeddedSystem` terwijl zijn afbeeldingen
`syllabus-04-industri-le-computer-vs-embedded-system-01.png` heetten. De twee gaan nu allebei door
`ontdiakritiseer()`. Dit is de derde wijziging aan `import-syllabus.py` die geen string is, ze raakt
DeN even hard, en ze raakt de drie hoofdstukken die er al staan niet: geen van hun titels draagt een
diakritisch teken.

**De naam van een categorie in `reference.js` is de gedrukte hoofdstuktitel, en mag dus geen
diakritisch teken kwijtspelen.** `export-syllabus.py` drukt hem boven de eerste bladzijde van het
hoofdstuk en in de inhoudstafel. `reference.js` was tot hoofdstuk 4 volledig ASCII, en de titel
verscheen daardoor als "4 Industriele computer vs embedded system" boven een kader dat drie keer
"industriële" schrijft. De naam draagt nu het teken zelf, en dat is de enige regel in het bestand
die niet ASCII is. Dit raakt alleen de `name` van een categorie: een sectietitel komt uit de `<h1>`
van de pagina, en een blurb wordt nergens gedrukt.

**Een zwevende afbeelding heeft dus geen bijschrift meer, en dus ook geen `alt`.** `figuur()` valt
dan terug op "Afbeelding uit de syllabus", en dat is geen beschrijving. De vijf `alt`-teksten van
hoofdstuk 1 zijn met de hand geschreven na het openen van elk bestand, zoals de figuren van Labo
Partitioneren. **Een nieuwe import van hetzelfde hoofdstuk gooit ze weg**; dat is dezelfde afspraak
als voor elke andere handmatige correctie, want na de import is de HTML de bron.

**Inline zijn is geen garantie op een bijschrift, en dat is de scherpere formulering.** De regel
hierboven laat zich lezen als "zwevend betekent geen bijschrift, inline betekent wel een", en die
tweede helft klopt niet: wat `figuur()` als bijschrift neemt is de TEKST van de alinea rond de
afbeelding, en die alinea kan gewoon leeg zijn. In hoofdstuk 14 stonden alle drie de afbeeldingen
inline en geen enkele zweefde, en toch kreeg geen een een bijschrift, want alle drie de alinea's
droegen enkel het beeld. Hoofdstuk 13 had hetzelfde bij zijn zeventien. **Tel dus na de import
hoeveel figuren er "Afbeelding uit de syllabus" dragen** in plaats van het uit de verankering af te
leiden, en schrijf voor elk daarvan een `alt` met de hand na het openen van het bestand.
