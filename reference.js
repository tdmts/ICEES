/*
 * reference.js -- het manifest van de syllabus.
 *
 * De syllabus is een PDF die uit HTML-pagina's gegenereerd wordt, door
 * scripts/export-syllabus.py. Dit bestand bepaalt welke pagina's erin komen en
 * in welke volgorde. Een categorie is een hoofdstuk, een topic is een sectie.
 * scripts/check-content.py leest het ook (regel 2) en eist dat elke pagina
 * onder Theorie/Syllabus/Theorie/ erin staat: een pagina die hier ontbreekt,
 * wordt niet gedrukt terwijl ze op het scherm gewoon opent.
 *
 * Een href is relatief ten opzichte van Theorie/Syllabus/Theorie/, nooit een
 * volledige URL.
 *
 * Een hoofdstuk krijgt in de PDF zijn nummer uit zijn plaats in deze lijst, niet
 * uit een veld: een nummer dat hier staat, is een tweede waarheid naast de
 * volgorde. Het Voorwoord draagt geen nummer en zegt dat met genummerd: false.
 *
 * De blurb wordt nergens gedrukt en nergens getoond. Ze beschrijft in een zin
 * wat een sectie behandelt, voor wie dit bestand leest. Regel 2 eist ze, zodat
 * ze niet stil leeg kan lopen.
 *
 * De labo's staan hier niet meer. Die navigeert het Orion-menu, en wat erin
 * staat, beschrijft orion.json.
 *
 * Geen van beide lezers voert JavaScript uit, dus de vorm ligt vast: vier
 * spaties voor "syllabus:", en per topic id, name, blurb en href tussen enkele
 * aanhalingstekens. Een apostrof in een van die waarden kapt ze af.
 */
