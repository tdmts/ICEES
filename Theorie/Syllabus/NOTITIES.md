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
- **Studievraag 6 vooraan is een imperatief met een vraagteken**: "Geef enkele
  voordelen van UEFI?"
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
