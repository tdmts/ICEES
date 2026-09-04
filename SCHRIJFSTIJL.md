# Schrijfstijl

Hoe het proza op deze pagina's klinkt. Dit is de enige plek waar die regels staan;
[CLAUDE.md](CLAUDE.md) verwijst hierheen in plaats van de lijst te herhalen.

Het gaat hier **alleen over de vorm van de tekst**. Of een pagina correct aan elkaar hangt is een
technische vraag en hoort bij [`scripts/check-content.py`](scripts/check-content.py). Of een pagina
genoeg uitlegt is een didactische vraag, en die heeft in deze repo nog geen eigen protocol.

**Waar het geldt: overal waar een student meeleest.** Lopende tekst, koppen en kadertitels, de
`lead`, `alt`-teksten, `figcaption`s, en de `name` en `blurb` in [`reference.js`](reference.js). Een
blurb op een theoriekaart is even goed tekst als een alinea.

**Ook in het verslag.** De opdracht staat in een `<!-- verslag -->` blok in `Opdracht.html` en
`scripts/export-verslag.py` maakt daar de docx van. Die tekst valt hier volledig onder, ook al leest
de student ze in Word.

**Waar het niet geldt: de documentatie van de repo zelf.** Dit bestand en CLAUDE.md zijn
werkmateriaal voor wie hier schrijft. De patroontitels hieronder zijn zelf werkwoordloos en
ontkennend, en dat blijft zo: ze zijn de naam van een regel en worden ook zo geciteerd ("patroon 6").

**Taalfouten vallen er buiten.** Een kommasplitsing, een spatiefout, een verkeerd onderwerp bij het
werkwoord: dat is geen stijl. Verzamel ze en leg ze apart voor, zodat de diff van een stijlronde één
soort wijziging bevat.

**Er is geen script.** `scripts/check-content.py` dwingt één stijlregel af, de em-dash, als onderdeel
van regel 5. Er is geen `--audit` en geen `--fix`. Alles hieronder is een leesregel, en dat is een
bewuste keuze: de meeste van deze patronen hebben woorden nodig die ook volkomen legitiem
voorkomen, en een woordenlijst zou vooral goede zinnen afkeuren.

Het document komt uit `tdmts/Microcontrollers` en een deel van de voorbeelden hieronder komt daar
nog vandaan. De tekst van dít vak had een ander probleem: ze komt uit een Brightspace-export en uit
Word-documenten, en was vooral zakelijk tot kaal, met hier en daar een grapje, een emoji of een
terzijde dat niets uitlegt. De patronen 1 tot 10 slaan dus vooral aan op tekst die hier nieuw
geschreven wordt, en dat is precies het moment waarop ze nodig zijn.

## Wat blijft

Lees dit eerst. Alles hieronder gaat over vorm, en niets ervan is een excuus om korter of karig te
schrijven.

- **Het waarom** achter elke stap, in gewone mededelende zinnen. Een student die niet weet waarom er
  een afsluitweerstand aan elk uiteinde van de bus hoort, heeft aan de opdracht alleen niets.
- **De terugkoppeling** naar wat de student al kan, maar als feit en niet als opbouw. Let hier op de
  bijzonderheid van dit vak: zie patroon 17, want je mag niet zomaar naar een ander labo verwijzen.
- **Concrete voorbeelden.** Die horen in de hoofdzin, niet tussen haakjes. Als een walkietalkie het
  beste voorbeeld van half duplex is, dan is de walkietalkie belangrijk genoeg voor een eigen zin.
- **De kruislinks** naar de theoriepagina's, waar de student het kan nalezen.
- **De je-vorm**, warm en niet formeel. De warmte komt uit de je-vorm en uit het uitleggen van het
  waarom, niet uit ritme of woordkeuze. `men` en `we` gaan allebei naar de je-vorm: `men` is formeel,
  en de inclusieve `we` schuift de student weg van wat hij zelf doet.

  > **Voor:** Voor grotere afstanden of storingsgevoelige omgevingen gebruikt men differential
  > signaling.
  >
  > **Na:** Voor grotere afstanden of storingsgevoelige omgevingen gebruik je differential signaling.

