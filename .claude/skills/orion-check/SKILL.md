---
name: orion-check
description: Check this course repo for broken links, pages missing from orion.json, stale exports (syllabus, handouts, verslag templates), house-style drift and em-dashes, and repair what can be repaired automatically. Use whenever the user wants to verify the repo, clean up inconsistencies, or asks "is everything still ok", "check the repo", "fix the inconsistencies", "tidy up the pages".
---

# Check and tidy ICEES

**Read [`../OrionTools/skills/check.md`](../../../../OrionTools/skills/check.md) first, in full.**
That is the procedure, shared by every Orion course. This file only says what ICEES adds.

- **Most of what fails here is a derived file.** ICEES publishes a syllabus PDF, a handout per deck
  and a verslag template per `Opdracht.html`, all committed, so an edit to their source leaves a
  `*-stale` finding until the export runs again (`CLAUDE.md`, *The three tracks*).
- **Rules that apply here because of how an ICEES lab is built**: a hub states no session count or
  weight (`no-session-count`, `no-weight`), two leads of one lab may not retell each other
  (`duplicate-lead`), and an `Opdracht.html` keeps its assignment in a `<!-- verslag -->` comment
  (`verslag-markup`, `opdracht-lead`, `download-button`). `check --explain <id>` says why.
- **What the check does not see**: `duplicate-lead` compares only `overview.html` and the
  `Opdracht.html` pages, not the lead of an `Overzicht.html`, and nothing catches a stappenplan page
  that still says "ga terug naar de eerste pagina" after a reordering (`CLAUDE.md`, *De volgorde
  binnen het menu-item Opdracht*). Read those yourself when a lab's order changed.
