---
name: orion-qti
description: Write multiple-choice questions on a piece of ICEES course material and export them as a QTI 2.1 zip for the ANS test environment, or export an existing Test jezelf as a practice test. Use whenever the user asks for a toets, a quiz, MC-vragen, a QTI file, an ANS import, or "maak vragen over" a lab, a theory page or a syllabus chapter.
---

# Multiple-choice questions for ANS, in ICEES

**Read [`../OrionTools/skills/qti.md`](../../../../OrionTools/skills/qti.md) first, in full.**
That is the procedure, shared by every Orion course. This file only says where ICEES keeps what
it needs.

- **The material** is in two tracks: the theory of a lab under `Labo/<Naam>/Theorie/`, and the
  syllabus under `Theorie/Syllabus/Theorie/<Hoofdstuk>/`, one page per section, in the order of
  `reference.js`. A request for "hoofdstuk 9" or "het moederbord" means the syllabus; a request
  for a lab means its `Theorie/` pages. What the course sets out to teach is in the studiefiche
  (`CLAUDE.md`, *De studiefiche*); a question on something it does not cover is worth a word to
  the user.
- **Questions students have already seen**: each lab's `Theorie/TestJezelf.html`, and a
  `TestJezelf.html` per syllabus chapter; the syllabus ones print with their answers in the PDF.
  The `ol.vragen` inside the `<!-- verslag -->` comment of an `Opdracht.html` are verslag
  questions, not multiple choice, and no source for `export-qti`.
- **Terminal commands and output** are a plain `<pre><code>` block. The `terminal-window` of the
  lab pages is OrionCSS markup, and ANS does not load OrionCSS.
- **Figures** are in `img/`; a page in `_toets/` links them as `../img/...`. The syllabus figures
  are `syllabus-*`. Look at a figure before you use it: a label in it can give the answer away.
- **What ICEES adds to the style** is in [`SCHRIJFSTIJL.md`](../../../SCHRIJFSTIJL.md), and the
  notation of numbers (decimal comma, the inch mark) in `CLAUDE.md` under the syllabus. An option
  with a number follows it like a page does.
