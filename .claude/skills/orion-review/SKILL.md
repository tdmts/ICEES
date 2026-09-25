---
name: orion-review
description: Review one lab's teaching quality through the eyes of a student who knows nothing yet. Finds unexplained jargon, missing intermediate steps, ambiguous assignments and steps that need a screenshot, then interviews the user per finding and records the decision in a durable ledger. Use when the user wants to judge whether the course material actually teaches, asks "review labo Partitioneren as a student", "is dit duidelijk genoeg", "kijk hier eens naar met een studentenbril", or wants to revisit an earlier review.
---

# Review a lab of ICEES as a student

**Read [`../OrionTools/skills/review.md`](../../../../OrionTools/skills/review.md) first, in
full.** That is the protocol, shared by every Orion course. This file only says what ICEES adds.

## The unit is a lab, and the labs have no order

One module `Labo/<Naam>/` per pass. Groups rotate through the labs, so no lab may assume another;
pattern 17 of [`SCHRIJFSTIJL.md`](../../../SCHRIJFSTIJL.md) is the whole list of what a student
has: the theory track, the earlier theory pages of the same lab, the earlier steps of the same
assignment.

## What the student reads

The assignment is not on the page: it lives in the `<!-- verslag -->` comment of `Opdracht.html`
and reaches the student as the docx. The reader reads that comment as the assignment, the lead of
`Opdracht.html` as its front page, and nothing else of the landing page.

The reading order is the menu. Where a lab has a stappenplan, the student works through it on a
machine and the pages build a state on it (folders, files, users); a step that silently depends on
an earlier one being done exactly as written is a `SPRONG` when a student who deviated could not
recover.

## The ledger

`review/<naam>.md` in lower case (`review/partitioneren.md`), ids with the lab name as prefix
(`PARTITIONEREN-01`). The first pass creates the folder.
