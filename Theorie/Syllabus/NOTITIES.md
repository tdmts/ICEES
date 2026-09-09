# Notities bij de syllabus

Wat bij het overzetten opviel, en wat erover beslist is. Een hoofdstuk dat nog
geen redactionele doorloop gehad heeft, staat hier met wat jij moet beslissen;
een hoofdstuk dat er wel een gehad heeft, met wat er beslist is en waarom.

Wat de omzetting zelf moest raden of liet vallen, staat in
[IMPORT.md](IMPORT.md), en dat bestand wordt door de importer geschreven.

**Elk gedrukt bladzijdenummer hieronder geldt voor de PDF zoals ze was toen dat
hoofdstuk ingevoerd werd, en niet voor de PDF van vandaag.** Ze zijn met opzet
niet bijgewerkt. Het voorwerk groeit namelijk mee: op 9 september 2026 pasten de
twaalf inhoudstafelrijen van hoofdstuk 13 niet meer op vier tabelbladzijden, de
inhoudstafel werd er vijf, en daardoor schoof alles in hoofdstuk 1 tot en met 12
een bladzijde op. Elk nummer dat hier voor die dag genoteerd is, staat dus een
te laag, en hetzelfde gebeurt opnieuw zodra hoofdstuk 14, 15 of 16 erbij komt.

Ze ophogen zou dat maar tot het volgende hoofdstuk oplossen, en het zou verbergen
wat deze nummers zijn: het verslag van een controle op een bepaald moment, en geen
inhoudsopgave. **Erger nog, een bijgewerkt nummer zou niet meer kloppen met de
meting waar het bij hoort**, want dit bestand noteert per hoofdstuk de bladspiegel
zoals die toen gemeten is: waar een figuur landde, waar een vragenlijst overliep,
hoeveel millimeter er onder een alinea overbleef. Dat nummer optrekken en die
meting laten staan levert een notitie op die zichzelf tegenspreekt. **Wil je weten waar iets vandaag staat, kijk dan in de PDF zelf**,
en vergelijk na een export met de vorige PDF (`git show HEAD:downloads/...`) in
plaats van met een getal dat hier staat. Dat laatste is trouwens ook waarom die
verschuiving opgemerkt is.

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
| 2 Twee redenen om componenten dichter bij elkaar te zetten | b, sneller en zuiniger | het tweede kernpunt (snelheid) en het derde (de spanning zakt, dus zuiniger); 1.5 zegt "hoe kleiner de afstand tussen twee transistoren, hoe sneller de schakeling kan werken" |
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
komen.** Ze gaan niet terug naar het docx, zie hieronder.

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
  kloppen zolang dat zo is. Nagekeken en goedgekeurd op 7 september 2026.

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

**Vraag 2 is herschreven, want ze toetste maar de helft van studievraag 2.** Die
studievraag vraagt twee redenen om componenten dichter bij elkaar te plaatsen; het
tweede kernpunt geeft de snelheid en het derde de lagere spanning en dus het lagere
verbruik. De oorspronkelijke vraag ("De reden waarom computers steeds sneller
worden is...") zette die twee juist tegenover elkaar, met "voornamelijk omdat
sneller" tegen "voornamelijk omdat zuiniger", zodat een van de twee redenen als
fout gold.

Beslist op 7 september 2026. De vraag stelt nu de studievraag zelf ("Om welke twee
redenen?") en de mogelijkheden zijn gepaard: het juiste antwoord noemt allebei de
redenen, twee afleiders noemen er een van de twee samen met een verzonnen tweede,
en de vierde noemt er geen enkele. De twee verzonnen redenen zijn een lagere
kloksnelheid en quantumtransistoren, allebei dingen die dit hoofdstuk elders
uitdrukkelijk als fout aanduidt. **Goedkoper is met opzet geen afleider**: 1.3 en
1.4 noemen lagere prijzen wel degelijk als gevolg, dus die mogelijkheid zou
verdedigbaar juist zijn. Het juiste antwoord verschoof daarmee van a naar b; de
export telt de letter zelf, dus er was niets met de hand bij te stellen.

**De alinea over tien nanometer blijft zoals ze is.** Nagekeken en beslist op
7 september 2026: de orde van grootte klopt, de kwart nanometer tussen twee
siliciumatomen klopt, en vraag 4 laat kiezen tussen mm, um, nm en pm en niet
tussen getallen. Ze veroudert dus niet zolang de vraag zo staat.

**De Word wordt niet bijgewerkt.** Beslist op 7 september 2026: de HTML is vanaf de
import de bron, en dit bestand is het register van wat er van de Word afwijkt. Er
gaat dus niets terug naar het docx, en wie hoofdstuk 1 ooit opnieuw importeert,
leest hier wat hij daarmee weggooit.

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
- **Studievraag 2 vooraan was een imperatief met een vraagteken**, "Geef twee
  redenen waarom men tracht componenten dichter tegen elkaar te plaatsen?" Ze
  draagt nu een punt; de regel staat bij hoofdstuk 4.
- De vier mogelijkheden van vraag 4 staan tussen aanhalingstekens rond
  'ongeveer', wat in de brontekst een gewone apostrof is en hier `&#x27;` werd.
  Dat is opmaak en geen tekst, en is zo gebleven.

**Deze correcties staan alleen hier, niet in de Word.** Een nieuwe import van
hoofdstuk 1 draait ze allemaal terug, samen met de twee bijgeschreven alinea's,
vraag 6 en de herschreven vraag 2.

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

## Hoofdstuk 2, Hardware in een moderne computer

**Dit hoofdstuk heeft geen sectie Studievragen achteraan.** De enige twee
H2-secties zijn Hardware herkennen en Prestaties, dus er is hier geen
`TestJezelf.html`. Het kader Studievragen vooraan staat er wel gewoon, samen met
de Kernpunten op `Overzicht.html`; dat is het kader dat aankondigt wat je moet
kunnen, en niet de meerkeuzelijst die hoofdstuk 1 afsluit. Of elk hoofdstuk er
een hoort te krijgen, wordt beslist na hoofdstuk 16 en in een keer, niet hier.

### Hardware herkennen is een oefening die niet zo heet

In de Word staat 2.1 als drie tabellen: een rij foto's, daaronder een rij met een
nummer en een regeleinde, en op die lege regel schrijft de student de naam. Dat
is een vragenlijst in de vorm van een tabel, en regel 14 van de contentcheck
geldt er onverkort voor. Niets vangt het als je het overslaat: er is geen `<ol>`,
dus zelfs de verklikker van regel 14, die naar een `<ol>` met invulruimte zoekt,
ziet niets.

**De drie tabellen zijn dus een `ol.vragen` geworden**, met per nummer de foto,
de ruimte om te antwoorden, en het antwoord in een `<div class="oplossing">`. De
PDF drukt die antwoorden achteraan het hoofdstuk als 2.3 Oplossingen; op de site
vouwt `oplossingen.js` ze weg. Er staat dus geen antwoord in de tekst zelf.

**De nummering loopt van 1 tot 30 over vier lijsten.** De twee foto's die bij een
hele reeks nummers horen staan tussen de lijsten in, dus de lijst erna draagt
`start=`: 10 voor het moederbord en 18 voor de achterkant. De vierde lijst begint
op 24. Regel 14 kijkt die aansluiting na.

**Waar de student schrijft, is hier beslist en niet uit de Word gelezen.** De
importer merkt op deze drie tabellen geen invulruimte: `lege_kolommen()` zoekt
een kolom die overal leeg staat, en elke kolom draagt hier tekst, namelijk de
nummers zelf. De regel waarop de student schrijft is in de Word een regeleinde
achter het nummer, en dat is geen structuur die je kan herkennen.

Elk nummer krijgt daarom een lege tabel van een rij onder zich, precies de markup
die de importer voor een lege tabel schrijft. De vier nummers die in de Word al
labels onder zich dragen (20 groen en paars, 21 blauw en zwart, 23 blauw, groen
en rood, 28 de cijfers 1 tot 4) krijgen er een regel per label, in de
invulkolom-vorm: het label links, de ruimte rechts. Zo staat er evenveel te
schrijven als de Word vraagt, en geen regel meer.

**Er blijft geen enkele `data-geraden` over, en er was er maar een.** De
importer zette hem op de eerste tabel (geen enkel signaal voor een kopregel); de
tweede en de derde beginnen met een cel over de volle breedte en gingen als
eenkolomstabel door zonder gok. Alle drie zijn ze nu een vragenlijst zonder
kopregel, dus de vraag zelf is vervallen.

### De dertig antwoorden, en waarop ze steunen

**De Word geeft geen enkel antwoord.** Alle dertig zijn hier bepaald door de foto
open te doen. Waar het opschrift op het toestel zelf het antwoord geeft, staat dat
erbij.

| Nr | Antwoord | Waarop het steunt |
|---|---|---|
| 1 | het moederbord | opschrift GIGABYTE GA-AB350-Gaming 3, Socket AM4 |
| 2 | harde schijf van 3,5 duim | groen etiket 1.0TB op een metalen behuizing met een SATA-aansluiting |
| 3 | SSD van 2,5 duim | opschrift SAMSUNG Solid State Drive |
| 4 | SSD in M.2-formaat met NVMe | opschrift SAMSUNG NVMe SSD 960 PRO M.2 |
| 5 | twee processoren | opschrift INTEL CONFIDENTIAL en AMD Phenom, contactzijde naar boven |
| 6 | geheugenmodule | printplaat met acht chips, contactstrip met inkeping, klemuitsparingen |
| 7 | videokaart | koellichaam met NVIDIA erop, beugel met vier beeldaansluitingen |
| 8 | netwerkkaart | PCI Express-kaart met een enkele RJ45 in de beugel |
| 9 | voeding | ventilatorrooster, netschakelaar, stekkeringang, bundel voedingsdraden |
| 10 | processorsocket | rood kader om de socket van de MSI A520M-A PRO |
| 11 | geheugensloten | blauw kader om de twee DIMM-sloten |
| 12 | PCI Express-sloten | turkoois kader om het lange slot en het korte erboven |
| 13 | SATA-poorten | geel kader om twee staande en twee liggende SATA-poorten |
| 14 | M.2-slot | rood kader dat onderaan op de M.2-connector uitkomt |
| 15 | chipset | oranje kader om het koellichaam linksonder |
| 16 | CMOS-batterij | blauwe cirkel om een knoopcel, opschrift LITHIUM BATTERY CR2032 |
| 17 | voedingsaansluitingen | turkoois kader om de 24-pins ATX onderaan en om CPU_PWR1 rechtsboven |
| 18 | HDMI-aansluiting | de vorm van de aansluiting op de foto |
| 19 | DVI-aansluiting | de vorm van de aansluiting op de foto |
| 20 | PS/2, groen de muis en paars het toetsenbord | die kleuren staan zo op de foto en zijn de afspraak van PS/2 |
| 21 | USB, blauw is USB 3 en zwart USB 2 | vier blauwe en twee zwarte poorten binnen hetzelfde kader |
| 22 | netwerkaansluiting (RJ45) | de vorm van de aansluiting op de foto |
| 23 | audio, blauw lijningang, groen uitgang, rood microfoon | de drie kleuren op de foto, en de kleurafspraak van een audiopaneel |
| 24 | VGA-kabel | blauwe stekkers, vijftien pinnen in drie rijen |
| 25 | DVI-kabel | witte stekkers met het brede blok pinnen en het platte contact ernaast |
| 26 | DisplayPort | de afgeschuinde hoek van de aansluiting en de klemmetjes op de stekker |
| 27 | HDMI | de trapeziumvorm van de aansluiting en negentien contacten |
| 28 | USB type A, type B, micro-USB, type C | de vier vormen van links naar rechts |
| 29 | SATA-kabel | platte rode kabel met de L-vormige stekker van zeven contacten |
| 30 | de chip met de firmware, het BIOS of UEFI | zie hieronder |

**Nummer 30 is de enige die niet op de foto zelf te lezen valt.** Wat er staat is
een moederbord met een rood omcirkelde chip van acht pootjes, uitvergroot tot
`winbond 25Q128JVSQ` leesbaar is. Dat is een serieel flashgeheugen van 128 Mbit,
en dat is op een moederbord de chip waar de firmware in staat. Het hoofdstuk
erna heet BIOS / UEFI, dus de plaats in het document wijst dezelfde kant op.
Zeker weten doe ik het niet uit de bron; kijk het na als je de kans hebt.

**De achttien afbeeldingen zijn een voor een opengedaan voor het `alt` erbij
geschreven werd**, zoals de vijf van hoofdstuk 1. Geen enkele draagt een
bijschrift in de Word, dus ze dragen er hier ook geen, en alle achttien staan
inline: het zwevende geval van hoofdstuk 1 speelt hier niet. Alle uitsnedes zijn
bruikbaar. **Twee foto's dragen een watermerk**, een klein `net` linksonder op
nummer 2 en 5; het staat in de bron zo en er is niets aan gedaan.

**Het `alt` beschrijft de vorm en niet de naam**, want de naam is het antwoord.
Er staat dus "een smalle lange printplaat met acht chips en een inkeping in de
contactstrip" en niet "een geheugenmodule". Wat op het toestel gedrukt staat,
gaat er wel in: dat leest een ziende student ook. Zo kan iemand die de bladzijde
laat voorlezen de oefening maken zonder het antwoord cadeau te krijgen. Een
nieuwe import overschrijft die achttien regels.

### Twee bladspiegelregels die dit hoofdstuk nodig had

Beide staan in `syllabus.css` en gelden vanaf nu voor elk hoofdstuk.

- **`.vragen-bij-figuur`** houdt een foto waar een reeks nummers naar wijst op
  hetzelfde blad als die nummers. Zonder die omhulling stond het moederbord met
  10 tot 13 op het ene blad en 14 tot 17 op het volgende, en zat de student te
  bladeren terwijl hij invulde. `page-break-inside` op de figuur alleen helpt
  daar niet: die houdt de afbeelding heel en zegt niets over wat eronder staat.
- **`ol.vragen > li` blijft heel.** Dat kwam boven bij vraag 28, waarvan de foto
  onderaan een blad stond en de vier invulregels bovenaan het volgende.

**De foto van het moederbord staat smaller dan de Word hem zet.** De Word geeft
hem 160.0mm, de volle bladspiegel, en dan is het blok met zijn acht nummers
235mm hoog op een bladspiegel van 240mm: het past alleen op een leeg blad, en het
blad ervoor blijft dan voor twee derde wit. Op 105.0mm is het blok 191mm en volgt
het gewoon op nummer 9. De nummers die in de foto getekend zijn, blijven daarbij
ruim leesbaar. Dit is de enige maat in dit hoofdstuk die niet uit de Word komt.

### Prestaties

Zes alinea's lopende tekst, geen tabel, geen vraag, letterlijk overgenomen.

**Ze gebruikt termen die pas veel later uitgelegd worden.** M.2, NVMe, SATA,
processor socket, DDR4 en DDR5 staan er zonder uitleg, terwijl de hoofdstukken
die ze behandelen (Harde schijf, Moederbord, RAM, CPU) tien tot dertien
hoofdstukken verderop staan. Dat is patroon 20 van SCHRIJFSTIJL.md. **Het stoort
hier weinig**, want de alinea's gebruiken die woorden als voorbeeld van iets dat
niet past en niet als iets dat je moet kennen: de zin blijft te volgen als je
alleen weet dat het twee soorten aansluiting zijn. Wat er wel scheef aan staat is
de studievraag ernaast, "wat bepaalt de prestaties van een processor,
werkgeheugen en harde schijf", want die vraag beantwoordt dit hoofdstuk niet en
die vier late hoofdstukken wel. Laten staan of vooruitwijzen is jouw beslissing.

**AM4 komt in dit hoofdstuk niet voor.** Het staat wel op de foto van nummer 1
gedrukt (Socket AM4), maar de tekst van 2.2 noemt alleen de processor socket,
AMD en Intel.

### Wat er in de tekst opviel, en niet aangeraakt is

De tekst gaat er letterlijk in, dus dit staat hier en niet in de HTML:

- **aansluting** in de opdrachtzin van 2.1, "Noteer bij ieder component, kabel of
  aansluting de juiste naam". Overal elders in het hoofdstuk staat aansluiting.
  Een tikfout, en ze staat er nog.
- **Het kader Kernpunten zegt "een harde schijf"** waar 2.1 en 2.2 SSD's,
  M.2-schijven en harde schijven naast elkaar zetten. Als verzamelnaam kan het,
  maar het is wel het woord dat 2.2 voor iets anders gebruikt.
- **De vierde studievraag is geen vraag** maar een instructie ("Op basis van een
  foto moet je kunnen ... herkennen en benoemen"), terwijl de andere drie wel
  vragen zijn. Zo staat het in de Word.
- **De ellips aan het eind van de vierde alinea van 2.2** ("tot op een bepaalde
  kloksnelheid...") is in de Word het teken en geen drie punten. Dat is opmaak en
  is zo gebleven.

## Hoofdstuk 3, BIOS / UEFI

**De H1 en een H2 heten allebei BIOS / UEFI, en de sectiepagina is hernoemd.** De
importer maakte er `BiosUefi/BiosUefi.html` van. Dat is niet fout, maar het leest
raar en het botst in een grep met `Labo/Assemblage/Theorie/BiosUefi.html`, dat
over hetzelfde onderwerp gaat en een heel ander bestand is. De pagina heet nu
`DeUefiOmgeving.html`, naar wat ze werkelijk behandelt: dat de term BIOS blijft
plakken op firmware die UEFI is, en met welke toets je in die omgeving raakt. De
kop op de pagina blijft **BIOS / UEFI**, want dat is de tekst uit de Word, en de
id in `reference.js` is `bios-uefi-omgeving`. Een bestandsnaam is hier dus voor
het eerst iets anders dan `pascal()` van de kop; de tekst zelf is niet aangeraakt.

**De sectie Studievragen achteraan heet hier Test jezelf**, zoals in hoofdstuk 1.
Het kader Studievragen vooraan houdt zijn eigen naam en staat samen met de
Kernpunten op `Overzicht.html`. Hoofdstuk 2 had geen sectie achteraan, dit
hoofdstuk wel.

### De negen vragen van Test jezelf, en de drie die niet in het mechanisme pasten

De export eist per meerkeuzevraag precies een `class="juist"`; een open vraag
draagt in de plaats een `<div class="oplossing">`. Drie van de negen vragen
konden dat niet halen zoals ze in de Word stonden. Alle drie zijn ze op
7 september 2026 door de lector beslist.

| Vraag | Antwoord | Waarop het steunt |
|---|---|---|
| 1 Welk apparaat is verantwoordelijk voor het opstarten | b, de BIOS / UEFI | 3.1, het reset vector adres verwijst naar het BIOS geheugen, en daar staan de instructies die verder opstarten |
| 2 Waarvoor staat de afkorting BIOS | open, Basic Input Output System | 3.2, eerste zin |
| 3 Hoe de instellingen bewaard blijven | d, door een batterij op het moederbord | 3.2, "Deze instellingen blijven, ook als de computer uitstaat, bewaard door middel van de batterij" |
| 4 Doel van de POST | c, de hardware controleren op aanwezigheid en goede werking | 3.2, "controleren als alle nodige hardware aanwezig is en functioneert" |
| 5 Hoe je de MBR het best omschrijft | b, een kleine ruimte op de harde schijf met instructies om verder op te starten | 3.2, de eerste sector van 512 bytes waarvan 440 voor de Master Boot Code |
| 6 Welke GEEN nadeel is van de BIOS | e, limiteert de kloksnelheid van de processor | 3.3 somt de vier andere op als nadelen; over de kloksnelheid zegt 3.2 net het omgekeerde, dat je die er zelf instelt |
| 7 In welke situaties je de instellingen wijzigt | open, de vier situaties samen | de vier mogelijkheden uit de Word |
| 8 Hoe je in de omgeving raakt | b, F1, F2, DEL bij het opstarten | 3.4, "moet je op een specifieke toets drukken", met Esc, F2, F10, F12 of Delete |
| 9 Hoe de POST fouten kenbaar maakt | open, pieptonen en een boodschap op het scherm | 3.2, "hoor je vaak een BEEP geluid of zie je een foutboodschap op het scherm" |

**Vraag 6 is omgekeerd, want vier van de vijf mogelijkheden waren juist.** Klein,
onveilig, traag en schijven tot 2 TB staan alle vier in 3.3 als nadeel; alleen de
kloksnelheid niet. De vraag luidt nu "Welke van deze is GEEN nadeel van de BIOS
ten opzichte van UEFI?" en de vijf mogelijkheden staan er woord voor woord nog.
Alleen de vraagzin is veranderd.

**Vraag 7 en vraag 9 zijn open vragen geworden, en dat is een verlies dat je moet
kennen.** Bij vraag 7 waren alle vier de mogelijkheden verdedigbaar juist, bij
vraag 9 twee van de vier: 3.2 zegt letterlijk "hoor je vaak een BEEP geluid of
zie je een foutboodschap op het scherm", dus zowel het scherm als de luidspreker
klopt. Ze dragen nu invulruimte en een `<div class="oplossing">` waarin de
mogelijkheden uit de Word samen het antwoord vormen. **De brontekst gaat daarmee
niet verloren, maar de vorm wel**: de Brightspace-test van dit labo is meerkeuze
met giscorrectie, en drie van de negen vragen bereiden daar nu niet meer op voor.
Wie dat liever anders heeft, keert vraag 9 om zoals vraag 6 ("wanneer er nog geen
beeld is") en houdt vier meerkeuzemogelijkheden over.

**Vraag 9 legt ook een verschil met het labo bloot.** `Labo/Assemblage/Theorie/BiosUefi.html`
zegt: "Loopt de POST vast, dan is er nog geen beeld om een boodschap op te tonen.
Daarom geeft het moederbord een reeks pieptonen." De syllabus zet de twee naast
elkaar alsof je kan kiezen. Het artikel op bladzijde 4 zit tussen de twee in
("Piepgeluidjes zijn de meest voorkomende manier"). De oplossing van vraag 9 zegt
allebei en noemt de reden waarom de pieptoon overblijft.

**Een open vraag krijgt een invulregel per ding dat het antwoord telt.** Beslist
op 7 september 2026, nadat de drie open vragen elk een enkele regel bleken te
dragen. Vraag 7 vraagt naar situaties en het antwoord noemt er vier, dus ze
draagt vier regels; vraag 9 vraagt hoe de POST een fout kenbaar maakt en dat zijn
er twee, dus twee regels; vraag 2 vraagt waar een afkorting voor staat en dat is
er een. Een regel is 8,2mm, wat overeenkomt met gewoon gelinieerd papier.

**Test jezelf loopt daardoor over twee bladzijden, en vraag 9 staat alleen op de
tweede.** Dat is nagerekend en niet op te lossen: vraag 9 heeft 25,0mm nodig en
onderaan de eerste bladzijde is 14,1mm vrij. De enige knop die genoeg zou
opleveren is de ondermarge van 4,3mm van een tabel, en die staat in de gedeelde
`table`-regel van `syllabus.css`, dus eraan draaien versmalt ook de dertig
invulruimtes van hoofdstuk 2. De lege ruimte onder vraag 9 is voor de student
trouwens gewoon plaats om te schrijven.

**"aanpasssen" is verdwenen zonder dat er iets gecorrigeerd is.** Die tikfout
stond in de vierde mogelijkheid van vraag 7, en die mogelijkheden zijn met de
omzetting naar een open vraag weggevallen. De oplossing eronder is nieuwe tekst
en schrijft dus gewoon "aan te passen". **"besturinggsysteem" in vraag 4 staat er
nog**, want die vraag is meerkeuze gebleven.

### De sectie Artikel: BIOS en UEFI, en wat ze kost

**De vier schermafdrukken blijven staan, met een bronvermelding erbij.** Beslist
op 7 september 2026. Wat er stond was vier bladzijden lopende tekst van iemand
anders als plaatje, zonder een woord eigen tekst en zonder te zeggen van wie het
was. De sectie draagt nu een info-box Bron met de titel, de redactie, de datum en
de link, en per figuur een bijschrift "Bladzijde N van 4, TechPulse". **Verder
geen eigen tekst**: er stonden even twee alinea's boven die zeiden wat het artikel
toevoegt, en die zijn er op vraag van de lector weer uit. De bron volstaat.

De bron is: Redactie TechPulse, *BIOS en UEFI: wat je computer doet voor Windows
opstart*, 22 april 2022,
`https://techpulse.be/achtergrond/215297/bios-en-uefi-wat-je-computer-doet-voor-windows-opstart/`.
De link draagt `target="_blank"`; regel 4 van de contentcheck weigert alleen een
externe **document**link, dus een artikel mag.

**Leesbaarheid is niet het probleem, en dat is nagekeken in de render.** De vier
afbeeldingen drukken op ongeveer 250 dpi en de lopende tekst erin meet 3,18 mm
inkthoogte per regel bij een regelafstand van 5,23 mm, tegen 10 pt voor de tekst
van de syllabus zelf. Wat er wel op staat, staat er ook op: kruimelpaden, twee
groene blokken waar een videospeler hoorde te staan, drie wegklik-kruisjes, en op
bladzijde 3 een zin die twee keer na elkaar staat ("Meer dan vroeger is het een
uitdaging om in de UEFI/BIOS te raken."). De tekst is niet doorzoekbaar en niet
selecteerbaar, en het `alt` beschrijft daarom wat er op de bladzijde staat in
plaats van het over te typen.

**Drie van de vier zijn smaller gezet dan de Word ze zet, en dat is de knop uit
hoofdstuk 2.** De Word geeft ze 160.0mm, en dan is de afbeelding 233mm hoog op een
bladspiegel van 240mm: figuur plus bijschrift past dan niet meer samen op een
blad, Chrome negeert de `page-break-inside: avoid` die niet uit kan, en het
bijschrift belandde op de bladzijde na zijn figuur. Op 152.0mm (bladzijde 2) en
153.0mm (bladzijde 3 en 4) is het blok 232mm en blijft het heel. Dat scheelde ook
een bladzijde in het hoofdstuk. Bladzijde 1 is niet aangeraakt: die afbeelding is
korter en paste al.

### De acht afbeeldingen

**Alle acht staan inline**, dus het zwevende geval van hoofdstuk 1 speelt hier
niet; `IMPORT.md` meldt er ook geen. Elk bestand is opengedaan voor het `alt`
erbij geschreven werd, en die alt-teksten staan alleen in de HTML: **een nieuwe
import van dit hoofdstuk gooit ze weg**.

**image31 is hertekend en heet nu `img/syllabus-03-master-boot-record.svg`.** Het
origineel is de MBR-tekening uit de Word, en er waren drie redenen om ze niet
over te nemen. Ze staat in het Engels in een Nederlandse tekst en gebruikt woorden
die de tekst ernaast niet gebruikt (Code, Disk Signature, Nulls). Ze draagt een
tikfout, "E ach sector has 512 bytes". En ze is 616 pixels breed, wat op 160.0mm
neerkomt op 98 dpi, tegen 247 voor de rest van dit hoofdstuk. Dat is dezelfde
afweging als bij fragmentatie en de drie fits in Labo Partitioneren, en dezelfde
uitkomst.

De hertekening laat **geen enkel gegeven van het origineel vallen**: de schijf
als een rij sectoren van 512 bytes met sector 0 als master boot record, en die
sector op schaal verdeeld in 440 + 4 + 2 + 64 + 2 bytes. Drie van die vijf velden
zijn op schaal een haarlijn breed, dus ze worden benoemd in een legende onder de
balk in plaats van erin. Palet en lettertype zijn die van de SVG's van Labo
Partitioneren, en de tekening is voor gebruik in Edge gerenderd.

**Dit is de eerste SVG in de theorietrack, en er staat nu tweemaal een MBR in
`img/`.** `partitioneren-mbr-indeling.svg` tekent hetzelfde voor het labo, in het
Nederlands en met dezelfde getallen. Dat is met opzet: de twee tracks zijn
onafhankelijk en een labopagina mag niet afhangen van een syllabuspagina. **De
twee spreken elkaar op een punt tegen**: het labo noemt de laatste 8 bytes van de
sector "een handtekening", de syllabusfiguur splitst ze in 4 bytes
schijfhandtekening, 2 bytes nullen en 2 bytes handtekening. De syllabusversie is
de nauwkeurige, en dat volgt de Word. Er is niets aan de labopagina veranderd.

**image32, het Windows Boot Manager-scherm, draagt een watermerk AskVG.com
rechtsonder, en blijft staan.** Het is de enige afbeelding van een bootloader die
je laat kiezen, en het bijschrift noemt de bron nu bij naam in plaats van ze
alleen in het watermerk te laten staan. Dat is dezelfde lijn als de beslissing
over het artikel hierboven, en anders dan de How Stuff Works-figuur van hoofdstuk
6, waar wel een alternatief voor bestaat.

**Het originele `img/syllabus-03-bios-uefi-03.png` is geschrapt**, want de SVG
staat in de plaats en niets verwijst er nog naar. Een herimport zet het terug.

### Wat er in de tekst opviel, en niet aangeraakt is

De tekst gaat er letterlijk in, dus dit staat hier en niet in de HTML:

- **Vier Engelse opsommingstekens midden in 3.2**, een citaat uit de documentatie
  van industriele moederborden ("BIOS functionality very much depends on the
  field of usage for a motherboard", en drie regels erna). Er staat niet bij dat
  het een citaat is en er staat geen bron bij. De drie alinea's eronder geven de
  inhoud ervan wel in het Nederlands, dus wie het Engels overslaat mist niets.
- **Het kader Studievragen vraagt naar Thermal Throttling**, een term die in de
  hele tekst niet voorkomt: 3.2 heeft het over **thermal monitoring**. Dezelfde
  vraag schrijft SpeedStepping aaneen waar de tekst **speed stepping** los
  schrijft.
- **"besturinggsysteem"** in mogelijkheid a van vraag 4 van Test jezelf.
- **"op te starten.In de BIOS"** in 3.2, zonder spatie na de punt.
- **"Zodra dit is gebeurt"** in 3.2, waar gebeurd hoort te staan.
- **"Ontwikkeld door Intel, UEFI is tegenwoordig aanwezig op iedere recente
  computer die je nu koopt een heeft bovenvermelde nadelen niet."** in 3.3: "een"
  voor "en", en een zinsopener die uit het Engels komt.
- **"Voor een modern besturingssysteem kunnen in die 440 bytes te weinig
  instructies om het besturingssysteem van op te starten."** in 3.2. Er ontbreekt
  een werkwoord; bedoeld is dat er te weinig instructies in passen.
- **"Zoals je zopas hebt misschien kunnen afleiden"** in 3.3, met misschien op de
  verkeerde plaats.
- **"om te zien als", "controleren als", "om te weten als"** staan drie keer in
  3.2 waar het standaard Nederlands "of" gebruikt. Dat is een vaste vorm in deze
  hele Word.
- **"de computer absoluut nog niet weet hoe het de aanwezige hardware moet
  aanspreken"** in 3.1, met het waar hij of ze hoort te staan.
- **"energie verslindende"** in 3.2, los geschreven.
- **De syllabus schrijft "de Master Boot Record", het labo "het Master Boot
  Record".** Binnen dit hoofdstuk is het consequent de; het labo is niet
  aangeraakt.
- **Studievraag 6 vooraan was een imperatief met een vraagteken**, "Geef enkele
  voordelen van UEFI?" Ze draagt sinds 7 september 2026 een punt; de regel en de
  reden staan bij hoofdstuk 4, dat de derde was die zo'n zin tegenkwam.
- De hoge komma's rond booten, strijd en spammen zijn in de Word gewone
  apostrofs en zijn dat hier gebleven. Dat is opmaak en geen tekst.

### Waar de syllabus en de labo's naast elkaar staan

Patroon 17: de twee tracks zeggen hetzelfde twee keer en er linkt niets tussen.
Nagekeken op tegenspraak, en dit kwam eruit. Er is aan geen enkele labopagina
iets veranderd.

- **De 8 laatste bytes van de MBR.** Zie hierboven bij de hertekening. Het labo
  vat ze samen als een handtekening, de syllabus splitst ze in drie velden.
- **De POST en de pieptoon.** Zie hierboven bij vraag 9. Het labo zegt dat er nog
  geen beeld is, de syllabus geeft scherm en pieptoon als gelijkwaardige
  mogelijkheden.
- **De grens van de opstartschijf.** De syllabus zegt 2 TB,
  `Labo/Assemblage/Theorie/BiosUefi.html` zegt "Tot 2 TB",
  `Labo/Partitioneren/Theorie/Partitietabellen.html` rekent het voor als 2^32
  sectoren van 512 bytes, "ongeveer 2 TB", en het artikel op bladzijde 3 schrijft
  2,1 TB. Hetzelfde getal, alleen anders afgerond.
- **GPT komt in dit hoofdstuk niet voor.** De syllabus zegt over UEFI alleen dat
  er "een speciale partitie" met een `.efi`-programma in de plaats van de MBR
  komt, en noemt de partitietabel nergens bij naam. Beide labo's doen dat wel.
  Dat is een gat en geen tegenspraak.

## Hoofdstuk 4, Industriële computer vs embedded system

**De sectie Studievragen achteraan heet hier Test jezelf**, zoals in hoofdstuk 1
en 3. Het kader Studievragen vooraan houdt zijn eigen naam en staat samen met de
Kernpunten op `Overzicht.html`. De pagina heet `TestJezelf.html`; de importer
schreef `Studievragen.html`.

**De vijf genummerde items lopen door in een enkele `<ol>`, dus er is nergens een
`start=`.** De lege alinea's tussen de vraaggroepen staan in de Word in de stijl
Normal en niet in List Paragraph, dus ze breken de nummering niet. De importer
laat ze vallen en de lijst blijft heel. Regel 14 heeft hier dus niets aan te
sluiten.

### De vijf vragen van Test jezelf, en de vijfde die geen vraag is

| Vraag | Antwoord | Waarop het steunt |
|---|---|---|
| 1 Waarin een IPC verschilt van een gewone desktop | b, hardware die lang ondersteund wordt, tot 10 jaar vervangstukken | 4.1, "vaak voor hardware gekozen waarvan de ondersteuning en beschikbaarheid nog lang in de toekomst gegarandeerd worden", en de garantie van 10 jaar in de zin erna |
| 2 Waarom het processortype een bepalende keuze is | c, de instructieset x64 / ARM | het vijfde kernpunt; de lopende tekst dekte het niet, zie hieronder |
| 3 Wat een IO eiland is | b, de IPC heeft de connectoren niet op zijn moederbord en bereikt het eiland over een industrieel netwerkprotocol | het derde en vierde kernpunt, en 4.3, "Via een ethernet interface communiceer je dan met verschillende IO eilanden over EtherCAT, PROFINET, Modbus TCP" |
| 4 Welke naam GEEN industrieel netwerkprotocol is | d, AUTOCAT | het vierde kernpunt noemt PROFINET, Modbus TCP, EtherNet/IP en EtherCAT; AUTOCAT komt in de hele Word niet voor |
| 5 De specs van een recente Raspberry Pi | open, geen vast antwoord | zie hieronder |

**Vraag 3 leek twee juiste antwoorden te kunnen hebben en heeft er een.** De
tweede en de derde mogelijkheid zijn elkaars tegengestelde, dus dat is nagekeken
tegen de tekst en niet op gevoel: mogelijkheid c zegt dat een IO eiland
stand-alone is en geen communicatie via een industrieel netwerkprotocol nodig
heeft, en het vierde kernpunt zegt net dat je zo'n protocol gebruikt om een IO
eiland vanaf het netwerk aan te sturen. c is dus tegengesproken. Vraag 1, 2 en 4
hebben elk ook precies een juiste mogelijkheid; vraag 4 was in de Word al een
omkering en is niet aangeraakt.

**Vraag 5 is een open vraag geworden met een oplossing die naar de bron wijst.**
Beslist op 7 september 2026. Ze heeft geen mogelijkheden en dus geen
`class="juist"`, en zonder `<div class="oplossing">` drukt het hele hoofdstuk
geen Oplossingen. Ze heeft ook geen vast antwoord: welke specs kloppen, hangt af
van welk model de student opzoekt. De oplossing zegt daarom waar je het opzoekt
(bij het model zelf op raspberrypi.com, onder Products, en in de product brief
die daar per model hangt) in plaats van wat het antwoord is. **Dat is een
oplossing die de brontekst niet heeft**, want de Word geeft er geen.

De twee andere mogelijkheden zijn overwogen en afgewezen: ze uit Test jezelf
halen en een eigen sectie Oefening geven, of ze laten vallen. Ze blijft staan
omdat dit de enige plaats in het hoofdstuk is waar de student zelf naar de
Raspberry Pi kijkt, terwijl 4.2 zegt dat dat het toestel van het labo is.

**Het invulblad van vraag 5 zijn negen invulregels, en die vorm is hier gekozen.**
In de Word zijn het vijf gewone alinea's die met tabs twee velden naast elkaar
zetten: Model / Jaartal uitgebracht, Processor / Instructieset, Capaciteit
werkgeheugen / Aantal USB aansluitingen, Schermaansluting / Ethernet, en WiFi
alleen. De importer maakt daar lopende tekst van en de tabs vallen weg, dus er
bleef niets over om in te schrijven en twee labels plakten aan elkaar
("Capaciteit werkgeheugen:Aantal USB aansluitingen:"). Dat is hetzelfde geval als
de drie tabellen van 2.1 Hardware herkennen.

Het zijn negen velden, dus negen regels: de afspraak uit hoofdstuk 3 is een
invulregel per ding dat het antwoord telt, en niet een regel per vraag. Ze staan
in de invulkolom-vorm, het label links en de ruimte rechts, zoals de vier
genummerde vragen met labels in hoofdstuk 2. **De labelkolom is 78mm en niet de
62mm die de tekst nodig zou hebben**: bij die maat brak "Schermaansluting: DVI /
HDMI / DisplayPort" over twee regels en werd die ene rij twee keer zo hoog als de
acht andere.

### Twee gaten in de dekking, en de tekst die ervoor bijgeschreven is

Beslist op 7 september 2026, dezelfde afweging als bij de wet van Moore in
hoofdstuk 1: er komt tekst bij in plaats van dat een vraag wegvalt. **Deze twee
alinea's zijn de enige in dit hoofdstuk die niet uit de Word komen, en een
herimport gooit ze weg.**

- **Het woord instructieset kwam in de lopende tekst nergens voor**, terwijl
  vraag 2 er rechtstreeks op steunt. Erger nog, 4.1 duwde naar de verkeerde
  mogelijkheid: vlak na "Intel Core 3, 5 of zelfs 7 processoren" staat "Het type
  processor bepaalt ook onmiddellijk welke applicaties kunnen gedraaid worden",
  en wie alleen dat leest kiest afleider a, het typenummer. De nieuwe alinea
  staat er meteen achter en zegt wat dat type is: "Dat type is daarbij niet het
  typenummer maar de instructieset: de verzameling instructies die de processor
  begrijpt. Een Atom, een Core en een Ryzen delen dezelfde instructieset, x86 en
  in zijn 64 bit vorm x64, en draaien dus dezelfde programma's. Een ARM processor
  heeft een andere instructieset. Een programma dat voor x64 vertaald is, start
  daar niet op, dus wie van x64 naar ARM gaat heeft van elk programma een versie
  voor ARM nodig."
- **Een IO eiland werd nergens uitgelegd.** Het staat in het derde en vierde
  kernpunt, in studievraag 4 vooraan, in vraag 3 van Test jezelf, en een keer in
  het voorbijgaan in 4.3 ("verschillende I/O eilanden"), maar geen enkele sectie
  zegt wat het is. De nieuwe alinea staat in 4.1, achter de alinea over de SOFT
  PLC, omdat een PLC is wat IO aanstuurt: "Een PLC stuurt IO aan: ingangen die
  een sensor uitlezen en uitgangen die een klep of een motor schakelen. Op het
  moederbord van een industriele computer zitten die aansluitingen meestal niet.
  Ze zitten op een apart toestel dat bij de machine staat, een IO eiland, en de
  computer bereikt dat over het netwerk. Daarvoor dient een industrieel
  netwerkprotocol zoals PROFINET, Modbus TCP, EtherNet/IP of EtherCAT: het brengt
  de toestand van elke ingang naar de computer, en het commando voor elke uitgang
  terug naar het eiland." Die alinea beantwoordt meteen studievraag 4 en 5
  vooraan, die anders alleen door het kader beantwoord werden.

### De vijf afbeeldingen

**Elk bestand is opengedaan voor het `alt` erbij geschreven werd**, zoals in de
drie hoofdstukken ervoor. Die vijf regels staan alleen in de HTML en **een nieuwe
import gooit ze weg**. Geen enkele afbeelding draagt een bijschrift in de Word,
dus ze dragen er hier ook geen.

**De tweede zweeft**, `syllabus-04-industriele-computer-vs-embedded-system-02.png`
in 4.2, met `wrapSquare` verankerd. De alinea ernaast ("Een embedded systeem
afgelijnd omschrijven is geen eenvoudige taak") is dus lopende tekst gebleven en
de figuur kreeg geen bijschrift. Dat is het geval van hoofdstuk 1; `IMPORT.md`
meldt het. De vier andere staan inline.

**De twee productfoto's van 45KB dragen geen watermerk**, tegen de verwachting
in. Het zijn schone catalogusfoto's van Beckhoff, de panel PC van voren en van
achteren en twee control cabinet PC's, allebei 504 bij 259 pixels op de
lichtblauwe achtergrond van die fabrikant. Ze zijn opengedaan en uitvergroot voor
die conclusie getrokken werd, want dat is precies het geval waar Labo
Partitioneren een regel voor heeft. Wat erop staat, klopt bovendien met de tekst
ernaast: op de control cabinet PC's zie je de lezer, de ventilatoren, de
aansluitingen en de uitbreidingssleuven alle vier aan het frontpaneel, en dat is
wat 4.4 beweert. Ze blijven staan, met het merk zichtbaar op de omlijsting van
het scherm, zoals het toestel dat zelf draagt.

**De eerste afbeelding mist haar twee kolomtitels, en dat zit zo in de Word.**
`...-01.png` zet consumentenhardware links en industriele hardware rechts van een
schuine lijn, en boven elke helft stond een titel die in de bron al weggesneden
is: op de bovenste beeldrij staan alleen nog de staarten van twee letterregels.
Nagekeken in `word/document.xml`: deze afbeelding draagt geen `srcRect`, dus de
uitsnede komt niet van Word en de importer laat niets vallen. Het `alt` zegt
daarom in woorden wat de twee helften tegenover elkaar zetten. Wie de figuur ooit
vervangt, is de titels kwijt en niet iets anders.

**De Beckhoff CX9020 in 4.2 heeft Engelse bijschriften in een Nederlandse tekst**
(Ethernet and USB connection, Battery compartment, Status LEDs). Dat is dezelfde
afweging als bij de MBR-tekening van hoofdstuk 3, en hier valt ze de andere kant
uit: het is een productfoto met wijzers erop en geen tekening die je natekent, ze
haalt 182 dpi op haar 89.9mm, en de woorden die erop staan zijn hardwarenamen die
de tekst zelf ook onvertaald gebruikt. Ze blijft dus staan zoals ze is.

**Drie maten wijken af van de Word, en alle drie om dezelfde reden: bladspiegel.**
De Word zet de vijf figuren op 160.0, 90.0, 160.0, 90.0 en 90.0mm.

- De Raspberry Pi in 4.2 staat op **140.0mm** in plaats van 160.0. Op 160.0 is ze
  123.3mm hoog en bleef er onder de tekst van bladzijde 36 net te weinig over, dus
  ze sprong naar een eigen bladzijde en liet een halve bladzijde wit achter. Ze
  stond eerst op 145.0mm; de redactionele ronde hieronder maakte de alinea erboven
  een regel langer en dat volstond om haar opnieuw over de rand te duwen. Op 140.0
  is ze 107.9mm en houdt ze drie millimeter over.
- De panel PC in 4.3 en de control cabinet PC in 4.4 staan allebei op **80.0mm**
  in plaats van 90.0. Nadat de Pi opschoof, liep 4.4 met een enkele regel over
  naar een volgende bladzijde. Die twee figuren tien millimeter smaller maken
  levert samen 10mm hoogte op, en daarmee passen 4.3 en 4.4 samen op een
  bladzijde.

Het hoofdstuk telt daardoor zeven bladzijden in plaats van negen. De drie maten
zijn de knop uit hoofdstuk 2 en 3, en dit is de eerste keer dat eraan draaien in
twee stappen ging: de eerste ingreep verplaatste het probleem naar de sectie
erna.

**De bladzijden van dit hoofdstuk zijn gerenderd en bekeken**, de vier met een
figuur, de opening, Test jezelf en Oplossingen. Test jezelf past met zijn vier
meerkeuzevragen en zijn invulblad van negen regels op een enkele bladzijde;
Oplossingen drukt de vier letters b, c, b, d en het open antwoord.

### De hoofdstuktitel in reference.js draagt een trema, en de rest van het bestand niet

`reference.js` was tot hier volledig ASCII, en de naam van een categorie is wat
`export-syllabus.py` als **hoofdstuktitel drukt**, boven de eerste bladzijde en in
de inhoudstafel. Zonder trema stond er "4 Industriele computer vs embedded
system" boven een kader dat drie keer "industriële" schrijft. De naam is dus
`Industriële computer vs embedded system`, met het teken zelf, en dat is de enige
regel in het bestand die niet ASCII is.

**De sectietitels raakt dit niet**: die komen uit de `<h1>` van de pagina en niet
uit het manifest, dus "4.1 Industriële computers" stond er al goed. De blurbs
blijven ook ASCII, want die worden nergens gedrukt: ze staan alleen op de hub, en
die wordt met opzet door niets gelinkt.

### Wat er in de tekst opviel, en op 7 september 2026 rechtgetrokken is

De tekst gaat er in principe letterlijk in, dus dit staat hier met wat er beslist
is. **Al deze correcties staan alleen in de HTML en een herimport draait ze
terug.**

- **"Een tweede / derde / vierde criteria"** in 4.1 is drie keer **criterium**
  geworden.
- **"toegangkelijk"** in 4.4 is **toegankelijk**.
- **"Rasbperry PI"** in vraag 5 en **"Raspberry PI"** in 4.2 zijn allebei
  **Raspberry Pi**, de naam die de fabrikant het toestel geeft.
- **"Schermaansluting"** in het invulblad van vraag 5 is
  **Schermaansluiting**. Die label is daarmee een letter langer, en hij past nog
  altijd op een regel in de kolom van 78mm; nagekeken in de render.

**Vier namen wisselden binnen het hoofdstuk van schrijfwijze, en zijn in twee
rondes rechtgetrokken.** De eerste ronde nam het kader Kernpunten als maat, omdat
Test jezelf daar al op steunde, en zette de protocolnamen daarmee in kapitalen.
**Die maat is later diezelfde dag vervallen**: toen hoofdstuk 7 dezelfde vijf namen
anders bleek te schrijven, is beslist dat een productnaam de schrijfwijze van zijn
eigenaar draagt. Het kader is dus meegegaan in plaats van de maat te zijn. De
redenering staat bij hoofdstuk 7; hier staat wat het geworden is.

- **CodeSYS in 4.1 en 4.4, CodeSys in 4.3** zijn alle drie **CODESYS**, zoals de
  fabrikant het schrijft. Deze naam is in allebei de rondes dezelfde gebleven.
- **De protocolnamen** staan nu als **EtherCAT, PROFINET, Modbus TCP en
  EtherNet/IP**, in vier plaatsen: het kernpunt over industriele
  netwerkprotocollen, de bijgeschreven alinea in 4.1, 4.3 en mogelijkheid b en c
  van vraag 4 van Test jezelf. De losse **MODBUS** in die vraag is **Modbus**.
  ETHERNET/IP stond in geen van de twee lijstjes die vergeleken werden en is
  meegegaan omdat hij anders als enige in kapitalen naast EtherCAT zou staan.
- **"I/O eilanden" in 4.3** is **IO eilanden**, zonder schuine streep, zoals de
  kernpunten en de vragen het schrijven.
- **"Windows 10 IOT" in 4.1 en 4.2** is **Windows 10 IoT**, zoals Microsoft het
  product noemt.
- **"Als je een IPC of ES koopt" in 4.1** schrijft **embedded system** voluit. De
  afkorting ES werd nergens ingevoerd, terwijl IPC dat twee alinea's eerder wel
  wordt.

**De ARM-kant van 4.2 draagt nu de naam die op ARM draaide.** De zin zette
tweemaal "Windows 7 Embedded" neer, aan allebei de kanten van het verschil dat ze
maakt, en daarmee viel er niets na te kijken. Voor ARM staat er nu **Windows
Embedded Compact 7**, de variant die op die instructieset werkte; de x86-kant is
niet aangeraakt. Dat is een woord bij, en het is het enige feit in dit hoofdstuk
dat niet uit de Word komt buiten de twee alinea's hierboven. Beslist op
7 september 2026, en het raakt vraag 2, die net over instructiesets gaat.

**Een studievraag die een imperatief is, krijgt een punt en geen vraagteken.**
Beslist op 7 september 2026, en meteen doorgevoerd in de drie hoofdstukken waar
zo'n zin staat: "Geef twee redenen waarom men tracht componenten dichter tegen
elkaar te plaatsen." in hoofdstuk 1, "Geef enkele voordelen van UEFI." in
hoofdstuk 3, en "Geef de naam van minstens twee industriële netwerkprotocollen
waarmee IO aangestuurd kan worden." hier. Een echte vraag houdt haar vraagteken,
dus "Waarvoor staat de afkorting UEFI?" is niet aangeraakt. **Deze regel geldt
vanaf nu voor elk hoofdstuk**, en ze staat hier omdat hoofdstuk 4 de derde was
die ze tegenkwam.

**Vraag 1 van Test jezelf vraagt weer letterlijk wat studievraag 1 vraagt.** Het
kader schrijft "een gewone desktop computer", de vraag achteraan schreef "een
gewone desktop". Dat is nu allebei het eerste: het is dezelfde vraag, dus ze
hoort er twee keer hetzelfde te staan.

**De Raspberry Pi ging daarna van 145.0 naar 140.0mm.** "Windows Embedded Compact
7" maakte de alinea over de besturingssystemen een regel langer, en die ene regel
duwde de figuur weer naar een eigen bladzijde. Dat is de knop van hierboven, voor
de derde keer in dit hoofdstuk: elke ingreep in de tekst kan een figuur die op
0,6mm past over de rand duwen, dus reken de bladspiegel na na elke redactionele
ronde en niet alleen na de import.

### Wat er in de tekst opviel, en niet aangeraakt is

De tekst gaat er letterlijk in, dus dit staat hier en niet in de HTML:

- **4.1 noemt het "Windows 7 Compact / Embedded", 4.2 "Windows 7 Embedded".**
  Twee namen voor wat waarschijnlijk hetzelfde is; alleen de ARM-kant van 4.2 is
  aangepast, de rest niet.
- **Drie woorden voor hetzelfde onderdeel**: vervangonderdelen in 4.1,
  vervangstukken in Test jezelf, wisselstuk in 4.4.
- **"Een embedded systeem" tegen "een embedded system"** wisselen in 4.2 binnen
  drie alinea's.
- **Dubbele spatie** na "vormfactor van het moederbord." in 4.1, en **"héél
  divers"** met een accent aigu als nadruk in dezelfde sectie.
- De hoge komma's rond 'stevig' in het kader Kernpunten zijn in de Word gewone
  apostrofs en zijn dat hier gebleven. Dat is opmaak en geen tekst.

### Wat het labo Embedded Systems straks niet mag tegenspreken

`Labo/EmbeddedSystems/` bestaat nog niet, dus er is hier niets om tegen te
spreken. Wat dit hoofdstuk vastlegt en wat dat labo dus moet aanhouden:

- **De Raspberry Pi is het embedded system van het labo.** 4.2 zegt dat met zoveel
  woorden en toont er een foto van, en vraag 5 van Test jezelf laat de student de
  specs van een recent model opzoeken. Een labo dat met iets anders werkt, maakt
  die zin en die vraag onwaar.
- **ARM tegen x86 is een verschil in instructieset.** Dat staat nu in 4.1, in de
  alinea die hier bijgeschreven is: dezelfde instructieset betekent dezelfde
  programma's, een andere instructieset betekent een aparte versie van elk
  programma. De Raspberry Pi is ARM, dus dat is precies waar een labo tegenaan
  loopt bij het kiezen van een image of een pakket.
- **Een real time besturingssysteem is er een dat kan garanderen dat een taak
  binnen een zekere tijd afgehandeld wordt.** Zo staat het in 4.2, en dat is een
  garantie over de tijd en niet over de snelheid. Raspberry Pi OS is er geen.
- **Een IO eiland is een apart toestel met de IO-aansluitingen erop**, dat de
  computer over een industrieel netwerkprotocol bereikt, omdat een industriele
  computer of embedded system die connectoren meestal niet op zijn moederbord
  heeft. Zie de bijgeschreven alinea hierboven.
- **De vier protocolnamen die dit hoofdstuk noemt** zijn PROFINET, Modbus TCP,
  EtherNet/IP en EtherCAT. Vraag 4 van Test jezelf toetst er drie van.

**Dit hoofdstuk raakt aan hoofdstuk 8, Virtual machines en containers**, dat sinds
7 september 2026 ingevoerd is: 4.1 en 4.3 hebben het over een SOFT PLC en over software die
op een IPC draait. Er staat geen verwijzing naar dat hoofdstuk, en die hoort er
ook niet te staan zolang het er niet is.

## Hoofdstuk 5, De Von Neumann architectuur

**De sectie Studievragen achteraan heet hier Test jezelf**, zoals in hoofdstuk 1,
3 en 4. Het kader Studievragen vooraan houdt zijn eigen naam en staat samen met
de Kernpunten op `Overzicht.html`. De pagina heet `TestJezelf.html`; de importer
schreef `Studievragen.html`.

**Dit is een kort hoofdstuk**: twee secties tekst en een Test jezelf, samen zes
bladzijden. De twee Heading 3's binnen 5.2 (x86 / x64 instructieset, en ARM)
worden op die pagina h2, zoals de importer dat overal doet.
`ProcessorX86VsX64VsArm.html` is een lange bestandsnaam en blijft wat `pascal()`
ervan maakt: er botst niets mee, dus er is geen reden voor de uitzondering die
hoofdstuk 3 wel nodig had.

### De vijf vragen van Test jezelf

| Vraag | Antwoord | Waarop het steunt |
|---|---|---|
| 1 Het principe van de Von Neumann architectuur | c, data en instructies moeten in het werkgeheugen staan om uitgevoerd te kunnen worden | 5.1, "data en instructies moeten in het werkgeheugen aanwezig zijn", en het derde kernpunt |
| 2 Teken het schema | open, het schema van 5.1 met per blok een component | zie hieronder |
| 3 Traag opstarten, daarna vlot | a, de harde schijf | de alinea die hier bijgeschreven is, zie hieronder |
| 4 Eigenschappen van een x64 Core 7 | b, focus op performantie maar weinig energiezuinig | 5.2, "erg gericht zijn op het leveren van de beste prestaties maar daartegenover staat dat ze een vrij groot energieverbruik opmeten", en het vierde kernpunt |
| 5 Compatibiliteit ARM en x64 | d, nee, een programma voor ARM moet opnieuw geschreven worden | 5.2, "Het is dan aan de software ontwikkelaars om hun programma's volledig opnieuw te schrijven voor ARM processoren" |

**Elke meerkeuzevraag heeft precies een juist antwoord, en dat is nageteld.** De
drie vragen van hoofdstuk 3 die dat niet haalden, hebben hier geen tegenhanger.
Wat wel nagekeken moest worden is mogelijkheid b van vraag 1: die noemt de
bottleneck, en sinds de bijgeschreven alinea hieronder staat de bottleneck wel
degelijk in het hoofdstuk. Ze wordt daarmee niet juist. De vraag vraagt naar het
**principe** van de Von Neumann architectuur, en dat is dat data en instructies in
het werkgeheugen moeten staan; dat het traagste onderdeel de snelheid bepaalt is
een gevolg van dat principe en niet het principe zelf.

### Vraag 2 is een tekenopdracht en krijgt een tekenkader van 90mm

De Word zet onder deze vraag een lege tabel van een rij, en dat is op papier ruim
zeven millimeter. Daar teken je geen schema van zes blokken met pijlen in.

**Het kader is 90mm hoog, en die maat is afgeleid en niet gekozen**: de figuur van
5.1 staat op papier 160.0 bij 90.9mm, en dat is precies wat er nagetekend moet
worden. `syllabus.css` heeft daar een nieuwe regel voor, `.tekenkader`, want
invulruimte kent alleen rijen. Die regel staat naast `ol.vragen > li` en
`.vragen-bij-figuur`, dus `syllabus.css` wijkt nu op drie plaatsen van DeN af.

**De 89.7mm in die regel is nagemeten en niet gerekend.** Een rand wordt op de
rand van de cel getekend en niet ernaast, dus 89.7mm `height` levert een kader van
90.0mm op; nagemeten in de PDF. Dat is meteen ook de plaats om te melden dat **een
invulregel op papier ongeveer 7,4mm meet en niet de 8,2mm** die bij hoofdstuk 3 en
4 genoteerd staat: de hoogte van zo'n rij wordt bepaald door de tekstregel erin en
niet door de `height` van 6mm. Er is niets aan hoofdstuk 3 of 4 veranderd, want
het aantal regels per vraag klopt daar los van de maat.

**De oplossing van vraag 2 noemt per blok een component voluit.** Zonder die
`<div class="oplossing">` drukt het hele hoofdstuk geen Oplossingen, want de
export eist per vraag een antwoord. Ze staat niet in de Word: die geeft er geen.

**Test jezelf past er toch op een bladzijde mee.** Bij hoofdstuk 3 liep de
vragenlijst over twee bladen; hier houden vier meerkeuzevragen en een kader van
90mm samen 240mm net. `ol.vragen > li` houdt elke vraag heel, dus als er ooit een
woord bijkomt, springt vraag 5 in haar geheel naar de volgende bladzijde en breekt
ze niet halverwege.

### Vraag 5 gaat van twee naar vier mogelijkheden

In de Word staan er alleen Ja en Nee onder, en bij giscorrectie is dat een gokkans
van een op twee. De drie afleiders komen uit 5.2 zelf: dat alle software op
allebei de instructiesets draait, dat het volstaat als het besturingssysteem
hetzelfde is, en dat de processor de instructies van de andere kant er zomaar bij
uitvoert. **Die drie mogelijkheden staan niet in de Word**, en een herimport gooit
ze weg. Het juiste antwoord is niet veranderd.

De derde afleider is de scherpste en ook de gevaarlijkste: emulatie laat een
programma van de andere instructieset wel degelijk draaien, dus wie alleen dat
onthoudt, kiest ze. Ze is daarom zo geschreven dat het onjuiste deel de
**processor** is en niet de emulatie: emulatie is software die vertaalt, en geen
ARM processor voert x64 instructies zelf uit. Dat staat woord voor woord in de
rechtgezette passage hieronder.

### De bottleneck stond alleen in de vragen, en er is tekst voor bijgeschreven

Nagekeken: het woord bottleneck komt in de lopende tekst van dit hoofdstuk nergens
voor. Het staat in mogelijkheid b van vraag 1 en in vraag 3, die er helemaal op
steunt. Ook het woord **opslag** stond alleen in de figuur van 5.1 en in geen
enkele zin. Dat is het gat van de wet van Moore in hoofdstuk 1, en de uitkomst is
dezelfde: er komt tekst bij in plaats van dat de vraag wegvalt.

**Dit is de enige alinea in dit hoofdstuk die niet uit de Word komt, en een
herimport gooit haar weg.** Ze staat in 5.1, achter het schema:

> Elk blok van dat schema heeft zijn eigen snelheid, en het traagste blok bepaalt
> hoe snel het geheel werkt. Dat traagste onderdeel heet de bottleneck. Bij het
> opstarten moet alles wat de computer nodig heeft van de opslag naar het
> werkgeheugen gelezen worden, want data en instructies moeten daar staan om
> uitgevoerd te kunnen worden. Start een computer traag op en werkt hij daarna
> vlot, dan wijst dat naar de schijf en niet naar de processor of het
> werkgeheugen.

Ze staat achter de figuur en niet ervoor, want ze gaat over de blokken van dat
schema en het woord opslag komt er pas in beeld.

### De passage over de virtuele machine is rechtgezet

**Wat er stond, klopte niet.** De sectie ARM zei "Dit is in feite een gesimuleerde
computer", "Alle hardware: processor, harde schijf, werkgeheugen worden dan
gesimuleerd", en bood dat aan als de manier om een x86- of x64-programma op ARM te
draaien.

`Labo/Virtualiseren/Theorie/VirtueleHardware.html` heeft het bij het rechte eind:
een virtuele machine laat de instructies van de gast **rechtstreeks** op de echte
processor lopen, met hardware die bewaakt dat hij niet buiten zijn virtuele machine
komt. Nagebootst zijn de randapparaten (schijf, dvd-station, netwerkkaart,
firmware); het werkgeheugen is echt geheugen. Daaruit volgt dat een virtuele
machine alleen een gast met **dezelfde** instructieset kan draaien, en dus nooit
x86 op ARM. Dat vraagt emulatie, en dat is wat traag maakt. De slotzin van de Word
("het nadeel is dat dit trager zal gaan") klopt dus wel, maar hoort bij emulatie.

De drie alinea's zijn herschreven naar die formulering, met **emulatie** als de
naam voor x86-op-ARM. **Aan de labopagina is niets veranderd** (patroon 17): de
twee tracks zeggen hetzelfde twee keer en er linkt niets tussen.

Twee keuzes in die herschrijving:

- **Het woord gast of guest komt er niet in voor.** Het labo zegt guest, maar de
  syllabus voert dat woord nergens in, en hoofdstuk 8 Virtual machines en
  containers is nog niet ingevoerd. Er staat dus "het besturingssysteem dat erin
  draait". Dat is patroon 20.
- **Paginatabellen staan er niet in.** Dat is de nauwkeurige reden waarom het
  geheugen van een virtuele machine echt geheugen is, maar het is een term die dit
  hoofdstuk niet draagt en die nergens uitgelegd wordt. Er staat "waarvan de
  virtuele machine een stuk toegewezen krijgt", en dat is waar.

**De eerste zin van die passage is daardoor omgekeerd.** In de Word begint ze met
"Een tussenoplossing bestaat er in om gebruik te maken van een virtuele machine",
en dat is precies wat niet klopt. Ze begint nu met "Een virtuele machine lost dat
niet op." De figuur ernaast blijft staan en blijft kloppen: ze toont twee virtuele
machines op een gewone computer, en dat is wat de twee alinea's eronder uitleggen.

**Studievraag 5 vooraan blijft beantwoord, en met twee zaken.** Ze vraagt wat je
kan doen om een programma voor x64 toch op ARM werkend te krijgen, en noemt
uitdrukkelijk twee dingen. Dat zijn nu emulatie, uit de rechtgezette passage, en
het programma opnieuw laten schrijven voor ARM, uit de alinea vlak ervoor. Voor de
correctie waren dat de virtuele machine en het opnieuw schrijven, en het eerste van
die twee was fout.

### Het schema van 5.1 is hertekend

**image42 heet nu `img/syllabus-05-von-neumann-schema.svg`.** Drie redenen, en de
eerste is de enige die je kan narekenen: ze is 741 pixels breed en komt op 160.0mm
neer op 118 dpi, tegen ongeveer 250 voor de rest van dit hoofdstuk. Ze is verder
oranje-grijs terwijl `syllabus-03-master-boot-record.svg` het palet van OrionCSS
draagt, en vraag 2 laat de student haar natekenen, dus ze wordt beter bekeken dan
een gewone figuur. **De taalreden van hoofdstuk 3 speelt hier niet mee**: het
origineel staat volledig in het Nederlands en is leesbaar.

De hertekening laat **geen enkel gegeven van het origineel vallen**: INVOER links
en UITVOER rechts, de centrale verwerkingseenheid en het geheugen met programma en
data samen in een kader met de systeembus ertussen, OPSLAG eronder, en elke pijl in
twee richtingen. Palet en lettertype zijn die van de SVG's van Labo Partitioneren
en van hoofdstuk 3, op wit. Ze is in Edge gerenderd voor ze vertrouwd werd, en dat
was nodig: de pijlpunten aan de beginkant van elke pijl wezen de verkeerde kant op
tot er een tweede marker met `orient="auto-start-reverse"` bij kwam. In het bestand
zag dat er niet fout uit.

**Het origineel `img/syllabus-05-de-von-neumann-architectuur-01.png` is geschrapt**,
want niets verwijst er nog naar en regel 1 van de contentcheck valt anders over een
ongebruikte afbeelding. Een herimport zet het terug.

**Wat het schema toont en de kernpunten niet noemen, is de opslag.** Het tweede
kernpunt somt invoer, centrale verwerkingseenheid, tijdelijk werkgeheugen en
uitvoer op, en de figuur heeft daar OPSLAG onder hangen. De bijgeschreven alinea
hierboven vult dat gat in de tekst; het kernpunt zelf is niet aangeraakt.

### De twee afbeeldingen

**De tweede zweeft**, `syllabus-05-de-von-neumann-architectuur-02.jpeg` in 5.2, met
`wrapSquare` verankerd. De alinea ernaast blijft dus lopende tekst en de figuur
krijgt geen bijschrift uit de Word; `IMPORT.md` meldt het. Het is een schermafdruk
van een Windows-bureaublad met twee vensters van Parallels Desktop erop, in het ene
Windows XP en in het andere Fedora 11, met allebei de virtuele machines in de
taakbalk onderaan. **Ze is opengedaan en uitvergroot**: de uitsnede loopt tot en met
de taakbalk en er staat geen watermerk op, niet linksonder en niet rechtsonder. Ze
blijft op de 87.0mm van de Word staan en haalt daarmee 190 dpi. Het `alt` is met de
hand geschreven en een herimport gooit het weg.

### Hoofdstuk 4 en dit hoofdstuk dekken elkaar over de instructieset

**Hoofdstuk 4 blijft ongewijzigd.** In 4.1 staat een daar bijgeschreven alinea over
de instructieset, en 5.2 behandelt datzelfde in het lang. Dat blijft zo: hoofdstuk
4 voert de term in omdat zijn eigen vraag 2 erop steunt, en zonder die alinea duwt
de zin "Het type processor bepaalt ook onmiddellijk welke applicaties kunnen
gedraaid worden", vlak na Core 3, 5 en 7, naar de verkeerde mogelijkheid.

Nagekeken op tegenspraak, en er is er geen. 4.1 zegt dat x86 en x64 dezelfde
instructieset zijn en dat een programma voor x64 niet op ARM start; 5.2 zegt dat
x86 de 32 bit voorganger van x64 is en dat software voor ARM niet op x86 of x64
draait. Het enige dat 5.2 erbij zegt is emulatie, en 4.1 spreekt dat niet tegen:
daar staat wat je nodig hebt om een programma te draaien, en hier hoe je eronderuit
kan tegen een prijs.

**5.2 raakt ook aan hoofdstuk 8, Virtual machines en containers**, dat nog niet
ingevoerd is. Er staat geen verwijzing naar, en die hoort er ook niet te staan
zolang het er niet is.

### Wat er in de tekst opviel, en op 7 september 2026 rechtgetrokken is

De tekst gaat er in principe letterlijk in, dus dit staat hier met wat er beslist
is. **Deze vier correcties staan alleen in de HTML en een herimport draait ze
terug.**

- **"Focus op ze weinig mogelijk communicatie met het RAM geheugen"** in
  mogelijkheid c van vraag 4 van Test jezelf is **"zo weinig mogelijk"** geworden.
  De mogelijkheid is fout, dus de student valt er niet over, maar ze staat wel
  gedrukt.
- **"De eigenschappen bij dit type processoren is dat ze ..."** in 5.2 is **zijn
  dat ze**: een meervoudig onderwerp bij een enkelvoudig werkwoord.
- **"die compatibel zijn met een ARM besturingssystemen"** in 5.2 is **een ARM
  besturingssysteem**: een lidwoord bij een meervoud.
- **"Bij dit laatste moeten  we"** in 5.2 droeg een harde spatie en daarachter nog
  een gewone. De harde spatie blijft staan, want die komt zo uit de Word; de
  tweede is weg.

### Wat er in de tekst opviel, en niet aangeraakt is

- **"Waarschijnlijk verwacht je dat ARM processoren 'recenter' zijn"**: de hoge
  komma's zijn in de Word gewone apostrofs en zijn dat hier gebleven. Dat is opmaak
  en geen tekst, net als de drie punten aan het eind van 5.2, die in de Word het
  beletselteken zijn.
- **"Een x64 Core 7 processor" in vraag 4 blijft staan.** Beslist op 7 september
  2026: zo noemt Intel die processoren sinds eind 2023, en zo staat het hier en
  twee keer in hoofdstuk 4.
- **Studievraag 1 vooraan is een imperatief en draagt al een punt** ("Bespreek de
  functionele onderdelen van een computer aan de hand van een schema."). De regel
  uit hoofdstuk 4 had hier dus niets te doen; de vier andere studievragen zijn echte
  vragen en houden hun vraagteken.
- **Het tweede kernpunt noemt de opslag niet**, terwijl de figuur van 5.1 ze wel
  heeft en vraag 2 ze mee laat natekenen. Beslist op 7 september 2026: het
  kernpunt blijft letterlijk wat de Word zegt. De bijgeschreven bottleneck-alinea
  hierboven noemt de opslag nu in woorden, en dat volstaat.

## Hoofdstuk 6, Bestandssystemen

**De sectie Studievragen achteraan heet hier Test jezelf**, zoals in hoofdstuk 1,
3, 4 en 5. Het kader Studievragen vooraan houdt zijn eigen naam en staat samen met
de Kernpunten op `Overzicht.html`. De pagina heet `TestJezelf.html`; de importer
schreef `Studievragen.html`.

**Dit is veruit het grootste hoofdstuk tot nu toe**: dertien secties tegen zeven
bij hoofdstuk 3, acht afbeeldingen, en elf gedrukte bladzijden. Geen enkele
Heading 3, dus elke pagina draagt alleen haar eigen h1.

### De dertien secties blijven dertien pagina's

Verschillende secties zijn heel kort. 6.8 Fragmentatie bij een solid state drive
is een enkele zin, 6.9 Defragmentatie twee alinea's, 6.6 Fragmentatie bij de
klassieke harde schijf twee. Ze zijn niet gegroepeerd, en dat is een keuze.

De reden is de nummering. `export-syllabus.py` leidt het sectienummer af uit de
plaats in `reference.js`, dus twee secties samennemen laat de gedrukte 6.8 iets
anders betekenen dan de 6.8 van de Word, en de Word blijft de herkomst waar een
herimport tegenaan gelegd wordt. De prijs is klein: `syllabus.css` legt geen
bladovergang op een sectie, alleen op een hoofdstukopening, op Test jezelf en op
Oplossingen. Twaalf korte secties leveren dus geen twaalf halflege bladzijden op,
en dat is nagekeken in de gedrukte PDF.

### Het grote gat: MBR, UEFI en primary / logical / extended stonden alleen in de kaders

Nagekeken in de lopende tekst van dit hoofdstuk: de woorden MBR, GPT, primary,
logical en extended kwamen er geen enkele keer in voor. Ze stonden wel in
kernpunt 3 ("In het MBR partitieschema onderscheiden we primary, logical en
extended partities. In het UEFI partitieschema is dat onderscheid er niet"), in
studievraag 3 (waar de afkortingen MBR en UEFI voor staan) en in studievraag 4
(kies je MBR of UEFI, geef minstens 2 redenen).

Dat is het gat van de wet van Moore in hoofdstuk 1 en van de instructieset in
hoofdstuk 4, en het is groter dan allebei: drie kaderregels steunen op een begrip
dat het hoofdstuk nergens invoert. Hoofdstuk 3 legt MBR en UEFI wel uit, maar niet
als partitieschema, en het noemt GPT nergens; dat gat staat bij hoofdstuk 3
hierboven al genoteerd.

**Er zijn dus twee alinea's bijgeschreven in 6.2 Partitioneren, en een herimport
gooit ze weg.** Ze staan achter "Op een opslagmedium moet er altijd minstens 1
partitie aanwezig zijn":

> Hoe die partities op het opslagmedium bijgehouden worden, ligt vast in het
> partitieschema. Er zijn er twee. Het oudste heet MBR, naar het master boot
> record waarin de tabel staat: die tabel heeft vier plaatsen en beschrijft
> schijven tot 2 TB. Het nieuwere heet GPT, het schema dat bij UEFI hoort, met
> plaats voor 128 partities en zonder die grens van 2 TB.
>
> Het MBR schema kent daarbij drie soorten partities. Een primaire partitie neemt
> een van de vier tabelplaatsen in en draagt een bestandssysteem. Wil je er meer
> dan vier, dan geef je een van die plaatsen aan een extended partitie: die draagt
> zelf geen bestandssysteem maar dient als houder waarin je zoveel logische
> partities aanmaakt als je nodig hebt. In het GPT schema bestaat dat onderscheid
> niet, want daar zijn de 128 plaatsen aan elkaar gelijk.

Twee keuzes daarin. **De eerste alinea noemt GPT bij naam**, terwijl het kernpunt
het schema UEFI noemt; ze zegt daarom uitdrukkelijk dat GPT het schema is dat bij
UEFI hoort, zodat het kader en de tekst op elkaar aansluiten. **Het kernpunt zelf
is niet aangeraakt**, zoals bij hoofdstuk 5: een kader blijft letterlijk wat de
Word zegt. **En de twee redenen van studievraag 4 staan er nu**, de vier
tabelplaatsen en de grens van 2 TB; wat hoofdstuk 3 daarnaast over UEFI zegt komt
daar nog bij.

**Een derde stuk is bijgeschreven onderaan 6.2, voor vraag 5 van Test jezelf.**
Die vraagt of je twee besturingssystemen op dezelfde partitie kan installeren, en
het antwoord Nee volgde alleen indirect uit "een tweede reden om partities aan te
maken is als men van plan is om meerdere besturingssystemen te installeren". Die
zin draagt nu: "Elk besturingssysteem heeft daarvoor zijn eigen partitie nodig:
het formatteert die partitie in zijn eigen bestandssysteem en legt er zijn eigen
mappenstructuur op aan. Twee besturingssystemen op dezelfde partitie zouden
elkaars bestanden dus overschrijven."

### Het hoofdstuk sprak zichzelf tegen over wat wat bepaalt

6.3 Formatteren zei: "Het type bestandssysteem (FAT32, NTFS en EXT4) waarin je een
partitie formatteert is bepalend voor het type besturingssysteem dat
geinstalleerd wordt, de maximale schijfgrootte, de maximale partitiegrootte en de
maximale bestandsgrootte." Kernpunt 5 zei: "Het type besturingssysteem bepaalt het
type bestandssysteem. Windows gebruikt NTFS en Linux EXT4." Die twee wijzen de
tegenovergestelde kant op.

**Het kernpunt heeft gelijk, en 6.3 is omgedraaid.** Beslist op 7 september 2026.
De rest van het hoofdstuk kiest namelijk dezelfde kant als het kernpunt: 6.10,
6.11 en 6.12 sluiten elk af met een regel "Type besturingssysteem: Windows /
Linux / ...", "Windows", "Linux", dus het bestandssysteem hoort bij een
besturingssysteem en niet omgekeerd. `Labo/Partitioneren/Theorie/Bestandssystemen.html`
zegt het ook zo ("Het besturingssysteem dat op de partitie komt, bepaalt de keuze
het sterkst"). De zin luidt nu:

> Het type besturingssysteem dat geinstalleerd wordt is bepalend voor het type
> bestandssysteem (FAT32, NTFS of EXT4) waarin je een partitie formatteert. Dat
> bestandssysteem bepaalt op zijn beurt de maximale schijfgrootte, de maximale
> partitiegrootte en de maximale bestandsgrootte.

**Er valt niets weg**: de drie grenzen die de Word noemt staan er nog, en ze hangen
nu aan het bestandssysteem in plaats van in een opsomming waarvan het eerste lid de
andere kant op wees. Het is een woordcorrectie, dus ze staat alleen in de HTML en
een herimport draait ze terug.

### De zeven vragen van Test jezelf, en de vier die een probleem hadden

| Vraag | Antwoord | Waarop het steunt |
|---|---|---|
| 1 Grootteorde van een nieuwe SSD | a, MB | omgekeerd, zie hieronder |
| 2 Wat je eerst doet met een nieuwe schijf | a, partitioneren | 6.2, "Een harde schijf moeten we, voor we ze kunnen gebruiken, partitioneren", en 6.3, "partitioneren is niet voldoende voor het besturingssysteem" |
| 3 Waar het bestandssysteem invloed op heeft | c, zowel bestands- als partitiegrootte | 6.3, "bepalend zal zijn voor de grootte van de partitie en de grootte van de bestanden" |
| 4 C: en D: in Windows Verkenner | a, je weet zeker dat je twee partities hebt | 6.2, een partitie is wat het besturingssysteem als een aparte schijf aanbiedt; twee stationsletters kunnen op een of op twee schijven staan |
| 5 Twee besturingssystemen op dezelfde partitie | c, nee | de alinea die hierboven in 6.2 bijgeschreven is |
| 6 Bestandssysteem voor Windows | a, NTFS | 6.11, "In een Windows omgeving is het meest gebruikte bestandssysteem NTFS" |
| 7 Bestandssysteem voor Linux | b, EXT4 | 6.12, "meer bepaald in Linux besturingssystemen ... het standaard bestandssysteem voor de meeste distributies sinds 2009" |

MACFS in vraag 6 en 7 is een verzonnen naam, zoals AUTOCAT in hoofdstuk 4. Alle
zeven de vragen zijn meerkeuze gebleven; dit hoofdstuk heeft dus geen enkele open
vraag en geen enkele `<div class="oplossing">`.

**Vraag 1 is omgekeerd, want zowel GB als TB is vandaag verdedigbaar.** Ze luidde
"Als je een nieuwe SSD harde schijf koopt dan is deze in grootteorde: MB / GB /
TB", en daar zijn er twee van de drie juist. Dat is het geval van vraag 6 van
hoofdstuk 3, en de uitkomst is dezelfde: de vraagzin is omgekeerd naar "Als je
vandaag een nieuwe SSD harde schijf koopt dan is deze zeker NIET in grootteorde",
en de drie mogelijkheden staan er woord voor woord nog. De vraag blijft meerkeuze,
en het antwoord is nu MB. Het woord **vandaag** is erbij gekomen, want een
grootteorde verschuift en zonder dat woord veroudert de vraag stil.

**Vraag 2 ging van twee mogelijkheden naar vier**, want met alleen Partitioneren
en Formatteren is de gokkans bij giscorrectie een op twee. Dat is het geval van
vraag 5 van hoofdstuk 5, en de twee afleiders komen ook hier uit het hoofdstuk
zelf: **de clustergrootte instellen** is wat je volgens 6.4 bij het formatteren
opgeeft, en **defragmenteren** is 6.9. Allebei zijn het echte handelingen aan een
schijf, en allebei komen ze na het partitioneren. **Ze staan niet in de Word** en
een herimport gooit ze weg; het juiste antwoord is niet veranderd.

**Vraag 4 stond in het meervoud terwijl er maar een bewering waar is.** "Welke
beweringen zijn WAAR?" is "Welke bewering is WAAR?" geworden. Dat is geen
inhoudelijke wijziging: van de drie mogelijkheden is alleen "je weet zeker dat je
twee partities hebt" juist, want twee stationsletters kunnen even goed op een als
op twee schijven staan en zeggen niets over een tweede besturingssysteem. In
dezelfde zin is **"ziet je" "zie je"** geworden.

**Vraag 5 is blijven staan zoals ze was**, want het gat waar ze op steunde is met
de bijgeschreven alinea in 6.2 gedicht. Omkeren of open maken was hier dus niet
nodig; de vraag toetst nu iets wat de tekst zegt.

### De clustertabel stond als lopende tekst met pijpen

In 6.4 Clusters staan zes gewone alinea's van de vorm "Adres 0 | Sector 0" en
"Adres 0 | Sector 0, Sector 1, ... Sector 7". Nagekeken in `word/document.xml`:
dat zijn echte pijptekens in gewone alinea's, geen tabel en geen tab. De importer
maakte daar zes losse regels van.

Dat is het geval van 2.1 Hardware herkennen en van het invulblad van vraag 5 van
hoofdstuk 4: herken je een tabel, maak er dan een tabel van voor je verder gaat.
Het zijn er twee geworden, een zonder en een met clusters, allebei met de kolommen
**Adres** en **Sectoren**. De regel "..." uit de Word is de derde rij van de eerste
tabel geworden, in allebei de kolommen.

**De vorm is hier gekozen en niet gelezen.** De Word geeft geen enkel signaal dat
dit een tabel is; wat er staat is een pijpteken op een plaats waar een kolomgrens
hoort. De kopregel Adres / Sectoren staat evenmin in de Word en is hier
bijgeschreven, want een tabel zonder kopregel laat de lezer raden wat de tweede
kolom is.

### De vergelijkingstabel van 6.1 kreeg een kopregel

De importer meldde in `IMPORT.md` dat de tabel "Mechanische harde schijf 3.5" geen
kopregel kreeg omdat de Word geen enkel signaal geeft, en zette er een
`data-geraden` op. Nagekeken en beslist: de eerste rij van die tabel is wel degelijk
een kopregel. Ze bevat drie keer twee regels tekst die de kolom benoemen (soort
schijf, en vormfactor met aansluiting), en de tweede rij bevat de foto die daarbij
hoort. Die rij staat nu in een `<thead class="table-header-custom">` met `<th>`, en
het `data-geraden` is weg.

### De vier hertekende afbeeldingen, en de vier die blijven staan

Alle acht zijn opengedaan voor er iets over geschreven werd. **Vier blijven
staan** en kregen een met de hand geschreven `alt`, dat een herimport weggooit:

- **image44, 45 en 46** (`syllabus-06-bestandssystemen-01.jpeg`, `-02.jpeg`,
  `-03.png`) zijn de drie cellen van de vergelijkingstabel van 6.1: een
  opengewerkte mechanische schijf van 3.5 inch, een SSD van 2.5 inch aan SATA en
  een SSD van 1.8 inch in M.2. Geen watermerk, alle drie leesbaar op de 46.4, 41.9
  en 36.8mm van de Word. **CLAUDE.md noemde image46 bij de onbruikbare
  afbeeldingen**; dat gold voor het labo en niet voor de syllabus, en die zin is
  rechtgezet.
- **image47** (`-04.png`, 160.0 bij 102.8mm) is Schijfbeheer met System Reserved,
  C: en DATA. Die staat ook als `img/partitioneren-schijfbeheer-windows.png` in de
  repo, en dat is met opzet: de twee tracks zijn onafhankelijk en een eigen kopie
  per track is de afspraak. Wat opvalt is dat de tekst het programma
  'Schijfbeheer' noemt en dat de schermafdruk het Engelse Disk Management toont;
  de tekst zegt er zelf "(Engels: 'Disk Management')" bij, dus dat klopt en is niet
  aangeraakt.

**Vier zijn hertekend**, en ze staan alle vier op 160.0mm. Palet en lettertype zijn
die van de SVG's van Labo Partitioneren en van hoofdstuk 3, op wit, en alle vier
zijn ze in Edge gerenderd voor ze vertrouwd werden. De originelen zijn geschrapt,
want niets verwijst er nog naar en regel 1 van de contentcheck valt over een
ongebruikte afbeelding; een herimport zet ze terug.

- **image51 is `img/syllabus-06-journaal.svg` geworden, en dat was het
  dringendste.** Het origineel is een schermafdruk van een YouTube-speler, met
  titelbalk "Journaling", afspeelknop, `0:00 / 2:20`, de knop MEER VIDEO'S, het
  YouTube-logo, een HD-badge en de penpunt van de spreker in beeld. Erger dan het
  chroom is wat ze tekent: een **Unified Buffer Cache** in het Main Memory, en de
  vier alinea's eronder gaan over het journaal op de schijf. De hertekening houdt
  wat het origineel wel heeft (CPU, cache, bus, Main Memory, de schijf als
  cilinder), zet in de plaats van de buffer cache het journaal op de schijf, en
  tekent de twee stappen die de tekst beschrijft met een pijl 1 en een pijl 2. De
  waarschuwing over de stroomuitval staat er in het rood onder, zoals in
  `partitioneren-journaal.svg`. **Het werkgeheugen is het enige groene blok**,
  want de tekst eronder begint met "In het groen zie je het Main Memory ofwel RAM
  geheugen", en het blok draagt daarom ook letterlijk dat opschrift. Wat wegvalt is
  de Unified Buffer Cache en het vak Used ernaast; die staan in geen enkele zin van
  dit hoofdstuk.
- **image49 is `img/syllabus-06-first-best-worst-fit.svg` geworden.** Het origineel
  is een whiteboardschets waarvan de pijlen van de kandidaat-blokken naar het
  bestand lopen in plaats van omgekeerd, en waarvan FF, WF en BF boven de gaten
  tussen de blokken staan in plaats van boven het blok dat ze aanwijzen. Ze is
  bovendien 663 pixels breed, wat op 160.0mm neerkomt op 105 dpi. De hertekening
  laat niets vallen: het bestand van 150 MB, de drie algoritmes en hun drie
  omschrijvingen staan er nog, die laatste op drie regels onderaan. **De
  afkortingen FF, BF en WF zijn er op 7 september 2026 uit**, en de namen staan
  nu voluit boven de blokken: geen enkele zin van dit hoofdstuk gebruikt die
  afkortingen, de lopende tekst schrijft zelf First Fit, Best Fit en Worst Fit.
  Daarmee is de tekening ook woord voor woord dezelfde geworden als de
  labokopie. **Wat erbij
  komt zijn de maten van de vrije blokken** (100, 200, 160 en 400 MB), want zonder
  die maten kan de lezer niet nagaan waarom elk algoritme kiest wat het kiest. Het
  bestand staat getekend in het blok dat elk algoritme neemt, met eronder in het
  rood wat er overblijft: 50, 10 en 250 MB. Dat zijn dezelfde maten als
  `img/partitioneren-first-best-worst-fit.svg`, met opzet, zodat de twee tracks
  geen verschillende getallen geven.
- **image48 is `img/syllabus-06-fragmentatie.svg` geworden.** Het origineel zweeft
  (`wrapSquare`), dus de alinea ernaast is lopende tekst gebleven en de figuur
  kreeg geen bijschrift uit de Word; `IMPORT.md` meldt het. Wat het tekent zijn
  drie rijen ongelabelde gekleurde balken, en op 79.0mm haalt het 120 dpi. De
  hertekening zet bij elke rij wat er gebeurt en bij elke balk welk bestand het is.
  **De vier kleuren zijn die van de brontekst en niet die van OrionCSS**: 6.5
  schrijft "bestand 1 = rood, bestand 2 = blauw en bestand 3 = groen" en "bestand 4
  = zwart", dus het palet zou de zin ernaast onwaar maken. De vrije ruimte en de
  rode annotatie eronder komen wel uit het palet. **De drie kleuren zijn op 7
  september 2026 wel gedempt** naar `#9e2f26`, `#2a4d7c` en `#3f7238`: de
  verzadigde `#cc0000`, `#2b3fbf` en `#2e9e3e` waren de enige drie kleuren in de
  hele `img/` die naast het palet van OrionCSS schreeuwden, en een donkerder rood
  is nog altijd rood. De hue blijft dus de hue van de brontekst en alleen de
  verzadiging is bijgedraaid. **Het woord gat is in diezelfde ronde weg**: het
  middenblok heet nu `vrij` net als het blok achteraan, wat ook waar is en
  meteen laat zien dat de vrije ruimte in twee stukken uiteenvalt. **De figuur staat nu onder de
  drie alinea's** in plaats van erboven, want ze toont wat die alinea's stap voor
  stap beschrijven; de importer zette haar bovenaan omdat ze in de Word zweeft.
- **image50 is `img/syllabus-06-defragmentatie.svg` geworden**, en dat was het
  minst dringende geval. Het origineel is geen schermafdruk met chroom: het is een
  schone voor-en-na-tekening met een legende eronder en zonder watermerk. Wat er
  wel mis mee is, is dat ze volledig Engels staat in een Nederlandse tekst
  (fragmented, defragmented, allocated space, MFT, free space, being processed,
  SundayParty.JPEG) en dat 790 pixels op 160.0mm neerkomt op 125 dpi. Dat is
  dezelfde afweging als bij de MBR van hoofdstuk 3, en dezelfde uitkomst. De
  hertekening houdt de vorm van het origineel: dezelfde schijf twee keer als een
  rooster van clusters, een bestand dat je in allebei de roosters terugvindt, en
  een legende. **Twee onderdelen van de legende zijn niet overgenomen**, en dat is
  een bewuste keuze: **MFT** is een structuur van NTFS die dit hoofdstuk nergens
  invoert, en **being processed** is een toestand van het Windows-programma terwijl
  het draait en niet iets over de schijf. Het bestand heet `vakantie.jpg` in plaats
  van SundayParty.JPEG, wat geen enkel gegeven kost.

### Waar dit hoofdstuk en Labo Partitioneren naast elkaar staan

Dit is de zwaarste overlap met een labo tot nu toe.
`Labo/Partitioneren/Theorie/Bestandssystemen.html` en `Partitietabellen.html` zijn
uit dit hoofdstuk geschreven, en `Spiekblad.html` draagt dezelfde grenzen.
Patroon 17: de twee tracks zeggen hetzelfde twee keer en er linkt niets tussen.
**Er is aan geen enkele labopagina iets veranderd.** Nagekeken op tegenspraak, en
dit kwam eruit.

- **De getallen komen overeen.** FAT32 2 TB en 4 GB, NTFS 256 TB en 2 TB met MBR,
  EXT 1 EiB en 2 TB met MBR en 16 TB per bestand, een sector van 512 bytes, een
  cluster van standaard 4096 bytes, een adressering van 8 bits die op 131 072 bytes
  uitkomt, acht sectoren onder een adres, en een bestand van 412 bytes in een
  cluster van 64 kB. Alle negen staan in allebei de tracks gelijk.
- **Het spiekblad heeft exFAT en linux-swap erbij**, en de syllabus noemt die twee
  nergens. Dat is een gat en geen tegenspraak: het labo werkt in GParted, waar de
  keuzelijst die twee ook aanbiedt.
- **Het labo zegt van FAT32 uitdrukkelijk dat het geen journaal heeft, de syllabus
  niet.** 6.10 zwijgt over het journaal en 6.11 voert het pas in bij NTFS. Ook een
  gat en geen tegenspraak.
- **De maximale bestandsgrootte van NTFS staat alleen in de syllabus**
  ("Theoretisch: 16 EiB, Praktisch 256 TB"); het spiekblad zet er 256 TB. Hetzelfde
  getal, alleen zonder de theoretische grens ernaast.
- **Over first, best en worst fit zeggen de twee precies hetzelfde**, tot en met de
  reden waarom uitgerekend worst fit het minst fragmenteert en waarom defragmenteren
  op ext daardoor in de praktijk overbodig is.
- **Het MBR-schema staat nu in allebei de tracks**, sinds de alinea's die hierboven
  in 6.2 bijgeschreven zijn. Ze zeggen hetzelfde als
  `Labo/Partitioneren/Theorie/Partitietabellen.html`, in het kort waar het labo het
  in het lang doet: vier tabelplaatsen, 2 TB, primair tegen extended tegen logisch,
  en 128 plaatsen bij GPT. Er linkt niets tussen.
- **De syllabus schrijft een bestandssysteem in kapitalen** (FAT32, NTFS, EXT4),
  het labo schrijft ext4 in kleine letters zoals Linux zelf. Allebei zijn ze binnen
  hun eigen track consequent, en geen van beide is aangeraakt.

### Wat er in de tekst opviel, en op 7 september 2026 rechtgetrokken is

De tekst gaat er in principe letterlijk in, dus dit staat hier met wat er beslist
is. **Deze correcties staan alleen in de HTML en een herimport draait ze terug.**

- **"Geef minstens drie voorbeelden van een bestandssysteem?"** in het kader
  Studievragen is een imperatief met een vraagteken en draagt nu een punt. De regel
  staat bij hoofdstuk 4. "Geef minstens 2 redenen." en "Noem minstens drie factoren
  op." droegen er al een; de zes echte vragen in dat kader houden hun vraagteken.
- **"ziet je"** in vraag 4 van Test jezelf is **"zie je"**, en **"Welke beweringen
  zijn WAAR?"** is **"Welke bewering is WAAR?"**. Zie hierboven bij die vraag.
- **De zin over wat wat bepaalt in 6.3** is omgedraaid. Zie hierboven.

### Wat er in de tekst opviel, en niet aangeraakt is

- **"Zoals je ziet kunnen we nu 8 keer meer sectoren kunnen adresseren"** in 6.4,
  met kunnen twee keer.
- **6.4 vraagt "Waarom dan geen clusters die 64, 128 of 1024 sectoren koppelen?" en
  rekent de alinea erna met "een clustergrootte van 64 kB".** Dat zijn sectoren
  tegen kilobytes: 64 sectoren van 512 bytes is 32 kB. De rekensom binnen die
  alinea klopt wel op zichzelf, want een bestand van 412 bytes in een cluster van
  64 kB laat inderdaad zo'n 63 kB liggen. Alleen de sprong van de vraagzin naar de
  alinea erna klopt niet.
- **"Vooral USB sticks en SD kaartjes worden nog vaak geformatteerd in dit
  bestandssysteem"** in 6.10 mist een punt op het eind.
- **"Per herpositionering is er dus een Seek Time en Rotational latency..."** in
  6.6 schrijft Seek Time met twee hoofdletters en Rotational latency met een; 6.9
  schrijft "(Seek Time + Rotational Latency)" met twee.
- **"Dit heeft te maken het algoritme dat wordt gebruikt"** in 6.6, waar "te maken
  met het algoritme" hoort te staan.
- **"En een derde reden is fragmentatie kan vermeden worden"** in 6.12, waar "is
  dat fragmentatie" hoort te staan.
- **"ext2" in 6.6 tegen "EXT4" in de kernpunten en in 6.12.** Binnen het hoofdstuk
  wisselt de schrijfwijze, en het is niet aangeraakt.
- **De hoge komma's rond partitie, Schijfbeheer en Disk Management** zijn in de
  Word gewone apostrofs en zijn dat hier gebleven. Dat is opmaak en geen tekst, net
  als de apostrof in "zo'n 63 kB" in 6.4.

## Hoofdstuk 7, Besturingssystemen

**Dit hoofdstuk heeft geen sectie Studievragen achteraan.** Er is hier dus geen
`TestJezelf.html` en er wordt achteraan het hoofdstuk geen sectie Oplossingen
gedrukt. Dat is het geval van hoofdstuk 2 en het tweede in zeven hoofdstukken.
Het kader Studievragen vooraan bestaat wel, met tien vragen, en het staat samen
met de Kernpunten op `Overzicht.html`. Of elk hoofdstuk er een hoort te krijgen,
wordt beslist na hoofdstuk 16 en in een keer, niet hier.

### Heading 4 draaide hier voor het eerst, en de tak klopt

Dit is het enige hoofdstuk van de hele Word met een Heading 4, en het zijn er
vijf: de vijf scheduling algoritmes onder 7.6 Procesbeheer. De importer rekent de
kop om met `min(max(niveau - kop_offset + 1, 2), 6)`, dus een Heading 3 wordt een
`h2` op de pagina en een Heading 4 een `h3`. Nagekeken in de uitvoer en dat is
precies wat er gebeurde.

`verplaats_koppen()` in `export-syllabus.py` schuift daar in de bundel nog een
niveau overheen, dus in de PDF is de rangorde:

| in de Word | op de pagina | in de PDF | grootte |
|---|---|---|---|
| Heading 2 | `h1` | `h2` | 13pt vet |
| Heading 3 | `h2` | `h3` | 11pt vet |
| Heading 4 | `h3` | `h4` | 10pt vet |

**Een Heading 4 is in de PDF dus even groot als de lopende tekst en verschilt er
alleen in vet en in de ruimte erboven.** Gemeten op bladzijde 65 en 66: de tekst
is 10pt Arial, de vijf algoritmekoppen zijn 10pt Arial-Bold. Dat leest, en op
bladzijde 66 zie je het verschil met "Prioriteit en realtime" op 11pt er meteen
boven staan, dus **`syllabus.css` is niet aangeraakt**. Wie het ooit toch wil
aanzetten: het is de regel `h4, h5, h6` in dat bestand, en die geldt dan voor elk
hoofdstuk, ook al is dit het enige met zo'n kop.

### Het gat: realtime en tijdskritisch stonden alleen in de kaders

Nagekeken in de lopende tekst van dit hoofdstuk: realtime, real time, real-time
en tijdskritisch komen er samen **nul** keer in voor. Ze staan alleen in kernpunt
5 en in studievraag 10 ("Waarom is het niet altijd een goed idee om een proces
realtime te laten uitvoeren?"). Het woord prioriteit komt wel zeven keer voor in
7.6 en starvation vijf keer, dus de helft van het mechanisme stond er al; wat
ontbrak was waarom je een proces realtime zet en wat het kost.

Dat is het gat van de wet van Moore in hoofdstuk 1, van de bottleneck in
hoofdstuk 5 en van het partitieschema in hoofdstuk 6, en de uitkomst is dezelfde.
Beslist op 7 september 2026: er komt tekst bij in plaats van dat de studievraag
onbeantwoord blijft.

**Dat werd een eigen sectie `Prioriteit en realtime` achteraan 7.6**, met vier
alinea's. Een `h2` op de pagina, dus in de PDF een `h3` naast Cooperative
multitasking en Preemptive multitasking, en niet een zesde algoritme onder
Preemptive multitasking, want het is er geen. Dit is de eerste bijgeschreven
tekst in de syllabus die een eigen kop krijgt in plaats van in een bestaande
alineareeks te schuiven; de reden is dat de vijf secties ervoor stuk voor stuk
een algoritme behandelen en een alinea erachter als deel van PMFQ zou lezen.

Wat er staat, in het kort: een tijdskritisch proces moet niet snel zijn maar op
tijd; je regelt dat met de prioriteit, in de Windows Task Manager tot en met de
klasse Realtime; een echte garantie geeft dat niet, want daarvoor bestaat er een
real time operating system, en dat is de term die **hoofdstuk 4** invoert bij
Embedded system; en een realtime proces dat de processor niet loslaat, laat al de
rest verhongeren, wat de starvation is die 7.6 al twee keer bij naam noemt.

**Deze vier alinea's staan alleen in de HTML en een herimport gooit ze weg.**

### Windows 10 is Windows 11 geworden, in dit hoofdstuk en in hoofdstuk 4

Het kader zei "Windows 10 IoT Enterprise Long Term Servicing Channel", de
studievragen 1, 2 en 3 zeiden alle drie Windows 10, en de lopende tekst van 7.1
zei een keer "Windows IoT Enterprise LTSC" zonder nummer en een keer "in principe
een exacte kopie van Windows 10 Enterprise". Windows 10 is sinds oktober 2025
buiten ondersteuning en er bestaat een Windows 11 IoT Enterprise LTSC.

Beslist op 7 september 2026 door de lector: **het wordt overal Windows 11.** Dat
is het geval van Core 7 in hoofdstuk 5 en van Windows Embedded Compact 7 in
hoofdstuk 4: een productnaam die veroudert, is een beslissing van de lector en
niet van de omzetting. Zes plaatsen in dit hoofdstuk:

- kernpunt 2, "Windows 11 IoT Enterprise Long Term Servicing Channel"
- studievraag 1 en 2, "versies van Windows 11" en "versie van Windows 11"
- studievraag 3, twee keer, "Windows 11 IoT Enterprise LTSC" en "Windows 11
  Enterprise"
- 7.1, "De versie die je vooral aantreft bij industriële PCs is Windows 11 IoT
  Enterprise LTSC"
- 7.1, "in principe een exacte kopie van Windows 11 Enterprise"

**Het kader is hier dus wel aangeraakt**, anders dan bij hoofdstuk 5 en 6. Het
verschil is dat het daar om een tegenspraak binnen de tekst ging, waar de
lopende tekst de plaats is om bij te draaien, en hier om een feit dat overal
hetzelfde hoort te staan: laat je het kader op 10 staan, dan drukt dezelfde
bladzijde twee verschillende versienummers.

**Hoofdstuk 4 is meegegaan**, want anders spreken de twee hoofdstukken elkaar
tegen over wat er op een industriële pc draait. Drie plaatsen, alle drie in
Windows 11 IoT Long Term Servicing Channel dan wel "de speciale variant van
Windows 11":

- `IndustrieleComputers.html`, twee keer in 4.1
- `EmbeddedSystem.html`, een keer in 4.2

De zin "Windows 7 Embedded" en "Windows 7 Compact / Embedded" ernaast is niet
aangeraakt: die is historisch en klopt.

**Wat hierbij niet gebeurd is**: er is geen versienummer aan de kop van 7.1
gehangen. Die heet nog altijd "Windows IoT Enterprise Long Term Servicing
Channel", zonder nummer, en dat is de naam van de reeks en niet van een versie.
De kop had in de Word wel **IOT** in kapitalen terwijl de alinea eronder IoT
schrijft; dat is nu overal IoT, dezelfde correctie die hoofdstuk 4 op 4.1 en 4.2
al gekregen heeft.

### Control panel pc bestaat niet, en is control cabinet pc geworden

7.1 sloot af met "Deze versie wordt vooral gebruikt bij control panel pc's en
panel pc's". Hoofdstuk 4 heeft twee secties die **Panel PCs** en **Control
cabinet PC** heten, en control panel pc is geen van beide. 4.4 zegt bovendien met
zoveel woorden dat een control cabinet PC de desktopvariant van een panel PC is,
en dat zijn precies de twee die hier naast elkaar gezet worden.

Beslist op 7 september 2026: het wordt **control cabinet pc's en panel pc's**.
Dat is patroon 20 van SCHRIJFSTIJL.md, waar de tekst al een naam voor het ding
heeft is dat het woord. Zonder die correctie leest een student die hoofdstuk 4
gelezen heeft drie namen voor twee dingen, en gaat hij een derde soort pc zoeken
die niet bestaat. De kapitalen van hoofdstuk 4 zijn niet overgenomen: 7.1
schrijft pc's in kleine letters en dat is binnen dit hoofdstuk consequent.

### De syllabus wijst naar een labo, en noemt het nu bij naam

7.4 Bestandsbeheer eindigde met "Ook in Linux kan je rechten toepassen op mappen
en bestanden. In één van de labo's staan we daar uitgebreid bij stil." Patroon 17
gaat over de andere richting, een labo dat op de theorietrack steunt, en deze zin
belooft iets zonder te zeggen waar.

Beslist op 7 september 2026: het labo wordt bij naam genoemd, **Linux
Geavanceerd**. Die modulenaam ligt vast in CLAUDE.md en dat labo draagt de
pagina's Rechten en GebruikersEnGroepen, dus de zin wijst naar iets dat bestaat
zodra het geschreven is. `Labo/LinuxGeavanceerd/` staat vandaag nog in
`_incoming/`.

**Er komt geen link bij, in geen geval.** De twee tracks zijn onafhankelijk, de
PDF is papier, en een naam in een zin is geen verwijzing waar iets van afhangt.

### De vier afbeeldingen, en de drie die hertekend zijn

Alle vier zijn opengedaan voor er iets over geschreven werd. **Een blijft staan:**

- **image52** (`syllabus-07-besturingssystemen-01.png`, 904 bij 519 pixels op
  160.0 bij 91.9mm, dus 143 dpi) zijn drie Windows-vensters na elkaar met groene
  pijlen ertussen: Video Properties op de tab Security, Permissions for Video, en
  Select Users or Groups. Volledig Engels, geen watermerk. Ze zit als enige ruim
  boven de dpi-grens van 98 die hoofdstuk 3 vastgelegd heeft, en ze is als enige
  een **schermafdruk van een echt venster**: dat hertekenen kan niet, want de zin
  erboven zegt "via een Wizard" en de student hoort te zien hoe die eruitziet. Het
  `alt` is met de hand geschreven en een herimport gooit het weg.

**Drie zijn hertekend**, alle drie schema's en alle drie onder de dpi-grens. Ze
staan op 160.0mm, dragen het palet van de SVG's van Labo Partitioneren en van
hoofdstuk 3 op wit, en ze zijn alle drie in Edge gerenderd voor ze vertrouwd
werden. De originelen zijn geschrapt, want niets verwijst er nog naar en regel 1
van de contentcheck valt over een ongebruikte afbeelding; een herimport zet ze
terug.

- **image53 is `img/syllabus-07-processtatussen.svg` geworden.** Het origineel is
  566 bij 346 pixels op 160.0mm, dus 90 dpi, en het tekent ready, running en
  blocked als witte pijlen op een donkerrood vlak. Het is het enige van de vier
  dat al Nederlands is, en de twee bijschriften "starten van een proces" en
  "beëindigen van een proces" staan er in de hertekening nog. Wat erbij komt zijn
  de **namen van de vier overgangen** (de scheduler kiest, CPU slice op, wacht op
  I/O, I/O klaar), want de vier alinea's eronder benoemen ze stuk voor stuk en het
  origineel laat de pijlen leeg. Wat er ook bij komt is de **overgang die niet
  bestaat**: 7.6 zegt "Merk op dat een proces niet rechtstreeks uit de blocked
  status naar de running status kan gaan", en het origineel toont dat door de pijl
  weg te laten. Ze staat er nu als een rode streepjespijl met een kruis erdoor en
  het woord "kan niet", zodat de claim van de alinea getekend staat in plaats van
  afwezig te zijn. Dat is dezelfde afweging als bij de maten van de vrije blokken
  in `syllabus-06-first-best-worst-fit.svg`. De ready-stapel is een stapel
  gebleven, want de tekst noemt haar een **ready queue**; running en blocked zijn
  enkele vakken, want die noemt de tekst een status.
- **image54 is `img/syllabus-07-cooperative-multitasking.svg` geworden**, en dat
  was het dringendste geval: 395 bij 296 pixels op 160.0mm is **63 dpi, de laagste
  resolutie in de hele Word tot nu toe**. Het origineel tekent drie lussen met de
  namen FRED, HARRY en JOE, met PAUSE op elke lus en de stappen 1, 2 en 3 ertussen,
  en het staat in het Engels ("CO-OPERATIVE MULTITASKING"). De hertekening houdt
  alles: drie lussen, drie overdrachten, genummerd 1, 2 en 3 in dezelfde volgorde.
  **De namen zijn Proces A, B en C geworden**, wat geen enkel gegeven kost, precies
  zoals `vakantie.jpg` in hoofdstuk 6 SundayParty.JPEG verving. **PAUSE is een
  punt met een legende geworden**: "Op dit punt geeft een proces de controle zelf
  af. Doet het dat niet, dan komt geen enkel ander proces aan de beurt." Die
  tweede zin is de starvation-alinea eronder, in de tekening. De pijlpunt boven op
  elke lus geeft de richting waarin een proces zijn eigen werk afdraait; hij stond
  eerst aan de zijkant van de lus en botste daar met de overdrachtpijlen, wat pas
  in de render te zien was.
- **image55 is `img/syllabus-07-preemptive-vs-cooperative.svg` geworden.** Het
  origineel is 473 bij 244 pixels op 160.0mm, dus 82 dpi, het staat in het Engels,
  en er staat een tikfout **in** de tekening: "Preempetive". De hertekening houdt
  de vorm van het origineel, twee rijen met een tijdlijn per proces, en zet de
  fout recht. **Windows 95 System Scheduler is process scheduler geworden**: dit
  hoofdstuk noemt Windows 95 nergens, en process scheduler is het woord dat 7.6
  wel gebruikt (patroon 20). **Thread 1 en Thread 2 zijn Proces 1 en Proces 2
  geworden**, om dezelfde reden: het woord thread komt in dit hoofdstuk niet voor.
  Wat erbij komt zijn de twee bijschriften die zeggen wat het verschil is: "de
  scheduler onderbreekt" in het rood bij de streepjeslijnen bovenaan, en "proces 1
  geeft zelf af" bij de enige onderbreking onderaan. Het rood is dezelfde
  `#c0392b` waarmee de andere figuren hier annoteren.

### De figuur van 10.1 is hertekend

**`img/syllabus-10-informatievoorstelling-01.png` is vervangen door
`img/syllabus-10-binair-betrouwbaar.svg`.** Beslist op 7 september 2026 door de lector.
Hierboven stond dat er geen reden was om image86 te hertekenen, en dat klopte tegen de toets
die hoofdstuk 3 en 9 hebben opgesteld: geen watermerk, Nederlandse tekst, en ruim boven de
dpi-grens. **Die toets zegt wanneer je moet hertekenen en niet wanneer het mag.** Wat hier
de doorslag geeft is dat de figuur de enige gescande grijstintentekening in dit hoofdstuk
is: ze staat er met de korrel van een fotokopie naast tekeningen die in het palet van de
syllabus getekend zijn.

**Er valt geen enkel gegeven weg.** De hertekening draagt dezelfde acht dingen als de scan:
de lijn van 5 V, de lijn van 0 V, de twee stippellijnen die het fout-gebied afbakenen, de
dubbele pijl met het opschrift Fout-gebied, de drie streepjeslijnen op de klokmomenten, de
kloktijd t met index c tussen de laatste twee, de bits 0, 1 en 0 eronder, en het signaal
zelf, dat laag blijft, steil klimt tot net onder 5 V en weer terugvalt. Dat het signaal
laag niet op 0 V ligt en hoog niet op 5 V, is uit de scan overgenomen en het is precies
wat de alinea's eronder beweren.

**Het palet is dat van de andere SVG's**: `#004d40` voor het signaal, `#e0e7e5` voor het
vlak, `#c0392b` voor de annotatie, `#222222` voor de assen en de bits, `#555555` voor de
stippellijnen en de spanningslabels.

**Een ding is er bijgekomen en het is opmaak en geen gegeven:** het fout-gebied is nu een
licht ingekleurd vlak in plaats van alleen twee stippellijnen met een pijl ertussen. De
stippellijnen en de pijl staan er nog, dus wie de scan ernaast legt, ziet dezelfde figuur.

**De spanningen van de drempels staan er met opzet niet bij.** De alinea eronder zegt dat
een laag maximaal 0.4 V is en een hoog minimum 2.4 V, en het lag voor de hand om die twee
getallen op de stippellijnen te zetten, want dan toont de figuur wat de alinea beweert. Op
schaal is 0.4 V van 5 V echter 8 procent: die stippellijn valt dan op anderhalve millimeter
van de lijn van 0 V en het signaal moet er nog tussen. Beslist op 7 september 2026: **de
figuur blijft schematisch**, net als de scan, en de getallen blijven in de lopende tekst
staan. Wie ze er toch bij wil, moet de figuur breder maken dan 87.0mm en de bladspiegel
opnieuw narekenen.

**De breedte blijft 87.0mm**, de maat uit de Word. De verhouding is 400 op 250 tegen 520 op
310 van de scan, dus de figuur is 54.4mm hoog in plaats van 51.9mm. Nagekeken in de
gedrukte PDF: 10.1 en 10.2 staan nog altijd samen op een bladzijde, en de inhoudstafel wijst
ze allebei naar dezelfde. De labels van 12px drukken op 2.6mm, dat is 7.4pt, en dat is de
maat die de SVG's van hoofdstuk 3, 6, 7 en 11 ook halen.

**De PNG is geschrapt**, want niets verwijst er nog naar en regel 1 van de contentcheck valt
over een ongebruikte afbeelding. Dat is het geval van
`img/syllabus-10-informatievoorstelling-03.png` hierboven. **Een herimport zet ze terug** en
schrijft de `<img>` van deze pagina weer naar de PNG; dan faalt regel 1 tot ze opnieuw weg
is. De `alt` van de figuur is met de hand geschreven en overleeft een herimport evenmin.

### De bladspiegel van dit hoofdstuk

Acht bladzijden, 59 tot en met 66. Nagerekend na de redactionele ronde en niet
alleen na de import, want de vier bijgeschreven alinea's over realtime kwamen er
na de import bij.

**De vier figuren staan alle vier op de 160.0mm van de Word en geen enkele draagt
een bijschrift**, dus de grens van 240mm uit hoofdstuk 3 speelt hier niet: de
hoogste is de cooperative multitasking op 118.9mm. Er is dus **aan geen enkele
figuurbreedte gedraaid**, wat dit het eerste hoofdstuk met figuren maakt waar dat
niet nodig was.

**Twee figuren volgen hun aankondiging over een bladovergang, en daar is geen
breedte voor te vinden.** 7.4 eindigt onderaan bladzijde 61 op "In Windows kan je
de rechten makkelijk aanpassen via een Wizard:" en de schermafdruk staat bovenaan
62; de eerste alinea van Preemptive multitasking eindigt onderaan 64 op "In de
figuur kan je duidelijk het onderscheid zien" en die figuur staat bovenaan 65. In
allebei de gevallen blijft er onderaan de bladzijde ongeveer 40mm respectievelijk
18mm over en heeft de figuur er 92mm respectievelijk 75mm nodig. Smaller maken
lost dat pas op bij een breedte waarop de schermafdruk onleesbaar wordt. Het is
dus zo gelaten: de zin eindigt op een dubbele punt en de figuur is het eerste dat
de lezer op de volgende bladzijde ziet.

### Waar dit hoofdstuk en de rest van dit vak naast elkaar staan

Geen enkel labo over dit onderwerp is geschreven: Linux Basis, Linux Geavanceerd
en Embedded Systems staan nog in `_incoming/`. Twee dingen raken wel aan wat er al
staat, en ze zijn naast elkaar gelegd. **Er is aan geen enkele labopagina iets
veranderd** (patroon 17).

- **Swapping tegen linux-swap.** 7.5 legt swapping uit als het mechanisme: het
  besturingssysteem haalt programma's die actief zijn maar weinig gebruikt worden
  uit het werkgeheugen en zet hun status op de schijf.
  `Labo/Partitioneren/Theorie/Bestandssystemen.html` en `Spiekblad.html` leggen de
  plaats uit: een linux-swap-partitie bevat geen bestanden en is de schijfruimte
  waar Linux gegevens neerzet waar geen plaats meer voor is in het werkgeheugen,
  en Windows doet hetzelfde in `pagefile.sys`. **Geen tegenspraak, wel twee
  helften van hetzelfde**: de syllabus noemt de partitie en het bestand niet, het
  labo noemt het woord swapping niet. Dat is een gat en dat mag: de twee tracks
  zijn onafhankelijk.
- **Fragmentatie betekent hier iets anders dan in hoofdstuk 6.** 7.5 zegt dat het
  besturingssysteem gegevens die bij elkaar horen op aanliggende adressen in het
  **werkgeheugen** zet, "om fragmentatie te vermijden en zo optimaal gebruik te
  kunnen maken van de prefetch buffer". Hoofdstuk 6 en
  `Labo/Partitioneren/Theorie/Bestandssystemen.html` gebruiken hetzelfde woord voor
  een bestand dat in stukken over de **schijf** verspreid staat. Dat is geen
  tegenspraak maar wel hetzelfde woord voor twee dingen, en 7.5 voert het niet in:
  de student die hoofdstuk 6 gelezen heeft, leest hier zijn schijffragmentatie in
  een alinea over RAM. Er is niets aan veranderd, want het is de tekst van de
  Word; wie het ooit rechttrekt, doet dat met een woord als versnippering of met
  de toevoeging "in het werkgeheugen".
- **Prefetch buffer wordt nergens uitgelegd.** Niet hier, en niet in de zes
  hoofdstukken ervoor. Dat is patroon 20, en het staat in dezelfde zin als de
  fragmentatie hierboven.

### Wat er in de tekst opviel, en op 7 september 2026 rechtgetrokken is

De tekst gaat er in principe letterlijk in, dus dit staat hier met wat er beslist
is. **Al deze correcties staan alleen in de HTML en een herimport draait ze
terug.** Wat hierboven al per beslissing beschreven staat (Windows 11, control
cabinet pc, het labo bij naam), staat hier niet nog eens.

- **Studievraag 8 vooraan eindigde op een kommapunt**, "Geef de naam van vier
  proces scheduling algoritmes en verduidelijk kort aan de hand van een schets;".
  Dat is een imperatief, dus ze draagt nu een punt; de regel staat bij hoofdstuk 4
  en dit is het vierde hoofdstuk dat ze tegenkomt. De negen andere studievragen
  zijn echte vragen en houden hun vraagteken.
- **De kop van 7.1 schreef IOT in kapitalen**, "Windows IOT Enterprise Long Term
  Servicing Channel", terwijl de alinea eronder IoT schrijft. Dat is nu IoT,
  dezelfde correctie die hoofdstuk 4 op 4.1 en 4.2 al kreeg.
- **"Processen moeten immers gepauzeerd en  terug gestart worden"** in Round robin
  droeg een harde spatie en daarachter nog een gewone. De harde spatie blijft
  staan, want die komt zo uit de Word; de tweede is weg. Dat is precies het geval
  van "Bij dit laatste moeten  we" in hoofdstuk 5.

### Wat er in de tekst opviel, en niet aangeraakt is

De tekst gaat er letterlijk in, dus dit staat hier en niet in de HTML.

**Vijf namen die hoofdstuk 4 al rechtgetrokken had, stonden hier in hun oude vorm,
en dat is op 7 september 2026 beslist.** 7.2 schreef Raspberry PI, CodeSys,
EtherCAT, ProfiNET en Modbus TCP, hoofdstuk 4 schreef Raspberry Pi, CODESYS,
ETHERCAT, PROFINET en MODBUS/TCP. Geen tikfout dus, maar een tegenspraak tussen
twee hoofdstukken die dezelfde ronde gemaakt hadden, omdat de vorm per hoofdstuk
gekozen was in plaats van voor de syllabus.

**De schrijfwijze van de eigenaar wint**, en niet de vorm van hoofdstuk 4 of die
van hoofdstuk 7. Een huisregel zou hier een smaakkeuze zijn; deze is na te rekenen
en ze werkt ook voor de volgende naam. Het wordt dus **Raspberry Pi, CODESYS,
EtherCAT, PROFINET en Modbus TCP**. Dat die reeks er wisselend uitziet is het punt:
CODESYS schrijft zichzelf in kapitalen en EtherCAT niet. In dit hoofdstuk raakt dat
een enkele zin, 7.2, met drie wijzigingen erin (Raspberry PI, CodeSys, ProfiNET, en
de PI verderop in diezelfde zin); EtherCAT en Modbus TCP stonden hier al goed.

**Hoofdstuk 4 is meegegaan, kader inbegrepen**, met vier plaatsen: het kernpunt over
industriele netwerkprotocollen, 4.1, 4.3 en een mogelijkheid van Test jezelf. Daar
werden ETHERCAT en MODBUS/TCP dus EtherCAT en Modbus TCP, en de losse MODBUS in Test
jezelf werd Modbus; PROFINET en CODESYS stonden er al goed. **Er kwam een zesde naam
bij die in geen van beide lijstjes stond**: ETHERNET/IP staat in diezelfde
opsommingen en zou als enige in kapitalen achterblijven naast een rechtgezette buur,
dus die is EtherNet/IP geworden, zoals ODVA hem schrijft.

Het blijven woordcorrecties, dus **een herimport draait ze in allebei de
hoofdstukken terug.**

- **"besturingssyteem"** in kernpunt 1, met een s te weinig. Het staat in het
  kader dat het meest gelezen wordt.
- **"eventuool"** in studievraag 4 van het kader.
- **"Andere procoessen blijven op hun honger zitten"** in Cooperative
  multitasking.
- **"de process scheduler van het besturinggsysteem"** in Preemptive
  multitasking, met een g te veel.
- **"Prioritiy based scheduling (PBS)"** als kop van een Heading 4, en het is de
  enige van de vijf algoritmekoppen met een fout erin.
- **"moet er een mechanisme zijn die kan schakelen"** in 7.6 en **"er niet één
  bepaald process scheduling algoritme is die superieur is"** in Preemptive
  multitasking: allebei die waar dat hoort.
- **"Zoals je weet zegt de Von Neuman architectuur"** in 7.5, met een n te weinig.
  Hoofdstuk 5 schrijft consequent Von Neumann, en de hoofdstuktitel daar is
  De Von Neumann architectuur.
- **"een marktaandeel van 80 a 90%"** in 7.1, met a waar à hoort. De
  cijfers ernaast (macOS +- 10%, Linux +- 2%) verouderen, en +- staat er als twee
  tekens in plaats van als ±.
- **"proces" tegen "process"** wisselt binnen 7.6: "hevelen dan de controle aan
  een ander process over" naast proces in elke andere zin. De vaste uitdrukkingen
  process scheduler en process scheduling houden hun Engelse vorm door het hele
  hoofdstuk heen, en dat is consequent.
- **"een multiple tasks besturingssysteem"** in de eerste zin van 7.6, waar
  multitasking het woord is dat de rest van de sectie gebruikt.
- **"met zich teweeg brengen"** in Cooperative multitasking, een kruising van
  met zich meebrengen en teweegbrengen.
- **De hoge komma's rond 'indruk' in 7.6 en rond 'gewone' en 'hart' in 7.2** zijn
  in de Word gewone apostrofs en zijn dat hier gebleven. Dat is opmaak en geen
  tekst, net als de drie punten in "gebruikersbeheer, bestandsbeheer,
  geheugenbeheer, ... ." in 7.2, die daar met een spatie voor de punt staan.
## Hoofdstuk 8, Virtual machines en containers

**De sectie Studievragen achteraan heet hier Test jezelf**, zoals in hoofdstuk 1,
3, 4, 5 en 6. Het kader Studievragen vooraan houdt zijn eigen naam en staat samen
met de Kernpunten op `Overzicht.html`. De pagina heet `TestJezelf.html`; de
importer schreef `Studievragen.html`.

**Vier secties, 54 alinea's en zes gedrukte bladzijden.** Geen enkele Heading 3,
dus elke pagina draagt alleen haar eigen h1, en **geen enkele zwevende
afbeelding**: de twee foto's staan inline in een tabel. `IMPORT.md` meldt dan ook
maar een ding, de kopregel van die tabel.

### Het kader stond fout over host en guest, en is rechtgezet

Kernpunt 2 zei "Op één fysieke **guest** machine kan je meerdere virtuele
**host** machines draaien" en kernpunt 4 zei "Het **host** besturingssysteem
wordt telkens mee gevirtualiseerd". Allebei omgekeerd. De lopende tekst van 8.3
heeft het wel juist: "er is één host besturingssysteem waarop er 1 of meerdere
guest besturingssystemen worden geïnstalleerd", en "Ieder guest besturingssysteem
krijgt een eigen virtuele processor". Het hoofdstuk sprak zichzelf dus tegen, en
het kader was de kant die fout stond.

Beslist op 7 september 2026 door de lector: **de twee kernpunten worden juist
gezet en de lopende tekst blijft ongemoeid.**

> kernpunt 2: Op één fysieke host machine kan je meerdere virtuele guest machines
> draaien.
>
> kernpunt 4: ... Het guest besturingssysteem wordt telkens mee gevirtualiseerd.

**Dat verfijnt de regel van hoofdstuk 6, en de verfijning staat ook in CLAUDE.md.**
Daar stond na hoofdstuk 6 dat het kader letterlijk blijft wat de Word zegt en dat
de lopende tekst is wat je bijdraait. Dat was toeval: in hoofdstuk 6 had het kader
gelijk, en daardoor was de *plaats* van de zin het criterium geworden in plaats
van haar juistheid. Hier ligt het omgekeerd, en in allebei de gevallen wint wat
waar is. Het blijft een handmatige woordcorrectie, dus **een herimport draait ze
terug.**

**Deze fout stond al in CLAUDE.md genoteerd**, sinds Labo Virtualiseren geschreven
werd: die sectie meldde een kernpunt in de syllabus-Word dat host en guest omdraait,
met de opdracht het recht te zetten zodra het hoofdstuk ingevoerd werd. Dat is dit
kernpunt, en die notitie is nu bijgewerkt. **Geen ander hoofdstuk draagt de omkering**;
hoofdstuk 5 is nagekeken en heeft ze niet. `Labo/Virtualiseren/` zegt het overal juist
en is niet aangeraakt.

### De emulatie sprak het labo tegen, en hoofdstuk 5 ook

**Wat er stond, klopte niet.** 8.3 schreef: "De hardware van de computer wordt
geëmuleerd. Dit wil zeggen dat de werking van de processor, werkgeheugen,
diskettestation, floppy, USB, netwerk, … wordt nagebootst in software." Kernpunt 1
vatte dat samen als "Een virtuele machine bootst de hardware van een fysieke
computer na in software".

`Labo/Virtualiseren/Theorie/VirtueleHardware.html` heeft het bij het rechte eind:
een virtuele machine laat de instructies van de gast rechtstreeks op de echte
processor lopen, met de virtualisatie-uitbreiding van de processor die bewaakt dat
hij niet buiten zijn virtuele machine komt. Nagebootst zijn de randapparaten. Dat
is precies het geval van hoofdstuk 5, en de regel geldt onverkort: zet de syllabus
recht, **raak de labopagina niet aan** (patroon 17).

**Er komt hier wel iets bij dat hoofdstuk 5 nog niet had: de syllabus sprak
zichzelf tegen over twee hoofdstukken heen.** 5.2 draagt sinds de vorige ronde de
rechtgezette formulering, en 8.3 zei er het omgekeerde van. De correctie neemt
daarom **de bewoording van hoofdstuk 5 over** in plaats van een tweede te
verzinnen, zodat de twee bladzijden hetzelfde zeggen. Alinea 2 van 8.3 luidt nu:

> Een deel van de hardware van de computer wordt geëmuleerd. Dit wil zeggen dat de
> werking van het diskettestation, de floppy, USB, netwerk, … wordt nagebootst in
> software. De processor en het werkgeheugen horen daar niet bij. De instructies
> van de virtuele machine lopen rechtstreeks op de echte processor, en de hardware
> bewaakt daarbij dat ze niet buiten die virtuele machine komen. Ook het
> werkgeheugen is echt geheugen, waarvan de virtuele machine een stuk toegewezen
> krijgt.

En kernpunt 1 luidt nu: "Een virtuele machine bootst de **randapparaten** van een
fysieke computer na in software; haar instructies lopen op de echte processor;".

Drie keuzes daarin:

- **De opsomming van de Word blijft staan**, diskettestation, floppy, USB en
  netwerk, met het beletselteken erachter. Er valt dus geen enkel gegeven weg; wat
  eruit gaat is de processor en het werkgeheugen, en die twee krijgen er hun eigen
  zin bij. Dat diskettestation en floppy hetzelfde ding zijn, staat hieronder bij
  wat niet aangeraakt is.
- **Het woord guest komt in die alinea niet voor**, want 8.3 voert het pas twee
  alinea's later in (patroon 20). Er staat "de virtuele machine". Hoofdstuk 5 moest
  om diezelfde reden "het besturingssysteem dat erin draait" schrijven, en dat
  blijft daar zo.
- **De eerste alinea van 8.3 is niet aangeraakt.** Die geeft de omschrijving van
  Wikipedia, en vraag 1 van Test jezelf steunt er woord voor woord op. Ze blijft
  waar ook: een virtuele machine gedraagt zich als een fysieke computer, en de
  correctie gaat over hoe dat gebeurt en niet over of het gebeurt.

**Een herimport gooit deze correctie weg.**

### De onbeantwoorde studievraag kreeg vier namen, en Proxmox VE kostte een zin

Het kader vraagt "Geef een voorbeeld van een programma dat een virtual machine kan
draaien." Het hoofdstuk noemt Docker voor containers in 8.4, en voor een virtuele
machine noemt het nergens iets. Dat is het gat van de wet van Moore in hoofdstuk 1,
van de bottleneck in hoofdstuk 5, van het partitieschema in hoofdstuk 6 en van
realtime in hoofdstuk 7, en de uitkomst is dezelfde: er komt tekst bij.

Beslist op 7 september 2026 door de lector: **dezelfde vier namen als het labo,
exact zo gespeld.** VirtualBox, VMware Workstation, Hyper-V en Proxmox VE. Ze zijn
uit de tabel van `Labo/Virtualiseren/Theorie/WatIsVirtualisatie.html` overgenomen
als eigen tekst en niet als link: de twee tracks zijn onafhankelijk (patroon 17).

**De vierde naam is niet gratis, en daar volgt een aanvulling uit.** Proxmox VE
draait rechtstreeks op de kale hardware, zonder host besturingssysteem eronder, en
8.3 definieert virtualiseren juist als "er is één host besturingssysteem waarop er
1 of meerdere guest besturingssystemen worden geïnstalleerd". Die naam noemen
zonder een woord over het verschil maakt de eigen definitie van het hoofdstuk
onwaar. De alinea staat achter de definitie waar ze een uitzondering op is, en niet
achteraan de sectie:

> Programma's die een virtuele machine draaien zijn er in twee soorten. VirtualBox,
> VMware Workstation en Hyper-V installeer je op een gewoon besturingssysteem, dat
> daarmee de host wordt, en je blijft er ondertussen zelf op werken. Proxmox VE
> installeer je rechtstreeks op de kale hardware, zonder host besturingssysteem
> eronder, en zo een machine draait niets anders meer dan guests. Die tweede vorm
> tref je aan op een server, waar niemand aan het toestel zelf werkt.

**Het woord hypervisor staat er niet in.** Dat is de vakterm voor het onderscheid,
maar geen enkel hoofdstuk van deze syllabus voert hem in, en hem hier invoeren zou
een definitie kosten die niets extra uitlegt. Dat is patroon 20, en het is dezelfde
afweging als de paginatabellen die in hoofdstuk 5 buiten de tekst bleven.

**De laatste zin knoopt aan 8.1 en 8.2 vast**, waar de server het onderwerp is.

**Deze alinea staat alleen in de HTML en een herimport gooit haar weg.**

### De drie vragen van Test jezelf

| Vraag | Antwoord | Waarop het steunt |
|---|---|---|
| 1 Wikipedia omschrijft een virtual machine als | c, een computerprogramma dat de werking van een echte, fysieke computer nabootst | 8.3, eerste zin, woord voor woord |
| 2 Draait jouw computer virtuele machines, dan is hij | a, het host systeem | 8.3, "er is één host besturingssysteem waarop er 1 of meerdere guest besturingssystemen worden geïnstalleerd", en het rechtgezette kernpunt 2 |
| 3 Welke bewering is NIET WAAR | d, als er hardware crasht blijft de virtuele machine gewoon verder werken | de drie andere staan in 8.3 (kostenbesparend, volledig gescheiden, trager); de scheiding zit in de software en niet in de hardware |

**Alle drie de vragen hebben precies een juist antwoord, en dat is nageteld.** Het
probleem van hoofdstuk 3, waar vier van de vijf mogelijkheden juist waren, speelt
hier bij geen enkele vraag. Er is dus geen enkele open vraag en geen enkele
`<div class="oplossing">` in dit hoofdstuk; alle drie zijn ze meerkeuze gebleven,
zoals in hoofdstuk 6.

**Vraag 2 houdt haar twee mogelijkheden**, host of guest, en er wordt er geen derde
bijverzonnen. Beslist op 7 september 2026. Bij vraag 5 van hoofdstuk 5 en vraag 2
van hoofdstuk 6 gebeurde dat wel, en het verschil is dat daar een echte derde
mogelijkheid uit de tekst te halen was. Hier zijn host en guest samen de hele
verzameling: een computer die virtuele machines draait is de host, en dat is het.
Een verzonnen derde zou een woord invoeren dat het hoofdstuk niet kent. **De
gokkans van een op twee is daarmee bewust aanvaard**; de zelftest is oefening, en
de Word bepaalt de vraag.

**Vraag 3 stelt de vraag al omgekeerd** ("Welke bewering is NIET WAAR"), dus de
ingreep die vraag 6 van hoofdstuk 3 en vraag 1 van hoofdstuk 6 nodig hadden, was
hier niet nodig. De Word deed het zelf.

### 8.4 kreeg de tekening van het labo

**Het hoofdstuk heeft geen enkele afbeelding buiten de twee foto's van 8.1**, en
8.4 behandelt precies wat `img/virtualiseren-vm-versus-container.svg` al tekent.
Beslist op 7 september 2026: die tekening wordt gekopieerd naar
`img/syllabus-08-vm-versus-container.svg`, **byte voor byte dezelfde**, zoals de
fragmentatiefiguur en de first/best/worst-fitfiguur al twee zulke paren vormen.
Dat is het derde paar en het eerste dat niet uit de Word komt. Nagekeken met
`diff`; **wijzig er nooit een zonder de andere.**

De tekening is in Edge gerenderd voor ze vertrouwd werd, en er viel niets te
herstellen: geen overlappende tekst, geen label onder een lijn. Ze staat op
160.0mm, en met een viewBox van 720 bij 280 is ze op papier 62.2mm hoog, dus figuur
en bijschrift samen blijven ver onder de 240mm van hoofdstuk 3. De breedte is hier
dus geen knop geweest.

**Ze noemt VirtualBox, Ubuntu, Docker en guest, en alle vier draagt het hoofdstuk
die woorden nu.** Docker staat in 8.4 zelf, guest in 8.3, en VirtualBox in de
alinea die hierboven bijgeschreven is. Zonder die alinea zou de tekening een naam
tonen die in geen enkele zin van het hoofdstuk voorkomt, en dat is patroon 20.

**Ze staat onder de vier alinea's** en niet ertussen, want ze toont wat die vier
samen beschrijven, en de laatste ervan noemt Docker. Het `alt` en het bijschrift
zijn met de hand geschreven na het openen van de gerenderde tekening, en ze zijn
eigen tekst: de labopagina draagt haar eigen `alt` en die is niet overgenomen.
**Er is geen tweede tekening bij 8.2 gemaakt**; het bleef bij deze ene.

### De twee foto's van 8.1

**Allebei opengedaan voor hun bijschrift geschreven werd.** Het zijn productfoto's
op wit, allebei zonder watermerk en zonder chroom, en allebei leesbaar op hun
breedte uit de Word.

- **image56** (`syllabus-08-virtual-machines-en-containers-01.jpeg`, 500 bij 251
  pixels op 74.5mm, dus **170 dpi**) is een 1U serverkast schuin van voren: een
  zilverkleurig deksel, een zwarte voorkant met twee ventilatieroosters en aan
  weerszijden een montage-oor.
- **image57** (`syllabus-08-virtual-machines-en-containers-02.jpeg`, 450 bij 450
  pixels op 68.4mm, dus **167 dpi**) is een zwarte rackkast op wieltjes met een
  glazen deur.

Allebei zitten ze ruim boven de dpi-grens van 98 die hoofdstuk 3 vastgelegd heeft,
dus **de breedtes uit de Word zijn niet aangeraakt**. Hertekenen is hier geen optie
en was ook niet nodig: het zijn foto's, en de enige reden om er een te vervangen
zou onleesbaarheid of een watermerk zijn.

**De tabel eromheen krijgt geen kopregel, en de gok van de importer is daarmee
nagekeken.** `IMPORT.md` meldde "geen enkel signaal" en zette er een `data-geraden`
op. Nagekeken: de rij met **1U server** en **19" rack** staat *onder* de foto's,
dus ze benoemt geen kolommen maar onderschrijft twee beelden. Een kopregel hoort
bovenaan, dus die is er niet, en het `data-geraden` is weg. Dat is het spiegelbeeld
van de vergelijkingstabel van 6.1, waar de benoemende rij wel bovenaan stond en dus
wel een `<thead>` geworden is. Nagekeken in de render: de twee foto's staan naast
elkaar met hun naam eronder, en de linkercel is hoger dan de foto omdat de rechter
vierkant is. Dat is geen fout maar het gevolg van twee beeldverhoudingen naast
elkaar.

**"zoals je in de figuur ziet" klopte niet meer, en is rechtgezet.** De zin eronder
luidde "Eerst en vooral hoeft een server er niet uit te zien zoals je in de figuur
ziet", en er staan twee figuren, waarvan er maar een een server is: de andere is de
kast waar hij in gaat. Ze luidt nu "**zoals de 1U server hierboven**", wat de foto
aanwijst die bedoeld is en het woord gebruikt dat de tabelcel en de alinea erna al
dragen (patroon 20). Het is een woordcorrectie, dus **een herimport draait ze
terug.**

### De bladspiegel van dit hoofdstuk

Zes bladzijden, 63 tot en met 68, met de gedrukte 8.6 Oplossingen als laatste.
Nagerekend na de redactionele ronde en niet alleen na de import, want de
bijgeschreven alinea van 8.3 en de figuur van 8.4 kwamen er allebei na de import
bij.

**Er is aan geen enkele breedte gedraaid**, net als bij hoofdstuk 7. De fototabel
van 8.1 staat heel op haar bladzijde, met de kop 8.2 en zijn eerste twee alinea's
er nog onder. De figuur van 8.4 staat met haar bijschrift samen onderaan de
bladzijde waar 8.4 op begint, dus de grens van 240mm uit hoofdstuk 3 is nergens
geraakt. Test jezelf past op een bladzijde en Oplossingen op de volgende: geen
enkele vraag valt uiteen, en het geval van hoofdstuk 3, waar vraag 9 alleen op de
tweede bladzijde belandde, speelt hier niet.

### Waar dit hoofdstuk en de rest van dit vak naast elkaar staan

Dit is na hoofdstuk 6 de zwaarste overlap met een labo.
`Labo/Virtualiseren/Theorie/WatIsVirtualisatie.html` en `VirtueleHardware.html`
behandelen hetzelfde onderwerp. Patroon 17: de twee tracks zeggen hetzelfde twee
keer en er linkt niets tussen. **Er is aan geen enkele labopagina iets veranderd.**
Nagekeken op tegenspraak, en dit kwam eruit.

- **De emulatie.** Zie hierboven. Dat was een echte tegenspraak, en de syllabus is
  de kant die rechtgezet is.
- **Host en guest.** Zie hierboven. Het labo had het overal juist.
- **De vier programma's staan nu in allebei de tracks**, met dezelfde spelling en
  dezelfde indeling: drie op een gewoon besturingssysteem en Proxmox VE op de kale
  hardware. Het labo zet ze in een tabel met een kolom "Waar het draait", de
  syllabus in twee zinnen. Er linkt niets tussen.
- **De container.** 8.4 en de labopagina zeggen allebei dat containers hetzelfde
  besturingssysteem delen, dat de overhead daardoor wegvalt en dat de licentiekost
  lager ligt. Het labo zegt er twee dingen bij die de syllabus niet heeft: dat een
  container in seconden start, en dat Linux-containers alleen op Linux draaien. Dat
  is een gat en geen tegenspraak, en de tekening die allebei de tracks nu dragen,
  zegt dat laatste wel.
- **De licentie.** 8.4 schrijft "Voor iedere VM heb je eventueel een licentie van
  Windows nodig", het labo "Draai je tien virtuele machines met Windows, dan heb je
  tien Windows-licenties nodig". Hetzelfde feit, alleen zegt het labo het scherper.
- **De syllabus noemt Labo Virtualiseren nergens en omgekeerd ook niet.** Dat blijft
  zo: 7.4 mag Linux Geavanceerd bij naam noemen omdat daar een belofte stond die
  nergens heen wees, en hier staat geen belofte.
- **De vijf productnamen die hoofdstuk 4 en 7 uit elkaar lieten lopen komen in dit
  hoofdstuk geen enkele keer voor**, nagekeken met grep. Dat hield de beslissing bij
  twee hoofdstukken, en ze is op 7 september 2026 genomen: de schrijfwijze van de
  eigenaar wint. De uitwerking staat bij hoofdstuk 7. Dit hoofdstuk is er niet door
  geraakt.

### Wat er in de tekst opviel, en op 7 september 2026 rechtgetrokken is

De tekst gaat er in principe letterlijk in, dus dit staat hier met wat er beslist
is. **Al deze correcties staan alleen in de HTML en een herimport draait ze terug.**
Wat hierboven al per beslissing beschreven staat (host en guest, de emulatie, de
1U server), staat hier niet nog eens.

- **Studievraag 1 vooraan was een imperatief met een vraagteken.** "Omschrijf in
  eigen woorden waarom virtuele machines zo interessant zijn?" draagt nu een punt.
  De regel staat bij hoofdstuk 4 en dit is het vijfde hoofdstuk dat ze tegenkomt.
  **De tweede zin van diezelfde studievraag is wel een echte vraag** ("Welke
  voordelen hebben ze ten opzichte van een fysieke machine?") en houdt haar
  vraagteken, net als studievraag 2.
- **Studievraag 3 vooraan eindigde op een kommapunt**, "Geef een voorbeeld van een
  programma dat een virtual machine kan draaien;". Dat is een imperatief, dus ze
  draagt nu een punt. Studievraag 4 ernaast, met dezelfde bouw, droeg er al een.
  Dat is precies het geval van studievraag 8 van hoofdstuk 7.
- **"overal" is "telkens" geworden** in 8.4, "omdat het besturingssysteem overal mee
  gevirtualiseerd wordt". Kernpunt 4 en kernpunt 5 schrijven allebei telkens, dus het
  hoofdstuk sprak zijn eigen kader tegen op een woord.
- **"diskettestation, floppy" is "diskettestation" geworden** in 8.3. Dat is hetzelfde
  toestel twee keer, en het staat in de alinea die voor de emulatie toch al rechtgezet
  was. De term zelf blijft staan hoewel hij verouderd is: geen enkele virtuele machine
  heeft vandaag nog een diskettestation, maar dat is wat de Word opsomt en het is geen
  onwaarheid.
- **Het onderwerp heet in de lopende tekst overal "virtuele machine".** Er stonden vijf
  vormen door elkaar: virtual machine, Virtual Machine, Virtuele Machines, VM en
  virtuele machine. Die laatste was al de meerderheid en het is de Nederlandse vorm.
  Negen plaatsen, verspreid over alle vijf de pagina's, kader en Test jezelf inbegrepen;
  in het kader is dat kernpunt 4, dat als enige "VM's" schreef.

  **Twee soorten plaatsen zijn met opzet niet meegegaan.** De koppen houden hun vorm uit
  de Word, want dat zijn de gedrukte titels die ook in de inhoudstafel en in de
  `name` van `reference.js` staan: het hoofdstuk heet Virtual machines en containers en
  8.3 heet Virtual machines. En de Engelse eenregelaar in 8.3 ("What happens in the
  virtual machine, stays in the virtual machine") blijft letterlijk, want vertalen is
  geen spellingcorrectie.

  **De vraagzin van vraag 1 van Test jezelf is meegegaan**, en dat moest samen met 8.3:
  de vraag citeert de eerste zin van die sectie woord voor woord, dus de twee zouden
  anders uit elkaar lopen.
- **"eventueel" is uit de licentiezin van 8.4**, maar niet zonder meer geschrapt. "Voor
  iedere VM heb je eventueel een licentie van Windows nodig" wordt **"Voor iedere
  virtuele machine met Windows heb je een aparte licentie nodig."** Alleen het woord
  wegnemen zou de zin onwaar maken, want een guest met Linux heeft geen Windowslicentie
  nodig, en dat is precies wat dat vage eventueel afdekte. De voorwaarde staat er nu
  met zoveel woorden in plaats van als een slag om de arm, en zo zegt de zin hetzelfde
  als `Labo/Virtualiseren/Theorie/WatIsVirtualisatie.html`, dat het al scherper had.

### Wat er in de tekst opviel, en niet aangeraakt is

De tekst gaat er letterlijk in, dus dit staat hier en niet in de HTML.

- **"What happens in the virtual machine, stays in the virtual machine."** in 8.3
  is een Engelse eenregelaar midden in een Nederlandse tekst, zonder bron en zonder
  dat er staat dat het een gezegde is. De zin ervoor legt hetzelfde in het
  Nederlands uit, dus wie hem overslaat mist niets.
- **"Een server krijgt meestal slechts 1 taak"** in 8.2 en **"1 of meerdere guest
  besturingssystemen"** in 8.3 schrijven een cijfer waar een woord gebruikelijk is;
  dezelfde zinnen schrijven twee en vier wel voluit.
- **Twee dubbele spaties in 8.2** ("we het  risico" en "de gevolgen van
  onderbrekingen") en **een in 8.1** (achter de zin over de 1U server). Het zijn
  gewone spaties en geen harde, anders dan bij hoofdstuk 5 en 7, en ze vallen in de
  opmaak weg. Dat is opmaak en geen tekst.
- **"Op die manier wordt dit echter wel een heel dure aangelegenheid..."** in 8.2
  en **"Dit op zich neemt ook al processortijd in beslag..."** in 8.4 eindigen op
  drie punten die in de Word het beletselteken zijn. Dat is opmaak en geen tekst,
  net als de apostrofs rond 'dienst' in 8.1.
- **"een virtuele harde schijf, etc."** in 8.3 schrijft etc. waar de rest van de
  Word het beletselteken gebruikt.
- **8.2 verwijst naar "hoofdstuk Harde schijf" en "hoofdstuk Besturingssystemen".**
  Het tweede is hoofdstuk 7 en staat er; het eerste is hoofdstuk 11 en bestaat nog
  niet. Allebei blijven ze woorden en worden er geen links van: van de syllabus is
  de PDF het enige dat de student ziet.
- **8.2 heet Nadelen van fysieke machines en somt er een op**, de prijs. Dat het er
  maar een is, staat in de Word zo.

## Hoofdstuk 9, Moederbord

**De sectie Studievragen achteraan heet hier Test jezelf**, zoals in hoofdstuk 1,
3, 4, 5, 6 en 8. Het kader Studievragen vooraan houdt zijn eigen naam en staat
samen met de Kernpunten op `Overzicht.html`. De pagina heet `TestJezelf.html`; de
importer schreef `Studievragen.html`.

**Vier secties, 74 alinea's, zes tabellen en zeventien gedrukte bladzijden, 73 tot
en met 89.** 9.3 draagt drie Heading 3's (Processor, Werkgeheugen, Grafische
kaart), wat dit na hoofdstuk 7 het tweede hoofdstuk met koppen onder een sectie
maakt; een Heading 4 komt er niet in voor.

### Het gat: de nadelen van ATX stonden alleen in het kader

Studievraag 1 vooraan luidt "Hoe wordt de layout van een moederbord bepaald? Wat zijn
de nadelen van ATX?" Nagekeken met grep in de lopende tekst van dit hoofdstuk:
**nadeel, nadelen en layout komen er samen nul keer in voor.** 9.1 geeft ATX alleen
zijn voordeel, dat je er componenten in kan vervangen, en over de afmetingen zegt het
alleen dat ze vastliggen volgens een standaard.

Dat is het gat van de wet van Moore in hoofdstuk 1, van de bottleneck in hoofdstuk 5,
van het partitieschema in hoofdstuk 6, van realtime in hoofdstuk 7 en van de
programma's die een virtuele machine draaien in hoofdstuk 8, en de uitkomst is
dezelfde. Beslist op 7 september 2026 door de lector: er komt tekst bij in plaats van
dat de studievraag onbeantwoord blijft.

**Het werden twee alinea's, en ze staan midden in 9.1 en niet achteraan.** Ze komen na
het lijstje met de processor, het werkgeheugen en de grafische kaart, en voor de zin
"Een industriële computer zoals een Control Cabinet PC houdt zich meestal aan de
standaard ATX afmetingen maar bij een embedded PC ... wijken die afmetingen natuurlijk
af". Die plaats is gekozen omdat de tweede alinea precies uitlegt **waarom** een
embedded PC afwijkt, en de bestaande zin er dus als gevolg op leest. Er komt geen eigen
kop bij, anders dan bij realtime in hoofdstuk 7: het past in de gedachtegang die er al
staat, zoals bij hoofdstuk 1, 5 en 6.

Wat er staat, in het kort: een vormfactor legt meer vast dan de lengte en de breedte,
namelijk ook de schroefgaten, het aansluitingenblok achteraan en waar de voeding zijn
stekkers kwijt kan, en daardoor past elk ATX bord in elke ATX kast; en die vaste maat
is meteen het nadeel, want een bord van dat formaat vraagt een kast die niet in een
machine staat en niet op een DIN rail past, en omdat alles op dat ene oppervlak moet,
ligt de indeling van het bord grotendeels vast.

**Deze twee alinea's staan alleen in de HTML en een herimport gooit ze weg.** De maat
wordt er met opzet niet herhaald: ze staat drie regels hoger al, en de Word schrijft
haar met punten ("30.5 cm op 24.4 cm") waar eigen tekst een komma zou zetten.

### De volgorde van 9.5 is voorgelegd en gebleven

De verplaatsing van de drie vragen naar achter de datasheets was eerst een eigen
beslissing en is daarna alsnog voorgelegd. Beslist op 7 september 2026 door de lector:
**ze blijft.** De reden staat hieronder bij de datasheets.

### De lege Heading 2 achteraan is een pagina geworden en is weggegooid

Achter Studievragen staat in de Word een Heading 2 zonder tekst. De importer maakt
daar een volwaardige sectie van: `Moederbord/Pagina.html`, met een lege `<title>`,
een lege `<h1>` en verder niets. De bestandsnaam is de terugval van `pascal()` op
een lege kop.

Dat is een restant van een bladovergang en geen sectie, dus de pagina is
weggegooid en staat niet in `reference.js`. **Een herimport zet ze terug**, en dan
verschijnt ze ook weer in de contentcheck, want een pagina onder een module die
niet in het manifest staat, faalt op regel 2.

### De kop Raspberry PI is meegegaan met de schrijfwijze van de eigenaar

De kop van 9.2 luidde "Raspberry PI" en de acht zinnen eronder schreven het net zo.
De regel van 7 september 2026 zegt dat een productnaam de schrijfwijze van zijn
eigenaar draagt, en de foto in die sectie draagt **Raspberry Pi 4 Model B** op de
printplaat zelf.

Beslist op 7 september 2026 door de lector: **de kop gaat mee.** Dat is nieuw. Bij
hoofdstuk 8 bleven de koppen met opzet staan zoals de Word ze zet, maar daar ging
het om een gewone woordgroep (Virtual machines) en hier om een merknaam. Een kop is
de gedrukte sectietitel en staat ook in de inhoudstafel, dus laat je hem staan, dan
drukt dezelfde bladzijde de naam op twee manieren.

**De bestandsnaam verandert er niet door.** `pascal()` maakt van "Raspberry PI" en
van "Raspberry Pi" allebei `RaspberryPi.html`, want de regel houdt alleen `[a-z0-9]`
over en zet daarna elk woord op een hoofdletter. Dat is nagekeken voor de
hernoeming overwogen werd; er viel niets te hernoemen.

Tien plaatsen in totaal: de `<title>`, de `<h1>` en acht zinnen in de lopende tekst.
**Een herimport draait ze terug.**

### mini ATX bestaat hier niet, en de figuur van dit hoofdstuk zegt dat zelf

Kernpunt 2 schreef "We onderscheiden bijvoorbeeld ATX, mini ATX, micro ATX, ....".
Mini-ITX en mini ATX zijn niet hetzelfde ding, en de figuur van 9.1, in dit
hoofdstuk zelf, labelt haar vijf borden **Standard-ATX, Micro-ATX, Mini-ITX,
Nano-ITX en Pico-ITX**. Mini ATX staat er niet bij. De schermafdruk van 9.4 schrijft
Micro-ATX en ITX, en `Labo/Assemblage/Theorie/Componenten.html` heeft een tabel met
ATX, Micro-ATX, Mini-ITX en BTX.

Beslist op 7 september 2026 door de lector: het kernpunt wordt **"ATX, Micro-ATX,
Mini-ITX, ...."**, met het streepje dat de figuur eronder ook draagt. Dat is
hetzelfde geval als Windows 10 in hoofdstuk 7: het kader wordt wel aangeraakt, want
het gaat niet om een tegenspraak waarvan de lopende tekst de plaats is om bij te
draaien, maar om een naam die overal hetzelfde hoort te staan. De lopende tekst van
9.1 noemt deze drie namen nergens, dus daar viel niets recht te zetten.

**Een herimport draait ze terug.**

### Vraag 3 van Test jezelf gaat van twee naar vier mogelijkheden

"Kan je een AMD processor op een Intel socket plaatsen?" had Ja en Nee, dus een
gokkans van een op twee. Beslist op 7 september 2026 door de lector: er komen
afleiders bij, zoals bij vraag 5 van hoofdstuk 5 en vraag 2 van hoofdstuk 6.

Het verschil met vraag 2 van hoofdstuk 8, waar de gokkans van een op twee juist
**wel** aanvaard is, is dat host en guest daar samen de hele verzameling waren. Hier
niet: 9.3 zegt met zoveel woorden dat er geen merkoverschrijdende standaarden zijn
en dat ook binnen een merk een bepaald type processor op een bepaald type socket
past, en daar zijn verdedigbare afleiders uit te halen.

De vier mogelijkheden zijn nu:

> a. Ja, elke socket aanvaardt elke processor
> b. Ja, zolang allebei de processoren de x64 instructieset gebruiken
> c. Nee, een socket is gemaakt voor een bepaald merk, en binnen dat merk zelfs voor
>    een bepaald type processor
> d. Nee, maar met een verloopstuk past hij wel

Juist is **c**, en die zin is de samenvatting van de derde alinea van
Processor -> socket. Mogelijkheid b is de afleider die telt: de x64 instructieset
komt in dit hoofdstuk twee keer voor en zegt niets over de socket. **De drie andere
mogelijkheden zijn bijgeschreven en staan alleen in de HTML.**

### De vier vragen van Test jezelf

| Vraag | Antwoord | Waarop het steunt |
|---|---|---|
| 1 Wat is GEEN vormfactor | b, SO-DIMM | 9.1 noemt ATX en PC104 als vormfactor; 9.3 legt SO-DIMM uit als een soort geheugenmodule |
| 2 Verschil met een industrieel moederbord | c, nog lang na aankoopdatum te bestellen | 9.3, "garanderen dat je bij aankoop tot 10 jaar na datum nog vervangonderdelen zal kunnen krijgen"; dezelfde alinea zegt dat je er juist **niet** de laatste technologie vindt, dus a en b zijn allebei fout |
| 3 AMD processor op een Intel socket | c, nee, een socket is gemaakt voor een bepaald merk | 9.3, "Er zijn geen merk overschrijdende standaarden ... Ook binnen het merk zelf kan een bepaald type processor maar geplaatst worden op een bepaald type socket" |
| 4 Welke hardware past in deze aansluiting | a, RAM | de afbeelding is de foto van de DIMM slots uit 9.3; opengedaan om dat te bevestigen voor de letter gezet werd |

**Alle vier de vragen hebben precies een juist antwoord, en dat is nageteld.** Het
probleem van hoofdstuk 3, waar vier van de vijf mogelijkheden juist waren, speelt
hier bij geen enkele vraag, dus er is geen enkele open vraag en geen enkele
`<div class="oplossing">` in Test jezelf. Vraag 1 stelt de vraag al omgekeerd
("Wat is GEEN"), dus de ingreep van vraag 6 van hoofdstuk 3 was hier niet nodig.

**Vraag 4 draagt een figuur en blijft daardoor heel op een bladzijde**, zonder dat
er een `.vragen-bij-figuur` aan te pas komt: de figuur staat **binnen** de `<li>`
van de vraag, en `ol.vragen > li` breekt sinds hoofdstuk 2 niet meer over een
bladovergang. Die omhulling is er voor een figuur die **naast** een reeks nummers
staat, zoals het moederbord van 2.1, en dat geval doet zich hier niet voor.
Nagekeken in de gedrukte PDF: Test jezelf past volledig op bladzijde 88, met de
foto bij vraag 4.

### 9.5 Oefening houdt haar naam, en wordt een vragenlijst met invulruimte

Zoals de regel bij hoofdstuk 2 zegt: een sectie die halverwege Oefening heet, houdt
haar naam en krijgt wel dezelfde vragenbehandeling. De drie open vragen dragen elk
een lege tabel van een rij in de Word, en zijn hier een `ol.vragen` geworden met
invulruimte en een `<div class="oplossing">`. Zonder die oplossingen drukt het hele
hoofdstuk geen Oplossingen.

**Elke vraag draagt twee invulregels**, geteld naar wat het antwoord telt, zoals de
regel bij hoofdstuk 3 zegt: vraag 1 noemt twee toestellen, vraag 2 noemt twee
redenen waarom de derde afvalt, en vraag 3 is een keuze plus haar motivatie.

**De drie oplossingen zijn hier bepaald en staan nergens in de Word.** Ze steunen op
de datasheets zelf, die daarvoor bladzijde per bladzijde opengedaan zijn.

| Vraag | Antwoord | Waarop het steunt |
|---|---|---|
| 1 Welke komen in aanmerking | de CX5120 en de CX5620 | CX5120: Intel Atom E3815, 2 GB DDR3, DVI-I. CX5620: AMD Ryzen R1102G, 4 GB DDR4, DVI-D. Allebei x64, allebei DVI, allebei minstens 2 GB |
| 2 Waarom valt er een af | de CX9020, om twee redenen | 1 GB DDR3 RAM dat de datasheet "not expandable" noemt, dus de 2 GB haal je nooit; en een ARM Cortex-A8 met Windows Embedded Compact 7, dus een programma in C# draait er niet zoals het geschreven is. Zijn DVI-D is wel in orde |
| 3 Welke zou je kiezen | allebei goed, als je motiveert | Beslist op 7 september 2026 door de lector: **de oplossing wijst geen winnaar aan.** Voor de CX5620 pleit de ruimte, want 2 GB is bij de CX5120 de ondergrens **en** het plafond (ook daar staat "not expandable") terwijl het besturingssysteem er zelf een stuk van neemt, en de CX5620 heeft 4 GB en twee kernen. Voor de CX5120 pleit dat hij aan alles voldoet en dat je niet betaalt voor wat je niet nodig hebt |

**De twee redenen bij vraag 2 zijn allebei nodig.** Alleen het geheugen noemen laat
de indruk dat een grotere microSD-kaart het probleem oplost, en de datasheet biedt
die kaarten ook aan; het is het werkgeheugen dat vastligt, niet de opslag.

**De leverbaarheid is met opzet geen argument in vraag 3.** De datasheet van de
CX5620 draagt "product announcement | estimated market release 4th quarter 2023" en
die van de CX5120 "regular delivery", en de oplossing gebruikte dat eerst als het
argument voor wie de CX5120 koos. Beslist op 7 september 2026 door de lector: **dat
gaat eruit.** Zo een productstatus hangt aan de datum van de datasheet en niet aan de
afweging, en of hij vandaag nog klopt weet niemand hier. Wat overblijft zijn twee
argumenten die niet verouderen: ruimte boven de ondergrens tegenover niet betalen voor
wat je niet nodig hebt. **Dat de status op de afgedrukte bladzijde staat, blijft
zo**: het is een schermafdruk van de datasheet en die wordt niet bewerkt.

### De dertien datasheetbladzijden zijn er zes geworden

9.5 zegt "De datasheets van deze systemen kan je op de volgende pagina's
terugvinden", en daaronder stonden dertien volle bladzijden datasheet van Beckhoff:
CX9020 (4 bladzijden), CX5120 (5) en CX5620 (4). Dat is het geval van de sectie
Artikel in hoofdstuk 3, en het krijgt dezelfde behandeling: een info-box **Bron** en
per figuur een bijschrift "Bladzijde N van 4".

**Alle dertien zijn opengedaan.** Het antwoord op de drie vragen staat volledig op de
eerste twee bladzijden van elk toestel: de foto, de omschrijving en de technische
tabel met de processor, het werkgeheugen en de aansluitingen. De zeven andere zijn
bestelnummers, opties en toebehoren, en die dragen geen enkel gegeven dat de
oefening vraagt.

Beslist op 7 september 2026 door de lector: **het worden de zes bladzijden met de
specificaties, en de volledige datasheet komt in de bronvermelding.** Anders dan bij
het artikel van hoofdstuk 3, waar alle vier de bladzijden bleven staan, want dat
artikel telde er vier en niet dertien.

- De bijschriften blijven **"Bladzijde 1 van 4"** en **"Bladzijde 2 van 4"**, dus de
  student ziet dat de datasheet doorloopt en waar ze ophoudt.
- De info-box Bron zegt met zoveel woorden wat er niet afgedrukt staat, en noemt
  `beckhoff.com/cx9020`, `beckhoff.com/cx5120` en `beckhoff.com/cx5620`. **Dat zijn
  geen links maar adressen**: de PDF is papier. Om diezelfde reden staat er in het
  hele hoofdstuk geen enkele `<a>`.
- De zeven geschrapte bladzijden zijn ook uit `img/` verdwenen
  (`syllabus-09-moederbord-18`, `-19`, `-22`, `-23`, `-24`, `-27` en `-28`), want
  regel 1 van de contentcheck valt over een afbeelding waar geen pagina naar wijst.
  **Een herimport zet alle zeven terug**, en dan faalt regel 1 tot ze opnieuw weg
  zijn.

**De drie toestellen zijn van Beckhoff, en dat staat op de bladzijden zelf**: het
logo BECKHOFF New Automation Technology onderaan elke bladzijde, de URL bovenaan, en
de datum 14 september 2023 voor de CX9020 en de CX5120 en 18 september 2023 voor de
CX5620. Beckhoff is ook het bedrijf dat 9.3 als voorbeeld noemt van een bouwer die
zijn eigen moederborden ontwerpt, dus de oefening en de sectie ervoor hangen samen.

**De drie vragen staan nu achter de datasheets en niet ervoor**, wat de enige
volgordewijziging in dit hoofdstuk is. In de Word staan ze ervoor, en dan schrijft de
student op bladzijde 80 en 81 terwijl de gegevens op 82 tot 87 staan. Nu leest hij de
opgave, bladert hij door de zes bladzijden en schrijft hij op de bladzijde meteen
erna. De zin uit de Word blijft ondertussen letterlijk waar, want de datasheets staan
nog altijd "op de volgende pagina's"; de info-box Bron zegt erbij dat de vragen erna
komen. Het hoofdstuk telt er geen bladzijde meer of minder door, maar bladzijde 81
was in de oude volgorde voor twee derde wit.

### De vier foto's onder de dpi-grens zijn versmald en niet hertekend

Vier afbeeldingen van dit hoofdstuk zitten onder de dpi-grens van 98 die hoofdstuk 3
vastgelegd heeft, en dat zijn er meer dan in enig hoofdstuk tot nu toe:

| bestand | pixels | in de Word | dpi |
|---|---|---|---|
| `syllabus-09-moederbord-10.png` (DIMM slots) | 512 × 202 | 160.0mm | 81 |
| `syllabus-09-moederbord-11.png` (een DDR-module) | 413 × 107 | 160.0mm | 66 |
| `syllabus-09-moederbord-12.png` (DIMM tegen SO-DIMM) | 381 × 187 | 156.4mm | 62 |
| `syllabus-09-moederbord-13.png` (PCI Express sloten) | 350 × 237 | 160.0mm | 56 |

Die laatste gaat onder de 63 dpi van de cooperative multitasking van hoofdstuk 7, die
tot dan de laagste van de hele Word was.

**Alle vier zijn ze opengedaan, en alle vier zijn het foto's en geen schema's.** Dat
is het onderscheid dat telt: image31 van hoofdstuk 3 en de drie van hoofdstuk 7 zijn
hertekend omdat het tekeningen waren, en image52 van hoofdstuk 7 bleef staan omdat
het een schermafdruk van een echt venster was. Een close-up van een moederbord teken
je niet na, en de labotrack tekent ze evenmin: `Labo/Assemblage/Theorie/Componenten.html`
draagt over hetzelfde onderwerp `dual-channel-dimm-slots.jpg` en
`geheugen-generaties-inkeping.png`, twee andere beelden. Er was hier dus geen
byte-voor-byte kopie te maken, zoals bij de drie paren van hoofdstuk 6 en 8.

**De enige knop die een foto heeft, is haar breedte.** Beslist op 7 september 2026
door de lector: alle vier gaan ze naar ongeveer 98 dpi, dus naar **132.0mm, 107.0mm,
98.0mm en 90.0mm**. Ze worden kleiner op papier en scherp in plaats van blokkerig, en
bij een DIMM slot of een PCIe slot is de vorm het enige dat de tekst ernaast vraagt.
Nagekeken in de gedrukte PDF: alle vier blijven ze ruim leesbaar, en de klemmen aan
de uiteinden van de DIMM slots zijn nog altijd te tellen. **Dit zijn de enige vier
maten in dit hoofdstuk die niet uit de Word komen.**

### De andere afbeeldingen

**Dit hoofdstuk telt 29 afbeeldingsplaatsingen over 28 bestanden**, en niet de 24 over
23 die vooraf geteld waren; de zes foto's van de tabel van 9.1 zaten er niet bij. Na
het schrappen van de zeven datasheetbladzijden en van de socketfoto blijven er 21
plaatsingen over 20 bestanden.

De tien van 9.1 tot 9.4 die niet onder de dpi-grens zitten drukken op 132, 133, 130,
162, 189, 183, 163, 155, 188 en 218 dpi, de foto bij vraag 4 van Test jezelf op
150 dpi op haar 86.5mm, en de zes datasheetbladzijden op 260 dpi op hun 152.0mm. Elke
afbeelding is opengedaan voor haar `alt` geschreven werd, en **een nieuwe import gooit
die alt-teksten weg.**

- **Drie zweven** (`wrapSquare`), en `IMPORT.md` meldt ze: image65 in 9.2 (de Raspberry
  Pi), image66 in 9.3 (de socket, hieronder geschrapt) en image72 in 9.4 (de
  vergelijkingstabel van drie panel pcs). Hun alinea blijft lopende tekst en ze dragen
  geen bijschrift uit de Word.
- **image67 staat twee keer in de Word, en de importer maakt er twee bestanden van.**
  Een keer in 9.3 op 160.0mm en een keer bij vraag 4 van Test jezelf op 86.5mm, en dat
  worden `syllabus-09-moederbord-10.png` en `-29.png`, byte voor byte gelijk. Regel 1
  van de contentcheck is daar tevreden mee, want elk bestand heeft precies een
  verwijzing; met een enkel bestand en twee verwijzingen zou ze dat ook zijn. De twee
  zijn zo gelaten, want dat is wat een herimport opnieuw schrijft. **De breedtes lopen
  wel uiteen**: de kopie in 9.3 is naar 132.0mm gegaan om boven de dpi-grens te komen en
  die bij vraag 4 stond op haar 86.5mm al op 150 dpi.
- **image58 in 9.1 is dezelfde foto als `img/moederbord-vormfactoren.jpg` in
  Labo Assemblage**, pixel voor pixel hetzelfde beeld, maar het ene is een `.png` uit
  de Word en het andere een `.jpg` uit de Brightspace-export. Dat is een vierde paar
  naast de drie van hoofdstuk 6 en 8, en het enige waarvan de twee bestanden **niet**
  byte voor byte gelijk zijn, omdat ze uit twee verschillende bronnen komen. Een eigen
  kopie per track blijft de afspraak; hier valt er niets gelijk te trekken, want het is
  al hetzelfde beeld.
- **image66, de socket, is geschrapt.** De foto droeg ronde merktekens van een
  fotobank over het hele beeld, en anders dan bij de twee watermerken van hoofdstuk 2
  en het AskVG-watermerk van hoofdstuk 3 draagt dat merkteken **geen leesbare naam**:
  er valt dus niet eens een bron bij te schrijven, en een fotobankwatermerk betekent
  dat het beeld van iemand is die ervoor betaald wil worden. Beslist op 7 september
  2026 door de lector: de figuur en `img/syllabus-09-moederbord-09.jpeg` gaan eruit, en
  **er komt een eigen foto uit het labo in de plaats zodra die er is.** Tot dan opent
  Processor -> socket met zijn eerste alinea.

  **Er ging geen tekst mee verloren.** De afbeelding zweefde (`wrapSquare`), dus haar
  alinea was gewone lopende tekst en er stond geen bijschrift bij, en geen enkele zin
  van 9.3 verwijst naar een figuur. In `img/` staat ook geen bruikbaar alternatief:
  `Labo/Assemblage/` heeft `processor-ryzen-3-4300g.jpg` en `moederbord-a520m-s2h.jpg`,
  maar geen opname van een open socket met de klem omhoog. **Een herimport zet de foto
  terug**, en dan staat ze er weer met haar watermerk.
- **image71 in 9.4 is een schermafdruk van een webshop**, met drie moederborden, hun
  prijs, een winkelwagenknop en "Morgen in huis" erbij. De rode pijlen die de socket, de
  vormfactor en het maximum geheugen aanwijzen, staan in het origineel. Ze is leesbaar
  op 159.4mm en blijft staan, maar **de prijzen verouderen** en er staat niet bij van
  welke winkel ze komt. Dat is minder erg dan image51 van hoofdstuk 6, dat om zijn
  YouTube-chroom onbruikbaar was, maar het is dezelfde soort bezwaar.
- **image72, de vergelijkingstabel van 9.4, is onderaan afgesneden**: de rij
  Hard disks/flash is de laatste die je ziet, en de tabel gaat in het origineel verder.
  Het is een schermafdruk van een Beckhoff-catalogus en ze draagt geen bron. Ze blijft
  staan, want wat er wel op staat (het scherm, de processor, het moederbord van 3,5
  duim, het geheugen) is precies wat de alinea ernaast zegt dat je moet vergelijken.

  **Op 9 september 2026 stond ze even op de worklijst van de hertekenbeslissing, en ze
  is er dezelfde dag weer afgehaald.** De redenering die haar erop zette was die van
  hoofdstuk 10: een tabel die alleen als afbeelding bestaat, typ je over zolang de
  omvang het toelaat, en tien rijen bij drie kolommen is klein genoeg. Het argument was
  bovendien te meten en het blijft waar: de tabel drukt op **82,3mm**, dus haar tekst
  staat er ongeveer **1,3mm** hoog tegen 2,5mm voor de lopende tekst, en dat leest niet
  goed.

  **Ze is er toch afgehaald, en de reden van de lector is inhoudelijk.** Dat je aan deze
  tabel ZIET dat ze uit een datasheet komt, met haar eigen kleuren, haar eigen
  koppenrij, het Engels en de ®- en ™-tekens van Beckhoff, is zelf een gegeven: het
  toont de student dat die cijfers echt zijn en niet door ons bedacht. Typ je ze over,
  dan wordt het onze tabel en verdwijnt dat. Dat verlies weegt zwaarder dan de
  leesbaarheidswinst.

  **En de rij had er nooit op mogen staan.** CLAUDE.md zondert onder diezelfde
  beslissing al uitdrukkelijk een AFGEDRUKTE BLADZIJDE uit, met de datasheets van
  Beckhoff als eerste voorbeeld, en dit IS er zo een. Dat staat nu ook bij de worklijst
  zelf, zodat niemand de rij er later opnieuw op zet.

  **Wat er wel open blijft, is de afsnijding.** De tabel loopt in het origineel door en
  we weten niet welke rijen er ontbreken. Overtypen zou dat gat niet gedicht hebben, dus
  het is geen argument voor of tegen; wat het wel is, is een reden om ooit de volle
  bladzijde uit de Beckhoff-catalogus op te halen, zoals 9.5 dat met de zes
  datasheetbladzijden van de CX-reeks al doet.

### De bladspiegel van dit hoofdstuk

Zeventien bladzijden, 73 tot en met 89, met de gedrukte 9.7 Oplossingen als laatste.
Nagerekend **na** de redactionele ronde, dus na de versmalde foto's, na het verplaatsen
van de vragen van 9.5, na de twee bijgeschreven alinea's van 9.1 en na het schrappen
van de socketfoto. De oude en de nieuwe PDF zijn bladzijde voor bladzijde vergeleken:
van de 72 bladzijden die de vorige telde verschilt er **een**, bladzijde 4, en dat is
de inhoudstafel zelf. Hoofdstuk 1 tot 8 zijn dus niet verschoven.

- **De datasheetbladzijden staan op 152.0mm en niet op de 160.0mm van de Word.** Op
  160.0mm is 1557 bij 2272 pixels precies 233mm hoog op een bladspiegel van 240mm, en
  dan past figuur plus bijschrift niet meer samen: Chrome negeert de
  `page-break-inside` die niet uit kan en het bijschrift belandt op de bladzijde na
  zijn figuur. Dat is letterlijk het geval van hoofdstuk 3, met dezelfde uitkomst.
  Nagekeken in de render: alle zes staan ze met hun bijschrift op hun eigen bladzijde.
- **Drie figuren volgen hun aankondiging over een bladovergang**, en daar is geen
  breedte voor te vinden. "In deze DIMM slots worden RAM modules geplaatst zoals je in
  onderstaande figuur kan zien" staat onderaan 77 en die figuur bovenaan 78; "In
  onderstaande afbeelding zie je een stukje van een moederbord" staat onderaan 78 en
  die figuur bovenaan 79; en de zwevende vergelijkingstabel van 9.4 staat bovenaan 80
  terwijl haar alinea onderaan 79 eindigt. Dat is het geval van hoofdstuk 7, en het is
  zo gelaten: de figuren zijn hier al tot op de dpi-grens versmald, en verder krimpen
  maakt ze onleesbaar zonder de overgang te winnen.
- **9.2 en 9.3 beginnen allebei op bladzijde 76**, en dat is het gevolg van de twee
  ingrepen samen: de twee bijgeschreven alinea's van 9.1 duwen 9.2 van 75 naar 76, en
  het wegvallen van de socketfoto trekt 9.3 op diezelfde bladzijde. In de versie ervoor
  liep 76 voor een derde leeg omdat "Processor -> socket" met zijn figuur er niet meer
  bij paste; die bladzijde is nu vol.

### Waar dit hoofdstuk en Labo Assemblage naast elkaar staan

Dit is de zwaarste overlap tot nu toe, zwaarder dan hoofdstuk 6 met Labo Partitioneren
en hoofdstuk 8 met Labo Virtualiseren. `Labo/Assemblage/Theorie/Componenten.html`
draagt secties met de ids `vormfactor`, `moederbord`, `processor`, `werkgeheugen`,
`opslag` en `voeding`, en behandelt ATX tegen Micro-ATX, de socket, de chipset, de
DIMM-slots en de PCIe-slots. Patroon 17: de twee tracks zeggen hetzelfde twee keer en
er linkt niets tussen. **Er is aan geen enkele labopagina iets veranderd.** Nagekeken
op tegenspraak, en dit kwam eruit.

- **De vormfactoren.** Zie hierboven. Dat was de enige echte tegenspraak, en de
  syllabus is de kant die rechtgezet is: mini ATX is Mini-ITX geworden, met het
  streepje dat het labo en de figuur van dit hoofdstuk allebei dragen. **De maten
  spreken elkaar niet tegen**: de syllabus zegt 30,5 op 24,4 cm voor Standard-ATX, het
  labo 305 × 244 mm. **De bijgeschreven alinea over de kast spreekt het labo niet
  tegen**: de syllabus zegt nu dat elk ATX bord in elke ATX kast past, het labo dat een
  ATX kast ook de kleinere borden opneemt en dat het omgekeerd niet werkt. Dat tweede is
  het scherpere van de twee, en er is aan die labopagina niets veranderd.
- **De socket en welke processor erop past. Geen tegenspraak.** Het labo zegt "de
  socket ... bepaalt welke processors op dit moederbord passen" en 9.3 zegt "De keuze
  van het moederbord bepaalt dus ook het merk en het type processor dat je moet
  kiezen". Dat is dezelfde richting. 9.4 zegt er de omgekeerde kant bij, "De processor
  zal dan bepalen welke socket er aanwezig moet zijn op het moederbord", en dat is niet
  in strijd: het is de volgorde waarin je koopt en niet wie wat bepaalt. Studievraag 3
  vooraan vraagt precies naar allebei de richtingen, en het hoofdstuk beantwoordt ze
  allebei.
- **De chipset staat in dit hoofdstuk nul keer**, nagekeken met grep. Het labo legt uit
  wat ze doet en zegt er uitdrukkelijk bij dat ze **niet** bepaalt welke processor past;
  de syllabus komt op dat onderwerp nergens uit. Dat is een gat en geen tegenspraak.
- **De DIMM-slots. Geen tegenspraak, wel twee helften.** 9.3 legt uit waar de naam
  vandaan komt (dual tegenover SIMM), dat DDR4 niet in een DDR5-slot past en wat SO-DIMM
  is. Het labo legt uit waarom de generaties niet in elkaars slot passen (de inkeping
  zit elders), wat dual channel is en in welke twee slots je twee modules zet. **Dual
  channel komt in de syllabus niet voor en SO-DIMM niet in het labo.**
- **De PCIe-slots. Geen tegenspraak, wel twee helften.** 9.3 geeft de geschiedenis, AGP
  naar PCI naar PCI Express, en zegt dat je op een industriële computer meestal genoeg
  hebt aan de grafische kaart in de processor. Het labo geeft de breedtes, x16 en x1, en
  welke kaart in welk slot gaat. **Het aantal lanes komt in de syllabus niet voor.**
- **De ingebouwde grafische kaart. Geen tegenspraak.** 9.3 zegt dat een recente
  processor er een heeft en dat die voor basistaken volstaat; het labo zegt dat het
  beeld dan van de processor komt en dat het scherm zwart blijft als de processor er
  geen heeft en er geen kaart in het x16-slot zit. Dat tweede staat niet in de syllabus.
- **De Raspberry Pi.** 9.2 en `Labo/Assemblage/` raken elkaar hier niet, maar hoofdstuk
  4 wel: dat noemt de Raspberry Pi al bij Embedded system, met dezelfde schrijfwijze
  sinds de ronde van 7 september 2026. De twee hoofdstukken zeggen nu allebei
  Raspberry Pi.

### Wat er in de tekst opviel, en op 7 september 2026 rechtgetrokken is

De tekst gaat er in principe letterlijk in, dus dit staat hier met wat er beslist is.
**Al deze correcties staan alleen in de HTML en een herimport draait ze terug.** Wat
hierboven al per beslissing beschreven staat (Raspberry Pi, mini ATX, vraag 3), staat
hier niet nog eens.

- **"c#" is "C#" geworden**, vier plaatsen: een in 9.2 en drie in 9.5, de twee
  bijgeschreven oplossingen inbegrepen. Hoofdstuk 4 schrijft in
  `IndustrieleComputers.html` al **C#**, dus de twee hoofdstukken van dezelfde syllabus
  spraken elkaar tegen over dezelfde naam. Dat is de regel van 7 september 2026, de
  schrijfwijze van de eigenaar, en Microsoft schrijft C#. Ook de blurb in
  `reference.js` is meegegaan.
- **"PCI express" is "PCI Express" geworden**, twee plaatsen: de kop van de derde
  Heading 3 van 9.3 en een opsommingsteken in 9.4. Dit hoofdstuk schrijft het zelf twaalf
  keer met een hoofdletter, dus het sprak zichzelf tegen op een letter. PCI-SIG schrijft
  PCI Express. Ook de blurb in `reference.js` is meegegaan. **Dit is de tweede kop die
  om een productnaam aangeraakt wordt**, na die van 9.2.
- **"Nvidia" is "NVIDIA" geworden**, een plaats in 9.3. Hoofdstuk 2 en
  `Labo/Virtualiseren/Theorie/SoftwareInDeGuest.html` schrijven allebei NVIDIA, en het
  bedrijf ook. Dezelfde regel.
- **"in tegenstelling to SIMM's" is "tot" geworden** in 9.3. Een tikfout, en de enige
  die rechtgezet is.

### De tabel van 9.1 kreeg een kopregel, en de gok van de importer is nagekeken

`IMPORT.md` meldde "tabel Control Cabinet kreeg GEEN kopregel (geen enkel signaal)" en
zette er een `data-geraden` op. Nagekeken in de bron: de rij met **Control Cabinet**,
**Panel PC** en **Embedded PC** staat **boven** de twee rijen foto's, en de rij met
**ATX**, **3.5 inch** en **PC104** eronder. De bovenste benoemt dus wel degelijk de
kolommen, en het is een `<thead>` geworden; het `data-geraden` is weg.

Dat is hetzelfde geval als de vergelijkingstabel van 6.1 en het spiegelbeeld van de
fototabel van 8.1, waar de benoemende rij juist **onder** de foto's stond en er dus
geen kopregel kwam. **De toets is waar de rij staat en niet wat ze bevat.**

### Wat er in de tekst opviel, en niet aangeraakt is

De tekst gaat er letterlijk in, dus dit staat hier en niet in de HTML.

- **"In de volgende hoofdstukken bespreken we kort hoe de processor, het werkgeheugen
  en de grafische kaart aangesloten worden"** in 9.3. Het zijn geen hoofdstukken maar de
  drie Heading 3's van diezelfde sectie, en ze volgen er meteen op.
- **"Zie ook het hoofdstuk Accelerated Processing Unit"** en **"Over de werking van DDR
  leer je meer in het hoofdstuk Random Access Memory"**, allebei in 9.3. Die twee
  hoofdstukken bestaan nog niet en worden geen links, om dezelfde reden als de twee
  verwijzingen van 8.2: van de syllabus is de PDF het enige dat de student ziet.
- **"Ze heten Duals omdat ze in tegenstelling tot SIMM's aan beide kanten van het
  printplaatje aansluitpunten hebben."** Duals met een hoofdletter en in het meervoud,
  en `printplaatje` als verkleinwoord, wat patroon 12 zou zijn als deze tekst hier
  geschreven was.
- **"Dat komt omdat ieder type processor zoals Core 3, 5, 7, 9, Ryzen... over andere
  eigenschappen beschikken"**, met een meervoud bij een enkelvoudig onderwerp. In
  diezelfde zin staat **Core 3**, en Intel begint zijn reeks bij Core i3.
- **"Voor een PLC kan je een I/O eiland kopen die overweg kan"** in 9.2, met die waar
  dat hoort.
- **"Er zijn hier echter wel enkele opmerkingen die we moeten maken"** in 9.2, met de
  we-vorm die SCHRIJFSTIJL.md voor eigen tekst naar de je-vorm stuurt. Dat geldt niet
  voor de brontekst.
- **"Let dus altijd goed op als je een behuizing koopt!"** in 9.2, het enige uitroepteken
  van het hoofdstuk.
- **"2GB RAM, 4GB RAM"** in 9.2 schrijft de eenheid vast aan het getal, terwijl 9.3
  "8 GB DDR4" met een spatie schrijft.
- **"het aantal PCI Express slots:"** in 9.4 eindigt op een dubbele punt waar de vier
  andere opsommingstekens een kommapunt dragen.
- **"Maar je hoeft je geen zorgen te maken als alles compatibel is met elkaar"** in 9.4,
  waar of hoort te staan, dezelfde vaste vorm als de drie gevallen in 3.2.
- **"een uit de kluiten gewassen grafische kaart"** in 9.3, beeldspraak die patroon 15
  zou raken als deze tekst hier geschreven was.
- **De pijl in de drie koppen van 9.3** staat in de Word als `->` en niet als een
  echt pijltje. Dat is opmaak en is zo gebleven.
- **9.4 heet "Hoe kies je een (industrieel) moederbord?"**, met haakjes in de
  sectietitel. Die titel staat zo in de inhoudstafel; de `name` in `reference.js` is
  "Hoe kies je een moederbord", want dat is een knoptekst op de hub en geen gedrukte
  titel.
- **Studievraag 1 vooraan stelt twee vragen in een**, "Hoe wordt de layout van een
  moederbord bepaald? Wat zijn de nadelen van ATX?", en alle drie de studievragen zijn
  echte vragen met een vraagteken. De imperatief-met-vraagteken van hoofdstuk 1, 3, 4, 7
  en 8 komt hier niet voor.

## Hoofdstuk 10, Informatievoorstelling

**Dit hoofdstuk heeft geen sectie Studievragen achteraan**, en er is dus geen
`TestJezelf.html`. Het is het derde hoofdstuk zonder, na hoofdstuk 2 en 7. Het kader
Studievragen vooraan staat er wel gewoon, samen met de Kernpunten op `Overzicht.html`;
dat is het kader dat aankondigt wat je moet kunnen. Of elk hoofdstuk er een hoort te
krijgen, wordt beslist na hoofdstuk 16 en in een keer, niet hier.

**Zes secties, 45 alinea's, negen tabellen en zeven gedrukte bladzijden, 91 tot en met
97.** Geen enkele Heading 3 of 4, dus elke pagina draagt alleen haar eigen h1, en er is
geen lege kop zoals hoofdstuk 9 er een had. Van die negen tabellen zijn er twee de kaders
en zeven de lege invulruimtes onder de oefeningen: er kwam dus geen enkele gegevenstabel
uit de Word en de importer hoefde nergens een kopregel te raden. `IMPORT.md` meldt voor
dit hoofdstuk dan ook geen enkele `data-geraden`.

### Het hoofdstuk sprak hoofdstuk 6 tegen over wat een kilobyte is

Het kader hier zegt met zoveel woorden: "Een kilobit of kilobyte zijn 1000 bits of 1000
bytes. Een kibibit of kibibyte zijn 1024 bits of 1024 bytes." 10.4 bouwt daar een hele
sectie op, met een tabel die de fout per eenheid uitrekent.
`Theorie/Syllabus/Theorie/Bestandssystemen/Clusters.html` schreef "Standaard wordt er 4096
bytes of 4 kB gerekend" en rekende in dezelfde sectie met een clustergrootte van 64 kB
waarvan bij een bestand van 412 bytes zo'n 63 kB verloren gaat. Dat zijn machten van twee
met een kilo-etiket, dus precies wat dit hoofdstuk fout noemt.

Dat is het geval van hoofdstuk 4 tegen 7 (Windows 10) en van hoofdstuk 5 tegen 8 (de
emulatie): twee hoofdstukken van dezelfde syllabus die elkaar tegenspreken over hetzelfde
feit. Beslist op 7 september 2026 door de lector: **de cursusinhoud moet juist zijn en al
de rest schikt zich daarnaar.** Hoofdstuk 6 is dus de kant die rechtgezet is, want
hoofdstuk 10 heeft gelijk.

**Drie plaatsen in `Clusters.html`, en alleen de eenheid is aangeraakt:**

| Was | Is | Waarom |
|---|---|---|
| 4096 bytes of 4 kB | 4096 bytes of 4 KiB | 4096 bytes is 4 x 1024, dus 4 KiB en niet 4 kB |
| een clustergrootte van 64 kB | een clustergrootte van 64 KiB | een clustergrootte is altijd een macht van twee, dus 65 536 bytes |
| zo'n 63 kB aan opslagruimte | zo'n 63 KiB aan opslagruimte | volgt uit de vorige: 65 536 min 412 is 65 124, en dat is 63,6 KiB |

**Er valt geen enkel getal weg**, alleen de eenheid erachter verandert. De rekensom in die
alinea klopte al en klopt nog: 63 blijft 63, want ook 64 000 min 412 komt op ongeveer 63
uit. Het is de eerste van de drie die de zaak beslist, want 4096 bytes is onmiskenbaar
4 KiB.

**De rest van hoofdstuk 6 stond al goed**, en dat is met grep nagekeken: `EiB` staat er
twee keer, in de maximale partitiegrootte van EXT en in de maximale bestandsgrootte van
NTFS. Het hoofdstuk was dus niet consequent fout maar alleen op die ene pagina, en het is
nu inwendig consequent. **Een herimport van hoofdstuk 6 draait deze drie terug.**

**Aan `Labo/Partitioneren/` is niets veranderd, en dat is patroon 17.**
`Theorie/Spiekblad.html` en `Theorie/Bestandssystemen.html` dragen 2 TB, 4 GB, 256 TB en
16 TB, en dat zijn stuk voor stuk machten van twee met een kilo-etiket. Ze staan er zo
omdat elk bestandssysteem zijn grenzen zo adverteert, en de labotrack is onafhankelijk van
de theorietrack. Genoteerd en niet aangeraakt.

### Het gat: het woord kibibyte stond nergens in de lopende tekst

Sectie 10.4 heet Kibi versus kilo, het kader vooraan zegt wat een kibibyte is en oefening
4 vraagt "Hoeveel bytes zitten er in een kibibyte?" Nagekeken met grep in de lopende tekst
van dit hoofdstuk: **het woord kibi komt er nul keer in voor.** De negen alinea's van 10.4
schrijven alleen kilobyte en zeggen nergens dat 1024 bytes een eigen naam heeft. De
student die 10.4 las, kon oefening 4 niet beantwoorden.

Dat is het gat van de wet van Moore in hoofdstuk 1, van de bottleneck in hoofdstuk 5, van
het partitieschema in hoofdstuk 6, van realtime in hoofdstuk 7 en van de nadelen van ATX
in hoofdstuk 9, en de uitkomst is dezelfde. Beslist op 7 september 2026 door de lector: er
komt tekst bij in plaats van dat de oefening onbeantwoord blijft.

**Het werd een alinea, en ze staat achter de zin over 1024 byte en niet achteraan.** Ze
krijgt geen eigen kop, want ze past in de bestaande gedachtegang; dat is de lijn van
hoofdstuk 1, 5 en 6 en niet die van hoofdstuk 7, waar de bijgeschreven tekst wel een kop
kreeg. **Deze alinea staat alleen in de HTML en een herimport gooit ze weg:**

> Voor die 1024 byte bestaat er een eigen naam: een kibibyte, afgekort KiB. Daarboven gaat
> het net zo verder: 1024 kibibyte is een mebibyte (MiB), 1024 mebibyte een gibibyte (GiB)
> en 1024 gibibyte een tebibyte (TiB). Wie 1024 bedoelt, schrijft dus KiB, MiB, GiB of
> TiB, en wie 1000 bedoelt kB, MB, GB of TB. Windows houdt zich daar niet aan en toont die
> getallen van 1024 nog altijd als kB, MB en GB.

**Dit is ook de tekst waar de correctie in hoofdstuk 6 naartoe wijst.** Zonder haar zou
`Clusters.html` "4 KiB" schrijven zonder dat de syllabus dat woord ergens invoert.

### De kibi-tabel is overgetypt, en ze rekende verkeerd

**image88 bestond alleen als afbeelding**, en alinea [1007] verwijst er met zoveel woorden
naar: "In onderstaande tabel zie je duidelijk dat, hoe groter de capaciteit, hoe groter de
procentuele fout wordt". Het is een gegevenstabel van vijf rijen en zeven kolommen
(Eenheid, HD fabrikant base 10, Windows base 2, Ratio, %, HD, Windows), en die typ je
gewoon over. Dat is het geval van de clustertabel van hoofdstuk 6, die als lopende tekst
met pijpen binnenkwam, en van de vergelijkingstabel van 6.1. Beslist op 7 september 2026
door de lector.

**Bij het overtypen bleek de kolom Windows in drie van de vijf rijen fout te rekenen.** De
tabel neemt telkens de ratio van dezelfde rij maal 1000 in plaats van het aantal bytes
door 1024 te delen. De kolommen base 10, base 2, Ratio en % kloppen alle vier wel, en de
rijen B en kB kloppen ook.

| Rij | Stond er | Staat er nu | Waarop het steunt |
|---|---|---|---|
| MB | 953 kilo byte | 976 kilo byte | 1 000 000 / 1024 = 976,56 |
| GB | 931 Mega byte | 953 Mega byte | 1 000 000 000 / 1024² = 953,67 |
| TB | 9,09 Giga byte | 931 Giga byte | 1 000 000 000 000 / 1024³ = 931,32 |

Die laatste was dubbel fout: de eenheid klopte, maar het getal was de ratio 0,909 met een
verschoven komma. Beslist op 7 september 2026 door de lector: **de tabel wordt overgetypt
en rechtgezet.** Alleen die drie getallen zijn veranderd; de eenheden erachter stonden al
goed en zijn niet aangeraakt, en de schrijfwijze van de bron blijft ("1kB" zonder spatie,
"kilo byte" los, Mega en Giga met een hoofdletter).

**Dat dit ertoe doet, blijkt uit oefening 7**, die vraagt hoeveel GB een schijf van 1 TB is.
De enige plaats in het hoofdstuk waar dat getal stond, gaf 9,09 GB.

**`img/syllabus-10-informatievoorstelling-03.png` is geschrapt**, want niets verwijst er
nog naar en regel 1 van de contentcheck valt over een ongebruikte afbeelding. **Een
herimport zet ze terug**, met de fout erin, en dan faalt regel 1 tot ze opnieuw weg is.

### De ASCII-tabel blijft een afbeelding

**image87 is de volledige ASCII-tabel**, 128 rijen in drie kolomgroepen naast elkaar, met
per teken de decimale, hexadecimale, binaire en octale waarde en het teken zelf. Ze is
1261 bij 1024 pixels op 160.0mm, dus 200 dpi, ze draagt geen watermerk en de tabel zelf is
schoon: geen chroom, geen bijgesneden rand. Beslist op 7 september 2026 door de lector:
**ze blijft een afbeelding.** 128 rijen overtypen kost veel markup en maakt de gedrukte
bladspiegel onvoorspelbaar, en de tabel is op 160.0mm ruim leesbaar.

**Dat laatste is nagekeken in de gedrukte PDF, en het moest**, want oefening 5 laat de
student er drie letters in opzoeken. De kolom Char en de kolom Binary zijn allebei
leesbaar; de e, de L en de m staan alle drie in het beeld.

De tekst van de tabel is in het Engels ([NULL], [BELL], [LINE FEED] en zo voort) en dat is
in een Nederlandse tekst hetzelfde bezwaar als bij de MBR van hoofdstuk 3 en bij de
defragmentatie van hoofdstuk 6. **Hier weegt het niet op tegen het hertekenen**: die twee
waren tekeningen van tien tot twintig elementen, dit zijn 128 rijen waarvan de Engelse
namen bovendien de officiële namen van de stuurtekens zijn.

### De bestandsnaam van 10.5

`pascal()` maakt van de kop "kbps vs kBps" de naam `KbpsVsKbps.html`, en daarmee is precies
het onderscheid weg dat de sectie behandelt: de kleine b tegen de grote B. Het botst met
niets, dus het is geen fout, maar het is wel het geval van `DeUefiOmgeving.html` in
hoofdstuk 3: een naam die je in een grep niet terugvindt als wat ze is.

Beslist op 7 september 2026 door de lector: de pagina heet **`BitOfByte.html`**, naar het
onderscheid zelf. **De kop op de pagina blijft "kbps vs kBps"**, want dat is de tekst uit
de Word en dat is ook wat er in de inhoudstafel staat, en de `name` in `reference.js`
blijft dat ook, want een knoptekst op de hub mag het onderscheid gewoon dragen. De id is
`informatievoorstelling-kbps-kbps`. Dit is de tweede bestandsnaam in de syllabus die niet
`pascal()` van de kop is.

### De negen oefeningen van 10.6

**10.6 Oefeningen houdt haar naam**, zoals de regel bij hoofdstuk 2 zegt: een sectie die
halverwege Oefening of Oefeningen heet, houdt haar naam en krijgt wel dezelfde
vragenbehandeling. Ze is met de hand een `ol class="vragen"` geworden en de pagina heeft
met de hand `oplossingen.js` onder `back-link.js` gekregen; de importer doet geen van
beide.

**De negen vragen zijn van twee soorten door elkaar**, en dat is nieuw: zeven open vragen
met invulruimte en een `<div class="oplossing">`, en twee meerkeuzevragen met een
`<li class="juist">`. Elk ander hoofdstuk had ofwel alleen meerkeuze ofwel alleen open
vragen in een lijst.

**De nummering loopt zonder `start=` van 1 tot 9.** De drie mogelijkheden onder vraag 8 en
9 staan in de Word op `ilvl=0`, hetzelfde inspringniveau als de vragen zelf, alleen met een
eigen `numId` (32 en 33). Nagekeken wat de importer daarvan maakt: hij zet ze als een
`<ul>` **binnen** de `<li>` van hun vraag, precies zoals bij een echt geneste lijst, dus de
genummerde lijst loopt gewoon door en er valt niets aan te sluiten. Regel 14 is daar
tevreden mee.

| Vraag | Antwoord | Waarop het steunt |
|---|---|---|
| 1 Bits in een byte | 8 bits | 10.2, "Een byte (of octet) zijn 8 bits" |
| 2 Bytes in een octet | 1 byte | 10.2, dezelfde zin: octet en byte zijn twee namen voor hetzelfde |
| 3 Bits in een kilobyte | 8000 bits | het kader, een kilobyte is 1000 bytes, en 10.2, een byte is 8 bits |
| 4 Bytes in een kibibyte | 1024 bytes | het kader, en sinds vandaag ook de bijgeschreven alinea in 10.4 |
| 5 De tekst eLm in ASCII | 0110 0101 0100 1100 0110 1101 | image87: e is 101, L is 76, m is 109; de vorm van 8 bits in groepjes van 4 komt uit 10.3, dat de hoofdletter A als 0100 0001 schrijft |
| 6 Een SD kaart van 8GB | minder, ongeveer 7,45 GB | 10.4 en de tabel: 8 miljard bytes door 1024³, een verschil van 6,87% |
| 7 1 TB in GB | 1000 GB volgens de fabrikant, 931 GB in Windows | de rechtgezette tabel van 10.4; zie hieronder |
| 8 De transfersnelheid van deze harde schijf | b, Mega byte per seconde | de afbeelding zegt 3300 MB/s en 3500 MB/s, met een hoofdletter B |
| 9 De downloadsnelheid van deze verbinding | a, Mega bit per seconde | de afbeelding zegt Mbps, met een kleine b |

**Vraag 8 en 9 hebben elk precies een juist antwoord, en dat is nageteld nadat de twee
afbeeldingen opengedaan zijn.** Zonder het plaatje is geen van de twee te beantwoorden en
met het plaatje is er telkens maar een antwoord. Het probleem van hoofdstuk 3, waar vier
van de vijf mogelijkheden juist waren, speelt hier dus niet, en er hoefde geen enkele vraag
omgekeerd of open gemaakt te worden.

**Vraag 7 was dubbelzinnig, en de vraagzin is aangescherpt.** "Je hebt een harde schijf van
1 TB gekocht. Hoeveel GB is dat?" heeft twee verdedigbare antwoorden, 1000 GB volgens de
fabrikant en 931 GB zoals Windows het toont, en de hele sectie ervoor gaat er juist over
dat die twee niet hetzelfde zijn. Beslist op 7 september 2026 door de lector: **de vraag
vraagt nu allebei.** Ze luidt "Hoeveel GB is dat volgens de fabrikant, en hoeveel toont
Windows?" en draagt twee invulregels. Zo toetst ze precies wat 10.4 uitlegt in plaats van
de student te laten gokken welke van de twee bedoeld is. **De vraagzin staat alleen in de
HTML en een herimport draait ze terug.**

**Een invulregel per ding dat het antwoord telt**, zoals de regel bij hoofdstuk 3 zegt.
Zes van de zeven open antwoorden tellen een ding en dragen dus een regel; vraag 7 telt er
twee en draagt er twee. **Vraag 5 houdt de tabel van drie kolommen die de Word haar geeft**,
een per letter, en dat is precies de bedoeling: e, L en m.

**De zeven oplossingen zijn hier bepaald en staan nergens in de Word.** Zonder ze drukt het
hele hoofdstuk geen Oplossingen.

### De vijf afbeeldingen

**Geen enkele zit onder de dpi-grens van 98 die hoofdstuk 3 vastgelegd heeft**, en er is
dus geen enkele kandidaat om te versmallen of te hertekenen. Dat is na hoofdstuk 9, waar er
vier onder zaten, een opluchting. De vijf drukken op 152, 200, 125, 143 en 543 dpi. Elke
afbeelding is opengedaan voor haar `alt` geschreven werd, en **een nieuwe import gooit die
alt-teksten weg.**

- **Drie zweven** (`wrapSquare`): image86 in 10.1, image89 bij vraag 8 en image90 bij vraag
  9. Hun alinea blijft lopende tekst en ze dragen geen bijschrift uit de Word; `IMPORT.md`
  meldt de eerste als zwevend en de twee andere onder hun eigen melding, want die zet de
  importer netjes binnen de `<li>` van hun vraag, zoals de foto bij vraag 4 van hoofdstuk 9.
- **image86 is een gescande boekfiguur in grijstinten**, een signaal dat van 0V naar 5V
  klimt en terugvalt, met stippellijnen, een pijl met "Fout-gebied" ernaast en op de tijdas
  de bits 0, 1, 0. Ze staat in het Nederlands en draagt geen watermerk, en op 152 dpi
  stoort de korrel niet, dus hier stond eerst dat er geen reden was om ze te hertekenen.
  **Ze is op 7 september 2026 alsnog hertekend**, op vraag van de lector; zie hieronder.
- **image89 is een schermafdruk van een webshop met een prijs erop**, een Samsung 970 EVO
  PLUS M.2 1TB met sterren, 118 reviews, 178,95 en twee snelheden. Dat is het geval van
  image71 van hoofdstuk 9, en de uitkomst is dezelfde: **ze blijft staan.** De prijs
  veroudert en er staat geen bron bij, maar wat de vraag ernaast nodig heeft zijn de twee
  regels 3300 MB/s en 3500 MB/s, en die verouderen niet. **De regel van hoofdstuk 9 speelt
  hier niet**: een prijs of een productstatus mag geen argument in een oplossing worden, en
  dat is ze hier ook niet, want de vraag gaat over de eenheid en niet over het toestel.
- **image90 is de enige donkere afbeelding in de hele syllabus.** Een snelheidsmeter op een
  bijna zwarte achtergrond, en op papier is dat een vlak van 70,2 bij ongeveer 47mm dat
  volloopt met inkt terwijl elke andere figuur hier op wit staat. Nagekeken in de gedrukte
  PDF: **het leest, en het slaat niet door.** Wat de vraag ernaast nodig heeft is het woord
  **Mbps** in het midden van de meter, en dat is grijs op donkerblauw en daarmee het minst
  contrastrijke ding op de bladzijde. Op 543 dpi is de breedte geen knop die iets zou
  oplossen, dus ze staat op de 70.2mm van de Word. **Kijk het na op een echte afdruk**: valt
  Mbps daar dicht, dan is vraag 9 niet te beantwoorden en is een bredere versie of een
  eigen tekening de uitweg.

### De bladspiegel van dit hoofdstuk

Zeven bladzijden, 91 tot en met 97, met de gedrukte 10.7 Oplossingen als laatste.
Nagerekend **na** de redactionele ronde, dus na de bijgeschreven alinea van 10.4, na de
overgetypte tabel en na het aanscherpen van vraag 7. De inhoudstafel van de oude en de
nieuwe PDF zijn naast elkaar gelegd: **elk hoofdstuk van 1 tot 9 is precies een bladzijde
opgeschoven**, en dat is de inhoudstafel zelf, die van vier op vijf bladzijden gekomen is.
Er is dus verder niets verschoven, en dat is wat je na hoofdstuk 9 ook zag.

- **De ASCII-tabel past ruim.** Op 160.0mm is ze 129,9mm hoog, ze draagt geen bijschrift, en
  ze staat samen met de drie alinea's van 10.3 en de eerste alinea van 10.4 op bladzijde 93.
  De 240mm-grens van hoofdstuk 3 komt hier niet in zicht en de breedte hoefde dus geen knop
  te zijn.
- **De overgetypte tabel van 10.4 staat op een bladzijde**, samen met de negen alinea's van
  die sectie en de kop van 10.5. Dat is precies wat het overtypen oplevert bovenop de
  correctie: een tabel breekt over een bladovergang als het moet, een afbeelding niet.
- **De negen vragen van 10.6 staan op twee bladzijden**, 1 tot 7 op 95 en 8 en 9 op 96.
  **Vraag 8 en 9 blijven elk heel met hun figuur**, zonder dat er een `.vragen-bij-figuur`
  aan te pas komt: de figuur staat **binnen** de `<li>` en `ol.vragen > li` breekt sinds
  hoofdstuk 2 niet meer over een bladovergang. Dat is hetzelfde geval als vraag 4 van
  hoofdstuk 9. De lege ruimte onder vraag 9 is voor de student plaats om te schrijven.

### Waar dit hoofdstuk en de rest van dit vak naast elkaar staan

**Geen enkel labo behandelt informatievoorstelling**, dus de vergelijking met de labotrack
levert hier weinig op. Waar dit hoofdstuk wel tegenaan schuurt zijn twee hoofdstukken van de
syllabus zelf, en die zijn er dus naast gelegd op tegenspraak.

- **Hoofdstuk 6, Bestandssystemen. Een echte tegenspraak, en ze is rechtgezet.** Zie
  hierboven.
- **Hoofdstuk 1, Generatie 5: quantumcomputers. Geen tegenspraak.** 10.2 sluit af met "Een
  qubit kan ofwel 0 of 1 zijn maar ook 0 en 1 tegelijkertijd" en 1.6 zegt "Een qubit kan
  ofwel de waarde 0, ofwel de waarde 1 maar ook zowel de waarde 0 als 1 hebben op hetzelfde
  moment". Dat is dezelfde zin, twee keer. Hoofdstuk 1 gaat verder en voert de
  quantumsuperpositie in, de kat van Schrödinger en het feit dat de toestand vastklikt zodra
  je hem uitleest; 10.2 zegt daar niets over en spreekt het dus ook niet tegen. Wat wel
  scheef stond is de schrijfwijze, zie hieronder.
- **Hoofdstuk 11 heet Harde schijf en komt hierna.** 10.4 gaat over wat een fabrikant van
  opslagruimte adverteert, dus die twee gaan elkaar raken. **Wat hier vastligt en hoofdstuk
  11 dus niet mag tegenspreken:** een kilobyte is 1000 bytes en een kibibyte 1024, en wie
  1024 bedoelt schrijft KiB, MiB, GiB of TiB. Een schijf van 1 TB draagt 1 000 000 000 000
  bytes en Windows toont daar 931 GB van. Het verschil is een eenheid en geen capaciteit,
  en het loopt op van 2,34% bij kB tot 9,05% bij TB. Komt er in hoofdstuk 11 een
  schijfgrootte in kB, MB, GB of TB voor die eigenlijk een macht van twee is, dan is dat
  hetzelfde geval als `Clusters.html` hierboven.

### Wat er in de tekst opviel, en op 7 september 2026 rechtgetrokken is

De tekst gaat er in principe letterlijk in, dus dit staat hier met wat er beslist is. **Al
deze correcties staan alleen in de HTML en een herimport draait ze terug.** Wat hierboven al
per beslissing beschreven staat (de bijgeschreven alinea, de tabel, vraag 7), staat hier
niet nog eens.

- **"quantum computers" is "quantumcomputers" geworden**, een plaats in 10.2. Hoofdstuk 1
  heeft die keuze al gemaakt en er staat bij dat het woord in de rest van de Word nergens
  voorkwam; dat klopte tot dit hoofdstuk. De twee hoofdstukken schrijven het nu allebei
  aaneen. In de Word stond het bovendien als twee `<strong>`-blokken naast elkaar
  (`quantum` en ` computers`), dus het is nu ook een enkel `<strong>`.

### Wat er in de tekst opviel, en niet aangeraakt is

De tekst gaat er letterlijk in, dus dit staat hier en niet in de HTML.

- **Het kernpunt "De eenheden zijn als volgt: kilo, Mega, Giga, Tera, Peta."** Dat zijn
  voorvoegsels en geen eenheden, en drie van de vier dragen een hoofdletter waar het
  Nederlands ze klein schrijft. Het kernpunt erboven zegt wel "Een kilo schrijf je altijd
  met een klein letter", dus de hoofdletters lijken hier het **symbool** te bedoelen (k
  tegen M, G, T, P) en niet het woord. Dat is een verdedigbare bedoeling en ze is niet
  aangeraakt.
- **De overgetypte tabel houdt diezelfde schrijfwijze**, "kilo byte" los en "Mega byte" en
  "Giga byte" met een hoofdletter, en "1kB" en "1MB" zonder spatie in de kolom HD. Dat is
  wat op de afbeelding stond, en alleen de drie foute getallen zijn veranderd.
- **De decimale punt.** Het hoofdstuk schrijft "14.8 GB", "9.76 kilobyte", "0.4 V" en
  "2.4 V" met een punt, terwijl de tabel ernaast komma's gebruikt en het Nederlands dat ook
  doet. Zo staat het in de Word.
- **"8GB" in oefening 6** schrijft de eenheid vast aan het getal, terwijl 10.4 "16 GigaByte"
  met een spatie schrijft, en dat laatste zet byte dan weer met een hoofdletter midden in
  het woord. Dezelfde soort inconsistentie als "2GB RAM" tegen "8 GB DDR4" in hoofdstuk 9.
- **"een SD kaartje"** in oefening 6, een verkleinwoord dat patroon 12 zou raken als deze
  tekst hier geschreven was. 10.4 schrijft in dezelfde betekenis "SD kaart".
- **"De transfersnelheid (lees / schrijfsnelheid van deze harde schijf wordt uitgedrukt in
  ..."** in oefening 8 opent een haakje dat nooit sluit.
- **"of ander opslagmedia"** in 10.4, met een meervoud achter een enkelvoudig lidwoord.
- **"Omdat die interpretatie over de hele wereld dezelfde zou zijn maakt men gebruik van
  afspraken"** in 10.3, waar Opdat hoort te staan.
- **"aanziet Microsoft een kilobyte nog steeds als"** in 10.4, waar beschouwt als hoort te
  staan; dezelfde zin schrijft "aanzien als" nog een tweede keer.
- **"Beiden hebben echter hetzelfde aantal bytes"** in 10.4, met de vorm voor personen.
- **"Gezien de opslagruimte toen beperkt was"** in 10.4, met gezien als voegwoord.
- **"men"** staat vier keer in dit hoofdstuk (10.3 twee keer, 10.4 twee keer), de vorm die
  SCHRIJFSTIJL.md voor eigen tekst naar de je-vorm stuurt. Dat geldt niet voor de brontekst.
- **De ellipsen** in 10.2 ("In groepjes van 4, 8, 16, ... ."), in 10.3 en in oefening 9 zijn
  in de Word het teken en geen drie punten, terwijl oefening 8 wel drie losse punten
  schrijft. Dat is opmaak en is zo gebleven.

## Hoofdstuk 11, Harde schijf

**De sectie Studievragen achteraan heet hier Test jezelf**, zoals in hoofdstuk 1,
3, 4, 5, 6, 8 en 9. Het kader Studievragen vooraan houdt zijn eigen naam en staat
samen met de Kernpunten op `Overzicht.html`. De pagina heet `TestJezelf.html`; de
importer schreef `Studievragen.html`.

**Zestien secties, twintig Heading 3's, 269 alinea's, 18 tabellen en 44
afbeeldingsplaatsingen, en vijfenveertig gedrukte bladzijden, 98 tot en met 142.**
Dat is ruim het dubbele van hoofdstuk 9, dat tot nu toe het grootste was. Geen
enkele Heading 4, dus de tak die hoofdstuk 7 voor het eerst gebruikte komt hier
niet in beeld.

### De import liet vier afbeeldingen vallen, en meldde er geen enkele

Dit is de zwaarste vondst van dit hoofdstuk en ze is met de hand rechtgezet.
`import-syllabus.py` schreef 38 bestanden waar de Word er 44 plaatst, en het
verschil kwam nergens in `IMPORT.md` terecht. **Een herimport laat ze opnieuw
vallen**, want de importer is niet aangepast.

- **De QR-code bij 11.4 hing aan de kop van de sectie.** In de Word zweeft ze
  (`wrapSquare`) naast de Heading 2 zelf. `verwerk()` snijdt die kop eraf
  (`inhoud[i + 1:eind]`) voor `renderen()` iets ziet, dus de afbeelding wordt niet
  eens geschreven. **Ze bevat exact `https://www.youtube.com/watch?v=kdmLvl1n82U`**,
  nagekeken door ze te decoderen, en ze staat nu terug als
  `img/syllabus-11-qr-video.png`. Zie hieronder bij de twee adressen waarom dat
  ertoe doet.
- **De drie tekeningen van vraag 5 zaten in de tabel eronder.** De Word zet ze in
  de eerste rij van een tabel van 2 bij 3, met de invulruimte in de tweede rij.
  De importer herkende die tabel als een lege tabel, schreef er invulruimte voor in
  de plaats en gooide de drie afbeeldingen weg. Ze heten nu
  `img/syllabus-11-track.png`, `-disk-sector.png` en `-track-sector.png`, naar wat
  ze tonen: een volledige ring, een taartpunt van de as tot de rand, en het vakje
  waar die twee elkaar kruisen. **Zonder hen is vraag 5 onbeantwoordbaar** en er is
  niets dat het meldt: de bestanden zijn nooit geschreven, dus regel 16 van de
  contentcheck ziet niets.
- **De lintkabel van 11.7 hing aan de Heading 3 Kabels.** Die wordt wel geschreven
  (`syllabus-11-harde-schijf-16.png`) maar niet geplaatst, want `renderen()` maakt
  van een kop een `<h2>` en laat de afbeelding erin vallen. Dat is het enige geval
  dat de contentcheck wel vangt: regel 16 viel over het weesbestand. Ze staat nu
  bovenaan de sectie Kabels.

**Waar je op moet letten is dus een zwevende afbeelding die aan een KOP hangt en
een afbeelding die in een TABELCEL zit.** Bij een kop van niveau 1 of 2 verdwijnt
ze spoorloos, bij een kop van niveau 3 blijft er een weesbestand achter, en in een
tabelcel verdwijnt ze zodra `lege_kolommen()` die tabel als invulruimte leest. Tel
na de import de `a:blip` in het hoofdstuk tegen wat er in `img/` staat; loopt dat
niet gelijk, dan is er iets weg.

### Een element dat breder is dan de bladspiegel krimpt het HELE document

**Dit is de belangrijkste vondst voor de bladspiegel en ze geldt vanaf nu voor elk
hoofdstuk.** Bij de eerste export verschoven hoofdstuk 1 tot 10 met 1 tot 4
bladzijden naar voren, ongelijk verdeeld, terwijl er aan geen van die hoofdstukken
iets veranderd was. Opnieuw drukken met alleen hoofdstuk 1 tot 10 gaf bladzijde
voor bladzijde precies de PDF die er al stond, dus de export is reproduceerbaar en
de oorzaak lag in hoofdstuk 11.

Wat er gebeurde: **Chrome krimpt bij `--print-to-pdf` het volledige document zodra
de inhoud breder is dan de bladspiegel.** De schaal staat in de PDF zelf, als de
eerste `cm` van elke bladzijde: `3.1249194` is de normale maat (0,75, de omrekening
van CSS-pixels naar punten) en er stond `2.8672137`, oftewel 91,75%. Alles werd
8,25% kleiner, tekst en afbeeldingen samen, er paste meer op een blad, en elk
hoofdstuk kroop een paar bladzijden naar voren.

De boosdoener was de invultabel van vraag 1 van 11.4. `ol > li` springt in
`syllabus.css` **14,7mm** in, dus een tabel binnen een vraag heeft 145,4mm en geen
160,1mm. De kolombreedtes uit de Word tellen op tot 159,8mm, en `table-layout:
fixed` maakt een tabel breder in plaats van de kolommen te knijpen. De vier kolommen
staan nu op 6,6 / 64,4 / 6,7 / 64,3mm, samen 142,0mm, **dezelfde maat die 2.1
Hardware herkennen al gebruikt**. Dat zijn de enige vier kolombreedtes in dit
hoofdstuk die niet uit de Word komen.

**Kijk het na met de schaalfactor en niet met het oog.** In de PDF staat op elke
bladzijde `q\n<schaal> 0 0 <schaal> ... cm`; is die niet overal `3.1249194`, dan
overloopt er ergens iets. Bestaande hoofdstukken zijn nagekeken: de vijf andere
`invulkolom`-tabellen in de syllabus staan op 142,0mm en overlopen niet, dus de
gedrukte PDF was tot nu toe altijd op ware grootte.

### De acht beslissingen van dit hoofdstuk

Alle acht zijn ze op 7 september 2026 door de lector genomen. **Elke correctie
hieronder staat alleen in de HTML en een herimport draait ze terug.**

**1. "130Mbps" voor een harde schijf is "130 MB/s" geworden.** H3 Performantie onder
11.3 schreef "In de buitenste zones wordt een snelheid van zo'n 130Mbps gehaald".
10.5 zegt dat transfersnelheid binnen een computer in kB/s, MB/s of GB/s gaat en dat
Mbps megabit per seconde is, voor een netwerk; oefening 8 van 10.6 heeft "Mega byte
per seconde" als juist antwoord voor precies zo'n schijf. Het getal blijft, alleen
de eenheid verandert. Drie dingen wijzen dezelfde kant op: de grafiek er pal boven
draagt op haar y-as **Throughput (MiB/s)**, de staafgrafiek van 11.10 zet een
mechanische schijf op 150 en 130 naast SATA op 550, en
`Labo/Assemblage/Theorie/Componenten.html` schrijft "ongeveer 100 tot 200 MB/s" voor
dezelfde schijf. **MiB/s was de andere verdedigbare uitkomst** en is niet gekozen,
want dan staat er in de hele syllabus een enkele snelheid in MiB/s terwijl 11.8 en
11.10 vlak erna MB/s schrijven. **11.8 SATA III is met opzet niet aangeraakt**: die
legt uit dat 6 Gb/s gelijk is aan 750 MB/s en waar de 150 MB/s overhead zit, en dat
is een correcte toepassing van 10.5.

**2. Zes page- en blockgroottes zijn van kB naar KiB gegaan.** 11.5 schreef "2 kB,
4 kB, 8 kB of 16 kB", "minimum 256 kB en maximum 4096 kB" en in Write amplification
nog eens "16 kB" en "4096 kB". Dat zijn stuk voor stuk machten van twee met een
kilo-etiket, en dat is letterlijk het geval waarvoor
`Theorie/Bestandssystemen/Clusters.html` op dezelfde dag rechtgezet is. Er valt geen
enkel getal weg: een page van 4096 bytes is 4 KiB, en 128 pages van 16 KiB is 2048
KiB, dus de rekensom van het hoofdstuk blijft kloppen.

**3. De openingszin van 11.13 spreekt hoofdstuk 1 niet meer tegen.** Er stond
"Ongeveer iedere 18 maanden verdubbelt de processorsnelheid." Hoofdstuk 1 draagt
sinds 7 september 2026 een bijgeschreven alinea die de wet van Moore uitlegt als het
aantal transistoren op dezelfde oppervlakte, en 1.7 zegt er juist bij dat snelheid
tegenwoordig van parallellisme komt; vraag 3 van Test jezelf van hoofdstuk 1 toetst
dat verschil. De zin luidt nu **"Processoren zijn decennialang zeer snel sneller
geworden."** De redenering van 11.13 blijft volledig staan, want de derde alinea
zegt zelf al dat je een processor sneller maakt met parallellisme.

**4. Drie zinnen bijgeschreven voor drie vragen die op niets steunden.** Dat is het
gat van de wet van Moore in hoofdstuk 1, van de bottleneck in 5, van het
partitieschema in 6, van realtime in 7, van de nadelen van ATX in 9 en van het woord
kibibyte in 10, en de uitkomst is dezelfde. Ze passen in de gedachtegang die er al
staat en krijgen dus geen eigen kop, zoals bij 1, 5, 6, 9 en 10 en anders dan bij 7.

- **11.13 > RAID 5:** "Je hebt voor RAID 5 minstens drie schijven nodig: twee met
  data en een met de pariteit. In de figuur hierboven staan er vier." Ze staat voor
  de zin over 1/2 tegen 1/4, die op precies die vier schijven slaat.
- **11.13 > RAID 6:** "Je hebt voor RAID 6 minstens vier schijven nodig: twee met
  data en twee met pariteit. In de figuur hierboven staan er vijf."
- **11.13 > Software RAID:** "Een hot spare is een extra harde schijf die al aan de
  controller hangt zonder dat er data op staat. Valt er een schijf uit, dan neemt de
  controller die reserveschijf meteen in gebruik en begint de rebuild zonder dat er
  iemand aan te pas komt." Het woord hot spare kwam in de hele syllabus alleen in
  vraag 23 voor.

**5. Vraag 13 van Test jezelf kreeg een vierde mogelijkheid.** "RAID 0 is dubbel zo
snel als een enkele harde schijf: In lezen / In schrijven / Geen van deze" had er
twee juist, want 11.13 zegt zelf "De lees en schrijfsnelheid wordt hiermee minstens
verdubbeld". De drie mogelijkheden staan er woord voor woord nog en er kwam **"In
lezen en in schrijven"** bij, die het juiste antwoord is. Dat is het geval van vraag
5 van hoofdstuk 5 en vraag 2 van hoofdstuk 6, en het houdt de vraag meerkeuze, zodat
ze op de Brightspace-test met giscorrectie blijft voorbereiden. Omkeren en open
maken zijn allebei overwogen: omkeren zou een dubbele ontkenning opleveren die niets
toetst, open maken kost een meerkeuzevraag. **Vraag 15, over RAID 1, is niet
aangeraakt**, want daar zegt de tekst uitdrukkelijk dat alleen het lezen sneller
wordt.

**6. De twee adressen zijn adressen en geen links, en de QR-code staat terug.** Dat
is de regel van hoofdstuk 9: de PDF is papier, en in dat hele hoofdstuk staat geen
enkele `<a>`. De importer had er hier wel twee gemaakt. Bij de video weegt er iets
zwaarder mee: **de tien vragen van 11.4 zijn zonder die video niet te maken.**
Nagerekend tegen 11.1 tot 11.3: vraag 2, 3, 6, 8, 9 en 10 staan in de tekst, maar
vraag 4 (hoe de arm beweegt), vraag 5 (de drie tekeningen) en vraag 7 (de
vormfactor) staan er niet. De video is dus een voorwaarde en geen hulpmiddel, en de
QR-code is precies wat de Word zelf ervoor bedacht had.

**7. PCI Express 5.0 is 7.0 geworden en de tabel is overgetypt.** 11.11 zei "De
meest recente standaard is de 5.0, deze haalt over een x16 slot een snelheid van
maar liefst 63 GB/s". Het getal klopt, maar 6.0 is er sinds 2022 en 7.0 sinds 2025.
Dat is het geval van Windows 10 in hoofdstuk 4 en 7: een versienummer dat veroudert.
**Hoofdstuk 9 en `Labo/Assemblage/` noemen geen enkel PCIe-versienummer**, nagekeken
met grep, dus dit raakt alleen dit hoofdstuk en er viel niets elders gelijk te
trekken. De zin luidt nu "Elke versie verdubbelt de snelheid van de vorige: 5.0
haalt over een x16 slot al 63 GB/s, en de meest recente standaard is de 7.0."

De figuur eronder was een schermafdruk van de Wikipedia-tabel *PCI Express link
performance*, met voetnootnummers, blauwe links en **"expected in Q2 2019"** in de
rij 5.0. Ze is overgetypt tot een echte tabel van zeven rijen en negen kolommen, met
6.0 en 7.0 erbij; dat is het geval van de kibi-tabel van 10.4. **De schrijfwijze van
de bron blijft**, dus decimale punten en geen komma's, zoals bij die kibi-tabel
afgesproken. `img/syllabus-11-harde-schijf-24.png` is geschrapt en een herimport zet
ze terug. **Het woord lane komt in dit hoofdstuk niet voor**, dus het bijschrift zegt
"voor elke breedte van het slot" en niet "per lane" (patroon 20); de kolomkoppen x1
tot x16 zijn wel de woorden die de tekst zelf gebruikt.

**8. De kop van 11.6 is Oefening Solid State Drive geworden.** Er stond Disk,
terwijl 11.5 het hoofdstuk opent met "Een Solid State Drive of SSD", het kernpunt
Solid state schrijft en vraag 1 van Test jezelf de afkorting juist voluit laat
schrijven. Een sectietitel die Disk zegt is dan een valstrik in de inhoudstafel. De
bestandsnaam ging mee naar `OefeningSolidStateDrive.html`; de importer schreef
`OefeningSolidStateDisk.html`.

**De zestien bestandsnamen zijn nagerekend en geen enkele is hernoemd.** Vier
secties dragen hun afkorting tussen haakjes achteraan, dus `pascal()` maakt er
`ParallelAdvancedTechnologyAttachmentPata.html` van en zo voort, met de afkorting
twee keer in de naam. Dat is lang en het is het geval van `DeUefiOmgeving.html` in
hoofdstuk 3 en `BitOfByte.html` in hoofdstuk 10, maar het botst met niets en het is
uit de kop af te leiden. Beslist op 7 september 2026: **ze blijven wat `pascal()`
ervan maakt.** De enige naam die afwijkt is die van 11.6, en die volgt uit de
gewijzigde kop en niet uit een keuze.

### De vierentwintig vragen van Test jezelf

Vierentwintig vragen en 67 mogelijkheden, met afstand de langste zelftest van de
syllabus. Twee ervan zijn open en dragen elk een `<div class="oplossing">`; de
tweeentwintig andere zijn meerkeuze. **Alle tweeentwintig zijn nageteld op precies
een juist antwoord**, want dat is waar hoofdstuk 3 op strandde.

| Vraag | Antwoord | Waarop het steunt |
|---|---|---|
| 1 SSD voluit | open, Solid State Drive | 11.5, eerste zin |
| 2 Naast PATA en SATA aangesloten via | c, M.2 | het kernpunt scheidt aansluiten (PATA, SATA, PCI Express, M.2) van communiceren (AHCI, NVMe); xSATA bestaat niet |
| 3 Waaruit bestaat een track | a, sectoren | 11.1, "Elk van de tracks is verdeeld in een aantal sectoren" |
| 4 Hoe groot is een sector | b, 512 bytes | 11.1, "een vaste lengte van meestal 512 byte" |
| 5 Mechanische schijf hot swappable | a, waar | 11.8 en 11.9: hot swappable is een eigenschap van SATA en niet van het soort schijf, met datacenters als voorbeeld |
| 6 Fragmentatie bij een SSD | a, ja | 6.8, "geen performantieverlies wanneer het op gefragmenteerde bestanden aankomt", dus ze ontstaat wel en ze kost niets |
| 7 NVMe beter dan AHCI omdat | a, een command queue die parallellisme toelaat | 11.10, 65536 queues met elk 65536 commando's tegen de ene queue van 32 bij AHCI |
| 8 Wat is NVRAM | b, niet vluchtig geheugen | 11.5, "in tegenstelling tot RAM geheugen, niet volatiel", en NVMe staat voor Non-Volatile Memory Express |
| 9 Welk type SSD het snelst | a, single level cell | 11.5, een TLC leest 4 en schrijft 6 keer trager |
| 10 Wat is wear levelling | c, schrijfopdrachten spreiden over de pages | 11.5 |
| 11 RAID voluit | open, Redundant Array Of Independent Disks | 11.13, eerste zin van RAID 0 |
| 12 RAID 0 gebruikt | a, striping | 11.13 |
| 13 RAID 0 dubbel zo snel | c, in lezen en in schrijven | zie beslissing 5 |
| 14 RAID 1 gebruikt | b, mirrorring | 11.13 |
| 15 RAID 1 dubbel zo snel | a, in lezen | 11.13, "Het schrijven gaat even snel als op 1 enkele schijf" |
| 16 RAID 5 minstens 5 schijven | b, niet waar | de bijgeschreven zin: het zijn er drie |
| 17 RAID 1 goedkoper per bit dan RAID 5 | b, niet waar | 11.13, "De totale kost per bit van RAID 5 is dus iets lager" |
| 18 RAID 6 minstens 4 schijven | a, waar | de bijgeschreven zin |
| 19 RAID 6 een garantie | b, niet waar | 11.13 noemt het "een relatief veilige oplossing" en ze overleeft twee uitvallen, niet elk aantal |
| 20 Crash van 1 schijf | a, zo snel mogelijk een rebuild | 11.13, "Je vervangt best de defecte harde schijf zo snel mogelijk" en "van cruciaal belang ... zo snel mogelijk tracht te herstellen" |
| 21 RAID 10 veiliger dan RAID 6 | b, niet waar | 11.13: RAID 6 overleeft elke tweevoudige uitval, RAID 10 met vier schijven "de uitval van (minstens) een enkele schijf" |
| 22 Wat is een spanned volume | a, schijven tot een logische schijf | 11.13 > Software RAID |
| 23 Wat is een hot spare | a, een extra schijf aan de controller | de bijgeschreven zin |
| 24 RAID 1 met 100 GB en 50 GB | a, 50 GB | 11.13, "De kleinste schijf in de array bepaalt de omvang" |

**Vraag 5 en vraag 21 zagen er verdacht uit en zijn allebei blijven staan.** Bij
vraag 5 zou je "niet waar" verwachten omdat een mechanische schijf oud aanvoelt,
maar 11.8 en 11.9 hangen hot swapping aan de SATA-aansluiting en geven datacenters
vol mechanische schijven als voorbeeld. Bij vraag 21 is "dat hangt ervan af" het
eerlijke antwoord in het algemeen, maar dit hoofdstuk kiest partij: RAID 6 overleeft
elke tweevoudige uitval en RAID 10 met vier schijven alleen de eerste. Allebei zijn
ze dus uit de tekst te halen.

**Vraag 6 en vraag 8 steunen op iets buiten dit hoofdstuk, en dat mag.** Vraag 6
steunt op 6.8 en vraag 8 op de definitie van niet-volatiel in 11.5 plus de naam
NVMe. De theorietrack loopt in volgorde, dus een student die hoofdstuk 11 leest,
heeft hoofdstuk 6 gehad; dat is precies wat patroon 17 toelaat.

**Een invulregel per ding dat het antwoord telt.** Vraag 1 en 11 vragen elk een naam
voluit en dragen dus een regel.

### 11.4 en 11.6 zijn allebei een vragenlijst geworden

Allebei houden ze hun naam, zoals de regel bij hoofdstuk 2 zegt, en allebei kregen
ze met de hand een `ol class="vragen"` en `oplossingen.js` onder `back-link.js`. Met
Test jezelf erbij zijn dat drie pagina's met vragen in dit hoofdstuk en 43 antwoorden
in de gedrukte 11.17 Oplossingen.

**11.4 telt tien vragen, waarvan twee meerkeuze en acht open.** De nummering loopt
over twee lijsten, want tussen vraag 7 en 8 staat de tussenzin "Redeneervragen:"; de
tweede lijst draagt dus `start="8"` en regel 14 kijkt die aansluiting na. De keuzes
van vraag 4 en 6 staan in de Word op een eigen `numId` (77 en 78) terwijl de vragen
op 76 staan, en de importer zet ze netjes binnen de `<li>` van hun vraag, precies
zoals bij hoofdstuk 10; er was daar niets aan te sluiten. In Test jezelf geldt
hetzelfde voor `numId` 62 tegen 69, en die lijst loopt van 1 tot 24 zonder enkele
`start=`.

**De invulregels zijn geteld naar wat het antwoord telt.** Vraag 8 noemt drie dingen
(de draaisnelheid, de armsnelheid en de plaats op de schijf) en draagt drie regels;
vraag 10 noemt er twee en draagt er twee; de zes andere open vragen tellen een ding
en dragen een regel. Vraag 5 draagt drie invulcellen, een per tekening.

**11.6 is in de Word geen genummerde lijst maar zes tabellen**, en dat is het geval
van 2.1 Hardware herkennen: herken je een oefening, maak er dan een `ol.vragen` van.
Het werden negen vragen over vijf oefeningen, doorlopend genummerd met `start="3"`,
`"5"`, `"8"` en `"9"`. De inleidende tabel van 1 bij 2 is twee gewone alinea's
geworden: haar tweede kolom is 4,9mm breed en dat is geen schrijfruimte maar een
opmaakrestant. Daarmee is ook de `data-geraden` van die tabel vervallen.

**De schermafdruk staat nu voor de vragen en niet erna.** In de Word komt eerst de
tabel met de probleemstelling en de vragen, en dan pas het beeld waarop het antwoord
staat; de student schrijft dan op de ene bladzijde terwijl de gegevens op de
volgende staan. Dat is het geval van 9.5, en dezelfde beslissing: probleemstelling,
figuur, vragen. **Elke oefening kreeg daarbij een `<h2>` "Oefening N"**, want de
Word zet die naam in een tabelkop en zonder kop lopen de vijf oefeningen in elkaar
over. Dat de schermafdruk die naam zelf ook draagt, linksboven in het beeld, is
daarmee een herhaling; ze is niet weg te snijden zonder de geleende bladzijde te
bewerken.

**De negen antwoorden zijn hier bepaald en staan nergens in de Word.** Ze steunen op
de schermafdrukken zelf, die daarvoor een voor een opengedaan zijn.

| Vraag | Antwoord | Waarop het steunt |
|---|---|---|
| 1 Verschil in oefening 1 | mechanisch tegen solid state | Seagate BarraCuda: 2,5 inch, S-ATA (III), 5400 rpm, 128 MB cache. Samsung 870 EVO: 2,5 inch SATA, TLC. Allebei 1 TB |
| 2 Keuze op prestaties | de Samsung 870 EVO | 11.5: bij een SSD vallen seek time en rotational delay weg |
| 3 Verschil in oefening 2 | SATA tegen NVMe over PCI Express | 860 EVO: interface SATA 600. 970 EVO Plus: interface PCI Express 3.0. Allebei M.2 en allebei 1 TB |
| 4 Keuze op prestaties | de 970 EVO Plus | 11.8: SATA III loopt vast op 600 MB/s en een moderne SSD haalt dat probleemloos |
| 5 Verschil in oefening 3 | MLC tegen TLC | 990 Pro: Multi Level Cell. SN770: Triple Level Cell. Allebei M.2 NVMe (PCIe) en allebei 1 TB |
| 6 Keuze op prestaties | de 990 Pro | 11.5: meer bits per cel is trager, een TLC leest 4 en schrijft 6 keer trager dan een SLC |
| 7 Keuze op levensduur | de 990 Pro | de zin die hiervoor bijgeschreven is, zie hieronder |
| 8 Verschil in oefening 4 | de lengte, 42mm tegen 80mm | de datasheets: Dimension 22,0 x 42,0 x 3,5 tegen 22,0 x 80,0 x 3,5. Ook 256GB tegen 1TB en 1,4 W tegen 4,6 W |
| 9 Voorstel voor de B&R PC3100 | een M.2 met SATA en MLC | de besteltabel van B&R noemt zelf 512 GB en 1 TB M.2 SSD MLC van Innodisk over SATA, met adapterkaart 5ACCMS01.MDT2-000 |

**Vraag 7 vroeg naar iets wat het hoofdstuk niet zei, en daar is een zin voor
bijgeschreven.** 11.5 legt SLC, MLC en TLC uit in termen van snelheid en raadt MLC
aan, maar koppelde het aantal bits per cel nergens aan de levensduur; de 10000
schrijfcycli staan los daarvan bij wear levelling. In SLC, MLC en TLC staat nu:
"Meer bits per cel kost ook levensduur: hoe fijner de spanningsniveaus in een cel
uit elkaar liggen, hoe eerder slijtage ze niet meer uit elkaar te houden maakt. Een
SLC haalt daarom meer schrijfcycli dan een MLC en een MLC meer dan een TLC." Dat is
de vierde bijgeschreven zin van dit hoofdstuk.

### De afbeeldingen

Vierenveertig plaatsingen in de Word, waarvan twee de kadericoontjes van 5,4mm die
de importer weggooit. Van de 42 andere zijn er nu 45 bestanden in `img/`, want vier
schermafdrukken zijn in twee gesplitst en drie tekeningen zijn hertekend. **Elk
bestand is opengedaan voor het `alt` erbij geschreven werd, en een nieuwe import
gooit die alt-teksten weg.**

**Acht zweven** (`wrapSquare`): de platterstapel van 11.1, de CHS-tekening van 11.2,
de QR-code bij de kop van 11.4, de SSD-foto van 11.5, de B&R-computer bij oefening 5,
de lintkabel bij de kop Kabels, de SATA-tekening van 11.8 en de NAS-foto van 11.15.
Hun alinea blijft lopende tekst en ze dragen geen bijschrift uit de Word.

**Drie zijn hertekend**, en elk van de drie heeft een reden naast de dpi:

- **`img/syllabus-11-zone-bit-recording.svg`** vervangt image94, 245 bij 224 pixels
  op 115,4mm, oftewel **54 dpi**. Dat is de laagste van de hele Word, onder de 56 van
  hoofdstuk 9. Het origineel is bovendien een schema en geen foto. De hertekening
  laat niets vallen en toont wat de tekst beweert in plaats van het te onderschrijven:
  drie zones met 8, 12 en 16 sectoren per track, en in de binnenste en de buitenste
  zone een sector volledig ingekleurd. Die twee zijn **even lang** terwijl de
  buitenste een halve hoek beslaat, en dat is precies waarom de adressering
  moeilijker wordt. **De kleuren rood, groen en grijs zijn die van de brontekst**,
  want 11.3 schrijft "zones (rood, groen, grijs)"; ze staan gedempt, zoals de
  fragmentatiefiguur van hoofdstuk 6.
- **`img/syllabus-11-doorvoersnelheid-per-zone.svg`** vervangt image95, 454 bij 247
  pixels op 146,9mm, oftewel **79 dpi**. Het origineel is een gnuplot-meting met
  Engelse assen (`zcav`, `Throughput (MiB/s)`, `Offset (GiB)`), en die y-as draagt
  net de eenheid waar beslissing 1 over gaat. De hertekening zet de assen in het
  Nederlands, houdt de trap (elke trede is een zone), loopt van 0 tot 140 zodat de
  halvering te zien is in plaats van te geloven, en zegt met een pijl onder de x-as
  welke kant de buitenrand op ligt.
- **`img/syllabus-11-wear-levelling.svg`** vervangt image103, 426 bij 281 pixels op
  112,6mm, oftewel **96 dpi**, dus op de grens. De reden is een andere: het origineel
  staat volledig in het Engels en schrijft **4 KB** waar de tekst sinds beslissing 2
  4 KiB zegt. Dezelfde 4 KiB staat er nu vier keer, genummerd, op vier verschillende
  pages, met de reden eronder.

**Een vierde is op 9 september 2026 hertekend, en bij die is de dpi juist geen
argument.** `img/syllabus-11-cilinder-en-koppen.svg` vervangt
`syllabus-11-harde-schijf-02.png`, de platterstapel van 11.1, 422 bij 334 pixels op
76,6mm en dus 140 dpi, ruim boven de grens. Twee andere redenen gaven de doorslag.
Alle labels stonden in het Engels (Sector, Platter 1 tot 4, Track X, Cylinder X) in
een Nederlandse tekst. En de tekening toonde **geen enkele arm**, terwijl de drie
alinea's eronder zeggen dat elke kant zijn eigen arm en kop heeft, dat alle armen
met elkaar verbonden zijn zodat ze samen bewegen, en dat de tracks die bij een
bepaalde armstand horen samen de cilinder vormen. Dat is de toets die hoofdstuk 6
vastlegde: een figuur toont wat de alinea ernaast beweert, en die alinea's hadden
hier niets om naar te wijzen.

De hertekening is daarom twee figuren naast elkaar. **Links** dezelfde stapel als het
origineel, schuin van boven: vier platters op een as, per platter dezelfde track als
track X, een stuk van die track op de bovenste platter ingekleurd als sector, en de
vier tracks samen als een wand door de stapel, cilinder X. Geen enkel gegeven van het
origineel valt weg. **Rechts** dezelfde stapel van opzij, met een blok naast de
stapel waar acht armen aan vastzitten, twee per platter, elk met een kop die net
boven of net onder een oppervlak hangt, en alle acht op dezelfde afstand van de as.
De twee panelen liggen op dezelfde hoogtes, zodat de vier platters links en rechts
op een lijn staan.

**Acht is niet gekozen maar gerekend**: vier platters, en de tekst zegt zelf dat 6 tot
12 platters 12 tot 24 opnamevlakken geven, dus elke kant telt mee. **De acht armen
staan in geen enkele afbeelding van de Word**; de lector heeft het bijtekenen op 9
september 2026 goedgekeurd, en een herimport gooit de hele figuur weg. De rode regel
onder de rechterfiguur ("Omdat alle armen aan hetzelfde blok vastzitten, staan de
acht koppen altijd op dezelfde track") is de zin die de cilinder verklaart, in de
kleur die hoofdstuk 6 voor zo'n gevolg gebruikt.

De figuur gaat van 76,6mm naar **150,0mm**, want ze draagt nu twee panelen. Nagekeken
na de export: de syllabus telt nog altijd 153 bladzijden, de inhoudstafel is rij voor
rij gelijk aan die van de vorige PDF, en geen enkele bladzijde is gekrompen.

**Een is versmald.** De doorsnedetekening van 11.1 is 559 bij 397 pixels op 159,6mm,
oftewel 89 dpi, en gaat naar **145,0mm** voor ongeveer 98 dpi. Ze is niet hertekend:
het is een gedetailleerde scan met dertien genummerde onderdelen die al in het
Nederlands staan, en dat teken je niet na. **Dat laatste geldt niet meer**: onder de
beslissing van 9 september 2026 is ze wel hertekend, zie hieronder.

**De opengewerkte schijf van 11.1 is `img/syllabus-11-onderdelen-harde-schijf.svg`
geworden**, op 150,0mm. Alle dertien nummers staan erop met dezelfde nummering. **Wat
verdween is de isometrische kijk en niet een gegeven**: het origineel gebruikte de
schuine hoek alleen om de voorrand met de bus en de stroomtoevoer te kunnen tonen, en
de tekening is nu een bovenaanzicht met het deksel eraf plus die voorrand als een
aparte band eronder, met de rand van de printplaat die eronderuit steekt. De stapel
platen is geen verlies, want de tweede figuur van diezelfde bladzijde
(`syllabus-11-cilinder-en-koppen.svg`) toont die van opzij.

**Drie dingen aan die tekening gingen alleen op het scherm mis**, en ze zijn de reden
dat je rendert voor je vertrouwt. De kop lag in de eerste versie op de motornaaf in
plaats van boven de plaat, doordat de arm te lang was: de kop hoort op ongeveer 95
eenheden van het middelpunt en lag op 38, binnen de naaf van 44. Een taartpunt die de
plaat eronder moest tonen, las als een gemarkeerde sector en is geschrapt; 6 wijst nu
naar de plaat zelf, precies zoals het origineel doet. En het tweede paneel had een
andere breedte dan de schijf erboven, wat leest als een tweede toestel; het is nu de
voorrand van dezelfde behuizing.

**De figuur telt zeven aanduidingen en niet dertien, en dat is een nieuwe regel.**
Beslist door de lector op 9 september 2026, naar aanleiding van drie labelvragen over
deze figuur, en het antwoord viel breder uit dan de vragen: **een figuur duidt alleen
aan wat later in de tekst, het labo of de slides ook echt terugkomt.** De tekening zelf
verandert daar niet van, en daar blijft gelden dat geen enkel gegeven van het origineel
wegvalt: de spoel, het draaipunt, de voorversterker, het chassis en de printplaat staan
er nog, ze dragen alleen geen naam meer.

Geteld in hoofdstuk 11, in `Labo/` en in `Hoorcollege/`: platter komt 22 keer voor, arm
18 keer, lees/schrijfkop doorlopend, magneet(coating) 2 keer, motor een keer in een
antwoord van Test jezelf, en bus en stroomtoevoer krijgen elk een eigen sectie in 11.7
en 11.8. **Voorversterker, e-block, chassis, assen, elektronika en flextor komen nul
keer voor.**

**Blijven, zeven:** Platters, Magneetlaag, Lees/schrijfkoppen, Actuatorarm, Motor, Bus,
Stroomtoevoer. **Vallen weg, vijf:** Spoelen, Voorversterker, Assen, Chassis en
Elektronika. **En twee zijn er een geworden:** wat het origineel Flextor head assembly
en E-block noemt, is samen het armsamenstel, en dat heet nu **Actuatorarm**, een label
dat het origineel niet had. Dat is de vondst van deze ronde: arm is na platter het
meest gebruikte woord van het hoofdstuk en Test jezelf vraagt letterlijk hoe de
actuatorarm beweegt, terwijl de arm op de figuur naamloos was. De nummering loopt
daarom opnieuw van 1 tot 7; niets in de tekst verwijst naar die nummers.

Daarmee vervielen de drie vragen die hier openstonden: PLATEN werd Platters (patroon
20, de lopende tekst schrijft het 22 keer zo), THIN FILM werd Magneetlaag, en FLEXTOR
HEAD ASSEMBLY is weg. Drie spellingcorrecties waren al zonder overleg doorgevoerd en
zijn goedgekeurd: Voorversterker aaneen, Elektronica en Lees/schrijfkoppen; van die
drie overleeft alleen de laatste deze ronde.

**Twee aanduidingen wezen eerst allebei ergens midden op de plaat**, wat ze niet van
elkaar onderscheidt. Platters wijst nu naar de rand van de schijf en Magneetlaag naar
het vlak erop, zodat elk van de twee iets anders aanduidt. De figuur ging daarbij van
150,0 naar **140,0mm**, want met zes labels minder is er links en rechts minder marge
nodig.

**De CHS-tekening van 11.2 is `img/syllabus-11-cylinder-head-sector.svg` geworden**,
van 60,0 naar 97,0mm. Daarmee vervalt het watermerk "©2000 How Stuff Works" en het
bijschrift dat de bron noemde; de afspraak dat zo'n watermerk met een leesbare naam
mag blijven, gold zolang het beeld geleend was. **Het origineel markeerde een sector en
deze markeert er twee**, een in een buitenste track en een in een binnenste, allebei
met het label "sector van 512 byte". Dat is bijgetekend en niet overgenomen, en het is
de toets die hoofdstuk 6 vastlegde: de alinea ernaast beweert dat een sector buitenaan
langer is dan een sector binnenaan terwijl allebei 512 byte dragen, en met een enkele
markering moest de lezer dat geloven. De acht radialen en de concentrische tracks
komen wel uit het origineel, dat er ook acht heeft.

**De drie schijfjes van 11.4 zijn `img/syllabus-11-track.svg`, `-disk-sector.svg` en
`-track-sector.svg` geworden**, alle drie op hun bestaande 45,0mm, want ze staan in een
tabel van drie kolommen. Ze zijn met een generator geschreven, zodat de basistekening
in de drie letterlijk dezelfde is; het origineel was drie keer dezelfde CAD-render met
een andere markering, dus dat is de vorm die het al had. **Wat wel verbeterd is: de
ring, de taartpunt en het vakje liggen nu op precies dezelfde plaats**, dus het derde
schijfje is zichtbaar de doorsnede van de eerste twee, en dat is net wat de vraag
toetst. De kleuren rood, groen en blauw zijn weg, want geen enkele zin bij die vraag
noemt een kleur en elk schijfje draagt maar een markering; alle drie staan ze in
`#004d40`. De grijze gradient van de CAD-render is weg.

**Vier blijven staan op 96 dpi, en dat is een beslissing.** De jumperinstelling van
11.7 (78,1mm), de SATA-kabels van 11.8 (79,4mm), het RAID 5-schema van 11.13
(107,1mm) en de NAS-foto van 11.15 (70,1mm) zitten alle vier op 96 en niet eronder.
Twee millimeter versmallen zou ze formeel boven de grens van 98 tillen en op papier
niets opleveren, en hoofdstuk 9 versmalde foto's die op 56 tot 81 dpi stonden. **De
grens van 98 dpi is een diagnose en geen drempel waar je overheen moet.** Het
RAID 5-schema is intussen wel hertekend, maar niet om zijn dpi; zie hieronder.

**De vijf RAID-schema's van 11.13 zijn op 9 september 2026 in een keer hertekend**,
onder de beslissing van die dag dat alles wat iemand getekend heeft naar een eigen SVG
gaat. Ze stonden **in drie stijlen uit drie bronnen**: `-31` en `-32` (RAID 0 en 1)
waren gele cilinders, `-33` en `-34` (RAID 5 en 6) waren cilinders met een eigen
kleur per rij, en `-35` (RAID 10) was een stockbeeld in teal op een grijze achtergrond
met `BLOCK 1` en `DISK1` in kapitalen. Dat is precies de sectie waar de student de vijf
naast elkaar moet leggen, dus de stijl was daar niet neutraal maar hinderlijk. Ze heten
nu `img/syllabus-11-raid-0.svg`, `-raid-1.svg`, `-raid-5.svg`, `-raid-6.svg` en
`-raid-10.svg`, en de vijf PNG's zijn geschrapt. **Een herimport zet die vijf terug en
laat regel 1 en 16 vallen tot ze opnieuw weg zijn.**

**Wat een familie duurder maakt is de gedeelde schaal.** Een schijf is in alle vijf
90 eenheden breed, een blok 34 hoog en de ongebruikte ruimte eronder 50, dus de
gedrukte breedte volgt uit het aantal schijven en is geen knop meer per figuur. De
schaal is vastgelegd op de breedste, RAID 6 met vijf schijven, op **130,0mm**; daaruit
volgen 51,7mm voor RAID 0 en 1, 103,9mm voor RAID 5 en 113,9mm voor RAID 10. De vijf
zijn met een generator geschreven zodat die gelijkheid geen kwestie van overtypen is.
Wil je er een versmallen, versmal ze dan alle vijf.

**De kleur zegt nu iets anders dan in het origineel, en dat is de winst.** In `-33` en
`-34` groepeerden de kleuren de rijen, wat de uitlijning en de letter A tot E al doen;
p en q waren daar niet van de data te onderscheiden. Hier is een datablok `#b2dfdb` en
een pariteitsblok `#004d40` met witte tekst, dus de trap die de pariteit over de
schijven maakt is te zien in plaats van na te tellen, en dat is net wat de alinea's
eronder beweren ("de pariteiten worden opnieuw gespreid over de verschillende harde
schijven"). Onder RAID 5 en 6 staat een legende die zegt wat een gekleurd blok is.
Geen enkel gegeven van het origineel valt weg: alle blokletters, alle schijfnamen en
de ongebruikte ruimte onderaan elke cilinder staan er.

**p en q dragen NIET dezelfde kleur, en dat is een beslissing van de lector van 9
september 2026.** De eerste versie kleurde allebei `#004d40`, en dan leest de figuur
als "twee keer pariteit" terwijl RAID 6 juist twee tegelijk uitgevallen schijven
overleeft omdat p en q anders berekend worden. q is daarom `#4d8b7f`, een middentoon
uit dezelfde tealfamilie, en de legende van RAID 6 telt twee regels: "pariteitsblok p"
en "pariteitsblok q, anders berekend". **RAID 5 heeft alleen p en is niet aangeraakt**,
zodat dezelfde soort blok in de twee figuren dezelfde kleur draagt.

**De middentoon is gerekend en niet gekozen.** In L\* liggen de drie op 85,7 (`#b2dfdb`),
53,6 (`#4d8b7f`) en 28,6 (`#004d40`), dus 32,1 en 25,0 punten uit elkaar; `#00796b`
lag met 40,4 en 16,7 veel te dicht tegen p aan. Nagemeten in de gerenderde figuur zelf
zijn de grijswaarden **209, 119 en 52**, gaten van 90 en 67 op 255, dus op een
zwart-witafdruk staan de drie ruim uit elkaar en hoefde q geen arcering of rand te
krijgen. Rood was hier geen optie: `#9e2f26` betekent in deze syllabus annotatie of de
rest die ongebruikt blijft. De witte tekst haalt op `#4d8b7f` een contrast van 3,95,
genoeg voor de 18px halfvette letter in het blok. **Gemeten in dezelfde afdruk**: de
ongebruikte ruimte staat op 229 tegen 209 voor een datablok, twintig punten uit elkaar;
wat die twee scheidt is de lijn ertussen en niet de tint.

**Drie dingen aan RAID 10 zijn met opzet veranderd.** Het was het enige beeld uit een
andere bron. De blokken heetten `BLOCK 1` tot `BLOCK 8` en heten nu A1 tot A8, dezelfde
namen als in RAID 0, zodat te zien is dat de bovenste laag van RAID 10 exact de
verdeling van RAID 0 is; de afbeelding van de schijven ging van `DISK1` tot `DISK4` naar
`Disk 0` tot `Disk 3`, zoals de vier andere; en de ondertitel `Stripe + Mirror` werd
`striping + mirroring`, de woorden die 11.13 zelf gebruikt. Dat laatste is meteen een
spellingcorrectie: de lopende tekst schrijft "mirrorring" met twee r'en, en de tekening
neemt die tikfout niet over. **De tekst zelf is niet aangeraakt.**

**Wat alleen op het scherm te zien was:** bij RAID 10 liep de verticale draad van de
RAID 0-beugel dwars door allebei de labels "RAID 1". Ze staan nu naast de draad, zoals
het bronbeeld ze ook zette. Vijf keer gerenderd met headless Edge voor ze vertrouwd
werden.

**Twee watermerken blijven staan, met de bron in het bijschrift.** De CHS-tekening
van 11.2 draagt "©2000 How Stuff Works" en de rooster-tekening van 11.5 draagt het
logo van Hardware.Info. Allebei zijn ze te noemen, en dat is de toets die hoofdstuk 9
vastlegde: een watermerk met een leesbare naam mag blijven met de bron erbij (het
geval AskVG van hoofdstuk 3), een watermerk van een fotobank zonder naam gaat eruit.
De CHS-tekening ging daarbij van 44,0 naar **60,0mm**, want op 44,0mm is de bron in
het beeld niet te lezen en de tekening zelf nauwelijks; ze haalt op 60,0mm nog altijd
108 dpi.

**Vier schermafdrukken van 11.6 zijn elk in twee gesplitst.** De Word zet ze op
233,9 / 233,0 / 239,9 en 237,8mm, breder dan de bladspiegel van 160mm, **want in de
Word staan ze 90 graden gedraaid om op een blad te passen.** `syllabus.css` klemt ze
met `max-width: 100%` op 160mm, en dan drukt de tekst erin een derde kleiner dan
bedoeld. Nagemeten inkthoogte van een tekstregel: **1,32 / 1,98 / 1,32 en 1,10mm**,
tegen 2,5mm voor de lopende tekst van de syllabus en de 3,18mm die het artikel van
hoofdstuk 3 goedgekeurd kreeg. Oefening 4 was daarmee de kleinste druk van de hele
syllabus, en het is net de rij Dimension daarin die het antwoord op vraag 8 draagt.

Beslist op 7 september 2026 door de lector: **elke schermafdruk wordt in twee
gesplitst en de twee helften komen onder elkaar.** Elke afbeelding zet twee producten
naast elkaar met een verticale lijn ertussen, en die lijn is opgemeten en niet gegokt
(x = 1088, 1093, 1086 en 1088, over 93 tot 94% van de hoogte). De witte rand rond
elke helft is weggesneden. De inkthoogte is daarmee **2,65 / 3,95 / 2,65 en 2,21mm**,
de orde van de lopende tekst. De acht bestanden heten
`img/syllabus-11-oefening-N-<product>.png` en staan buiten de nummering van de
importer; `syllabus-11-harde-schijf-10` tot `-13` zijn geschrapt, en **een herimport
zet die vier terug en laat regel 1 en 16 falen tot ze opnieuw weg zijn.**

De prijs staat in bladzijden: 11.6 gaat van vijf naar elf gedrukte bladzijden, want
elke helft is op 160mm nog 149 tot 209mm hoog en er passen er dus geen twee op een
blad. Dat is uitdrukkelijk aanvaard.

**De B&R-datasheet van oefening 5 is niet gesplitst**: die zet geen twee producten
naast elkaar en haalt op 160mm al 2,76mm inkthoogte.

**image93 sluit een lus die bij hoofdstuk 6 open bleef staan.** NOTITIES.md zegt daar
onder "Drie claims die wrong waren" dat image93 niet in hoofdstuk 6 zit maar in
hoofdstuk 11. Dat klopt: ze staat in 11.2 Cylinder head sector, zwevend, en is de
tekening met het How Stuff Works-watermerk hierboven. **De lus is dicht.**

**Twee schermafdrukken dragen geen bron en blijven staan.** De webshopbladen van
oefening 1 en 3 zeggen nergens van welke winkel ze komen; er staan wel geen prijzen
op, dus het bezwaar van image71 van hoofdstuk 9 en image89 van hoofdstuk 10 speelt
hier maar half. Wat ze dragen is precies wat de vraag ernaast nodig heeft, en dat
veroudert niet.

**De schermafdruk van Schijfbeheer bij Software RAID draagt een handgeschreven
aantekening, "sweet" in het groen.** Dat is een knipoog en zou patroon 14 zijn als
het eigen tekst was, maar het staat in een geleende schermafdruk en een afgedrukte
bladzijde wordt niet bewerkt (de regel van hoofdstuk 9). Diezelfde afdruk toont een
schijf van 1 TB als 931,42 GB, en dat is precies het getal van 10.4.

### De bladspiegel van dit hoofdstuk

Vijfenveertig bladzijden, 98 tot en met 142, met de gedrukte 11.17 Oplossingen als
laatste. Nagerekend **na** de redactionele ronde, dus na de hertekeningen, na het
splitsen van de vier schermafdrukken, na de vier bijgeschreven zinnen en na de
overgetypte PCIe-tabel.

**Hoofdstuk 1 tot 10 zijn geen bladzijde verschoven**, alle tachtig rijen van de
inhoudstafel staan op hun oude nummer, en de inhoudstafel zelf paste de achttien
nieuwe rijen nog binnen zijn vijf bladzijden voorwerk. Dat is een strengere uitkomst
dan hoofdstuk 9 en 10, die er elk een opschoven. **Het klopte eerst niet**, en dat is
de vondst die bij de schaalfactor hierboven staat.

Drie bladzijden lopen voor meer dan zeventig millimeter leeg, en dat is bij alle drie
nagekeken en gelaten:

- **Bladzijde 109** opent 11.6 en stopt na de eerste probleemstelling, want de figuur
  eronder is 175mm hoog en er is 129mm vrij. Versmallen zou de druk terugbrengen naar
  waar ze voor het splitsen stond, dus dat is de knop niet.
- **Bladzijde 118** draagt de tekst van oefening 5 en de foto van de B&R, en de
  datasheet eronder past er niet meer bij.
- **Bladzijde 140** draagt vraag 24 van Test jezelf alleen. Dat is het geval van
  vraag 9 van hoofdstuk 3: `ol.vragen > li` houdt elke vraag heel, en 24 vragen met
  67 mogelijkheden lopen nu eenmaal over drie bladzijden.

**De twee open vragen van Test jezelf staan allebei op de eerste twee bladzijden**,
dus hun invulruimte valt niet in een hoek.

**Vraag 1 en vraag 5 van 11.4 blijven elk heel met hun figuren**, zonder dat er een
`.vragen-bij-figuur` aan te pas komt: de figuur staat **binnen** de `<li>` en
`ol.vragen > li` breekt sinds hoofdstuk 2 niet meer over een bladovergang. Dat is
hetzelfde geval als vraag 4 van hoofdstuk 9 en vraag 8 en 9 van hoofdstuk 10. Die
omhulling is er voor een figuur die **naast** een reeks nummers staat, en dat geval
doet zich hier niet voor.

### Waar dit hoofdstuk en de rest van dit vak naast elkaar staan

Patroon 17: de twee tracks zeggen hetzelfde twee keer en er linkt niets tussen. **Er
is aan geen enkele labopagina iets veranderd.** Nagekeken op tegenspraak, en dit
kwam eruit.

- **Hoofdstuk 10, Informatievoorstelling. Twee echte tegenspraken, allebei
  rechtgezet.** Zie beslissing 1 en 2. Wat hoofdstuk 10 vastlegde en dit hoofdstuk
  niet mocht tegenspreken (een kilobyte is 1000 bytes, wie 1024 bedoelt schrijft KiB,
  een schijf van 1 TB toont 931 GB) staat er nu allemaal naast. **11.8 SATA III is een
  toepassing van 10.5** en is met opzet niet aangeraakt.
- **Hoofdstuk 1, Generaties. Een echte tegenspraak, rechtgezet.** Zie beslissing 3.
- **Hoofdstuk 6, Bestandssystemen. Geen tegenspraak.** 11.1 zegt "Een sector heeft
  een vaste lengte van meestal 512 byte" en 6.4 Clusters rekent met diezelfde 512
  bytes en met acht sectoren onder een clusteradres. **Seek time en rotational
  latency staan in allebei**, en het zijn twee helften: 6.6 en 6.9 gebruiken de
  termen zonder ze uit te leggen, 11.1 legt ze uit met getallen (9ms gemiddelde seek
  time, 4ms rotational latency bij 7200 toeren, 13ms access time). Dat 6.6 ze eerder
  gebruikt dan 11.1 ze invoert, is een gat in hoofdstuk 6 en geen tegenspraak; het is
  niet aangeraakt.
- **Hoofdstuk 9, Moederbord. Geen tegenspraak, wel drie helften.** 9.3 geeft de
  geschiedenis van PCI Express (AGP naar PCI naar PCI Express) en 11.11 de werking en
  de versies; **hoofdstuk 9 noemt geen enkel versienummer en geen lanes**, nagekeken
  met grep, dus beslissing 7 raakte het niet. M.2 komt in hoofdstuk 9 alleen voor op
  een datasheet van 9.5 en niet in de lopende tekst. **Hot swapping en point to point
  komen in hoofdstuk 9 nul keer voor**, dus daar viel niets naast te leggen.

**Labo Assemblage. Geen tegenspraak, en dit is de zwaarste overlap van dit
hoofdstuk.** `Labo/Assemblage/Theorie/Componenten.html` draagt onder de id `opslag`
precies dit onderwerp.

- **De M.2-schijf. Twee helften.** Het labo zegt dat je aan de inkepingen ziet of een
  M.2-SSD SATA of NVMe is en dat de handleiding van het moederbord zegt wat het slot
  aanvaardt; 11.12 zegt dat je op de lengte moet letten en dat je beter PCI Express
  dan SATA kiest. **De inkepingen staan niet in de syllabus en de lengte niet in het
  labo.**
- **De snelheid van SATA III. Geen tegenspraak.** Het labo zegt "6 Gbit/s, wat in de
  praktijk op ongeveer 550 MB/s neerkomt en waar een SATA-SSD tegenaan loopt"; 11.8
  rekent 6 Gb/s om naar 750 MB/s bruto, 150 MB/s overhead en 600 MB/s netto. Dat is
  de grens van de interface tegen wat een schijf er in de praktijk uit haalt, en de
  staafgrafiek van 11.10 zet SATA zelf ook op 550.
- **De mechanische schijf. Geen tegenspraak.** Het labo zegt "ongeveer 100 tot 200
  MB/s" en 11.3 zegt sinds beslissing 1 "zo'n 130 MB/s" aan de buitenrand, de helft
  daarvan bij de as. Dat ligt binnen elkaar.
- **De hybride schijf.** Het labo legt uit wat het is; de syllabus noemt hem in
  kernpunt 3 en 4 en behandelt hem verder niet. Een gat en geen tegenspraak.
- **PATA en IDE. Geen tegenspraak.** Het labo zegt in een zin dat het de oudere
  aansluitingen zijn met een brede lintkabel; 11.7 doet er twee bladzijden over.

**Labo Partitioneren. Geen tegenspraak.** `Theorie/Bestandssystemen.html` en
`Theorie/Spiekblad.html` dragen de sector van 512 bytes en de clustergrenzen, en die
komen overeen met 11.1. **De grenzen in het spiekblad staan in kB, MB en GB waar het
machten van twee zijn**, en dat is bij hoofdstuk 10 al genoteerd en met opzet niet
aangeraakt: de labotrack is onafhankelijk en elk bestandssysteem adverteert zijn
grenzen zo.

**Wat hoofdstuk 12 tot 16 niet mogen tegenspreken.** 11.11 draagt nu de tabel met de
PCI Express versies en zegt dat 7.0 de meest recente is; 11.5 zegt dat een SLC meer
schrijfcycli haalt dan een MLC en een MLC meer dan een TLC; en 11.13 zegt dat RAID 5
minstens drie schijven vraagt en RAID 6 minstens vier. Die vier zijn hier
bijgeschreven en staan niet in de Word.

### Wat er in de tekst opviel, en niet aangeraakt is

De tekst gaat er letterlijk in, dus dit staat hier en niet in de HTML.

- **"Tegenwoordig is de diameter van deze platters zo'n 3 tot 12cm"** in 11.1. Een
  schijf van 3,5 duim heeft platters van 9,5cm en een van 2,5 duim van 6,5cm; 12cm is
  de maat van een 5,25 duim schijf, die al lang niet meer gemaakt wordt.
- **"een SSD met meerdere bits mer cel"** in 11.5, waar per hoort te staan.
- **"De waarden blijven behouden zelfs als wordt de harde schijf spanningsloos
  gezet"** in 11.5, met de woorden in de verkeerde volgorde.
- **"heel gelijkaardig utizien"** in de probleemstelling van oefening 3.
- **"doorvoorsnelheid"** in 11.8, bij SATA I. Dezelfde sectie schrijft verderop wel
  doorvoersnelheid.
- **"appararen aan- en afgeschakeld"** in 11.11.
- **"voor synoniemen aanzien"** in 11.7 en **"afhankelijk is als opeenvolgende
  sectoren uitgelezen kunnen worden"** in 11.9, met als waar of hoort te staan.
  Dezelfde vaste vorm als de drie gevallen in 3.2.
- **"heeft natuurlijk te maken in welke mate je je gegevens wil beschermen"** in
  11.15, waar met ontbreekt.
- **RAID wordt met en zonder streepje geschreven.** 11.13 schrijft RAID 0, RAID 1 en
  RAID 5 los en RAID-6, RAID-10, RAID-0 en RAID-1 met een streepje, soms in dezelfde
  alinea. De koppen schrijven het alle vijf los.
- **mirrorring, mirroring, mirrorred en gemirrorde** staan alle vier in 11.13, en
  Test jezelf schrijft twee keer Mirrorring. De lopende tekst is niet aangeraakt, maar
  de ondertitel van `img/syllabus-11-raid-10.svg` schrijft "striping + mirroring" met
  een r: een tikfout die je noteert is iets anders dan een die je in een figuur zet.
- **"SSDs"** in 11.9 tegen **"SSD's"** overal elders.
- **"Onwaarschijnlijk, denk je misschien... Maar helaas, niets is minder waar."** en
  **"Een aanrader!"** en **"Wie geen centen heeft"** in 11.13, en **"Een nieuwe
  computer of laptop kopen zonder een SSD harde schijf is vrijwel nooit een goed
  idee"** in 11.5. Dat zijn patroon 14 en 16 en zouden weggaan als deze tekst hier
  geschreven was.
- **"men"** staat in 11.3, 11.7 en 11.10, de vorm die SCHRIJFSTIJL.md voor eigen
  tekst naar de je-vorm stuurt. Dat geldt niet voor de brontekst.
- **"512 Mb" als vierde mogelijkheid bij vraag 4 van Test jezelf** mengt bit en byte
  in een reeks, en dat is precies waar 10.5 over gaat. Als afleider is dat juist de
  bedoeling en ze is niet aangeraakt.
- **"Solid state harde schijven zijn voorlopig nog duurder"** in kernpunt 3, en
  **"SSD harde schijf"** in 11.5 en in oefening 1. Het eerste veroudert, het tweede
  is een pleonasme.
- **De ellipsen** in 11.10 ("Maar... ondertussen"), in 11.13 en in vraag 20 van Test
  jezelf zijn in de Word het teken en geen drie punten. Dat is opmaak en is zo
  gebleven.
- **De dubbele spaties** in "Naast een aantal  dataschijven" (11.13) en "moet de ene
  ingesteld worden" (11.7) staan zo in de Word.

## Hoofdstuk 12, Central Processing Unit (CPU)

**De sectie Studievragen achteraan heet hier Test jezelf**, zoals in hoofdstuk 1,
3, 4, 5, 6, 8, 9 en 11. Het kader Studievragen vooraan houdt zijn eigen naam en
staat samen met de Kernpunten op `Overzicht.html`. De pagina heet
`TestJezelf.html`; de importer schreef `Studievragen.html`.

**Vier secties, zeven Heading 3's, drie tabellen en acht afbeeldingsplaatsingen,
en elf gedrukte bladzijden, 143 tot en met 153.** Geen enkele Heading 4. De drie
tabellen zijn de twee kaders vooraan en de lege tabel van een rij onder "Schrijf
ALU voluit". Twee van de acht afbeeldingen zijn de kadericoontjes van 5,4mm die de
importer weggooit, dus `img/` kreeg er zes, alle zes inline en geen enkele
zwevend. **De import liet er dus geen enkele vallen**, anders dan bij hoofdstuk 11;
nageteld door de `a:blip` in het hoofdstuk tegen `img/` te leggen, wat sinds dat
hoofdstuk de vaste controle is.

**De vragen die dit hoofdstuk openliet, zijn op 8 en 9 september 2026 door de
lector beslist.** Elke correctie hieronder staat alleen in de HTML en een
herimport draait ze terug.

### 1. Vraag 3 had vier juiste antwoorden en is een open vraag geworden

"Uit wat bestaat een processorkern?" met ALU, CU, Registers en Cache heeft er vier
juist, en regel 14 en `export-syllabus.py` eisen er precies een: zonder ingreep
drukt het hele hoofdstuk geen Oplossingen. Dat is het geval van de drie vragen van
hoofdstuk 3, en de twee vormen die daar vastgelegd zijn, zijn allebei voorgelegd.

Het werd de open vraag: **"Uit welke vier onderdelen bestaat een processorkern?"**
met vier invulregels en een `<div class="oplossing">`. De vier mogelijkheden zijn
samen het antwoord geworden. Ze sluit daarmee aan bij studievraag 2 van het kader,
die de student datzelfde schema laat tekenen. **De prijs is een meerkeuzevraag**,
en die is uitdrukkelijk aanvaard: de Brightspace-test van elk labo is meerkeuze met
giscorrectie, dus elke open vraag is er een die daar niet meer op voorbereidt.

Omkeren was de andere uitkomst en is niet gekozen. Anders dan in hoofdstuk 3, waar
vier van de vijf mogelijkheden juist waren en de vraagzin alleen omgedraaid moest
worden, zijn hier **alle vier** de mogelijkheden juist, dus omkeren had een vijfde
mogelijkheid gevraagd die niet in de Word staat.

### 2. Drie vragen steunden op niets, en er is tekst voor bijgeschreven

Vraag 5 (bepaalt het processortype de lengte van de registers), vraag 6 (bepaalt
die lengte de maximum grootte van het RAM) en vraag 8 (compileren vertaalt naar een
instructieset) waren met geen enkele zin van dit hoofdstuk te beantwoorden. Dat is
het gat van de wet van Moore in hoofdstuk 1, van de bottleneck in 5, van het
partitieschema in 6, van realtime in 7, van de nadelen van ATX in 9, van het woord
kibibyte in 10 en van RAID 5 en 6 in 11, en de uitkomst is dezelfde. Ze passen in
de gedachtegang die er al staat en krijgen dus geen eigen kop, zoals bij 1, 5, 6,
9, 10 en 11 en anders dan bij 7.

- **12.2 > Registers**, na de alinea over de functies van elk register: "De breedte
  van die registers volgt uit het type processor: een 32 bit processor heeft
  registers van 32 bits en een 64 bit processor registers van 64 bits. Omdat een
  operand een geheugenadres is dat in zo'n register moet passen, legt die breedte
  meteen ook vast hoeveel werkgeheugen de processor kan aanspreken: met 32 bits zijn
  er 2^32 adressen en met 64 bits 2^64. Waar de grens dan precies ligt zie je bij
  Random Access Memory."
- **12.3 > CISC**, na de alinea over assembler en machinetaal: "Vandaag schrijf je
  een programma in een hogere programmeertaal en laat je een compiler dat naar
  machinetaal vertalen. Compileren is dus vertalen naar de instructieset van een
  processor: de compiler zoekt bij elke regel die je schreef de opcodes die die ene
  processor kent. Daarmee ligt een gecompileerd programma vast op een instructieset,
  en moet dezelfde broncode opnieuw gecompileerd worden om op een processor met een
  andere instructieset te draaien."

**Vraag 5 en 6 zijn het bijzondere geval, want ze leunden VOORUIT en niet op
niets.** Hoofdstuk 13, Random Access Memory, beantwoordt ze allebei woordelijk: het
zegt daar "De aandachtige lezer zal opmerken dat de processor registers dan ook 64
bit breed zijn in plaats van 32 bit" en "Het maximum operand adres is bepalend voor
het aantal bits dat opgeslagen kan worden in het werkgeheugen". De theorietrack loopt
in volgorde, dus wie hoofdstuk 12 leest heeft 14 nog niet gehad, en de zelftest van
12 was op dat moment niet te maken. De bijgeschreven zin doet daarom precies twee
dingen en niet meer: hij geeft het antwoord en verwijst door, in dezelfde richting
als de zin over de performance gap die er al stond.

**De twee getallen zijn met opzet 2^32 en 2^64 en geen bytes.** Hoofdstuk 13
schrijft daar "4 GB" en "16 exabytes", en dat zijn machten van twee met een
kilo-etiket, dus het geval waar hoofdstuk 10 en 11 een KiB van maken. Zolang
hoofdstuk 13 er niet staat, is die keuze niet te maken zonder de twee hoofdstukken
tegen elkaar te zetten; een aantal adressen is exact en ontloopt de vraag. **Reken
dat na wanneer hoofdstuk 13 ingevoerd wordt**, en trek de twee dan samen recht.
`Theorie/Bestandssystemen/Formatteren.html` schrijft zo'n macht al als `2^8`, dus de
notatie is die van de syllabus zelf en niet nieuw.

### 3. De virtuele kern van hyperthreading emuleert niets

Het kernpunt zei "een 'virtuele' kern die een hardware kern emuleert", en de lopende
tekst van 12.2 zei dat je met hyperthreading "in theorie dubbel zoveel werk aan[kan]
als met een single core processor", woord voor woord dezelfde belofte als voor een
echte tweede kern. Allebei rechtgezet.

**Emuleren is in deze syllabus al twee keer vastgelegd**, in hoofdstuk 5 en in
hoofdstuk 8, als het vertalen van de ene instructieset naar de andere. Een logische
kern doet dat niet: hij heeft zijn eigen registers en deelt de rekeneenheden van de
hardwarekern waar hij op zit. Dat is dus een tegenspraak binnen de syllabus, zoals
de twee kernpunten van hoofdstuk 8 die host en guest omdraaiden, en de formulering
is overgenomen in plaats van een tweede te verzinnen. Het kernpunt luidt nu "... ook
een 'virtuele' kern die de rekeneenheden van die hardwarekern deelt."

De tweede alinea van 12.2 > Kernen en hyperthreading luidt nu: "Een processor met
hyperthreading heeft, in de plaats van een extra hardware processor een extra
virtuele processor in dezelfde behuizing. Die virtuele processor heeft zijn eigen
registers maar deelt de rekeneenheden van de hardwarekern waarop hij zit. Het
besturingssysteem ziet er daardoor twee, en zolang de ene op het werkgeheugen wacht
kan de andere rekenen. Dat levert winst op, maar minder dan een echte tweede kern."
Hoofdstuk 1 zegt in 1.7 al dat meer kernen niet automatisch meer prestaties oplevert,
dus het hoofdstuk sprak ook hoofdstuk 1 half tegen. **Het kernpunt "Een dual core
processor met hyperthreading heeft voor het besturingssysteem 4 kernen" is niet
aangeraakt**, want dat zegt met zoveel woorden "voor het besturingssysteem" en dat
klopt nu ook met de lopende tekst.

### 4. Twee figuren zijn aangepakt en vier zijn gebleven

- **`img/syllabus-12-processorschema.svg`** vervangt het blokschema van 12.2, 800 bij
  423 pixels op 160.0mm, oftewel 127 dpi. Dat is boven de grens, dus de dpi is hier de
  reden niet: het origineel staat **volledig in het Engels** (Internal memory, Input
  devices, Output devices, Memory) in een Nederlandse tekst, het is een gescande
  lijntekening met korrel, en het is net de figuur die studievraag 2 de student laat
  natekenen. Dat is het geval van image86 van hoofdstuk 10, waar de korrel van de
  fotokopie de doorslag gaf boven de grens. **De woorden komen uit de tekst zelf en
  uit hoofdstuk 5** (patroon 20): INVOER, UITVOER en OPSLAG staan zo ook in
  `img/syllabus-05-von-neumann-schema.svg`, en WERKGEHEUGEN is het woord dat 12.2 zelf
  gebruikt waar het origineel Internal memory schrijft. Palet en markers zijn die van
  dat Von Neumann-schema. **Gerenderd met headless Edge voor ze vertrouwd werd**, en
  bij de eerste render bleken de twee verticale pijlen te kort: de twee punten liepen
  in elkaar tot een ruit. De verbindingen zijn nu 34px, de maat die het Von
  Neumann-schema al gebruikt. `syllabus-12-central-processing-unit-cpu-01.png` is
  geschrapt en **een herimport zet ze terug**, waarna regel 1 en 16 falen tot ze
  opnieuw weg is.

  **De schikking wijkt sinds 9 september 2026 af van het origineel, en dat is een
  inhoudelijke correctie.** De Word hangt Internal memory boven de CPU en External
  memory eronder, elk met een eigen lijn naar de CPU, en de eerste hertekening nam dat
  over. Zo leest de figuur dat de processor rechtstreeks van de schijf haalt, terwijl
  dezelfde sectie vier alinea's verder de geheugenhierarchie uitlegt (registers, cache,
  werkgeheugen, met de vergelijking Post-it, boek, kast, bibliotheek) en de CU de
  operands uitdrukkelijk uit het werkgeheugen haalt. Gemeld door de lector, die de
  schikking koos: de drie blokken staan nu onder elkaar, de CPU bovenaan met de invoer
  en de uitvoer opzij, daaronder het WERKGEHEUGEN en daaronder de OPSLAG. De tekening
  zegt daarmee hetzelfde als de tekst eronder, hoe verder van de CPU hoe trager. Twee
  andere schikkingen zijn afgewogen en afgevallen: het werkgeheugen boven laten staan
  met een lijn van de opslag eromheen (drukker, en de hierarchie is dan niet af te
  lezen) en de figuur laten zoals de Word ze tekent. De maten van de tekening
  veranderen niet, 740 bij 428 op 160.0mm, dus de bladspiegel schuift niet op. De
  `alt`-tekst van de figuur is mee herschreven. **Ook dit overleeft een herimport
  niet.**
- **De assemblerlijst van 12.3 is overgetypt.** 491 bij 264 pixels op 160.0mm is **78
  dpi**, de laagste van dit hoofdstuk, en versmallen is hier de knop niet: de
  inkthoogte van een tekstregel is nagemeten op **1,63mm** tegen 2,5mm voor de lopende
  tekst, dus dezelfde pixels op minder millimeter maken het erger in plaats van beter.
  Het zijn vijftien regels monospace, dus het valt onder de regel van hoofdstuk 10:
  een tabel of lijst die alleen als afbeelding bestaat, typ je over zolang de omvang
  het toelaat. **De winst is scherpte en geen formaat**: gedrukt staat de lijst nu in
  Consolas van 9pt, met een kapitaalhoogte van ongeveer 2,0mm, maar als vectortekst in
  plaats van als raster van 78 dpi. De debuggermarkeringen (de cursorbalk bij
  `0040102C` en het pijltje bij `00401038`) zijn vensterversiering en zijn niet
  meegetypt; de vijftien regels zelf staan er letterlijk, uitlijning inbegrepen.
  `syllabus-12-central-processing-unit-cpu-05.png` is geschrapt, met hetzelfde gevolg
  bij een herimport.

**`syllabus.css` draagt sinds DeN een regel `code, pre, kbd, samp` van 9pt Consolas
met `white-space: pre-wrap`, en hoofdstuk 12 is het eerste dat ze gebruikt.** Naast de
assemblerlijst gaat ook de C-lus van 12.2 > Cache er nu in; de importer had die vier
regels als vier losse `<p>` neergezet, inspringing en al kwijt. Dat is opmaak en geen
correctie. De regel is niet aangepast en hoefde dat ook niet: de langste regel van de
lijst is 47 tekens, ruim binnen de bladspiegel, en `pre-wrap` vangt de rest op.

**Vier afbeeldingen blijven staan.** De ALU-trapezium van 12.2 (1569 bij 866 op
116,4mm, **342 dpi**, veruit de scherpste van de hele Word), de registertekening van
12.2 (960 bij 720 op 160,0mm, 152 dpi), de performance gap-grafiek (800 bij 549 op
160,0mm, 127 dpi) en de staafgrafiek van tom's hardware (789 bij 380 op 160,0mm, 125
dpi). Alle vier boven de grens. **De eerste drie staan wel in het Engels**, en dat is
bij alle drie afgewogen: bij de ALU-tekening zijn Integer Operand, Opcode en Status
precies de woorden die de alinea ernaast zelf invoert, bij de registertekening zijn
EAX tot EBP en AH tot DL registernamen die geen vertaling hebben, en de performance
gap-grafiek is een **meting** met een bronvermelding eronder, en een meting hertekenen
betekent haar getallen overschrijven. **De staafgrafiek draagt het logo van tom's
hardware**, een leesbare naam, en mag dus blijven volgens de toets van hoofdstuk 9.

**De registertekening is op 9 september 2026 alsnog hertekend, en dat draait de
beslissing hierboven terug.** `img/syllabus-12-registers.svg` vervangt
`syllabus-12-central-processing-unit-cpu-03.png`. De afweging hierboven keek naar de
registernamen, en die klopt: EAX tot EBP en AH tot DL zijn namen en geen woorden, dus
daar valt niets aan te vertalen. Wat over het hoofd gezien was, is dat de rest van
het beeld wel gewone tekst draagt: **General-purpose Registers** langs de accolade, en
**16 bits**, **8 bits** en **32 bits** bij de maatpijlen. Dat is vijf keer Engels in
een Nederlandse tekst, en het zijn net de vier woorden waar de alinea eronder over
gaat, want die legt uit dat de breedte van een register uit het type processor volgt.
De accolade heet nu "Registers voor algemeen gebruik"; stack pointer en base pointer
blijven staan, want dat zijn de rollen van ESP en EBP en de tekst voert er geen
Nederlands woord voor in (patroon 20).

**En de plaats van AX was misleidend.** In het origineel staat AX rechts uitgelijnd in
de brede gele cel, dus tegen AH aan maar er nog buiten, terwijl de pijl "16 bits"
erboven wel precies AH plus AL overspant. Een lezer kan daaruit opmaken dat AX de
bovenste 16 bits van EAX zijn, en dat is fout. De hertekening zet daarom elke rij als
twee balken onder elkaar: de bovenste balk is EAX over de volle 32 bits, met zijn
onderste 16 bits licht getint, en de balk eronder is AX, precies zo breed als dat
getinte stuk en met AH en AL erin. De twee zijn met een streepje aan elkaar vast
getekend. Geen enkel gegeven van het origineel valt weg en er komt niets bij; alleen
de plaatsing is eenduidig gemaakt.

Wat verder gelijk blijft: de accolade dekt EAX tot en met EDI en niet ESP en EBP,
precies zoals in de Word, ook al zijn die twee in de x86-architectuur even goed
algemeen bruikbaar. Dat is een indeling van de brontekst en geen tikfout, dus ze is
niet aangeraakt.

**De drie andere afbeeldingen zijn op 9 september 2026 alsnog hertekend, en daarmee
staat er van dit hoofdstuk geen enkele bronafbeelding meer.** De afweging hierboven is
niet fout geworden, ze is niet langer beslissend: de beslissing van die dag is dat
alles wat iemand getekend heeft naar een eigen SVG gaat, en dat de dpi, de taal van de
labels en een tegenspraak met de tekst wel redenen blijven maar geen voorwaarde meer
zijn. Wat hierboven staat, is dus te lezen als de afweging van voor die beslissing, net
zoals bij de registertekening.

**`img/syllabus-12-alu.svg`** vervangt de ALU-tekening, 700 bij 390 op 116,4mm. Het
origineel was met 342 dpi veruit de scherpste afbeelding van de hele Word, dus de dpi
was hier het argument niet en is het nog altijd niet; wat overbleef is het Engels. De
afweging hierboven zegt dat Integer Operand, Opcode en Status net de woorden zijn die
de alinea ernaast invoert, en dat klopt maar half. **De alinea voert `operand` en
`opcode` in en verder niets**: ze schrijft "Dit worden ook wel de operands genoemd" en
"Dit wordt de opcode genoemd", en over Integer Operand, Integer Result en Status zegt
ze niets. Wat ze wel zegt, is dat een ALU rekent op "binaire gehele getallen" en dat
een FPU er is voor de kommagetallen, en dat is precies wat het woord Integer in die
tekening doet. De labels zijn daarom `Operand (geheel getal)` en `Resultaat (geheel
getal)`, met de woorden van de alinea zelf (patroon 20), en `Opcode` en `Status`
blijven staan zoals ze zijn: het eerste omdat de tekst het zo schrijft, het tweede
omdat het in het Nederlands hetzelfde woord is. A, B en Y blijven de letters van het
origineel, en de inkeping bovenaan blijft, want dat is de vorm waaraan het symbool
herkend wordt. Palet, lijndikte en pijlpunt zijn die van
`img/syllabus-12-processorschema.svg`, dat een halve bladzijde hoger op diezelfde
pagina staat. **Gerenderd met headless Edge voor ze vertrouwd werd.** De verhouding is
1,79 tegen 1,81 van de PNG, dus de figuur is op dezelfde 116,4mm even hoog als eerst en
de bladspiegel schuift niet. `syllabus-12-central-processing-unit-cpu-02.png` is
geschrapt en **een herimport zet ze terug**, waarna regel 1 en 16 falen tot ze opnieuw
weg is.

**`img/syllabus-12-performance-gap.svg`** vervangt de grafiek van de performance gap,
900 bij 600 op 160,0mm. Dit is de eerste **geleende meting** die hier hertekend is, en
de regel daarvoor is dat de getallen blijven wat ze zijn en nooit bijgewerkt worden;
wat verandert is de taal van de assen en het palet, en onder de figuur komt in woorden
te staan waar de meting vandaan komt.

**De knikpunten zijn uit de pixels van het origineel gelezen en niet afgeschat**, want
een meting overschrijven is precies wat hier niet mag. De assen zijn eerst geijkt (de
y-as staat op x=74 en de x-as op y=442, tien rasterlijnen op 40,7 pixels uit elkaar
geven 20,3 pixels per eenheid, en de vier jaartallen onder de as geven 35,35 pixels per
jaar), daarna is elke lijn op kleur gevolgd en zijn de knikpunten met een
kleinste-kwadratenpassing per segment bepaald. De rest van de fit blijft onder de halve
pixel, dus dit zijn de knikpunten van het origineel en geen benadering ervan:

| | 2000,6 | 2004,5 | 2006,4 | 2008,4 | 2010,5 | 2013,4 | 2014,4 | 2016,2 | 2016,4 |
|---|---|---|---|---|---|---|---|---|---|
| werkgeheugen | 0,51 | 1,27 | 2,51 | 5,00 | | 7,59 | | | 8,98 |
| processor | 0,17 | | 1,15 | | 3,60 | | 10,81 | 20,00 | |

**Twee knikken zijn nagerekend omdat ze er geen hoefden te zijn.** Die van het
werkgeheugen in 2013,4 wijkt maar 0,15 eenheid af van een rechte lijn tussen haar
buren, en dat is 3 pixels: net genoeg om echt te zijn. Die van de processor rond 2001,9
verbeterde de passing met minder dan een pixel en is dus **niet** overgenomen, want dat
is de ronding van het lijnbegin en geen meetpunt.

**De voetnoot van het origineel gaat mee**, vertaald, want ze zegt dat de grafiek uit
benaderde en samengevoegde gegevens is afgeleid en dat er een prognose in verwerkt zit.
Zonder die zin leest de rechterhelft van de grafiek als meting.

**Het bijschrift noemt geen auteur, en dat is een beslissing van de lector van 9
september 2026.** Er staat geen logo en geen naam op het beeld, en de voetnoot noemt er
ook geen, dus er valt geen bron te noemen die na te kijken is. Het bijschrift luidt
daarom "Naar een grafiek uit de cursustekst; de meetwaarden zijn ongewijzigd
overgenomen": dat zegt wat er te controleren valt en claimt niets. Dat is iets anders
dan bij `syllabus-12-tom-s-hardware-verbruik.svg` hieronder, waar het logo op het beeld
staat en de naam dus wel genoemd wordt. **Er staat ook geen jaartal bij vanaf wanneer
de prognose loopt**, want de voetnoot zegt dat niet en het is uit de grafiek niet af te
lezen.

**De titel is Nederlands en houdt het woord dat de tekst zelf gebruikt.** Het origineel
heet "Processor-Memory Performance Gap", en de alinea onder de figuur schrijft "Om
CPU-RAM performance gap te dichten". De figuur heet daarom "De performance gap tussen
processor en werkgeheugen" (patroon 20): een volledig Nederlandse titel zou de figuur
losknippen van de zin die haar aanhaalt.

**De twee lijnen zijn `#004d40` voor de processor en `#4d8b7f` voor het werkgeheugen,
en de pijl van de kloof is `#9e2f26`.** De lopende tekst noemt geen enkele kleur bij
naam, dus de uitzondering van 6.5 geldt hier niet en het palet gewoon wel. De labels
staan naast hun eigen lijn met een kort aanwijsstreepje in dezelfde kleur, in plaats
van gedraaid op de lijn zoals in het origineel; dat is opmaak en geen gegeven. **De
pijl loopt van 20 tot 9,6 en dus niet tot aan de lijn van het werkgeheugen**, precies
zoals in het origineel, waar de onderste punt een eindje boven die lijn blijft steken.
**Gerenderd met headless Edge voor ze vertrouwd werd.** De verhouding is 1,50 tegen
1,46 van de JPEG, dus de figuur is op dezelfde 160,0mm ruim 3mm minder hoog en de
bladspiegel kan alleen maar winnen. `syllabus-12-central-processing-unit-cpu-04.jpeg`
is geschrapt, met hetzelfde gevolg bij een herimport.

**`img/syllabus-12-piekverbruik.svg`** vervangt de staafgrafiek van 12.3, 900 bij 430
op 160,0mm. Dit is de tweede geleende meting, en hier valt de bron wel te noemen: het
logo van tom's hardware staat op het beeld. Het bijschrift luidt daarom "Meting van
tom's hardware, System Peak Power met Prime95", en dat doet meteen twee dingen: het
noemt de meter, en het bewaart de oorspronkelijke titel van de meting op de plaats waar
ze hoort. **Het logo zelf gaat niet mee**, want dat is het merkteken van tom's hardware
en geen gegeven van de meting; de naam in woorden vervangt het, precies zoals de regel
van 9 september 2026 het zegt.

**De vier waarden zijn nagemeten tegen de as en niet overgenomen op hun woord**, want
overtypen is nakijken en de kibi-tabel van 10.4 heeft laten zien wat dat kan opleveren.
De staven beginnen op x=433 en eindigen op 497, 506, 656 en 759, wat met de vier
merktekens van de as neerkomt op 1,97 pixels per watt; de gedrukte 33, 37, 113 en 164
kloppen daar alle vier op een pixel of twee mee. **Hier zat dus geen rekenfout in**, en
dat is de moeite van het noteren waard, want zonder de meting was er niets om na te
kijken.

**De titel is vertaald en de productnamen niet.** Het origineel heet "System Peak Power
/ using Prime 95 / Power Requirement [Watts]", en dat worden drie Nederlandse regels
boven de figuur: "Piekverbruik van het systeem", "gemeten met Prime95" en "opgenomen
vermogen in watt". De vier staaflabels houden hun productnaam letterlijk (de vorm van
de eigenaar), maar `2 Cores 4 Threads` wordt `2 kernen, 4 threads`, want 12.2 schrijft
zelf "meerdere kernen of cores" en "threads" (patroon 20). De komma in `1,66 GHz` is de
huisstijl van deze syllabus, die elders al 3,2 GHz en 1,2 GHz schrijft. **De waarden
staan naast de staaf in plaats van erin**, wat opmaak is en geen gegeven; ze staan in
het origineel als witte tekst binnen de staaf, en bij 33 en 37 is dat op 160mm krap.
**Gerenderd met headless Edge voor ze vertrouwd werd.** De verhouding is 2,09 tegen
2,08 van de PNG, dus de bladspiegel schuift niet.
`syllabus-12-central-processing-unit-cpu-06.png` is geschrapt, met hetzelfde gevolg bij
een herimport.

**Daarmee draagt hoofdstuk 12 geen enkele bronafbeelding meer**: de zes bestanden die de
import in `img/` zette, zijn alle zes vervangen of geschrapt (het processorschema, de
registers, de ALU, de performance gap en het piekverbruik hertekend, en de
assemblerlijst overgetypt). **Een herimport zet ze alle zes terug**, en dan falen regel
1 en 16 tot ze opnieuw weg zijn.

**De zes `alt`-teksten zijn met de hand geschreven na het openen van elk bestand**, en
een nieuwe import gooit ze weg.

### De twaalf vragen van Test jezelf

Elf uit de Word en een bijgeschreven. **Tien meerkeuze, alle tien nageteld op precies
een juist antwoord**, en twee open met elk een `<div class="oplossing">`. De lijst
staat op `numId` 74 met de keuzes op 62, doorlopend van 1 tot 12, zonder enkele
`start=`.

| Vraag | Antwoord | Waarop het steunt |
|---|---|---|
| 1 Intel 32 bit | a, x86 | 12.3, de drie hoofdvarianten van x86; hoofdstuk 5 zegt hetzelfde |
| 2 Intel 64 bit | b, x64 | 12.3, "Deze laatste wordt ook wel de x64 of amd64 instructieset genoemd" |
| 3 Uit welke vier onderdelen | open, ALU, CU, registers, cache | 12.2, de opsomming waarmee de sectie opent; zie beslissing 1 |
| 4 ALU voluit | open, Arithmetic and Logic Unit | 12.2, eerste zin van de sectie ALU |
| 5 Registerlengte volgt uit het processortype | a, Ja | de bijgeschreven zin, zie beslissing 2 |
| 6 Registerlengte begrenst het RAM | a, Ja | de bijgeschreven zin, zie beslissing 2 |
| 7 Wat is geen instructieset | d, RISC / CISC | 12.3 opent met "twee verschillende instructiesetarchitecturen"; x86, amd64 en ARM zijn wel instructiesets |
| 8 Compileren vertaalt naar een instructieset | a, Waar | de bijgeschreven alinea, zie beslissing 2 |
| 9 64 bit is niet vanzelf x64 | b, Nee, ook ARM | 12.3, ARM en x86 zijn twee instructiesets die los staan van de breedte |
| 10 Instructieset van een CISC processor | b, x86 / amd64 | 12.3, "Het voorbeeld bij uitstek van CISC is de x86 instructieset" |
| 11 Bij RISC is de compiler complex | a, Waar | 12.3 > RISC, minder transistoren plus "geavanceerde compilers" |
| 12 Waarom een groter cache helpt | a, minder verkeer met het trage werkgeheugen | 12.2 > Cache, de cache hit en de vergelijking met de Post-IT; zie hieronder |

**Vraag 12 is bijgeschreven, want studievraag 5 werd door niets getoetst.** Het kader
vooraan vraagt "Verklaar waarom de grootte van het cache geheugen een grote invloed
heeft op de prestaties van een processor", de hele sectie Cache antwoordt daarop, en
geen van de elf vragen ging erover. Dat is het geval van hoofdstuk 1, waar er een
zesde vraag bijkwam voor de studievraag die niets toetste. **De drie afleiders zijn de
misvattingen die de tekst zelf rechtzet**: dat cache sneller is dan de registers (12.2
zegt "Ze werken iets trager dan de registers"), dat een grotere cache de kloksnelheid
verhoogt, en dat cache het werkgeheugen vervangt. Ze staat achteraan en niet
thematisch tussengevoegd, zodat elke vraag uit de Word op haar eigen nummer blijft
staan en een herimport leesbaar blijft.

**Studievraag 4 van het kader wordt nog altijd door niets getoetst**, en dat is
gelaten: "Op basis van een probleemstelling moet je zelf een geschikt type processor
(x64 / ARM) kunnen kiezen" is een oefening met een casus en geen meerkeuzevraag, en
hoofdstuk 9 en 11 dragen daar allebei al een `Oefening` voor. Genoteerd, niet
gerepareerd.

### 5. De Core 9 bestaat niet en is geschrapt

Nagekomen beslissing van de lector, 9 september 2026. 12.1 schreef "Intel met zijn Core
3, 5, 7 en 9 serie". Intel liet de i uit de naam vallen in 2023, dus Core 3, Core 5 en
Core 7 zijn de huidige vorm, maar **een Core 9 bestaat in geen van beide reeksen**: dat
heette Core i9 en heet nu Core Ultra 9. Dat is de regel van hoofdstuk 4 en 7 over een
productnaam die veroudert, alleen viel er hier niets elders gelijk te trekken: **geen
enkel ander hoofdstuk en geen enkele labopagina noemt een Core-reeks**, nagekeken met
grep.

Van de drie uitkomsten is de kleinste gekozen: **alleen de 9 valt weg**, dus 12.1 leest
nu "Core 3, 5 en 7 serie". Dat maakt het hoofdstuk meteen gelijk aan zichzelf, want 12.2
noemde de 9 al niet ("van het type Core 3, Core 5 of Core 7"), en het is de huidige
schrijfwijze van de eigenaar. Teruggaan naar i3, i5, i7 en i9 zou de vorige naam
invoeren, en Core Ultra 9 erbij zetten zou een tweede reeksnaam invoeren die het
hoofdstuk verder nergens gebruikt.

### De schrijfwijze van x86, x64, amd64 en ARM

Het hoofdstuk schreef ze door elkaar: **`arm`** als mogelijkheid bij vraag 7 en
**`X86/amd64`** bij vraag 10, terwijl de lopende tekst van datzelfde hoofdstuk overal
`x86`, `x64` en `ARM` schrijft. Nagekeken met grep tegen hoofdstuk 4, 5 en 9, die het
alle drie ook zo schrijven, en `amd64` komt in geen enkel ander hoofdstuk voor. Het
zijn dus `x86`, `amd64`, `ARM` en `x86 / amd64` geworden. **Dat is spelling en geen
inhoudelijke correctie**, en het valt onder de regel dat de vorm van een productnaam
die van zijn eigenaar is, alleen viel er hier niets elders gelijk te trekken.
**`amd64` blijft klein**, want zo schrijft de lopende tekst van 12.3 het zelf en zo
heet de architectuur ook bij Debian en de BSD's; AMD64 zou de enige kapitalenvorm in
de hele syllabus zijn.

### De bladspiegel van dit hoofdstuk

Elf bladzijden, 143 tot en met 153, met de gedrukte 12.5 Oplossingen als laatste.
Nagerekend **na** de redactionele ronde.

**Hoofdstuk 1 tot 11 zijn geen bladzijde verschoven**, alle 97 rijen van de
inhoudstafel staan op hun oude nummer en de zes nieuwe rijen pasten nog binnen de vijf
bladzijden voorwerk. Nagerekend door de inhoudstafel van deze PDF rij voor rij naast
die van de vorige te leggen.

**De schaalfactor is nagekeken en er krimpt niets**, de controle die hoofdstuk 11 hier
neergezet heeft. Alle inhoudsbladzijden openen met `3.1249194` en de vijf
voorwerkbladzijden met `3.125`, precies dezelfde verdeling als de vorige PDF; drie
bladzijden vol beeld dragen zoals eerder helemaal geen schaaltransformatie. **Lees dat
met `pypdf` en niet met een regex over de ruwe bytes**: pypdf haalt de stream van elke
bladzijde uit haar objectstream, en zonder dat zie je er vijf van de 153.

**Bladzijde 152 draagt vraag 12 alleen.** Dat is het geval van vraag 9 van hoofdstuk 3
en vraag 24 van hoofdstuk 11: `ol.vragen > li` houdt elke vraag heel, en de vier lange
mogelijkheden van die vraag passen niet meer onder vraag 11. De vraag verplaatsen lost
dat niet op, want de hoogte van de lijst blijft dezelfde.

### Waar dit hoofdstuk en de rest van dit vak naast elkaar staan

Patroon 17: de twee tracks zeggen hetzelfde twee keer en er linkt niets tussen. **Er is
aan geen enkele labopagina iets veranderd.**

- **Hoofdstuk 5, De Von Neumann architectuur. Geen tegenspraak, en dit is de zwaarste
  overlap.** 5.2 heet Processor: x86 vs x64 vs ARM en de hele sectie 12.3 gaat
  daarover, net als vijf van de twaalf vragen. Ze sluiten aan: 5.2 zegt "x64 is de 64
  bit processor variant terwijl x86 (of ook i386) de 32 bit voorganger was" en 12.3
  zegt dat x86 drie hoofdvarianten heeft waarvan de 64 bits-variant x64 heet. Dat is
  dezelfde stand van zaken van twee kanten bekeken, en vraag 1 en 2 van Test jezelf
  steunen op allebei. Ook "geen 32 bit processor meer te koop" staat woordelijk in
  allebei. **Wat 12.3 erbij heeft is CISC en RISC**, en wat 5.2 erbij heeft is de
  emulatie en de reden waarom een virtuele machine geen andere instructieset draait.
  Dat is een gat aan weerskanten en geen tegenspraak.
- **Hoofdstuk 1, Generaties. Half tegengesproken, en rechtgezet.** Zie beslissing 3.
  Wat 1.7 verder over threads en kernen zegt ("meer kernen niet automatisch
  performanter", "parallellisme heeft enkel nut als programma's threads gebruiken")
  staat naast het kernpunt over threads van dit hoofdstuk en spreekt het niet tegen.
- **Hoofdstuk 7, Besturingssystemen. Geen tegenspraak.** 7.3 Procesbeheer gaat over
  wie beslist welk proces de processor krijgt, 12.2 over hoeveel kernen er zijn om aan
  toe te wijzen. Twee helften.
- **Hoofdstuk 13, Random Access Memory. Nog niet ingevoerd, en het draagt twee dingen
  die met dit hoofdstuk moeten kloppen.** De registerbreedte en de adresgrens, zie
  beslissing 2, en de kilo/kibi-vraag die daarbij hoort.

**Labo Assemblage. Geen tegenspraak.** `Labo/Assemblage/Theorie/Componenten.html`
draagt onder de id `processor` precies dit onderwerp en noemt vier gegevens: het aantal
cores, de kloksnelheid, het cachegeheugen en het energieverbruik. Het kernpunt van dit
hoofdstuk noemt er drie van de vier (kloksnelheid, kernen, cache) en 12.2 legt ze uit.
**Het labo zegt er iets bij dat de syllabus niet heeft**, namelijk dat L1 per core zit
en L3 door alle cores gedeeld wordt; 12.2 zegt alleen dat L2 en L3 groter en trager
zijn. Een gat en geen tegenspraak. Het labo noemt geen instructieset en geen
hyperthreading, dus daar viel niets naast te leggen.

**Wat hoofdstuk 13 tot 16 niet mogen tegenspreken.** 12.2 zegt nu dat de virtuele kern
van hyperthreading de rekeneenheden van zijn hardwarekern deelt en minder oplevert dan
een tweede kern; 12.2 > Registers zegt dat de registerbreedte uit het processortype
volgt en het adresseerbare werkgeheugen begrenst; en 12.3 zegt dat compileren vertalen
naar een instructieset is. Alle drie zijn hier bijgeschreven en staan niet in de Word.

### Wat er in de tekst opviel, en niet aangeraakt is

De tekst gaat er letterlijk in, dus dit staat hier en niet in de HTML.

- **"De meest bekende RISC instructieset is de ARM instructieset ARM staat voluit voor
  Acorn RISC Machine."** in 12.3. Er ontbreekt een punt tussen de twee zinnen.
- **"Het hoge energie maakt het gebruik van CISC processoren ... onmogelijk"** in 12.3,
  waar energieverbruik hoort te staan.
- **"Om CPU-RAM performance gap te dichten"** in 12.2, waar de ontbreekt.
- **"De functies van ieder individueel register overstijgt het bereik"** in 12.2, waar
  overstijgen hoort te staan.
- **"Wanneer een programma instructie uitgevoerd wordt"** in 12.2, waar
  programma-instructie hoort te staan.
- **"Door complexe operaties in een instructie te stoppen leverde dat kleinere
  programma's ... op"** in 12.3, met een onderwerp te veel.
- **"Post-IT"** in de vergelijking van 12.2 > Cache. 3M schrijft Post-it. Het is een
  merknaam en zou dus onder de eigenaarsregel vallen, maar hij komt een keer voor, in
  een vergelijking, en is geen term van dit vak; hoofdstuk 11 liet op dezelfde grond
  "mer cel" en "utizien" staan.
- **De dubbele spatie** in "op de PCB van de processor.  Ze werken" (12.2) staat zo in
  de Word.
- **"men"** staat in 12.2 ("gebruikt men cache geheugens") en in 12.3, de vorm die
  SCHRIJFSTIJL.md voor eigen tekst naar de je-vorm stuurt. Dat geldt niet voor de
  brontekst.
- **"Als het budget toelaat kies je best een Core 7 processor"** in 12.2 is een
  aanbeveling zonder criterium, en **"trachten te ontcijferen..."** in 12.3 is patroon
  14. Ze zouden weggaan als deze tekst hier geschreven was.
- **"x86-instructieset" met een streepje** in 12.3, terwijl dezelfde alinea verderop
  "de x86 instructieset" los schrijft.

## Hoofdstuk 13, Random Access Memory (RAM)

**Dit hoofdstuk heeft geen sectie Studievragen achteraan, en er is dus geen Test
jezelf geschreven.** Het kader Studievragen vooraan telt wel zes vragen en staat samen
met de Kernpunten op `Overzicht.html`.

**Voor de beslissing na hoofdstuk 16 telt niet "heeft dit hoofdstuk een Test jezelf"
maar "draagt het ergens vragen".** Die twee lopen uiteen, en dit hoofdstuk is de
aanleiding om dat op te schrijven. Negen hoofdstukken hebben een `TestJezelf.html`
(1, 3, 4, 5, 6, 8, 9, 11 en 12); hoofdstuk 10 heeft in de plaats een `Oefeningen.html`
en hoofdstuk 2 een `ol.vragen` midden in 2.1 Hardware herkennen, dus die twee toetsen
wel degelijk. **Wat overblijft zijn hoofdstuk 7 en dit hoofdstuk: de enige twee die
nergens een vraag stellen.** Leg die twee dus naast elkaar wanneer de beslissing valt,
en niet de vier zonder `TestJezelf.html`.

**Elf secties, geen enkele Heading 3 of 4, twee tabellen en negentien
afbeeldingsplaatsingen.** De twee tabellen zijn precies de twee kaders vooraan; er is
geen enkele lege tabel, dus nergens invulruimte. Twee van de negentien zijn de
kadericoontjes van 5,4mm die de importer weggooit, dus `img/` kreeg er zeventien,
waarvan twee zwevend (`wrapSquare`): `-01` naast de alinea over het adres van 8 cellen
in 13.1, en `-16` naast "Bij dual en quad channel maakt het wel uit" in 13.11. **De
import liet er geen enkele vallen**, nageteld met `r:embed` en niet met de naieve
telling, die hier 21 zou geven in plaats van 19.

**Geen enkele figuurparagraaf in dit hoofdstuk droeg tekst, dus geen enkele figuur
kreeg een bijschrift uit de Word.** Alle `alt`-teksten zijn met de hand geschreven na
het openen van elk bestand, en een herimport gooit ze alle zeventien weg.

### 1. Zeven correcties, alle zeven gemeld voor ze doorgevoerd werden

Geen ervan overleeft een herimport van dit hoofdstuk.

| Waar | Wat de Word zegt | Wat het hier zegt |
|---|---|---|
| 13.10, eerste ECC-voorbeeld | "ongeacht de **drie** enkele bitfouten" | **twee**. 0000011111 tegen 0000000111 verschilt op bit 6 en 7, en de tabel eronder zegt zelf hamming distance 2 |
| 13.10, tweede ECC-voorbeeld | "door de **vier** enkele bitfouten" | **drie**. Tegen 0000000011 verschilt bit 6, 7 en 8, en de tabel zegt 3 |
| 13.1 | "het grootste geheel getal is dan 2^31" | 2^31 - 1. Drie alinea's verder schrijft het hoofdstuk zelf 2^64 - 1 en 2^32 - 1 |
| 13.1 | "Een cell is 8 bits" | Achter elk adres zitten 8 cellen van elk 1 bit. 13.1 en 13.2 zeggen allebei dat een cel 1 bit draagt, en figuur `-01` tekent precies dat |
| 13.1 | "de limiet van 4 GB" en "16 exabytes" | 4 GiB en 16 EiB, zie beslissing 2 |
| 13.8 | "Deze verdubbelt in vergelijking met DDR3 tot minstens 2133 MHz" | DDR4 loopt van 1066 MHz tot 1600 MHz, ofwel 2133 tot 3200 MT/s, zie beslissing 4 |
| 13.11 | "beiden in een slot van hetzelfde channel" | in twee sloten van een **verschillend** channel, zie beslissing 3 |

**De twee ECC-fouten hangen samen, en pas met twee en drie klopt het hoofdstuk met
zichzelf.** Een code met hamming distance 5 corrigeert tot 2 fouten en zit vanaf 3
fout, en dat is precies wat de twee voorbeelden tonen: het eerste wordt goed
gecorrigeerd, het tweede verkeerd. Met drie en vier zou het eerste voorbeeld buiten
het correctiebereik vallen en toch goed uitkomen. **Alle acht de XOR-rijen van de twee
tabellen zijn nagerekend en kloppen.**

### 2. De kilo-etiketten van 13.1, en waar de grens ligt

Dit is het geval dat bij hoofdstuk 12 vooruitgeschoven was, met de opdracht om het te
beslissen zodra hoofdstuk 13 er stond. De byte-aantallen liggen vast en alleen het
etiket verschilt: 2^32 adressen van een byte zijn exact 4 294 967 296 bytes ofwel
**4 GiB**, en 2^64 bytes zijn exact **16 EiB**. "16 exabytes" is decimaal 18,4 en dus
gewoon fout. Die twee zijn de eigen rekensom van het hoofdstuk en gaan dus naar de
IEC-eenheid, precies zoals de zes page- en blockgroottes van 11.5 en de clusters van
6.2.

**Waar de syllabus een fabrikant citeert, blijft GB staan**, en dat is de grens. "vaak
16 GB tot 32 GB werkgeheugen aangetroffen" (13.1), "8 tot 64 GB DDR4 of DDR5" (13.9),
"16 GB per DIMM" en "64 GB per DIMM" (13.8) en de drie capaciteiten die van een etiket
op een foto afgelezen worden (64MB, 256MB, 2GB in 13.4, 13.5 en 13.6) zijn allemaal
wat er verkocht of gedrukt wordt. Een afgedrukte bladzijde bewerken doet deze repo
niet, en dat geldt net zo goed voor een etiket op een module.

**Wat die twee helften bij elkaar houdt is een bijgeschreven alinea in 13.1**, na de
zin over het theoretische maximum: dat 32 bits precies 4 294 967 296 bytes geven, dat
een geheugenfabrikant zelf ook in machten van twee rekent maar GB op de module drukt,
en dat GB op een etiket of in een winkel dus gibibyte betekent. Zonder die alinea
staat in dezelfde sectie GiB naast GB zonder dat de student weet waarom. Ze verwijst
naar het hoofdstuk Informatievoorstelling, dat hetzelfde over Windows zegt.

**Hoofdstuk 9 is niet aangeraakt.** 9.3 schrijft "minstens 8 GB DDR4 werkgeheugen" en
9.5 rekent met 1 GB, 2 GB en 4 GB uit de datasheets van Beckhoff. Dat eerste is wat er
verkocht wordt en het tweede staat op een afgedrukte bladzijde, dus allebei vallen ze
aan de fabrikantskant van de grens hierboven. **Er is dus geen enkele plaats waar twee
hoofdstukken hetzelfde getal anders etiketteren.**

### 3. Dual channel stond omgekeerd, en de foto ging mee

13.11 zei "Heb je er twee dan doe je er goed aan om ze beiden in een slot te steken van
hetzelfde channel", met als reden "dat je dan parallel kan lezen en schrijven". Die
reden weerlegt de zin: parallel lezen kan alleen over twee channels, en twee modules in
hetzelfde channel leveren single channel op met twee ranks. De eigen figuur `-17` van
datzelfde hoofdstuk zet twee aanliggende sloten op een rood kruis.

**De geannoteerde foto `-16` is vervangen door `img/syllabus-13-channels.svg`, en dat
is een uitzondering op de regel van 9 september dat een geannoteerde foto een foto
blijft.** Haar labels Channel One en Channel Two groeperen de twee gelijkgekleurde
sloten als een channel, en een lezer die na de correctie "verschillende channels"
leest, komt daarmee uit op "dus twee verschillend gekleurde sloten", wat op de meeste
borden precies fout is. De vervanging tekent daarom niet de foto na maar het begrip:
een geheugencontroller, twee channels van elk twee sloten, en een module in elk
channel. De lector heeft die uitzondering uitdrukkelijk toegestaan.

**Twee dingen zijn erbij geschreven omdat het hoofdstuk ze beloofde en nooit gaf.** De
openingsalinea vraagt "waarom er verschillende kleuren werden gebruikt op het
moederbord" en kwam daar nooit op terug; en studievraag 6 vraagt naar single, dual **en
quad**, terwijl quad channel alleen in de kop en in een half zinnetje voorkomt. Er
staat nu bij wat een channel is, dat een quad-channelbord er vier heeft en dan vier
modules vraagt, en dat het bord met de kleur van de sloten aanduidt welke twee je samen
gebruikt. **`Labo/Assemblage/Theorie/Componenten.html` is niet aangeraakt** (patroon
17); die pagina zegt onder `id="werkgeheugen"` al het juiste, namelijk dat je bij vier
sloten meestal het tweede en het vierde gebruikt.

### 4. Woord betekent hier iets anders dan in hoofdstuk 10

10.4 schrijft "Een word zijn 16 bits" en "Een double word zijn 32 bits"; 13.1 schrijft
dat een woord 32 bits is op een 32 bit processor en 64 bits op een 64 bit processor.
Allebei kloppen ze, maar geen van beide is universeel: in de computerarchitectuur is
een woord de natuurlijke breedte van de processor, en in assembler voor x86 zijn de
namen WORD en DWORD sinds de 8086 op 16 en 32 bits blijven staan. 10.4 gaf de
x86-conventie als algemene definitie, en dat is wat rechtgezet is.

**Allebei de hoofdstukken dragen nu een zin die naar de andere betekenis wijst**, en
geen van beide verliest een voorbeeld. Dat is bewust een andere uitkomst dan bij
hoofdstuk 5 en 8, waar een van de twee passages gewoon fout stond: hier is het een naam
met twee betekenissen en niet een bewering met twee waarheden. **De zin in 10.4 is de
eerste wijziging aan een hoofdstuk dat al gedrukt stond en die niet uit een fout maar
uit een later hoofdstuk voortkomt**; een herimport van hoofdstuk 10 gooit ze weg.

**13.8 spreekt de labotrack niet meer tegen.** 13.7 geeft DDR3 in buskloksnelheid (400
tot 1066 MHz) en 13.8 gaf DDR4 in transfers maar noemde het MHz, waardoor "de
kloksnelheid verdubbelt tot 2133 MHz" een eenheid verwart: DDR4-2133 heeft een busklok
van 1066 MHz, precies waar DDR3 ophoudt.
`Labo/Assemblage/Theorie/Componenten.html` schrijft datzelfde getal als 2133 MT/s, dus
dezelfde bladzijde en de labopagina drukten hetzelfde getal in twee eenheden. Er staat
nu 1066 tot 1600 MHz met de MT/s-waarde erbij, en dat sluit aan op de tabel van het
labo. Wat wegvalt is het woord "verdubbelt", en dat is met opzet: het was onwaar.

### 5. De figuren

**Negen zijn aangepakt en acht zijn gebleven.** De beslissing van 9 september dat elke
tekening hertekend wordt, kwam er tijdens deze import bij; wat hier al gedaan was, valt
eronder. Vier zijn tijdens de import zelf gedaan en de vijf andere op dezelfde dag, in
twee sessies naast elkaar. **Van dit hoofdstuk staat er dus niets meer op de worklijst in
CLAUDE.md**, en het is daarmee het eerste hoofdstuk waarvan elke tekening hertekend is.

- **`img/syllabus-13-sdr-sdram.svg`** vervangt `-06`, 274 bij 84 pixels op 94,0mm ofwel
  **74 dpi**, de laagste van dit hoofdstuk, met Memory Core en I/O in het Engels.
  Versmallen is hier de knop niet: de tekst is met 2,4mm inkthoogte al groot genoeg en
  alleen onscherp, dus het is de winst van hoofdstuk 12, scherpte en geen formaat. De
  tekening zegt er iets bij dat het origineel niet toonde, een pijltje op elke opgaande
  flank van de uitgangsklok, want dat is precies wat de alinea ernaast beweert. Ze staat
  op 110,0mm, gekozen zodat haar tekst van 13px op 2,55mm drukt en dus even groot is als
  de lopende tekst.
- **`img/syllabus-13-channels.svg`** vervangt `-16`, zie beslissing 3. Op 130,0mm,
  zelfde rekensom.
- **`-12`, de foto van een DDR4-module**, stond met 400 bij 96 pixels op 160,0mm op
  **63 dpi** en is versmald naar **104,0mm**, wat haar op ongeveer 98 dpi brengt. Dat is
  de regel van hoofdstuk 9: bij een foto is de breedte de enige knop.
- **`img/syllabus-13-adresrooster.svg`** vervangt `-01`, het adresrooster van 13.1, 190
  bij 486 pixels op 50,4mm ofwel 96 dpi. De dpi is de reden niet: de figuur draagt
  **Address** boven de adreskolom in een Nederlandse tekst, en het is een tekening, dus ze
  valt onder de beslissing van 9 september. De kop heet nu **Adres**; 8 bits blijft staan,
  want dat schrijft de lopende tekst er zelf ook zo. Geen enkel gegeven valt weg: twaalf
  adressen 0 tot en met 11, acht vakjes per adres, en de maatpijl eronder. Ze staat op
  **51,0mm**, gekozen zodat haar tekst van 13px op 2,55mm drukt, dezelfde rekensom als bij
  `-06` en `-16`.
- **`img/syllabus-13-emmers.svg`** vervangt `-04`, de emmers van 13.2, 647 bij 191 pixels
  op 160,0mm ofwel 103 dpi, dus boven de grens. Ook hier is het de beslissing van 9
  september: het is een tekening, en ze stond in een ander palet en in een andere stijl dan
  de rest. **Het gat is nu getekend en niet alleen verondersteld.** Het origineel zet een
  wolk stippen boven en naast elke volle emmer, wat evengoed opspattend water kan zijn,
  terwijl de alinea ernaast zegt dat er een gat in de emmer zit waardoor het water
  wegstroomt. Elke emmer heeft nu een onderbroken wand, en waar nog water in zit lopen er
  druppels uit weg. De acht bits blijven 1 0 1 1 0 0 0 1, de vier volle emmers blijven de
  enen, en de regel eronder blijft woord voor woord staan. Ze staat op **151,0mm**, zelfde
  rekensom.
- **`img/syllabus-13-sdr-tegen-ddr.svg`** vervangt `-08`, de vergelijking van 13.5, 300
  bij 179 pixels op 74,7mm ofwel 102 dpi. Boven de grens, dus ook hier is het de
  beslissing van 9 september, en er is een tweede reden: de figuur staat **volledig in
  het Engels** (SDR, 1 transfer per clock cycle, Clock Freq, Data Freq) in een
  Nederlandse tekst, en het is net de figuur waar de lopende tekst met zoveel woorden
  naar wijst ("zoals je ook op de tekening duidelijk kan zien"). De woorden komen uit de
  tekst zelf: overdracht, klokperiode, opgaande en neergaande flank. De driehoekjes op de
  flanken zijn dezelfde als in `syllabus-13-sdr-sdram.svg` van 13.4, in hetzelfde
  `#c0392b`, zodat de twee figuren van dit hoofdstuk dezelfde taal spreken. Ze staat op
  **120,0mm**, zelfde rekensom als de andere drie.

  **De datasnelheid staat er als MT/s en niet als MHz, en dat is een inhoudelijke
  correctie.** Het origineel schrijft "Data Freq = 100MHz" en "Data Freq = 200MHz",
  terwijl 200 MT/s bij een klok van 100 MHz de juiste lezing is: de klok blijft 100 MHz,
  er gaan alleen twee overdrachten in een periode. Dat is exact de verwarring die
  beslissing 4 hierboven in 13.8 al rechtzette ("gaf DDR4 in transfers maar noemde het
  MHz"), en `syllabus-13-sdr-sdram.svg` drukt op de uitgang al MT/s. Zonder deze ingreep
  is dit de enige plaats in het hoofdstuk waar een overdrachtssnelheid nog in MHz staat.
  **Alle vier de getallen van het origineel blijven staan** (100, 100, 100 en 200), er
  verandert alleen de eenheid op de twee dataregels. Gemeld aan de lector; een herimport
  draait ze terug.
- **`img/syllabus-13-ras-cas.svg`** vervangt `-05`, de RAS/CAS-matrix van 13.3, 350 bij
  351 pixels op 60,9mm ofwel 146 dpi. Ruim boven de grens, dus ook hier is het de
  beslissing van 9 september en niet de scherpte: het is een tekening, en ze staat in rood
  en groen op wit in een stijl die nergens anders in deze syllabus voorkomt. Geen enkel
  gegeven valt weg: zestien cellen op vier rijen A tot D en vier kolommen 1 tot 4, de
  opschriften RAS en CAS, en de aanduiding van de cel op rij B en kolom 2. **Wat erbij
  komt is dat de figuur nu toont wat de alinea ernaast beweert**, namelijk dat je een rij-
  en een kolomadres meegeeft: rij B en kolom 2 zijn dik getekend en alle andere lijnen
  bleek, zodat het kruispunt de cel aanwijst in plaats van dat een kruisje dat doet. Bij
  RAS staat rijadres en bij CAS kolomadres, want de lopende tekst voert row access strobe
  en column access strobe pas in de zin daarna in. De rode ring en de rode knoop zijn het
  gedempte `#9e2f26` van hoofdstuk 6, verder het palet van OrionCSS. Ze staat op
  **85,0mm**, gekozen zodat haar tekst van 14px op 2,59mm drukt.
- **`img/syllabus-13-ddr3-prefetch.svg`** vervangt `-11`, het blokschema van 13.7, 611 bij
  329 pixels op 88,3mm ofwel 176 dpi. Ook hier is de dpi de reden niet. Twee andere wel:
  de figuur staat **in het Engels** (DRAM Core, DRAM Interface, 8x rate) in een
  Nederlandse tekst, en ze is de enige figuur in dit hoofdstuk die in het blauwe
  verloopjespalet van een presentatiesjabloon staat, naast vier tekeningen die intussen in
  het palet van de syllabus staan. Alle gegevens blijven: het opschrift DDR3 SDRAM, het
  kader DRAM met de kern erin, de acht draden met een bit op elk, de trechter, het
  bijschrift 8n bits, de interface met dezelfde acht bits achter elkaar en een pijl, en
  het bijschrift 8x rate, dat nu 8x zo snel heet. **8n bits blijft staan zoals het er
  staat**, want dat is de notatie van het origineel en de lopende tekst spreekt ze niet
  tegen; ze telt zelf de acht af als 4 op de stijgende en 4 op de dalende flank. De bits
  zijn `#9e2f26`, hetzelfde gedempte rood, en de rest is het palet van OrionCSS. Ze staat
  op **125,0mm**, gekozen zodat haar tekst van 14px op 2,50mm drukt.
- **`-14` en `-15`, de twee Hamming-tabellen**, bestonden alleen als beeld en zijn
  overgetypt, zoals de kibi-tabel van 10.4. Vier rijen op vijf kolommen, dus ruim binnen
  de omvang waar die regel voor geldt. Overtypen is nakijken, en anders dan bij die
  kibi-tabel kloppen alle acht de XOR-rijen. De bitpatronen staan in een `code` met
  `color: inherit`: `syllabus.css` maakt daar 9pt Consolas van in de PDF, wat de
  kolommen laat uitlijnen, en de expliciete kleur houdt OrionCSS ervan af om ze op het
  scherm rood te zetten.

**De rode bits van 13.10 waren bij de import verloren gegaan, en dat is opmaak en geen
correctie.** De Word zet de acht buitenste bits van de vier geldige toestanden in
`C7254E`, en de alinea eronder zegt "De bits in het rood zijn redundant". De importer
liet die kleur vallen en zette in de plaats de twee binnenste bits vet, dus precies
omgekeerd. Ze staan nu in `#9e2f26` **en** vet, in monospace: het rood is het gedempte
rood van hoofdstuk 6 zodat het niet uit de toon valt, en het vet zorgt dat een
zwart-witafdruk het onderscheid ook toont.

**De drie modulefoto's met een leesbaar etiket hoeven niet in `ONAANGEROERD`.** 13.4,
13.5 en 13.6 laten de student de frequentie en de capaciteit van het etiket aflezen, dus
`-07`, `-09` en `-10` zijn op `KRIMP_DPI` nagebootst en bekeken voor er iets beslist
werd: op 150 dpi is PC100-222-620 64MB moeiteloos leesbaar. Ze staan op 269, 220 en 220
dpi, dus de krimp kost ze wel wat maar niet genoeg om ze te beschermen. **Doe die proef
en beslis niet op de dpi alleen**, want de leesbaarheid hangt aan de grootte van de
letters in het beeld en niet aan de resolutie ervan.

**`-03` staat op 96 dpi en is niet versmald.** De grens van 98 is een diagnose: twee
millimeter versmallen tilt de figuur formeel over de grens en levert op papier niets op,
en dat is dezelfde afweging als bij de vier figuren van hoofdstuk 11 die op 96 bleven
staan. Het is een foto van een SO-DIMM, dus ze blijft. **`-01` en `-04` stonden op 96 en
103 dpi en zijn om dezelfde reden niet versmald**; daar was de dpi ook de reden niet, en
ze zijn hierboven hertekend.

### 6. Waar dit hoofdstuk en de rest van dit vak naast elkaar staan

Patroon 17: de twee tracks zeggen hetzelfde twee keer en er linkt niets tussen. **Er is
aan geen enkele labopagina iets veranderd.**

- **Hoofdstuk 12, Central Processing Unit. Twee openstaande punten, allebei
  gesloten.** De bijgeschreven zin in 12.2 > Registers zegt "met 32 bits zijn er 2^32
  adressen en met 64 bits 2^64. Waar de grens dan precies ligt zie je bij Random Access
  Memory", en 13.1 geeft die grens nu als 4 GiB en 16 EiB. Vraag 5 en 6 van de zelftest
  van 12 zijn daarmee te maken zonder vooruit te lezen. En de vooruitwijzing in 12.2 >
  Cache ("De reden hiervoor zie je later, wanneer we Random Access Memory bespreken")
  wordt door 13.2 en 13.3 ingelost: de refresh waarin de cel niet beschikbaar is, het
  uitlezen dat de waarde vernielt, en het rijadres dat het meeste tijd kost. Opcode,
  operand en woord worden in 12.2 ingevoerd en 13.1 gebruikt ze zo.
- **Hoofdstuk 10, Informatievoorstelling. Een echte tegenspraak, rechtgezet.** Zie
  beslissing 4. Het kilo-etiket van 10.4 is geen tegenspraak maar een toepassing, zie
  beslissing 2.
- **Hoofdstuk 9, Moederbord. Geen tegenspraak.** 9.3 wijst met zoveel woorden vooruit
  ("Over de werking van DDR leer je meer in het hoofdstuk Random Access Memory") en zegt
  dat DDR4 niet in een DDR5-slot past; 13.5 zegt hetzelfde over de inkeping. 9.3 legt
  DIMM en SO-DIMM uit en 13.1 noemt ze allebei opnieuw, in dezelfde betekenis. **De
  schrijfwijze In-Line van 13.1 is niet gelijkgetrokken met In-line van 9.3**, en dat is
  genoteerd en niet gerepareerd: het is spelling en geen merknaam.
- **Hoofdstuk 5, De Von Neumann architectuur. Geen tegenspraak.** 5.1 zegt dat data en
  instructies in het werkgeheugen moeten staan om uitgevoerd te kunnen worden, en dit
  hoofdstuk legt uit hoe dat geheugen dat doet. Twee helften.
- **Hoofdstuk 17, Power Supply Unit. Nog niet ingevoerd.** 13.10 wijst ernaar vooruit,
  en die verwijzing heet nu bij naam in plaats van "het hoofdstuk voeding".

**Labo Assemblage + BIOS/UEFI.** 13.11 heette het "het labo assembleren", een naam die
niet bestaat, en noemt het nu voluit. Dat mag, zoals 7.4 het labo Linux Geavanceerd
noemt, en er linkt niets naartoe. Inhoudelijk sluit
`Labo/Assemblage/Theorie/Componenten.html` nu aan: die pagina en 13.8 geven allebei DDR4
als 2133 tot 3200 MT/s, en vraag 15 van de zelftest van dat labo ("de breedte waarmee de
processor het geheugen bereikt, verdubbelt") zegt hetzelfde als de gecorrigeerde 13.11.
**Figuur `-17` is byte voor byte `img/dual-channel-dimm-slots.jpg` van dat labo**, het
vierde zulke paar in deze repo na fragmentatie, first-best-worst-fit en
vm-versus-container. Wijzig er dus nooit een zonder de andere.

**Wat hoofdstuk 14 tot 17 niet mogen tegenspreken.** Een cel draagt 1 bit en een adres
staat voor 8 cellen; een woord is de breedte van de processor; 32 bits geven 4 GiB en 64
bits 16 EiB; DDR4 loopt op 1066 tot 1600 MHz ofwel 2133 tot 3200 MT/s; en dual channel
vraagt een module per channel. Die vijf zijn hier bijgeschreven of rechtgezet en staan
zo niet in de Word.

### Wat er in de tekst opviel, en niet aangeraakt is

De tekst gaat er letterlijk in, dus dit staat hier en niet in de HTML.

- **"cell"** in 13.1 ("Iedere cell bestaat uit") en 13.2, waar de rest van het hoofdstuk
  cel schrijft.
- **"In moderne x86 / x64 / ARM computer"** in 13.1, waar een ontbreekt.
- **"gebuikt"** in 13.3, waar gebruikt hoort te staan.
- **"troughput"** in 13.6 en 13.7, twee keer, waar throughput hoort te staan.
- **"DDR3 komt in snelheden van 400 MHz tot 1066 MHz)."** in 13.7, met een sluithaakje
  te veel.
- **"bedrijfskritisch machine"** in 13.10, waar bedrijfskritische hoort te staan.
- **"maximaal 32 bits kan tellen !!!"** in 13.1, met een spatie en drie uitroeptekens.
- **"Bij DDR II SDRAM"** in 13.6, terwijl de kop erboven DDR2 SDRAM schrijft en de rest
  van het hoofdstuk DDR2, DDR3, DDR4 en DDR5.
- **"Small Outline Dual In-Line Memory Module"** in 13.1, waar 9.3 In-line schrijft.
- **"hangt er vanaf als je een moederbord hebt"** en **"afgevraagd als je je DIMM module
  in om het even welk slot mocht steken"** in 13.11, waar ervan af of en of horen te
  staan.
- **"Er kunnen dus veel meer bits op een bepaalde oppervlakte"** in 13.2, zonder
  werkwoord.
- **"Daarom moet er een mechanisme zijn wat de lading periodiek ververst"** in 13.1,
  waar dat hoort te staan.
- **"men"** in 13.6 en in het kader Kernpunten, de vorm die SCHRIJFSTIJL.md voor eigen
  tekst naar de je-vorm stuurt. Dat geldt niet voor de brontekst.
- **De dubbele spatie** in "0 en 4 operands.  Operands zijn" (13.1), "een bitfout kunnen
  detecteren.  Bij even pariteit" en "hamming distance van 5.  Iedere enkele" (13.10)
  staat zo in de Word.

## Hoofdstuk 14, Chipset

**Dit hoofdstuk heeft geen sectie Studievragen achteraan, en er is dus geen Test
jezelf geschreven.** Het kader Studievragen vooraan telt er twee en staat samen met de
Kernpunten op `Overzicht.html`.

**Het is daarmee het derde hoofdstuk dat nergens een vraag stelt**, naast hoofdstuk 7
en hoofdstuk 13. Dat is de maat die het blok van hoofdstuk 13 vastgelegd heeft: niet
"heeft dit hoofdstuk een `TestJezelf.html`" maar "draagt het ergens vragen". Negen
hoofdstukken hebben er een, hoofdstuk 10 heeft een `Oefeningen.html` en hoofdstuk 2 een
`ol.vragen` midden in 2.1. Leg bij de beslissing na hoofdstuk 16 dus deze drie naast
elkaar.

**Zes secties, geen enkele Heading 3 of 4, 41 alinea's met tekst, twee tabellen en vijf
afbeeldingsplaatsingen.** Veruit het kortste hoofdstuk sinds hoofdstuk 5. De twee
tabellen zijn precies de twee kaders vooraan; er is geen enkele lege tabel, dus nergens
invulruimte. Twee van de vijf afbeeldingen zijn de kadericoontjes van 5,4mm die de
importer weggooit, dus `img/` kreeg er drie. **De import liet er geen enkele vallen**,
nageteld met `r:embed`; hier gaf de naieve telling met `<a:blip` toevallig hetzelfde
getal, dus dit hoofdstuk zou die valstrik niet aan het licht gebracht hebben.

**Alle drie de afbeeldingen staan inline en geen enkele zweeft, en toch kreeg er geen
een een bijschrift uit de Word.** Dat was hier vooraf anders ingeschat, en het is het
noteren waard: inline zijn is niet genoeg, want de alinea rond de afbeelding is bij alle
drie leeg. `figuur()` valt dan terug op "Afbeelding uit de syllabus", precies zoals bij
de zeventien van hoofdstuk 13. De drie `alt`-teksten zijn met de hand geschreven na het
openen van elk bestand, en een herimport gooit ze weg.

### 1. Zes correcties, alle zes gemeld voor ze doorgevoerd werden

Geen ervan overleeft een herimport van dit hoofdstuk. De eerste vier hangen samen en
staan onder beslissing 2.

| Waar | Wat de Word zegt | Wat het hier zegt |
|---|---|---|
| Kernpunt 6 | "De northbridge werd vervangen door de Accelerated Processing Unit (binnen de processor)" | "De northbridge is verdwenen: zijn taken zitten nu in de processor zelf" |
| Studievraag 1 | "Waarom werd de Northbridge vervangen door de APU?" | "Waarom verdween de northbridge, en waar zitten zijn taken nu?" |
| 14.1, 14.2 en 14.6 | drie zinnen die de APU als de opvolger van de northbridge neerzetten | de taken van de northbridge, de geheugencontroller en PCI Express, zitten in de processor zelf |
| 14.5, eerste en derde alinea | "De bedoeling van de APU is om de taken van de northbridge onder te brengen", en de grafische kern als iets waar een APU "vaak ook" mee uitgerust is | omgekeerd: die grafische kern is juist wat AMD een APU noemt, en ze gaat niet noodzakelijk samen met de opgeslorpte northbridge |
| 14.3 | "Gangbare snelheden waren 66 MHz tot 1250 MHz" en "werd de kloksnelheid van de bus telkens opgedreven" | 66 MT/s tot 1250 MT/s, en opgedreven werd het aantal overdrachten per seconde, zowel met een hogere klok als met meer overdrachten per klokpuls |
| 14.3 | "Zie ook het hoofdstuk Accelerated Processing Unit (APU)." | "Zie ook de sectie ... verderop in dit hoofdstuk", want het is een sectie van dit hoofdstuk en staat in geen inhoudstafel als hoofdstuk |

### 2. De APU is niet de opvolger van de northbridge

Dit is waar dit hoofdstuk om vroeg, en het loopt door zes zinnen heen. Een Accelerated
Processing Unit is bij AMD, sinds 2011, een processor die naast zijn gewone kernen een
grafische kern aan boord heeft; dat is de definitie en niet een extraatje. Wat de
northbridge overgenomen heeft is iets anders: de geheugencontroller en de PCI
Express-aansluitingen, en die verhuisden onafhankelijk van welke grafische kern er al
dan niet naast ligt. **Een processor zonder grafische kern slikte de northbridge net zo
goed in en is per definitie geen APU**, dus de twee gelijkstellen maakt de zin onwaar
voor een groot deel van de processoren die de student zal tegenkomen.

Het hoofdstuk spreekt zichzelf hierin tegen, en dat gaf de doorslag: 14.2 zegt zelf al
het juiste, "sindsdien werden de functies van de northbridge telkens verder afgebouwd en
overgenomen door de processor". Ook 9.3 gebruikt het woord APU wel correct, namelijk
voor de ingebakken grafische kern.

**Intels eigen naam voor het opgeslorpte blok, de System Agent, is met opzet NIET
ingevoerd**, en dat is een beslissing van de lector op 9 september 2026. Het woord komt
in geen enkel hoofdstuk voor, en het invoeren ervan kost twee termen (System Agent en
uncore) om een sectie recht te zetten die de student daarna nergens meer tegenkomt; dat
is patroon 20. 14.5 zegt nu dus wat er gebeurd is en wie APU zegt, zonder de
Intel-tegenhanger te benoemen. **Wil je die later toch invoeren, doe het dan in
hoofdstuk 12 en niet hier**, want daar wordt de processor uit elkaar gehaald.

De sectietitel blijft wel Accelerated Processing Unit (APU), want de sectie legt de APU
nu correct uit en 9.3 verwijst er met die naam naar.

### 3. De FSB in MHz, dezelfde eenheid als bij DDR4

De getallen van 14.3 kloppen onderling met een bus van 64 bit: 66 x 8 = 533 MB/s en
1250 x 8 = 10000 MB/s. Alleen haalden de late FSB'en dat niet met een hogere klok maar
door vier overdrachten per klokpuls te sturen, dus 1250 is een transfersnelheid en geen
busklok. **Dat is woord voor woord de eenheidsverwarring die 13.8 net rechtgezet
heeft**, waar DDR4 in MHz stond terwijl het MT/s waren, en die de labopagina
`Labo/Assemblage/Theorie/Componenten.html` ook al in MT/s schrijft. De 66 MHz blijft wel
staan: die vroegste bus stuurde er echt een per klokpuls, en dat staat er nu bij als het
onderscheid.

### 4. De PCH beantwoordde zijn eigen studievraag niet

14.6 telde twee zinnen en zei alleen DAT de PCH de southbridge vervangt, terwijl
studievraag 2 vooraan naar het NUT vraagt en 14.4 nog belooft dat je er later meer over
leert. Er is daarom een alinea bijgeschreven, kort gehouden omdat dit hoofdstuk zelf
kort is: alle trage aansluitingen op een chip, die met een eigen verbinding aan de
processor hangt, zodat het werkgeheugen en de grafische kaart geen bus meer delen met de
trage apparaten, en de keuze van de PCH bepaalt wat een bord te bieden heeft. Zelfde
geval als de wet van Moore in hoofdstuk 1. **Die alinea staat alleen in de HTML**, dus
ze kan in de Word bijgeschreven worden.

### 5. De figuren

**Een van de drie is hertekend en twee zijn gebleven**, en dat is precies de grens die
de beslissing van 9 september trekt.

- **`img/syllabus-14-chipset-blokschema.svg`** vervangt `-03`, het blokschema van een
  moederbord van voor 2011. Het is een tekening en geen schermafdruk, en ze stond
  volledig in het Engels (Front-side bus, Memory Slots, Cables and ports leading
  off-board, en een Super I/O met Floppy Disk en Keyboard) in een Nederlandse tekst.
  Alle negentien gegevens van het origineel staan erin: de processor, de klokgenerator,
  de stippelomtrek Chipset, northbridge en southbridge met hun ondertitel, de vier
  bussen (Front Side Bus, interne bus, PCI-bus, LPC-bus), de grafische bus met zijn
  slot, de geheugenbus met de vier sloten, de zes I/O-namen, de kabels naar buiten, de
  flash ROM met de BIOS, en de Super I/O met zijn vijf poorten. Palet van OrionCSS,
  gerenderd met headless Edge voor ze vertrouwd werd. **Twee botsingen kwamen pas uit
  die render**: de stippelomtrek liep door het label LPC-bus, en het bijschrift van de
  grafische bus lag op zijn eigen lijn. Ze staat op 135,0mm, gekozen zodat haar tekst
  van 14px op 2,49mm drukt en dus even groot is als de lopende tekst.
- **`-01` en `-02` blijven foto's.** Allebei zijn het geannoteerde foto's van een echt
  moederbord, en de regel van 9 september zegt dat zo een foto een foto blijft:
  natekenen levert een bord op dat lijkt op wat de student ziet zonder het te zijn. De
  aanwijzingen erop zijn bovendien niet Engels maar kleuren en het woord PCH, en de
  lopende tekst verwijst er met die kleuren naar ("Omcirkeld in het oranje", "in het
  blauw", "in het groen"). `-01` staat op 97 dpi en is niet versmald: de grens van 98 is
  een diagnose, en een millimeter versmallen levert op papier niets op, dezelfde
  afweging als bij de vier figuren van hoofdstuk 11 en de drie van hoofdstuk 13.

**Geen van de drie hoeft in `ONAANGEROERD`.** De SVG valt buiten `KRIMPBAAR`, dat alleen
op png en jpg grijpt, en gaat dus als vector mee; nagekeken in de PDF, waar bladzijde
170 haar labels als echte tekst draagt. `-01` is met 511 pixels op 134,2mm te klein om
te krimpen, dus het script laat ze staan. `-02` is gekrompen van 1083 naar 945 pixels,
wat exact 160,0mm op 150 dpi is, en er valt niets in af te lezen.

### 6. Waar dit hoofdstuk en de rest van dit vak naast elkaar staan

Dit hoofdstuk overlapt met drie hoofdstukken die er al staan, meer dan enig ander tot nu
toe. Patroon 17: de twee tracks zeggen hetzelfde twee keer en er linkt niets tussen.

- **Hoofdstuk 13, Random Access Memory. Een echte tegenspraak, en ze is in hoofdstuk 13
  rechtgezet.** 13.3 schreef "Na 2011 werd de FSB afgeschaft ten voordele van point to
  point verbindingen tussen CPU en RAM. Intel gebuikt hiervoor bijvoorbeeld QuickPath
  Interconnect en AMD HyperTransport." QPI en HyperTransport zijn geen CPU-RAM
  verbindingen: die lopen van processor naar processor en naar de I/O-hub. Wat de
  processor met het werkgeheugen verbindt is zijn eigen geheugencontroller over de
  DDR-kanalen, en dat is precies wat 14.2 vertelt met AMD in 2003 en Intel in 2008. De
  zin noemt nu allebei de helften. **Dit is de tweede wijziging aan een hoofdstuk dat al
  gedrukt stond en die niet uit een eigen fout maar uit een later hoofdstuk voortkomt**,
  na de zin over word en double word in 10.4; een herimport van hoofdstuk 13 gooit ze
  weg. De typfout "gebuikt", die hierboven bij hoofdstuk 13 als onaangeroerd genoteerd
  staat, is daarmee vanzelf verdwenen. De scharnierdatum spreekt elkaar niet tegen: 13.3
  zegt 2011 en kernpunt 1 van 14 zegt omstreeks 2011, en 14.1 noemt dat zelf een
  didactische vereenvoudiging, waarna 14.2 de echte data geeft.
- **Hoofdstuk 9, Moederbord. Geen tegenspraak, wel een verwijzing rechtgezet.** 9.3
  wijst vooruit met "Zie ook het hoofdstuk Accelerated Processing Unit", en dat is een
  sectie van dit hoofdstuk en geen hoofdstuk; er staat nu "de sectie ... in het
  hoofdstuk Chipset". Inhoudelijk sluit 9.3 wel aan: het gebruikt APU voor de ingebakken
  grafische kern, wat de juiste betekenis is, en 2.1 laat de chipset onder zijn
  koellichaam aanwijzen zonder er iets over te beweren.
- **Hoofdstuk 12, Central Processing Unit. Geen tegenspraak.** Kernpunt 4 van dit
  hoofdstuk is de wet van Moore in andere woorden, en die staat uitgelegd in hoofdstuk 1
  en wordt in 12.2 gebruikt. Het woord Moore valt hier niet, en dat is gelaten zoals het
  is.

### Wat er in de tekst opviel, en niet aangeraakt is

De tekst gaat er letterlijk in, dus dit staat hier en niet in de HTML.

- **"south bridge" en "north bridge" los geschreven** in 14.1 en twee keer in 14.6,
  terwijl de rest van het hoofdstuk southbridge en northbridge aaneen schrijft.
- **"In een moederbord die gemaakt werd voor 2011"** in 14.6, waar dat hoort te staan.
- **De ".;" achteraan kernpunt 2**, een punt en een puntkomma na elkaar. De andere
  kernpunten eindigen op een puntkomma en het eerste en het laatste op een punt, dus de
  lijst is ook onderling niet gelijk.
- **"véél"** in 14.1, met accenten in de brontekst.
- **"Northbridge" met een hoofdletter** midden in studievraag 1, waar de rest van het
  hoofdstuk northbridge schrijft. Die vraag is intussen om een andere reden herschreven,
  zie beslissing 2.
- **De dubbele spatie** in "ingebouwde grafische processor.  Voorbeelden hiervan" (14.5)
  staat zo in de Word. Die alinea is intussen herschreven.
- **"In een moderne computer (> 2011)"** staat twee keer met dezelfde formulering, in
  14.1 en in 14.5.
