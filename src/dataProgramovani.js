export const programovaniData = [
  {
    id: 1,
    nazev: "13. Jednočipové procesory, procesory",
    teorie:
      "Procesor (CPU) je mozek zařízení. Pracuje ve 3 fázích: Načtení (Fetch), Dekódování (Decode) a Vykonání (Execute). Von Neumannova architektura používá společnou paměť pro data i instrukce (má úzké hrdlo). Harvardská architektura (např. Arduino) má paměti oddělené, což je rychlejší. RISC procesory (ARM, AVR) mají malý počet jednoduchých a rychlých instrukcí, zatímco CISC (Intel x86) používají komplexní instrukce. Arduino UNO využívá mikrokontrolér ATmega328P (RISC, Harvard).",
    kviz: [
      {
        otazka: "Která architektura má oddělenou paměť pro data a instrukce?",
        moznosti: [
          "Harvardská architektura",
          "Von Neumannova koncepce",
          "Turingův abstraktní model",
        ],
        spravna: 0,
      },
      {
        otazka: "Z jakých 3 fází se skládá strojový cyklus procesoru?",
        moznosti: [
          "Startování, Průběh a Zastavení",
          "Načtení, Dekódování a Vykonání příkazu",
          "Čtení, Zápis a Mazání dat z RAM",
        ],
        spravna: 1,
      },
      {
        otazka: "Co je to architektura RISC?",
        moznosti: [
          "Sada komplexních a vnitřně složitých instrukcí",
          "Architektura nevyužívající aritmetickou jednotku",
          "Sada jednoduchých a velmi rychlých instrukcí",
        ],
        spravna: 2,
      },
      {
        otazka:
          "Co typicky obsahuje mikrokontrolér oproti běžnému PC procesoru?",
        moznosti: [
          "CPU, paměť a periferie na jediném křemíkovém čipu",
          "Integrované vodní chlazení pro vysoký výkon",
          "Externí sloty pro přídavné grafické akcelerátory",
        ],
        spravna: 0,
      },
      {
        otazka:
          "Jakou architekturu využívá mikrokontrolér ATmega328P na Arduinu?",
        moznosti: [
          "Von Neumannovu koncepci a sadu CISC",
          "Harvardskou architekturu a sadu RISC",
          "Harvardskou architekturu a sadu CISC",
        ],
        spravna: 1,
      },
      {
        otazka: "Co znamená zkratka ALU uvnitř procesoru?",
        moznosti: [
          "Rozhraní pro analogové linkové úrovně napětí",
          "Automatický logický uzel pro správu sběrnice",
          "Jednotka pro aritmetické a logické operace",
        ],
        spravna: 2,
      },
      {
        otazka: "Co dělají vnitřní registry procesoru?",
        moznosti: [
          "Uchovávají dočasná data a výpočty přímo v CPU",
          "Zajišťují chlazení jádra při vysoké zátěži",
          "Zpracovávají grafický výstup pro monitor",
        ],
        spravna: 0,
      },
      {
        otazka: "K čemu slouží datová sběrnice?",
        moznosti: [
          "Přenáší adresy buněk do paměťového řadiče",
          "Zajišťuje přenos dat mezi CPU a periferiemi",
          "Generuje hodinový takt pro synchronizaci CPU",
        ],
        spravna: 1,
      },
      {
        otazka: "K čemu slouží tzv. Program Counter (Čítač instrukcí)?",
        moznosti: [
          "Odpočítává čas do ukončení aktuálního procesu",
          "Měří provozní teplotu procesoru v reálném čase",
          "Uchovává adresu příští instrukce k vykonání",
        ],
        spravna: 2,
      },
      {
        otazka: "Co je to Watchdog timer v mikrokontrolérech?",
        moznosti: [
          "Časovač pro automatický reset při záseku programu",
          "Systémové hodiny pro zobrazení času na displeji",
          "Ochranný obvod proti neoprávněnému kopírování dat",
        ],
        spravna: 0,
      },
      {
        otazka:
          "Jaký je hlavní rozdíl mezi pamětí RAM a ROM v mikrokontroléru?",
        moznosti: [
          "RAM je určená pro trvalé uložení celého kódu",
          "RAM je volatilní, zatímco ROM si data drží trvale",
          "ROM je rychlejší a slouží pro výpočty v reálném čase",
        ],
        spravna: 1,
      },
      {
        otazka: "Co vyjadřuje taktovací frekvence procesoru (v Hz)?",
        moznosti: [
          "Celkovou kapacitu vnitřní vyrovnávací paměti",
          "Maximální spotřebu elektrické energie v zátěži",
          "Počet hodinových impulsů za jednu sekundu",
        ],
        spravna: 2,
      },
      {
        otazka: 'Co znamená pojem "Přerušení" (Interrupt) u mikrokontrolérů?',
        moznosti: [
          "Pozastavení programu pro obsluhu urgentní události",
          "Zkrat na desce způsobující okamžité vypnutí čipu",
          "Odpojení od napájení při detekci přepětí v síti",
        ],
        spravna: 0,
      },
      {
        otazka: "Co je to EEPROM paměť v mikrokontroléru?",
        moznosti: [
          "Paměť určená výhradně pro čtení bez možnosti zápisu",
          "Paměť pro uložení nastavení, která se po vypnutí nesmaže",
          "Vyhrazená paměť pro zpracování grafických instrukcí",
        ],
        spravna: 1,
      },
      {
        otazka: "K čemu slouží sběrnice adresní?",
        moznosti: [
          "Přenáší řídicí signály pro sběrnici PCIe",
          "Přenáší binární data k výpočetní jednotce",
          "Určuje pozici v paměti pro čtení nebo zápis",
        ],
        spravna: 2,
      },
    ],
  },
  {
    id: 2,
    nazev: "14. Algoritmy a vývojové diagramy",
    teorie:
      "Algoritmus je přesný postup, jak vyřešit daný problém. Must mít 5 vlastností: Konečnost, Obecnost, Determinovanost, Výstup a Elementárnost. Vývojový diagram to graficky znázorňuje: Ovál je start/konec, obdélník je běžný příkaz, kosočtverec je podmínka. Základní struktury programu jsou sekvence, větvení a cykly.",
    kviz: [
      {
        otazka: 'Co znamená vlastnost algoritmu zvaná "Determinovanost"?',
        moznosti: [
          "Každý krok je jednoznačný a vede ke stejnému výsledku",
          "Algoritmus musí pracovat v nekonečné smyčce",
          "Algoritmus vyžaduje specifický operační systém",
        ],
        spravna: 0,
      },
      {
        otazka: "Který tvar se ve vývojovém diagramu používá pro podmínku?",
        moznosti: ["Obdélník", "Kosočtverec", "Oválný tvar"],
        spravna: 1,
      },
      {
        otazka:
          "Jak se nazývá struktura, kde příkazy následují jeden za druhým?",
        moznosti: ["Cyklické opakování", "Logické větvení", "Sekvenční řazení"],
        spravna: 2,
      },
      {
        otazka: 'Co znamená vlastnost "Konečnost" (Finitnost)?',
        moznosti: [
          "Algoritmus se musí zastavit po určitém počtu kroků",
          "Algoritmus Ize ukončit pouze vypnutím napájení PC",
          "Algoritmus vyžaduje pevnou velikost operační paměti",
        ],
        spravna: 0,
      },
      {
        otazka: "Jaký tvar se používá pro běžný výpočet nebo zpracování?",
        moznosti: ["Rovnoběžník", "Obdélník", "Kruhový tvar"],
        spravna: 1,
      },
      {
        otazka: 'Co označuje vlastnost "Hromadnost" (Obecnost) algoritmu?',
        moznosti: [
          "Algoritmus vyvíjí velký tým programátorů najednou",
          "Algoritmus vyžaduje extrémně velké množství paměti",
          "Algoritmus řeší celou skupinu úloh stejného typu",
        ],
        spravna: 2,
      },
      {
        otazka: 'Co znamená vlastnost algoritmu zvaná "Rezultativnost"?',
        moznosti: [
          "Algoritmus musí po konečném počtu kroků vydat výsledek",
          "Kód musí být napsán v moderním programovacím jazyce",
          "Algoritmus musí běžet vysokou výpočetní rychlostí",
        ],
        spravna: 0,
      },
      {
        otazka: "Jakým tvarem se značí začátek a konec algoritmu?",
        moznosti: ["Čtvercový tvar", "Ovál", "Kosočtverec"],
        spravna: 1,
      },
      {
        otazka: "Který tvar se používá pro Vstup a Výstup dat?",
        moznosti: ["Kosočtverec", "Kruhový tvar", "Rovnoběžník"],
        spravna: 2,
      },
      {
        otazka: 'K čemu slouží "Cykly" (Iterace) v algoritmu?',
        moznosti: [
          "K opakování části kódu na základě platné podmínky",
          "K definitivnímu zastavení celého běžícího programu",
          "K úplnému vymazání aktuální mezipaměti procesoru",
        ],
        spravna: 0,
      },
      {
        otazka: 'Co je to "Pseudokód"?',
        moznosti: [
          "Instrukční kód psaný přímo ve strojovém jazyce",
          "Srozumitelný zápis logiky pomocí lidského jazyka",
          "Zašifrovaný textový soubor s nejasným významem",
        ],
        spravna: 1,
      },
      {
        otazka:
          "Pokud se algoritmus dělí na dvě cesty podle pravdivosti, jde o:",
        moznosti: ["Sekvenční tok", "Cyklické provádění", "Větvení programu"],
        spravna: 2,
      },
      {
        otazka: "Jak spojujeme jednotlivé obrazce ve vývojovém diagramu?",
        moznosti: [
          "Směrovými šipkami",
          "Barevným rozlišením",
          "Číselným označením",
        ],
        spravna: 0,
      },
      {
        otazka: "Může mít geometrický tvar Kosočtverce více než dva výstupy?",
        moznosti: [
          "Ano, může mít libovolný počet výstupů",
          "Ne, podmínka má vždy právě dva výstupy",
          "Tento tvar nemá žádný standardní výstup",
        ],
        spravna: 1,
      },
      {
        otazka: "Je zápis algoritmu vývojovým diagramem vázán na jazyk C?",
        moznosti: [
          "Ano, je určen výhradně pro zápis v jazyce C",
          "Ano, používá se pouze při vývoji HTML stránek",
          "Ne, je to univerzální grafické vyjádření logiky",
        ],
        spravna: 2,
      },
    ],
  },
  {
    id: 3,
    nazev: "15. Algoritmy a C (Kompilace vs Interpretace)",
    teorie:
      "Jazyk C je kompilovaný – kód se nejdříve přeloží do spustitelného souboru. Je to rychlé, ale závislé na platformě. Jazyky jako JS jsou interpretované – překládají se řádek po řádku až za běhu.",
    kviz: [
      {
        otazka: "Jaký je rozdíl mezi zdrojovým a strojovým kódem?",
        moznosti: [
          "Zdrojový je pro člověka, strojový pro procesor",
          "Není v nich žádný funkční ani vizuální rozdíl",
          "Strojový kód se píše ručně v textovém editoru",
        ],
        spravna: 0,
      },
      {
        otazka: "Jak funguje kompilovaný jazyk (např. C)?",
        moznosti: [
          "Kód se interpretuje řádek po řádku během spuštění",
          "Celý kód se naráz přeloží do spustitelného souboru",
          "Program se nespouští, pouze se ukládá na disk",
        ],
        spravna: 1,
      },
      {
        otazka: "Který z těchto jazyků je typicky interpretovaný?",
        moznosti: ["Jazyk C", "Jazyk C++", "JavaScript"],
        spravna: 2,
      },
      {
        otazka: "Co je hlavní výhodou kompilovaných programů v C?",
        moznosti: [
          "Vysoká rychlost běhu díky přímému strojovému kódu",
          "Výrazně kratší zápis zdrojového kódu programu",
          "Schopnost běžet na hardwaru bez operačního systému",
        ],
        spravna: 0,
      },
      {
        otazka: 'Co je to "case-sensitive" vlastnost jazyka C?',
        moznosti: [
          "Ignorování prázdných znaků v kódu",
          "Rozlišování velkých a malých písmen",
          "Schopnost pracovat v chráněném režimu",
        ],
        spravna: 1,
      },
      {
        otazka: 'Co je to "Syntax error" (syntaktická chyba)?',
        moznosti: [
          "Chyba fyzického hardwaru počítače",
          "Chyba v logice celého algoritmu",
          "Chyba v zápisu pravidel daného jazyka",
        ],
        spravna: 2,
      },
      {
        otazka: 'Co se děje v Cčku ve fázi zvané "Linking" (Linkování)?',
        moznosti: [
          "Spojení objektových souborů do .exe souboru",
          "Připojení klientské stanice k internetu",
          "Odeslání kódu na tiskárnu k revizi",
        ],
        spravna: 0,
      },
      {
        otazka: "Jaká je nevýhoda kompilovaných jazyků v přenositelnosti?",
        moznosti: [
          "Představují vysoké bezpečnostní riziko",
          "Soubor .exe je vázán na konkrétní platformu",
          "Jsou příliš pomalé pro moderní systémy",
        ],
        spravna: 1,
      },
      {
        otazka: 'Co je to "Běhová chyba" (Runtime error)?',
        moznosti: [
          "Chybějící středník v textu kódu",
          "Pomalá odezva vnitřního procesoru",
          "Chyba nastalá až během běhu programu",
        ],
        spravna: 2,
      },
      {
        otazka: "K čemu slouží programům prostředí IDE?",
        moznosti: [
          "Sjednocení editoru a kompilátoru",
          "Správa relačních databází SQL",
          "Vytváření vektorové grafiky webu",
        ],
        spravna: 0,
      },
      {
        otazka: "Co dělá Debugger?",
        moznosti: [
          "Maže nepotřebné části kódu",
          "Umožňuje krokkování a hledání chyb",
          "Vypisuje texty na obrazovku PC",
        ],
        spravna: 1,
      },
      {
        otazka: "Co je to Assembler?",
        moznosti: [
          "Pokročilý grafický editor",
          "Vizuální blokové programování",
          "Nízkoúrovňový jazyk se zkratkami",
        ],
        spravna: 2,
      },
      {
        otazka: 'Jaký proces provádí "Interpret"?',
        moznosti: [
          "Vykonává zdrojový text přímo za běhu",
          "Vytváří samostatný .exe soubor",
          "Šifruje zdrojový text programu",
        ],
        spravna: 0,
      },
      {
        otazka: 'Co znamená "statické typování" v jazyce C?',
        moznosti: [
          "Typ proměnné se může v čase libovolně měnit",
          "Při deklaraci musíme napevno určit datový typ",
          "Datový typ se určuje automaticky kompilátorem",
        ],
        spravna: 1,
      },
      {
        otazka: "Který jazyk používá mezistupeň Bytový kód (Bytecode)?",
        moznosti: ["Jazyk C", "Jazyk HTML", "Jazyk Java"],
        spravna: 2,
      },
    ],
  },
  {
    id: 4,
    nazev: "16. JavaScript – algoritmy a cykly",
    teorie:
      "JavaScript využívá stejné struktury jako C. Cyklus 'for' (počet opakováni znám), 'while' (podmínka na začátku), 'do...while' (podmínka na konci). Proměnné let nebo const.",
    kviz: [
      {
        otazka: "Který cyklus použít, pokud známe počet opakování?",
        moznosti: ["Cyklus for", "Cyklus while", "Cyklus do...while"],
        spravna: 0,
      },
      {
        otazka: "V čem je unikátní cyklus 'do...while'?",
        moznosti: [
          "Cyklus nikdy nelze zastavit",
          "Tělo se provede vždy alespoň jednou",
          "Pracuje pouze s textovými řetězci",
        ],
        spravna: 1,
      },
      {
        otazka: "Jakými klíčovými slovy se tvoří proměnné v JS?",
        moznosti: ["Slova var a int", "Slova make a set", "Slova let a const"],
        spravna: 2,
      },
      {
        otazka: "Co se stane v 'while', pokud podmínka není splněna?",
        moznosti: [
          "Tělo cyklu se neprovede ani jednou",
          "Tělo cyklu proběhne právě jednou",
          "Celý program okamžitě spadne",
        ],
        spravna: 0,
      },
      {
        otazka: "Jak se v cyklu for zapisuje inkrementace?",
        moznosti: ["Zápis i**", "Zápis i++", "Zápis i + 1 = i"],
        spravna: 1,
      },
      {
        otazka: "Z jakých částí se skládá hlavička cyklu for?",
        moznosti: [
          "Proměnná, text a číslo",
          "Načtení, výpočet a tisk",
          "Inicializace, podmínka a změna",
        ],
        spravna: 2,
      },
      {
        otazka: "Co dělá klíčové slovo 'const'?",
        moznosti: [
          "Hodnotu nelze po přiřazení měnit",
          "Proměnná bude trvale skrytá",
          "Ukládá pouze desetinná čísla",
        ],
        spravna: 0,
      },
      {
        otazka: "Co se stane při vzniku nekonečného cyklu?",
        moznosti: [
          "Cyklus se ihned sám ukončí",
          "Program nebo prohlížeč zamrzne",
          "Proměnná se po 10 krocích smaže",
        ],
        spravna: 1,
      },
      {
        otazka: "K čemu slouží příkaz 'break'?",
        moznosti: [
          "Zpomaluje celkový běh programu",
          "Rozděluje obrazovku na poloviny",
          "Okamžitě a předčasně ukončí cyklus",
        ],
        spravna: 2,
      },
      {
        otazka: "K čemu slouží příkaz 'continue'?",
        moznosti: [
          "Přeskočí na další opakování cyklu",
          "Zabraňuje vypnutí celého počítače",
          "Pokračuje v běhu i po chybě kódu",
        ],
        spravna: 0,
      },
      {
        otazka: "Jaký je rozdíl mezi 'var' a 'let'?",
        moznosti: [
          "'let' platí pouze pro celá čísla",
          "'let' má omezenou blokovou platnost",
          "Mezi těmito slovy není žádný rozdíl",
        ],
        spravna: 1,
      },
      {
        otazka: "Co udělá operátor dekrementace (x--)?",
        moznosti: [
          "Vydělí hodnotu x přesně dvěma",
          "Smaže celou proměnnou z paměti",
          "Sníží hodnotu proměnné x o jedna",
        ],
        spravna: 2,
      },
      {
        otazka: "Jak se v JS zapisuje striktní rovnost?",
        moznosti: ["Symbol ===", "Symbol ==", "Symbol ="],
        spravna: 0,
      },
      {
        otazka: "Co znamená pojem 'vnořené cykly'?",
        moznosti: [
          "Cykly, které v kódu nefungují",
          "Jeden cyklus uvnitř těla druhého",
          "Cykly napsané na jednom řádku",
        ],
        spravna: 1,
      },
      {
        otazka: "Lze v JS měnit typ proměnné za běhu?",
        moznosti: [
          "Ne, program ihned zahlásí chybu typu",
          "Ano, ale pouze u proměnných 'const'",
          "Ano, JavaScript je dynamicky typovaný",
        ],
        spravna: 2,
      },
    ],
  },
  {
    id: 5,
    nazev: "17. Programovací jazyk C",
    teorie:
      "Standardní knihovna stdio.h, funkce main, bloky v {}, ukončení středníkem ;. Komentáře // nebo /* */.",
    kviz: [
      {
        otazka: "Kterou funkcí musí začínat každý program v C?",
        moznosti: ["Funkce main()", "Funkce start()", "Funkce run()"],
        spravna: 0,
      },
      {
        otazka: "K čemu slouží knihovna <stdio.h>?",
        moznosti: [
          "K renderování 3D herní grafiky",
          "K práci se standardním vstupem a výstupem",
          "K pokročilým matematickým operacím",
        ],
        spravna: 1,
      },
      {
        otazka: "Jakým znakem končí každý příkaz v C?",
        moznosti: ["Dvojtečkou (:)", "Tečkou (.)", "Středníkem (;)"],
        spravna: 2,
      },
      {
        otazka: "Do jakých závorek se v C uzavírá blok kódu?",
        moznosti: [
          "Složené závorky { }",
          "Hranaté závorky [ ]",
          "Kulaté závorky ( )",
        ],
        spravna: 0,
      },
      {
        otazka: "Co obvykle znamená příkaz 'return 0;'?",
        moznosti: [
          "Paměť byla zcela vymazána",
          "Program skončil úspěšně bez chyb",
          "Počítač se automaticky restartuje",
        ],
        spravna: 1,
      },
      {
        otazka: "Jak se tvoří jednořádkový komentář?",
        moznosti: ["Symbol #", "Symbol '", "Symbol //"],
        spravna: 2,
      },
      {
        otazka: "Jak se v C zapíše víceřádkový komentář?",
        moznosti: ["/* ... */", "<!- ... ->", '""" ... """'],
        spravna: 0,
      },
      {
        otazka: "K čemu slouží direktiva #include?",
        moznosti: [
          "Okamžitě vymaže text kódu",
          "Vloží obsah hlavičkového souboru",
          "Předčasně ukončí celý program",
        ],
        spravna: 1,
      },
      {
        otazka: "Jaká funkce vypisuje text na obrazovku?",
        moznosti: ["Funkce print()", "Funkce console.log()", "Funkce printf()"],
        spravna: 2,
      },
      {
        otazka: "K čemu slouží sekvence \\n?",
        moznosti: [
          "Zajistí odřádkování v textu",
          "Smaže jedno předchozí písmeno",
          "Vloží do textu písmeno n",
        ],
        spravna: 0,
      },
      {
        otazka: "Jaká funkce slouží pro načtení vstupu?",
        moznosti: ["Funkce input()", "Funkce scanf()", "Funkce getKeyboard()"],
        spravna: 1,
      },
      {
        otazka: "Jaký znak patří k typu int v printf?",
        moznosti: ["Znak %c", "Znak %f", "Znak %d"],
        spravna: 2,
      },
      {
        otazka: "Jaký znak patří k typu float v printf?",
        moznosti: ["Znak %f", "Znak %d", "Znak %s"],
        spravna: 0,
      },
      {
        otazka: "Jaký kompilátor je nejznámější pro C?",
        moznosti: ["Kompilátor Chrome V8", "Kompilátor GCC", "Kompilátor JVM"],
        spravna: 1,
      },
      {
        otazka: "Lze deklarovat proměnné mimo funkce?",
        moznosti: [
          "Ne, všechny musí být v main",
          "Ano, ale nelze je poté použít",
          "Ano, vzniknou globální proměnné",
        ],
        spravna: 2,
      },
    ],
  },
  {
    id: 6,
    nazev: "18. Jazyk C – podprogramy (funkce)",
    teorie:
      "Návratový typ, parametry, return, lokální vs globální proměnné. Předávání hodnotou vs odkazem (ukazatelem).",
    kviz: [
      {
        otazka: "Jak se nazývá proměnná deklarovaná v těle funkce?",
        moznosti: [
          "Lokální proměnná",
          "Globální proměnná",
          "Konstantní proměnná",
        ],
        spravna: 0,
      },
      {
        otazka: "Co dělá příkaz 'return'?",
        moznosti: [
          "Vrací program na začátek kódu",
          "Ukončí funkci a vrátí hodnotu",
          "Zcela vymaže operační paměť",
        ],
        spravna: 1,
      },
      {
        otazka: "Jaký návratový typ nic nevrací?",
        moznosti: ["Typ int", "Typ null", "Typ void"],
        spravna: 2,
      },
      {
        otazka: "Kde jsou deklarovány globální proměnné?",
        moznosti: [
          "Mimo všechny funkce v souboru",
          "Přímo v hlavní funkci main()",
          "V externím souboru stdio.h",
        ],
        spravna: 0,
      },
      {
        otazka: "Jaký je rozdíl mezi parametry?",
        moznosti: [
          "Mezi těmito pojmy není rozdíl",
          "Formální je v definici, skutečný v volání",
          "Formální mohou být pouze texty",
        ],
        spravna: 1,
      },
      {
        otazka: "Co je to hlavička funkce?",
        moznosti: [
          "Závěrečný řádek s příkazem return",
          "Úvodní komentář s popisem funkce",
          "Řádek s typem, názvem a parametry",
        ],
        spravna: 2,
      },
      {
        otazka: "Co znamená předávání hodnotou?",
        moznosti: [
          "Funkce dostane pouze kopii proměnné",
          "Funkce získá trvalý přístup k originálu",
          "Funkci lze poslat pouze kladné číslo",
        ],
        spravna: 0,
      },
      {
        otazka: "Jak trvale změnit původní proměnnou?",
        moznosti: [
          "Předáním přes textový řetězec",
          "Předáním adresy přes ukazatele",
          "Použitím statické lokální proměnné",
        ],
        spravna: 1,
      },
      {
        otazka: "K čemu v C slouží prototyp funkce?",
        moznosti: [
          "Je to záložní kopie celého kódu",
          "Slouží k automatickému mazání chyb",
          "Informuje kompilátor o existenci funkce",
        ],
        spravna: 2,
      },
      {
        otazka: "Proč programátoři používají funkce?",
        moznosti: [
          "Zajišťují znovupoužitelnost kódu",
          "Aby se zpomalil celkový běh programu",
          "Vedou k rychlejšímu vyčerpání paměti",
        ],
        spravna: 0,
      },
      {
        otazka: "Lze přes return vrátit tři inty najednou?",
        moznosti: [
          "Ano, hodnoty se oddělují čárkou",
          "Ne, return vrací vždy jen jednu hodnotu",
          "Ano, ale pouze v rámci funkce main",
        ],
        spravna: 1,
      },
      {
        otazka: "Co je to rekurzivní funkce?",
        moznosti: [
          "Funkce postrádající návratový typ",
          "Speciální funkce pro výpis chyb",
          "Funkce, která volá samu sebe",
        ],
        spravna: 2,
      },
      {
        otazka: "Kam se ukládají lokální proměnné?",
        moznosti: [
          "Do paměťové struktury Zásobník",
          "Na fyzický pevný disk počítače",
          "Vždy se přepíší předchozí data",
        ],
        spravna: 0,
      },
      {
        otazka: "Návratový typ pro desetinné číslo?",
        moznosti: [
          "Návratový typ void",
          "Návratový typ float",
          "Návratový typ int",
        ],
        spravna: 1,
      },
      {
        otazka: "Jsou globální proměnné vždy bezpečné?",
        moznosti: [
          "Ano, jde o nejlepší možnou praxi",
          "Závisí to na teplotě procesoru PC",
          "Ne, hrozí nechtěné přepsání stavu",
        ],
        spravna: 2,
      },
    ],
  },
  {
    id: 7,
    nazev: "19. Jazyk C – podmínky a větvení",
    teorie:
      "if/else, switch, relační operátory (==, !=, >, <), logické operátory (&&, ||, !). scanf a znak &.",
    kviz: [
      {
        otazka: "Znak před proměnnou ve scanf?",
        moznosti: [
          "Symbol ampersandu (&)",
          "Symbol dolaru ($)",
          "Symbol hvězdičky (*)",
        ],
        spravna: 0,
      },
      {
        otazka: "Který operátor v C znamená test na rovnost?",
        moznosti: ["Symbol =", "Symbol ==", "Symbol ==="],
        spravna: 1,
      },
      {
        otazka: "Co znamená logický operátor ||?",
        moznosti: [
          "Logický součin AND",
          "Logická negace NOT",
          "Logický součet OR",
        ],
        spravna: 2,
      },
      {
        otazka: "Formátovací znak pro int v printf?",
        moznosti: ["Zápis %d", "Zápis %c", "Zápis %f"],
        spravna: 0,
      },
      {
        otazka: "Konstrukce pro test jedné proměnné na 10 hodnot?",
        moznosti: [
          "Sada 10 if za sebou",
          "Přepínač switch",
          "Použití while cyklu",
        ],
        spravna: 1,
      },
      {
        otazka: "Co znamená relační operátor !=?",
        moznosti: [
          "Hodnota je větší než",
          "Přiřazení hodnoty",
          "Hodnota se nerovná",
        ],
        spravna: 2,
      },
      {
        otazka: "Jak se v Cčku zapisuje logické AND?",
        moznosti: ["Zápis &&", "Zápis ||", "Zápis ++"],
        spravna: 0,
      },
      {
        otazka: "Která konstrukce patří k if?",
        moznosti: ["Příkaz break", "Příkaz else", "Příkaz default"],
        spravna: 1,
      },
      {
        otazka: "K čemu slouží break ve switch?",
        moznosti: [
          "Ukončení celého programu",
          "Vytvoření krátké pauzy",
          "Vyskočení z bloku switch",
        ],
        spravna: 2,
      },
      {
        otazka: "K čemu slouží default ve switch?",
        moznosti: [
          "Větev pro ostatní hodnoty",
          "Resetování počítače",
          "Okamžité vypnutí proudu",
        ],
        spravna: 0,
      },
      {
        otazka: "Jak C chápe pravdivost v podmínce?",
        moznosti: [
          "Používá texty true a false",
          "Číslo 0 je false, ostatní true",
          "Pravdivost vůbec nechápe",
        ],
        spravna: 1,
      },
      {
        otazka: "Co způsobí operátor ! před podmínkou?",
        moznosti: [
          "Smaže aktuální proměnnou",
          "Způsobí chybu kompilace",
          "Provede logickou negaci",
        ],
        spravna: 2,
      },
      {
        otazka: "Co se stane při zápisu if (a = 5)?",
        moznosti: [
          "Provede se přiřazení pětky",
          "Proběhne správné porovnání",
          "Program okamžitě spadne",
        ],
        spravna: 0,
      },
      {
        otazka: "Lze uvnitř if napsat další if?",
        moznosti: [
          "Ne, to je v C zakázáno",
          "Ano, vnoření je povolené",
          "Ano, ale maximálně jedno",
        ],
        spravna: 1,
      },
      {
        otazka: "Jak funguje ternární operátor?",
        moznosti: [
          "Vypočítá 3D souřadnice PC",
          "Dělí proměnnou třemi",
          "Je to zkrácený zápis if-else",
        ],
        spravna: 2,
      },
    ],
  },
  {
    id: 8,
    nazev: "20. Jazyk C – Datové typy, proměnné, výrazy a operátory",
    teorie: "int, float, char, double. Modulo %, unární ++, --, ternární ?:.",
    kviz: [
      {
        otazka: "Jaký typ v C lze přesně seřadit?",
        moznosti: [
          "Celočíselný typ int",
          "Desetinný typ float",
          "Prázdný typ void",
        ],
        spravna: 0,
      },
      {
        otazka: "Klíčové slovo 'const' znamená:",
        moznosti: [
          "Sdílení v lokální síti",
          "Hodnotu už nelze měnit",
          "Proměnná se pořád mění",
        ],
        spravna: 1,
      },
      {
        otazka: "Typ pro uložení hodnoty 3.14?",
        moznosti: ["Typ int", "Typ char", "Typ float"],
        spravna: 2,
      },
      {
        otazka: "Kolik operandů má ternární operátor?",
        moznosti: ["Právě tři", "Právě jedna", "Právě dva"],
        spravna: 0,
      },
      {
        otazka: "Co udělá unární operátor x++?",
        moznosti: [
          "Zdvojnásobí hodnotu x",
          "Zvýší hodnotu x o jedna",
          "Odečte od hodnoty x jedna",
        ],
        spravna: 1,
      },
      {
        otazka: "Typ pro uložení znaku (1 Byte)?",
        moznosti: ["Typ string", "Typ int", "Typ char"],
        spravna: 2,
      },
      {
        otazka: "Co matematicky dělá operátor %?",
        moznosti: [
          "Vrací zbytek po dělení",
          "Počítá procenta z celku",
          "Slouží k umocňování čísel",
        ],
        spravna: 0,
      },
      {
        otazka: "Typ pro vyšší přesnost než float?",
        moznosti: ["Typ long int", "Typ double", "Typ dual_float"],
        spravna: 1,
      },
      {
        otazka: "Co je to Typecasting?",
        moznosti: [
          "Úplné vymazání typu",
          "Překlepnutí v názvu",
          "Dočasná změna typu",
        ],
        spravna: 2,
      },
      {
        otazka: "K čemu slouží operátor sizeof?",
        moznosti: [
          "Zjištění velikosti v RAM",
          "Změna velikosti okna",
          "Měření délky řetězce",
        ],
        spravna: 0,
      },
      {
        otazka: "Co znamená operátor x += 5?",
        moznosti: [
          "Převede x na hodnotu 5",
          "Zkratka pro x = x + 5",
          "Chyba zápisu syntaxe",
        ],
        spravna: 1,
      },
      {
        otazka: "Co označuje slovo unsigned?",
        moznosti: [
          "Zákaz použití proměnné",
          "Ignorování znamének",
          "Pouze kladná čísla",
        ],
        spravna: 2,
      },
      {
        otazka: "Jak fungují bitové operátory?",
        moznosti: [
          "Operace s bity 0 a 1",
          "Jde o překlepy v kódu",
          "Připojení k internetu",
        ],
        spravna: 0,
      },
      {
        otazka: "Co je priorita operátorů?",
        moznosti: [
          "Náhodné vyhodnocování",
          "Pevné pořadí výpočtů",
          "Rychlost mazání dat",
        ],
        spravna: 1,
      },
      {
        otazka: "Proč je float někdy nepřesný?",
        moznosti: [
          "C neumí správně sčítat",
          "Čísla musí být celá",
          "Binární zaokrouhlování",
        ],
        spravna: 2,
      },
    ],
  },
  {
    id: 9,
    nazev: "21. Značkovací jazyk HTML",
    teorie: "Sémantické tagy, Box model, meta tagy, struktura head/body.",
    kviz: [
      {
        otazka: "Co dělá direktiva <!DOCTYPE html>?",
        moznosti: [
          "Definuje verzi HTML5",
          "Načítá externí JS",
          "Spravuje databáze",
        ],
        spravna: 0,
      },
      {
        otazka: "Kam se vkládají neviditelná metadata?",
        moznosti: ["Do tagu <footer>", "Do tagu <head>", "Do tagu <body>"],
        spravna: 1,
      },
      {
        otazka: "Rozdíl mezi Padding a Margin?",
        moznosti: [
          "Margin je uvnitř rámu",
          "Mezi nimi není rozdíl",
          "Padding je vnitřní výplň",
        ],
        spravna: 2,
      },
      {
        otazka: "Význam sémantických tagů?",
        moznosti: [
          "Definice významu obsahu",
          "Obarvení textů webu",
          "Provádění matematiky",
        ],
        spravna: 0,
      },
      {
        otazka: "Tag pro českou diakritiku?",
        moznosti: ["Tag <font lang>", "Tag <meta charset>", "Tag <czech>"],
        spravna: 1,
      },
      {
        otazka: "Co znamená zkratka HTML?",
        moznosti: [
          "Moderní vývojová logika",
          "Hlavní textový odkaz",
          "Značkovací jazyk webu",
        ],
        spravna: 2,
      },
      {
        otazka: "Který tag obaluje viditelný obsah?",
        moznosti: [
          "Párový tag <body>",
          "Párový tag <head>",
          "Párový tag <title>",
        ],
        spravna: 0,
      },
      {
        otazka: "Hierarchie tagů h1 až h6?",
        moznosti: [
          "Dny v pracovním týdnu",
          "Priorita nadpisů na webu",
          "Seznam tabulek dat",
        ],
        spravna: 1,
      },
      {
        otazka: "Tag pro odstavec textu?",
        moznosti: ["Nepárový tag <o>", "Nepárový tag <br>", "Párový tag <p>"],
        spravna: 2,
      },
      {
        otazka: "Rozdíl mezi block a inline?",
        moznosti: [
          "Blokové odřádkovávají",
          "Není v nich žádný rozdíl",
          "Inline nejdou stylovat",
        ],
        spravna: 0,
      },
      {
        otazka: "Atribut pro cíl odkazu?",
        moznosti: ["Atribut link", "Atribut href", "Atribut src"],
        spravna: 1,
      },
      {
        otazka: "Tag pro vytvoření odkazu?",
        moznosti: ["Párový tag <link>", "Párový tag <href>", "Párový tag <a>"],
        spravna: 2,
      },
      {
        otazka: "Z čeho se skládá Box Model?",
        moznosti: [
          "Z obsahu, okrajů a rámů",
          "Ze skla a z plastu",
          "Z výplně a z obsahu",
        ],
        spravna: 0,
      },
      {
        otazka: "K čemu slouží tag <title>?",
        moznosti: [
          "Velký nadpis na stránce",
          "Název webu v prohlížeči",
          "Spouštění online videa",
        ],
        spravna: 1,
      },
      {
        otazka: "Který tag je sémantický?",
        moznosti: [
          "Tag pro tučné písmo <b>",
          "Obecný kontejner <div>",
          "Tag pro článek <article>",
        ],
        spravna: 2,
      },
    ],
  },
  {
    id: 10,
    nazev: "22. Webová stránka, HTML (Formuláře a elementy)",
    teorie:
      "form, input, type (text, password, submit), placeholder, img src/alt, ul/ol/li.",
    kviz: [
      {
        otazka: "Rozdíl mezi párovými a nepárovými?",
        moznosti: [
          "Párové se musí ukončit",
          "Nepárové jsou zakázány",
          "Párové jdou jen po dvou",
        ],
        spravna: 0,
      },
      {
        otazka: "Atribut pro šedý nápovědný text?",
        moznosti: ["Atribut value", "Atribut placeholder", "Atribut help"],
        spravna: 1,
      },
      {
        otazka: "Proč u <img> vyplňovat 'alt'?",
        moznosti: [
          "Kvůli rozlišení pixelů",
          "Tvoří stín pod obrázkem",
          "Popis pro čtečky a SEO",
        ],
        spravna: 2,
      },
      {
        otazka: "Tag pro číslovaný seznam?",
        moznosti: ["Párový tag <ol>", "Párový tag <li>", "Párový tag <ul>"],
        spravna: 0,
      },
      {
        otazka: "Text v inputu typu password?",
        moznosti: [
          "Písmo je vždy červené",
          "Znaky jsou maskovány",
          "Počítač text nahlas čte",
        ],
        spravna: 1,
      },
      {
        otazka: "V čem odesílat data na server?",
        moznosti: [
          "Uvnitř tagu <table>",
          "Uvnitř tagu <div>",
          "Uvnitř tagu <form>",
        ],
        spravna: 2,
      },
      {
        otazka: "Co určuje atribut 'action'?",
        moznosti: [
          "URL adresu pro zpracování",
          "Celkovou rychlost webu",
          "Barvu celého formuláře",
        ],
        spravna: 0,
      },
      {
        otazka: "Typ inputu pro výběr více voleb?",
        moznosti: [
          'Zápis type="text"',
          'Zápis type="checkbox"',
          'Zápis type="radio"',
        ],
        spravna: 1,
      },
      {
        otazka: "Input pro výběr právě jedné volby?",
        moznosti: [
          'Zápis type="checkbox"',
          'Zápis type="button"',
          'Zápis type="radio"',
        ],
        spravna: 2,
      },
      {
        otazka: "Tagy pro rozbalovací roletku?",
        moznosti: [
          "Tag <select> a <option>",
          "Značka <menu>",
          "Samostatný tag <dropdown>",
        ],
        spravna: 0,
      },
      {
        otazka: "Tag pro odesílací tlačítko?",
        moznosti: [
          'Tag <input type="text">',
          'Tag <button type="submit">',
          "Párový tag <link>",
        ],
        spravna: 1,
      },
      {
        otazka: "K čemu slouží tag <label>?",
        moznosti: [
          "Slouží k tisku štítků",
          "Vytváří rámeček webu",
          "Textová popiska k poli",
        ],
        spravna: 2,
      },
      {
        otazka: "Jak zapsat položky seznamu?",
        moznosti: [
          "Obalit do tagu <li>",
          "Psát rovnou s čárkami",
          "Obalit do tagu <br>",
        ],
        spravna: 0,
      },
      {
        otazka: "Jak vizuálně zlomit řádek?",
        moznosti: ["Tag <enter>", "Tag <br>", "Tag <hr>"],
        spravna: 1,
      },
      {
        otazka: "Z čeho se skládá tabulka?",
        moznosti: ["Tagy grid a box", "Export z Excelu", "Tagy table, tr a td"],
        spravna: 2,
      },
    ],
  },
  {
    id: 11,
    nazev: "23. Webová stránka, HTML + CSS + JS",
    teorie:
      "HTML (cihly), CSS (vzhled), JS (logika). DOM, document.getElementById, .value, .style, querySelector, addEventListener.",
    kviz: [
      {
        otazka: "Jaké jsou role HTML, CSS a JS?",
        moznosti: [
          "HTML struktura, JS logika",
          "HTML logika, CSS barvy",
          "HTML vzhled, JS data",
        ],
        spravna: 0,
      },
      {
        otazka: "Výhoda externích souborů?",
        moznosti: [
          "Rychlejší běh procesoru",
          "Sdílení a přehlednost",
          "Je to zákonná povinnost",
        ],
        spravna: 1,
      },
      {
        otazka: "Tag pro připojení CSS souboru?",
        moznosti: ["Tag <style>", "Tag <css>", "Tag <link>"],
        spravna: 2,
      },
      {
        otazka: "Metoda pro hledání prvku dle ID?",
        moznosti: ["document.getElementById", "window.findId", "body.get"],
        spravna: 0,
      },
      {
        otazka: "Vlastnost pro text v inputu?",
        moznosti: [
          "Vlastnost .text",
          "Vlastnost .value",
          "Vlastnost .innerHtml",
        ],
        spravna: 1,
      },
      {
        otazka: "Tag pro připojení JS souboru?",
        moznosti: ["Tag <link>", "Tag <js>", "Tag <script>"],
        spravna: 2,
      },
      {
        otazka: "Co znamená zkratka DOM?",
        moznosti: [
          "Stromová reprezentace webu",
          "Data Object Machine",
          "Doména celého webu",
        ],
        spravna: 0,
      },
      {
        otazka: "Zápis ID a třídy v CSS?",
        moznosti: ["Třída # a ID .", "Třída . a ID #", "Obě písmeny"],
        spravna: 1,
      },
      {
        otazka: "K čemu slouží událost onclick?",
        moznosti: [
          "Zjišťování reálného času",
          "Zavírání okna webu",
          "Reakce na kliknutí myší",
        ],
        spravna: 2,
      },
      {
        otazka: "Vlastnost pro text v nadpisu?",
        moznosti: [
          "Vlastnost .innerHTML",
          "Vlastnost .value",
          "Vlastnost .changeText",
        ],
        spravna: 0,
      },
      {
        otazka: "Může JS měnit CSS barvu?",
        moznosti: [
          "Ne, barvy ovlivní jen CSS",
          "Ano, přes vlastnost .style",
          "Ano, ale jen po stisku F5",
        ],
        spravna: 1,
      },
      {
        otazka: "K čemu slouží querySelector?",
        moznosti: [
          "Hledání v databázi",
          "Výpis textu do konzole",
          "Hledání dle CSS selektoru",
        ],
        spravna: 2,
      },
      {
        otazka: "Jak moderně napojit akci?",
        moznosti: [
          "Metoda addEventListener",
          "Psát kód přímo do HTML",
          "Nepoužívat žádná tlačítka",
        ],
        spravna: 0,
      },
      {
        otazka: "K čemu slouží console.log?",
        moznosti: [
          "K tisku na papír A4",
          "K debugování a zprávám",
          "K ukládání všech hesel",
        ],
        spravna: 1,
      },
      {
        otazka: "Jak fungují události?",
        moznosti: [
          "Běží samy od sebe",
          "Přichází z databáze",
          "JS 'poslouchá' prohlížeč",
        ],
        spravna: 2,
      },
    ],
  },
  {
    id: 12,
    nazev: "24. Jazyk C – Složenější datové typy",
    teorie:
      "Pole (array), indexování od 0. Textové řetězce char[]. Ukazatele (pointery), malloc (heap), string.h.",
    kviz: [
      {
        otazka: "Index prvního prvku v poli?",
        moznosti: ["Index s číslem 0", "Index s číslem 1", "Index s číslem -1"],
        spravna: 0,
      },
      {
        otazka: "Jak se v C řeší řetězce?",
        moznosti: [
          "Typem 'string'",
          "Polem znaků char[]",
          "Datovým typem float",
        ],
        spravna: 1,
      },
      {
        otazka: "Co je na konci řetězce?",
        moznosti: ["Znak tečky (.)", "Znak klávesy Enter", "Nulový znak (\\0)"],
        spravna: 2,
      },
      {
        otazka: "Co uchovává ukazatel?",
        moznosti: [
          "Paměťovou adresu v RAM",
          "Obrázek kurzoru myši",
          "Celočíselnou konstantu",
        ],
        spravna: 0,
      },
      {
        otazka: "Lze do int pole dát floaty?",
        moznosti: [
          "Ano, pole se přizpůsobí",
          "Ne, pole je homogenní",
          "Lze to speciálně obejít",
        ],
        spravna: 1,
      },
      {
        otazka: "Deklarace pole o 5 prvcích?",
        moznosti: [
          "Zápis int znamky(5)",
          "Zápis array znamky = 5",
          "Zápis int znamky[5]",
        ],
        spravna: 2,
      },
      {
        otazka: "Jak vytvořit 2D pole (matici)?",
        moznosti: [
          "Zápis matice[5][5]",
          "Zápis matice[5, 5]",
          "Zápis matice = 5x5",
        ],
        spravna: 0,
      },
      {
        otazka: "Operátor pro získání adresy?",
        moznosti: [
          "Znak procenta (%)",
          "Znak ampersandu (&)",
          "Znak hvězdičky (*)",
        ],
        spravna: 1,
      },
      {
        otazka: "Operátor pro dereferenci?",
        moznosti: [
          "Znak ampersandu (&)",
          "Znak šipky (->)",
          "Znak hvězdičky (*)",
        ],
        spravna: 2,
      },
      {
        otazka: "Zápis mimo pole způsobuje:",
        moznosti: [
          "Přetečení a pád systému",
          "Automatické zvětšení",
          "Vynechání dané operace",
        ],
        spravna: 0,
      },
      {
        otazka: "Hlavička pro práci s textem?",
        moznosti: ["Knihovna math.h", "Knihovna string.h", "Knihovna text.h"],
        spravna: 1,
      },
      {
        otazka: "Co dělá funkce strlen?",
        moznosti: [
          "Vymaže celý text",
          "Spojí dva texty",
          "Zjistí délku řetězce",
        ],
        spravna: 2,
      },
      {
        otazka: "Co je aritmetika ukazatelů?",
        moznosti: [
          "Posun adresy o byty",
          "Umocňování adresy",
          "Zvyšování napětí",
        ],
        spravna: 0,
      },
      {
        otazka: "Ukazatel ukazující 'nikam'?",
        moznosti: ["Zápis VOID_POINTER", "Konstanta NULL", "Zápis ZERO_PTR"],
        spravna: 1,
      },
      {
        otazka: "Kde alokuje malloc?",
        moznosti: [
          "V rychlé Cache CPU",
          "V trvalé paměti ROM",
          "Na volné haldě (Heap)",
        ],
        spravna: 2,
      },
    ],
  },
  {
    id: 13,
    nazev: "25. JavaScript a moderní webové aplikace",
    teorie:
      "Události, DOM, frameworky (Vue, React), reaktivita, SPA, Virtual DOM, JSON.",
    kviz: [
      {
        otazka: "Co je to Událost (Event)?",
        moznosti: [
          "Reakce na akci uživatele",
          "Chyba na serveru",
          "Zpráva ze sítě",
        ],
        spravna: 0,
      },
      {
        otazka: "Co označuje zkratka DOM?",
        moznosti: [
          "Relační databáze",
          "Objektový model webu",
          "Doménu celého webu",
        ],
        spravna: 1,
      },
      {
        otazka: "Účel frameworků (Vue.js)?",
        moznosti: [
          "Tvorba 3D grafiky",
          "Pouze správa databází",
          "Zjednodušení aplikací",
        ],
        spravna: 2,
      },
      {
        otazka: "Co je to Reaktivita?",
        moznosti: [
          "Automatické překreslení",
          "Rychlost odezvy PC",
          "Svícení monitoru",
        ],
        spravna: 0,
      },
      {
        otazka: "Událost při kliknutí?",
        moznosti: ["Event onsubmit", "Event onclick", "Event onhover"],
        spravna: 1,
      },
      {
        otazka: "Co znamená zkratka SPA?",
        moznosti: [
          "Jeden fyzický server",
          "Obyčejný text webu",
          "Aplikace o jedné stránce",
        ],
        spravna: 2,
      },
      {
        otazka: "Jak zrychlit změnu DOMu?",
        moznosti: [
          "Použít Virtual DOM",
          "Kód nepoužívat",
          "Smazat veškeré CSS",
        ],
        spravna: 0,
      },
      {
        otazka: "Zápis proměnné do šablony?",
        moznosti: [
          "Zápis přes $promenna",
          "Zápis přes {{ promenna }}",
          "Zápis přes echo",
        ],
        spravna: 1,
      },
      {
        otazka: "Direktiva pro cyklus v HTML?",
        moznosti: ["Příkaz v-loop", "Příkaz v-array", "Příkaz v-for"],
        spravna: 2,
      },
      {
        otazka: "Direktiva pro podmínku?",
        moznosti: ["Příkaz v-if", "Příkaz v-showOnly", "Příkaz v-test"],
        spravna: 0,
      },
      {
        otazka: "Kam ve Vue psát funkce?",
        moznosti: ["Do sekce data()", "Do sekce methods", "Do sekce computed"],
        spravna: 1,
      },
      {
        otazka: "Co dělá příkaz v-model?",
        moznosti: [
          "Uložení dat do cloudu",
          "Kontrolu pravopisu",
          "Obousměrnou vazbu dat",
        ],
        spravna: 2,
      },
      {
        otazka: "Co je komponentový přístup?",
        moznosti: [
          "Skládání webu z částí",
          "Monolitický kód",
          "Lineární psaní kódu",
        ],
        spravna: 0,
      },
      {
        otazka: "Co dělá async a await?",
        moznosti: [
          "Zastaví celý prohlížeč",
          "Řeší asynchronní kód",
          "Stahuje viry z webu",
        ],
        spravna: 1,
      },
      {
        otazka: "Užitečný formát pro API?",
        moznosti: ["Formát dat XML", "Formát dat CSV", "Formát dat JSON"],
        spravna: 2,
      },
    ],
  },
];
