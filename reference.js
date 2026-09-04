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
 * Labo Assemblage staat erin. De vijf overige mapnamen en hun groepering
 * liggen vast: zie CLAUDE.md, "The six modules". Drie labo's hebben meer dan
 * een indiening, en die hebben dus meer dan een Opdracht.html en meer dan vier
 * reeksen. Bij Assemblage zijn dat Inventaris, BiosUefi en InstallatieOs: elk
 * daarvan is een eigen menu-item met een eigen leesvolgorde van een pagina, en
 * daarom staat geen van de drie hieronder. Wat hier staat is de theoriereeks.
 */
window.LAB_REFERENCE = {
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
    }
};