- **Kadertitels die iets zeggen** ("Om reflecties tegen te gaan hoort er 120 &Omega; aan elk
  uiteinde") in plaats van "Belangrijk". Een kop noemt wel zijn onderwerp en niet zijn pointe, en
  bevat geen `geen` of `niet`: zie patroon 6.
- **Volledige code** in een voorbeeld, geen fragmenten, behalve waar de opdracht juist vraagt om een
  fragment aan te vullen.

**En de rem boven de hele lijst.** Alle zestien patronen hieronder zijn ontkennend: ze zeggen
wat weg mag. Je kan er dus aan alle zestien tegelijk voldoen door minder te zeggen, en niets
in die lijst houdt dat tegen. Dat gebeurde bij de lead van Labo Assemblage: "volledig uit elkaar"
werd "openhalen", "tot hij opstart" werd "tot hij draait", en de installatie van het
besturingssysteem viel helemaal weg, terwijl de zin bij elke stap beter scoorde op de patronen.

Leg daarom elke herschreven zin naast de oude met een vraag: **welk feit staat er niet meer?**
Ontbreekt er een, dan is de herschrijving fout, hoeveel patronen ze ook oplost. Patroon 15 en 17
dragen die rem al voor zichzelf; dit is dezelfde rem voor de andere veertien.

## Wat eruit gaat

Zestien patronen. Geen enkel patroon is op zich fout: het probleem is dat ze allemaal samen, op elke
pagina, van uitleg een voordracht maken. Patroon 1 tot 10 gaan over opsmuk, 12 en 13 over
woordkeuze, 14 en 15 kwamen er later bij (allebei opsmuk).

Patroon 16 en 17 zitten een niveau hoger: ze gaan niet over een zin maar over de vorm van een
alinea, en daarom overleeft elke zin afzonderlijk de andere veertien.

Patroon 18 en 20 staan nog een niveau hoger en zijn in deze repo geschreven: ze gaan niet over de
vorm maar over het onderwerp. 18 gaat over wat de student niet weet omdat hij niet bij het gesprek
was, 20 over wat hij niet weet omdat hij die bladzijde nog niet gezien heeft.

**Het waren er tweeëntwintig.** Zes gingen op in een ander patroon zonder dat er een toets verdween,
omdat ze in de praktijk telkens dezelfde vraag stelden. **De nummers van de overblijvende zestien
liggen vast**, ook al loopt de reeks daardoor met gaten, want een patroon wordt op zijn nummer
geciteerd ("patroon 6") en dat geldt ook in `tdmts/DeN` en `tdmts/Microcontrollers`, waar dit
document vandaan komt. Wie een oud nummer tegenkomt, vindt het hier terug:

| Was | Staat nu in | Waarom |
|---|---|---|
| 4, de dubbele punt | 3 | Allebei een aankondiging van een pointe in plaats van de pointe |
| 8, de verplichte tegenhanger | 16 | Een vierde vorm van hetzelfde: de lezer vertellen hoe hij het moet wegen |
| 11, het verkleinwoord | 12 | 11 verwees zelf naar 12, en zijn hele grond was het register |
| 19, het voorschrift | 18 | 19 zei zelf: "Dit patroon en patroon 18 komen uit dezelfde bron" |
| 21, de glosse te veel | 13 | 21 zei zelf: "De toets is dezelfde als bij patroon 13, met een groter voorwerp" |
| 22, het algemenere woord | 20 | Allebei het woord gemeten aan wat de lezer op dat punt heeft |

### 1. Geen slotzin die moet blijven hangen

Eindig op de laatste zin die iets vertelt, niet op een zin die iets doet.

> **Voor:** Hier schrijf jij het met `digitalRead()` en `digitalWrite()`, en bewaakt niemand iets.
>
> **Na:** Hier doe je dat zelf met `digitalRead()` en `digitalWrite()`, en de cyclustijd wordt niet
> bewaakt.

Andere voorbeelden van hetzelfde: "Verbind je Tx met Tx, dan zitten twee zenders tegen elkaar te
roepen en luistert er niemand."

### 2. Geen retorische drieslag

Drie parallelle **stellingen** als betoogfiguur.

> **Voor:** Omdat je in echte code programmeert in plaats van in functieblokken, omdat de chip een
> paar euro kost en in het product zelf past, en omdat jij bepaalt wat er aan de pinnen hangt.
>
> **Na:** Zo'n chip kost een paar euro en is klein genoeg om in het product zelf te zitten. Je
> programmeert hem in C++ in plaats van in functieblokken, en je bepaalt zelf wat er aan elke pin
> hangt.

Een opsomming van drie concrete dingen ("USB, Ethernet en SATA") mag wel. Dat is een lijst en geen
figuur.

### 3. Geen aankondiging van een pointe

Zet de bewering neer. De retorische vraag en de dubbele punt zijn twee manieren om te melden dat er
iets komt in plaats van het te zeggen. Dit was patroon 3 en 4.

> **Voor:** Waarom? Omdat de compiler slim is, en die slimheid hier tegen je werkt.
>
> **Na:** De reden zit in de compiler, die de variabele in de processor bijhoudt in plaats van hem
> telkens opnieuw uit het geheugen te halen.

> **Voor:** Serieel betekent: achter elkaar.
>
> **Na:** Serieel betekent dat de bits achter elkaar over één draad gaan.

Twee uitzonderingen, allebei echt. Een vraag **aan** de student mag, want daar hoort een antwoord
bij: "Is de input /RE active low of active high?" En een dubbele punt voor een opsomming, een tabel
of een codevoorbeeld is gewoon interpunctie en blijft.

### 5. Geen korte zin voor het effect

> **Voor:** Nu zet je er één regel bij. Eentje maar.
>
> **Na:** Nu zet je er één regel bij.

Ook zo: "Zonder uitzondering.", "Terecht.", "Eén draad." Voeg ze samen met de zin ervoor of laat ze
weg.

De toets is de persoonsvorm. Een zin zonder werkwoord gaat weg of gaat op in de zin ervoor; een korte
zin mét persoonsvorm blijft, ook wanneer hij nadruk legt. Hier zijn geen uitzonderingen op, want dan
wordt het opnieuw een oordeel. Een vaste aankondiging die je wil houden, krijgt gewoon een werkwoord:
"Nog een denkoefening." wordt "Denk hier eerst zelf na."

**Alleen in lopende tekst.** Koppen, kadertitels, `alt`-teksten, `figcaption`s en blurbs zijn van
nature naamwoordgroepen ("Het probleem", "Voordelen", "Oplossing"). Daar is een fragment de normale
vorm.

### 6. Geen ontkennende opening

Begin bij wat het ding wél is, niet bij wat het niet is.

> **Voor:** Een unmanaged switch kan je niet configureren. Hij leert de MAC-adressen zelf.
>
> **Na:** Een unmanaged switch leert zelf welk MAC-adres achter welke poort zit, en werkt zonder dat
> je er iets aan instelt.

Hier is geen uitzondering op, ook niet wanneer de zin een misvatting corrigeert die de student echt
heeft. De correctie komt dan in dezelfde alinea, na de bewering: niet "Differential signaling heeft
geen massa nodig", maar "Bij differential signaling meet de ontvanger het verschil tussen de twee
draden, dus een gedeelde massa is voor de signaaloverdracht niet meer nodig."

**In koppen geldt dit strenger.** Een kop of kadertitel bevat helemaal geen `geen` of `niet`, ook
niet in het midden. Een beschrijvend `zonder` valt er niet onder. De `id` van een kop blijft
ongewijzigd wanneer de tekst verandert, want andere pagina's linken ernaar.

### 7. Geen bemenste machines

> **Voor:** Wanneer de compiler ziet dat je steeds dezelfde variabele uitleest, denkt hij: die
> verandert hier toch nergens.
>
> **Na:** Wanneer de compiler ziet dat je steeds dezelfde variabele uitleest, houdt hij die waarde
> bij in de processor omdat er in je `loop()` niets aan verandert.

"De switch beslist" en "de transceiver luistert" mogen als vakjargon, want zo heet het echt; "de
switch weet niet goed wat hij ermee moet" is patroon 7.

### 9. Geen vaste openingsformule

"Hier lees je...", "Op deze pagina zie je..." Elke lead die op dezelfde manier begint, maakt de
volgende voorspelbaar. Zeg waar de pagina over gaat in de vorm die bij díe pagina past, en soms is
dat gewoon de eerste feitelijke zin van het onderwerp.

Dit geldt ook voor `overview.html` en `reference.html`. Zes labo's met dezelfde openingszin is
precies waar dit patroon over gaat, dus elk overzicht krijgt een `lead` die bij dát labo past.

De `lead` van `Opdracht.html` verdient extra aandacht: die staat ook op de eerste bladzijde van het
verslag, en is voor veel studenten de eerste zin die ze van het labo lezen. Regel 8 van
`scripts/check-content.py` eist dat hij bestaat, niet dat hij goed is.

### 10. Geen theatrale nadruk

Vet en cursief zijn om een **term**, een pinnaam of een componentnaam te markeren, niet om een zin te
laten landen.

> **Voor:** Door hogere klokfrequenties en efficiënte protocollen is seriële communicatie vaak
> **sneller én betrouwbaarder** dan parallel.
>
> **Na:** Door hogere klokfrequenties en efficiënte protocollen haalt seriële communicatie in de
> praktijk meer doorvoer dan parallel, met minder kans op fouten.

Een vetgedrukte **deelzin** valt hier ook onder. De grens ligt niet bij hele zinnen: vet komt om een
woord, een term, een pinnaam of een getal, nooit om een zinsdeel.

### 12. Vlaamse woordkeuze, en geen verkleinwoord als verzachter

De studenten zijn Vlaams, en de cursus is dat ook. Schrijf dus **Nederlands zoals het in Vlaanderen
geschreven wordt**, en vermijd woorden die typisch Noord-Nederlands aanvoelen. Dit was patroon 11 en
12: het verkleinwoord als verzachter hoort hier omdat het diezelfde grens raakt.

> **Voor:** Met `map()` kun je een waarde van het ene bereik omzetten naar een ander.
>
> **Na:** Met `map()` kan je een waarde van het ene bereik omzetten naar een ander.

Let bij `kunt` en `wilt` op waar het onderwerp staat. In "een waarde die je in je programma kunt
gebruiken" staat er van alles tussen `je` en het werkwoord, en toch is het dezelfde vorm. De Vlaamse
standaardvorm is `kan` en `wil`, waar het onderwerp ook staat.

Verder: `flink` wordt `ruim` of `stevig`, `prima` wordt `goed` of `zonder problemen`, en `eventjes`
wordt `even` of `kort`, of het gaat helemaal weg wanneer de zin het niet nodig heeft (patroon 13).
Preventief ook `hartstikke`, `gaaf`, `lekker` als versterker, en `hoor` of `nou` als toevoegsel aan
het einde van een zin.

**Twee waarschuwingen, en dit is waar zo'n regel misgaat.**

Ten eerste: bij twijfel **wint het Belgische woord**. De scheidslijn ligt niet tussen Belgisch en
standaard, maar tussen schrijftaal en spreektaal. Wat je in een Vlaamse cursus- of krantentekst
geschreven ziet, blijft staan, ook wanneer een woordenboek er "in België" bij zet: "neem daarvoor
best een weerstand van 120 &Omega;", "op het eerste zicht", "verderzetten". Wat alleen in een gesprek
voorkomt, gaat weg: "deftig" voor behoorlijk, "een pak beter", "vijs", "kuisen", "de linkse knop".
Liever een Belgicisme dan een Hollandisme.

Ten tweede: er zijn woorden die alleen Noord-Nederlands *lijken*. `netjes` is gewoon Nederlands en
wordt in Vlaanderen even goed gebruikt (het is er wel vaak een van patroon 13). `best` in "je neemt
best" is Belgisch en niet Noord-Nederlands. Meet voor je een woord aan de lijst toevoegt of het in
deze repo wel is wat je denkt dat het is.

**Het verkleinwoord als verzachter.** Het Nederlands van Nederland gebruikt die vorm veel vrijer dan
dat van Vlaanderen ("een vraagje", "een momentje"), dus een Vlaamse lezer leest hem sneller als
aanstellerij dan als vriendelijkheid. Een verkleinwoord dat een technisch onderdeel gezellig moet
maken, noem je bij zijn naam.

> **Voor:** Zoek naar het tekeningetje van het IC met acht pootjes en de namen ernaast.
>
> **Na:** Zoek naar de tekening van het IC met acht aansluitingen en de namen ernaast.

De uitzondering, en die is echt: **een verkleinwoord dat de gangbare vakterm is, blijft.** De
buitenste **pootjes** van een potentiometer heten zo, en een `ezelsbruggetje` heet niet anders. Ook
vaste uitdrukkingen ("tussen haakjes", "een beetje") zijn geen opsmuk. De vraag is niet of er een
verkleinvorm staat, maar of er een gewoon woord bestaat dat hetzelfde zegt.

### 13. Geen vulling, van een bijwoord tot een hele bijzin

Wat niets toevoegt aan de zin, laat je weg. Dit was patroon 13 en 21: het bijwoord en de bijstelling
zijn hetzelfde probleem op een andere schaal, en de toets is voor allebei dezelfde.

**Het bijwoord.**

> **Voor:** Parallelle communicatie. Dat maakt het zeer complex, want je moet niet alleen je code
> aanpassen maar ook je schakeling.
>
> **Na:** Parallelle communicatie. Dat maakt het complex, want je moet niet alleen je code aanpassen
> maar ook je schakeling.

Let ook op `heel even` (een verzachter op een verzachter), en kijk met dezelfde blik naar
`eigenlijk`, `uiteraard` en `netjes`. `letterlijk` in "`digitalWrite()` zet letterlijk 5 V op een
pin" blijft, want daar betekent het echt iets.

Hier staat met opzet **geen woordenlijst**. De toets is één vraag: verliest de zin iets wanneer je
het bijwoord schrapt? `gewoon` en `precies` zijn de lastigste twee, want die betekenen vaak wel iets
("een gewone digitale uitgang", "precies even breed") en zijn toch vaak vulling. Die vragen een
lezer.

**De bijstelling die het vanzelfsprekende uitlegt**, het vroegere patroon 21. Een bijzin die niets
toevoegt aan het woord ervoor, gaat weg, ook wanneer de buren in de lijst er wel een hebben.

> **Voor:** Een computer met scherm en toetsenbord, het toestel dat je uit elkaar haalt
>
> **Na:** Een computer met scherm en toetsenbord

Dat labo heet Assemblage en gaat over een computer uit elkaar halen; welk toestel dat is, was de
vraag niet, en de bijstelling is er niet eens waar, want het scherm en het toetsenbord haal je niet
uit elkaar. De twee regels eronder, "Een laptop, om je antwoorden in te vullen" en "Een smartphone,
om de foto's te nemen", verdienen hun bijzin wel: daar is niet vanzelfsprekend waarom je ze moet
meebrengen. Dat is wat de fout veroorzaakt. Het eerste item stond kaal tussen items met een bijzin
en kreeg er een om de vorm, niet om de inhoud.

Ook zo: "Download het voor je begint" onder een knop die "Opdracht downloaden" heet, en een blurb
die "De gegevens van de processor die in dit labo op tafel ligt" zegt op een kaart die al Processor
heet.

### 14. Geen terzijde als knipoog

Een grapje tussen haakjes dat niets uitlegt, gaat weg. Een emoji ook.

> **Voor:** Het is echt niet eenvoudig om dat betrouwbaar te laten werken. Als je me niet gelooft,
> probeer gerust eens uit :-). Dit lijkt misschien moeilijker maar we spelen 'vals' :-). Bill Gates
> zei ooit dat luie mensen de beste werknemers zijn, omdat luie mensen een moeilijk probleem
> eenvoudig proberen op te lossen.
>
> **Na:** Dat betrouwbaar laten werken is niet eenvoudig. Probeer het gerust eens uit. De oplossing
> is om in plaats van losse bits meer betekenisvolle commando's door te sturen.

