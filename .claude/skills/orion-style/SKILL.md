---
name: orion-style
description: Bring one lab's or one syllabus chapter's existing prose in line with SCHRIJFSTIJL.md - strip the performed writing (closing punchlines, rhetorical questions, stock lead openers, decorative diminutives, filler adverbs, Netherlandic word choice, remarks about the course itself) while protecting everything didactic. Use when the user wants the writing style of existing pages fixed, asks to "herschrijf labo Partitioneren volgens de schrijfstijl", "pas de schrijfstijl toe", or wants the next unit in the style pass.
---

# Apply the house writing style to one unit of ICEES

**Read [`../OrionTools/skills/style.md`](../../../../OrionTools/skills/style.md) first, in
full.** That is the procedure, shared by every Orion course. This file only says what ICEES adds.

## The units

- **A lab**: one module `Labo/<Naam>/`, in the order of `orion.json`.
- **A chapter of the syllabus**: one folder under `Theorie/Syllabus/Theorie/`. The student reads it
  as the PDF, so the pass ends with `python ../OrionTools/orion.py export-syllabus` (minutes, in the
  background) and commits the PDF with it. `CLAUDE.md` records the decisions of the earlier
  language round on the syllabus (*De syllabus, hoofdstuk 1 tot 16*: the decimal comma, the
  apostrophes and ellipses, the inch mark, the open list of `men`); read them before a chapter.
- **A deck** under `Hoorcollege/` only when the user asks: a slide has a fixed size, so a longer
  sentence can be cut off without a sound. Open the deck in a browser afterwards; `hoorcollege.js`
  marks a slide that no longer fits. Then `orion.py export-handout`.

The ledger is `review/schrijfstijl.md`; the first pass creates it.

## What else stays untouched here

- **The `<!-- verslag -->` comment is prose the student reads**, in the docx, so it is in scope. It
  must never contain an `-->` or a bare `--`. Regenerate the template afterwards with
  `orion.py export-verslag`.
- **Commands and terminal output** in a stappenplan or a spiekblad: they are what the student types
  and sees, so they stay literal, like a screen text.
- **A question and its options** in an `ol.vragen`: tighten the wording, never the option a `juist`
  sits on.
