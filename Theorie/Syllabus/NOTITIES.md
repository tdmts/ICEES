# Notities bij de syllabus

Wat bij het overzetten opviel, en wat erover beslist is. Een hoofdstuk dat nog
geen redactionele doorloop gehad heeft, staat hier met wat jij moet beslissen;
een hoofdstuk dat er wel een gehad heeft, met wat er beslist is en waarom.

Wat de omzetting zelf moest raden of liet vallen, staat in
[IMPORT.md](IMPORT.md), en dat bestand wordt door de importer geschreven.

## Hoofdstuk 1, Generaties

**De sectie Studievragen achteraan heet hier Test jezelf.** In dit hoofdstuk
staat het woord Studievragen twee keer: vooraan als kader naast de Kernpunten,
achteraan als de meerkeuzelijst die het hoofdstuk afsluit. Dat zijn twee
verschillende dingen. Het kader vooraan kondigt aan wat je na het lezen moet
kunnen; de lijst achteraan toetst dat met meerkeuze. De pagina van die laatste
heet daarom `TestJezelf.html` met de kop "Test jezelf", zoals elk labo van dit
vak zijn zelftest noemt. Het kader vooraan behoudt zijn eigen titel en staat
samen met de Kernpunten op `Overzicht.html`.

**De antwoorden op Test jezelf: nagekeken en beslist.** De juiste mogelijkheid
staat als `class="juist"` op de `<li>`, en de export drukt daaruit een sectie
Oplossingen achteraan het hoofdstuk. Die aanduiding komt niet uit de brontekst
maar is hier gekozen. Alle zes de vragen zijn meerkeuze, dus er is geen enkele
`<div class="oplossing">` in dit hoofdstuk.

| Vraag | Antwoord | Waarop het steunt |
|---|---|---|
| 1 Wanneer de eerste elektrische computers | c, tijdens en kort na de tweede wereldoorlog | 1.2, "De aanzet voor de eerste elektronische computer was de tweede wereldoorlog", en de COLOSSUS die in 1943 in bedrijf komt |
| 2 Waarom computers sneller worden | a, omdat transistoren dichter bij elkaar kunnen | het tweede kernpunt, en 1.5: "hoe kleiner de afstand tussen twee transistoren, hoe sneller de schakeling kan werken" |
| 3 Wat de wet van Moore stelt | c, iedere 18 tot 24 maanden verdubbelt het aantal transistoren op dezelfde oppervlakte | NIET uit dit hoofdstuk, zie hieronder |
| 4 De afstand tussen transistoren nu | c, 10 nm | NIET uit dit hoofdstuk, zie hieronder |
| 5 Hoe prestaties vandaag verhoogd worden | b, meerdere kernen, zodat taken parallel lopen | het vierde kernpunt, en 1.7: "wordt volop ingezet op parallelisme" |
| 6 Gewone computer tegen quantumcomputer | b, bits die 1 of 0 zijn tegen qubits die allebei kunnen zijn zolang je ze niet uitleest | 1.6, "Bij quantumcomputers kan een qubit zowel 1 of 0 zijn zolang je de status niet controleert" |

**Vraag 3 en 4 steunden op niets in dit hoofdstuk, en daarvoor is tekst
bijgeschreven.** Het woord Moore viel in de hele tekst maar twee keer, en allebei
in een vraag: in het kader Studievragen vooraan en in vraag 3 zelf. De tekst legde
de wet nergens uit. Een afstand tussen transistoren kwam er helemaal niet in voor:
nanometer en het getal 10 stonden alleen in vraag 4. De student die dit hoofdstuk
las, kon die twee vragen niet beantwoorden.

Beslist op 7 september 2026: er komt tekst bij in plaats van dat de vragen weg
vallen. **Dit zijn de twee enige alinea's in dit hoofdstuk die niet uit de Word
komen**, en ze horen dus in de Word bijgeschreven te worden voor de volgende
import ze weggooit.

- **1.5, na de zin over meer transistors op dezelfde oppervlakte:** "Die
  verdubbeling heeft een naam: de wet van Moore. Gordon Moore, een van de
  oprichters van Intel, stelde vast dat het aantal transistoren op dezelfde
  oppervlakte ongeveer iedere achttien tot vierentwintig maanden verdubbelt. Het
  is geen natuurwet maar een waarneming, en de industrie heeft ze decennialang
  waargemaakt." Er staat geen jaartal bij, en dat is met opzet: Moore schreef in
  1965 elk jaar en stelde dat in 1975 bij tot elke twee jaar. De achttien tot
  vierentwintig maanden hierboven zijn de vorm die overal circuleert en die
  vraag 3 gebruikt.
- **1.7, als openingsalinea:** "De afstand tussen twee transistoren wordt intussen
  in nanometer uitgedrukt en ligt in de orde van tien nanometer. Ter vergelijking:
  twee siliciumatomen naast elkaar liggen ongeveer een kwart nanometer uit elkaar.
  Veel ruimte om verder te verkleinen is er dus niet meer." De orde van grootte
  staat er, geen precies getal, want **dit cijfer veroudert**: wat een fabrikant
  een 5nm- of 3nm-procede noemt is een handelsnaam en geen gemeten afstand, en de
  werkelijke afstanden op zo'n chip liggen hoger. Vraag 4 laat kiezen tussen
  ordes van grootte (mm, um, nm, pm) en niet tussen getallen, dus ze blijft
  kloppen zolang dat zo is. **Kijk deze alinea na**; het is de zin waar ik het
  minst zeker over ben.