Dezelfde grond als patroon 1: het staat er om te charmeren en niet om te informeren. Een terzijde dat
wél iets zegt, is geen knipoog en blijft, al staat het meestal beter in de hoofdzin.

Informele opmaak is iets anders dan een knipoog. `TLDR:` boven een samenvatting kondigt aan wat er
komt en blijft dus staan.

### 15. Beeldspraak alleen waar het gewone woord ontbreekt

Bestaat er een letterlijk woord voor wat je bedoelt, dan schrijf je dat.

> **Voor:** ... terwijl je maar drie pinnen van je Arduino opoffert.
>
> **Na:** ... terwijl je maar drie pinnen van je Arduino gebruikt.

Een beeld dat een mechanisme uitlegt, is uitleg en valt onder *Wat blijft*. Het verschil zit in wat
er gebeurt als je het beeld schrapt: verdwijnt er alleen kleur, dan was het opsmuk; verdwijnt er
begrip, dan hoort het er.

Een stijlronde vervangt een beeld **alleen wanneer de letterlijke formulering al op de pagina staat**,
zoals `opoffert` naast `gebruikt`. Vraagt de vervanging een technisch feit dat er nog niet staat, dan
is het geen stijlingreep meer en gaat de zin naar de vragenlijst van die doorloop. Zo blijft overeind
dat een stijlronde nooit verzint wat een pagina beweert.

