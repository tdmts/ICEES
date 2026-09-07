/*
 * reference.js -- het manifest van alle theoriepagina's, per module.
 *
 * Dit is de enige plaats waar een theoriepagina wordt opgesomd. Voeg een pagina
 * hier toe, niet in de HTML van een andere pagina: de theoriehub
 * (reference-dashboard.js) en de navigatiebalk (back-link.js) lezen allebei
 * dit bestand.
 *
 * Een module-id is de sleutel hieronder. Het is de mapnaam onder Labo/ in
 * kleine letters, en het staat ook in de localStorage-sleutels, dus hernoemen
 * wist de vinkjes van je studenten.
 *
 * Een href is een kale bestandsnaam naast reference.html, of een relatief pad
 * naar een document (../../../datasheets/...). Nooit een volledige
 * https://tdmts.github.io/ICEES/-URL: die stuurt elke klik in een lokale
 * preview door naar de live site.
 *
 * REEKS -- welke categorieen samen een Orion-topic vormen
 *
 * Een labo heeft vier menu-items in Orion: Inleiding (overview.html), Theorie
 * (Theorie/reference.html), Opdracht (Opdracht.html) en de dropbox waar de
 * student zijn verslag indient.
 *
 * Een reeks is zo'n menu-item. Alles wat dezelfde reeks draagt, hoort bij
 * hetzelfde item: het is een leesvolgorde met een eigen begin, en de hele
 * navigatie blijft erbinnen. back-link.js hangt er zijn "Volgende"-ketting,
 * zijn teller en zijn labomenu aan op, en reference-dashboard.js toont per hub
 * de categorieen van een reeks. Een andere reeks is een ander menu-item, en
 * daar loopt niets naartoe: het Orion-menu verspringt niet mee met de iframe,
 * dus zo'n sprong laat het menu een pagina aanwijzen die de student niet leest.
 *
 * De zelftest van een labo draagt daarom dezelfde reeks als de theorie: hij
 * gaat over de pagina's ervoor en is de laatste stap ervan, dus de student komt
 * er met "Volgende" vanzelf uit. Een eigen reeks zou hem achter een knop
 * verstoppen die niemand aanklikt.
 *
 * De naam die de student op de knop ziet is de naam van de EERSTE categorie
 * van de reeks. Daarom staat er op de zelftest van Assemblage "Theorie 4 / 4"
 * en niet "Zelftest 1 / 1": hij is de vierde stap van de theorie.
 *
 * Een categorie met alleen documenten (Datasheets, Handleidingen, Software)
 * draagt de reeks waar ze bij hoort, en dat is de theorie: die documenten
 * staan op de theoriehub en horen bij dat menu-item. In een ketting komen ze
 * niet terecht, want een PDF kan de navigatiebalk niet dragen, dus zo'n
 * categorie levert nul stappen en verandert niets aan de teller.
 *
 * Elke categorie zet zijn reeks er expliciet bij. Zonder die regel valt ze van
 * de hub, en dat is precies het soort stille fout waar regel 2 van
 * scripts/check-content.py op staat.
 *
 * HET SPIEKBLAD
 *
 * De begeleide stappen van Brightspace worden hier gegroepeerde
 * theoriepagina's: Linux Basis gaat van 25 commandopagina's naar ongeveer zes
 * onderwerpen. Elk labo dat zo gegroepeerd wordt, krijgt daarnaast een
 * Spiekblad.html met alle commando's in een tabel, dat de student ernaast
 * houdt terwijl hij de opdracht maakt. Dat spiekblad staat in de
 * theoriereeks, want het hoort bij het menu-item Theorie.
 *
 * Labo Assemblage en Labo Virtualiseren staan erin. De vier overige mapnamen
 * en hun groepering liggen vast: zie CLAUDE.md, "The six modules". Drie labo's
 * hebben meer dan een indiening, en die hebben dus meer dan een Opdracht.html
 * en meer dan vier reeksen. Bij Assemblage zijn dat Inventaris, BiosUefi en
 * InstallatieOs: elk daarvan is een eigen menu-item met een eigen leesvolgorde
 * van een pagina, en daarom staat geen van de drie hieronder. Wat hier staat is
 * de theoriereeks.
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
                name: 'Generaties',
                reeks: 'theorie',
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
                reeks: 'theorie',
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
                reeks: 'theorie',
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
                reeks: 'theorie',
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
                reeks: 'theorie',
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
                reeks: 'theorie',
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
                        blurb: 'Drie schijven naast elkaar: een mechanische van 3.5 inch, een SSD van 2.5 inch aan SATA en een SSD van 1.8 inch in een M.2-slot.',
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
                        blurb: 'Elk stuk kost de arm een nieuwe seek time en rotational latency, en daarom heeft FAT er meer last van dan NTFS of ext2.',
                        href: 'Bestandssystemen/FragmentatieBijDeKlassiekeHardeSchijf.html'
                    },
                    {
                        id: 'bestandssystemen-fits',
                        name: 'First fit, best fit, worst fit',
                        blurb: 'Drie manieren om een vrij blok te kiezen, en waarom uitgerekend worst fit het minst fragmenteert.',
                        href: 'Bestandssystemen/FirstFitBestFitWorstFit.html'
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
                        blurb: 'Wat Windows op zijn eigen schijven zet: een grote adresruimte en een journaal, dat eerst sneller schrijft en daarna als logboek dient wanneer de stroom uitvalt.',
                        href: 'Bestandssystemen/NewTechnologyFileSystemNtfs.html'
                    },
                    {
                        id: 'bestandssystemen-ext',
                        name: 'Extended File System (EXT)',
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
                reeks: 'theorie',
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
                        blurb: 'Ready, running en blocked, het verschil tussen cooperative en preemptive multitasking, vijf scheduling algoritmes met hun starvation, en wat een realtime prioriteit kost.',
                        href: 'Besturingssystemen/Procesbeheer.html'
                    }
                ]
            },
            {
                name: 'Virtual machines en containers',
                reeks: 'theorie',
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
            }
        ]
    },
    assemblage: {
        name: 'Labo Assemblage + BIOS/UEFI',
        categories: [
            {
                name: 'Theorie',
                reeks: 'theorie',
                topics: [
                    {
                        id: 'veiligheid',
                        name: 'Veiligheid, orde en netheid',
                        blurb: 'Waarom je zonder netspanning werkt, hoe je een printplaat vastneemt, en wat er van je werkplek verwacht wordt.',
                        href: 'Veiligheid.html'
                    },
                    {
                        id: 'componenten',
                        name: 'De componenten van een pc',
                        blurb: 'Vormfactor, socket, geheugengeneratie, opslagprotocol en voedingsrendement: waar je naar kijkt en in welke eenheid het staat.',
                        href: 'Componenten.html'
                    },
                    {
                        id: 'bios-uefi',
                        name: 'BIOS en UEFI',
                        blurb: 'Wat de firmware doet voor er een besturingssysteem is: de POST, de opstartvolgorde en het bootmenu.',
                        href: 'BiosUefi.html'
                    }
                ]
            },
            {
                name: 'Zelftest',
                reeks: 'theorie',
                topics: [
                    {
                        id: 'test-jezelf-assemblage',
                        name: 'Test jezelf',
                        blurb: 'Meerkeuzevragen over de drie pagina\'s hierboven, in dezelfde vorm als de test in Orion. Bij elk antwoord staat waar je het kan nalezen.',
                        href: 'TestJezelf.html'
                    }
                ]
            },
            {
                name: 'Datasheets',
                reeks: 'theorie',
                topics: [
                    {
                        id: 'datasheet-moederbord',
                        name: 'Moederbord',
                        blurb: 'De layout van het bord, de connectoren en de tabellen met sockets, slots en poorten.',
                        href: '../../../datasheets/mb-manual-a520m-s2h-e-1301.pdf'
                    },
                    {
                        id: 'datasheet-processor',
                        name: 'Processor',
                        blurb: 'Modelnummer, aantal cores, kloksnelheid, cachegeheugens en energieverbruik.',
                        href: '../../../datasheets/amd-ryzen-3-4300g-socket-am4-processor-unlocked-wraith-stealth-boxed.pdf'
                    },
                    {
                        id: 'datasheet-geheugen',
                        name: 'Werkgeheugen',
                        blurb: 'Generatie, capaciteit, standaardsnelheid en spanning van de geheugenmodule.',
                        href: '../../../datasheets/gskill-aegis-8gb.pdf'
                    },
                    {
                        id: 'datasheet-ssd',
                        name: 'SSD',
                        blurb: 'Capaciteit, protocol, vormfactor en lees- en schrijfsnelheid.',
                        href: '../../../datasheets/ssd-intern-25-top.pdf'
                    },
                    {
                        id: 'datasheet-voeding',
                        name: 'Voeding',
                        blurb: 'Vermogen, rendement en de uitgangsspanningen die de voeding levert.',
                        href: '../../../datasheets/ds-shp-bronze-en-07.pdf'
                    }
                ]
            }
        ]
    },
    virtualiseren: {
        name: 'Labo Virtualiseren',
        categories: [
            {
                name: 'Theorie',
                reeks: 'theorie',
                topics: [
                    {
                        id: 'wat-is-virtualisatie',
                        name: 'Wat is virtualisatie',
                        blurb: 'Host en guest, waarom een bedrijf zijn servers virtualiseert, wat het aan snelheid kost, en waarin een container verschilt van een virtuele machine.',
                        href: 'WatIsVirtualisatie.html'
                    },
                    {
                        id: 'virtuele-hardware',
                        name: 'Virtuele hardware',
                        blurb: 'Wat VirtualBox nabootst en wat je daarvan zelf instelt: de virtualisatie-uitbreiding van je processor, EFI, het ISO-bestand en de drie manieren om de machine te stoppen.',
                        href: 'VirtueleHardware.html'
                    },
                    {
                        id: 'schijf-en-geheugen',
                        name: 'Schijf en geheugen',
                        blurb: 'Statische tegenover dynamische allocatie, en waarom werkgeheugen meer voor de snelheid van je machine doet dan een extra processor.',
                        href: 'SchijfEnGeheugen.html'
                    },
                    {
                        id: 'software-in-de-guest',
                        name: 'Software in de guest',
                        blurb: 'Proprietary software en de afweging om ze mee te installeren, en Guest Additions: wat het oplost en waarom het op je eigen kernel gebouwd wordt.',
                        href: 'SoftwareInDeGuest.html'
                    }
                ]
            },
            {
                name: 'Zelftest',
                reeks: 'theorie',
                topics: [
                    {
                        id: 'test-jezelf-virtualiseren',
                        name: 'Test jezelf',
                        blurb: 'Meerkeuzevragen over de vier pagina\'s hierboven, in dezelfde vorm als de test in Orion. Bij elk antwoord staat waar je het kan nalezen.',
                        href: 'TestJezelf.html'
                    }
                ]
            },
            {
                name: 'Opdracht',
                reeks: 'opdracht',
                topics: [
                    {
                        id: 'opdracht-virtualiseren',
                        name: 'De opdracht',
                        blurb: 'Wat je maakt en indient, en het document waarin je je antwoorden invult.',
                        href: '../Opdracht.html'
                    },
                    {
                        id: 'virtuele-machine-aanmaken',
                        name: 'Een virtuele machine aanmaken',
                        blurb: 'De vier schermen van de wizard, het ISO-bestand waarvan je opstart, het werkgeheugen bijstellen en de machine weer stoppen.',
                        href: '../VirtueleMachineAanmaken.html'
                    },
                    {
                        id: 'installatie-ubuntu',
                        name: 'Installatie Ubuntu',
                        blurb: 'De twaalf schermen van het installatieprogramma, met bij elk de keuze die je in dit labo neemt.',
                        href: '../InstallatieUbuntu.html'
                    },
                    {
                        id: 'guest-additions',
                        name: 'Guest Additions installeren',
                        blurb: 'De installatie in drie pogingen, en de pakketten die je tussendoor bijhaalt om de twee foutmeldingen op te lossen.',
                        href: '../GuestAdditions.html'
                    }
                ]
            }
        ]
    },
    partitioneren: {
        name: 'Labo Partitioneren',
        categories: [
            {
                name: 'Theorie',
                reeks: 'theorie',
                topics: [
                    {
                        id: 'partitietabellen',
                        name: 'Partitietabellen',
                        blurb: 'Waarom je een schijf verdeelt, waar die verdeling bijgehouden wordt, en wat MBR met zijn vier tabelplaatsen anders doet dan GPT met zijn honderdachtentwintig.',
                        href: 'Partitietabellen.html'
                    },
                    {
                        id: 'bestandssystemen',
                        name: 'Bestandssystemen',
                        blurb: 'Wat formatteren toevoegt aan partitioneren, hoe sectoren tot clusters gegroepeerd worden, waar een journaal voor dient, en welk bestandssysteem waar past.',
                        href: 'Bestandssystemen.html'
                    }
                ]
            },
            {
                name: 'Spiekblad',
                reeks: 'theorie',
                topics: [
                    {
                        id: 'spiekblad-partitioneren',
                        name: 'Spiekblad',
                        blurb: 'De partitiesoorten, de schijfnamen van Linux en de grenzen van elk bestandssysteem, in vier tabellen om naast je scherm te houden.',
                        href: 'Spiekblad.html'
                    }
                ]
            },
            {
                name: 'Zelftest',
                reeks: 'theorie',
                topics: [
                    {
                        id: 'test-jezelf-partitioneren',
                        name: 'Test jezelf',
                        blurb: 'Meerkeuzevragen over de twee theoriepagina\'s, in dezelfde vorm als de test in Orion. Bij elk antwoord staat waar je het kan nalezen.',
                        href: 'TestJezelf.html'
                    }
                ]
            },
            {
                name: 'Opdracht',
                reeks: 'opdracht',
                topics: [
                    {
                        id: 'opdracht-partitioneren',
                        name: 'De opdracht',
                        blurb: 'Wat je maakt en indient, en het document waarin je je antwoorden invult.',
                        href: '../Opdracht.html'
                    },
                    {
                        id: 'oefenmachine',
                        name: 'De oefenmachine opzetten',
                        blurb: 'Een virtuele machine met twee lege schijven van 10 GB, die van het GParted-bestand opstart, en wat je in het venster van GParted ziet staan.',
                        href: '../Oefenmachine.html'
                    },
                    {
                        id: 'mbr-partities',
                        name: 'Primaire partities in een MBR-tabel',
                        blurb: 'De tabel aanmaken als msdos, vier primaire partities erin zetten, en de groottes bijstellen wanneer de plaats niet volstaat.',
                        href: '../MbrPartities.html'
                    },
                    {
                        id: 'extended-en-logisch',
                        name: 'Extended en logische partities',
                        blurb: 'Waar GParted stopt bij vier primaire partities, en hoe je de schijf opnieuw indeelt met een uitgebreide partitie en drie logische erin.',
                        href: '../ExtendedEnLogisch.html'
                    },
                    {
                        id: 'gpt-partities',
                        name: 'GPT-partities',
                        blurb: 'Dezelfde oefening op de tweede schijf, met een GPT-partitietabel en vijf partities die allemaal primair zijn.',
                        href: '../GptPartities.html'
                    }
                ]
            }
        ]
    }
};
