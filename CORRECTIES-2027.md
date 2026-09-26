# Correcties voor het academiejaar 2027-2028

Wat hieronder staat, is fout, verouderd of aanvechtbaar in de syllabus en in de labotheorie, en het wordt
dit academiejaar met opzet niet rechtgezet. Beslist door de lector op 26 september 2026: de syllabus is
gedrukt en de studenten zijn aan het labo begonnen, en de spelregels veranderen niet terwijl het spel
gespeeld wordt. **Wat er staat moet juist zijn**, dus alles hieronder gaat mee in de eerste ronde voor
het volgende academiejaar.

Tot dan geldt voor de evaluatie: **geen vraag over een punt op deze lijst.** De ANS-test en het
schriftelijk examen vragen alleen naar wat juist is.

Bij elk punt staat de soort: **fout** (de bewering klopt niet), **verouderd** (ze klopte vroeger) of
**aanvechtbaar** (een student die meer weet, kan een vraag erover terecht aanvechten). Een voorstel is
een voorstel en geen besliste tekst. Een correctie in de syllabus is een woordcorrectie die een
herimport van de Word weggooit, dus ze gaat bij het doorvoeren ook in `Theorie/Syllabus/NOTITIES.md`,
en na het doorvoeren wordt de PDF opnieuw geexporteerd en de bladspiegel nagerekend.

Nagelezen tot nu toe: syllabus hoofdstuk 6 en 8 volledig, de delen van 3 en 7 over dezelfde
onderwerpen, en de theorie en Test jezelf van Labo Virtualiseren en Labo Partitioneren.
**Nog niet nagelezen**: de syllabushoofdstukken 1, 2, 4, 5 en 9 tot 16, en de labo's Assemblage,
Linux Basis en Linux Geavanceerd.

## Voor de begeleiders in het labo, dit jaar al

Vier verouderde punten in de labotheorie van Virtualiseren kunnen een student vast laten lopen. De
pagina blijft staan; wie begeleidt, weet het.

- **Zonder VT-x of AMD-V start er in VirtualBox geen enkele virtuele machine.** De pagina zegt dat je
  dan alleen 32-bitsystemen kan kiezen; sinds VirtualBox 6.1 bestaat die terugval niet meer en stopt
  de machine met een melding dat VT-x niet beschikbaar is.
- **VirtualBox draait wel naast Hyper-V**, bovenop de Windows Hypervisor Platform, alleen trager (een
  groen schildpadje onderaan het venster). Op Windows 11 zit de oorzaak meestal bij Geheugenintegriteit
  (Kernisolatie), WSL2 of Windows Sandbox.
- **Ubuntu Desktop vraagt 4 GB werkgeheugen.** Met de 2 GB die de pagina als minimum noemt, kan de
  installatie hangen.
- **Guest Additions bouwt zijn module na een kernelupdate zelf opnieuw** bij de volgende opstart.
  Opnieuw installeren is pas nodig als dat mislukt.

## Syllabus

### Hoofdstuk 3, BIOS / UEFI

1. **fout**, `Theorie/Syllabus/Theorie/BiosUefi/UnifiedExtensibleFirmwareInterfaceUefi.html`.
   Staat er: "Er kan dus niet meer geknoeid worden met het opstartproces van de computer", als gevolg
   van TPM. Klopt: Secure Boot controleert de handtekening van de bootloader, de TPM meet alleen, en
   er bestaan bootkits die voorbij Secure Boot raken (BlackLotus, 2023). Wordt: "UEFI kent Secure
   Boot: de firmware start alleen een bootloader die digitaal ondertekend is. Dat maakt knoeien met
   het opstartproces veel moeilijker."
2. **aanvechtbaar**, dezelfde pagina, en `BiosUefi/Overzicht.html` en een afleider in
   `BiosUefi/TestJezelf.html`. Staat er: het BIOS is "niet in staat om een computer te laten opstarten
   van een harde schijf die groter is dan 2 TB". Klopt: die grens hoort bij MBR en niet bij het BIOS.
   Wordt: "Windows start via de BIOS alleen op van een schijf met een MBR-partitietabel, en die kan
   niet meer dan 2 TB indelen."
