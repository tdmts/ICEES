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

**This repo is at day zero.** The skeleton, the engines and the tooling are in place and the
Brightspace export is staged in `_incoming/`; no page under `Labo/` exists yet. `check-content.py`
is green with one warning saying exactly that, and the warning disappears with the first module.

## De indeling in Orion, en waarom niets zijwaarts linkt

Identical to DeN, and its `CLAUDE.md` carries the full reasoning. The short version, because every
rule below hangs off it:

| Menu-item | Pagina |
|---|---|
| Inleiding | `Labo/<Naam>/overview.html` |
| Theorie | `Labo/<Naam>/Theorie/reference.html` |
| Opdracht | `Labo/<Naam>/Opdracht.html` |
| Verslag indienen | a Brightspace dropbox, no page of ours |

A lab is four Orion topics, not one. **That menu does not move when the iframe does.** Navigating
downward inside an entry is fine and the menu is merely coarser than where you are; navigating
sideways to another entry leaves the menu pointing at a page the student is not reading. So
**nothing in this site links sideways inside the iframe**: you either name the entry and drop the
link, or you open it with `target="_blank"`. Rule 10 of the content check fails a same-frame link
between two entries.

`reeks` in [reference.js](reference.js) is the machine-readable version of that table. One reeks is
one menu entry, and every engine stays inside it. A page at the top of a reeks gets no nav row at
all: there is nothing above an Orion entry that this site may send you to.

No build system and no test suite. You edit HTML/CSS/JS directly. `scripts/` holds the tooling:
eight Python scripts, of which `check-content.py` and `import-brightspace.py` are stdlib only, plus
one Node script, `check-nav.js`, which needs `jsdom` and is the only reason a `node_modules/` may
exist here.

## Relation to tdmts/DeN

This repo was started from DeN and everything it shares with it was **copied, not shared**: the four
engines and the eight scripts are byte-for-byte copies with the DeN-specific strings rewritten.
Read DeN's `CLAUDE.md` for the reasoning behind any shared part; read this section before you copy
anything across, in either direction.

**Whether the engines should live in a repo of their own is still open, and deliberately so.** DeN's
own note says the question becomes answerable once ICEES exists and there are two real diffs to
compare. That is now true for the first time, but comparing a day-zero repo against a finished one
compares the copy against itself: every difference so far is a rewritten string, not a design
choice. The question gets decided once ICEES has its six modules and the three courses lie side by
side, and not before. Two things already argue against a naive merge: `back-link.js` resolves its
sibling manifest off `document.currentScript.src`, so moving it to a shared origin is a rewrite
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
pages, one per command, each a title and three lines. That is a reading order for a person who
already knows what he is looking for and a wall for a person who does not. They become roughly six
theory pages by subject. This is the one structural difference from DeN that touches every lab, and
it is why the page split gets approved before anything is written.

**A grouped lab gets a `Spiekblad.html`**: every command of that lab in one table, which the student
keeps beside him while he works through the opdracht. Grouping by subject is right for reading and
wrong for looking something up, and the spiekblad is what pays for it. It sits in the theory reeks,
because it belongs to the menu entry Theorie.

**What was kept identical on purpose,** so the engines stay mergeable: the `window.LAB_REFERENCE`
global, the `reference.js` filename, the `reference.html` hub filename, and the
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
Algemeen/              planning and evaluation, outside both tracks on purpose
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
  (`/content/enforced/...`): those paths break every academic year.
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

Never copy or edit them here. A styling bug is reported there, not worked around here.
`tdmts/OrionContent/template.html` renders every component with its exact markup: read it before
authoring rather than reproducing markup from memory.

## The engines

Copies of DeN's, and its `CLAUDE.md` documents each one in full. What they are:

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
the trailing underscore is dated April 2024 and is the previous version. The `AFKORTINGEN` table in
`import-syllabus.py` is still DeN's networking vocabulary and needs this course's own (BIOS, UEFI,
GPT, MBR, VM, SSD, MQTT) before the first chapter is imported, or those words come out of `pascal()`
mis-capitalised.

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
gevonden". That conflates two different things, and on a day-zero repo it fails on the true one. The
error is kept for a manifest that does not parse, because rules 2 and 3 hang off that parse and a
broken regex would make every check under it vacuously green; a `window.LAB_REFERENCE` that is
literally `{}` is a warning instead. Both branches were verified by putting a broken manifest back.

## Prose style

[`SCHRIJFSTIJL.md`](SCHRIJFSTIJL.md), copied from DeN, is the single source of truth for how the
Dutch reads. All content in Dutch, students addressed with **`je`**. No em-dashes, which is the one
style rule the check enforces.

