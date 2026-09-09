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
            },
            {
                name: 'Moederbord',
                reeks: 'theorie',
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
                reeks: 'theorie',
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
                    }
                ]
            },
            {
                name: 'Harde schijf',
                reeks: 'theorie',
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
                reeks: 'theorie',
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
                        id: 'oefening-partitioneren',
                        name: 'De begeleide oefening',
                        blurb: 'Waar je oefent en waar je het echte werk doet, en waarom dat twee verschillende virtuele machines zijn.',
                        href: '../Overzicht.html'
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
                    },
                    {
                        id: 'opdracht-partitioneren',
                        name: 'De opdracht',
                        blurb: 'Wat je maakt en indient, en het document waarin je je antwoorden invult.',
                        href: '../Opdracht.html'
                    }
                ]
            }
        ]
    },
    linuxbasis: {
        name: 'Labo Linux Basis',
        categories: [
            {
                name: 'Theorie',
                reeks: 'theorie',
                topics: [
                    {
                        id: 'linux-en-distributies',
                        name: 'Linux en zijn distributies',
                        blurb: 'Waarom Linux een kernel is en geen besturingssysteem, wat een distributie eraan toevoegt, en waarin open-source verschilt van gratis.',
                        href: 'LinuxEnDistributies.html'
                    },
                    {
                        id: 'de-terminal',
                        name: 'De terminal',
                        blurb: 'Wat de vier delen van de prompt je vertellen, en de drie manieren waarop een commando stukloopt op een hoofdletter, een spatie of een streepje.',
                        href: 'DeTerminal.html'
                    },
                    {
                        id: 'commando-en-opties',
                        name: 'Een commando en zijn opties',
                        blurb: 'De opbouw van elk commando, hoe je korte opties combineert, wat recursief betekent, en wat de wildcard en de pipe met je uitvoer doen.',
                        href: 'CommandoEnOpties.html'
                    },
                    {
                        id: 'de-bestandsboom',
                        name: 'De bestandsboom',
                        blurb: 'De boom die bij / begint, de tilde van je eigen map, de mappen van Linux naast die van Windows, en hoe je een regel van ls -alh leest.',
                        href: 'DeBestandsboom.html'
                    },
                    {
                        id: 'gebruikers-en-rechten',
                        name: 'Gebruikers en rechten',
                        blurb: 'Wat de root gebruiker mag, waarom je je niet als root aanmeldt, wat sudo daaraan verandert, en waar Permission denied vandaan komt.',
                        href: 'GebruikersEnRechten.html'
                    }
                ]
            },
            {
                name: 'Spiekblad',
                reeks: 'theorie',
                topics: [
                    {
                        id: 'spiekblad-linuxbasis',
                        name: 'Spiekblad',
                        blurb: 'Elk commando van dit labo met zijn opties, de toetsen van de terminal en van de editors, en de mappen van Linux, in vier tabellen om naast je scherm te houden.',
                        href: 'Spiekblad.html'
                    }
                ]
            },
            {
                name: 'Zelftest',
                reeks: 'theorie',
                topics: [
                    {
                        id: 'test-jezelf-linuxbasis',
                        name: 'Test jezelf',
                        blurb: 'Negen meerkeuzevragen over de theorie van dit labo, in dezelfde vorm als de test in Orion. Bij elk antwoord staat waar je het kan nalezen.',
                        href: 'TestJezelf.html'
                    }
                ]
            },
            {
                name: 'Opdracht',
                reeks: 'opdracht',
                topics: [
                    {
                        id: 'oefening-linuxbasis',
                        name: 'De begeleide oefening',
                        blurb: 'Wat je hierna stap voor stap intypt, waarom de volgorde ervan telt, en wat er daarna zelfstandig van je verwacht wordt.',
                        href: '../Overzicht.html'
                    },
                    {
                        id: 'terminal-openen',
                        name: 'De terminal openen',
                        blurb: 'Aanmelden op de Ubuntu-machine, een terminal starten, met pwd uitzoeken waar je staat, en met history terugkijken wat je ingegeven hebt.',
                        href: '../TerminalOpenen.html'
                    },
                    {
                        id: 'navigeren',
                        name: 'Navigeren tussen mappen',
                        blurb: 'De inhoud van een map tonen met ls en zijn vier opties, en met cd naar een andere map gaan zonder de naam volledig te typen.',
                        href: '../Navigeren.html'
                    },
                    {
                        id: 'mappen-en-bestanden',
                        name: 'Mappen en bestanden maken',
                        blurb: 'De drie mappen aanmaken waar de rest van de oefening mee werkt, en een tekstbestand schrijven met nano en daarna met vi.',
                        href: '../MappenEnBestanden.html'
                    },
                    {
                        id: 'kopieren',
                        name: 'Bestanden en mappen kopiëren',
                        blurb: 'Kopiëren met cp, alle bestanden van een map in één commando met de wildcard, en de foutmelding die je naar de optie -r brengt.',
                        href: '../Kopieren.html'
                    },
                    {
                        id: 'verplaatsen-en-verwijderen',
                        name: 'Verplaatsen en verwijderen',
                        blurb: 'Hernoemen en verplaatsen met hetzelfde commando mv, en wissen met rm, waar een map om -r vraagt en er geen prullenbak is.',
                        href: '../VerplaatsenEnVerwijderen.html'
                    },
                    {
                        id: 'schijfruimte-en-zoeken',
                        name: 'Schijfruimte bekijken en bestanden zoeken',
                        blurb: 'De grootte van een map opvragen met du en bestanden zoeken met find, en zien wat sudo doet met de foutmeldingen die je onderweg krijgt.',
                        href: '../SchijfruimteEnZoeken.html'
                    },
                    {
                        id: 'processen-en-uitvoer',
                        name: 'Processen en uitvoer',
                        blurb: 'De draaiende processen opvragen met ps, en die lijst met een pipe doorgeven aan more zodat ze niet voorbijloopt.',
                        href: '../ProcessenEnUitvoer.html'
                    },
                    {
                        id: 'archiveren-en-afsluiten',
                        name: 'Archiveren en afsluiten',
                        blurb: 'Een map inpakken en weer uitpakken met tar, en de machine heropstarten of uitzetten met shutdown.',
                        href: '../ArchiverenEnAfsluiten.html'
                    },
                    {
                        id: 'opdracht-linuxbasis',
                        name: 'De opdracht',
                        blurb: 'Wat je maakt en indient, en het document waarin je je antwoorden en je screenshots kwijt kan.',
                        href: '../Opdracht.html'
                    }
                ]
            }
        ]
    },
    linuxgeavanceerd: {
        name: 'Labo Linux Geavanceerd',
        categories: [
            {
                name: 'Theorie',
                reeks: 'theorie',
                topics: [
                    {
                        id: 'gebruikers-en-groepen',
                        name: 'Gebruikers en groepen',
                        blurb: 'Wat root mag en waarom je je er niet als aanmeldt, wat sudo daaraan verandert, en waarom rechten op een groep staan in plaats van op tien gebruikers.',
                        href: 'GebruikersEnGroepen.html'
                    },
                    {
                        id: 'rechten',
                        name: 'Rechten op een bestand',
                        blurb: 'De drie rechten en de drie klassen, hoe je de tien tekens van ls leest, dezelfde rechten in cijfers, en wat chmod, chown en chgrp elk aanpassen.',
                        href: 'Rechten.html'
                    },
                    {
                        id: 'software-uit-de-repository',
                        name: 'Software uit de repository',
                        blurb: 'Wat een repository is en waarom software eruit bijgewerkt blijft, wat een package manager met dependencies doet, en waarin het Software Center, apt en snap verschillen.',
                        href: 'SoftwareUitDeRepository.html'
                    },
                    {
                        id: 'software-buiten-de-repository',
                        name: 'Software buiten de repository',
                        blurb: 'Een deb bestand, een installer script en broncode die je zelf compileert, en bij elke stap wat je opgeeft aan automatisch bijwerken.',
                        href: 'SoftwareBuitenDeRepository.html'
                    },
                    {
                        id: 'docker',
                        name: 'Docker',
                        blurb: 'Wat een container is naast een virtuele machine, het verschil tussen een image en een container, wat in een Dockerfile staat en wat een poort doorgeven betekent.',
                        href: 'Docker.html'
                    }
                ]
            },
            {
                name: 'Spiekblad',
                reeks: 'theorie',
                topics: [
                    {
                        id: 'spiekblad-linuxgeavanceerd',
                        name: 'Spiekblad',
                        blurb: 'Elk commando van dit labo, de rechtennotatie met haar cijfers en de vijf wegen om software te installeren, in vier tabellen om naast je scherm te houden.',
                        href: 'Spiekblad.html'
                    }
                ]
            },
            {
                name: 'Zelftest',
                reeks: 'theorie',
                topics: [
                    {
                        id: 'test-jezelf-linuxgeavanceerd',
                        name: 'Test jezelf',
                        blurb: 'Negen meerkeuzevragen over de theorie van dit labo, in dezelfde vorm als de test in Orion. Bij elk antwoord staat waar je het kan nalezen.',
                        href: 'TestJezelf.html'
                    }
                ]
            },
            {
                name: 'Software installeren',
                reeks: 'software',
                topics: [
                    {
                        id: 'software-overzicht',
                        name: 'Software installeren',
                        blurb: 'Wat je op de pagina hierna installeert en langs welke weg, en waarom de volgorde van makkelijk naar moeilijk zelf het onderwerp is.',
                        href: '../SoftwareInstalleren/Overzicht.html'
                    },
                    {
                        id: 'uit-de-winkel',
                        name: 'Uit de winkel',
                        blurb: 'Een editor uit het Software Center, ssh met apt en VLC met snap, en de dependencies die er bij het tweede vanzelf bijkomen.',
                        href: '../SoftwareInstalleren/UitDeWinkel.html'
                    },
                    {
                        id: 'eigen-repository',
                        name: 'Een repository van de leverancier',
                        blurb: 'Spotify installeren door de sleutel van de leverancier in etc apt keyrings te zetten en de APT-regel ernaar te laten wijzen met signed-by.',
                        href: '../SoftwareInstalleren/EigenRepository.html'
                    },
                    {
                        id: 'deb-bestand',
                        name: 'Een deb bestand',
                        blurb: 'Google Chrome installeren met dpkg, de dependency-fout lezen die daarop volgt, en ze rechtzetten met apt-get install -f.',
                        href: '../SoftwareInstalleren/DebBestand.html'
                    },
                    {
                        id: 'installer-script',
                        name: 'Een installer script',
                        blurb: 'De Arduino IDE uitpakken uit een tar.xz archief, het installer script herkennen aan zijn rechten en het met sudo uitvoeren.',
                        href: '../SoftwareInstalleren/InstallerScript.html'
                    },
                    {
                        id: 'source-code',
                        name: 'Compileren uit broncode',
                        blurb: 'De no-ip client zelf vertalen met make, de handleiding lezen die bij de broncode zit, en zien welke compiler make aanroept.',
                        href: '../SoftwareInstalleren/SourceCode.html'
                    },
                    {
                        id: 'container-met-docker',
                        name: 'Een container met Docker',
                        blurb: 'De webserver Apache uit Docker Hub halen, er met een Dockerfile je eigen bladzijde in bouwen en de container op poort 8080 draaien.',
                        href: '../SoftwareInstalleren/ContainerMetDocker.html'
                    },
                    {
                        id: 'up-to-date',
                        name: 'Je systeem up to date houden',
                        blurb: 'Bijwerken met de Software Updater en met apt, en nagaan welk van de zeven geinstalleerde programmas daarin meegaat.',
                        href: '../SoftwareInstalleren/UpToDate.html'
                    }
                ]
            },
            {
                name: 'Opdracht chmod',
                reeks: 'chmod',
                topics: [
                    {
                        id: 'oefening-chmod',
                        name: 'De begeleide oefening',
                        blurb: 'Gebruikers en groepen aanmaken in vier stappen die op elkaar voortbouwen, voor je aan het document begint.',
                        href: '../Chmod/Overzicht.html'
                    },
                    {
                        id: 'gebruikers-aanmaken',
                        name: 'Gebruikers aanmaken',
                        blurb: 'Twee gebruikers maken met adduser, zien wat dat commando er allemaal bij aanmaakt, en met su en exit wisselen tussen gebruikers.',
                        href: '../Chmod/GebruikersAanmaken.html'
                    },
                    {
                        id: 'sudo-rechten',
                        name: 'Een gebruiker sudo-rechten geven',
                        blurb: 'De melding die je krijgt zonder dat recht, de gebruiker met usermod in de groep sudo zetten, en met members nakijken wie erin zit.',
                        href: '../Chmod/SudoRechten.html'
                    },
                    {
                        id: 'een-eigen-groep',
                        name: 'Een eigen groep maken',
                        blurb: 'Een groep maken met groupadd, er twee gebruikers in zetten, en zien dat een gebruiker in meer dan een groep tegelijk zit.',
                        href: '../Chmod/EenEigenGroep.html'
                    },
                    {
                        id: 'opruimen',
                        name: 'Wissen en opruimen',
                        blurb: 'Met deluser een gebruiker wissen samen met zijn map, en iemand uit een groep halen zonder hem te wissen.',
                        href: '../Chmod/Opruimen.html'
                    },
                    {
                        id: 'opdracht-chmod',
                        name: 'De opdracht',
                        blurb: 'Twee gebruikers en een bestand maken, en met chmod uitzoeken wie het daarna nog open krijgt.',
                        href: '../Chmod/Opdracht.html'
                    }
                ]
            },
            {
                name: 'Opdracht chown',
                reeks: 'chown',
                topics: [
                    {
                        id: 'oefening-chown',
                        name: 'De begeleide oefening',
                        blurb: 'Waar de owner in de uitvoer van ls staat, en welke opdracht je afgewerkt moet hebben voor je hieraan begint.',
                        href: '../Chown/Overzicht.html'
                    },
                    {
                        id: 'owner-aanpassen',
                        name: 'De owner aanpassen',
                        blurb: 'In welke van de twee naamkolommen van ls de owner staat, en hoe je een map met chown aan een andere gebruiker geeft.',
                        href: '../Chown/OwnerAanpassen.html'
                    },
                    {
                        id: 'opdracht-chown',
                        name: 'De opdracht',
                        blurb: 'Een regel van ls ontleden, het bestand aan een andere eigenaar geven, en software langs drie wegen installeren.',
                        href: '../Chown/Opdracht.html'
                    }
                ]
            },
            {
                name: 'Opdracht chgrp',
                reeks: 'chgrp',
                topics: [
                    {
                        id: 'oefening-chgrp',
                        name: 'De begeleide oefening',
                        blurb: 'Waar de group staat en wat ze aan de toegang verandert, en welke twee opdrachten hieraan voorafgaan.',
                        href: '../Chgrp/Overzicht.html'
                    },
                    {
                        id: 'group-aanpassen',
                        name: 'De group aanpassen',
                        blurb: 'De group van een map wijzigen met chgrp, en zien voor wie de drie letters in het midden daarna gelden.',
                        href: '../Chgrp/GroupAanpassen.html'
                    },
                    {
                        id: 'opdracht-chgrp',
                        name: 'De opdracht',
                        blurb: 'Een bestand waar de eigenaar niet meer bij kan, en een groep die het weer toegankelijk maakt.',
                        href: '../Chgrp/Opdracht.html'
                    }
                ]
            }
        ]
    }
};