3. **aanvechtbaar**, dezelfde pagina. Staat er: "UEFI partitie". Klopt: ze heet de
   EFI-systeempartitie.

### Hoofdstuk 6, Bestandssystemen

Alle paden onder `Theorie/Syllabus/Theorie/Bestandssystemen/`.

4. **fout**, `TestJezelf.html`, vraag 6 (C:\ en D:\ in Verkenner). Gemarkeerd juist: "Je weet zeker
   dat je twee partities hebt". Klopt: D: kan ook een dvd-station, een USB-stick of een netwerkstation
   zijn, dus geen van de drie opties is zeker. Wordt: "In Windows Verkenner zie je C:\ en D:\, en in
   Schijfbeheer staan ze allebei op Disk 0. Welke bewering is WAAR?"
5. **fout**, `Overzicht.html`, kader. Staat er: "In het UEFI partitieschema is dat onderscheid er
   niet" en "kies je dan voor MBR of UEFI?". Klopt: het partitieschema heet GPT, UEFI is de firmware.
   Wordt: "In het GPT partitieschema ..." en "kies je dan voor MBR of GPT?"
6. **fout**, `Partitioneren.html`. Staat er: "De overige 8 bytes van de sector zijn een handtekening
   waaraan de firmware ziet dat er een geldig master boot record staat." Klopt: 4 bytes
   schijfhandtekening, 2 nullen, en de laatste 2 bytes (55 AA) zijn de handtekening. De tekening van
   hoofdstuk 3 heeft het juist. Wordt: "Van de overige 8 bytes zijn er 4 een schijfhandtekening en 2
   nullen. De laatste 2 bytes, 55 AA, zijn de handtekening waaraan de firmware ziet dat er een geldig
   master boot record staat." Zelfde zin in Labo Partitioneren, zie punt 44.
7. **fout**, `Formatteren.html`. Staat er: "Dat bestandssysteem bepaalt op zijn beurt de maximale
   schijfgrootte, de maximale partitiegrootte en de maximale bestandsgrootte." Klopt: de schijfgrootte
   hangt aan de partitietabel, en dat zegt het hoofdstuk zelf in Partitioneren. Wordt: "Dat
   bestandssysteem bepaalt op zijn beurt de maximale partitiegrootte en de maximale bestandsgrootte."
8. **fout**, `NewTechnologyFileSystemNtfs.html`. Staat er: "Het is de opvolger van FAT32." Klopt:
   NTFS kwam in 1993 met Windows NT, FAT32 in 1996. Wordt: "Microsoft bracht het in 1993 uit met
   Windows NT, en sinds Windows XP vervangt het FAT32 als bestandssysteem van de Windowsschijf."
9. **fout**, `FileAllocationTableFat.html`. Staat er: "in 1996 ingevoerd met de lancering van
   Windows 95". Klopt: Windows 95 verscheen in 1995 met FAT16, FAT32 kwam in 1996 met een latere
   uitgave (OSR2). Wordt: "in 1996 ingevoerd met een latere uitgave van Windows 95".
10. **fout**, `Inleiding.html`, en de alt van de afbeelding ernaast. Staat er: "1,8″ vormfactor via
    M.2". Klopt: M.2 is zelf de vormfactor, 22 mm breed; een M.2-SSD is geen 1,8″-schijf. Wordt:
    "M.2-vormfactor (22 mm breed)".
11. **fout**, `ExtendedFileSystemExt.html`. Staat er: "Opstarten duurt zo minder lang gezien de
    bestanden die eerst nodig zijn bij elkaar worden geplaatst." Klopt: dat doet ext4 niet. Wat het
    wel doet, is de gegevens van een bestand dicht bij het bestand zelf bewaren (blokgroepen). Wordt:
    "De eerste reden is dat ext4 de gegevens van een bestand dicht bij de bijhorende map en
    beschrijving bewaart, zodat de leeskop weinig moet verspringen." Zelfde fout in het labo, zie
    punt 48.
