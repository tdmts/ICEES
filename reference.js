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
 * De labo's staan hier niet meer. Die navigeert het Orion-menu, en wat erin
 * staat, beschrijft orion.json.
 *
 * Geen van beide lezers voert JavaScript uit, dus de vorm ligt vast: vier
 * spaties voor "syllabus:", en per topic id, name en href tussen enkele
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
                        href: 'Generaties/Overzicht.html'
                    },
                    {
                        id: 'generaties-generatie-0',
                        name: 'Generatie 0: mechanische computers',
                        href: 'Generaties/Generatie0MechanischeComputers.html'
                    },
                    {
                        id: 'generaties-generatie-1',
                        name: 'Generatie 1: vacuumbuizen',
                        href: 'Generaties/Generatie1Vacuumbuizen.html'
                    },
                    {
                        id: 'generaties-generatie-2',
                        name: 'Generatie 2: transistoren',
                        href: 'Generaties/Generatie2Transistoren.html'
                    },
                    {
                        id: 'generaties-generatie-3',
                        name: 'Generatie 3: integrated circuits (ICs)',
                        href: 'Generaties/Generatie3IntegratedCircuitsIcs.html'
                    },
                    {
                        id: 'generaties-generatie-4',
                        name: 'Generatie 4: very large scale integration (VLSI)',
                        href: 'Generaties/Generatie4VeryLargeScaleIntegrationVlsi.html'
                    },
                    {
                        id: 'generaties-generatie-5',
                        name: 'Generatie 5: quantumcomputers',
                        href: 'Generaties/Generatie5Quantumcomputers.html'
                    },
                    {
                        id: 'generaties-nu',
                        name: 'Nu',
                        href: 'Generaties/Nu.html'
                    },
                    {
                        id: 'generaties-test-jezelf',
                        name: 'Test jezelf',
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
                        href: 'HardwareInEenModerneComputer/Overzicht.html'
                    },
                    {
                        id: 'hardware-herkennen',
                        name: 'Hardware herkennen',
                        href: 'HardwareInEenModerneComputer/HardwareHerkennen.html'
                    },
                    {
                        id: 'hardware-prestaties',
                        name: 'Prestaties',
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
                        href: 'BiosUefi/Overzicht.html'
                    },
                    {
                        id: 'bios-uefi-bootsequence',
                        name: 'Bootsequence',
                        href: 'BiosUefi/Bootsequence.html'
                    },
                    {
                        id: 'bios-uefi-bios',
                        name: 'Basic input output system (BIOS)',
                        href: 'BiosUefi/BasicInputOutputSystemBios.html'
                    },
                    {
                        id: 'bios-uefi-uefi',
                        name: 'Unified Extensible Firmware Interface (UEFI)',
                        href: 'BiosUefi/UnifiedExtensibleFirmwareInterfaceUefi.html'
                    },
                    {
                        id: 'bios-uefi-omgeving',
                        name: 'BIOS / UEFI',
                        href: 'BiosUefi/DeUefiOmgeving.html'
                    },
                    {
                        id: 'bios-uefi-artikel',
                        name: 'Artikel: BIOS en UEFI',
                        href: 'BiosUefi/ArtikelBiosEnUefi.html'
                    },
                    {
                        id: 'bios-uefi-test-jezelf',
                        name: 'Test jezelf',
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
                        href: 'IndustrieleComputerVsEmbeddedSystem/Overzicht.html'
                    },
                    {
                        id: 'industriele-computer-ipc',
                        name: 'Industriele computers',
                        href: 'IndustrieleComputerVsEmbeddedSystem/IndustrieleComputers.html'
                    },
                    {
                        id: 'industriele-computer-embedded',
                        name: 'Embedded system',
                        href: 'IndustrieleComputerVsEmbeddedSystem/EmbeddedSystem.html'
                    },
                    {
                        id: 'industriele-computer-panel-pc',
                        name: 'Panel PCs',
                        href: 'IndustrieleComputerVsEmbeddedSystem/PanelPcs.html'
                    },
                    {
                        id: 'industriele-computer-control-cabinet-pc',
                        name: 'Control cabinet PC',
                        href: 'IndustrieleComputerVsEmbeddedSystem/ControlCabinetPc.html'
                    },
                    {
                        id: 'industriele-computer-test-jezelf',
                        name: 'Test jezelf',
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
                        href: 'DeVonNeumannArchitectuur/Overzicht.html'
                    },
                    {
                        id: 'von-neumann-schema',
                        name: 'Von Neumann schema',
                        href: 'DeVonNeumannArchitectuur/VonNeumannSchema.html'
                    },
                    {
                        id: 'von-neumann-processor',
                        name: 'Processor: x86 vs x64 vs ARM',
                        href: 'DeVonNeumannArchitectuur/ProcessorX86VsX64VsArm.html'
                    },
                    {
                        id: 'von-neumann-test-jezelf',
                        name: 'Test jezelf',
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
                        href: 'Bestandssystemen/Overzicht.html'
                    },
                    {
                        id: 'bestandssystemen-inleiding',
                        name: 'Inleiding',
                        href: 'Bestandssystemen/Inleiding.html'
                    },
                    {
                        id: 'bestandssystemen-partitioneren',
                        name: 'Partitioneren',
                        href: 'Bestandssystemen/Partitioneren.html'
                    },
                    {
                        id: 'bestandssystemen-formatteren',
                        name: 'Formatteren',
                        href: 'Bestandssystemen/Formatteren.html'
                    },
                    {
                        id: 'bestandssystemen-clusters',
                        name: 'Clusters',
                        href: 'Bestandssystemen/Clusters.html'
                    },
                    {
                        id: 'bestandssystemen-fragmentatie',
                        name: 'Fragmentatie',
                        href: 'Bestandssystemen/Fragmentatie.html'
                    },
                    {
                        id: 'bestandssystemen-fragmentatie-schijf',
                        name: 'Fragmentatie bij de klassieke harde schijf',
                        href: 'Bestandssystemen/FragmentatieBijDeKlassiekeHardeSchijf.html'
                    },
                    {
                        id: 'bestandssystemen-fragmentatie-ssd',
                        name: 'Fragmentatie bij een solid state drive',
                        href: 'Bestandssystemen/FragmentatieBijEenSolidStateDrive.html'
                    },
                    {
                        id: 'bestandssystemen-defragmentatie',
                        name: 'Defragmentatie',
                        href: 'Bestandssystemen/Defragmentatie.html'
                    },
                    {
                        id: 'bestandssystemen-fat',
                        name: 'File Allocation Table (FAT)',
                        href: 'Bestandssystemen/FileAllocationTableFat.html'
                    },
                    {
                        id: 'bestandssystemen-ntfs',
                        name: 'New Technology File System (NTFS)',
                        href: 'Bestandssystemen/NewTechnologyFileSystemNtfs.html'
                    },
                    {
                        id: 'bestandssystemen-ext',
                        name: 'Extended File System (ext)',
                        href: 'Bestandssystemen/ExtendedFileSystemExt.html'
                    },
                    {
                        id: 'bestandssystemen-test-jezelf',
                        name: 'Test jezelf',
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
                        href: 'Besturingssystemen/Overzicht.html'
                    },
                    {
                        id: 'besturingssystemen-windows',
                        name: 'Windows',
                        href: 'Besturingssystemen/Windows.html'
                    },
                    {
                        id: 'besturingssystemen-linux',
                        name: 'Linux',
                        href: 'Besturingssystemen/Linux.html'
                    },
                    {
                        id: 'besturingssystemen-gebruikersbeheer',
                        name: 'Gebruikersbeheer',
                        href: 'Besturingssystemen/Gebruikersbeheer.html'
                    },
                    {
                        id: 'besturingssystemen-bestandsbeheer',
                        name: 'Bestandsbeheer',
                        href: 'Besturingssystemen/Bestandsbeheer.html'
                    },
                    {
                        id: 'besturingssystemen-geheugenbeheer',
                        name: 'Geheugenbeheer',
                        href: 'Besturingssystemen/Geheugenbeheer.html'
                    },
                    {
                        id: 'besturingssystemen-procesbeheer',
                        name: 'Procesbeheer',
                        href: 'Besturingssystemen/Procesbeheer.html'
                    },
                    {
                        id: 'besturingssystemen-prioriteit-en-realtime',
                        name: 'Prioriteit en realtime',
                        href: 'Besturingssystemen/PrioriteitEnRealtime.html'
                    },
                    {
                        id: 'besturingssystemen-test-jezelf',
                        name: 'Test jezelf',
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
                        href: 'VirtualMachinesEnContainers/Overzicht.html'
                    },
                    {
                        id: 'virtual-machines-server',
                        name: 'Server',
                        href: 'VirtualMachinesEnContainers/Server.html'
                    },
                    {
                        id: 'virtual-machines-nadelen-fysiek',
                        name: 'Nadelen van fysieke machines',
                        href: 'VirtualMachinesEnContainers/NadelenVanFysiekeMachines.html'
                    },
                    {
                        id: 'virtual-machines-vm',
                        name: 'Virtual machines',
                        href: 'VirtualMachinesEnContainers/VirtualMachines.html'
                    },
                    {
                        id: 'virtual-machines-containers',
                        name: 'Containers',
                        href: 'VirtualMachinesEnContainers/Containers.html'
                    },
                    {
                        id: 'virtual-machines-test-jezelf',
                        name: 'Test jezelf',
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
                        href: 'Moederbord/Overzicht.html'
                    },
                    {
                        id: 'moederbord-vormfactoren',
                        name: 'Vormfactoren',
                        href: 'Moederbord/Vormfactoren.html'
                    },
                    {
                        id: 'moederbord-raspberry-pi',
                        name: 'Raspberry Pi',
                        href: 'Moederbord/RaspberryPi.html'
                    },
                    {
                        id: 'moederbord-industriele-moederborden',
                        name: 'Industriele moederborden',
                        href: 'Moederbord/IndustrieleMoederborden.html'
                    },
                    {
                        id: 'moederbord-hoe-kiezen',
                        name: 'Hoe kies je een moederbord',
                        href: 'Moederbord/HoeKiesJeEenIndustrieelMoederbord.html'
                    },
                    {
                        id: 'moederbord-oefening',
                        name: 'Oefening',
                        href: 'Moederbord/Oefening.html'
                    },
                    {
                        id: 'moederbord-test-jezelf',
                        name: 'Test jezelf',
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
                        href: 'Informatievoorstelling/Overzicht.html'
                    },
                    {
                        id: 'informatievoorstelling-binair-betrouwbaar',
                        name: 'Binair = betrouwbaar',
                        href: 'Informatievoorstelling/BinairBetrouwbaar.html'
                    },
                    {
                        id: 'informatievoorstelling-bit-nibble-byte',
                        name: 'Bit, nibble, byte, word, double word',
                        href: 'Informatievoorstelling/BitNibbleByteWordDoubleWord.html'
                    },
                    {
                        id: 'informatievoorstelling-alles-is-een-getal',
                        name: 'Alle informatie wordt voorgesteld door getallen',
                        href: 'Informatievoorstelling/AlleInformatieWordtVoorgesteldDoorGetallen.html'
                    },
                    {
                        id: 'informatievoorstelling-kibi-versus-kilo',
                        name: 'Kibi versus kilo',
                        href: 'Informatievoorstelling/KibiVersusKilo.html'
                    },
                    {
                        id: 'informatievoorstelling-kbps-kbps',
                        name: 'kbps vs kBps',
                        href: 'Informatievoorstelling/BitOfByte.html'
                    },
                    {
                        id: 'informatievoorstelling-oefeningen',
                        name: 'Oefeningen',
                        href: 'Informatievoorstelling/Oefeningen.html'
                    },
                    {
                        id: 'informatievoorstelling-test-jezelf',
                        name: 'Test jezelf',
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
                        href: 'HardeSchijf/Overzicht.html'
                    },
                    {
                        id: 'harde-schijf-mechanisch',
                        name: 'Mechanische harde schijf',
                        href: 'HardeSchijf/MechanischeHardeSchijf.html'
                    },
                    {
                        id: 'harde-schijf-chs',
                        name: 'Cylinder head sector',
                        href: 'HardeSchijf/CylinderHeadSector.html'
                    },
                    {
                        id: 'harde-schijf-zbr',
                        name: 'Zone Bit Recording',
                        href: 'HardeSchijf/ZoneBitRecording.html'
                    },
                    {
                        id: 'harde-schijf-oefening-mechanisch',
                        name: 'Oefening mechanische harde schijf',
                        href: 'HardeSchijf/OefeningMechanischeHardeSchijf.html'
                    },
                    {
                        id: 'harde-schijf-ssd',
                        name: 'Solid State Drive',
                        href: 'HardeSchijf/SolidStateDrive.html'
                    },
                    {
                        id: 'harde-schijf-oefening-ssd',
                        name: 'Oefening Solid State Drive',
                        href: 'HardeSchijf/OefeningSolidStateDrive.html'
                    },
                    {
                        id: 'harde-schijf-pata',
                        name: 'Parallel Advanced Technology Attachment (PATA)',
                        href: 'HardeSchijf/ParallelAdvancedTechnologyAttachmentPata.html'
                    },
                    {
                        id: 'harde-schijf-sata',
                        name: 'Serial Advanced Technology Attachment (SATA)',
                        href: 'HardeSchijf/SerialAdvancedTechnologyAttachmentSata.html'
                    },
                    {
                        id: 'harde-schijf-ahci',
                        name: 'Advanced Host Controller Interface (AHCI)',
                        href: 'HardeSchijf/AdvancedHostControllerInterfaceAhci.html'
                    },
                    {
                        id: 'harde-schijf-nvme',
                        name: 'Non-Volatile Memory Express (NVMe)',
                        href: 'HardeSchijf/NonVolatileMemoryExpressNvme.html'
                    },
                    {
                        id: 'harde-schijf-pcie',
                        name: 'PCI Express (PCIe)',
                        href: 'HardeSchijf/PciExpressPcie.html'
                    },
                    {
                        id: 'harde-schijf-m2',
                        name: 'M.2',
                        href: 'HardeSchijf/M2.html'
                    },
                    {
                        id: 'harde-schijf-raid',
                        name: 'Redundant Array Of Independent Disks (RAID)',
                        href: 'HardeSchijf/RedundantArrayOfIndependentDisksRaid.html'
                    },
                    {
                        id: 'harde-schijf-cloud',
                        name: 'Cloud storage',
                        href: 'HardeSchijf/CloudStorage.html'
                    },
                    {
                        id: 'harde-schijf-nas',
                        name: 'Network Attached Storage (NAS)',
                        href: 'HardeSchijf/NetworkAttachedStorageNas.html'
                    },
                    {
                        id: 'harde-schijf-test-jezelf',
                        name: 'Test jezelf',
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
                        href: 'CentralProcessingUnitCpu/Overzicht.html'
                    },
                    {
                        id: 'cpu-inleiding',
                        name: 'Inleiding',
                        href: 'CentralProcessingUnitCpu/Inleiding.html'
                    },
                    {
                        id: 'cpu-onderdelen',
                        name: 'Onderdelen',
                        href: 'CentralProcessingUnitCpu/Onderdelen.html'
                    },
                    {
                        id: 'cpu-instructieset',
                        name: 'Instructieset',
                        href: 'CentralProcessingUnitCpu/Instructieset.html'
                    },
                    {
                        id: 'cpu-test-jezelf',
                        name: 'Test jezelf',
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
                        href: 'RandomAccessMemoryRam/Overzicht.html'
                    },
                    {
                        id: 'ram-werking',
                        name: 'Hoe werkt RAM geheugen?',
                        href: 'RandomAccessMemoryRam/HoeWerktRamGeheugen.html'
                    },
                    {
                        id: 'ram-dram',
                        name: 'Dynamic RAM (DRAM)',
                        href: 'RandomAccessMemoryRam/DynamicRamDram.html'
                    },
                    {
                        id: 'ram-sdram',
                        name: 'Synchronous DRAM (SDRAM)',
                        href: 'RandomAccessMemoryRam/SynchronousDramSdram.html'
                    },
                    {
                        id: 'ram-sdr',
                        name: 'Single Data Rate SDRAM (SDR SDRAM)',
                        href: 'RandomAccessMemoryRam/SingleDataRateSdramSdrSdram.html'
                    },
                    {
                        id: 'ram-ddr',
                        name: 'Double Data Rate SDRAM (DDR SDRAM)',
                        href: 'RandomAccessMemoryRam/DoubleDataRateSdramDdrSdram.html'
                    },
                    {
                        id: 'ram-ddr2',
                        name: 'DDR2 SDRAM',
                        href: 'RandomAccessMemoryRam/Ddr2Sdram.html'
                    },
                    {
                        id: 'ram-ddr3',
                        name: 'DDR3 SDRAM',
                        href: 'RandomAccessMemoryRam/Ddr3Sdram.html'
                    },
                    {
                        id: 'ram-ddr4',
                        name: 'DDR4 SDRAM',
                        href: 'RandomAccessMemoryRam/Ddr4Sdram.html'
                    },
                    {
                        id: 'ram-ddr5',
                        name: 'DDR5 SDRAM',
                        href: 'RandomAccessMemoryRam/Ddr5Sdram.html'
                    },
                    {
                        id: 'ram-ecc',
                        name: 'Error Correcting Code RAM (ECC RAM)',
                        href: 'RandomAccessMemoryRam/ErrorCorrectingCodeRamEccRam.html'
                    },
                    {
                        id: 'ram-channels',
                        name: 'Single, dual en quad channel',
                        href: 'RandomAccessMemoryRam/SingleDualEnQuadChannel.html'
                    },
                    {
                        id: 'ram-test-jezelf',
                        name: 'Test jezelf',
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
                        href: 'Chipset/Overzicht.html'
                    },
                    {
                        id: 'chipset-wat',
                        name: 'Wat is een chipset?',
                        href: 'Chipset/WatIsEenChipset.html'
                    },
                    {
                        id: 'chipset-northbridge',
                        name: 'Northbridge',
                        href: 'Chipset/Northbridge.html'
                    },
                    {
                        id: 'chipset-fsb',
                        name: 'Front Side Bus',
                        href: 'Chipset/FrontSideBus.html'
                    },
                    {
                        id: 'chipset-southbridge',
                        name: 'Southbridge',
                        href: 'Chipset/Southbridge.html'
                    },
                    {
                        id: 'chipset-apu',
                        name: 'Accelerated Processing Unit (APU)',
                        href: 'Chipset/AcceleratedProcessingUnitApu.html'
                    },
                    {
                        id: 'chipset-pch',
                        name: 'Platform Controller Hub (PCH)',
                        href: 'Chipset/PlatformControllerHubPch.html'
                    },
                    {
                        id: 'chipset-test-jezelf',
                        name: 'Test jezelf',
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
                        href: 'GraphicsProcessingUnitGpu/Overzicht.html'
                    },
                    {
                        id: 'gpu-grafische-kaart',
                        name: 'De grafische kaart',
                        href: 'GraphicsProcessingUnitGpu/DeGrafischeKaart.html'
                    },
                    {
                        id: 'gpu-resolutie',
                        name: 'Resolutie en framerate',
                        href: 'GraphicsProcessingUnitGpu/ResolutieEnFramerate.html'
                    },
                    {
                        id: 'gpu-aansluitingen',
                        name: 'Aansluitingen',
                        href: 'GraphicsProcessingUnitGpu/Aansluitingen.html'
                    },
                    {
                        id: 'gpu-test-jezelf',
                        name: 'Test jezelf',
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
                        href: 'PowerSupplyUnitPsu/Overzicht.html'
                    },
                    {
                        id: 'psu-voeding',
                        name: 'De voeding',
                        href: 'PowerSupplyUnitPsu/DeVoeding.html'
                    },
                    {
                        id: 'psu-industriele-voeding',
                        name: 'De industriele voeding',
                        href: 'PowerSupplyUnitPsu/DeIndustrieleVoeding.html'
                    },
                    {
                        id: 'psu-ps-on',
                        name: 'PS_ON',
                        href: 'PowerSupplyUnitPsu/PsOn.html'
                    },
                    {
                        id: 'psu-pwr-ok',
                        name: 'PWR_OK',
                        href: 'PowerSupplyUnitPsu/PwrOk.html'
                    },
                    {
                        id: 'psu-test-jezelf',
                        name: 'Test jezelf',
                        href: 'PowerSupplyUnitPsu/TestJezelf.html'
                    }
                ]
            }
        ]
    }
};
