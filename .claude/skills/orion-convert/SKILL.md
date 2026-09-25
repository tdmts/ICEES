---
name: orion-convert
description: Convert raw content (a staged Brightspace topic from _incoming/, messy HTML, plain text, or an existing page) into an ICEES lab page: a hub, a theory page, a spiekblad, a Test jezelf, a stappenplan page or an Opdracht with its verslag. Use whenever the user wants to turn source content into a proper course page, restyle an old page, work down _incoming/WORKLIST.md, or asks to "convert this to the template".
---

# Convert content into an ICEES page

**Read [`../OrionTools/skills/convert.md`](../../../../OrionTools/skills/convert.md) first, in
full.** That is the procedure, the skeleton and the component table, shared by every Orion course.
This file only says what ICEES adds, and most of that is already in
[`CLAUDE.md`](../../../CLAUDE.md): this file says which section to read for which page.

## Not this skill

- **A chapter of the syllabus** comes out of the Word with `orion.py import-syllabus`, and a deck
  out of a pptx with `orion.py import-slides` (`CLAUDE.md`, *The three tracks*). A second run of
  either throws away hand corrections.
- **Labo Embedded Systems** is not started on purpose: its topics wait in `_incoming/` until its
  opgave exists (`CLAUDE.md`, *What this is*).

## The pages of a lab

A lab is a module `Labo/<Naam>/` with a fixed menu (`CLAUDE.md`, *De indeling in Orion*); which
theory pages each lab has is in *The six modules*, and each written lab has its own section with the
decisions taken while writing it. Read that section before adding to a lab.

| Page | What to read first |
|---|---|
| `overview.html`, the Inleiding | the lead of pattern 9 in [`SCHRIJFSTIJL.md`](../../../SCHRIJFSTIJL.md); a hub links `Planning.html` and `Evaluatie.html` and never `Studiefiche.html` or `Studiemateriaal.html` (*De studiefiche*) |
| `Theorie/Spiekblad.html` | the one table the student keeps looking up; *The six modules* says which labs have one and why |
| `Theorie/TestJezelf.html` | `ol.vragen`, exactly one `juist` per question |
| `Overzicht.html` and the stappenplan pages | *De volgorde binnen het menu-item Opdracht*: in a guided exercise followed by independent work, `Overzicht.html` opens the series and `Opdracht.html` is the last page |
| `Opdracht.html` | *The three tracks*: the assignment lives in a `<!-- verslag -->` comment, the page is a landing page with a lead and the button "Opdracht downloaden" |

After writing or changing an `Opdracht.html`, regenerate its template in the same commit:
`python ../OrionTools/orion.py export-verslag Labo/<Naam>`.

**The studiefiche is the yardstick** (`CLAUDE.md`, *De studiefiche*): a page serves one of its four
doelstellingen. Content that serves none is worth reporting, not converting silently.

## Names and links

- Filenames are PascalCase Dutch nouns, with the capitals `syllabus.afkortingen` in
  `oriontools.json` pins (`BiosUefi.html`).
- No page links to another page in the frame: name the page, or open it with `target="_blank"` when
  the student needs it while working (the "Zie ..." links of a Test jezelf).