12. **aanvechtbaar**, `TestJezelf.html`, vraag 7, en `Partitioneren.html`. Staat er: "Twee
    besturingssystemen op dezelfde partitie zouden elkaars bestanden dus overschrijven." Klopt: twee
    Windowsversies in aparte mappen op een NTFS-partitie ging wel. Wordt: vraag "Kan je Windows en
    Linux op dezelfde partitie installeren?", en in de tekst "Windows en Linux hebben daarvoor elk een
    eigen partitie nodig, want elk formatteert ze in zijn eigen bestandssysteem."
13. **aanvechtbaar**, `TestJezelf.html`, vraag 5, en `Clusters.html` (412 bytes in 64 KiB). Klopt: op
    NTFS staat een bestand van die grootte in de MFT en neemt het geen cluster in. Wordt: noem exFAT
    in de vraag en in het voorbeeld.
14. **aanvechtbaar**, `Fragmentatie.html`. Staat er: "Het moet dus worden verspreid op de harde schijf
    om toch nog opgeslagen te kunnen worden." Klopt: de figuur toont 300 MB vrij achter bestand 3,
    dus het past in een stuk. Wordt: "Vult het bestandssysteem eerst de vrijgekomen ruimte, dan komt
    het bestand in twee stukken op de schijf te staan."
15. **aanvechtbaar**, `NewTechnologyFileSystemNtfs.html`. Staat er: "Maximale partitiegrootte: 256 TB".
    Klopt: dat vraagt clusters van 64 KiB; met de standaardclusters van 4 KiB is het 16 TB, en sinds
    Windows 10 1709 gaat het met clusters van 2 MiB tot 8 PB. Zelfde getal in het labo, zie punt 50.
16. **aanvechtbaar**, `FileAllocationTableFat.html`. Staat er: "In een moderne Windows computer wordt
    de harde schijf echter altijd geformatteerd in het NTFS bestandssysteem." Klopt: er staat ook een
    kleine FAT32-EFI-systeempartitie op, want de firmware leest FAT. Wordt: "In een moderne Windows
    computer staat Windows zelf altijd op een NTFS-partitie. Alleen de kleine EFI-systeempartitie is
    FAT32, want de UEFI-firmware leest FAT."
17. **aanvechtbaar**, `FragmentatieBijEenSolidStateDrive.html` en `Defragmentatie.html`. Staat er:
    "geen performantieverlies" en defragmenteren "kan gemakkelijk met het programma defrag". Klopt:
    een SSD heeft er nauwelijks last van en je defragmenteert hem niet; Windows voert er TRIM op uit
    ("Stations optimaliseren"). Wordt: "... heeft dit type harde schijf nauwelijks last van
    gefragmenteerde bestanden. Een SSD defragmenteer je niet: Windows voert er in de plaats TRIM op
    uit."
18. **aanvechtbaar**, `Inleiding.html`. Staat er: "Een sector is meestal 512 bytes groot". Klopt: veel
    schijven werken intern met 4096 bytes en tonen zich als 512. Wordt: "Een schijf toont zijn sectoren
    meestal als 512 bytes groot, ook al werken veel moderne schijven intern met sectoren van 4096
    bytes."
19. **aanvechtbaar**, `Clusters.html`. Staat er: "Standaard wordt er 4096 bytes of 4 KiB gerekend."
    Klopt: dat geldt voor NTFS en ext4, niet voor FAT32 boven 32 GB en niet voor exFAT. Wordt: "Bij
    NTFS en ext4 is dat standaard 4096 bytes of 4 KiB." Zelfde zin in het labo, zie punt 51.