### 16. Stel vast, beoordeel niet

Een alinea zegt wat er gebeurt. Ze zegt er niet bij hoe erg, hoe belangrijk of hoe gemeen dat is.

> **Voor:** Zonder afsluitweerstand krijg je reflecties op de lijn, en dat is meteen de vervelendste
> fout van allemaal om te vinden.
>
> **Na:** Zonder afsluitweerstand weerkaatst het signaal aan het uiteinde van de lijn en stoort het
> zichzelf. De ontvanger leest dan bits die de zender niet gestuurd heeft.

Het oordeel komt in vier vormen, en alle vier gaan ze weg. **De rangschikking:** "Dit is de
gevaarlijkste van de drie", "die test is geen luxe". **De aankondiging:** "Twee dingen zijn de moeite
om apart te bekijken", die alleen zegt dat er iets komt en het meteen weegt. **De slotwaardering:**
een zin die het feit uit de vorige zin nog eens beoordeelt in plaats van het te zeggen. **De
tegenhanger**, het vroegere patroon 8: niet elke bewering hoeft haar nuance mee, en wie ze er uit
evenwicht bij zet, weegt opnieuw voor de lezer.

> **Voor:** Seriële communicatie is trager dan parallel. Al wordt dat natuurlijk ruimschoots
> gecompenseerd, en in de praktijk valt het dus wel mee.
>
> **Na:** Seriële communicatie is per bit trager dan parallel, maar haalt door hogere klokfrequenties
> in de praktijk meer doorvoer.

