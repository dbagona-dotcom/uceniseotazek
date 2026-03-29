export const epoData = [
  {
    id: 1,
    nazev: "1. Operační systémy stanic, jejich struktura a zabezpečení",
    teorie:
      "Operační systém (OS) oživuje hardware a spravuje zdroje. Skládá se z jádra (kernel), které komunikuje přímo s HW, ovladačů a uživatelského rozhraní (UI). Multitasking umožňuje běh více programů naráz - moderní je preemptivní (OS sám přiděluje a odebírá procesor), starší byl kooperativní. Při startu OS spolupracuje s BIOS/UEFI. Zabezpečení řeší autentizace (Kerberos, certifikáty), práva k souborům a firewall.",
    kviz: [
      {
        otazka: "Co je hlavní funkcí OS z hlediska hardwaru?",
        moznosti: [
          "Zrychluje připojení k internetu",
          "Slouží jako antivirový štít systému",
          "Řídí a spravuje veškerý hardware",
        ],
        spravna: 2,
      },
      {
        otazka: "Co je to jádro (kernel) operačního systému?",
        moznosti: [
          "Nejnižší část s přístupem k hardwaru",
          "Grafické rozhraní pro běžného uživatele",
          "Textový editor pro úpravu konfigurace",
        ],
        spravna: 0,
      },
      {
        otazka: "Co jsou to ovladače (drivers) v počítači?",
        moznosti: [
          "Programy určené k psaní dlouhých textů",
          "Programy pro komunikaci hardwaru s OS",
          "Nástroje pro správu souborů na disku",
        ],
        spravna: 1,
      },
      {
        otazka: "Co se spustí jako první při startu počítače?",
        moznosti: [
          "Antivirový program pro kontrolu dat",
          "Příkazový řádek pro zadání příkazů",
          "Firmware (BIOS/UEFI) s testem POST",
        ],
        spravna: 2,
      },
      {
        otazka: "Co znamená preemptivní multitasking?",
        moznosti: [
          "OS sám spravedlivě přiděluje čas CPU",
          "Programy běží postupně jeden po druhém",
          "Uživatel přepíná mezi programy ručně",
        ],
        spravna: 0,
      },
      {
        otazka: "Jak funguje kooperativní multitasking?",
        moznosti: [
          "Programy jsou bezpečnější pro systém",
          "Proces musí sám uvolnit čas procesoru",
          "Zpracovává pouze textové operace v RAM",
        ],
        spravna: 1,
      },
      {
        otazka: "K čemu sloužil soubor CONFIG.SYS v MS-DOS?",
        moznosti: [
          "Byla to systémová složka pro staré hry",
          "Zajišťoval šifrování systémových dat",
          "K zavádění ovladačů při startu systému",
        ],
        spravna: 2,
      },
      {
        otazka: "Co dělá alokační strategie paměti 'Best fit'?",
        moznosti: [
          "Hledá nejmenší vhodný blok pro proces",
          "Vybere úplně první volný blok v RAM",
          "Využije největší možný volný blok v RAM",
        ],
        spravna: 0,
      },
      {
        otazka: "Jak OS řeší nedostatek fyzické paměti RAM?",
        moznosti: [
          "Smazáním náhodných souborů z plochy PC",
          "Využitím virtuální paměti (swap na disk)",
          "Okamžitým zastavením všech výpočtů CPU",
        ],
        spravna: 1,
      },
      {
        otazka: "Co je to Kerberos v operačním systému?",
        moznosti: [
          "Třihlavý pes chránící soubory na disku",
          "Nástroj pro automatické čištění disku",
          "Autentizační protokol využívající tikety",
        ],
        spravna: 2,
      },
      {
        otazka: "Co obsahují digitální bezpečnostní certifikáty?",
        moznosti: [
          "Veřejný klíč a ověřenou identitu majitele",
          "Aktuální IP adresu a fyzickou MAC kartu",
          "Historii prohlížeče a navštívených webů",
        ],
        spravna: 0,
      },
      {
        otazka: "Jak se běžně změní priorita bootování zařízení?",
        moznosti: [
          "Ve Správci úloh po spuštění Windows",
          "V BIOS/UEFI stiskem klávesy při startu",
          "Fyzickým odpojením pevného disku z desky",
        ],
        spravna: 1,
      },
      {
        otazka: "Který z těchto systémů je typicky open-source?",
        moznosti: [
          "Placená verze systému Windows 11 Home",
          "Grafický systém macOS pro Apple stroje",
          "Linux používaný zdarma i na serverech",
        ],
        spravna: 2,
      },
      {
        otazka: "Co v IT označuje termín 'blue screen' (BSOD)?",
        moznosti: [
          "Zhroucení systému kvůli kritické chybě",
          "Instalační režim pro nové aplikace v OS",
          "Ochranný režim monitoru šetřící zrak",
        ],
        spravna: 0,
      },
      {
        otazka: "Jaký je hlavní rozdíl mezi BIOS a moderním UEFI?",
        moznosti: [
          "Starší BIOS je graficky mnohem pestřejší",
          "UEFI podporuje disky nad 2 TB a SecureBoot",
          "Mezi těmito technologiemi není žádný rozdíl",
        ],
        spravna: 1,
      },
    ],
  },
  {
    id: 2,
    nazev: "2. Cloudové síťové aplikace",
    teorie:
      "Cloud computing přesouvá výkon a data na internet. Modely: IaaS (infrastruktura), PaaS (platforma), SaaS (software). Výhody: dostupnost, platba za využití. Nevýhody: závislost na internetu a poskytovateli. Zabezpečení: šifrování, MFA, georedundance.",
    kviz: [
      {
        otazka: "Co je základním principem cloud computingu?",
        moznosti: [
          "Počítače se propojují kabelem bez internetu",
          "Data se ukládají výhradně na lokální USB disk",
          "Data a programy běží na serverech v internetu",
        ],
        spravna: 2,
      },
      {
        otazka: "Co přesně znamená zkratka IaaS v cloudu?",
        moznosti: [
          "Pronájem virtuálních serverů a sítí (HW)",
          "Poskytnutí účetního softwaru pro firmy",
          "Automatická instalace optických kabelů",
        ],
        spravna: 0,
      },
      {
        otazka: "Co představuje model SaaS (např. Gmail)?",
        moznosti: [
          "Pronájem čistého hardwaru bez systému",
          "Hotovou aplikaci dostupnou přes prohlížeč",
          "Vývojové prostředí určené pro programátory",
        ],
        spravna: 1,
      },
      {
        otazka: "Co typicky poskytuje cloudový model PaaS?",
        moznosti: [
          "Hotové hry ke stažení do telefonu",
          "Pronájem fyzické budovy datového centra",
          "Vývojové prostředí a nástroje pro kodéry",
        ],
        spravna: 2,
      },
      {
        otazka: "Jaký protokol synchronizuje maily s mobilem?",
        moznosti: [
          "ActiveSync pro plynulý přenos dat",
          "FTP protokol pro přenos velkých souborů",
          "DHCP pro přidělování adres v lokální síti",
        ],
        spravna: 0,
      },
      {
        otazka: "Co je hlavní nevýhodou cloudových služeb?",
        moznosti: [
          "Zabírají příliš mnoho místa na lokálním disku",
          "Závislost na internetu a na důvěře poskytovateli",
          "Práce s nimi je pomalejší než se starou disketou",
        ],
        spravna: 1,
      },
      {
        otazka: "K čemu slouží komponenta Microsoft OneDrive?",
        moznosti: [
          "K bezplatnému volání do všech sítí světa",
          "K tvorbě matematických tabulek v prohlížeči",
          "Jako úložiště pro soukromé a sdílené soubory",
        ],
        spravna: 2,
      },
      {
        otazka: "Jak funguje poštovní protokol POP3?",
        moznosti: [
          "Stáhne maily do PC a obvykle je ze serveru smaže",
          "Synchronizuje všechny složky a stavy přečtení",
          "Slouží výhradně k odesílání pošty do internetu",
        ],
        spravna: 0,
      },
      {
        otazka: "Který protokol slouží k ODESÍLÁNÍ e-mailů?",
        moznosti: [
          "HTTPS pro bezpečné prohlížení webových stránek",
          "SMTP pro přenos zpráv na odchozí server",
          "SSH pro vzdálenou správu linuxových serverů",
        ],
        spravna: 1,
      },
      {
        otazka: "Která technologie tvoří v cloudu instance?",
        moznosti: [
          "Silné šifrování všech přenášených paketů",
          "Defragmentace všech disků v datovém centru",
          "Virtualizace umožňující běh více OS na jednom HW",
        ],
        spravna: 2,
      },
      {
        otazka: "Kdy je výhodné použít protokol IMAP?",
        moznosti: [
          "Při přístupu k poště z více různých zařízení",
          "Když chceme maily po přečtení ihned smazat",
          "Pro diagnostiku sítě pomocí testovacích paketů",
        ],
        spravna: 0,
      },
      {
        otazka: "Co umožňuje technologie Outlook Anywhere?",
        moznosti: [
          "Instalaci balíku Office bez licenčního klíče",
          "Přístup k Exchange poště zvenčí bez VPN tunelu",
          "Odesílání klasických papírových dopisů poštou",
        ],
        spravna: 1,
      },
      {
        otazka: "Jak se v cloudu zabezpečují přenášená data?",
        moznosti: [
          "Data jsou v cloudu vždy veřejně přístupná",
          "Posíláním dat přes speciální satelitní linky",
          "Šifrováním komunikace přes HTTPS a TLS",
        ],
        spravna: 2,
      },
      {
        otazka: "Jaká je výhoda cloudu pro týmovou práci?",
        moznosti: [
          "Umožňuje editaci dokumentu více lidmi naráz",
          "Programy fungují na PC bez funkčního CPU",
          "Výrazně snižuje spotřebu elektřiny v budově",
        ],
        spravna: 0,
      },
      {
        otazka: "Co znamená bezpečnostní zkratka MFA?",
        moznosti: [
          "Centrální přístup k hlavním souborům v systému",
          "Vícefaktorové ověření (např. heslo a SMS kód)",
          "Balíček bezplatných aplikací od Microsoftu",
        ],
        spravna: 1,
      },
    ],
  },
  {
    id: 3,
    nazev: "3. Počítačové sítě, model TCP/IP",
    teorie:
      "Model TCP/IP má 4 vrstvy: Síťové rozhraní, Síťová (IP), Transportní (TCP/UDP) a Aplikační. Topologie: klient-server nebo P2P.",
    kviz: [
      {
        otazka: "Jak se nazývá síťová architektura P2P?",
        moznosti: [
          "Centrální správa všech klientských stanic",
          "Systém řízený jedním hlavním mainframem",
          "Všechny počítače jsou si v síti rovny",
        ],
        spravna: 2,
      },
      {
        otazka: "Co přesně označuje zkratka LAN?",
        moznosti: [
          "Lokální síť v rámci jedné budovy",
          "Globální celosvětovou datovou síť",
          "Bezdrátovou síť v mobilním telefonu",
        ],
        spravna: 0,
      },
      {
        otazka: "Které médium přenáší data pomocí světla?",
        moznosti: [
          "Stíněný koaxiální kabel s mědí",
          "Moderní a rychlé optické vlákno",
          "Obyčejná kroucená dvojlinka UTP",
        ],
        spravna: 1,
      },
      {
        otazka: "Jaká je hlavní vlastnost protokolu TCP?",
        moznosti: [
          "Odesílá data bez kontroly doručení",
          "Určuje fyzickou polohu kabelů v zemi",
          "Zajišťuje spolehlivý přenos s potvrzením",
        ],
        spravna: 2,
      },
      {
        otazka: "Kdy se v síti s výhodou využívá protokol UDP?",
        moznosti: [
          "Pro streamování videa a online hraní",
          "Při odesílání důležitých účetních dat",
          "Ke stahování kritických aktualizací OS",
        ],
        spravna: 0,
      },
      {
        otazka: "Co je to hardwarová MAC adresa?",
        moznosti: [
          "Adresa určená pro Apple počítače",
          "Jedinečný identifikátor síťové karty",
          "Adresa, kterou uživatel píše do webu",
        ],
        spravna: 1,
      },
      {
        otazka: "Kam v TCP/IP patří protokol HTTP nebo DNS?",
        moznosti: [
          "Do nejnižší síťové vrstvy rozhraní",
          "Do transportní vrstvy pro přenos dat",
          "Do aplikační vrstvy poskytující služby",
        ],
        spravna: 2,
      },
      {
        otazka: "Jaký je úkol síťového protokolu DHCP?",
        moznosti: [
          "Automatické přidělování IP adres v síti",
          "Blokování nebezpečných virů v síti",
          "Šifrování veškeré e-mailové komunikace",
        ],
        spravna: 0,
      },
      {
        otazka: "Co zajišťuje celosvětový systém DNS?",
        moznosti: [
          "Automatické filtrování spamu v poště",
          "Překlad doménových názvů na IP adresy",
          "Zrychlení stahování souborů z internetu",
        ],
        spravna: 1,
      },
      {
        otazka: "Co dělá 'Vrstva síťového rozhraní' v TCP/IP?",
        moznosti: [
          "Komprimuje video pro plynulý přenos",
          "Řeší adresaci paketů mezi kontinenty",
          "Zajišťuje fyzický přenos rámců v síti",
        ],
        spravna: 2,
      },
      {
        otazka: "Jak se nazývají 4 kroky DHCP (zkratka)?",
        moznosti: [
          "DORA (Discover, Offer, Request, Ack)",
          "LAMP (Linux, Apache, MySQL, PHP)",
          "HTTP (Hypertext Transfer Protocol)",
        ],
        spravna: 0,
      },
      {
        otazka: "K čemu slouží technologie VPN?",
        moznosti: [
          "Blokuje nevyžádanou poštu v Outlooku",
          "Tvoří bezpečný šifrovaný tunel do firmy",
          "Zrychluje domácí Wi-Fi síť o desítky %",
        ],
        spravna: 1,
      },
      {
        otazka: "Co má na starosti protokol IP?",
        moznosti: [
          "Spolehlivost a potvrzování přijatých dat",
          "Formátování vzhledu webových stránek",
          "Logickou adresaci a směrování paketů",
        ],
        spravna: 2,
      },
      {
        otazka: "Jak se bezpečně vzdáleně připojit k serveru?",
        moznosti: [
          "Přes šifrovaný protokol SSH (vzdálená správa)",
          "Použitím nešifrovaného protokolu FTP",
          "Pomocí diagnostického protokolu ICMP",
        ],
        spravna: 0,
      },
      {
        otazka: "Co dělá síťový příkaz 'ping'?",
        moznosti: [
          "Zjišťuje MAC adresu přes protokol HTTP",
          "Testuje dostupnost zařízení přes ICMP",
          "Maže historii navštívených webů v PC",
        ],
        spravna: 1,
      },
    ],
  },
  {
    id: 4,
    nazev: "4. Počítačové sítě, referenční model OSI",
    teorie:
      "7 vrstev: Fyzická, Linková (Switch, MAC), Síťová (Router, IP), Transportní, Relační, Prezentační, Aplikační.",
    kviz: [
      {
        otazka: "Kolik vrstev má referenční model OSI?",
        moznosti: [
          "Má celkem 4 definované vrstvy",
          "Má celkem 9 definovaných vrstev",
          "Má celkem 7 definovaných vrstev",
        ],
        spravna: 2,
      },
      {
        otazka: "Na jaké vrstvě pracuje běžný Switch?",
        moznosti: [
          "Na 2. linkové vrstvě (s MAC adresami)",
          "Na 1. fyzické vrstvě (pracuje s bity)",
          "Na 3. síťové vrstvě (s IP adresami)",
        ],
        spravna: 0,
      },
      {
        otazka: "Na jaké vrstvě pracuje síťový Router?",
        moznosti: [
          "Na 1. fyzické vrstvě přenosu signálu",
          "Na 3. síťové vrstvě (směruje dle IP)",
          "Na 2. linkové vrstvě v rámci LAN",
        ],
        spravna: 1,
      },
      {
        otazka: "Jakou funkci má Repeater (Opakovač)?",
        moznosti: [
          "Učí se MAC adresy všech klientských PC",
          "Překládá IP adresy mezi různými sítěmi",
          "Signál pouze regeneruje a zesiluje",
        ],
        spravna: 2,
      },
      {
        otazka: "Jaký konektor patří na Ethernet kabel?",
        moznosti: [
          "Standardizovaný konektor typu RJ-45",
          "Kulatý konektor typu BNC pro antény",
          "Oboustranný konektor typu USB-C",
        ],
        spravna: 0,
      },
      {
        otazka: "Který prvek dnes tvoří masivní kolize?",
        moznosti: [
          "Inteligentní switch s pamětí MAC",
          "Zastaralý a slepý rozbočovač (Hub)",
          "Výkonný router se směrovací tabulkou",
        ],
        spravna: 1,
      },
      {
        otazka: "Jak se jmenuje jednotka na 3. vrstvě?",
        moznosti: [
          "Rámec odesílaný v lokální síti LAN",
          "Samostatný bit putující po kabelu",
          "Paket směrovaný v celosvětové síti",
        ],
        spravna: 2,
      },
      {
        otazka: "Jak se jmenuje jednotka na 2. vrstvě?",
        moznosti: [
          "Rámec (Frame) s MAC adresami",
          "Soubor dat uložený na pevném disku",
          "Segment vytvořený protokolem TCP",
        ],
        spravna: 0,
      },
      {
        otazka: "Co řeší 6. vrstva (Prezentační)?",
        moznosti: [
          "Pouze vykresluje fonty na monitor PC",
          "Převod formátů dat a šifrování zpráv",
          "Kontroluje fyzickou neporušenost kabelů",
        ],
        spravna: 1,
      },
      {
        otazka: "Co má na starosti 5. vrstva (Relační)?",
        moznosti: [
          "Přiděluje IP adresy pomocí DHCP",
          "Blokuje viry přicházející z internetu",
          "Otevírá, udržuje a ukončuje spojení",
        ],
        spravna: 2,
      },
      {
        otazka: "Která vrstva komunikuje s uživatelem?",
        moznosti: [
          "7. Aplikační vrstva (např. prohlížeč)",
          "4. Transportní vrstva zajišťující přenos",
          "1. Fyzická vrstva tvořená kabeláží",
        ],
        spravna: 0,
      },
      {
        otazka: "Co je úkolem síťové brány (Gateway)?",
        moznosti: [
          "Přenáší data bezdrátově do okolí",
          "Překládá komunikaci mezi různými sítěmi",
          "Chladí servery v klimatizované místnosti",
        ],
        spravna: 1,
      },
      {
        otazka: "Jaký příkaz vypíše MAC adresu v CMD?",
        moznosti: [
          "Příkaz ping s parametrem -a pro jméno",
          "Příkaz netstat pro seznam spojení",
          "Příkaz ipconfig s parametrem /all",
        ],
        spravna: 2,
      },
      {
        otazka: "Jaký je rozdíl mezi vlákny SM a MM?",
        moznosti: [
          "SM je pro dálky, MM pro vnitřní sítě",
          "Mezi těmito vlákny není žádný rozdíl",
          "MM svítí červeně a SM vlákno zeleně",
        ],
        spravna: 0,
      },
      {
        otazka: "Z jakých částí se skládá MAC adresa?",
        moznosti: [
          "Z náhodných čísel v rozsahu 1 až 10",
          "Z ID výrobce (OUI) a sériového čísla",
          "Z verze operačního systému a hesla",
        ],
        spravna: 1,
      },
    ],
  },
  {
    id: 5,
    nazev: "5. Počítače typu PC, architektura počítačů, jednotlivé typy",
    teorie:
      "Von Neumann (společná paměť), Harvard (oddělená paměť). Základní deska propojuje komponenty. PSU napájí (DC). PCIe sběrnice. DMA přenos bez CPU. Chipset (North/Southbridge). POST test při startu.",
    kviz: [
      {
        otazka: "Čím je typická Von Neumannova architektura?",
        moznosti: [
          "Procesor v ní funguje na bázi vody",
          "Počítač neobsahuje vůbec žádnou paměť",
          "Program i data sdílejí jednu paměť",
        ],
        spravna: 2,
      },
      {
        otazka: "V čem je výhoda Harvardské architektury?",
        moznosti: [
          "Odděluje paměť pro data a instrukce",
          "Je mnohem levnější na samotnou výrobu",
          "Vůbec se nezahřívá ani při plné zátěži",
        ],
        spravna: 0,
      },
      {
        otazka: "Která komponenta propojuje vše v PC?",
        moznosti: [
          "Výkonná grafická karta v PCIe slotu",
          "Základní deska (Mainboard/Motherboard)",
          "Napájecí zdroj umístěný v dolní části",
        ],
        spravna: 1,
      },
      {
        otazka: "K čemu slouží napájecí zdroj (PSU)?",
        moznosti: [
          "Ukládá data při náhlém výpadku proudu",
          "Slouží pouze k otáčení všech větráků",
          "Mění AC 230V na nízké DC napětí",
        ],
        spravna: 2,
      },
      {
        otazka: "Jaká sběrnice je dnes pro GPU standardem?",
        moznosti: [
          "Moderní sériová sběrnice PCI Express",
          "Zastaralá sběrnice AGP pro grafiku",
          "Stará sběrnice ISA pro pomalá zařízení",
        ],
        spravna: 0,
      },
      {
        otazka: "Jak funguje technologie DMA?",
        moznosti: [
          "Umožňuje procesoru v klidu odpočívat",
          "Přenáší data do RAM bez účasti CPU",
          "Automaticky maže viry z operační paměti",
        ],
        spravna: 1,
      },
      {
        otazka: "Jak se počítá propustnost sběrnice?",
        moznosti: [
          "Propustnost = napájecí napětí × proud",
          "Propustnost = rychlost disku / RAM",
          "Propustnost = šířka sběrnice × frekvence",
        ],
        spravna: 2,
      },
      {
        otazka: "Co na deskách představuje Chipset?",
        moznosti: [
          "Řadiče organizující tok dat k procesoru",
          "Baterii, která v PC udržuje reálný čas",
          "Malý integrovaný reproduktor pro chyby",
        ],
        spravna: 0,
      },
      {
        otazka: "Co se stane při hardwarovém přerušení?",
        moznosti: [
          "Počítač se okamžitě bezpečně vypne",
          "CPU odskočí k řešení urgentní události",
          "Zruší se veškeré aktuální stahování dat",
        ],
        spravna: 1,
      },
      {
        otazka: "Co označuje termín 'Embedded systém'?",
        moznosti: [
          "Skrytou systémovou složku v Windows",
          "Počítačový virus ukrytý v obrázku",
          "Specializovaný počítač uvnitř zařízení",
        ],
        spravna: 2,
      },
      {
        otazka: "Jaké rozhraní zrychlilo čtení z SSD?",
        moznosti: [
          "Moderní rozhraní NVMe běžící přes PCIe",
          "Pomalé rozhraní USB 2.0 pro disky",
          "Staré rozhraní FireWire pro kamery",
        ],
        spravna: 0,
      },
      {
        otazka: "Co je hlavním úkolem testu POST?",
        moznosti: [
          "Najít okolní Wi-Fi sítě pro připojení",
          "Otestovat funkčnost klíčového hardwaru",
          "Spustit hloubkový antivirový test disků",
        ],
        spravna: 1,
      },
      {
        otazka: "V čem je UEFI modernější než BIOS?",
        moznosti: [
          "Je to stejné, jen má úplně jiný název",
          "Vůbec nepotřebuje k chodu elektřinu",
          "Podporuje myš, GPT a Secure Boot",
        ],
        spravna: 2,
      },
      {
        otazka: "Která z těchto sběrnic je dnes zastaralá?",
        moznosti: [
          "Zastaralá sběrnice ISA (nebo AGP)",
          "Univerzální moderní port USB-C",
          "Rychlá sběrnice standardu PCIe 4.0",
        ],
        spravna: 0,
      },
      {
        otazka: "Jak ve Windows přidělit složku jinému?",
        moznosti: [
          "Změnou rozlišení monitoru uživatele",
          "Změnou Vlastnictví (ve Vlastnosti -> Sec)",
          "Zabalením dané složky do archivu ZIP",
        ],
        spravna: 1,
      },
    ],
  },
  {
    id: 6,
    nazev: "6. Servery, zálohování serverových dat",
    teorie:
      "Zálohování 3-2-1. Typy: Inkrementální (změny od poslední), Diferenciální (změny od plné). RTO (čas obnovy), RPO (ztráta dat). RAID 0, 1, 5.",
    kviz: [
      {
        otazka: "Co přesně říká pravidlo zálohování 3-2-1?",
        moznosti: [
          "3 servery, 2 switche a k tomu 1 router",
          "3 kopie, 2 média, 1 kopie mimo firmu",
          "3 dny v týdnu zálohovat po 1 hodině",
        ],
        spravna: 1,
      },
      {
        otazka: "Co tvoří Inkrementální (přírůstkovou) zálohu?",
        moznosti: [
          "Zálohuje úplně všechna data na disku",
          "Zálohuje pouze čistý operační systém",
          "Zálohuje jen změny od poslední zálohy",
        ],
        spravna: 2,
      },
      {
        otazka: "Jak funguje Diferenciální záloha?",
        moznosti: [
          "Zálohuje veškeré změny od plné zálohy",
          "Nezálohuje data vůbec na žádné médium",
          "Zálohuje všechna data v opačném pořadí",
        ],
        spravna: 0,
      },
      {
        otazka: "Je zrcadlení disků (RAID 1) zálohou?",
        moznosti: [
          "Ano, je to ta nejlepší možná záloha",
          "Ne, protože nechrání před smazáním dat",
          "Ano, protože chrání data i před požárem",
        ],
        spravna: 1,
      },
      {
        otazka: "Co v IT vyjadřuje parametr RTO?",
        moznosti: [
          "Počet zbývajících hodin záruky serveru",
          "Rychlost zápisu dat na magnetickou pásku",
          "Maximální čas na zprovoznění systému",
        ],
        spravna: 2,
      },
      {
        otazka: "Co vyjadřuje parametr RPO?",
        moznosti: [
          "Maximální stáří dat, o která lze přijít",
          "Maximální objem dat v jednotkách GB",
          "Rychlost otáčení ploten pevného disku",
        ],
        spravna: 0,
      },
      {
        otazka: "Jak funguje diskové pole RAID 5?",
        moznosti: [
          "Vyžaduje pouze 2 disky jako zrcadlo",
          "Data a parita jsou na všech discích",
          "Spojí 10 disků v jeden obří logický disk",
        ],
        spravna: 1,
      },
      {
        otazka: "V čem je nebezpečí pole RAID 0?",
        moznosti: [
          "Práce s ním je pro uživatele moc pomalá",
          "Způsobuje rychlé vybití baterie serveru",
          "Selhání jednoho disku zničí všechna data",
        ],
        spravna: 2,
      },
      {
        otazka: "Co je funkcí firemního DNS serveru?",
        moznosti: [
          "Překládá doménové názvy na IP adresy",
          "Přiděluje IP adresy klientským stanicím",
          "Šifruje veškerý provoz směrem do webu",
        ],
        spravna: 0,
      },
      {
        otazka: "Jak funguje zálohovací Deduplikace?",
        moznosti: [
          "Fyzicky ukládá každé slovo v souboru 2x",
          "Uloží stejné bloky dat pouze jedenkrát",
          "Záměrně poškodí veškerá duplicitní data",
        ],
        spravna: 1,
      },
      {
        otazka: "Jakou roli hraje Řadič domény (DC)?",
        moznosti: [
          "Slouží pouze pro ukládání firemních fotek",
          "Reguluje rychlost firemní sítě Wi-Fi",
          "Spravuje Active Directory a přihlašování",
        ],
        spravna: 2,
      },
      {
        otazka: "Co v zálohování znamená koncept D2D2C?",
        moznosti: [
          "Záloha Disk-to-Disk a následně do Cloudu",
          "Zkratka pro Desk to Door to Car",
          "Zkratka pro metodu dvojité obnovy dat",
        ],
        spravna: 0,
      },
      {
        otazka: "Na co se dodnes archivují velká data?",
        moznosti: [
          "Na stovky obyčejných CDček naskládaných",
          "Na levné a spolehlivé magnetické pásky",
          "Na velmi staré diskety o kapacitě 1,44 MB",
        ],
        spravna: 1,
      },
      {
        otazka: "K čemu slouží tzv. 'Image disku'?",
        moznosti: [
          "Jsou to pěkné tapety na plochu monitoru",
          "Nástroj sloužící k tisku 3D modelů v IT",
          "Je to přesná kopie celého OS i s daty",
        ],
        spravna: 2,
      },
      {
        otazka: "Co je to diskové úložiště NAS?",
        moznosti: [
          "Samostatná skříň s disky připojená do sítě",
          "Název pro nový moderní Antivirový Systém",
          "Protokol pro rychlé odesílání elektronické pošty",
        ],
        spravna: 0,
      },
    ],
  },
  {
    id: 7,
    nazev: "7. Aktivní a pasivní síťové prvky",
    teorie:
      "Pasivní: kabely, patch panely. Aktivní: Switch (MAC), Router (IP), Repeater. Hub je zastaralý.",
    kviz: [
      {
        otazka: "Co patří mezi PASIVNÍ síťové prvky?",
        moznosti: [
          "Aktivní switch napájený ze sítě 230V",
          "Patch panel a kabeláž kroucená dvojlinka",
          "Bezdrátový router se čtyřmi anténami",
        ],
        spravna: 1,
      },
      {
        otazka: "Jaký je rozdíl mezi aktivním a pasivním?",
        moznosti: [
          "Aktivní prvek se v racku neustále hýbe",
          "Mezi těmito prvky není vůbec žádný rozdíl",
          "Aktivní prvek signál regeneruje a zesiluje",
        ],
        spravna: 2,
      },
      {
        otazka: "Na jaké vrstvě pracuje Switch?",
        moznosti: [
          "Na 2. linkové vrstvě (směruje dle MAC)",
          "Na 3. síťové vrstvě podle adresy IP",
          "Na 1. fyzické vrstvě (podle síly napětí)",
        ],
        spravna: 0,
      },
      {
        otazka: "Na jaké vrstvě pracuje Router?",
        moznosti: [
          "Na 2. vrstvě (posílá maily v síti LAN)",
          "Na 3. síťové vrstvě (směruje mezi sítěmi)",
          "Na 7. vrstvě tvořící rozhraní aplikací",
        ],
        spravna: 1,
      },
      {
        otazka: "K čemu slouží v racku Patch panel?",
        moznosti: [
          "Funguje jako hlavní anténa pro Wi-Fi",
          "Obsahuje baterie pro případ výpadku sítě",
          "Slouží k přehlednému ukončení kabeláže",
        ],
        spravna: 2,
      },
      {
        otazka: "Proč Switch zcela nahradil Hub?",
        moznosti: [
          "Switch odstraňuje kolize a šetří pásmo",
          "Switch spotřeboval o tisíce Wattů méně",
          "Switch byl fyzicky mnohem větší v racku",
        ],
        spravna: 0,
      },
      {
        otazka: "K čemu slouží v síti Repeater?",
        moznosti: [
          "Učí se MAC adresy a ty následně překládá",
          "Signál přijme, zesílí a pošle ho dál",
          "Překládá IP adresy mezi různými sítěmi",
        ],
        spravna: 1,
      },
      {
        otazka: "Co je to kolizní doména?",
        moznosti: [
          "Označení pro celou serverovou místnost",
          "Typ útoku hackerů na webové servery",
          "Část sítě, kde může dojít ke střetu dat",
        ],
        spravna: 2,
      },
      {
        otazka: "Jaká je max. délka UTP kabelu?",
        moznosti: [
          "Délka je standardem omezena na 100 metrů",
          "Délka je omezena na pouhých 50 metrů",
          "Kabel může mít délku až 1000 metrů",
        ],
        spravna: 0,
      },
      {
        otazka: "Co jsou to Patch kabely?",
        moznosti: [
          "Páteřní kabely propojující dvě budovy",
          "Krátké kabely pro propojování v racku",
          "Kabely používané pro TV antény a satelit",
        ],
        spravna: 1,
      },
      {
        otazka: "Co se volí pro páteřní spoje budov?",
        moznosti: [
          "Hliníkové dráty s dobrou vodivostí",
          "Kroucená dvojlinka běžné kategorie 5",
          "Optická vlákna imunní vůči rušení EMI",
        ],
        spravna: 2,
      },
      {
        otazka: "Co znamená výšková jednotka 'U'?",
        moznosti: [
          "Udává výšku komponent v jednotce Rack Unit",
          "Jednotka udávající výšku v centimetrech",
          "Jednotka udávající výšku v pixelech webu",
        ],
        spravna: 0,
      },
      {
        otazka: "Jak vypadá maska prefixu /26?",
        moznosti: [
          "Maska zapsaná jako 255.255.0.0",
          "Maska zapsaná jako 255.255.255.192",
          "Maska zapsaná jako 255.255.255.0",
        ],
        spravna: 1,
      },
      {
        otazka: "Jak zjistím adresu sítě?",
        moznosti: [
          "Prostým součtem všech bajtů v adrese",
          "Podle posledního čísla v IP adrese hosta",
          "Binárním logickým součinem (IP AND Maska)",
        ],
        spravna: 2,
      },
      {
        otazka: "Co je adresa Broadcast?",
        moznosti: [
          "Adresa pro hromadné odesílání všem v síti",
          "Adresa prvního routeru v dané podsíti",
          "Označení pro záložní IP adresu serveru",
        ],
        spravna: 0,
      },
    ],
  },
  {
    id: 8,
    nazev: "8. Správa sítě",
    teorie: "DHCP (DORA), AD (DC), GPO (LSDOU), DNS (MX, CNAME, PTR).",
    kviz: [
      {
        otazka: "Jaká služba přiděluje IP adresy?",
        moznosti: [
          "SMTP (Simple Mail Transfer Protocol)",
          "DHCP (Dynamic Host Configuration Protocol)",
          "FTP (File Transfer Protocol)",
        ],
        spravna: 1,
      },
      {
        otazka: "Jak se nazývá proces získání IP?",
        moznosti: [
          "Zkratka ADSL používaná u pevných linek",
          "Zkratka SMTP pro odesílání e-mailů",
          "Zkratka DORA (čtyřfázová komunikace)",
        ],
        spravna: 2,
      },
      {
        otazka: "Co jsou to Skupinové politiky GPO?",
        moznosti: [
          "Nástroj pro hromadné nastavení stanic",
          "Nástroj pro správu DNS záznamů v síti",
          "Jednoduchý grafický nástroj Malování",
        ],
        spravna: 0,
      },
      {
        otazka: "V jakém pořadí se aplikují GPO?",
        moznosti: [
          "Řazení politik probíhá čistě abecedně",
          "Pořadí dle pravidla LSDOU (od lokální)",
          "Podle celkové velikosti souboru politiky",
        ],
        spravna: 1,
      },
      {
        otazka: "Jaký DNS záznam patří k poště?",
        moznosti: [
          "Záznam typu AAAA pro IPv6 adresu",
          "Záznam typu PTR pro reverzní překlad",
          "Záznam typu MX (Mail Exchange)",
        ],
        spravna: 2,
      },
      {
        otazka: "Co je to DHCP Lease?",
        moznosti: [
          "Doba, po kterou je IP adresa zapůjčena",
          "Pravidelný poplatek za provoz serveru",
          "Nutnost restartovat počítač při chybě",
        ],
        spravna: 0,
      },
      {
        otazka: "K čemu slouží DNS záznam CNAME?",
        moznosti: [
          "K silnému šifrování databáze na webu",
          "Funguje jako Alias (přezdívka názvu)",
          "K mazání historie navštívených webů",
        ],
        spravna: 1,
      },
      {
        otazka: "Jak se dělí struktura v AD?",
        moznosti: [
          "Skládá se z listů, větví a kořenů sítě",
          "Skládá se ze stránek a jejich podstránek",
          "Z domén, které tvoří stromy a lesy",
        ],
        spravna: 2,
      },
      {
        otazka: "Co je princip 'Least privilege'?",
        moznosti: [
          "Uživatel má jen ta nejnižší nutná práva",
          "Každý uživatel musí být administrátor",
          "Uživatel má zakázáno číst jakékoli soubory",
        ],
        spravna: 0,
      },
      {
        otazka: "K čemu slouží reverzní záznam PTR?",
        moznosti: [
          "Otáčí barvy na připojeném monitoru",
          "Překládá IP adresu zpět na jméno stroje",
          "Blokuje spammery ze zahraničních domén",
        ],
        spravna: 1,
      },
      {
        otazka: "Jak vynutit GPO v příkazovém řádku?",
        moznosti: [
          "Použitím příkazu ping 127.0.0.1 v CMD",
          "Příkazem format C: pro smazání dat",
          "Příkazem gpupdate s parametrem /force",
        ],
        spravna: 2,
      },
      {
        otazka: "Co jsou to FSMO role?",
        moznosti: [
          "Speciální role řadičů v lese AD",
          "Servery určené pouze pro vedení firmy",
          "Služby běžící výhradně v kořenové zóně",
        ],
        spravna: 0,
      },
      {
        otazka: "Co je rekurzivní DNS dotaz?",
        moznosti: [
          "Odpoví na dotaz chybovou hláškou 404",
          "Server sám dohledá výsledek v internetu",
          "Dotaz odeslaný na připojenou tiskárnu",
        ],
        spravna: 1,
      },
      {
        otazka: "Proč používat Doménové účty?",
        moznosti: [
          "Protože lokální účty neumí češtinu v OS",
          "Doménový účet nevyžaduje žádné heslo",
          "Umožňují přihlášení k libovolnému PC",
        ],
        spravna: 2,
      },
      {
        otazka: "Co kontroluje datový tok v síti?",
        moznosti: [
          "Aktivní Firewall s pravidly pro provoz",
          "Běžný switch v lokální počítačové síti",
          "Pasivní hub bez inteligentní správy sítě",
        ],
        spravna: 0,
      },
    ],
  },
  {
    id: 9,
    nazev: "9. Paměti PC a datová úložiště",
    teorie:
      "Volatilní (RAM, Cache), Nevolatilní (HDD, SSD). DRAM (refresh), SRAM (fast). SSD (Flash, MLC/TLC, Wear leveling). NTFS (žurnálování).",
    kviz: [
      {
        otazka: "Která paměť je VOLATILNÍ?",
        moznosti: [
          "Pevný HDD disk s magnetickými plotnami",
          "Operační paměť RAM (po vypnutí se smaže)",
          "Flash disk připojený k portu USB",
        ],
        spravna: 1,
      },
      {
        otazka: "V čem spočívá princip DRAM?",
        moznosti: [
          "Dokáže se fyzicky přesouvat po desce PC",
          "Sama si mění kapacitu podle potřeby CPU",
          "Náboj uniká a vyžaduje neustálý refresh",
        ],
        spravna: 2,
      },
      {
        otazka: "Proč jsou SSD rychlejší než HDD?",
        moznosti: [
          "Neobsahují mechanické pohyblivé části",
          "Mají tlustší datový kabel k desce",
          "Točí se rychlostí 50 000 otáček za minutu",
        ],
        spravna: 0,
      },
      {
        otazka: "Co je největší slabinou Flash buněk?",
        moznosti: [
          "Jsou náchylné na rušení magnetem v okolí",
          "Mají omezený počet možných přepisů (P/E)",
          "Jsou příliš těžké pro dnešní notebooky",
        ],
        spravna: 1,
      },
      {
        otazka: "Jaký souborový systém patří k Windows?",
        moznosti: [
          "Starý a neefektivní systém FAT16",
          "Systém EXT4 používaný v OS Linux",
          "Moderní systém NTFS s podporou práv",
        ],
        spravna: 2,
      },
      {
        otazka: "Jak funguje adresování LBA?",
        moznosti: [
          "Čísluje bloky disku lineárně od nuly",
          "Hledá data podle jména přihlášeného",
          "Čísluje sektory barevně pro diagnostiku",
        ],
        spravna: 0,
      },
      {
        otazka: "Co u HDD značí parametr rpm?",
        moznosti: [
          "Počet bitů přečtených za jednu vteřinu",
          "Rychlost rotace ploten za jednu minutu",
          "Životnost pevného disku v hodinách",
        ],
        spravna: 1,
      },
      {
        otazka: "Co je to 'Wear Leveling'?",
        moznosti: [
          "Funkce chránící notebook při pádu na zem",
          "Formátování disku na starý systém FAT32",
          "Algoritmus pro rovnoměrné drání buněk",
        ],
        spravna: 2,
      },
      {
        otazka: "Co udávají zkratky SLC, MLC, TLC?",
        moznosti: [
          "Udávají počet bitů v jedné Flash buňce",
          "Udávají fyzickou velikost disku v palcích",
          "Udávají maximální rychlost otáčení ploten",
        ],
        spravna: 0,
      },
      {
        otazka: "Na jakém principu čtou CD a DVD?",
        moznosti: [
          "Na principu magnetické indukce čidel",
          "Odrazem laseru od pitů a plošek disku",
          "Na principu změny náboje kondenzátoru",
        ],
        spravna: 1,
      },
      {
        otazka: "Jakou barvu laseru má Blu-ray?",
        moznosti: [
          "Infračervený laser o vlnové délce 780 nm",
          "Červený laser o vlnové délce 650 nm",
          "Modrofialový laser o vlnové délce 405 nm",
        ],
        spravna: 2,
      },
      {
        otazka: "Co je to Virtuální paměť?",
        moznosti: [
          "Odkládání dat z RAM na pomalý HDD disk",
          "Záloha dat nahraná v cloudu v internetu",
          "Paměť ukrytá v klávesnici pro makra",
        ],
        spravna: 0,
      },
      {
        otazka: "K čemu slouží Žurnálování?",
        moznosti: [
          "Píše deníček chyb uživatele pro podporu",
          "Zabraňuje poškození FS při výpadku proudu",
          "Zvyšuje rychlost internetového připojení",
        ],
        spravna: 1,
      },
      {
        otazka: "Který protokol patří k SSD v M.2?",
        moznosti: [
          "Zastaralý standard IDE / PATA s kabelem",
          "Průmyslový standard SAS pro servery",
          "Rychlý standard NVMe běžící přes PCIe",
        ],
        spravna: 2,
      },
      {
        otazka: "Z čeho se vyrábí Cache procesoru?",
        moznosti: [
          "Z rychlých statických čipů typu SRAM",
          "Z pomalé a levné paměti typu DRAM",
          "Z mechanických ploten disku v procesoru",
        ],
        spravna: 0,
      },
    ],
  },
  {
    id: 10,
    nazev: "10. Antivirové servery, malware",
    teorie:
      "Malware: Virus (vkládá se), Červ (síť), Trojan (maskovaný), Ransomware (výkupné), Phishing (podvod). Ochrana: Signatury, Heuristika, Behaviorální analýza, Sandbox.",
    kviz: [
      {
        otazka: "Co je to obecně Malware?",
        moznosti: [
          "Fyzická chyba hardwarových komponent",
          "Software určený k zneužití systému",
          "Ochranný program instalovaný v systému",
        ],
        spravna: 1,
      },
      {
        otazka: "Jaký je rozdíl mezi Virem a Červem?",
        moznosti: [
          "Virus se v síti šíří mnohem pomaleji",
          "Mezi těmito pojmy není vůbec žádný rozdíl",
          "Červ se šíří automaticky bez hostitele",
        ],
        spravna: 2,
      },
      {
        otazka: "Co dělá Ransomware v počítači?",
        moznosti: [
          "Zašifruje data a požaduje výkupné",
          "Maže veškerá data operačního systému",
          "Zobrazuje v prohlížeči nevyžádané reklamy",
        ],
        spravna: 0,
      },
      {
        otazka: "Co je to Trojský kůň (Trojan)?",
        moznosti: [
          "Typ počítače vyrobený v Řecku pro školy",
          "Program maskovaný jako užitečná aplikace",
          "Nástroj určený pro bezpečnou obnovu hesel",
        ],
        spravna: 1,
      },
      {
        otazka: "K čemu útočníci využívají Botnet?",
        moznosti: [
          "K těžbě dat pro potřeby státní policie",
          "K vytvoření ochranné firemní sítě LAN",
          "K provádění masivních DDoS útoků ze sítě",
        ],
        spravna: 2,
      },
      {
        otazka: "Jak funguje technika Phishing?",
        moznosti: [
          "Lákáním hesel přes podvodné e-maily",
          "Instalací viru přes infikovaný USB port",
          "Fyzickou krádeží firemního serveru z racku",
        ],
        spravna: 0,
      },
      {
        otazka: "Co je to Fileless malware?",
        moznosti: [
          "Typ malwaru, který v systému neexistuje",
          "Škodlivý kód běžící pouze v paměti RAM",
          "Škodlivý kód ukrytý na starých disketách",
        ],
        spravna: 1,
      },
      {
        otazka: "Jak pracuje Rezidentní ochrana?",
        moznosti: [
          "Spouští se pouze jako plánovaný noční scan",
          "Kontroluje pouze příchozí poštu v Outlooku",
          "Kontroluje soubory přesně při přístupu k nim",
        ],
        spravna: 2,
      },
      {
        otazka: "Co je Heuristická analýza?",
        moznosti: [
          "Hledá viry na základě podezřelých znaků",
          "Kontroluje sériová čísla pevných disků",
          "Smaže disk při jakémkoliv náznaku chyby",
        ],
        spravna: 0,
      },
      {
        otazka: "Co znamená termín Sandbox?",
        moznosti: [
          "Hraní grafických her v rámci systému",
          "Izolované prostředí pro spuštění souborů",
          "Pískoviště určené pro bezpečné mazání dat",
        ],
        spravna: 1,
      },
      {
        otazka: "K čemu slouží Mirror server?",
        moznosti: [
          "Odráží veškeré DDoS útoky hackerů z webu",
          "Slouží jako záloha veškerých uživatelských dat",
          "Lokálně distribuuje aktualizace signatur",
        ],
        spravna: 2,
      },
      {
        otazka: "První krok při napadení Ransomwarem?",
        moznosti: [
          "Okamžitě odpojit infikované PC od sítě",
          "Zálohovat všechna data na připojené USB",
          "Restartovat počítač do nouzového režimu",
        ],
        spravna: 0,
      },
      {
        otazka: "Co je to destruktivní Wiper?",
        moznosti: [
          "Antivirus určený pro mobilní telefony",
          "Malware, který má za cíl zničit veškerá data",
          "Program na čištění monitorů od prachu",
        ],
        spravna: 1,
      },
      {
        otazka: "Nejlepší prevence proti Ransomwaru?",
        moznosti: [
          "Nákup co nejsilnějšího procesoru od Intelu",
          "Vypínání monitoru při odchodu od počítače",
          "Pravidelné offline zálohování dat 3-2-1",
        ],
        spravna: 2,
      },
      {
        otazka: "Co udělat s infikovaným systémem?",
        moznosti: [
          "Provést čistou reinstalaci celého systému",
          "Smazat internetový prohlížeč z plochy",
          "Smazat pouze soubor viru a pracovat dál",
        ],
        spravna: 0,
      },
    ],
  },
  {
    id: 11,
    nazev: "11. Virtuální server, DNS, Active Directory",
    teorie:
      "Hypervizor (Typ 1 bare-metal, Typ 2 hosted). DNS (překlad názvů, A, CNAME, MX). AD (domény, stromy, lesy, OU, Kerberos).",
    kviz: [
      {
        otazka: "Co dělá v síti Hypervizor?",
        moznosti: [
          "Chladí přehřáté procesory serverů v racku",
          "Vytváří a řídí provoz virtuálních strojů",
          "Zrychluje připojení k internetu o desítky %",
        ],
        spravna: 1,
      },
      {
        otazka: "Rozdíl mezi Typem 1 a Typem 2?",
        moznosti: [
          "Hypervizor Typu 2 je mnohem dražší na webu",
          "Typ 1 funguje výhradně pro systém Linux",
          "Typ 1 běží na HW, Typ 2 běží uvnitř OS",
        ],
        spravna: 2,
      },
      {
        otazka: "Jaký je každodenní úkol DNS?",
        moznosti: [
          "Překládá doménová jména na IP adresy",
          "Zajišťuje silné šifrování dat v celé síti",
          "Přiděluje automaticky adresy přes DHCP",
        ],
        spravna: 0,
      },
      {
        otazka: "K čemu slouží DNS záznam CNAME?",
        moznosti: [
          "Pro IPv6 adresy v rámci celého internetu",
          "Funguje jako alias pro jiný doménový název",
          "Pro reverzní překlad adresy na jméno PC",
        ],
        spravna: 1,
      },
      {
        otazka: "Z čeho se skládá struktura AD?",
        moznosti: [
          "Skládá se z listů, větví a kořenů v lese",
          "Z řadičů, databázových tabulek a relací",
          "Z domén, které tvoří stromy a lesy s OU",
        ],
        spravna: 2,
      },
      {
        otazka: "Co je to Virtuální stroj (VM)?",
        moznosti: [
          "Izolovaná softwarová kopie celého počítače",
          "Počítač, který existuje jen ve sci-fi hře",
          "Označení pro obrovský sálový počítač IBM",
        ],
        spravna: 0,
      },
      {
        otazka: "Co je iterativní dotaz DNS?",
        moznosti: [
          "Ignoruje klienta a vůbec mu neodpoví",
          "Server pošle odkaz na nadřazený server",
          "Server sám najde celou cestu v internetu",
        ],
        spravna: 1,
      },
      {
        otazka: "Jaký záznam patří k IPv4 webu?",
        moznosti: [
          "Poštovní MX záznam pro server firmy",
          "Záznam SOA určující autoritu pro zónu",
          "Záznam typu 'A' směřující na adresu IP",
        ],
        spravna: 2,
      },
      {
        otazka: "Který port a protokol patří DNS?",
        moznosti: [
          "Port 53 a rychlý nespojovaný protokol UDP",
          "Port 80 a protokol pro webové stránky HTTP",
          "Port 21 a protokol pro přenos souborů FTP",
        ],
        spravna: 0,
      },
      {
        otazka: "K čemu slouží VM Snapshot?",
        moznosti: [
          "Zkopíruje veškerá data na externí flashku",
          "Vytvoří časový otisk stavu VM pro návrat",
          "Zrychlí procesor při nebezpečné instalaci",
        ],
        spravna: 1,
      },
      {
        otazka: "Co je to Konsolidace serverů?",
        moznosti: [
          "Nákup nových serverů pro každou aplikaci",
          "Připojení serverů na silnější chlazení v sále",
          "Běh mnoha VM na jednom silném HW stroji",
        ],
        spravna: 2,
      },
      {
        otazka: "Co je to Domain Controller (DC)?",
        moznosti: [
          "Server Windows hostující databázi AD",
          "DNS server přidělující názvy stanicím v síti",
          "DHCP server pro dynamickou konfiguraci IP",
        ],
        spravna: 0,
      },
      {
        otazka: "K čemu slouží jednotky OU v AD?",
        moznosti: [
          "Složky na sdíleném disku pro zaměstnance",
          "Kontejnery pro třídění objektů a aplikaci GPO",
          "Zajišťují tisk dokumentů v celé budově",
        ],
        spravna: 1,
      },
      {
        otazka: "Co je to AD Les (Forest)?",
        moznosti: [
          "Označení pro hlavní doménu v rámci firmy",
          "Zóna v DNS pro nejvyšší úrovně domén webu",
          "Nejvyšší logická úroveň sdružující domény",
        ],
        spravna: 2,
      },
      {
        otazka: "Jaký protokol řeší SSO v doméně?",
        moznosti: [
          "Protokol Kerberos využívající bezpečné tikety",
          "Protokol SMTP pro odesílání pošty do sítě",
          "Protokol ICMP pro testování odezvy sítě",
        ],
        spravna: 0,
      },
    ],
  },
  {
    id: 12,
    nazev: "12. Databázové servery a Mail servery",
    teorie:
      "SQL (relační tabulky). SMTP (send), IMAP (sync), POP3 (download & delete). Exchange (Groupware, ActiveSync, OWA).",
    kviz: [
      {
        otazka: "Jaký jazyk ovládá databáze?",
        moznosti: [
          "Jazyk HTML pro tvorbu struktury webů",
          "Jazyk SQL pro kladení dotazů a správu dat",
          "Jazyk C++ pro vývoj systémových aplikací",
        ],
        spravna: 1,
      },
      {
        otazka: "Výhoda DB serveru oproti souboru?",
        moznosti: [
          "Databázový server je pro uživatele zdarma",
          "Mezi těmito systémy není vůbec žádný rozdíl",
          "Provádí výpočty sám a vrací jen výsledek",
        ],
        spravna: 2,
      },
      {
        otazka: "Který protokol maily odesílá?",
        moznosti: [
          "Protokol SMTP pro odeslání zprávy na server",
          "Protokol IMAP pro synchronizaci složek",
          "Protokol POP3 pro stahování zpráv do PC",
        ],
        spravna: 0,
      },
      {
        otazka: "Který protokol maily synchronizuje?",
        moznosti: [
          "Protokol POP3 stahující data lokálně",
          "Protokol IMAP ponechávající zprávy na serveru",
          "Protokol FTP určený k přenosu souborů",
        ],
        spravna: 1,
      },
      {
        otazka: "Co je to Microsoft Exchange?",
        moznosti: [
          "Webový server IIS pro hostování stránek",
          "Databázový server SQL pro ukládání dat",
          "Poštovní a groupwarový server pro firmy",
        ],
        spravna: 2,
      },
      {
        otazka: "Jak funguje Relační databáze?",
        moznosti: [
          "Ukládá data do propojených tabulek",
          "Ukládá data náhodně v textovém souboru",
          "Ukládá veškerá data do stromových složek",
        ],
        spravna: 0,
      },
      {
        otazka: "Co je to Outlook Anywhere?",
        moznosti: [
          "Instalace balíku Office bez licenčního klíče",
          "Vzdálený přístup k Outlooku přes HTTPS",
          "Odesílání klasických papírových dopisů poštou",
        ],
        spravna: 1,
      },
      {
        otazka: "Proč se POP3 už téměř nepoužívá?",
        moznosti: [
          "Je příliš složitý na základní nastavení",
          "Je vázán velmi přísnými autorskými právy",
          "Maily z PC stáhne a na serveru je smaže",
        ],
        spravna: 2,
      },
      {
        otazka: "K čemu je Edge Transport Server?",
        moznosti: [
          "Funguje jako čistící štít v DMZ zóně",
          "Zálohuje veškeré databáze na pásky v IT",
          "Rozdává nové IP adresy všem zařízením",
        ],
        spravna: 0,
      },
      {
        otazka: "Co je to Exchange ActiveSync?",
        moznosti: [
          "Typ připojení k internetu přes Bluetooth",
          "Protokol pro reálnou synchronizaci mobilů",
          "Protokol SMB pro sdílení souborů v síti",
        ],
        spravna: 1,
      },
      {
        otazka: "Co znamená zkratka OWA?",
        moznosti: [
          "Označení chyby při odesílání emailu v síti",
          "Systém určený k rozesílání hromadné reklamy",
          "Webové rozhraní pro poštu v prohlížeči",
        ],
        spravna: 2,
      },
      {
        otazka: "Co dělá Mailbox Server role?",
        moznosti: [
          "Hostuje databáze se zprávami uživatelů",
          "Zajišťuje pouze připojení mobilních telefonů",
          "Zajišťuje překlad adres pro zbytek sítě",
        ],
        spravna: 0,
      },
      {
        otazka: "Co je Hierarchická databáze?",
        moznosti: [
          "Data nejsou strukturovaná, je to jen změť",
          "Data jsou ve struktuře rodokmenu (stromu)",
          "K vyhledávání využívá algoritmy od Googlu",
        ],
        spravna: 1,
      },
      {
        otazka: "Autentizace MS SQL Serveru?",
        moznosti: [
          "Přihlášení otiskem prstu a skenem sítnice",
          "Žádná, systém běží vždy zcela bez hesel",
          "Windows Authentication nebo SQL Login",
        ],
        spravna: 2,
      },
      {
        otazka: "Jaký program spravuje SQL?",
        moznosti: [
          "SQL Server Management Studio (SSMS)",
          "Jednoduchý tabulkový procesor Microsoft Excel",
          "Kancelářský databázový nástroj MS Access",
        ],
        spravna: 0,
      },
    ],
  },
];