Its examples still name DeN pages, because this course has not had a style round yet. Two patterns
carry over exactly and are worth naming: **patroon 17** (a page may not rely on another lab, because
the labs are independent modules and you do not know which ones a student has done) and **patroon
18** (a page never refers to the history of the course material itself, which is precisely the kind
of sentence you write while migrating).

Filenames are **PascalCase Dutch nouns**: `Partitietabel.html`, `Opdracht.html`. The exceptions are
the two hub filenames, `overview.html` and `reference.html`, which the engines match on.

## The six modules

Approved on 4 September 2026, together with the assignment split below. These names are settled: a
module id is the folder name in lower case and it is also in the `localStorage` key, so renaming one
wipes the read-flags of every student who has already been in it.

| Folder | Theory pages | Spiekblad |
|---|---|---|
| `Labo/Assemblage/` | Veiligheid, Componenten, Demontage, Assemblage, BiosUefi | no |
| `Labo/Virtualiseren/` | WatIsVirtualisatie, VirtueleMachineAanmaken, InstallatieUbuntu, SchijfEnGeheugen, GuestAdditions | no |
| `Labo/Partitioneren/` | Partitietabellen, GPartedStarten, PrimairePartities, ExtendedEnLogisch, GptPartities | yes |
| `Labo/LinuxBasis/` | LinuxEnDistributies, DeTerminal, Navigeren, MappenEnBestanden, ZoekenEnBekijken, ProcessenEnRechten, Archieven | yes |
| `Labo/LinuxGeavanceerd/` | GebruikersEnGroepen, Rechten, SoftwareUitDeRepository, SoftwareBuitenDeRepository, Docker | yes |
| `Labo/EmbeddedSystems/` | WatIsEenEmbeddedSystem, RaspberryPiInstalleren, PiOpHetNetwerk, AlsHetNietLukt, CodesysInstalleren, CodesysProject, Docker, NodeRed, MqttBroker | yes |

Linux Basis is the one that shows what grouping means: 22 command pages become 7 subjects.
`Navigeren` is pwd, ls and cd; `MappenEnBestanden` is mkdir, vi/nano, three cp pages, two mv pages
and two rm pages; `ZoekenEnBekijken` is find, more and du; `ProcessenEnRechten` is ps, sudo and the
two shutdown pages. The two labs without a spiekblad are the two with no commands in them: Assemblage
is hardware and Virtualiseren is a GUI. Partitioneren is a GUI too, and its spiekblad is a table of
partition kinds and their limits rather than of commands, which is the thing a student there keeps
looking up.

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

**`Algemeen/Planning.html` and `Algemeen/Evaluatie.html` are both coming**, and both are blocked on
input rather than on a decision: the schedule of the labs and the theory, and the weights (theory
against the labs, and what each part contributes inside a lab). Ask for those before writing the
first `overview.html`, because rule 9 sends every hub to these two pages and a hub written without
them will quietly restate a count it does not own.

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
  DeN's `QUICKLINK_RE` was case-sensitive, so it matched 6 of this export's 16 quicklinks and the
  five dropboxes among the other ten (virtualiseren, Linux basis, chmod, chown, chgrp) were reported
  as "skipped" rather than staged. **Five assignments, gone, with one line in the summary saying a
  link was not understood.** The regex now carries `re.I`. This is the one change to the importer
  beyond rewritten DeN strings.
- **The three lesopnames are in the export twice, and the manifest keeps the right copy.**
  `migration/lesopnames/` holds `Demontage`, `Assemblage` and `BIOS`, each a bare Panopto iframe,
  and no `<item>` references any of them. That looks like content the manifest walk loses, and it
  is not: the same three recordings are embedded in the three pages the manifest *does* carry
  (`Demontage`, `Assemblage`, `BIOS/UEFI omgeving openen`), on the same three Panopto ids
  (`df19b7cf`, `d2e5a5cb`, `2d82f06b`). The standalone files are the leftover, the pages are the
  course. Check the ids before concluding either way; the id is the only thing that says whether
  two files are the same recording.
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
treatment a PDF already gets and for a second reason that holds regardless of cookies, which is that
a 720×405 player inside the narrow Orion iframe is unreadable. The three ids are `df19b7cf-8390-41c1-81fd-b1e800a1cb6a`
(Demontage), `d2e5a5cb-ce88-4a1d-91fb-b1e800a47a0e` (Assemblage) and
`2d82f06b-33e4-4c62-a685-b1e800a68d7d` (BIOS/UEFI). Never carry the `Embed.aspx` iframe across from
the Brightspace page: it renders as an empty frame under Safari's ITP with nothing failing.
