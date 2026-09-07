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
| `Labo/LinuxBasis/` | LinuxEnDistributies, DeTerminal, Navigeren, MappenEnBestanden, ZoekenEnBekijken, ProcessenEnRechten, Archieven | yes |
| `Labo/LinuxGeavanceerd/` | GebruikersEnGroepen, Rechten, SoftwareUitDeRepository, SoftwareBuitenDeRepository, Docker | yes |
| `Labo/EmbeddedSystems/` | WatIsEenEmbeddedSystem, RaspberryPiInstalleren, PiOpHetNetwerk, AlsHetNietLukt, CodesysInstalleren, CodesysProject, Docker, NodeRed, MqttBroker | yes |

Linux Basis shows what grouping means: 22 command pages become 7 subjects. `Navigeren` is pwd, ls
and cd; `MappenEnBestanden` is mkdir, vi/nano, three cp pages, two mv pages and two rm pages;
`ZoekenEnBekijken` is find, more and du; `ProcessenEnRechten` is ps, sudo and the two shutdown
pages. The two labs without a spiekblad are the two with no commands in them: Assemblage is hardware
and Virtualiseren is a GUI. Partitioneren is a GUI too, and its spiekblad is a table of partition
kinds and their limits rather than of commands, which is what a student there keeps looking up.

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
schijf. image46 is not a loose product photo: it is one of the three cells of a comparison table in
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

## De syllabus, hoofdstuk 1 tot 8 ingevoerd 7 september 2026

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