Zet een nuance er alleen bij wanneer de student de afweging echt zelf moet maken, en dan als
informatie en niet als evenwicht.

De toets: schrap het waarderende zinsdeel. Staat het feit er dan nog, dan was het een oordeel.

Dit is niet hetzelfde als patroon 1, al overlappen ze aan het eind van een alinea. Patroon 1 gaat
over een zin die moet blijven hangen en die je schrapt. Hier gaat het over de gewoonte om de lezer te
vertellen wat hij van een feit moet vinden, en de ingreep is meestal geen schrapping maar een
verplaatsing: het gewicht gaat de mededeling in.

Een waarschuwing is geen oordeel. "Sluit niets aan voor je schema gecontroleerd is" is een instructie
en blijft, ook in een `warning`-kader. "Dit is de gevaarlijkste fout van de drie" is een rangschikking
en gaat weg. Eén keer per pagina mag een echte klemtoon: het probleem is de herhaling, want een
tekst die alles weegt, weegt niets meer.

### 17. Bekend materiaal krijgt minder plaats, maar reken niet op een ander labo

Alles even diep uitleggen is zelf een vorm van opvoering. Wat de student aantoonbaar al gezien heeft,
krijgt één regel en een verwijzing; het nieuwe krijgt de ruimte.

**Hier wijkt dit vak af van de repo waar dit document vandaan komt.** Bij Microcontrollers bouwen
labo 0 tot 7 op elkaar voort, dus daar mag een pagina rekenen op het vorige labo. **Hier niet.** De
labo's zijn onafhankelijke modules en de groepen roteren erdoor, dus je weet niet welke labo's een
student al gedaan heeft, en zelfs niet in welke volgorde. Een zin als "zoals je in het labo over
wireshark gezien hebt" is voor de helft van de groep onzin.