**De vierde studievraag werd door geen enkele vraag getoetst, en vraag 6 vult dat
gat.** Het kader vooraan stelt er vier: de wet van Moore, twee redenen om
componenten dichter bij elkaar te zetten, hoe je sneller wordt zonder
schaalverkleining, en het verschil tussen een gewone computer en een
quantumcomputer. De eerste drie kwamen terug in respectievelijk vraag 3, vraag 2
en vraag 5. De vierde kwam nergens terug, terwijl 1.6 er een halve bladzijde over
heeft.

Vraag 6 is hier bijgeschreven, met dezelfde vraagstelling als de studievraag,
zoals DeN dat in hoofdstuk 1 ook deed. Ze staat niet in de Word. De twee
afleiders die ertoe doen zijn de verwarring met parallellisme uit 1.7 (meer
kernen) en met schaalverkleining uit 1.5 (transistoren van enkele atomen groot);
allebei zijn het antwoorden die dit hoofdstuk elders wel geeft, op een andere
vraag.

**Vraag 2 toetst maar de helft van studievraag 2.** Die studievraag vraagt twee
redenen om componenten dichter bij elkaar te plaatsen; het tweede kernpunt geeft
de snelheid en het derde de lagere spanning en dus het lagere verbruik. Vraag 2
laat kiezen tussen die twee ("voornamelijk omdat ... sneller" tegen "voornamelijk
omdat ... minder energie") en zet ze zo tegenover elkaar in plaats van naast
elkaar. Voor de meerkeuzevorm is dat werkbaar, en de vraagstelling is niet
aangeraakt, maar het is de reden waarom deze vraag niet dekt wat het kader
belooft.

**Wat in de tekst opviel, en op 7 september 2026 rechtgetrokken is.** De tekst
gaat er in principe letterlijk in, dus dit staat hier met wat er beslist is:

- De titel van 1.2 schreef **vacuumbuizen** zonder trema terwijl de lopende tekst
  van 1.2 en 1.3 **vacuümbuizen** schrijft. De titel draagt nu het trema. De
  bestandsnaam blijft `Generatie1Vacuumbuizen.html`, want `pascal()` haalt de
  diakritische tekens er eerst af (zie CLAUDE.md).
- 1.6 wisselde tussen **quantum computers** (de titel), **quantumcomputers** (de
  lopende tekst en het vijfde kernpunt) en **kwantum** ("In de kwantummechanica",
  "Bij kwantumcomputers"). Het is overal **quantum** geworden, aaneengeschreven:
  quantumcomputers, quantummechanica, quantumsuperpositie, quantumtransistoren.
  Die vorm is gekozen omdat ze in dit hoofdstuk 7 keer tegen 3 voorkomt en omdat
  het kernpunt, dat het meest gelezen wordt, al Quantumcomputers zei. **De
  standaard Nederlandse spelling is kwantum-**, dus de andere kant op is even
  verdedigbaar; het is een zoek-en-vervang als je dat liever hebt. Het woord komt
  in de rest van de Word nergens voor, dus deze keuze botst met geen enkel later
  hoofdstuk.
- De pagina heet daardoor `Generatie5Quantumcomputers.html` en niet meer
  `Generatie5QuantumComputers.html`; de id in `reference.js` (`generaties-generatie-5`)
  is niet veranderd.
- 1.2 zei over de ENIAC "nam de ruimte van twee klaslokalen in beslag en
  **verbruikt** zo'n 140 kW": tegenwoordige tijd tussen twee verleden tijden. Dat
  is nu **verbruikte**.
- De vier mogelijkheden van vraag 4 staan tussen aanhalingstekens rond
  'ongeveer', wat in de brontekst een gewone apostrof is en hier `&#x27;` werd.
  Dat is opmaak en geen tekst, en is zo gebleven.

**Deze correcties staan alleen hier, niet in de Word.** Een nieuwe import van
hoofdstuk 1 draait ze allemaal terug, samen met de twee bijgeschreven alinea's en
vraag 6.

**De vijf afbeeldingen zijn opengedaan en kloppen met hun uitsnede.** Het zijn
achtereenvolgens de ENIAC in een zaal, een transistor in een TO-220 behuizing,
vier ICs in een DIP behuizing, de pinnenkant van een processor, en de tekening
van de kat van Schrödinger. Geen enkele draagt een bijschrift in de Word, dus ze
dragen er hier ook geen; wat ze tonen staat in het `alt`-attribuut, en dat is met
de hand geschreven na het openen van elk bestand. Een nieuwe import overschrijft
die vijf regels.

**Vier van de vijf zweven naast hun alinea in de Word.** Zie CLAUDE.md,
"Wat de eerste hoofdstukimport aan de importer veranderd heeft": de alinea's
ernaast zijn lopende tekst en zijn dat hier gebleven.