20. **aanvechtbaar**, kleinere punten:
    - `Partitioneren.html` en `Overzicht.html`: "altijd minstens 1 partitie". Een stick kan zonder
      partitietabel geformatteerd worden. Wordt: "Om een schijf in Windows te gebruiken, maak je er
      minstens een partitie op aan."
    - `Partitioneren.html`: "GPT heeft plaats voor 128 partities". Wordt: "standaard plaats voor 128
      partities".
    - `FileAllocationTableFat.html`: SD-kaarten boven 32 GB (SDXC) komen in exFAT, niet in FAT32.
    - `ExtendedFileSystemExt.html`: "het standaard bestandssysteem voor de meeste distributies".
      Fedora gebruikt btrfs, RHEL XFS. Wordt: "onder meer bij Ubuntu en Debian".
    - `Defragmentatie.html`: "in principe zelfs overbodig". Wordt: "zelden nodig".
    - `Overzicht.html`: grotere clusters "kunnen fragmentatie vermijden". Ze verminderen ze wat, en
      de tekst zegt dat zelf nergens.

### Hoofdstuk 7, Besturingssystemen

21. **aanvechtbaar**, `Theorie/Syllabus/Theorie/Besturingssystemen/Geheugenbeheer.html`. Staat er:
    "Het besturingssysteem gaat programma's die actief zijn maar niet vaak gebruikt worden uit het
    werkgeheugen halen en hun status opslaan op de harde schijf." Klopt: het verplaatst losse stukken
    geheugen die een tijd niet gebruikt zijn, geen hele programma's. Het labo zegt dat juist. Wordt:
    "Het besturingssysteem haalt stukken werkgeheugen die al een tijd niet gebruikt zijn uit het
    werkgeheugen en schrijft ze naar de schijf."
22. **aanvechtbaar**, dezelfde pagina. Staat er: te weinig werkgeheugen "niet meldt met een
    foutmelding maar met traagheid". Klopt: Windows waarschuwt bij weinig geheugen en Linux sluit
    processen af. Wordt: "zich in de eerste plaats meldt met traagheid".

### Hoofdstuk 8, Virtual machines en containers

Alle paden onder `Theorie/Syllabus/Theorie/VirtualMachinesEnContainers/`.

23. **fout**, `VirtualMachines.html`. Staat er: "Proxmox VE installeer je rechtstreeks op de kale
    hardware, zonder host besturingssysteem eronder". Klopt: Proxmox VE is Debian met KVM en dus zelf
    de host. Wordt: "Proxmox VE installeer je rechtstreeks op de kale hardware: het brengt zijn eigen
    Linux mee, dat niets anders doet dan guests draaien." Zelfde fout in het labo, zie punt 28.
24. **aanvechtbaar**, dezelfde zin. Hyper-V staat bij de programma's die je op een gewoon
    besturingssysteem installeert, maar schuift bij het aanzetten onder Windows. Wordt: "Hyper-V zit
    in Windows zelf ingebouwd en schuift er bij het aanzetten onder."
25. **aanvechtbaar**, `Overzicht.html`, `VirtualMachines.html` en `TestJezelf.html`, vraag 3. Staat
    er: virtuele machines "draaien volledig gescheiden en hebben geen invloed op elkaar", "geen enkele
    invloed", en in een NIET WAAR-vraag telt "Virtuele systemen zijn compleet gescheiden van elkaar"
    als waar. Klopt: ze delen processor, geheugen en netwerk, en via het netwerk of een gedeelde map
    kan een virus verder. Wordt: "Een guest die vastloopt, trekt de andere niet mee, maar ze delen wel
    de processor, het geheugen en het netwerk van de host." De testoptie wordt "Een crash in de ene
    virtuele machine laat de andere draaien".
26. **aanvechtbaar**, `Containers.html` en `TestJezelf.html`. Staat er: "Heb je op een Windowsmachine
    toch een Linuxsysteem nodig, dan is een virtuele machine het enige dat dat kan." Klopt: Docker
    Desktop draait Linux-containers op Windows, in een verborgen Linux-VM (WSL2). Containers delen de
    kernel, niet het hele besturingssysteem. Wordt: "Alle containers op een machine delen dezelfde
    kernel. Linuxcontainers op Windows draaien daarom in een verborgen virtuele machine met een
    Linuxkernel, en dat doet Docker Desktop voor je." Zelfde punt in het labo, zie punt 29.