Waar je wél op mag rekenen, en dat is de hele lijst:

1. **De theorietrack**, de hoorcolleges en de syllabus. Die loopt wel in volgorde en gaat aan de
   labo's vooraf.
2. **Een eerdere theoriepagina van hetzelfde labo.** Binnen een module ligt de volgorde vast in
   `reference.js`, en de hub toont ze in die volgorde. `BiosUefi.html` mag dus rekenen op
   `Componenten.html`, en doet dat ook.
3. **Een eerdere schakeling van dezelfde opdracht.** Schakeling 6 mag rekenen op schakeling 5.

Moet een labo iets uit een ander labo hebben, dan hoort die stof in de theorietrack of in de
theoriepagina's van dat labo zelf, niet in een verwijzing.

Zelfde rem als bij patroon 15. Een stijlronde krimpt een uitleg **alleen wanneer een van de drie
bronnen hierboven de stof aantoonbaar behandelt**, en de verwijzing komt ervoor in de plaats. Kan je
dat niet aanwijzen, dan is inkorten geen stijlingreep. Nieuwe stof korter maken valt hier nooit
onder.

### 18. De student was niet bij het gesprek, en erft er wel de voorschriften van

Schrijf over het vak, nooit over de cursus als bouwwerk. Twee soorten zinnen sluipen hier binnen, en
ze hebben dezelfde oorzaak: ze bestaan door een gesprek waar de lezer niet bij was.

**De geschiedenis van het materiaal.** Wat vroeger ergens anders stond, wat verplaatst is, wat er
nieuw bij komt. Een student die dit vak voor het eerst doet heeft geen vorige versie gezien.

> **Voor:** De theorie blijft wel op de site staan. De zes theoriepagina's en de zelftest lees je op
> het scherm.
>
> **Na:** Lees de zes theoriepagina's en maak de zelftest voor je aan de opdracht begint.

**De verantwoording van een keuze.** Waarom het een document is en geen invulveld, waarom het een PDF
is en geen pagina: dat is een afweging van de docent. De student heeft de instructie nodig, niet het
argument.

> **Voor:** Vul dit document in terwijl je werkt en bewaar het op je OneDrive. Zo blijft het bewaard
> als je computer crasht of als je van pc wisselt, en kan je eraan verder werken wanneer je
> netwerkverbinding wegvalt.
>
> **Na:** Vul dit document in terwijl je werkt.

Let op wat er in dat voorbeeld overblijft. Schrap je alleen de verantwoording, dan houd je "bewaar
het op je OneDrive" over, en dat is een voorschrift dat uit hetzelfde gesprek komt. Zie het derde
spoor hieronder: de twee treden bijna altijd samen op, en de tweede is de makkelijkste om te missen.

Zulke zinnen ontstaan op het moment dat je iets verandert of beslist, en klinken dan volkomen
logisch. Let dus vooral op wat je schrijft tijdens een verbouwing, en op de woorden die erbij horen:
*blijft wel*, *staat nu*, *voortaan*, *vanaf dit jaar*, *zoals vroeger*, en elke *zo blijft*, *zodat
je* of *dan kan je* die uitlegt waarom de opdracht is zoals ze is.

Dit is een leesregel en geen scriptregel: die woorden komen ook volkomen legitiem voor. "Vroeger was
parallel populair" op de pagina over seriële communicatie gaat over de techniek, niet over de cursus.

De uitzondering is de vakinhoud zelf, en die is ruim. De geschiedenis van een standaard, een techniek
of een component hoort er wel bij, en een reden die iets **technisch** verklaart ook: "zet er een
pull-up op, anders zweeft de ingang" is geen verantwoording maar leerstof. De scheidslijn ligt niet
tussen instructie en reden, maar tussen een reden over het vak en een reden over de cursus.

