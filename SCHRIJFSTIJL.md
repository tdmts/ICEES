# Schrijfstijl: wat ICEES toevoegt

De regels staan in de gedeelde basis,
[`../OrionTools/SCHRIJFSTIJL.md`](../OrionTools/SCHRIJFSTIJL.md)
(op GitHub: <https://github.com/tdmts/OrionTools/blob/main/SCHRIJFSTIJL.md>).
Lees die eerst. Dit bestand zegt alleen wat er voor Industriële computers en embedded systems bij
komt, en een aanvulling staat onder het nummer van het patroon dat ze aanvult.

## Waar het geldt

Naast wat de basis noemt: de `title` van een topic in [`orion.json`](orion.json), het
`<!-- verslag -->` blok in een `Opdracht.html` (`orion.py export-verslag` maakt er de docx van, en
die tekst valt hier volledig onder, ook al leest de student ze in Word), en de pagina's onder
`Theorie/Syllabus/` die de syllabus-PDF worden.

## Waar de tekst vandaan komt

Uit een Brightspace-export en uit Word-documenten, en vooral zakelijk tot kaal, met hier en daar een
grapje, een emoji of een terzijde dat niets uitlegt. De bron van de syllabus schrijft vaak `men` en
`we`; wat hier nieuw geschreven wordt, staat in de je-vorm.

## Aanvullingen per patroon

### 9. Twee leads per labo

Dit geldt ook voor `overview.html`. Zes labo's met dezelfde openingszin is precies waar dit patroon
over gaat, dus elk overzicht krijgt een `lead` die bij dát labo past.

De `lead` van `Opdracht.html` verdient extra aandacht: die staat ook op de eerste bladzijde van het
verslag, en is voor veel studenten de eerste zin die ze van het labo lezen. De regel `opdracht-lead`
eist dat hij bestaat, niet dat hij goed is.

### 17. Waar je in ICEES op mag rekenen

De labo's zijn onafhankelijke modules en de groepen roteren erdoor, dus je weet niet welke labo's een
student al gedaan heeft, en zelfs niet in welke volgorde. Waar je wél op mag rekenen, en dat is de
hele lijst:

1. **De theorietrack**, de hoorcolleges en de syllabus. Die loopt wel in volgorde en gaat aan de
   labo's vooraf.
2. **Een eerdere theoriepagina van hetzelfde labo.** Binnen een module ligt de volgorde vast in
   `orion.json`, en het Orion-menu toont ze in die volgorde. `BiosUefi.html` mag dus rekenen op
   `Componenten.html`, en doet dat ook.
3. **Een eerdere stap van dezelfde opdracht.**

Moet een labo iets uit een ander labo hebben, dan hoort die stof in de theorietrack of in de
theoriepagina's van dat labo zelf, niet in een verwijzing.

### 20. Wat de student op de inleiding al heeft

De volgorde in het Orion-menu is Inleiding, Theorie, Opdracht. Wat de theoriepagina's uitleggen, is
op `overview.html` dus nog onbekend. Ook zo: "de lijst waarin de firmware zoekt naar iets om van op
te starten", terwijl `opstartbare code` twee alinea's hoger staat, en "Bij een processor kijk je naar
vier dingen", waar het om vier gegevens gaat. Een kolomkop `Aspect` boven een
partitietabelformaat, een groottegrens en een bedieningswijze is juist, want het generieke woord dekt
daar meer.

## Het ijkpunt

Labo Assemblage en beide pagina's onder `Algemeen/` kregen op 4 september 2026 een volledige
stijlronde. Die diff is het ijkpunt: hij toont wat de patronen 9, 16 en 18 in de praktijk wegnemen,
en hoe kort een `lead` daarna staat. Hij toont ook de fout uit vraag 8 van de proef, want de lead van
`overview.html` is in die ronde een keer te ver ingekort en daarna hersteld. Leg hem ernaast voor je
aan een nieuwe module begint.