window.LAB_REFERENCE = {
    /*
     * De syllabus is de theorietrack, en ze werkt anders dan een labo: wat de
     * student krijgt is een PDF, en die wordt uit deze pagina's gegenereerd
     * door scripts/export-syllabus.py. Het manifest bepaalt daarbij de volgorde
     * van het gedrukte document, precies zoals het hier de volgorde van de hub
     * bepaalt, zodat de twee niet uit elkaar kunnen lopen.
     *
     * Een categorie is een hoofdstuk en krijgt in de PDF zijn nummer uit haar
     * plaats in deze lijst, niet uit een veld: een nummer dat hier staat, is een
     * tweede waarheid naast de volgorde. Een Voorwoord draagt geen nummer en
     * zegt dat met genummerd: false.
     *
     * De Word heeft zestien genummerde hoofdstukken; ze worden een voor een
     * ingevoerd, dus wat hieronder staat is wat er al is en niet wat er komt.
     */
    syllabus: {
        name: 'Syllabus',
        categories: [
            {
                /*
                 * Het Voorwoord draagt geen nummer, en het is de enige
                 * categorie hier met genummerd: false. Het staat in de Word
                 * voor hoofdstuk 1 en in de gedrukte syllabus op de eerste
                 * bladzijde na het voorwerk.
                 */
                name: 'Voorwoord',
                topics: [
                    {
                        id: 'voorwoord',
                        name: 'Voorwoord',
                        blurb: 'Kleiner, sneller, goedkoper als samenvatting van vijftig jaar computerindustrie, en wat er in dit opleidingsonderdeel aan bod komt.',
                        href: 'Voorwoord.html'
                    }
                ],
                genummerd: false
            },
            {
                name: 'Generaties',
                topics: [
                    {
                        id: 'generaties-overzicht',
                        name: 'Kernpunten en studievragen',
                        blurb: 'Waarom componenten dichter bij elkaar kruipen, waar die schaalverkleining op vastloopt, en wat er dan overblijft om sneller te worden.',
                        href: 'Generaties/Overzicht.html'
                    },
                    {
                        id: 'generaties-generatie-0',
                        name: 'Generatie 0: mechanische computers',
                        blurb: 'Rekenmachines van voor de elektronica, van het telraam tot de analytical engine, zonder een weerstand of condensator erin.',
                        href: 'Generaties/Generatie0MechanischeComputers.html'
                    },
                    {
                        id: 'generaties-generatie-1',
                        name: 'Generatie 1: vacuumbuizen',
                        blurb: 'De COLOSSUS en de ENIAC: 18000 buizen, twee klaslokalen groot, geprogrammeerd met schakelaars tot Von Neumann er instructies in het geheugen van maakte.',
                        href: 'Generaties/Generatie1Vacuumbuizen.html'
                    },
                    {
                        id: 'generaties-generatie-2',
                        name: 'Generatie 2: transistoren',
                        blurb: 'De transistor van Bell Labs als elektronische schakelaar, en waarom de vacuumbuis er binnen tien jaar door verdween.',
                        href: 'Generaties/Generatie2Transistoren.html'
                    },
                    {
                        id: 'generaties-generatie-3',
                        name: 'Generatie 3: integrated circuits (ICs)',
                        blurb: 'Tientallen transistoren op een chip, en de eerste computers die meer dan een taak tegelijk aankonden.',
                        href: 'Generaties/Generatie3IntegratedCircuitsIcs.html'
                    },
                    {
                        id: 'generaties-generatie-4',
                        name: 'Generatie 4: very large scale integration (VLSI)',
                        blurb: 'Miljoenen transistoren op een chip vanaf 1980, en de twee redenen waarom kleiner ook sneller en complexer betekent.',
                        href: 'Generaties/Generatie4VeryLargeScaleIntegrationVlsi.html'
                    },
                    {
                        id: 'generaties-generatie-5',
                        name: 'Generatie 5: quantumcomputers',
                        blurb: 'De qubit en de superpositie, uitgelegd met de kat van Schrodinger, en waarom dit voorlopig geen general purpose computer oplevert.',
                        href: 'Generaties/Generatie5Quantumcomputers.html'
                    },
                    {
                        id: 'generaties-nu',
                        name: 'Nu',
                        blurb: 'Meerdere kernen in plaats van kleinere transistoren, en waarom die kernen niets opleveren als het programma geen threads gebruikt.',
                        href: 'Generaties/Nu.html'
                    },
                    {
                        id: 'generaties-test-jezelf',
                        name: 'Test jezelf',
                        blurb: 'Vijf meerkeuzevragen over de generaties, de wet van Moore en waar de snelheidswinst vandaag vandaan komt.',
                        href: 'Generaties/TestJezelf.html'
                    }
                ]
            },
            {
                name: 'Hardware in een moderne computer',
                topics: [
                    {
                        id: 'hardware-overzicht',
                        name: 'Kernpunten en studievragen',
                        blurb: 'Welke onderdelen elke computer heeft, dat ze allemaal op het moederbord uitkomen, en langs welke aansluitingen een randapparaat of een scherm binnenkomt.',
                        href: 'HardwareInEenModerneComputer/Overzicht.html'
                    },
                    {
                        id: 'hardware-herkennen',
                        name: 'Hardware herkennen',
                        blurb: 'Dertig onderdelen, kabels en aansluitingen op foto om te benoemen: van het M.2-slot op het moederbord tot de kleur van een audiostekker.',
                        href: 'HardwareInEenModerneComputer/HardwareHerkennen.html'
                    },
                    {
                        id: 'hardware-prestaties',
                        name: 'Prestaties',
                        blurb: 'Waarom een snellere processor of een grotere schijf niet zomaar past, en waarom een industriele pc die keuze al voor je gemaakt heeft.',
                        href: 'HardwareInEenModerneComputer/Prestaties.html'
                    }
                ]
            },
            {
                name: 'BIOS / UEFI',
                topics: [
                    {
                        id: 'bios-uefi-overzicht',
                        name: 'Kernpunten en studievragen',
                        blurb: 'Waarvoor de BIOS dient, welke beperkingen hij heeft, en waarom zijn opvolger UEFI nog altijd BIOS genoemd wordt.',
                        href: 'BiosUefi/Overzicht.html'
                    },
                    {
                        id: 'bios-uefi-bootsequence',
                        name: 'Bootsequence',
                        blurb: 'De processor begint bij de reset vector, en die ene instructie stuurt hem door naar het geheugen waar de firmware staat.',
                        href: 'BiosUefi/Bootsequence.html'
                    },
                    {
                        id: 'bios-uefi-bios',
                        name: 'Basic input output system (BIOS)',
                        blurb: 'De POST, de instellingen die de batterij bewaart, speed stepping op een industriele pc, en de weg van opstartvolgorde over master boot record naar bootloader.',
                        href: 'BiosUefi/BasicInputOutputSystemBios.html'
                    },
                    {
                        id: 'bios-uefi-uefi',
                        name: 'Unified Extensible Firmware Interface (UEFI)',
                        blurb: 'Vier nadelen van de BIOS, en hoe UEFI ze oplost met een grotere chip, TPM en een opstartpartitie met een .efi-programma erop.',
                        href: 'BiosUefi/UnifiedExtensibleFirmwareInterfaceUefi.html'
                    },
                    {
                        id: 'bios-uefi-omgeving',
                        name: 'BIOS / UEFI',
                        blurb: 'Waarom de term BIOS blijft plakken op firmware die UEFI is, en met welke toets je tijdens het opstarten in die omgeving raakt.',
                        href: 'BiosUefi/DeUefiOmgeving.html'
                    },
                    {
                        id: 'bios-uefi-artikel',
                        name: 'Artikel: BIOS en UEFI',
                        blurb: 'Vier schermafdrukken van een artikel van TechPulse over wat je computer doet voor Windows opstart.',
                        href: 'BiosUefi/ArtikelBiosEnUefi.html'
                    },
                    {
                        id: 'bios-uefi-test-jezelf',
                        name: 'Test jezelf',
                        blurb: 'Negen vragen over het opstartproces, de POST, de MBR en de nadelen van de BIOS.',
                        href: 'BiosUefi/TestJezelf.html'
                    }
                ]
            }
            ,
            {
                name: 'Industriële computer vs embedded system',
                topics: [
                    {
                        id: 'industriele-computer-overzicht',
                        name: 'Kernpunten en studievragen',
                        blurb: 'Wat een industriele computer onderscheidt van een gewone desktop, waarom de instructieset van de processor vastlegt wat er kan draaien, en waarvoor een IO eiland dient.',
                        href: 'IndustrieleComputerVsEmbeddedSystem/Overzicht.html'
                    },
                    {
                        id: 'industriele-computer-ipc',
                        name: 'Industriele computers',
                        blurb: 'Vier criteria bij de keuze van een IPC: de processor, de vormfactor van ATX tot DIN rail, het touchscreen en het besturingssysteem, en waarom de hardware een generatie achterloopt.',
                        href: 'IndustrieleComputerVsEmbeddedSystem/IndustrieleComputers.html'
                    },
                    {
                        id: 'industriele-computer-embedded',
                        name: 'Embedded system',
                        blurb: 'Een computer voor een enkele taak: waarnemen met sensoren, verwerken, bijregelen, en waarom dat een real time besturingssysteem vraagt. Het toestel van het labo is de Raspberry Pi.',
                        href: 'IndustrieleComputerVsEmbeddedSystem/EmbeddedSystem.html'
                    },
                    {
                        id: 'industriele-computer-panel-pc',
                        name: 'Panel PCs',
                        blurb: 'De tablet van de machinekast: ingebouwd in de deur, bediend via het touchscreen, en over ethernet verbonden met de IO eilanden.',
                        href: 'IndustrieleComputerVsEmbeddedSystem/PanelPcs.html'
                    },
                    {
                        id: 'industriele-computer-control-cabinet-pc',
                        name: 'Control cabinet PC',
                        blurb: 'Dezelfde machine zonder scherm, gebouwd op beschikbaarheid: onderdelen die lang leverbaar blijven en vanaf het frontpaneel te wisselen zijn.',
                        href: 'IndustrieleComputerVsEmbeddedSystem/ControlCabinetPc.html'
                    },
                    {
                        id: 'industriele-computer-test-jezelf',
                        name: 'Test jezelf',
                        blurb: 'Vier meerkeuzevragen over de IPC, het processortype, het IO eiland en de netwerkprotocollen, en een invulblad voor de specs van een Raspberry Pi.',
                        href: 'IndustrieleComputerVsEmbeddedSystem/TestJezelf.html'
                    }
                ]
            },
            {
                name: 'De Von Neumann architectuur',
                topics: [
                    {
                        id: 'von-neumann-overzicht',
                        name: 'Kernpunten en studievragen',
                        blurb: 'Uit welke functionele onderdelen een computer bestaat, waarom data en instructies in het werkgeheugen moeten staan, en waarom het verschil tussen x86, x64 en ARM bepaalt welke software er draait.',
                        href: 'DeVonNeumannArchitectuur/Overzicht.html'
                    },
                    {
                        id: 'von-neumann-schema',
                        name: 'Von Neumann schema',
                        blurb: 'Van een machine die maar een taak kende naar een general purpose computer: de processor haalt zijn instructies uit het werkgeheugen, en het traagste blok van het schema is de bottleneck.',
                        href: 'DeVonNeumannArchitectuur/VonNeumannSchema.html'
                    },
                    {
                        id: 'von-neumann-processor',
                        name: 'Processor: x86 vs x64 vs ARM',
                        blurb: 'Twee instructiesets: x86 en x64 mikken op prestaties en verbruiken veel, ARM op een laag verbruik. Wat voor de ene vertaald is, draait niet op de andere, en emulatie kost snelheid.',
                        href: 'DeVonNeumannArchitectuur/ProcessorX86VsX64VsArm.html'
                    },
                    {
                        id: 'von-neumann-test-jezelf',
                        name: 'Test jezelf',
                        blurb: 'Vier meerkeuzevragen over het principe, de bottleneck, de eigenschappen van een x64 processor en de compatibiliteit met ARM, en een tekenkader voor het schema zelf.',
                        href: 'DeVonNeumannArchitectuur/TestJezelf.html'
                    }
                ]
            },
            {
                name: 'Bestandssystemen',
                topics: [
                    {
                        id: 'bestandssystemen-overzicht',
                        name: 'Kernpunten en studievragen',
                        blurb: 'Waarom je een schijf eerst partitioneert en dan formatteert, wat het bestandssysteem vastlegt aan grenzen, en wat fragmentatie en clusters met elkaar te maken hebben.',
                        href: 'Bestandssystemen/Overzicht.html'
                    },
                    {
                        id: 'bestandssystemen-inleiding',
                        name: 'Inleiding',
                        blurb: 'Drie schijven naast elkaar, en het ene begrip dat je verder in dit hoofdstuk nodig hebt: de sector van 512 bytes.',
                        href: 'Bestandssystemen/Inleiding.html'
                    },
                    {
                        id: 'bestandssystemen-partitioneren',
                        name: 'Partitioneren',
                        blurb: 'Een schijf verdelen in stukken die je apart kan gebruiken: het MBR en het GPT partitieschema, de drie soorten partities die alleen MBR kent, en waarom je systeem en data uit elkaar houdt.',
                        href: 'Bestandssystemen/Partitioneren.html'
                    },
                    {
                        id: 'bestandssystemen-formatteren',
                        name: 'Formatteren',
                        blurb: 'Het bestandssysteem als de inhoudstafel van de schijf, en waarom het aantal bits voor een sectoradres bepaalt hoe groot een partitie en een bestand mogen worden.',
                        href: 'Bestandssystemen/Formatteren.html'
                    },
                    {
                        id: 'bestandssystemen-clusters',
                        name: 'Clusters',
                        blurb: 'Acht sectoren onder een adres in plaats van een: dezelfde adresruimte dekt acht keer zo veel schijf, en wat er in het laatste cluster overblijft heet slack.',
                        href: 'Bestandssystemen/Clusters.html'
                    },
                    {
                        id: 'bestandssystemen-fragmentatie',
                        name: 'Fragmentatie',
                        blurb: 'Een gewist bestand laat een gat achter dat te klein is voor het volgende, dus komt dat bestand in stukken op de schijf terecht.',
                        href: 'Bestandssystemen/Fragmentatie.html'
                    },
                    {
                        id: 'bestandssystemen-fragmentatie-schijf',
                        name: 'Fragmentatie bij de klassieke harde schijf',
                        blurb: 'Elk stuk kost de arm een nieuwe herpositionering, en daarom heeft FAT er meer last van dan NTFS of ext2.',
                        href: 'Bestandssystemen/FragmentatieBijDeKlassiekeHardeSchijf.html'
                    },
                    {
                        id: 'bestandssystemen-fragmentatie-ssd',
                        name: 'Fragmentatie bij een solid state drive',
                        blurb: 'Zonder bewegende onderdelen kost een verspreid bestand geen tijd, dus een SSD verliest er niets bij.',
                        href: 'Bestandssystemen/FragmentatieBijEenSolidStateDrive.html'
                    },
                    {
                        id: 'bestandssystemen-defragmentatie',
                        name: 'Defragmentatie',
                        blurb: 'De bestanden weer achter elkaar zetten zodat de kop nog een keer moet zoeken, en waarom dat op ext in principe overbodig is.',
                        href: 'Bestandssystemen/Defragmentatie.html'
                    },
                    {
                        id: 'bestandssystemen-fat',
                        name: 'File Allocation Table (FAT)',
                        blurb: 'Het bestandssysteem van USB-sticks en SD-kaarten: partities tot 2 TB, bestanden tot 4 GB, en daarom niet meer in een computer.',
                        href: 'Bestandssystemen/FileAllocationTableFat.html'
                    },
                    {
                        id: 'bestandssystemen-ntfs',
                        name: 'New Technology File System (NTFS)',
                        blurb: 'Wat Windows op zijn eigen schijven zet: een adresruimte die groot genoeg is voor zeer veel bestanden, die elk ook zeer groot mogen zijn.',
                        href: 'Bestandssystemen/NewTechnologyFileSystemNtfs.html'
                    },
                    {
                        id: 'bestandssystemen-ext',
                        name: 'Extended File System (ext)',
                        blurb: 'Het standaardbestandssysteem van de meeste Linux-distributies sinds 2009: gericht op snelheid, met vooraf gereserveerde blokken tegen fragmentatie.',
                        href: 'Bestandssystemen/ExtendedFileSystemExt.html'
                    },
                    {
                        id: 'bestandssystemen-test-jezelf',
                        name: 'Test jezelf',
                        blurb: 'Zeven meerkeuzevragen over de volgorde van partitioneren en formatteren, wat het bestandssysteem begrenst, en welk bestandssysteem bij Windows en bij Linux hoort.',
                        href: 'Bestandssystemen/TestJezelf.html'
                    }
                ]
            },
            {
                name: 'Besturingssystemen',
                topics: [
                    {
                        id: 'besturingssystemen-overzicht',
                        name: 'Kernpunten en studievragen',
                        blurb: 'Waarom een industriële pc een besturingssysteem nodig heeft, welke twee je in de industrie tegenkomt, en welke vier kerntaken zo een systeem op zich neemt.',
                        href: 'Besturingssystemen/Overzicht.html'
                    },
                    {
                        id: 'besturingssystemen-windows',
                        name: 'Windows',
                        blurb: 'Waarom Windows het bedrijfsleven haalde en Linux niet, en wat het IoT Enterprise LTSC-kanaal anders doet: zo weinig mogelijk updaten en lang ondersteund blijven.',
                        href: 'Besturingssystemen/Windows.html'
                    },
                    {
                        id: 'besturingssystemen-linux',
                        name: 'Linux',
                        blurb: 'Linux is een kernel en geen besturingssysteem, en het is de distributie die er een van maakt; waarom embedded systems er zo vaak op draaien.',
                        href: 'Besturingssystemen/Linux.html'
                    },
                    {
                        id: 'besturingssystemen-gebruikersbeheer',
                        name: 'Gebruikersbeheer',
                        blurb: 'Aanmelden met een wachtwoord of met biometrie, en waarom je een gebruiker op een machine net zo weinig rechten geeft als hij nodig heeft.',
                        href: 'Besturingssystemen/Gebruikersbeheer.html'
                    },
                    {
                        id: 'besturingssystemen-bestandsbeheer',
                        name: 'Bestandsbeheer',
                        blurb: 'Rechten op bestanden en mappen houden de ene gebruiker uit de bestanden van de andere: geen rechten is geen toegang.',
                        href: 'Besturingssystemen/Bestandsbeheer.html'
                    },
                    {
                        id: 'besturingssystemen-geheugenbeheer',
                        name: 'Geheugenbeheer',
                        blurb: 'Waarom bij elkaar horende gegevens op aanliggende adressen komen, en wat het besturingssysteem doet zodra het werkgeheugen vol zit: swapping.',
                        href: 'Besturingssystemen/Geheugenbeheer.html'
                    },
                    {
                        id: 'besturingssystemen-procesbeheer',
                        name: 'Procesbeheer',
                        blurb: 'Ready, running en blocked, wat er bij een context switch bewaard en hersteld wordt, en het verschil tussen cooperative en preemptive multitasking.',
                        href: 'Besturingssystemen/Procesbeheer.html'
                    },
                    {
                        id: 'besturingssystemen-prioriteit-en-realtime',
                        name: 'Prioriteit en realtime',
                        blurb: 'Waarom een tijdskritisch proces niet snel maar op tijd moet zijn, wat de klasse Realtime wel en niet belooft, en waarin een real time operating system verschilt.',
                        href: 'Besturingssystemen/PrioriteitEnRealtime.html'
                    },
                    {
                        id: 'besturingssystemen-test-jezelf',
                        name: 'Test jezelf',
                        blurb: 'Tien vragen over Windows en Linux, de rechten van een gebruiker, swapping, de process scheduler en de klasse Realtime.',
                        href: 'Besturingssystemen/TestJezelf.html'
                    }
                ]
            },
            {
                name: 'Virtual machines en containers',
                topics: [
                    {
                        id: 'virtual-machines-overzicht',
                        name: 'Kernpunten en studievragen',
                        blurb: 'Wat een virtuele machine nabootst en wat niet, hoe host en guest zich tot elkaar verhouden, en waarom een container het besturingssysteem van de machine deelt.',
                        href: 'VirtualMachinesEnContainers/Overzicht.html'
                    },
                    {
                        id: 'virtual-machines-server',
                        name: 'Server',
                        blurb: 'Een server is een machine die een dienst levert aan anderen op het netwerk; de vormfactor van 1U en het 19 inch rack waarin zo een machine geschoven wordt.',
                        href: 'VirtualMachinesEnContainers/Server.html'
                    },
                    {
                        id: 'virtual-machines-nadelen-fysiek',
                        name: 'Nadelen van fysieke machines',
                        blurb: 'Waarom een server meestal maar een taak krijgt, en waarom dat het splitsen van diensten over aparte machines duur maakt.',
                        href: 'VirtualMachinesEnContainers/NadelenVanFysiekeMachines.html'
                    },
                    {
                        id: 'virtual-machines-vm',
                        name: 'Virtual machines',
                        blurb: 'Host en guest, wat er nagebootst wordt en wat rechtstreeks op de echte processor loopt, waarom virtualiseren geld bespaart, en waarmee je het doet.',
                        href: 'VirtualMachinesEnContainers/VirtualMachines.html'
                    },
                    {
                        id: 'virtual-machines-containers',
                        name: 'Containers',
                        blurb: 'Een container schermt een programma af zoals een virtuele machine dat doet, maar deelt het besturingssysteem van de machine, dus de overhead en de licentie vallen weg.',
                        href: 'VirtualMachinesEnContainers/Containers.html'
                    },
                    {
                        id: 'virtual-machines-test-jezelf',
                        name: 'Test jezelf',
                        blurb: 'Drie meerkeuzevragen over wat een virtuele machine is, wie de host is en welke bewering over virtuele machines niet klopt.',
                        href: 'VirtualMachinesEnContainers/TestJezelf.html'
                    }
                ]
            },
            {
                name: 'Moederbord',
                topics: [
                    {
                        id: 'moederbord-overzicht',
                        name: 'Kernpunten en studievragen',
                        blurb: 'Waarom het moederbord de ruggengraat van een computer is, welke vormfactoren er bestaan, en waarom de keuze ervan het type processor en het type geheugen vastlegt.',
                        href: 'Moederbord/Overzicht.html'
                    },
                    {
                        id: 'moederbord-vormfactoren',
                        name: 'Vormfactoren',
                        blurb: 'ATX meet 30,5 op 24,4 cm en houdt de hardware vervangbaar; een embedded pc op een DIN rail gebruikt PC104 en een panel pc de 3,5 duim standaard.',
                        href: 'Moederbord/Vormfactoren.html'
                    },
                    {
                        id: 'moederbord-raspberry-pi',
                        name: 'Raspberry Pi',
                        blurb: 'Een volwaardige computer op de afmetingen van een bankkaart, met een ARM processor en een SD kaart als schijf, en waarin hij verschilt van een Arduino of een PLC.',
                        href: 'Moederbord/RaspberryPi.html'
                    },
                    {
                        id: 'moederbord-industriele-moederborden',
                        name: 'Industriele moederborden',
                        blurb: 'Waarom een bouwer zijn eigen borden maakt en tien jaar vervangonderdelen belooft, en hoe de processor, het werkgeheugen en de grafische kaart eraan hangen: socket, DIMM slot en PCI Express.',
                        href: 'Moederbord/IndustrieleMoederborden.html'
                    },
                    {
                        id: 'moederbord-hoe-kiezen',
                        name: 'Hoe kies je een moederbord',
                        blurb: 'Je begint bij de processor, want die legt de socket vast, en van daaruit volgen de vormfactor, het geheugen en het aantal PCI Express slots.',
                        href: 'Moederbord/HoeKiesJeEenIndustrieelMoederbord.html'
                    },
                    {
                        id: 'moederbord-oefening',
                        name: 'Oefening',
                        blurb: 'Drie embedded systems van Beckhoff naast elkaar leggen en er dat ene uit kiezen dat je programma in C# op een DVI scherm kan draaien met minstens 2 GB RAM.',
                        href: 'Moederbord/Oefening.html'
                    },
                    {
                        id: 'moederbord-test-jezelf',
                        name: 'Test jezelf',
                        blurb: 'Vier meerkeuzevragen over de vormfactoren, wat een industrieel moederbord onderscheidt, de socket en het merk van de processor, en het herkennen van een DIMM slot.',
                        href: 'Moederbord/TestJezelf.html'
                    }
                ]
            },
            {
                name: 'Informatievoorstelling',
                topics: [
                    {
                        id: 'informatievoorstelling-overzicht',
                        name: 'Kernpunten en studievragen',
                        blurb: 'Waarom een computer alles binair bijhoudt, hoe bits gegroepeerd worden, en waarom een kilobyte 1000 bytes is en een kibibyte 1024.',
                        href: 'Informatievoorstelling/Overzicht.html'
                    },
                    {
                        id: 'informatievoorstelling-binair-betrouwbaar',
                        name: 'Binair = betrouwbaar',
                        blurb: 'Een TTL chip leest alles onder 0,4 V als een 0 en alles boven 2,4 V als een 1, dus er mag heel wat misgaan met een signaal voor het verkeerd gelezen wordt.',
                        href: 'Informatievoorstelling/BinairBetrouwbaar.html'
                    },
                    {
                        id: 'informatievoorstelling-bit-nibble-byte',
                        name: 'Bit, nibble, byte, word, double word',
                        blurb: 'De namen voor groepen van 1, 4, 8, 16 en 32 bits, en waarom een qubit er niet bij hoort.',
                        href: 'Informatievoorstelling/BitNibbleByteWordDoubleWord.html'
                    },
                    {
                        id: 'informatievoorstelling-alles-is-een-getal',
                        name: 'Alle informatie wordt voorgesteld door getallen',
                        blurb: 'Tekst, beeld, geluid en video staan allemaal als binaire getallen op de schijf; het is de afspraak, zoals de ASCII tabel, die zegt hoe je zo een getal leest.',
                        href: 'Informatievoorstelling/AlleInformatieWordtVoorgesteldDoorGetallen.html'
                    },
                    {
                        id: 'informatievoorstelling-kibi-versus-kilo',
                        name: 'Kibi versus kilo',
                        blurb: 'Waarom een schijf van 1 TB in Windows als 931 GB verschijnt: de fabrikant rekent met 1000 en het besturingssysteem met 1024, en hoe groter de capaciteit hoe groter dat verschil.',
                        href: 'Informatievoorstelling/KibiVersusKilo.html'
                    },
                    {
                        id: 'informatievoorstelling-kbps-kbps',
                        name: 'kbps vs kBps',
                        blurb: 'Een kleine b is een bit en een grote B een byte, een factor 8 verschil, en daarom meet een schijf in MB/s en een netwerkverbinding in Mbps.',
                        href: 'Informatievoorstelling/BitOfByte.html'
                    },
                    {
                        id: 'informatievoorstelling-oefeningen',
                        name: 'Oefeningen',
                        blurb: 'Negen vragen over bits, bytes en octetten, de tekst eLm opzoeken in de ASCII tabel, en wat een schijf van 1 TB in Windows toont.',
                        href: 'Informatievoorstelling/Oefeningen.html'
                    },
                    {
                        id: 'informatievoorstelling-test-jezelf',
                        name: 'Test jezelf',
                        blurb: 'Negen vragen over waarom een computer binair werkt, de afspraak achter een binair getal, de twee betekenissen van word en kibi tegen kilo.',
                        href: 'Informatievoorstelling/TestJezelf.html'
                    }
                ]
            },
            {
                name: 'Harde schijf',
                topics: [
                    {
                        id: 'harde-schijf-overzicht',
                        name: 'Kernpunten en studievragen',
                        blurb: 'De drie soorten harde schijf, hoe ze aangesloten en aangesproken worden, en wat RAID, de cloud en een NAS voor je data betekenen.',
                        href: 'HardeSchijf/Overzicht.html'
                    },
                    {
                        id: 'harde-schijf-mechanisch',
                        name: 'Mechanische harde schijf',
                        blurb: 'Platters, koppen, tracks en sectoren, en waarom de seek time en de rotational latency samen bepalen hoe lang je op een bestand wacht.',
                        href: 'HardeSchijf/MechanischeHardeSchijf.html'
                    },
                    {
                        id: 'harde-schijf-chs',
                        name: 'Cylinder head sector',
                        blurb: 'Elke track evenveel sectoren geven is eenvoudig te adresseren en laat aan de buitenkant van de platter veel plaats liggen.',
                        href: 'HardeSchijf/CylinderHeadSector.html'
                    },
                    {
                        id: 'harde-schijf-zbr',
                        name: 'Zone Bit Recording',
                        blurb: 'Het aantal sectoren per zone laten variëren wint die plaats terug, en verklaart waarom een schijf aan zijn buitenrand dubbel zo snel is als bij de as.',
                        href: 'HardeSchijf/ZoneBitRecording.html'
                    },
                    {
                        id: 'harde-schijf-oefening-mechanisch',
                        name: 'Oefening mechanische harde schijf',
                        blurb: 'Tien vragen bij een video: de onderdelen benoemen, de rotatiesnelheid, het luchtkussen onder de kop, en het verschil tussen een track, een disk sector en een track sector.',
                        href: 'HardeSchijf/OefeningMechanischeHardeSchijf.html'
                    },
                    {
                        id: 'harde-schijf-ssd',
                        name: 'Solid State Drive',
                        blurb: 'Pages, blocks, planes en chips, en waarom wear levelling, write amplification, garbage collection en TRIM bepalen hoe snel en hoe lang een SSD meegaat.',
                        href: 'HardeSchijf/SolidStateDrive.html'
                    },
                    {
                        id: 'harde-schijf-oefening-ssd',
                        name: 'Oefening Solid State Drive',
                        blurb: 'Vijf keer twee schijven naast elkaar leggen en er de beste uit kiezen, van een HDD tegen een SSD tot twee M.2 schijven die alleen in lengte verschillen.',
                        href: 'HardeSchijf/OefeningSolidStateDrive.html'
                    },
                    {
                        id: 'harde-schijf-pata',
                        name: 'Parallel Advanced Technology Attachment (PATA)',
                        blurb: 'De lintkabel van 40 of 80 geleiders, en het jumpertje waarmee je uitmaakt welke schijf de master is en welke de slave.',
                        href: 'HardeSchijf/ParallelAdvancedTechnologyAttachmentPata.html'
                    },
                    {
                        id: 'harde-schijf-sata',
                        name: 'Serial Advanced Technology Attachment (SATA)',
                        blurb: 'Een kabel per toestel in plaats van master en slave, schijven wisselen terwijl de computer draait, en waarom 6 Gb/s in de praktijk 600 MB/s is.',
                        href: 'HardeSchijf/SerialAdvancedTechnologyAttachmentSata.html'
                    },
                    {
                        id: 'harde-schijf-ahci',
                        name: 'Advanced Host Controller Interface (AHCI)',
                        blurb: 'De standaard die hot swapping en een wachtrij met commando’s brengt, en die de koppen van een mechanische schijf zo weinig mogelijk laat bewegen.',
                        href: 'HardeSchijf/AdvancedHostControllerInterfaceAhci.html'
                    },
                    {
                        id: 'harde-schijf-nvme',
                        name: 'Non-Volatile Memory Express (NVMe)',
                        blurb: 'Waarom een SSD op AHCI zijn potentieel niet haalt, en hoe 65536 wachtrijen over PCI Express dat wel doen.',
                        href: 'HardeSchijf/NonVolatileMemoryExpressNvme.html'
                    },
                    {
                        id: 'harde-schijf-pcie',
                        name: 'PCI Express (PCIe)',
                        blurb: 'Een verbinding per toestel in plaats van een gedeelde bus, de breedtes x1 tot x16, en wat elke versie van de standaard erbij haalt.',
                        href: 'HardeSchijf/PciExpressPcie.html'
                    },
                    {
                        id: 'harde-schijf-m2',
                        name: 'M.2',
                        blurb: 'De aansluiting die de snelheid van PCI Express in het formaat van een kaartje legt, en waar je op moet letten als je er een koopt.',
                        href: 'HardeSchijf/M2.html'
                    },
                    {
                        id: 'harde-schijf-raid',
                        name: 'Redundant Array Of Independent Disks (RAID)',
                        blurb: 'Meerdere schijven laten samenwerken voor snelheid, voor redundantie of voor allebei, van RAID 0 tot RAID 10 en in software.',
                        href: 'HardeSchijf/RedundantArrayOfIndependentDisksRaid.html'
                    },
                    {
                        id: 'harde-schijf-cloud',
                        name: 'Cloud storage',
                        blurb: 'Je bestanden op de server van iemand anders: goedkoop en overal bereikbaar, met privacy en beveiliging als de prijs.',
                        href: 'HardeSchijf/CloudStorage.html'
                    },
                    {
                        id: 'harde-schijf-nas',
                        name: 'Network Attached Storage (NAS)',
                        blurb: 'Een embedded system met meerdere schijven op je eigen netwerk, en welke RAID configuratie daarbij past.',
                        href: 'HardeSchijf/NetworkAttachedStorageNas.html'
                    },
                    {
                        id: 'harde-schijf-test-jezelf',
                        name: 'Test jezelf',
                        blurb: 'Vierentwintig vragen over de mechanische schijf, de SSD, de aansluitingen en de RAID configuraties.',
                        href: 'HardeSchijf/TestJezelf.html'
                    }
                ]
            },
            {
                name: 'Central Processing Unit (CPU)',
                topics: [
                    {
                        id: 'cpu-overzicht',
                        name: 'Kernpunten en studievragen',
                        blurb: 'De twee types processor, waaruit een processorkern bestaat, en waarom kloksnelheid, kernen en cache de prestaties bepalen.',
                        href: 'CentralProcessingUnitCpu/Overzicht.html'
                    },
                    {
                        id: 'cpu-inleiding',
                        name: 'Inleiding',
                        blurb: 'De klassieke processoren met x86 of x64 en de mobiele met ARM, en wie ze maakt.',
                        href: 'CentralProcessingUnitCpu/Inleiding.html'
                    },
                    {
                        id: 'cpu-onderdelen',
                        name: 'Onderdelen',
                        blurb: 'De ALU, de CU, de registers en de cache, en wat kernen en hyperthreading daaraan toevoegen.',
                        href: 'CentralProcessingUnitCpu/Onderdelen.html'
                    },
                    {
                        id: 'cpu-instructieset',
                        name: 'Instructieset',
                        blurb: 'CISC bouwt complexe instructies in transistoren en RISC laat de compiler het werk doen, en dat is het verschil tussen x86 en ARM.',
                        href: 'CentralProcessingUnitCpu/Instructieset.html'
                    },
                    {
                        id: 'cpu-test-jezelf',
                        name: 'Test jezelf',
                        blurb: 'Twaalf vragen over de instructiesets, de onderdelen van een kern, de lengte van de registers en het nut van cache.',
                        href: 'CentralProcessingUnitCpu/TestJezelf.html'
                    }
                ]
            },
            {
                name: 'Random Access Memory (RAM)',
                topics: [
                    {
                        id: 'ram-overzicht',
                        name: 'Kernpunten en studievragen',
                        blurb: 'Hoe een bit in een cel bewaard wordt, waarom hij ververst moet worden, en wat er bij elke generatie DDR beter aan is.',
                        href: 'RandomAccessMemoryRam/Overzicht.html'
                    },
                    {
                        id: 'ram-werking',
                        name: 'Hoe werkt RAM geheugen?',
                        blurb: 'Een cel, een adres en een woord, en waarom de breedte van de processor vastlegt hoeveel werkgeheugen hij kan aanspreken.',
                        href: 'RandomAccessMemoryRam/HoeWerktRamGeheugen.html'
                    },
                    {
                        id: 'ram-dram',
                        name: 'Dynamic RAM (DRAM)',
                        blurb: 'Een transistor en een condensator per bit, de lading die weglekt, en wat memory refresh kost aan snelheid.',
                        href: 'RandomAccessMemoryRam/DynamicRamDram.html'
                    },
                    {
                        id: 'ram-sdram',
                        name: 'Synchronous DRAM (SDRAM)',
                        blurb: 'De klok van de bus, het rij- en kolomadres met RAS en CAS, en wat een prefetch buffer oplevert en wanneer niet.',
                        href: 'RandomAccessMemoryRam/SynchronousDramSdram.html'
                    },
                    {
                        id: 'ram-sdr',
                        name: 'Single Data Rate SDRAM (SDR SDRAM)',
                        blurb: 'Een overdracht per klokperiode, op de opgaande flank, en hoe je de frequentie en de capaciteit van het etiket afleest.',
                        href: 'RandomAccessMemoryRam/SingleDataRateSdramSdrSdram.html'
                    },
                    {
                        id: 'ram-ddr',
                        name: 'Double Data Rate SDRAM (DDR SDRAM)',
                        blurb: 'Ook de neergaande flank gebruiken verdubbelt de doorvoer, en de inkeping zorgt dat een module in geen ander slot past.',
                        href: 'RandomAccessMemoryRam/DoubleDataRateSdramDdrSdram.html'
                    },
                    {
                        id: 'ram-ddr2',
                        name: 'DDR2 SDRAM',
                        blurb: 'De prefetch buffer gaat naar vier, en op het etiket staat voortaan de transfersnelheid in plaats van de kloksnelheid.',
                        href: 'RandomAccessMemoryRam/Ddr2Sdram.html'
                    },
                    {
                        id: 'ram-ddr3',
                        name: 'DDR3 SDRAM',
                        blurb: 'Een prefetch buffer van acht, een lagere spanning van 1,5 V en een hogere bitdensiteit dan DDR2.',
                        href: 'RandomAccessMemoryRam/Ddr3Sdram.html'
                    },
                    {
                        id: 'ram-ddr4',
                        name: 'DDR4 SDRAM',
                        blurb: 'Vier keer zoveel per module, 1,2 V, en een bus die van 1066 MHz tot 1600 MHz loopt.',
                        href: 'RandomAccessMemoryRam/Ddr4Sdram.html'
                    },
                    {
                        id: 'ram-ddr5',
                        name: 'DDR5 SDRAM',
                        blurb: 'De jongste generatie: sneller, dichter en zuiniger, en niet achterwaarts compatibel met DDR4.',
                        href: 'RandomAccessMemoryRam/Ddr5Sdram.html'
                    },
                    {
                        id: 'ram-ecc',
                        name: 'Error Correcting Code RAM (ECC RAM)',
                        blurb: 'Extra bits naast de data, de hamming distance, en waarom pariteit een fout wel ziet maar niet herstelt.',
                        href: 'RandomAccessMemoryRam/ErrorCorrectingCodeRamEccRam.html'
                    },
                    {
                        id: 'ram-channels',
                        name: 'Single, dual en quad channel',
                        blurb: 'Wat een channel is, waarom twee modules in twee verschillende channels horen, en waar de kleuren op het bord voor dienen.',
                        href: 'RandomAccessMemoryRam/SingleDualEnQuadChannel.html'
                    },
                    {
                        id: 'ram-test-jezelf',
                        name: 'Test jezelf',
                        blurb: 'Negen vragen over de cel en haar refresh, de grens van 32 bit, de prefetch buffer, ECC en dual channel.',
                        href: 'RandomAccessMemoryRam/TestJezelf.html'
                    }
                ]
            },
            {
                name: 'Chipset',
                topics: [
                    {
                        id: 'chipset-overzicht',
                        name: 'Kernpunten en studievragen',
                        blurb: 'Waarom een moederbord van voor 2011 er anders uitziet dan een van erna, en welke chip welke apparaten bedient.',
                        href: 'Chipset/Overzicht.html'
                    },
                    {
                        id: 'chipset-wat',
                        name: 'Wat is een chipset?',
                        blurb: 'Het kruispunt waar alles samenkomt: een northbridge en een southbridge op een oud bord, een PCH op een nieuw.',
                        href: 'Chipset/WatIsEenChipset.html'
                    },
                    {
                        id: 'chipset-northbridge',
                        name: 'Northbridge',
                        blurb: 'De chip voor de snelle apparaten, en hoe zijn taken tussen 2003 en 2011 in de processor zelf terechtkwamen.',
                        href: 'Chipset/Northbridge.html'
                    },
                    {
                        id: 'chipset-fsb',
                        name: 'Front Side Bus',
                        blurb: 'De bus tussen processor en northbridge: zijn breedte, zijn snelheid, en waarom hij de bottleneck werd.',
                        href: 'Chipset/FrontSideBus.html'
                    },
                    {
                        id: 'chipset-southbridge',
                        name: 'Southbridge',
                        blurb: 'De chip voor de tragere apparaten, die bepaalde welke aansluitingen een moederbord te bieden had.',
                        href: 'Chipset/Southbridge.html'
                    },
                    {
                        id: 'chipset-apu',
                        name: 'Accelerated Processing Unit (APU)',
                        blurb: 'Wat er van de northbridge in de processor terechtkwam, en wat AMD met de naam APU eigenlijk aanduidt.',
                        href: 'Chipset/AcceleratedProcessingUnitApu.html'
                    },
                    {
                        id: 'chipset-pch',
                        name: 'Platform Controller Hub (PCH)',
                        blurb: 'De opvolger van de southbridge: alle trage aansluitingen op een chip, aan de processor met een eigen verbinding.',
                        href: 'Chipset/PlatformControllerHubPch.html'
                    },
                    {
                        id: 'chipset-test-jezelf',
                        name: 'Test jezelf',
                        blurb: 'Zeven vragen over de northbridge en de southbridge, de Front Side Bus, de APU en het nut van de PCH.',
                        href: 'Chipset/TestJezelf.html'
                    }
                ]
            },
            {
                name: 'Graphics Processing Unit (GPU)',
                topics: [
                    {
                        id: 'gpu-overzicht',
                        name: 'Kernpunten en studievragen',
                        blurb: 'Waarom een industriële computer het met de ingebouwde grafische kaart doet, en welke aansluiting je op het scherm nakijkt.',
                        href: 'GraphicsProcessingUnitGpu/Overzicht.html'
                    },
                    {
                        id: 'gpu-grafische-kaart',
                        name: 'De grafische kaart',
                        blurb: 'De GPU ingebakken in de processor of op een eigen kaart, en waarom hij grote hoeveelheden data sneller aankan dan een processor.',
                        href: 'GraphicsProcessingUnitGpu/DeGrafischeKaart.html'
                    },
                    {
                        id: 'gpu-resolutie',
                        name: 'Resolutie en framerate',
                        blurb: 'Uitgerekend hoeveel data een scherm per seconde vraagt, van het aantal pixels over de kleurdiepte tot de framerate.',
                        href: 'GraphicsProcessingUnitGpu/ResolutieEnFramerate.html'
                    },
                    {
                        id: 'gpu-aansluitingen',
                        name: 'Aansluitingen',
                        blurb: 'De vier stekkers waarmee het beeld het scherm bereikt, en wat een converter je kost.',
                        href: 'GraphicsProcessingUnitGpu/Aansluitingen.html'
                    },
                    {
                        id: 'gpu-test-jezelf',
                        name: 'Test jezelf',
                        blurb: 'Acht vragen over de plaats van de grafische kern, het parallellisme van een GPU, Full HD en de aansluitingen.',
                        href: 'GraphicsProcessingUnitGpu/TestJezelf.html'
                    }
                ]
            },
            {
                name: 'Power Supply Unit (PSU)',
                topics: [
                    {
                        id: 'psu-overzicht',
                        name: 'Kernpunten en studievragen',
                        blurb: 'Waar een desktopvoeding en een industriële voeding in verschillen, en waarom je altijd wat marge rekent.',
                        href: 'PowerSupplyUnitPsu/Overzicht.html'
                    },
                    {
                        id: 'psu-voeding',
                        name: 'De voeding',
                        blurb: 'De spanningen die eruit komen, de connectoren die eraan hangen, en hoe je uitrekent hoeveel Watt je nodig hebt.',
                        href: 'PowerSupplyUnitPsu/DeVoeding.html'
                    },
                    {
                        id: 'psu-industriele-voeding',
                        name: 'De industriele voeding',
                        blurb: 'Op een DIN rail, extern en op 24 V, en waarom je het vermogen hier uit de datasheet haalt.',
                        href: 'PowerSupplyUnitPsu/DeIndustrieleVoeding.html'
                    },
                    {
                        id: 'psu-ps-on',
                        name: 'PS_ON',
                        blurb: 'Waarom een voeding aan het stopcontact nog geen computer doet starten, en welk signaal dat wel doet.',
                        href: 'PowerSupplyUnitPsu/PsOn.html'
                    },
                    {
                        id: 'psu-pwr-ok',
                        name: 'PWR_OK',
                        blurb: 'Het signaal waarmee de voeding meldt dat haar spanningen kloppen, bij het opstarten en tijdens de werking.',
                        href: 'PowerSupplyUnitPsu/PwrOk.html'
                    },
                    {
                        id: 'psu-test-jezelf',
                        name: 'Test jezelf',
                        blurb: 'Tien vragen over de aankoop van een voeding, het vermogen, de UPS, PS_ON en PWR_OK.',
                        href: 'PowerSupplyUnitPsu/TestJezelf.html'
                    }
                ]
            }
        ]
    }
};
