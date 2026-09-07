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
| 3 Wat een IO eiland is | b, de IPC heeft de connectoren niet op zijn moederbord en bereikt het eiland over een industrieel netwerkprotocol | het derde en vierde kernpunt, en 4.3, "Via een ethernet interface communiceer je dan met verschillende I/O eilanden over EtherCAT, ProfiNET, Modbus TCP" |
| 4 Welke naam GEEN industrieel netwerkprotocol is | d, AUTOCAT | het vierde kernpunt noemt PROFINET, MODBUS/TCP, ETHERNET/IP en ETHERCAT; AUTOCAT komt in de hele Word niet voor |
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
  netwerkprotocol zoals PROFINET, MODBUS/TCP, ETHERNET/IP of ETHERCAT: het brengt
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

**Vier namen wisselden binnen het hoofdstuk van schrijfwijze, en dragen nu de
vorm van het kader Kernpunten.** Dat kader is gekozen als de maat omdat Test
jezelf er al op steunt: vraag 4 schrijft PROFINET, ETHERCAT en MODBUS in
kapitalen, en een sectie die ProfiNET schrijft laat de student twee dingen voor
hetzelfde aanzien.

- **CodeSYS in 4.1 en 4.4, CodeSys in 4.3** zijn alle drie **CODESYS**, zoals de
  fabrikant het schrijft.
- **De protocolnamen in 4.3** stonden als EtherCAT, ProfiNET en Modbus TCP en
  staan nu als **ETHERCAT, PROFINET en MODBUS/TCP**, in dezelfde volgorde als
  daar al stond.
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
- **De vier protocolnamen die dit hoofdstuk noemt** zijn PROFINET, MODBUS/TCP,
  ETHERNET/IP en ETHERCAT. Vraag 4 van Test jezelf toetst er drie van.

**Dit hoofdstuk raakt aan hoofdstuk 9, Virtual machines en containers**, dat nog
niet ingevoerd is: 4.1 en 4.3 hebben het over een SOFT PLC en over software die
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

**Vijf namen die hoofdstuk 4 al rechtgetrokken heeft, staan hier weer in hun oude
vorm.** 7.2 schrijft **Raspberry PI**, **CodeSys**, **EtherCAT**, **ProfiNET** en
**Modbus TCP**, terwijl hoofdstuk 4 op 7 september 2026 juist Raspberry Pi,
CODESYS, ETHERCAT, PROFINET en MODBUS/TCP geworden is, met het kader Kernpunten
van dat hoofdstuk als maat. Dit is dus geen tikfout maar een **tegenspraak tussen
twee hoofdstukken die dezelfde ronde gemaakt heeft**, en ze is bewust blijven
staan omdat de vorm daar per hoofdstuk gekozen is en niet voor de hele syllabus.
Beslis dit voor hoofdstuk 8 erbij komt, want dan gaat het over drie hoofdstukken.

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

**Dezelfde omkering stond in de Word van hoofdstuk 5**, in een kernpunt dat schreef
dat je op één fysieke guest meerdere virtuele hosts draait. Dat is dezelfde fout in
dezelfde bewoording, en ze was bij Labo Virtualiseren al opgemerkt.
`Labo/Virtualiseren/` zegt het overal juist en is niet aangeraakt.

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
- **De vijf productnamen die hoofdstuk 4 en 7 uit elkaar laten lopen** (Raspberry
  Pi, CODESYS, ETHERCAT, PROFINET, MODBUS/TCP tegen Raspberry PI, CodeSys,
  EtherCAT, ProfiNET, Modbus TCP) komen in dit hoofdstuk **geen enkele keer** voor.
  Nagekeken met grep. Die beslissing gaat dus nog altijd over twee hoofdstukken en
  niet over drie, en ze blijft openstaan.

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

### Wat er in de tekst opviel, en niet aangeraakt is

De tekst gaat er letterlijk in, dus dit staat hier en niet in de HTML.

- **"diskettestation, floppy"** in 8.3 noemt hetzelfde toestel twee keer. Het staat
  zo in de Word en het staat na de correctie van die alinea nog altijd zo, want de
  opsomming is niet ingekort. De term is bovendien verouderd: er is geen enkele
  virtuele machine meer met een diskettestation.
- **"What happens in the virtual machine, stays in the virtual machine."** in 8.3
  is een Engelse eenregelaar midden in een Nederlandse tekst, zonder bron en zonder
  dat er staat dat het een gezegde is. De zin ervoor legt hetzelfde in het
  Nederlands uit, dus wie hem overslaat mist niets.
- **"Voor iedere VM heb je eventueel een licentie van Windows nodig"** in 8.4: het
  woord eventueel maakt van een kost een mogelijkheid, terwijl kernpunt 4 de
  licentiekost gewoon als een nadeel opsomt.
- **"Het performantieverlies komt onder andere omdat het besturingssysteem overal
  mee gevirtualiseerd wordt"** in 8.4, waar telkens hoort te staan; kernpunt 4 en
  kernpunt 5 gebruiken allebei telkens.
- **De naam van het onderwerp wisselt binnen het hoofdstuk**: virtual machine,
  Virtual Machine, virtuele machine, Virtuele Machines en VM staan er alle vijf. De
  hoofdstuktitel is Virtual machines en containers, en dat is de vorm die de kop
  draagt.
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
  Het tweede is hoofdstuk 7 en staat er; het eerste is hoofdstuk 12 en bestaat nog
  niet. Allebei blijven ze woorden en worden er geen links van: van de syllabus is
  de PDF het enige dat de student ziet.
- **8.2 heet Nadelen van fysieke machines en somt er een op**, de prijs. Dat het er
  maar een is, staat in de Word zo.