**Het derde spoor is het voorschrift**, het vroegere patroon 19. Zeg wat je van de student nodig
hebt, niet hoe hij zijn werk organiseert. Waar hij zijn bestand bewaart, in welke map, met welke
naam, op welk toestel: dat is zijn zaak.

> **Voor:** Vul dit document in terwijl je werkt en bewaar het op je OneDrive.
>
> **Na:** Vul dit document in terwijl je werkt.

De toets is één vraag: **verandert het iets aan wat wij ontvangen of beoordelen?** Zo ja, dan is het
een instructie en hoort ze er. "Je dient dit in via de opdracht op Orion" blijft, want anders komt
het nergens aan. "Laat je schakeling controleren voor je verder gaat" blijft, want dat is de
werkvorm van het labo. "Zet je naam bovenaan" blijft, als je die naam nodig hebt om te verbeteren.
"Bewaar het op je OneDrive" gaat weg, want of hij dat doet zien wij nooit.

Dit is waarom de twee in één patroon staan. Een keuze die wij maken laat twee sporen na op de
pagina: de uitleg waarom en het voorschrift dat eruit volgt. De eerste valt op, want die klinkt
defensief. De tweede klinkt als een gewone instructie en blijft daardoor staan, ook nadat de uitleg
geschrapt is. Kom je de ene tegen, kijk dan meteen naar de zin ernaast.

Er is een randgeval: een voorschrift over de werkwijze **wordt** onze zaak zodra het de evaluatie
raakt. In een labo waar twee studenten samen één opstelling delen, is "spreek af wie zendt en wie
ontvangt" wél een instructie, want het bepaalt wat elk van beiden kan tonen. De vraag is niet of het
over zijn werkwijze gaat, maar of wij het merken.

### 20. Geen woord dat de lezer nog niet heeft

Een term gebruik je pas nadat de student hem gezien heeft, en waar er al een woord voor het ding
bestaat, is dat het woord. Dit was patroon 20 en 22: het eerste gaat over een naam die er nog niet
is, het tweede over een naam die er wel is en die je passeert.

**Een term komt na zijn uitleg.** De volgorde die telt is die van het Orion-menu: Inleiding,
Theorie, Opdracht. Wat de theoriepagina's uitleggen, is op de hub nog onbekend.

> **Voor:** Daarna werk je in de firmware op het moederbord: wat ze van de hardware ziet, waar ze
> haar instellingen bewaart en in welke volgorde ze een opstartbare schijf zoekt.
>
> **Na:** Daarna ga je de BIOS- of UEFI-omgeving in: wat ze over de hardware zegt, waar ze haar
> instellingen bewaart en in welke volgorde ze een opstartbare schijf zoekt.

`firmware` stond drie keer op de twee pagina's die een student als eerste opent, en wordt uitgelegd
op de vijfde theoriepagina van dat labo. `BIOS` en `UEFI` staan wel in de titel van het labo, in het
Orion-menu en in de naam van de opdracht, dus die woorden heeft hij al gezien. Een lijst met
doelstellingen is de uitzondering, want die belooft juist wat hij nog niet kent.

**En geen algemener woord dan je hebt**, het vroegere patroon 22. Staat er een naam voor het ding,
gebruik die.

> **Voor:** Je haalt het toestel uit elkaar, fotografeert elk onderdeel en vult van elk component de
> specificaties in.
>
> **Na:** Je haalt de computer uit elkaar, fotografeert elk onderdeel en vult de specificaties ervan
> in.

Die ene zin had drie woorden voor twee dingen: `toestel` voor de computer, en `component` naast
`onderdeel` voor hetzelfde. Zo komt het algemenere woord meestal binnen, om herhaling te vermijden,
en die herhaling stoort de schrijver meer dan de lezer. Ook zo: "de lijst waarin de firmware zoekt
naar iets om van op te starten", terwijl `opstartbare code` twee alinea's hoger staat, en "Bij een
processor kijk je naar vier dingen", waar het om vier gegevens gaat.

Twee dingen die deze helft uitdrukkelijk toelaat. **Een naam die eenmaal gevallen is, mag daarna
korter:** `het bord` na `het moederbord`, `de omgeving` na `de BIOS- of UEFI-omgeving`. Dat is geen
algemener woord maar dezelfde naam, verkort. En **wanneer het generieke woord meer dekt, is het het
juiste woord:** de opstartvolgorde en het bootmenu tonen een schijf, een stick of een netwerkkaart,
en `toestel` is wat die drie samen dekt. Een kolomkop `Aspect` boven een partitietabelformaat, een
groottegrens en een bedieningswijze is om dezelfde reden juist.

**Waar dit vandaan komt.** Je schrijft een hub wanneer de hele module al in je hoofd zit, dus het
vocabulaire van de laatste theoriepagina voelt als gedeelde grond, en dat is het alleen met jezelf.
Dezelfde oorzaak als patroon 18, met een ander voorwerp: 18 gaat over de geschiedenis van het
materiaal, dit over het vocabulaire. Patroon 17 regelt wat je uit een ander labo mag veronderstellen
en zegt niets over de volgorde binnen een labo, dus dit zat in het gat tussen die twee.