27. **aanvechtbaar**, `Containers.html` en `Overzicht.html`. Staat er: virtuele machines "zijn traag",
    containers "vele malen performanter", "veel overhead". Klopt: met VT-x rekent een VM bijna op
    volle snelheid; een container wint aan werkgeheugen, opstarttijd en aantal per machine. Wordt:
    "De overhead is grotendeels weg: een container vraagt veel minder werkgeheugen, start in seconden,
    en je krijgt er veel meer op dezelfde machine."
    En `Containers.html`: "Voor iedere virtuele machine met Windows heb je een aparte licentie nodig."
    Windows Server Datacenter dekt onbeperkt veel VM's op een host. Wordt: "Ook een Windows in een
    virtuele machine heeft een licentie nodig. Voor servers bestaan er licenties die meerdere virtuele
    machines op dezelfde host dekken, maar gratis wordt het nooit." Zelfde punt in het labo, zie
    punt 30.

## Labo Virtualiseren

Alle paden onder `Labo/Virtualiseren/Theorie/`.

28. **fout**, `WatIsVirtualisatie.html`, tabel. Proxmox VE draait "zonder host eronder". Zie punt 23.
29. **aanvechtbaar**, `WatIsVirtualisatie.html`. Staat er: "Wil je Linux draaien op een
    Windows-machine, dan heb je een virtuele machine nodig". Zie punt 26. Ook `TestJezelf.html`,
    vraag 3, afleider "Een container kan een ander besturingssysteem draaien dan de machine eronder":
    wordt "een andere kernel".
30. **aanvechtbaar**, `WatIsVirtualisatie.html`. "Draai je tien virtuele machines met Windows, dan heb
    je tien Windows-licenties nodig." Zie punt 27.
31. **fout**, `WatIsVirtualisatie.html`. Staat er: "op de website van Docker vind je kant-en-klare
    containers voor duizenden programma's". Klopt: Docker Hub bevat images, en een container is een
    draaiende image. Labo Linux Geavanceerd zegt het al zo, dus de cursus spreekt zichzelf tegen.
    Wordt: "op Docker Hub vind je kant-en-klare images voor duizenden programma's, en van zo'n image
    start je een container."
32. **aanvechtbaar**, `WatIsVirtualisatie.html`. Staat er: "een guest die vastloopt of die je met een
    virus besmet, laat de rest ongemoeid". Zie punt 25. Wordt: "een guest die vastloopt, laat de rest
    ongemoeid".
33. **fout**, `VirtueleHardware.html`, en `TestJezelf.html`, vraag 4 met haar uitleg. Staat er:
    "Zonder hulp moet VirtualBox elke instructie van de guest zelf vertalen, en dat is traag" en "bij
    Versie zijn alleen de 32-bitbesturingssystemen te kiezen". Klopt: sinds VirtualBox 6.1 start
    zonder VT-x of AMD-V geen enkele virtuele machine. Wordt: "Zonder die hulp start VirtualBox geen
    enkele virtuele machine: ze stopt met een melding dat VT-x niet beschikbaar is." De vraag in de
    Test jezelf krijgt dat symptoom.
34. **verouderd**, `VirtueleHardware.html` en `TestJezelf.html`. Staat er: "zet in Windows eventueel
    Hyper-V uit, want twee programma's kunnen niet tegelijk over die uitbreiding beschikken". Klopt:
    VirtualBox draait bovenop Hyper-V, alleen trager. Wordt: "Draait in Windows Hyper-V, of iets dat
    erop steunt zoals Geheugenintegriteit of WSL2, dan werkt VirtualBox daarbovenop, maar merkbaar
    trager. Je herkent dat aan een groen schildpadje onderaan het venster."
35. **aanvechtbaar**, `VirtueleHardware.html` en `TestJezelf.html`, vraag 5. Staat er: "recente
    Ubuntu-versies [gaan] ervan uit dat ze op EFI opstarten. Laat je het uit, dan ... kan de
    installatie halverwege stilvallen." Klopt: Ubuntu 24.04 installeert ook zonder EFI. Wordt: "In dit
    labo zet je het vinkje aan, zodat je virtuele machine opstart zoals elke recente fysieke computer."
    Na te gaan met de VirtualBox-versie van het labo: of de wizard het vinkje voor Ubuntu standaard
    uit laat.
