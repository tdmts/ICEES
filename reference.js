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
                        name: 'Generatie 5: quantum computers',
                        blurb: 'De qubit en de superpositie, uitgelegd met de kat van Schrodinger, en waarom dit voorlopig geen general purpose computer oplevert.',
                        href: 'Generaties/Generatie5QuantumComputers.html'
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