De toets, twee vragen. Staat het woord eerder in dezelfde reeks, of in de titel van het labo of van
het menu-item? En: bestaat er in deze tekst al een woord voor precies dit ding? Zo ja, dan is dat
het woord.


## Spelling en notatie

### `led`, niet `LED`

In de lopende tekst schrijf je `led` en `leds`, met een hoofdletter alleen waar een zin of een titel
begint.

> **Voor:** De LED zou moeten branden als je de D lijn van de zender op hoog zet.
>
> **Na:** De led hoort te branden als je de D-lijn van de zender hoog zet.

In code blijft alles zoals het is. `pinLED1` is een naam die de student overtypt, en waar `"LED1"`
een boodschap is die over een bus gaat, is de kapitaal gegeven. Schrijft een pagina de afkorting ooit
voluit, dan blijft `LED` staan in "LED staat voor Light Emitting Diode".

### De naam van een standaard houdt zijn streepje, een mapnaam niet

In de lopende tekst schrijf je de standaard zoals de standaard zichzelf schrijft: **RS-485**,
**RS-232**. In een bestandsnaam, een mapnaam, een module-id in `reference.js` en een `<h1>` of
`<title>` die daarnaar verwijst, gebruik je de vorm zonder leesteken: `Labo/RS485/`, `rs485`,
"Labo RS485".

Dat is dezelfde scheiding als bij `led` tegenover `pinLED`: proza volgt de taal, een identifier volgt
wat een pad en een sleutel kunnen dragen.

### Toestelinvoer en toestelantwoord blijven letterlijk

Cisco-configuratie, terminaloutput en wat een toestel terugstuurt, neem je over zoals het is. Geen
herformattering, geen ingekorte prompts, geen rechtgezette hoofdletters, ook niet wanneer het lelijk
staat. De student vergelijkt wat op zijn scherm staat met wat op de pagina staat, en elk verschil
dat wij aanbrengen is er een dat hij moet uitzoeken. `scripts/check-content.py` houdt daarom regel 5
bewust weg van `.terminal-window` en `.config-window`.

Dit geldt niet voor code die de student overtypt. Die volgt wel de huisstijl: Allman-accolades en
spaties rond de operatoren, afgedwongen door regel 5.

### En, nog steeds: geen em-dashes

Geen `—` en geen `&mdash;`, nergens in de tekst. Gebruik een komma, een dubbele punt, een punt of
"en"/"maar". Dit is de enige stijlregel die de check afdwingt, als onderdeel van regel 5. Er is geen
`--fix` in deze repo, dus je repareert ze zelf.

## De proef

Bij twijfel over een alinea, drie vragen:

1. **Zou ik dit zo tegen een student zeggen die naast me zit?** Een pointe die je aan een tafel niet
   uitspreekt, hoort ook niet op de pagina.
2. **Wat gebeurt er als ik de laatste zin schrap?** Verdwijnt er informatie, dan hoort ze er. Voelt
   de alinea alleen minder af, dan was het een slotzin uit patroon 1.
3. **Staat het interessantste stuk in de hoofdzin?** Als je beste voorbeeld tussen haakjes of achter
   een dubbele punt staat, staat het op de verkeerde plaats.

En sinds patroon 18 nog twee, voor alles wat je schrijft terwijl je aan de repo verbouwt:

4. **Zou deze zin er ook staan als de cursus altijd al zo geweest was?** Zo niet, dan gaat ze over
   ons werk en niet over het vak.
5. **Merken wij het als hij dit niet doet?** Zo niet, dan is het geen instructie maar bemoeienis.

En sinds patroon 20 nog twee, voor elk woord dat je op een pagina vroeg in een reeks zet:

6. **Staat dit woord eerder in de reeks, of in de titel van het labo?** Zo niet, gebruik de naam die
   de student wel kent.
7. **Bestaat er in deze tekst al een woord voor precies dit ding?** Zo ja, dan is dat het woord.

En na elke herschrijving, want de zeven hierboven zeggen alleen wat weg mag:

8. **Welk feit staat er niet meer?** Ontbreekt er een, dan is de herschrijving fout, hoeveel
   patronen ze ook oplost.

## Het ijkpunt

Labo Assemblage en beide pagina's onder `Algemeen/` kregen op 4 september 2026 een volledige
stijlronde. Die diff is het ijkpunt: hij toont wat de patronen 9, 16 en 18 in de praktijk wegnemen,
en hoe kort een `lead` daarna staat. Hij toont ook de fout uit vraag 8, want de lead van
`overview.html` is in die ronde een keer te ver ingekort en daarna hersteld. Leg hem ernaast voor je
aan een nieuwe module begint.
