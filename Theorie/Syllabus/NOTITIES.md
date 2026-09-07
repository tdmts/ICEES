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
maar is hier gekozen. Alle vijf de vragen zijn meerkeuze, dus er is geen enkele
`<div class="oplossing">` in dit hoofdstuk.

| Vraag | Antwoord | Waarop het steunt |
|---|---|---|
| 1 Wanneer de eerste elektrische computers | c, tijdens en kort na de tweede wereldoorlog | 1.2, "De aanzet voor de eerste elektronische computer was de tweede wereldoorlog", en de COLOSSUS die in 1943 in bedrijf komt |
| 2 Waarom computers sneller worden | a, omdat transistoren dichter bij elkaar kunnen | het tweede kernpunt, en 1.5: "hoe kleiner de afstand tussen twee transistoren, hoe sneller de schakeling kan werken" |
| 3 Wat de wet van Moore stelt | c, iedere 18 tot 24 maanden verdubbelt het aantal transistoren op dezelfde oppervlakte | NIET uit dit hoofdstuk, zie hieronder |
| 4 De afstand tussen transistoren nu | c, 10 nm | NIET uit dit hoofdstuk, zie hieronder |
| 5 Hoe prestaties vandaag verhoogd worden | b, meerdere kernen, zodat taken parallel lopen | het vierde kernpunt, en 1.8: "wordt volop ingezet op parallelisme" |

**Vraag 3 en 4 steunen op niets in dit hoofdstuk.** Het woord Moore valt in de
hele tekst maar twee keer, en allebei in een vraag: in het kader Studievragen
vooraan ("Beschrijf in eigen woorden 'de wet van Moore'") en in vraag 3 zelf.
De tekst legt de wet nergens uit. Een afstand tussen transistoren komt er
helemaal niet in voor: nanometer, micrometer en het getal 10 staan alleen in
vraag 4. De student die dit hoofdstuk leest, kan die twee vragen dus niet
beantwoorden.

De twee antwoorden hierboven zijn daarom van buiten het hoofdstuk gekozen.
Vraag 3 is de standaardformulering van de wet van Moore, en 1.5 komt er het
dichtst bij met "chipfabrikanten [weten] elk jaar meer transistors op dezelfde
oppervlakte [te] zetten"; de mogelijkheid over halverend energieverbruik is
daar de wisselvorm van. Vraag 4 is beslist door uitsluiting: 10 mm en 10 µm
zijn ordes te groot voor een chip, en 10 pm is kleiner dan een atoom, dus 10 nm
blijft over. **Dit is de plaats waar ik het minst zeker ben**, want het getal
staat nergens gedrukt en het verschuift bovendien met de jaren.

**Wat hieraan te doen is, is een beslissing voor jou.** Ofwel komt er een zin
over de wet van Moore en over de huidige orde van grootte in 1.5 of 1.8 bij,
ofwel vallen vraag 3 en 4 weg. Er is hier niets aan de tekst veranderd.

**De vierde studievraag wordt door geen enkele vraag getoetst.** Het kader
vooraan stelt er vier: de wet van Moore, twee redenen om componenten dichter bij
elkaar te zetten, hoe je sneller wordt zonder schaalverkleining, en het verschil
tussen een gewone computer en een quantumcomputer. De eerste drie komen terug in
respectievelijk vraag 3, vraag 2 en vraag 5. De vierde komt nergens terug,
terwijl 1.7 er een halve bladzijde over heeft. Er is hier geen zesde vraag
bijgeschreven; zeg je dat het er een mag worden, dan komt ze er.

**Vraag 2 toetst maar de helft van studievraag 2.** Die studievraag vraagt twee
redenen om componenten dichter bij elkaar te plaatsen; het tweede kernpunt geeft
de snelheid en het derde de lagere spanning en dus het lagere verbruik. Vraag 2
laat kiezen tussen die twee ("voornamelijk omdat ... sneller" tegen "voornamelijk
omdat ... minder energie") en zet ze zo tegenover elkaar in plaats van naast
elkaar. Voor de meerkeuzevorm is dat werkbaar, en de vraagstelling is niet
aangeraakt, maar het is de reden waarom deze vraag niet dekt wat het kader
belooft.

**Wat in de tekst opviel en niet aangeraakt is.** De tekst gaat er letterlijk in,
dus dit staat hier en niet in de pagina's:

- De titel van 1.2 schrijft **vacuumbuizen** zonder trema, de lopende tekst van
  1.2 en 1.3 schrijft **vacuümbuizen** met trema. De koptekst is de bestandsnaam
  geworden (`Generatie1Vacuumbuizen.html`), dus een correctie aan die titel
  hernoemt ook de pagina.
- De titel van 1.6 schrijft **quantum computers** los, de lopende tekst schrijft
  **quantumcomputers** aaneen, en het vijfde kernpunt schrijft **Quantumcomputers**.
  Ook 1.6 wisselt zelf tussen quantum en kwantum ("quantum superpositie" naast
  "In de kwantummechanica").
- 1.2 zegt over de ENIAC "nam de ruimte van twee klaslokalen in beslag en
  **verbruikt** zo'n 140 kW": tegenwoordige tijd tussen twee verleden tijden.
- De vier mogelijkheden van vraag 4 staan tussen aanhalingstekens rond
  'ongeveer', wat in de brontekst een gewone apostrof is en hier `&#x27;` werd.

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