36. **aanvechtbaar**, `VirtueleHardware.html`. Staat er: EFI "start van schijven die groter zijn dan
    2 TB" en "heeft een grafische interface waarin je de muis kan gebruiken". Klopt: de 2 TB hoort bij
    MBR, en de muis is een extraatje van de fabrikant; de EFI van VirtualBox heeft er geen. Wordt:
    "EFI start zonder omweg van een GPT-schijf, en daardoor ook van schijven groter dan 2 TB."
37. **fout**, `SchijfEnGeheugen.html`. Staat er: "Ook een dynamische schijf kan nooit groter worden
    dan wat je bij het aanmaken opgegeven hebt." Klopt: de maximumgrootte kan achteraf vergroot
    worden (Virtual Media Manager, `VBoxManage modifymedium --resize`). Wordt: "Een dynamische schijf
    groeit nooit vanzelf voorbij de grootte die je opgaf. Je kan die maximumgrootte achteraf wel
    vergroten, en daarna moet je de partitie erin mee vergroten." Ook "De eerste ligt vast zodra de
    machine gemaakt is" (de manier van alloceren) is aanvechtbaar: omzetten kan door te klonen.
38. **verouderd**, `SchijfEnGeheugen.html`. Staat er: "Het absolute minimum voor Ubuntu is ongeveer
    2 GB." Wordt: "Canonical vraagt voor Ubuntu Desktop minstens 4 GB."
39. **aanvechtbaar**, `SchijfEnGeheugen.html` en `TestJezelf.html`, vraag 9. Staat er: een statische
    schijf "reageert sneller, en het bestand ligt in één stuk op de schijf". Klopt: of het bestand in
    een stuk ligt, beslist het bestandssysteem van de host, en op een SSD is het verschil klein.
    Wordt: "De machine hoeft tijdens het werken nooit plaats bij te vragen, en dat scheelt een beetje,
    vooral op een harde schijf met draaiende platen."
40. **aanvechtbaar**, `TestJezelf.html`, vraag 8 (25 GB, 10 GB in gebruik). Een dynamische schijf
    krimpt niet wanneer je iets wist. Wordt: "Er staat 10 GB aan bestanden op, en je hebt nog niets
    gewist."
41. **verouderd**, `SoftwareInDeGuest.html`. Staat er: "Krijgt je Ubuntu later een nieuwe kernel, dan
    past de gebouwde module daar niet meer bij en valt de schaalbare resolutie weg. Je lost dat op door
    Guest Additions opnieuw te installeren". Klopt: Guest Additions bouwt de module bij de volgende
    opstart zelf opnieuw. Wordt: "Krijgt je Ubuntu later een nieuwe kernel, dan bouwt Guest Additions
    de module bij de volgende opstart zelf opnieuw, met het gereedschap dat er nu staat. Lukt dat
    niet, dan installeer je Guest Additions opnieuw."
42. **aanvechtbaar**, `SoftwareInDeGuest.html`. Staat er: "een verse Ubuntu in een venster met een
    vaste, kleine resolutie". Klopt: de resolutie kies je wel in de instellingen van Ubuntu; wat
    ontbreekt, is het meeschalen met het venster. Wordt: "past het bureaublad zich niet aan wanneer je
    het venster groter maakt". Na te gaan: of het gedeelde klembord onder Wayland (standaard in Ubuntu
    24.04) werkt met de VirtualBox-versie van het labo.
43. **aanvechtbaar**, `SoftwareInDeGuest.html`. Staat er: codecs als proprietary software, en "Laat je
    het uit, dan blijft je installatie volledig vrije software". Klopt: de codecs zijn meestal open
    source met patenten erop, en Ubuntu levert standaard al proprietary firmware mee. Wordt: "Codecs
    ... zijn vaak wel open source, maar zitten achter patenten" en "dan blijft je installatie zonder
    die extra stuurprogramma's en codecs".

## Labo Partitioneren

Alle paden onder `Labo/Partitioneren/Theorie/`.

44. **fout**, `Partitietabellen.html`, bijschrift bij de MBR-figuur. "De overige 8 bytes van de sector
    zijn een handtekening". Zie punt 6.
45. **aanvechtbaar**, `Partitietabellen.html` en `Spiekblad.html`. Staat er: "Windows start van een
    primaire partitie", "Zet Windows dus in een primaire partitie" en "Windows start hiervan op".
    Klopt: bij MBR moet alleen de actieve systeempartitie met de opstartcode primair zijn; Windows
    zelf mag op een logische staan. Wordt: "De partitie waarvan Windows opstart, moet primair zijn."
46. **aanvechtbaar**, `Partitietabellen.html`. "Op een medium dat je gebruikt staat altijd minstens
    één partitie" en "plaats voor 128 partities". Zie punt 20.
47. **fout**, `Bestandssystemen.html`, sectie Fragmentatie. Staat er: "Worst fit ... fragmenteert
    daardoor het minst. De ext-bestandssystemen van Linux werken zo". Klopt: ext4 werkt met
    blokgroepen, extents, uitgestelde toewijzing en vooraf gereserveerde ruimte, niet met worst fit.
    Wordt: "ext4 zoekt voor een bestand een groot aaneengesloten stuk, wacht met toewijzen tot het
    weet hoeveel er geschreven wordt en reserveert ruimte om te groeien; daardoor is defragmenteren
    daar zelden nodig."
48. **fout**, `Bestandssystemen.html`, ext4. "Het legt de bestanden die bij het opstarten nodig zijn
    bij elkaar". Zie punt 11. Schrappen.
49. **verouderd**, `Bestandssystemen.html`, linux-swap en de laatste sectie. Staat er: "een
    Linux-distributie op ext4, met daarnaast een linux-swap-partitie". Klopt: Ubuntu gebruikt sinds
    17.04 een swapbestand (`/swap.img`), dus de Ubuntu-machine van de studenten toont geen
    swap-partitie. Wordt: "Linux kan daarvoor een eigen partitie gebruiken of, zoals Ubuntu, een
    wisselbestand."
50. **aanvechtbaar**, `Bestandssystemen.html` en `Spiekblad.html`. NTFS "tot 256 TB". Zie punt 15.
51. **aanvechtbaar**, `Bestandssystemen.html` en `Spiekblad.html`. "De standaardwaarde is 4096 bytes"
    en "standaard 4 KiB bij het formatteren". Zie punt 19.
52. **aanvechtbaar**, `Bestandssystemen.html`. "Microsoft bracht FAT32 in 1996 uit met Windows 95".
    Zie punt 9: "met een latere uitgave van Windows 95".
53. **aanvechtbaar**, `Bestandssystemen.html`, bijschrift bij de fragmentatiefiguur. Het nieuwe
    bestand komt "dus" in twee stukken; dat gebeurt alleen als het bestandssysteem eerst het gat vult.
    Zie punt 14.
54. **aanvechtbaar**, `TestJezelf.html`, de vraag met clusters van 64 KiB en duizend bestanden van
    500 bytes. Zie punt 13: noem exFAT in de vraag.

## Wat al doorgevoerd is

Op 26 september 2026, voor deze lijst bestond, zijn in Labo Virtualiseren en Labo Partitioneren al
drie inhoudelijke wijzigingen gemaakt (commit `c139ae2`). Ze maken de tekst juister en er hangt geen
testvraag aan, dus ze blijven staan en gaan bij de volgende sync online:

- de doelstellingen van beide labo's, van zeven en vijf naar vier en vier;
- het journaal uit het hele labo Partitioneren (de syllabus had het al geschrapt);
- in Virtualiseren de processor en het werkgeheugen die niet "in software nagemaakt" worden, en de zin
  dat je de grootte van de virtuele schijf "achteraf niet meer verandert".
