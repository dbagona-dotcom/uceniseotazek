export const maturitniData = {
  elektronika: [
    {
      id: 1,
      nazev: "1. Děliče napětí",
      teorie:
        "Dělič napětí slouží k rozdělení vstupního napětí na nižší výstupní v definovaném poměru. Nezatížený dělič je ideální případ, napětí je určeno čistě poměrem rezistorů. Zatížený dělič má paralelně připojenou zátěž, která sníží celkový odpor dolní části a výstupní napětí klesne. Děliče dělíme na frekvenčně nezávislé (tvořeny rezistory) a závislé (kondenzátory, cívky), jejichž reaktance se mění podle frekvence signálu.",
      kviz: [
        {
          otazka: "Z čeho je tvořen frekvenčně nezávislý dělič napětí?",
          moznosti: [
            "Pouze z kondenzátorů",
            "Pouze z rezistorů",
            "Z cívek a tranzistorů",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Co se stane s výstupním napětím u zatíženého děliče oproti nezatíženému?",
          moznosti: ["Klesne", "Stoupne", "Zůstane stejné"],
          spravna: 0,
        },
        {
          otazka: "Jak se nazývá dělič využívající kondenzátory?",
          moznosti: ["Induktivní", "Kapacitní", "Odporový"],
          spravna: 1,
        },
        {
          otazka: "Funguje frekvenčně nezávislý dělič i pro střídavý proud?",
          moznosti: [
            "Ano, funguje stejně pro DC i AC",
            "Ne, pouze pro stejnosměrný",
            "Ano, ale pouze s diodou",
          ],
          spravna: 0,
        },
        {
          otazka: "Proč se u frekvenčně závislého děliče mění dělicí poměr?",
          moznosti: [
            "Protože se mění teplota součástek",
            "Protože reaktance (zdánlivý odpor) se mění s frekvencí",
            "Protože napětí v síti kolísá",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Z jakého uzlu se teoreticky odebírá výstupní napětí u nezatíženého děliče?",
          moznosti: [
            "Přímo ze zdroje",
            "Z uzlu mezi dvěma rezistory",
            "Z uzemnění",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Co se stane s celkovým odporem dolní části děliče, když k němu připojíme zátěž?",
          moznosti: ["Sníží se", "Zvýší se", "Zůstane stejný"],
          spravna: 0,
        },
        {
          otazka: "Jak se nazývá frekvenčně závislý dělič využívající cívky?",
          moznosti: ["Kapacitní", "Induktivní", "Odporový"],
          spravna: 1,
        },
        {
          otazka:
            "K čemu lze s výhodou využít frekvenčně závislé děliče (např. RC články)?",
          moznosti: [
            "Jako zesilovače napětí",
            "Jako horní a dolní propusti (filtry)",
            "Jako transformátory",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Proč nelze použít nezatížený dělič napětí jako tvrdý napájecí zdroj pro obvod s proměnlivým odběrem?",
          moznosti: [
            "Protože by se se změnou odběru neustále měnilo i výstupní napětí",
            "Protože nepropouští střídavý proud",
            "Protože by okamžitě explodoval",
          ],
          spravna: 0,
        },
        {
          otazka:
            "Jaký je vztah mezi proudem a odpory u ideálního nezatíženého děliče?",
          moznosti: [
            "Proud teče jen přes horní rezistor",
            "Oběma rezistory protéká naprosto stejný proud",
            "Proud teče pouze do zátěže",
          ],
          spravna: 1,
        },
        {
          otazka: "Co je to potenciometr v kontextu tohoto tématu?",
          moznosti: [
            "Zesilovač výkonu",
            "Kapacitní dělič",
            "Plynule nastavitelný (mechanický) odporový dělič napětí",
          ],
          spravna: 2,
        },
        {
          otazka:
            "Může pasivní dělič napětí zvýšit vstupní napětí (např. z 5 V na 10 V)?",
          moznosti: [
            "Ano, pokud použijeme velké rezistory",
            "Ne, dělič může napětí pouze snížit",
            "Ano, ale jen u střídavého proudu",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Co se stane, pokud u nezatíženého odporového děliče budou mít oba rezistory (R1 i R2) naprosto stejnou hodnotu?",
          moznosti: [
            "Výstupní napětí bude přesnou polovinou vstupního napětí",
            "Výstupní napětí bude nulové",
            "Výstupní napětí bude stejné jako vstupní",
          ],
          spravna: 0,
        },
        {
          otazka:
            "Jaký vliv má volba velmi malých hodnot rezistorů u odporového děliče?",
          moznosti: [
            "Sníží se přesnost dělení",
            "Obvodem poteče velký proud a vznikne velká výkonová (tepelná) ztráta",
            "Zvýší se výstupní napětí",
          ],
          spravna: 1,
        },
      ],
    },
    {
      id: 2,
      nazev: "2. Usměrňovače a filtrace",
      teorie:
        "Střídavé napětí (AC) se používá v distribuční síti, ale elektronika vyžaduje stejnosměrné (DC). Jednocestný usměrňovač s jednou diodou propustí jen kladnou půlvlnu, což vede ke ztrátě poloviny energie. Můstkový (Graetzův) usměrňovač využívá čtyři diody a překlopí i zápornou půlvlnu, takže je efektivnější. Filtrace pulzujícího napětí se provádí kondenzátorem paralelně k výstupu, který se nabije a při poklesu napětí uvolní energii do obvodu.",
      kviz: [
        {
          otazka: "Kolik diod využívá Graetzův můstkový usměrňovač?",
          moznosti: ["Jednu", "Dvě", "Čtyři"],
          spravna: 2,
        },
        {
          otazka:
            "Co se stane se zápornou půlvlnou u jednocestného usměrňovače?",
          moznosti: [
            "Překlopí se do kladné",
            "Je odříznuta (ztracena)",
            "Zesílí se",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Jaká součástka se používá jako základní filtr za usměrňovačem?",
          moznosti: ["Tranzistor", "Zenerova dioda", "Kondenzátor"],
          spravna: 2,
        },
        {
          otazka: "Proč vůbec potřebujeme usměrňovače?",
          moznosti: [
            "Abychom zvýšili napětí",
            "Protože integrované obvody potřebují střídavé napětí",
            "Protože většina elektroniky vyžaduje stejnosměrné napětí (DC)",
          ],
          spravna: 2,
        },
        {
          otazka: "Co dělá kondenzátor během poklesu napětí z usměrňovače?",
          moznosti: [
            "Zkratuje obvod",
            "Uvolní nahromaděnou energii a pokles vykryje",
            "Otočí fázi signálu",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Proč se v distribuční síti používá primárně střídavé napětí (AC) a ne stejnosměrné?",
          moznosti: [
            "Protože je bezpečnější na dotyk",
            "Snadno se transformuje a přenáší na velké vzdálenosti s minimálními ztrátami",
            "Rychleji se pohybuje kabelem",
          ],
          spravna: 1,
        },
        {
          otazka: "Co přesně znamená termín 'pulzující stejnosměrné napětí'?",
          moznosti: [
            "Napětí, které pravidelně mění polaritu z plusu na minus",
            "Napětí, které nemění polaritu, ale jeho velikost kolísá od nuly k maximu",
            "Napětí čistě z baterie",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Jak se zapojuje základní filtrační kondenzátor vůči výstupu usměrňovače?",
          moznosti: [
            "Do série s usměrňovačem",
            "Paralelně k výstupu usměrňovače",
            "Před transformátor",
          ],
          spravna: 1,
        },
        {
          otazka: "Co udává parametr nazývaný 'činitel filtrace'?",
          moznosti: [
            "Rychlost nabíjení kondenzátoru",
            "Míru kvality vyhlazení napětí – čím je vyšší, tím je napětí hladší",
            "Propustný proud diodou",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Která součástka je naprostým základem pro stavbu jakéhokoliv usměrňovače?",
          moznosti: ["Polovodičová dioda", "Bipolární tranzistor", "Rezistor"],
          spravna: 0,
        },
        {
          otazka:
            "Jaký je hlavní rozdíl ve výsledku mezi jednocestným a dvojcestným můstkovým usměrňovačem?",
          moznosti: [
            "Můstkový je dvakrát pomalejší",
            "Můstkový využije i zápornou půlvlnu (překlopí ji do kladné), je mnohem efektivnější",
            "Jednocestný má menší zkreslení",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Mění dvoucestný usměrňovač (můstek) frekvenci pulzů na svém výstupu oproti síťovým 50 Hz?",
          moznosti: [
            "Ne, frekvence zůstává 50 Hz",
            "Ano, frekvence pulzů se zdvojnásobí na 100 Hz",
            "Ano, frekvence se sníží na 25 Hz",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Pokud bychom v audio zesilovači nepoužili za usměrňovačem žádnou filtraci, co by se stalo?",
          moznosti: [
            "Zesilovač by hrál čistěji a hlasitěji",
            "V reproduktorech by se ozýval silný síťový brum (vrčení)",
            "Zesilovač by nevyžadoval napájení",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Lze pro filtraci usměrněného napětí využít kromě kondenzátoru i jinou součástku?",
          moznosti: [
            "Ne, lze použít výhradně kondenzátor",
            "Ano, lze použít tlumivku (cívku) zapojenou v sérii",
            "Ano, Zenerovu diodu zapojenou v sérii",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Jaký parametr diod musíme kriticky hlídat při návrhu usměrňovače pro vysoká napětí?",
          moznosti: [
            "Špičkové závěrné napětí (aby nedošlo k průrazu diody v nepropustném směru)",
            "Kapacitu přechodu",
            "Barvu pouzdra součástky",
          ],
          spravna: 0,
        },
      ],
    },
    {
      id: 3,
      nazev: "3. Stabilizátory napětí",
      teorie:
        "Účelem stabilizátoru je poskytovat konstantní výstupní napětí nezávisle na kolísání sítě nebo změnách odběru zátěže. Moderní zpětnovazební stabilizátor porovnává referenční napětí ze Zenerovy diody se skutečným výstupem pomocí operačního zesilovače. Zjistí-li odchylku, pošle signál do regulačního tranzistoru, který rozdíl vyrovná. Kvalitu udává činitel stabilizace (poměr změny vstupu ku změně výstupu).",
      kviz: [
        {
          otazka: "Co je hlavním úkolem stabilizátoru?",
          moznosti: [
            "Eliminovat výkyvy napětí a poskytovat konstantní výstup",
            "Měnit stejnosměrný proud na střídavý",
            "Zesílit vstupní signál z mikrofonu",
          ],
          spravna: 0,
        },
        {
          otazka:
            "Jaká součástka v moderním stabilizátoru poskytuje pevné referenční napětí?",
          moznosti: ["Kondenzátor", "Zenerova dioda", "Cívka"],
          spravna: 1,
        },
        {
          otazka:
            "Co se stane, když obvod za stabilizátorem začne odebírat více proudu?",
          moznosti: [
            "Stabilizátor to vyrovná regulačním tranzistorem",
            "Napětí okamžitě klesne k nule",
            "Stabilizátor otočí fázi",
          ],
          spravna: 0,
        },
        {
          otazka: "Co vyjadřuje činitel stabilizace (S)?",
          moznosti: [
            "Rychlost vybíjení",
            "Poměr změny vstupního napětí ku změně výstupního napětí",
            "Maximální propustný proud",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Co se stane v ideálním stabilizátoru při kolísání sítě o 10 %?",
          moznosti: [
            "Výstup kolísá také o 10 %",
            "Výstup se zničí",
            "Výstup zůstane naprosto konstantní",
          ],
          spravna: 2,
        },
        {
          otazka:
            "Jaký vztah platí pro výpočet výkonové ztráty na sériovém regulačním tranzistoru stabilizátoru?",
          moznosti: [
            "P = Uin * Uout",
            "P = (Uin - Uout) * Iout",
            "P = Uout / Iin",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Co reálně hrozí regulačnímu tranzistoru ve stabilizátoru, pokud je rozdíl napětí mezi vstupem a výstupem velký a teče jím velký proud?",
          moznosti: [
            "Vytvoří se na něm námraza",
            "Začne kmitat jako oscilátor",
            "Přehřeje se a může se zničit (potřebuje chladič)",
          ],
          spravna: 2,
        },
        {
          otazka:
            "Pokud obvod (zátěž) začne odebírat větší proud, co má tendenci udělat napětí z nestabilizovaného zdroje?",
          moznosti: ["Klesat", "Stoupat", "Měnit se na střídavé"],
          spravna: 0,
        },
        {
          otazka:
            "K čemu slouží srovnávací člen (obvykle operační zesilovač) v moderním zpětnovazebním stabilizátoru?",
          moznosti: [
            "Zesiluje střídavou složku napětí",
            "Neustále porovnává skutečné napětí na výstupu s pevnou referencí",
            "Odpojuje zdroj při zkratu",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Jak se zachová běžný stabilizátor (např. obvod 7805 s výstupem 5V), pokud vstupní napětí klesne pod hranici 5V?",
          moznosti: [
            "Obvod 7805 si chybějící napětí sám vyrobí a zvýší ho",
            "Přestane fungovat a napětí na výstupu spadne pod 5V",
            "Začne propouštět střídavý proud",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Co v praxi znamená pojem 'Dropout napětí' u lineárních stabilizátorů?",
          moznosti: [
            "Maximální napětí, které obvod vydrží",
            "Minimální nutný rozdíl napětí mezi vstupem a výstupem, aby obvod vůbec stabilizoval",
            "Čas, za který se obvod po odpojení vypne",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Čím by měl disponovat naprosto ideální stabilizátor z hlediska svého vnitřního odporu?",
          moznosti: [
            "Měl by mít vnitřní odpor blížící se nekonečnu",
            "Měl by mít minimální (ideálně nulový) vnitřní odpor",
            "Měl by mít kapacitní odpor",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Jaký je principiální rozdíl mezi klasickým lineárním stabilizátorem a stabilizátorem spínaným?",
          moznosti: [
            "Spínaný nemá žádný tranzistor",
            "Lineární přeměňuje přebytečné napětí na teplo, spínaný napětí velmi rychle přerušuje (má vysokou účinnost)",
            "Lineární funguje jen na baterie",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Co znamená, když má stabilizátor činitel stabilizace roven 100?",
          moznosti: [
            "Že unese proud 100 A",
            "Že se změna vstupního napětí projeví stokrát menší změnou na výstupu",
            "Že se napětí zvětší stokrát",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Je doporučené zapojovat oblíbené integrované stabilizátory (jako je 7805) přímo paralelně k sobě pro získání dvojnásobného proudu?",
          moznosti: [
            "Ne, kvůli odchylkám by jeden z nich převzal většinu zátěže (lze řešit posílením externím tranzistorem)",
            "Ano, je to zcela běžná praxe bez rizika",
            "Ano, paralelní zapojení napětí sečte",
          ],
          spravna: 0,
        },
      ],
    },
    {
      id: 4,
      nazev: "4. Zesilovače a parametry",
      teorie:
        "Zesilovač zvětšuje signál, ale nevyrábí energii z ničeho – bere ji z vnějšího DC napájecího zdroje, přičemž slabý vstupní signál funguje jako řídicí prvek. Sledujeme u nich zesílení (často v dB), zkreslení, vstupní odpor (měl by být co největší) a výstupní odpor (co nejmenší pro dodání proudu zátěži). Bipolární tranzistor má vrstvy NPN/PNP a vývody Báze, Emitor, Kolektor. Funguje na principu proudového řízení: malý proud báze otevírá průchod pro velký proud kolektoru.",
      kviz: [
        {
          otazka: "Odkud bere zesilovač energii pro zvětšení signálu?",
          moznosti: [
            "Přímo ze vstupního signálu",
            "Z vnějšího stejnosměrného (DC) napájecího zdroje",
            "Z kondenzátoru ve zpětné vazbě",
          ],
          spravna: 1,
        },
        {
          otazka: "Jaký by měl mít zesilovač ideální vstupní odpor?",
          moznosti: [
            "Co nejmenší (blížící se k nule)",
            "Přesně 50 ohmů",
            "Co největší, aby nezatěžoval zdroj signálu",
          ],
          spravna: 2,
        },
        {
          otazka: "Jaké vývody má bipolární tranzistor?",
          moznosti: [
            "Anoda, Katoda, Gate",
            "Báze, Emitor, Kolektor",
            "SDA, SCL, GND",
          ],
          spravna: 1,
        },
        {
          otazka: "Na jakém principu funguje bipolární tranzistor?",
          moznosti: [
            "Na principu napěťového řízení",
            "Na principu proudového řízení",
            "Na principu teplotní roztažnosti",
          ],
          spravna: 1,
        },
        {
          otazka: "V jakých jednotkách se často udává zisk zesilovače?",
          moznosti: ["Ohmy", "Volty", "Decibely (dB)"],
          spravna: 2,
        },
        {
          otazka:
            "Jak přesně definujeme napěťové zesílení (označované jako Au)?",
          moznosti: [
            "Jako rozdíl výstupního a vstupního napětí",
            "Jako poměr výstupního napětí ku vstupnímu napětí (Uout / Uin)",
            "Jako součin obou napětí",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Proč je žádoucí, aby měl zesilovač pokud možno co nejmenší výstupní odpor?",
          moznosti: [
            "Aby odebíral ze sítě méně proudu",
            "Aby se zamezilo přehřívání vstupních svorek",
            "Aby mohl beze ztrát dodat dostatečný výkon připojené zátěži (např. reproduktoru)",
          ],
          spravna: 2,
        },
        {
          otazka:
            "Co vyjadřuje parametr 'frekvenční charakteristika' zesilovače?",
          moznosti: [
            "Spotřebu energie za jednu sekundu",
            "Závislost velikosti zesílení na frekvenci vstupního signálu",
            "Maximální tepelnou ztrátu",
          ],
          spravna: 1,
        },
        {
          otazka: "Co je to nelineární zkreslení u zesilovačů?",
          moznosti: [
            "Míra, nakolik se tvar výstupního signálu zdeformuje a liší od čistého tvaru vstupního signálu",
            "Fázové posunutí signálu",
            "Nežádoucí snížení hlasitosti",
          ],
          spravna: 0,
        },
        {
          otazka:
            "Z jakých vrstev polovodiče se může skládat bipolární tranzistor?",
          moznosti: [
            "Z vrstev hliníku a mědi",
            "Pouze ze tří vrstev typu N",
            "Ze struktury N-P-N nebo P-N-P",
          ],
          spravna: 2,
        },
        {
          otazka:
            "V jakém režimu se musí bipolární tranzistor nacházet, aby správně fungoval jako lineární zesilovač?",
          moznosti: [
            "V propustném režimu",
            "V aktivním režimu (báze-emitor v propustném, báze-kolektor v závěrném směru)",
            "V saturačním (spínacím) režimu",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Co znamená fakt, že bipolární tranzistor funguje na principu proudového řízení?",
          moznosti: [
            "K sepnutí vůbec nepotřebuje napětí",
            "Malý proud protékající bází otevírá průchod pro mnohem větší proud tekoucí z kolektoru do emitoru",
            "Proud si vždy hledá cestu nejmenšího odporu",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Jakou roli hraje v zesilovači slabý vstupní signál (např. hudba z mikrofonu)?",
          moznosti: [
            "Funguje jako 'řídicí prvek' regulující, kolik energie z hlavního zdroje se pustí na výstup",
            "Sám o sobě se fyzicky i mechanicky zvětší",
            "Zajišťuje napájení celého obvodu",
          ],
          spravna: 0,
        },
        {
          otazka:
            "Co označujeme pojmem 'proudový zesilovací činitel' (často značený jako hFE nebo beta)?",
          moznosti: [
            "Účinnost transformátoru",
            "Poměr mezi velkým proudem kolektoru a malým řídicím proudem báze (Ic / Ib)",
            "Klidovou spotřebu celého zesilovače",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Existují kromě nízkofrekvenčních (NF) zesilovačů pro zvuk ještě jiné druhy podle frekvence?",
          moznosti: [
            "Ne, všechny zesilovače fungují jen do 20 kHz",
            "Ano, existují i vysokofrekvenční (VF) zesilovače pro rádiové signály a stejnosměrné (DC) zesilovače",
            "Ano, ale jen pro lékařské přístroje",
          ],
          spravna: 1,
        },
      ],
    },
    {
      id: 5,
      nazev: "5. Jednostupňový zesilovač v zapojení SE",
      teorie:
        "Zapojení SE (společný emitor) dává velké napěťové i proudové zesílení. Zásadní vlastností je, že obrací fázi signálu o 180 stupňů. Pracovní bod leží na zatěžovací přímce ve výstupní V-A charakteristice (graf závislosti kolektorového proudu na napětí). Při návrhu se nesmí překročit maximální kolektorový proud, maximální napětí a maximální výkonová ztráta (představovaná hyperbolou), jinak hrozí tepelné zničení tranzistoru.",
      kviz: [
        {
          otazka: "Co znamená zkratka SE u zapojení tranzistoru?",
          moznosti: [
            "Společný emitor",
            "Stabilizační elektroda",
            "Střídavá energie",
          ],
          spravna: 0,
        },
        {
          otazka: "Co udělá zapojení SE s fází vstupního signálu?",
          moznosti: [
            "Ponechá ji beze změny",
            "Obrátí fázi o 180°",
            "Fázi náhodně posune",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Na jaké křivce musí ležet všechny reálné stavy zesilovače (pracovní bod)?",
          moznosti: [
            "Na nabíjecí exponenciále",
            "Na zatěžovací přímce",
            "Na teplotní hyperbole",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Jak se v grafu V-A charakteristiky zobrazuje maximální výkonová ztráta?",
          moznosti: [
            "Jako rovná vodorovná čára",
            "Jako sinusoida",
            "Jako hyperbola",
          ],
          spravna: 2,
        },
        {
          otazka: "Co se stane při překročení maximální výkonové ztráty?",
          moznosti: [
            "Obvod se sám vypne",
            "Tranzistor by se roztavil teplem",
            "Zvýší se zesílení na maximum",
          ],
          spravna: 1,
        },
        {
          otazka: "Co to přesně znamená, že má zapojení 'Společný emitor'?",
          moznosti: [
            "Že emitor je spojený s dalším tranzistorem",
            "Že vývod emitoru je společný (vztažný bod) jak pro vstupní, tak pro výstupní obvod",
            "Že emitor vyzařuje světelné paprsky",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Kam se u zapojení SE fyzicky přivádí střídavý vstupní signál?",
          moznosti: ["Na vývod emitoru", "Na vývod kolektoru", "Na vývod báze"],
          spravna: 2,
        },
        {
          otazka:
            "Z jakého vývodu se u zapojení SE odebírá zesílený výstupní signál?",
          moznosti: ["Z emitoru", "Z báze", "Z kolektoru"],
          spravna: 2,
        },
        {
          otazka:
            "Které typy zesílení zapojení SE jako jediné ze základních zapojení poskytuje současně?",
          moznosti: [
            "Žádné",
            "Poskytuje velké napěťové a zároveň velké proudové zesílení (tudíž obrovské výkonové zesílení)",
            "Poskytuje výhradně napěťové zesílení",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Co znamená v praxi věta: 'Když vstupní napětí na bázi stoupá, napětí na kolektoru klesá'?",
          moznosti: [
            "Že obvod je rozbitý a potřebuje opravit",
            "Je to důkaz fázového otočení signálu o 180° typického pro zapojení SE",
            "Že se tranzistor dostal do zkratu",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Co znázorňuje výstupní voltampérová (V-A) charakteristika tranzistoru?",
          moznosti: [
            "Účinnost zesilovače v čase",
            "Závislost kolektorového proudu na napětí mezi kolektorem a emitorem při konstantních proudech báze",
            "Teplotní roztažnost polovodiče v závislosti na čase",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Čím je v grafu V-A charakteristiky určena tzv. zatěžovací přímka?",
          moznosti: [
            "Jenom velikostí zpětnovazebního kondenzátoru",
            "Výhradně napájecím napětím obvodu a odporem rezistoru zapojeného v kolektoru",
            "Frekvencí vstupního signálu",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Jaké tři limitní hodnoty nesmí tranzistor během návrhu a provozu nikdy překročit?",
          moznosti: [
            "Max. frekvenci, min. frekvenci a šumové číslo",
            "Maximální kolektorový proud, maximální napětí a maximální výkonovou ztrátu",
            "Vstupní proud, vstupní napětí a výstupní odpor",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Co hrozí, pokud napětí mezi kolektorem a emitorem (Uce) překročí maximální dovolenou hodnotu (Ucemax)?",
          moznosti: [
            "Tranzistor ztratí zesílení a signál se bezpečně ořízne",
            "Může dojít k nevratnému elektrickému průrazu součástky",
            "Obvod se sám bezpečně restartuje",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Pokud proud vtékající do báze u zapojení SE klesne na absolutní nulu, co se stane s proudem kolektoru?",
          moznosti: [
            "Zvýší se na maximum",
            "Klesne také k nule (tranzistor se úplně zavře)",
            "Změní se na střídavý vysokofrekvenční proud",
          ],
          spravna: 1,
        },
      ],
    },
    {
      id: 6,
      nazev: "6. Pracovní bod a třídy zesilovačů",
      teorie:
        "Pracovní bod určuje klidový stav tranzistoru (když není přítomen střídavý signál) a definuje jej klidový proud a napětí. Zesilovače dělíme do tříd: Třída A má bod uprostřed zatěžovací přímky (vede proud celou periodu, malé zkreslení, ale nízká účinnost). Třída B leží na okraji (vede jen půlvlnu, vysoká účinnost, ale má přechodové zkreslení). Třída AB eliminuje přechodové zkreslení a je ideální pro audio. Třída C se využívá ve VF vysílačích.",
      kviz: [
        {
          otazka: "Co určuje pracovní bod zesilovače?",
          moznosti: [
            "Zesílení v decibelech",
            "Klidový stav tranzistoru bez vstupního signálu",
            "Maximální možnou teplotu tranzistoru",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Která pracovní třída má nejmenší zkreslení, ale velmi špatnou účinnost?",
          moznosti: ["Třída A", "Třída B", "Třída C"],
          spravna: 0,
        },
        {
          otazka:
            "Proč se u koncových NF (audio) zesilovačů nejčastěji používá třída AB?",
          moznosti: [
            "Protože vůbec nepotřebuje napájení",
            "Je to kompromis eliminující přechodové zkreslení se slušnou účinností",
            "Protože má 100% účinnost",
          ],
          spravna: 1,
        },
        {
          otazka: "Jakou část periody propouští proud tranzistor ve třídě B?",
          moznosti: [
            "Celou periodu (360°)",
            "Přesně jednu polovinu vlny",
            "Pouze velmi úzké špičky",
          ],
          spravna: 1,
        },
        {
          otazka: "Kde najde uplatnění zesilovač pracující ve třídě C?",
          moznosti: [
            "V domácích kinech",
            "Ve vysokofrekvenčních vysílačích",
            "Jako předzesilovač pro mikrofon",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Co reálně hrozí, pokud se tranzistor silně zahřeje a nemá teplotně stabilizovaný pracovní bod?",
          moznosti: [
            "Nic se neděje, tranzistor to vydrží",
            "Proud roste, bod se svévolně posouvá po přímce, může dojít ke zničení součástky",
            "Signál se automaticky zeslabí",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Čím se v praxi nejčastěji stabilizuje pracovní bod proti změnám teploty?",
          moznosti: [
            "Ventilátorem s termostatem",
            "Rezistorem v emitoru, který vytváří automatickou zápornou zpětnou vazbu",
            "Přidáním dalšího kondenzátoru do báze",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Jaká je maximální teoretická účinnost zesilovače pracujícího ve třídě A?",
          moznosti: [
            "Až 99 %",
            "Maximálně 25 až 50 %, protože tranzistor neustále propouští proud a topí i v klidu",
            "Účinnost nelze změřit",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Která třída se nejčastěji používá u koncových (výkonových) NF zesilovačů pro reproduktory?",
          moznosti: ["Třída A", "Třída AB", "Třída C"],
          spravna: 1,
        },
        {
          otazka:
            "Co způsobuje tzv. přechodové zkreslení u zesilovačů pracujících čistě ve třídě B?",
          moznosti: [
            "Špatný napájecí zdroj",
            "Střídání dvou tranzistorů, kdy jeden zavírá a druhý otevírá, čímž vzniká drobná napěťová prodleva",
            "Vlhkost v místnosti",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Kolik tranzistorů je minimálně potřeba pro zesílení obou půlvln celého signálu ve třídě B?",
          moznosti: ["Jeden", "Dva (každý se stará o jednu půlvlnu)", "Čtyři"],
          spravna: 1,
        },
        {
          otazka:
            "Proč nelze zesilovač třídy C vůbec použít pro zesilování hudby a zvuku?",
          moznosti: [
            "Protože je příliš tichý",
            "Protože má obrovské zkreslení, otevírá se jen na velmi úzké špičky signálu",
            "Protože by poškodil reproduktory stejnosměrným proudem",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Pomocí čeho se fyzicky nastavuje klidový pracovní bod na zatěžovací přímce?",
          moznosti: [
            "Pomocí stejnosměrného předpětí přiváděného do báze (často přes odporový dělič)",
            "Změnou rychlosti otáčení chladiče",
            "Úpravou tvaru vstupního signálu",
          ],
          spravna: 0,
        },
        {
          otazka:
            "Jakým písmenem a indexem se v grafech často označuje klidový kolektorový proud?",
          moznosti: ["Uce", "Icq", "Rin"],
          spravna: 1,
        },
        {
          otazka:
            "Jaký je reálný stav tranzistoru ve třídě B, pokud na vstup nepřivádíme vůbec žádný střídavý signál?",
          moznosti: [
            "Střídavě se otevírá a zavírá",
            "Je zcela uzavřen, neteče jím klidový proud a proto nehřeje",
            "Propouští plný proud a extrémně se hřeje",
          ],
          spravna: 1,
        },
      ],
    },
    {
      id: 7,
      nazev: "7. Vícestupňové zesilovače a zpětná vazba",
      teorie:
        "Pokud jeden tranzistor nezesílí signál dostatečně, zapojují se do vícestupňových zesilovačů. Vazby mezi nimi mohou být kapacitní (RC - blokuje DC napětí), galvanické (propouští DC signály) nebo transformátorové. Celkové napěťové zesílení se násobí, zatímco zisk v decibelech (dB) se sčítá. Zpětná vazba vrací část výstupu na vstup: kladná ZV vytváří oscilátory, záporná ZV sice sníží celkové zesílení, ale drasticky zmenší zkreslení a zlepší stabilitu.",
      kviz: [
        {
          otazka:
            "Jak se počítá celkový zisk vícestupňového zesilovače, pokud je udán v decibelech (dB)?",
          moznosti: ["Násobí se", "Sčítá se", "Odečítá se"],
          spravna: 1,
        },
        {
          otazka: "Co blokuje RC (kapacitní) vazba mezi stupni?",
          moznosti: [
            "Střídavý signál",
            "Vysoké frekvence",
            "Stejnosměrné (DC) napětí",
          ],
          spravna: 2,
        },
        {
          otazka:
            "Co se stane se zesilovačem při zavedení silné KLADNÉ zpětné vazby?",
          moznosti: [
            "Obvod se stane nestabilním a začne sám kmitat (oscilátor)",
            "Zcela se eliminuje zkreslení",
            "Zesilovač přestane odebírat proud",
          ],
          spravna: 0,
        },
        {
          otazka: "Proč se v audiotechnice běžně zavádí ZÁPORNÁ zpětná vazba?",
          moznosti: [
            "Aby se zvýšilo zesílení do nekonečna",
            "Snižuje zkreslení a zlepšuje stabilitu",
            "Funguje jako ochrana proti zkratu",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Která vazba dokáže zesilovat i velmi pomalé změny nebo stejnosměrné napětí?",
          moznosti: ["RC vazba", "Galvanická vazba", "Transformátorová vazba"],
          spravna: 1,
        },
        {
          otazka:
            "Jaká vazba se používá, pokud potřebujeme zesilovat i čistě stejnosměrné napětí (0 Hz)?",
          moznosti: [
            "Kapacitní (RC) vazba",
            "Galvanická vazba (přímé vodivé spojení)",
            "Transformátorová vazba",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Co by se stalo, kdybychom spojili dva stupně s rozdílným stejnosměrným napětím na výstupech a nepoužili k oddělení RC vazbu?",
          moznosti: [
            "Zesilovač by hrál dvakrát hlasitěji",
            "Narušily by se a posunuly by se jejich stejnosměrné pracovní body",
            "Zesilovač by začal vysílat radiové vlny",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Je-li napěťové zesílení prvního stupně rovno 10 a druhého stupně také 10, jaké je celkové napěťové zesílení?",
          moznosti: ["20", "100", "0"],
          spravna: 1,
        },
        {
          otazka:
            "Je-li zisk prvního stupně 20 dB a druhého stupně také 20 dB, jaký je celkový zisk systému?",
          moznosti: ["40 dB", "400 dB", "0 dB"],
          spravna: 0,
        },
        {
          otazka:
            "Jak ovlivní zavedení záporné zpětné vazby přenášené frekvenční pásmo zesilovače?",
          moznosti: [
            "Výrazně ho zúží",
            "Výrazně ho rozšíří (zlepší kmitočtovou charakteristiku)",
            "Frekvenční pásmo se tím vůbec nemění",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Co se zákonitě stane s celkovým zesílením obvodu při zavedení záporné zpětné vazby?",
          moznosti: ["Mírně se zvýší", "Sníží se", "Začne náhodně kolísat"],
          spravna: 1,
        },
        {
          otazka:
            "Co je hlavním důvodem plošného používání záporné zpětné vazby v moderní audiotechnice?",
          moznosti: [
            "Úspora elektrické energie ze sítě",
            "Extrémně snižuje nelineární zkreslení signálu a vylepšuje kvalitu zvuku",
            "Slouží jako vizuální prvek na předním panelu",
          ],
          spravna: 1,
        },
        {
          otazka:
            "K čemu se dříve hojně využívala (a občas stále využívá) transformátorová vazba?",
          moznosti: [
            "Pouze k dekoraci plošných spojů",
            "K oddělení stupňů a impedančnímu přizpůsobení (často u výkonových nebo VF obvodů)",
            "Ke chlazení tranzistorů",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Který pasivní prvek zajišťuje u kapacitní (RC) vazby ono zmíněné blokování stejnosměrného napětí?",
          moznosti: ["Cívka (Tlumivka)", "Kondenzátor", "Termistor"],
          spravna: 1,
        },
        {
          otazka:
            "Pokud část výstupního signálu vrátíme na vstup tak, že je v protifázi (otočená o 180°) vůči původnímu vstupnímu signálu, o jakou vazbu jde?",
          moznosti: [
            "O kladnou zpětnou vazbu",
            "O zápornou zpětnou vazbu",
            "O dopřednou vazbu",
          ],
          spravna: 1,
        },
      ],
    },
    {
      id: 8,
      nazev: "8. Operační zesilovač a neinvertující zapojení",
      teorie:
        "Operační zesilovač (OZ) je univerzální integrovaný obvod s invertujícím (-) a neinvertujícím (+) vstupem. Signál na invertujícím vstupu otočí fázi o 180°. Ideální OZ má nekonečné zesílení, nekonečný vstupní odpor a nulový výstupní odpor. U neinvertujícího zapojení se signál přivádí na (+) vstup a záporná zpětná vazba z výstupu na (-) vstup přes odporový dělič. Fáze se nemění a napěťové zesílení je určeno vnějšími rezistory (vždy >= 1).",
      kviz: [
        {
          otazka:
            "Co se stane se signálem přivedeným na invertující (-) vstup OZ?",
          moznosti: [
            "Jeho fáze se otočí o 180°",
            "Jeho fáze zůstane stejná",
            "Změní se na stejnosměrný proud",
          ],
          spravna: 0,
        },
        {
          otazka: "Jaký má být vstupní odpor ideálního operačního zesilovače?",
          moznosti: ["Nulový", "Přesně 100 ohmů", "Nekonečný"],
          spravna: 2,
        },
        {
          otazka:
            "Kam se přivádí vstupní signál u neinvertujícího zapojení OZ?",
          moznosti: [
            "Na invertující (-) vstup",
            "Na neinvertující (+) vstup",
            "Přímo na výstup",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Co platí pro napěťové zesílení neinvertujícího zapojení s OZ?",
          moznosti: [
            "Je vždy záporné",
            "Je vždy větší nebo rovno 1",
            "Je vždy menší než 1",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Čím je u základních zapojení s OZ určeno výsledné zesílení obvodu?",
          moznosti: [
            "Teplotou okolí",
            "Pouze vnějšími rezistory ve zpětné vazbě",
            "Napájecím napětím",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Proč se v teoretické elektrotechnice zavádí pojem 'ideální operační zesilovač'?",
          moznosti: [
            "Aby se obvody lépe prodávaly",
            "Aby se s návrhy obvodů dalo matematicky mnohem snadněji počítat",
            "Protože reálné zesilovače neexistují",
          ],
          spravna: 1,
        },
        {
          otazka: "Jaký je výstupní odpor ideálního operačního zesilovače?",
          moznosti: [
            "Nekonečně velký",
            "Nulový, teoreticky dokáže zátěži dodat jakýkoliv proud",
            "Závislý na frekvenci vstupního napětí",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Jaká je šířka přenášeného frekvenčního pásma u ideálního operačního zesilovače?",
          moznosti: [
            "Omezená na 20 kHz pro lidské ucho",
            "Nekonečná (přenese signál o absolutně jakékoliv frekvenci)",
            "Závislá na teplotě křemíku",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Podle jakého konkrétního vzorce se počítá napěťové zesílení neinvertujícího zesilovače s OZ?",
          moznosti: ["Au = - Rzp / R1", "Au = 1 + Rzp / R1", "Au = R1 * Rzp"],
          spravna: 1,
        },
        {
          otazka:
            "Může mít základní neinvertující zapojení s OZ napěťové zesílení 0,5 (tedy signál zmenšovat)?",
          moznosti: [
            "Ano, pokud je Rzp menší než R1",
            "Ne, jeho zesílení je na základě vzorce vždy minimálně 1",
            "Ano, ale pouze v noci",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Který vstup u OZ je na schematických značkách označen znaménkem minus (-)?",
          moznosti: [
            "Napájecí vstup GND",
            "Neinvertující vstup",
            "Invertující vstup",
          ],
          spravna: 2,
        },
        {
          otazka:
            "Jaký má neinvertující zapojení s OZ vstupní odpor vůči předchozímu zdroji signálu?",
          moznosti: [
            "Prakticky nulový",
            "Obrovský (blížící se nekonečnu), protože signál jde přímo do vysokého odporu neinvertujícího vstupu",
            "Rovný přesně 50 ohmům",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Z kolika tranzistorů se běžně skládá jeden integrovaný operační zesilovač ukrytý v plastovém pouzdře?",
          moznosti: [
            "Je to jen jeden speciální tranzistor",
            "Skládá se z desítek složitě zapojených tranzistorů tvořících jeden funkční celek",
            "Neobsahuje žádné tranzistory, jen cívky",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Pokud v neinvertujícím zapojení nahradíme Rzp zkratem (0 ohmů) a R1 zcela vynecháme, jaké bude zesílení?",
          moznosti: [
            "Nulové, obvod nebude fungovat",
            "Přesně 1, signál se jen přenese v poměru 1:1, vznikne tzv. sledovač napětí",
            "Nekonečně velké",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Jaký je reálný rozdíl ve fázovém posunu mezi vstupem a výstupem u neinvertujícího zapojení?",
          moznosti: [
            "Signál je posunut přesně o 180°",
            "Signál je opožděn o 90°",
            "Žádný, fázový posun je 0° (signály jsou ve fázi)",
          ],
          spravna: 2,
        },
      ],
    },
    {
      id: 9,
      nazev: "9. Základní zapojení s OZ (matematické operace)",
      teorie:
        "Díky silné záporné zpětné vazbě lze s OZ tvořit matematické operace. Invertující zapojení fázi otočí o 180° a může signál i zmenšit. Součtový zesilovač sčítá hodnoty z více vstupů do jednoho (s otočenou fází). Integrační zesilovač má ve zpětné vazbě kondenzátor a provádí integraci podle času (z obdélníkového signálu udělá trojúhelníkový). Derivační zesilovač s kondenzátorem na vstupu provádí derivaci, nereaguje na konstantní DC napětí, ale z hran tvoří ostré špičky.",
      kviz: [
        {
          otazka:
            "Jaká součástka se nachází ve zpětné vazbě integračního zesilovače?",
          moznosti: ["Tranzistor", "Cívka", "Kondenzátor"],
          spravna: 2,
        },
        {
          otazka:
            "Co se objeví na výstupu integračního zesilovače, pokud na vstup přivedeme obdélníkový signál?",
          moznosti: ["Sínusovka", "Trojúhelníkový průběh", "Rovná čára (DC)"],
          spravna: 1,
        },
        {
          otazka:
            "Které zapojení s OZ nereaguje na konstantní napětí, ale vytváří špičky při změně (hraně) signálu?",
          moznosti: [
            "Součtový zesilovač",
            "Derivační zesilovač",
            "Neinvertující zesilovač",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Které zapojení s OZ umožňuje signál fázově otočit a zároveň ho i zmenšit?",
          moznosti: [
            "Invertující zapojení",
            "Neinvertující zapojení",
            "Krystalový oscilátor",
          ],
          spravna: 0,
        },
        {
          otazka: "Kde je zapojen kondenzátor u derivačního zesilovače?",
          moznosti: [
            "Ve zpětné vazbě",
            "V sérii přímo na vstupu",
            "Paralelně k zátěži na výstupu",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Jakým matematickým vzorcem je dáno zesílení u invertujícího zapojení OZ?",
          moznosti: ["Au = - Rzp / R1", "Au = 1 + Rzp / R1", "Au = R1 * C1"],
          spravna: 0,
        },
        {
          otazka:
            "Může běžné invertující zapojení OZ sloužit i jako zeslabovač (atenuátor) pro zmenšení amplitudy signálu?",
          moznosti: [
            "Ne, operační zesilovač umí napětí jen zvětšovat",
            "Ano, pokud zvolíme hodnotu zpětnovazebního rezistoru (Rzp) menší než vstupního rezistoru (R1)",
            "Ano, ale pouze s přidáním další baterie",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Jaké napětí má na svém neinvertujícím (+) vstupu běžný invertující zesilovač?",
          moznosti: [
            "Plné napájecí napětí +15V",
            "Vstupní signál",
            "Je obvykle trvale připojen na zemní potenciál, tedy 0 V",
          ],
          spravna: 2,
        },
        {
          otazka:
            "Které matematické zapojení s OZ dokáže z několika různých vstupních signálů udělat jeden společný výstupní (např. v audio mixážním pultu)?",
          moznosti: [
            "Komparátor napětí",
            "Součtový zesilovač (Sumátor)",
            "Derivační článek",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Proč je výsledek (napětí) u klasického součtového zesilovače z matematického hlediska 'záporný' (resp. s otočenou fází)?",
          moznosti: [
            "Protože se všechny signály svádí do invertujícího (-) vstupu OZ",
            "Protože obvod odebírá energii ze sítě",
            "Protože kondenzátory otáčí polaritu",
          ],
          spravna: 0,
        },
        {
          otazka:
            "Co se stabilně stane na výstupu derivačního zesilovače, pokud na vstup přivedeme plynule a lineárně narůstající napětí?",
          moznosti: [
            "Na výstupu bude také stoupat k nekonečnu",
            "Na výstupu bude konstantní, neměnné napětí (odpovídající strmosti růstu)",
            "Obvod zkratuje a shoří",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Která součástka hraje klíčovou roli a fyzicky plní funkci zpětné vazby v integračním zesilovači?",
          moznosti: ["Rezistor (Rzp)", "Zenerova dioda", "Kondenzátor (Cz)"],
          spravna: 2,
        },
        {
          otazka:
            "Co je společným a absolutně nutným znakem všech těchto základních matematických (lineárních) zapojení s OZ?",
          moznosti: [
            "Zavedení silné záporné zpětné vazby z výstupu zpět na invertující vstup (-)",
            "Přítomnost cívky na vstupu",
            "Zapojení bez jakéhokoliv napájení",
          ],
          spravna: 0,
        },
        {
          otazka:
            "Co by se teoreticky stalo, kdybychom u těchto obvodů zavedli zpětnou vazbu omylem na neinvertující (+) vstup?",
          moznosti: [
            "Obvod by pracoval dvakrát lépe a přesněji",
            "Obvod by se stal nestabilním a pravděpodobně by se překlopil do oscilací (kladná vazba)",
            "Zesílení by bylo přesně nula",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Jaký tvar signálu vznikne na výstupu derivátoru, přivedeme-li na jeho vstup střídavý obdélníkový signál?",
          moznosti: [
            "Krátké, úzké napěťové špičky (jehly) v místech hran obdélníku",
            "Hladká a čistá sinusovka",
            "Rovná čára bez života",
          ],
          spravna: 0,
        },
      ],
    },
    {
      id: 10,
      nazev: "10. Oscilátory a generátory",
      teorie:
        "Oscilátory generují střídavé napětí (typicky harmonický sinusový průběh) čistě ze stejnosměrného napájení, a to díky zavedení silné kladné zpětné vazby. Generátory produkují nesinusové průběhy (obdélníky, pily). RC oscilátory se hodí pro nízké frekvence (NF do 100 kHz), LC oscilátory pro vysoké frekvence (VF, nad 100 kHz, např. Colpittsův a Hartleyův). Pro aplikace s požadavkem na extrémní frekvenční stabilitu se používá krystalový oscilátor využívající piezoelektrický jev s obrovským činitelem jakosti (Q).",
      kviz: [
        {
          otazka:
            "Jaká zpětná vazba je nezbytná pro funkci každého oscilátoru?",
          moznosti: [
            "Kladná zpětná vazba",
            "Záporná zpětná vazba",
            "Galvanická zpětná vazba",
          ],
          spravna: 0,
        },
        {
          otazka:
            "Jaký typ signálu primárně generují obvody označované jako oscilátory?",
          moznosti: [
            "Obdélníkové impulsy",
            "Harmonický (sinusový) průběh",
            "Konstantní stejnosměrné napětí",
          ],
          spravna: 1,
        },
        {
          otazka: "Pro jaké pásmo se využívají oscilátory s RC články?",
          moznosti: [
            "Pro vysoké frekvence (nad 100 MHz)",
            "Pro extrémně vysoké frekvence (mikrovlny)",
            "Pro nízké frekvence (NF, do 100 kHz)",
          ],
          spravna: 2,
        },
        {
          otazka:
            "Jaký oscilátor použijeme, pokud požadujeme extrémní frekvenční stabilitu (např. v procesorech)?",
          moznosti: [
            "RC oscilátor s fázovým posuvem",
            "Oscilátor s krystalem (piezoelektrický)",
            "Meissnerův LC oscilátor",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Jak se nazývají obvody produkující nesinusové průběhy (např. obdélníky)?",
          moznosti: ["Komparátory", "Generátory", "Stabilizátory"],
          spravna: 1,
        },
        {
          otazka:
            "Z čeho oscilátor reálně čerpá energii pro neustálé generování kmitů?",
          moznosti: [
            "Z antény",
            "Ze stejnosměrného napájecího zdroje",
            "Z okolní teploty",
          ],
          spravna: 1,
        },
        {
          otazka:
            "O kolik stupňů musí celkem (v rámci celé smyčky) posunout fázi oscilátor s fázovým posuvem, aby vznikla potřebná kladná ZV?",
          moznosti: ["O 90°", "O 180°", "O 360° (což se chová jako 0°)"],
          spravna: 2,
        },
        {
          otazka:
            "Z kolika RC článků se typicky skládá zpětnovazební síť RC oscilátoru s fázovým posuvem s tranzistorem v zapojení SE?",
          moznosti: [
            "Z jednoho",
            "Ze dvou",
            "Ze tří (každý posune fázi zhruba o 60°)",
          ],
          spravna: 2,
        },
        {
          otazka:
            "Která součástka tvoří základní rezonanční obvod v klasickém LC oscilátoru?",
          moznosti: [
            "Dva tranzistory za sebou",
            "Cívka a kondenzátor zapojené paralelně (rezonanční obvod)",
            "Pouze samotná Zenerova dioda",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Které známé zapojení LC oscilátoru využívá k vytvoření zpětné vazby odbočku z kapacitního děliče?",
          moznosti: [
            "Colpittsův oscilátor",
            "Hartleyův oscilátor",
            "Meissnerův oscilátor",
          ],
          spravna: 0,
        },
        {
          otazka:
            "Na jakém fyzikálním jevu je přesně založena funkce krystalového oscilátoru?",
          moznosti: [
            "Na elektromagnetické indukci",
            "Na piezoelektrickém jevu",
            "Na fotoelektrickém jevu",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Z jakého přírodního nebo umělého materiálu je nejčastěji vyroben výbrus v krystalovém oscilátoru?",
          moznosti: [
            "Z čisté mědi",
            "Z uhlíku",
            "Z křemene (křemenný krystal)",
          ],
          spravna: 2,
        },
        {
          otazka:
            "Co vyjadřuje extrémně vysoký činitel jakosti (Q), kterým disponují krystalové oscilátory?",
          moznosti: [
            "Obrovskou stabilitu a přesnost vygenerované frekvence (Q = 10^4 až 10^6)",
            "To, jak hlasitý dokážou vydat zvuk",
            "Míru zkreslení napětí na výstupu",
          ],
          spravna: 0,
        },
        {
          otazka:
            "Který LC oscilátor využívá k zavedení zpětné vazby transformátorovou vazbu (induktivní vazbu pomocí cívek)?",
          moznosti: [
            "Colpittsův oscilátor",
            "Meissnerův oscilátor",
            "Piercův krystalový oscilátor",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Jaký tvar signálu typicky produkuje LC oscilátor v ustáleném provozu?",
          moznosti: [
            "Pilovitý průběh vhodný pro zobrazení na obrazovce",
            "Čistý harmonický sinusový průběh",
            "Obdélníkové řídicí impulzy",
          ],
          spravna: 1,
        },
      ],
    },
    {
      id: 11,
      nazev: "11. Analogové modulace (AM, FM)",
      teorie:
        "Modulace je nezbytná pro bezdrátový přenos, protože čistý NF signál (např. hlas) se špatně vyzařuje anténou. Parametry nosné vysokofrekvenční (VF) vlny se proto mění v rytmu NF signálu. U amplitudové modulace (AM) se mění amplituda (výška) nosné vlny, což je náchylné na rušení. U frekvenční modulace (FM) se mění frekvence nosné vlny, zatímco amplituda zůstává stejná, což zajišťuje vysokou odolnost proti atmosférickému rušení (využití pro VKV rádia).",
      kviz: [
        {
          otazka: "Proč musíme NF signál před vysíláním modulovat?",
          moznosti: [
            "Abychom snížili jeho rychlost na rychlost zvuku",
            "Protože samotný NF signál se špatně vyzařuje z reálně velkých antén",
            "Abychom ho převedli na stejnosměrný proud",
          ],
          spravna: 1,
        },
        {
          otazka: "Co se mění u nosné vlny při amplitudové modulaci (AM)?",
          moznosti: ["Rychlost světla", "Frekvence", "Amplituda (velikost)"],
          spravna: 2,
        },
        {
          otazka:
            "Která modulace je výrazně odolnější proti atmosférickému rušení (šumu)?",
          moznosti: [
            "AM (amplitudová)",
            "FM (frekvenční)",
            "Obě jsou na tom stejně",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Co se děje při FM modulaci, když má modulační signál kladnou amplitudu?",
          moznosti: [
            "Frekvence nosné vlny se zvýší",
            "Frekvence nosné vlny se sníží",
            "Amplituda nosné vlny klesne na nulu",
          ],
          spravna: 0,
        },
        {
          otazka: "Jaké rádio využívá frekvenční modulaci (FM)?",
          moznosti: [
            "Dlouhé vlny (DV)",
            "Klasické VKV rozhlasové vysílání",
            "Letecká komunikace",
          ],
          spravna: 1,
        },
        {
          otazka:
            "V jakém frekvenčním pásmu se běžně pohybuje samotný NF signál (např. lidský hlas nebo hudba)?",
          moznosti: ["20 Hz až 20 kHz", "1 MHz až 100 MHz", "Nad 5 GHz"],
          spravna: 0,
        },
        {
          otazka:
            "Proč by se samotný nemodulovaný NF signál nedal rozumně vysílat klasickou anténou?",
          moznosti: [
            "Protože by rušil signál Wi-Fi",
            "Protože pro nízké frekvence by anténa musela být fyzicky dlouhá i několik kilometrů",
            "Protože NF signál se ve vzduchu okamžitě odpaří",
          ],
          spravna: 1,
        },
        {
          otazka: "Co přesně představuje v radiotechnice tzv. 'nosná vlna'?",
          moznosti: [
            "Drát, na kterém visí anténa",
            "Vysokofrekvenční (VF) signál generovaný oscilátorem, jehož parametry se modulací účelově mění",
            "Zvuková vlna zachycená mikrofonem",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Jak se u AM modulace nazývá myšlená čára, která kopíruje špičky (vrcholy) modulované nosné vlny a odpovídá původnímu NF signálu?",
          moznosti: ["Frekvenční průměr", "Střední hodnota", "Obálka signálu"],
          spravna: 2,
        },
        {
          otazka:
            "Který typ modulace má z principu mnohem vyšší odolnost proti atmosférickému rušení (bleskům, jiskření)?",
          moznosti: [
            "Amplitudová modulace (AM)",
            "Frekvenční modulace (FM)",
            "Obě modulace jsou vůči bleskům bezbranné",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Co se přesně stane u FM modulace, pokud má modulační NF (zvukový) signál zápornou amplitudu?",
          moznosti: [
            "Frekvence VF nosné vlny se úměrně sníží",
            "Frekvence VF nosné vlny se zvýší",
            "Vysílač se na okamžik vypne",
          ],
          spravna: 0,
        },
        {
          otazka:
            "Je při frekvenční modulaci (FM) nějak měněna amplituda (velikost) nosné vlny?",
          moznosti: [
            "Ano, neustále se zvětšuje a zmenšuje v rytmu basů",
            "Ne, její amplituda zůstává naprosto konstantní",
            "Ano, ale pouze v noci kvůli odrazům od ionosféry",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Co je nezbytnou podmínkou pro fyzický vznik amplitudové modulace (AM) v elektronickém obvodu?",
          moznosti: [
            "Ponoření součástek do izolačního oleje",
            "Použití dlouhého optického kabelu",
            "Použití nelineárního prvku (např. diody nebo tranzistoru), na kterém se signály 'sloučí'",
          ],
          spravna: 2,
        },
        {
          otazka:
            "Kde se dnes stále velmi aktivně a s výhodou používá Amplitudová modulace (AM) navzdory její náchylnosti k šumu?",
          moznosti: [
            "Při přenosu 4K videa",
            "V běžné Wi-Fi síti doma",
            "V profesionální letecké komunikaci (letadla s věží)",
          ],
          spravna: 2,
        },
        {
          otazka:
            "Pokud chceme vysílat více rozhlasových stanic současně tak, aby se v éteru navzájem nerušily, co musíme udělat?",
          moznosti: [
            "Snížit výkon všech vysílačů na minimum",
            "Každé stanici přidělit nosnou vlnu s úplně jinou VF frekvencí",
            "Zakázat jim vysílat ve stejný časový úsek",
          ],
          spravna: 1,
        },
      ],
    },
    {
      id: 12,
      nazev: "12. Diskrétní a impulsové modulace",
      teorie:
        "Zabývají se převodem spojitého (analogového) signálu na nespojitý (diskrétní). Platí Shannon-Kotělnikovův teorém: vzorkovací frekvence musí být minimálně 2x vyšší než maximální frekvence signálu. Typy: PAM (pulsně amplitudová - mění se výška), PWM (pulsně šířková - mění se šířka impulsu, velmi časté pro řízení výkonu nebo jasu LED), PPM (mění se časová poloha). PCM (pulsně kódová) je plně digitální a zahrnuje vzorkování, kvantování a kódování do jedniček a nul.",
      kviz: [
        {
          otazka: "Co říká Shannonův-Kotělnikovův teorém o vzorkování?",
          moznosti: [
            "Frekvence vzorkování musí být poloviční než signál",
            "Vzorkovací frekvence musí být minimálně 2x vyšší než max. frekvence signálu",
            "Vzorkování musí probíhat v noci",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Který typ modulace se velmi často využívá k plynulému řízení výkonu (např. u motorů nebo svitu LED)?",
          moznosti: [
            "AM (Amplitudová)",
            "PWM (Pulsně šířková modulace)",
            "PPM (Pulsně polohová modulace)",
          ],
          spravna: 1,
        },
        {
          otazka: "Co se mění u impulsů při PAM (pulsně amplitudové modulaci)?",
          moznosti: [
            "Jejich šířka",
            "Jejich časová poloha",
            "Jejich amplituda (výška)",
          ],
          spravna: 2,
        },
        {
          otazka:
            "Která modulace je plně digitální a vysílá proud jedniček a nul?",
          moznosti: ["PCM (Pulsně kódová modulace)", "PAM", "PWM"],
          spravna: 0,
        },
        {
          otazka: "Z jakých 3 kroků se skládá převod u PCM?",
          moznosti: [
            "Náběh, pokles, střída",
            "Zesílení, filtrace, vyhlazení",
            "Vzorkování, kvantování, kódování",
          ],
          spravna: 2,
        },
        {
          otazka:
            "Jak je v teorii elektroniky definován nespojitý (diskrétní) signál?",
          moznosti: [
            "Je to signál, který je trvale na hodnotě 0 V",
            "Je to signál, který není definován trvale, ale nabývá hodnot pouze ve vybraných diskrétních okamžicích (vzorcích)",
            "Je to pouze čistý sinusový signál",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Jakou hodnotu udává technický parametr 'doba náběhu' u obdélníkového impulsu?",
          moznosti: [
            "Celkovou délku trvání impulsu v milisekundách",
            "Časový interval, za který napětí hrany stoupne z 10 % na 90 % své maximální amplitudy",
            "Počet impulsů za jednu sekundu",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Jak se matematicky spočítá 'střída' (Duty cycle) periodického impulsu?",
          moznosti: [
            "Jako součin frekvence a periody",
            "Jako poměr šířky impulsu ku délce celé jeho periody (často se udává v procentech)",
            "Jako rozdíl náběžné a sestupné hrany",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Co by se fatálně stalo, kdybychom nedodrželi Shannonův-Kotělnikovův teorém při digitalizaci (vzorkování) audia?",
          moznosti: [
            "Záznam by se přehrál pozpátku",
            "Vzniklo by tzv. aliasingové zkreslení, záznam by byl nenávratně poškozen a z digitálních dat by původní zvuk nešel zrekonstruovat",
            "Snížila by se pouze hlasitost nahrávky",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Jaký je vizuální (fyzický) rozdíl na osciloskopu mezi PAM a PWM modulací?",
          moznosti: [
            "U PAM se obdélníky zvyšují a snižují (mění se amplituda), u PWM mají všechny obdélníky stejnou výšku, ale mění se jejich šířka",
            "U PWM jsou impulsy trojúhelníkové, u PAM sinusové",
            "Žádný rozdíl tam není, je to to samé pod jiným názvem",
          ],
          spravna: 0,
        },
        {
          otazka:
            "Kde se v moderní praxi s výhodou setkáme s využitím Pulsně polohové modulace (PPM)?",
          moznosti: [
            "V silových obvodech na rozvodnách",
            "Například u infračervených dálkových ovladačů k TV nebo v optických přenosech, kde rozhoduje přesný čas bliknutí",
            "V levných analogových rádiích",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Co přesně znamená klíčový pojem 'kvantování' v procesu digitální PCM modulace?",
          moznosti: [
            "Fyzické vynásobení signálu číslem 100",
            "Změření napětí a jeho zaokrouhlení na nejbližší povolenou (tabulkovou) napěťovou úroveň podle rozlišení převodníku",
            "Zkrácení délky záznamu o polovinu",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Proč se PWM (Pulsně šířková) modulace tak masivně používá pro řízení rychlosti stejnosměrných motorů nebo jasu výkonových LED?",
          moznosti: [
            "Protože výkon motoru nebo LED se řídí přerušováním napětí velmi efektivně beze ztrát na teplo, nikoliv klasickým snižováním napětí na srážecím odporu",
            "Protože dodává motoru střídavý proud o frekvenci 50 Hz",
            "Protože dokáže vyrobit vyšší napětí než má napájecí baterie",
          ],
          spravna: 0,
        },
        {
          otazka:
            "Z čeho se primárně skládá výstupní signál PCM modulace po dokončení závěrečného kroku 'kódování'?",
          moznosti: [
            "Z postupně se zvyšujícího stejnosměrného napětí",
            "Z čistě digitálního toku logických jedniček a nul (binární data)",
            "Ze zkomprimovaných MP3 souborů s příponou .zip",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Pokud chceme digitálně nahrávat a přenášet hudbu s maximální přítomnou frekvencí 20 kHz (hranice slyšitelnosti), jaká musí být podle teorému absolutně minimální vzorkovací frekvence?",
          moznosti: [
            "Minimálně 10 kHz",
            "Přesně 20 kHz",
            "Minimálně 40 kHz (v praxi se pro CD používá 44,1 kHz)",
          ],
          spravna: 2,
        },
      ],
    },
    {
      id: 13,
      nazev: "13. Impulsové obvody a tvarování signálu",
      teorie:
        "Impulsové obvody zpracovávají nespojitý (diskrétní) signál, u nějž záleží na tvaru a časování rychlých skoků napětí. Ideální impuls je obdélník, v realitě ho popisujeme parametry: Amplituda, doba náběhu, doba poklesu, šířka impulsu a perioda. Střída je poměr šířky ku periodě (D=ti/T). Tvarovací obvody upravují zašuměný signál na ostře definovaný. Pasivní tvarovače využívají R, L, C prvky a diody. Aktivní využívají tranzistory a OZ (např. komparátory). Schmittův klopný obvod je komparátor s hysterezí, který čistí šum a tvoří ostré hrany.",
      kviz: [
        {
          otazka: "Co zpracovávají a zkoumají impulsové obvody?",
          moznosti: [
            "Čistě spojité sinusové signály",
            "Nespojitý (diskrétní) signál charakteristický rychlými skokovými změnami napětí",
            "Pouze jednosměrný stejnosměrný proud z baterie",
          ],
          spravna: 1,
        },
        {
          otazka: "Jak se nazývá maximální hodnota napětí impulsu?",
          moznosti: ["Střída", "Amplituda (Um)", "Frekvence"],
          spravna: 1,
        },
        {
          otazka: "Co přesně vyjadřuje parametr 'doba náběhu' (tr)?",
          moznosti: [
            "Čas, za který napětí hrany stoupne z 10 % na 90 % své maximální amplitudy",
            "Čas od spuštění počítače",
            "Dobu, po kterou je impuls na 100 % své hodnoty",
          ],
          spravna: 0,
        },
        {
          otazka: "Co udává 'doba týlu / poklesu' (tf)?",
          moznosti: [
            "Čas, za který napětí klesne z 90 % zpět na 10 %",
            "Celkovou dobu, kdy je přístroj vypnutý",
            "Doběhové napětí cívky",
          ],
          spravna: 0,
        },
        {
          otazka:
            "Jak se v technické praxi nejčastěji měří šířka impulsu (ti)?",
          moznosti: [
            "U úplného dna (na 0 % amplitudy)",
            "Už od začátku stoupání z 10 %",
            "Na úrovni 50 % amplitudy (v polovině výšky)",
          ],
          spravna: 2,
        },
        {
          otazka: "Jak definujeme periodu (T) impulsního signálu?",
          moznosti: [
            "Jako absolutní šířku samotného impulsu",
            "Jako časový interval mezi dvěma po sobě jdoucími náběžnými hranami",
            "Jako čas mezi náběžnou a sestupnou hranou",
          ],
          spravna: 1,
        },
        {
          otazka: "Jak se matematicky spočítá střída (Duty cycle) impulsu?",
          moznosti: [
            "D = T / ti",
            "D = ti / T (poměr šířky impulsu k periodě)",
            "D = Um / T",
          ],
          spravna: 1,
        },
        {
          otazka: "K čemu primárně slouží tvarovací obvody?",
          moznosti: [
            "Zvyšují proud do reproduktorů",
            "Upravují zašuměný nebo zkreslený signál do požadovaného, ostře definovaného tvaru",
            "Uchovávají data v paměti",
          ],
          spravna: 1,
        },
        {
          otazka: "Jaké součástky mohou obsahovat pasivní tvarovací obvody?",
          moznosti: [
            "Pouze operační zesilovače",
            "Jen mikroprocesory",
            "Pouze pasivní součástky (rezistory, kondenzátory, cívky) a diody",
          ],
          spravna: 2,
        },
        {
          otazka:
            "Jak fungují diodové omezovače napětí (jakožto pasivní tvarovače)?",
          moznosti: [
            "Zvyšují amplitudu impulsu",
            "Fyzicky 'odříznou' napěťové špičky, které překračují určitou mez",
            "Odstraní stejnosměrnou složku napětí",
          ],
          spravna: 1,
        },
        {
          otazka: "Co musí obsahovat aktivní tvarovací obvod?",
          moznosti: [
            "Aktivní prvky, např. tranzistory nebo operační zesilovače",
            "Pouze kondenzátory a cívky",
            "Transformátor",
          ],
          spravna: 0,
        },
        {
          otazka: "Na jakém principu pracuje komparátor jako aktivní tvarovač?",
          moznosti: [
            "Plynule zesiluje střídavé napětí",
            "Porovnává vstupní napětí s přesně nastaveným referenčním napětím a skokově podle toho mění výstup",
            "Funguje jako paměť pro 1 bit",
          ],
          spravna: 1,
        },
        {
          otazka: "Co je to Schmittův klopný obvod?",
          moznosti: [
            "Zesilovač výkonu s malým šumem",
            "Speciální typ komparátoru s hysterezí (má dvě různé rozhodovací úrovně)",
            "Náhradní zapojení za anténu",
          ],
          spravna: 1,
        },
        {
          otazka: "K čemu je užitečná hystereze u Schmittova klopného obvodu?",
          moznosti: [
            "Slouží ke chlazení čipu",
            "Zabraňuje kmitání obvodu při zašuměném signálu, protože úroveň pro zapnutí je jiná než pro vypnutí",
            "Vyrábí ze stejnosměrného napětí střídavé",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Lze v praxi vyrobit naprosto ideální obdélníkový impuls bez zkosených hran?",
          moznosti: [
            "Ano, moderní procesory to dokážou",
            "Ne, kvůli fyzikálním omezením součástek (např. parazitní kapacitě) zabere změna napětí vždy nějaký čas (doba náběhu)",
            "Ano, ale jen v naprostém vakuu",
          ],
          spravna: 1,
        },
      ],
    },
    {
      id: 14,
      nazev: "14. Integrační a derivační článek",
      teorie:
        "Jsou to nejjednodušší pasivní tvarovače (RC články). Integrační článek (R v sérii, C paralelně k výstupu) blokuje rychlé změny (dolní propust). Obdélníky se přes něj tvarují podle nabíjecí exponenciály na pilovitý/trojúhelníkový průběh (lze tak vyhladit PWM signál). Derivační článek (C v sérii, R paralelně) blokuje stejnosměrné napětí a pomalé změny (horní propust). Reaguje jen na rychlé hrany obdélníků, ze kterých vytváří kratičké napěťové jehly (vhodné pro detekci hran a synchronizační značky).",
      kviz: [
        {
          otazka:
            "Z jakých elektronických součástek se skládají integrační a derivační články?",
          moznosti: [
            "Ze dvou tranzistorů",
            "Pouze z jednoho rezistoru a jednoho kondenzátoru (RC články)",
            "Z cívky a operačního zesilovače",
          ],
          spravna: 1,
        },
        {
          otazka: "Jaké je fyzické zapojení integračního článku?",
          moznosti: [
            "Rezistor je v sérii se signálem a kondenzátor paralelně k výstupu (proti zemi)",
            "Kondenzátor je v sérii a rezistor paralelně k výstupu",
            "Obě součástky jsou zapojeny sériově",
          ],
          spravna: 0,
        },
        {
          otazka: "Kde se u integračního obvodu odebírá výstupní napětí?",
          moznosti: [
            "Přímo na zdroji",
            "Na rezistoru",
            "Přímo na kondenzátoru",
          ],
          spravna: 2,
        },
        {
          otazka:
            "Co se děje s kondenzátorem v integračním obvodu po přivedení obdélníkového impulsu?",
          moznosti: [
            "Okamžitě zkratuje",
            "Začne se pozvolna nabíjet přes sériový rezistor",
            "Okamžitě napětí přenese na výstup bez změny",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Jaká matematická křivka vzniká při nabíjení kondenzátoru v integračním článku?",
          moznosti: ["Exponenciála", "Sinusoida", "Rovná čára"],
          spravna: 0,
        },
        {
          otazka:
            "Co vznikne na výstupu integračního článku, pokud přivedeme rychlý sled obdélníkových impulsů?",
          moznosti: [
            "Naprosto čisté obdélníky",
            "Plynulý pilovitý nebo trojúhelníkový průběh",
            "Napěťové jehly",
          ],
          spravna: 1,
        },
        {
          otazka: "Jak z hlediska frekvence funguje integrační článek?",
          moznosti: [
            "Jako horní propust",
            "Jako pásmová zádrž",
            "Jako dolní propust (propouští pomalé změny a nízké frekvence)",
          ],
          spravna: 2,
        },
        {
          otazka: "Kde se s výhodou používá integrační článek?",
          moznosti: [
            "K detekci hran signálů",
            "K vyhlazování PWM signálů a jako zpožďovací obvod",
            "K výrobě střídavého proudu",
          ],
          spravna: 1,
        },
        {
          otazka: "Jaké je fyzické zapojení derivačního článku?",
          moznosti: [
            "Kondenzátor je v sérii se signálem na vstupu a rezistor paralelně k výstupu (proti zemi)",
            "Kondenzátor a rezistor jsou paralelně vedle sebe",
            "Odpovídá zapojení stabilizátoru 7805",
          ],
          spravna: 0,
        },
        {
          otazka:
            "Na které součástce se odebírá výstupní napětí u derivačního článku?",
          moznosti: ["Na kondenzátoru", "Na rezistoru", "Na cívce"],
          spravna: 1,
        },
        {
          otazka:
            "Jak zareaguje derivační článek, pokud na vstup přivedeme čisté konstantní stejnosměrné napětí (DC)?",
          moznosti: [
            "Začne napětí zesilovat",
            "Zcela ho zablokuje, na výstupu bude trvale 0 V",
            "Změní ho na trojúhelníkový průběh",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Co se objeví na výstupu derivačního článku v momentě, kdy na vstup dorazí náběžná hrana obdélníkového impulsu?",
          moznosti: [
            "Nic, obvod hrany ignoruje",
            "Velmi úzký (jehlový) kladný impuls",
            "Napětí začne pomalu stoupat po exponenciále",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Co vznikne na výstupu derivačního článku při sestupné hraně vstupního impulsu?",
          moznosti: [
            "Druhý kladný impuls",
            "Úzký (jehlový) záporný impuls, jak se kondenzátor vybíjí do země",
            "Trojúhelníkový impuls",
          ],
          spravna: 1,
        },
        {
          otazka: "Jak funguje derivační článek z hlediska přenosu frekvencí?",
          moznosti: [
            "Jako dolní propust",
            "Jako horní propust (blokuje stejnosměrné napětí, propouští rychlé změny/vysoké frekvence)",
            "Jako transformátor",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Jaké je hlavní praktické využití derivačních obvodů v elektronice?",
          moznosti: [
            "K zesilování basů v hudbě",
            "K převodu napětí 230V na 12V",
            "K detekci hran obdélníkových signálů a tvorbě přesných synchronizačních značek (taktu)",
          ],
          spravna: 2,
        },
      ],
    },
    {
      id: 15,
      nazev: "15. Klopné obvody s tranzistory",
      teorie:
        "Klopné obvody tvoří základ pamětí a generátorů. Skládají se ze dvou tranzistorů spojených křížovou zpětnou vazbou. Bistabilní klopný obvod (BKO) má oba stavy stabilní (setrvá v nich donekonečna, překlopí se jen po vnějším impulsu = 1 bit paměti). Monostabilní klopný obvod (MKO) má jen jeden stabilní stav, po vyrušení se na dobu určenou RC článkem překlopí do nestabilního a pak se sám vrátí (slouží jako časovač). Astabilní klopný obvod (AKO / multivibrátor) nemá žádný stabilní stav a trvale bliká/kmitá (zdroj hodinových impulsů).",
      kviz: [
        {
          otazka: "K čemu obecně slouží klopné obvody v elektronice?",
          moznosti: [
            "Fungují jako pojistky proti zkratu",
            "Tvoří fundamentální základ paměťových a generátorových systémů",
            "Mění stejnosměrný proud na mechanickou energii",
          ],
          spravna: 1,
        },
        {
          otazka: "Z čeho je typicky sestaven základní klopný obvod?",
          moznosti: [
            "Ze zenerových diod a transformátoru",
            "Ze dvou bipolárních tranzistorů spojených křížovou zpětnou vazbou (výstup prvního ovládá vstup druhého)",
            "Z pěti integrovaných obvodů",
          ],
          spravna: 1,
        },
        {
          otazka: "Co to v teorii klopných obvodů znamená 'stabilní stav'?",
          moznosti: [
            "Stav, ve kterém obvod zůstane trvale a donekonečna, dokud nepřijde povel zvenčí",
            "Stav, kdy obvod spotřebovává energii",
            "Stav, který se po chvíli sám automaticky změní",
          ],
          spravna: 0,
        },
        {
          otazka: "Kolik stabilních stavů má Bistabilní klopný obvod (BKO)?",
          moznosti: ["Žádný", "Jeden", "Dva"],
          spravna: 2,
        },
        {
          otazka:
            "Jak je u BKO řešena křížová zpětná vazba udržující stabilní stavy?",
          moznosti: [
            "Je tvořena výhradně kondenzátory",
            "Je realizována galvanicky (přímým spojením přes rezistory)",
            "Je řešena optickými vlákny",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Kdy dojde u BKO k fyzickému překlopení do druhého stabilního stavu?",
          moznosti: [
            "Když dojde k přehřátí tranzistoru",
            "Při nabití vnitřního kondenzátoru",
            "Teprve tehdy, když na bázi uzavřeného tranzistoru přivedeme vnější spouštěcí impuls",
          ],
          spravna: 2,
        },
        {
          otazka: "K čemu se v praxi BKO (Bistabilní obvod) využívá?",
          moznosti: [
            "Jako rádio",
            "Jako základní paměťová buňka (dokáže si pamatovat 1 bit informace)",
            "Jako zesilovač pro antény",
          ],
          spravna: 1,
        },
        {
          otazka: "Kolik stabilních stavů má Monostabilní klopný obvod (MKO)?",
          moznosti: ["Dva", "Jeden stabilní a jeden nestabilní", "Žádný"],
          spravna: 1,
        },
        {
          otazka: "Jak je zkonstruována zpětná vazba u MKO?",
          moznosti: [
            "V jedné větvi je galvanická (rezistor) a ve druhé větvi kapacitní (kondenzátor)",
            "Je zcela bez rezistorů",
            "Je tvořena mikrokontrolérem",
          ],
          spravna: 0,
        },
        {
          otazka: "Co se děje s MKO v jeho 'nestabilním stavu'?",
          moznosti: [
            "Zůstane tam navždy",
            "Čeká se, než se přes odpor nabije kondenzátor ve zpětnovazební větvi, a pak se sám automaticky překlopí zpět do stabilního",
            "Obvod trvale osciluje a pípá",
          ],
          spravna: 1,
        },
        {
          otazka: "K čemu je ideální použití Monostabilního obvodu (MKO)?",
          moznosti: [
            "Jako RAM paměť počítače",
            "Jako přesný časovač, zpožďovač nebo tvarovač impulsů na pevnou šířku",
            "K usměrnění napětí",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Kolik stabilních stavů má Astabilní klopný obvod (AKO / Multivibrátor)?",
          moznosti: [
            "Žádný stabilní stav, oba jeho stavy jsou nestabilní",
            "Dva",
            "Jeden",
          ],
          spravna: 0,
        },
        {
          otazka: "Jak je u Astabilního obvodu zapojena zpětná vazba?",
          moznosti: [
            "Galvanicky rezistory",
            "V obou větvích křížem přes kondenzátory",
            "Cívkami",
          ],
          spravna: 1,
        },
        {
          otazka: "Jak se Astabilní obvod zachová ihned po zapnutí napájení?",
          moznosti: [
            "Čeká na příkaz uživatele",
            "Tranzistory se střídavě otevírají a zavírají, obvod se okamžitě bez vnějšího povelu rozkmitá",
            "Jeden tranzistor zůstane trvale otevřen",
          ],
          spravna: 1,
        },
        {
          otazka: "K čemu se využívá AKO (Astabilní obvod)?",
          moznosti: [
            "Jako oscilátor generující obdélníkové hodinové impulsy, generátor tónů nebo obyčejný blikač",
            "Jako USB paměť",
            "Jako stabilizátor napětí 5V",
          ],
          spravna: 0,
        },
      ],
    },
    {
      id: 16,
      nazev: "16. VF technika a VF vedení",
      teorie:
        "Velmi vysoké kmitočty (VF) jsou v řádech desítek kHz až stovek MHz. Chovají se jinak než stejnosměrný proud, protože vlnová délka (lambda = c/f) klesá a je srovnatelná s délkou vodičů. Vodič má rozložené primární parametry (R, L, C, G) popsané RLGC modelem. Důležitá je vlnová impedance (Z0). Nutné je impedanční přizpůsobení (Z_vedení = Z_zátěže), jinak vzniká odraz energie a nežádoucí stojaté vlnění (může poškodit vysílač). Typy: Koaxiální kabel (asymetrický), symetrická dvojlinka a mikropáskové vedení (spoj na DPS s rozlitou zemní plochou).",
      kviz: [
        {
          otazka:
            "V jakých řádech se typicky pohybují 'Velmi vysoké kmitočty' (VF)?",
          moznosti: [
            "0 Hz až 50 Hz",
            "Desítky kHz až stovky MHz",
            "Pouze nad 5 Terahertzů",
          ],
          spravna: 1,
        },
        {
          otazka: "Jaký zásadní jev nastává se zvyšující se frekvencí signálu?",
          moznosti: [
            "Kabel začne chladnout",
            "Vlnová délka signálu klesá natolik, že začne být srovnatelná s fyzickými rozměry vodičů a součástek",
            "Proud se změní na stejnosměrný",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Co to znamená pro návrh spojů u VF techniky (oproti DC obvodům)?",
          moznosti: [
            "Vodič už nelze brát jako pouhý 'zkrat', ale jako složitý obvod s rozloženými parametry",
            "Dráty stačí zkrátit",
            "Místo mědi musíme použít železo",
          ],
          spravna: 0,
        },
        {
          otazka:
            "Jaké 4 primární parametry rozložené po své délce má každé reálné VF vedení?",
          moznosti: [
            "Výkon, útlum, zisk a šum",
            "Odpor (R), indukčnost (L), kapacita (C) a svodová vodivost (G)",
            "Hmotnost, průřez, barvu a teplotu",
          ],
          spravna: 1,
        },
        {
          otazka: "K čemu slouží tzv. RLGC model vedení?",
          moznosti: [
            "K tisku 3D součástek",
            "Pro matematické výpočty a simulace krátkých úseků vysokofrekvenčního vedení",
            "K instalaci operačního systému",
          ],
          spravna: 1,
        },
        {
          otazka: "Co udává vlnová impedance VF vedení (Z0)?",
          moznosti: [
            "Množství drátů v kabelu",
            "Poměr mezi napětím a proudem šířící se postupné vlny na tomto vedení",
            "Opotřebení izolace v čase",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Jak se jednoduše vypočítá vlnová impedance (Z0) u ideálního bezztrátového vedení?",
          moznosti: [
            "Odmocnina z poměru indukčnosti ku kapacitě (√(L/C))",
            "R = U / I",
            "P = U * I",
          ],
          spravna: 0,
        },
        {
          otazka:
            "Co je to 'Impedanční přizpůsobení', které je kriticky důležité ve VF technice?",
          moznosti: [
            "Zapojení kabelu do správné zástrčky barvou",
            "Zajištění stavu, kdy se vlnová impedance vedení naprosto přesně rovná impedanci připojené zátěže (např. antény)",
            "Snížení napětí na nulu před připojením",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Co hrozí, pokud nedojde k přesnému impedančnímu přizpůsobení a anténa má jinou impedanci než přívodní kabel?",
          moznosti: [
            "Neposlouchá rádiové stanice, chytá jen šum",
            "Do zátěže (antény) se nepřenese veškerá energie a část se odrazí zpět do vedení ke zdroji",
            "Anténa se okamžitě mechanicky rozpadne",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Co vznikne na VF vedení, pokud se vyslaný signál srazí s odraženým signálem?",
          moznosti: [
            "Naprosté ticho",
            "Nežádoucí stojaté vlnění, které extrémně zhoršuje přenos a může výkonově zničit vysílač",
            "Čisté stejnosměrné napětí pro napájení",
          ],
          spravna: 1,
        },
        {
          otazka: "Jaký je konstrukční princip koaxiálního kabelu?",
          moznosti: [
            "Obsahuje dvě stejné rovnocenné žíly",
            "Jde o asymetrické vedení (uvnitř je signálový vodič, zvenčí je opleten stíněním spojeným se zemí)",
            "Skládá se ze stočených optických vláken",
          ],
          spravna: 1,
        },
        {
          otazka: "Co je to symetrická dvojlinka?",
          moznosti: [
            "Kabel tvořený dvěma zcela rovnocennými vodiči bez vnějšího zemnícího stínění",
            "Kabel do zásuvky na 230 V",
            "Mikropáskový spoj",
          ],
          spravna: 0,
        },
        {
          otazka:
            "Co je to mikropáskové vedení (microstrip), běžně používané v moderní VF elektronice?",
          moznosti: [
            "Lepicí páska s vodivým lepidlem",
            "Plochý měděný spoj vyleptaný na vrchu plošného spoje (DPS), pod kterým je z druhé strany rozlitá jednolitá zemní plocha (GND)",
            "Extrémně tenký drát ve vakuové trubici",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Jaká je základní fyzikální rovnice pro výpočet vlnové délky elektromagnetického signálu?",
          moznosti: [
            "lambda = frekvence * čas",
            "lambda = rychlost světla (c) / frekvence (f)",
            "lambda = napětí / proud",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Proč se při návrhu desek plošných spojů s rychlými procesory využívá teorie VF mikropáskového vedení?",
          moznosti: [
            "Protože spoje vypadají profesionálněji",
            "Protože datové signály mají frekvence v řádech gigahertzů a klasické tenké dráty by signál zdeformovaly odrazy",
            "Kvůli lepšímu odvodu tepla",
          ],
          spravna: 1,
        },
      ],
    },
    {
      id: 17,
      nazev: "17. Elektromagnetické vlny a antény",
      teorie:
        "Elektromagnetické vlnění šíří energii pomocí proměnlivého pole složeného z elektrické (E) a magnetické (B) složky. Jsou na sebe kolmé a šíří se rychlostí světla. K jejich vyzáření slouží antény (odtržením vln z otevřeného LC obvodu / dipólu). Parametry antény: Směrová charakteristika a zisk v decibelech. Izotropní zářič vyzařuje všemi směry jako koule. Čím je reálná anténa směrovější, tím má vyšší zisk. Základem je půlvlnný dipól (ramena délky lambda/2). Yagi anténa má aktivní dipól a pasivní prvky (reflektor za ním a direktory před ním).",
      kviz: [
        {
          otazka:
            "Z jakých dvou neoddělitelných složek se skládá elektromagnetické vlnění?",
          moznosti: [
            "Z gravitační a odstředivé síly",
            "Z elektrické (vektor E) a magnetické (vektor B) složky",
            "Z tepelné a tlakové vlny",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Jaká je prostorová orientace elektrické a magnetické složky letící vlny?",
          moznosti: [
            "Běží rovnoběžně vedle sebe",
            "Jsou na sebe kolmé a zároveň jsou obě kolmé na směr šíření",
            "Krouží nepravidelně kolem sebe",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Jakou rychlostí se šíří elektromagnetické vlnění v ideálním vakuu?",
          moznosti: [
            "Rychlostí zvuku (343 m/s)",
            "Rychlostí světla (300 000 km/s)",
            "Frekvencí 50 Hz",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Z jakého teoretického elektronického obvodu je principiálně odvozena anténa (Hertzův dipól)?",
          moznosti: [
            "Z odporového děliče napětí",
            "Z vysokofrekvenčního rezonančního LC obvodu (cívka + kondenzátor)",
            "Ze zdroje stejnosměrného napětí",
          ],
          spravna: 1,
        },
        {
          otazka: "Jak vznikne z uzavřeného LC obvodu otevřená anténa?",
          moznosti: [
            "Tak, že obvod vložíme do vakua",
            "Tím, že desky kondenzátoru fyzicky oddálíme a cívku narovnáme do přímého vodiče (otevřený oscilační obvod)",
            "Přidáním silného transformátoru",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Proč se u antény (při vysokých frekvencích nad 10 MHz) energie odtrhne do prostoru?",
          moznosti: [
            "Protože je polarita zdroje měněna tak rychle, že se pole nestihne vrátit do vodiče a siločáry se uzavřou samy do sebe",
            "Protože vítr energii odfoukne z drátu",
            "Protože napětí přepálí izolaci",
          ],
          spravna: 0,
        },
        {
          otazka: "Jaká je základní oboustranná funkce antény?",
          moznosti: [
            "Snížit výkon zesilovače",
            "Měnit vysokofrekvenční elektrický proud na elektromagnetické vlny (vysílání) a naopak (příjem)",
            "Slouží jako uzemnění bleskosvodu",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Co vyjadřuje tzv. směrová charakteristika (vyzařovací diagram) antény?",
          moznosti: [
            "Barvu, kterou anténa vysílá",
            "Grafické znázornění rozložení energie do prostoru (do jakých směrů vyzařuje anténa nejvíce)",
            "Délku antény v metrech",
          ],
          spravna: 1,
        },
        {
          otazka: "Co je to teoretický 'izotropní zářič'?",
          moznosti: [
            "Ideální anténa, která vyzařuje energii naprosto rovnoměrně do všech směrů (má tvar koule)",
            "Laserový ukazovátko",
            "Běžná televize",
          ],
          spravna: 0,
        },
        {
          otazka: "V jakých logaritmických jednotkách se udává zisk antény?",
          moznosti: ["V decibelech (dBi nebo dBd)", "Ve Voltech", "Ve Wattech"],
          spravna: 0,
        },
        {
          otazka: "Jak spolu u antén fyzikálně souvisí zisk a směrovost?",
          moznosti: [
            "Nijak to nesouvisí",
            "Čím více je anténa úzce směrová, tím větší zisk má v tomto hlavním směru (energii netříští do všech stran)",
            "Směrové antény mají menší zisk, protože vysílají jen úzce",
          ],
          spravna: 1,
        },
        {
          otazka: "Z čeho se přesně skládá základní půlvlnný dipól?",
          moznosti: [
            "Ze čtyř dlouhých trubek",
            "Ze dvou ramen, jejichž celková délka odpovídá přesně polovině vlnové délky (lambda/2)",
            "Z jedné cívky navinuté na magnetu",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Z jakých prvků se skládá klasická Yagi anténa (známá např. pro TV příjem)?",
          moznosti: [
            "Skládá se z paraboly a zářiče",
            "Z aktivního dipólu a pasivních prvků (reflektoru za zářičem a direktorů před ním)",
            "Je to jen jeden dlouhý drát bez doplňků",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Co dělají direktory a reflektor na Yagi anténě s přijímanou vlnou?",
          moznosti: [
            "Mění její frekvenci",
            "Vlny zachycují, odrážejí a silně směrují k aktivnímu dipólu, čímž zásadně zvyšují zisk celého systému",
            "Blokují blesky za bouřky",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Na jakém optickém principu funguje parabolická anténa (satelit)?",
          moznosti: [
            "Využívá lomu světla ve skle",
            "Využívá zrcadlového odrazu vlny od kovové paraboly k jejímu přesnému soustředění do jednoho ohniska",
            "Využívá polarizaci vody",
          ],
          spravna: 1,
        },
      ],
    },
    {
      id: 18,
      nazev: "18. Elektroakustika a měniče",
      teorie:
        "Zvuk je mechanické vlnění pružného prostředí (stlačování a ředění), šíří se jen hmotou (ve vakuu ne). Lidské ucho slyší 20 Hz – 20 kHz. Elektro-akustické měniče (reproduktory) tvoří zvuk z elektřiny. Dynamický reproduktor využívá Lorentzovu sílu – k cívce v magnetu je připevněna membrána, která kmity tlačí vzduch. Elektrostatický využívá přitahování nábojů na tenké fólii mezi statory. Piezoelektrický využívá mechanické deformace krystalu po přivedení napětí (např. 3,3V pípající bzučáky ovládané úrovní LOW).",
      kviz: [
        {
          otazka: "Jakou fyzikální podstatu má zvuk?",
          moznosti: [
            "Je to čisté elektromagnetické pole",
            "Je to mechanické vlnění pružného prostředí (např. periodické stlačování a ředění vzduchu)",
            "Je to svazek rychlých fotonů",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Dokáže se akustická (zvuková) vlna šířit ve vesmírném vakuu?",
          moznosti: [
            "Ano, pokud je frekvence dostatečně vysoká",
            "Ne, ke svému šíření absolutně nutně potřebuje hmotné prostředí",
            "Ano, zvuk se šíří všude stejně",
          ],
          spravna: 1,
        },
        {
          otazka: "Jaké frekvenční pásmo dokáže průměrně vnímat lidské ucho?",
          moznosti: [
            "0 Hz až 5 kHz",
            "Nad 100 kHz (ultrazvuk)",
            "20 Hz až 20 kHz",
          ],
          spravna: 2,
        },
        {
          otazka:
            "Co je hlavním úkolem elektro-akustických měničů (reproduktorů)?",
          moznosti: [
            "Pohlcovat hluk v místnosti",
            "Přeměna střídavého elektrického signálu na mechanické zvukové vlnění",
            "Přeměna zvuku na obraz",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Jaký typ reproduktoru je v dnešní době historicky a plošně nejpoužívanější?",
          moznosti: [
            "Elektrostatický",
            "Dynamický reproduktor s membránou a cívkou",
            "Piezoelektrický krystal",
          ],
          spravna: 1,
        },
        {
          otazka: "Na jakém fyzikálním principu funguje dynamický reproduktor?",
          moznosti: [
            "Na přitahování elektrostatických nábojů",
            "Na deformaci piezo-krystalů",
            "Na principu vzniku Lorentzovy síly, která působí na vodič protékaný proudem v magnetickém poli",
          ],
          spravna: 2,
        },
        {
          otazka:
            "Jak je zkonstruován kmitací systém běžného dynamického reproduktoru?",
          moznosti: [
            "Obsahuje dvě nabité mřížky",
            "K papírové/plastové membráně je pevně připojena cívka, která je zasunuta do mezery silného permanentního magnetu",
            "Využívá pouze rotujícího magnetu bez cívky",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Co přesně se stane v dynamickém reproduktoru, když do cívky přivedeme střídavý signál ze zesilovače?",
          moznosti: [
            "Kolem cívky vznikne proměnlivé magnetické pole, to interaguje s permanentním magnetem a rozkmitá cívku i s membránou",
            "Cívka se rozžhaví a zvuk vydává praskáním",
            "Začne generovat elektrický proud",
          ],
          spravna: 0,
        },
        {
          otazka:
            "Na jakém principu pracuje méně běžný elektrostatický reproduktor?",
          moznosti: [
            "Na principu křížové vazby cívek",
            "Funguje na principu vzájemného přitahování a odpuzování elektrických nábojů přivedených na desky kondenzátoru",
            "Na principu tlaku vody",
          ],
          spravna: 1,
        },
        {
          otazka: "Jaká je základní konstrukce elektrostatického reproduktoru?",
          moznosti: [
            "Obrovský permanentní magnet s drátem",
            "Velmi tenká a elektricky nabitá membrána propnutá mezi dvěma pevnými perforovanými elektrodami (statory)",
            "Miska naplněná uhlíkovým prachem",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Který fyzikální jev využívají velmi levné a malé bzučáky (pípáky)?",
          moznosti: [
            "Piezoelektrický jev",
            "Termoelektrický jev",
            "Fotoelektrický jev",
          ],
          spravna: 0,
        },
        {
          otazka:
            "Co se fyzicky stane s piezoelektrickým krystalem nebo keramikou, pokud na ni přivedeme elektrické napětí?",
          moznosti: [
            "Začne barevně svítit",
            "Materiál se mechanicky zdeformuje (prohne), čímž stlačí vzduch a vydá zvukový ráz",
            "Rozpustí se",
          ],
          spravna: 1,
        },
        {
          otazka:
            "V jakých aplikacích se piezo měniče realizované jako malé bzučáky masivně používají?",
          moznosti: [
            "V obrovských kinosálech pro basové zvuky",
            "V mikrokontrolérových obvodech a digitálních hodinách k upozornění pípáním",
            "V telefonech jako hlavní reproduktor",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Pokud má piezo bzučák u mikrokontroléru tzv. active LOW logiku, jakým signálem na řídicím pinu ho rozezvučíme?",
          moznosti: [
            "Napětím 230 V ze zásuvky",
            "Trvalým napětím +3,3 V (logickou jedničkou / HIGH)",
            "Přivedením logické nuly (LOW / zemního potenciálu) na signálový pin (např. GPIO 4)",
          ],
          spravna: 2,
        },
        {
          otazka:
            "Proč je piezoelektrický měnič zvláště efektivní pro pípavé zvuky (vysoké frekvence)?",
          moznosti: [
            "Protože je velmi lehký a destička dokáže prudce měnit tvar při rychlém střídání napětí",
            "Protože má hluboký tón a silné basy",
            "Protože pohlcuje ozvěnu v místnosti",
          ],
          spravna: 0,
        },
      ],
    },
    {
      id: 19,
      nazev: "19. Akusticko-elektrické měniče (Mikrofony)",
      teorie:
        "Mikrofony mění akustický tlak na elektrický signál. Dynamický mikrofon (membrána s cívkou v magnetu) využívá elektromagnetickou indukci (Faradayův zákon). Je odolný a nepotřebuje napájení. Kondenzátorový mikrofon snímá zvuk pomocí změny kapacity mezi pevnou a pohyblivou membránou. Musí být nabitý externím 'fantomovým' napájením, ale má širší a rovnější charakteristiku zvuku. Elektretový má náboj z výroby, ale napájení potřebuje pro svůj tranzistorový předzesilovač. Piezoelektrický mění mechanický tlak přímo na napětí (např. kontaktní kytarové snímače).",
      kviz: [
        {
          otazka:
            "K čemu slouží akusticko-elektrické měniče (obecně zvané mikrofony)?",
          moznosti: [
            "Přeměňují elektrický proud na hlasitý zvuk pro diváky",
            "Slouží k přeměně akustické energie (změn tlaku vzduchu) na střídavý elektrický signál",
            "Šifrují hlas pro vysílání do rádia",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Na jakém hlavním fyzikálním zákonu je založena činnost dynamického mikrofonu?",
          moznosti: [
            "Ohmův zákon",
            "Faradayův zákon elektromagnetické indukce",
            "Boyleův-Mariotteův zákon",
          ],
          spravna: 1,
        },
        {
          otazka: "Jak je zkonstruován klasický dynamický mikrofon?",
          moznosti: [
            "Má pouze dvě zlaté mřížky pod napětím",
            "K tenké membráně je pevně připojena malá cívka, která je zasunuta v mezeře permanentního magnetu",
            "Obsahuje piezo krystal",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Jak vzniká samotné napětí v dynamickém mikrofonu, když mluvíme?",
          moznosti: [
            "Akustická vlna rozkmitá membránu a cívku v magnetickém poli, čímž se v ní indukuje napětí odpovídající zvuku",
            "Baterie vysílá napětí do mikrofonu a zvuk ho přeruší",
            "Zvuk zahřívá vodič a termočlánek tvoří proud",
          ],
          spravna: 0,
        },
        {
          otazka:
            "Co patří mezi hlavní výhody dynamických mikrofonů na koncertech?",
          moznosti: [
            "Snadno se poškodí, takže jsou lehké",
            "Mají velkou mechanickou odolnost, zvládnou velmi hlasité zvuky a nepotřebují vnější napájení",
            "Reagují na infrazvuk",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Na jakém fyzikálním principu generuje signál kondenzátorový mikrofon?",
          moznosti: [
            "Změna elektrického odporu uhlíkového prachu",
            "Změna magnetického pole cívky",
            "Změna elektrické kapacity kondenzátoru při pohybu membrány",
          ],
          spravna: 2,
        },
        {
          otazka:
            "Z čeho se skládá kondenzátor uvnitř kondenzátorového mikrofonu?",
          moznosti: [
            "Ze svitku měděného drátu",
            "Ze dvou tenkých destiček těsně u sebe – jedna je pevný stator, druhá je velmi tenká pohyblivá membrána",
            "Ze skleněné trubice plněné plynem",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Co se děje uvnitř kondenzátorového mikrofonu při dopadu zvukové vlny?",
          moznosti: [
            "Mění se vzdálenost mezi destičkami, což způsobí změnu celkové kapacity kondenzátoru",
            "Začne rotovat magnet",
            "Mění se teplota membrány",
          ],
          spravna: 0,
        },
        {
          otazka:
            "Aby měření změny kapacity fungovalo, musí být kondenzátor trvale elektricky nabitý. Jak se to v praxi řeší?",
          moznosti: [
            "Mikrofon se před koncertem zapojí do zásuvky na 230 V",
            "Mixážní pult po kabelu posílá tzv. vnější fantomové napájení (často +48 V)",
            "Nijak, nabije se třením o vzduch",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Čím se liší tzv. elektretový mikrofon od čistě kondenzátorového?",
          moznosti: [
            "Elektretový je obrovský",
            "Materiál elektret má v sobě trvalý elektrický náboj zapečený už z výroby, takže nepotřebuje fantomové napájení k nabití membrány",
            "Funguje na magnetickém principu",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Proč elektretový mikrofon v notebooku nebo telefonu přesto potřebuje malé napájení (třeba 3 V)?",
          moznosti: [
            "K zahřátí membrány v zimě",
            "Protože jím musí být napájen vnitřní miniaturní tranzistorový předzesilovač, který slabý signál zesílí",
            "Aby svítila stavová LED dioda",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Proč se ve studiích často preferují drahé kondenzátorové mikrofony před dynamickými?",
          moznosti: [
            "Protože jsou velmi těžké",
            "Mají obrovskou citlivost na detaily a mnohem rovnější, širší frekvenční charakteristiku (věrný zvuk)",
            "Protože se nedají rozbít",
          ],
          spravna: 1,
        },
        {
          otazka: "Co snímá piezoelektrický mikrofon (snímač)?",
          moznosti: [
            "Magnetické pole strun",
            "Snímá zvuk formou přímého mechanického tlaku na výbrus z krystalu/keramiky",
            "Snímá teplotní změny v místnosti",
          ],
          spravna: 1,
        },
        {
          otazka:
            "K čemu se v hudbě nejčastěji využívají piezoelektrické snímače?",
          moznosti: [
            "Jako zpěvové mikrofony",
            "K nahrávání bicích",
            "Jako kontaktní snímače připevněné přímo na rezonanční desku nástroje (např. akustická kytara)",
          ],
          spravna: 2,
        },
        {
          otazka:
            "Proč se piezoelektrické měniče používají na kytarách a nikoliv pro profesionální zpěv?",
          moznosti: [
            "Protože potřebují k provozu síťových 230 V",
            "Jsou optimalizované pro kontaktní přenos mechanické deformace mřížky, nikoliv pro citlivé tlakové změny ve vzduchu",
            "Protože jsou příliš drahé",
          ],
          spravna: 1,
        },
      ],
    },
    {
      id: 20,
      nazev: "20. Optické vlákno a šíření paprsku",
      teorie:
        "Optoelektronika spojuje elektroniku a světlo. Optické vlákno z křemenného skla se skládá z jádra (n1 - vyšší index lomu), pláště (n2 - nižší index lomu) a ochranného obalu. Světlo letí jádrem díky totálnímu odrazu. Podmínky totálního odrazu: přechod z hustšího (n1) do řidšího (n2) prostředí a dopad paprsku pod úhlem větším nebo rovným meznímu úhlu (sin theta_m = n2/n1). Výhody vláken: extrémní přenosová kapacita (Tb/s), minimální útlum na desítky km, plná imunita vůči EMI (rušení) a nemožnost vnějšího bezkontaktního odposlechu.",
      kviz: [
        {
          otazka: "Čím se zabývá obor zvaný Optoelektronika?",
          moznosti: [
            "Výrobou brýlí",
            "Spojením elektroniky a optiky (vznik, přenos a detekce světla elektronickými prvky jako LED, lasery, vlákna)",
            "Zpracováním rádiového AM signálu",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Z jakého základního materiálu je obvykle vyrobeno samotné optické vlákno pro přenos dat?",
          moznosti: [
            "Z tenkého měděného drátu",
            "Z krystalického uhlíku",
            "Z velmi čistého křemenného skla (případně plastu u levných variant)",
          ],
          spravna: 2,
        },
        {
          otazka:
            "Z jakých tří hlavních fyzických částí se skládá konstrukce optického vlákna?",
          moznosti: [
            "Vodič, izolant a konektor",
            "Jádro (Core), plášť (Cladding) a ochranný obal (Coating)",
            "Anoda, katoda a dielektrikum",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Která část optického vlákna slouží přímo k fyzickému vedení a šíření světelného paprsku?",
          moznosti: ["Plášť", "Vnitřní jádro", "Ochranný obal z kevlaru"],
          spravna: 1,
        },
        {
          otazka:
            "Jaká je nutná podmínka optické hustoty u vlákna (vztah indexů lomu jádra n1 a pláště n2)?",
          moznosti: [
            "Jádro musí být opticky HUSTŠÍ (má vyšší index lomu n1) než obklopující plášť (n2)",
            "Jádro musí být ŘIDŠÍ než plášť",
            "Jádro a plášť musí mít naprosto stejný index lomu",
          ],
          spravna: 0,
        },
        {
          otazka:
            "Na jakém fyzikálním jevu drží světelný paprsek uvnitř tenkého jádra, aniž by 'utekl' do stěn pláště?",
          moznosti: [
            "Na principu odstředivé síly",
            "Na principu elektromagnetické indukce",
            "Na principu úplného (totálního) odrazu",
          ],
          spravna: 2,
        },
        {
          otazka:
            "Co se musí stát, aby u rozhraní jádra a pláště nastal totální odraz (1. podmínka)?",
          moznosti: [
            "Vlákno musí být v absolutní tmě",
            "Světlo musí přecházet z prostředí opticky hustšího do opticky řidšího",
            "Musí být napájeno alespoň 5 volty",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Jaká je druhá kritická podmínka týkající se úhlu, pod kterým paprsek zevnitř dopadne na hranu stěny (rozhraní pláště)?",
          moznosti: [
            "Musí narazit kolmo (přesně v 90°)",
            "Paprsek musí dopadnout pod úhlem, který je ROVEN nebo VĚTŠÍ než tzv. mezní úhel",
            "Paprsek se musí točit do spirály",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Jaký vzorec se používá pro teoretický výpočet mezního úhlu (theta_m)?",
          moznosti: [
            "cos(theta_m) = n1 / n2",
            "sin(theta_m) = n2 / n1",
            "tan(theta_m) = n1 * n2",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Co se fyzicky stane s paprskem, pokud je splněn mezní úhel a n1 > n2?",
          moznosti: [
            "Rozhraním vůbec neprojde do pláště, narazí jako na dokonalé zrcadlo a odrazí se klikatě zpět do jádra",
            "Vlákno se roztaví",
            "Paprsek změní barvu na zelenou",
          ],
          spravna: 0,
        },
        {
          otazka:
            "Co by se stalo, kdyby světelný paprsek vevnitř narazil do stěny pod PŘÍLIŠ OSTRÝM úhlem (menším než mezním)?",
          moznosti: [
            "Vrátil by se zpět do vysílače",
            "Prošel by rozhraním ven do pláště, ztratil by se a signál by se utlumil",
            "Zrychlil by na dvojnásobek rychlosti světla",
          ],
          spravna: 1,
        },
        {
          otazka:
            "V čem spočívá obrovská datová výhoda optických kabelů oproti běžným UTP kabelům (mědi)?",
          moznosti: [
            "Dají se levně natřít libovolnou barvou",
            "Poskytují extrémně obrovskou přenosovou kapacitu (šířku pásma v řádech Terabitů za sekundu)",
            "Samy vyrábějí elektřinu",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Jak ovlivní činnost optického kabelu, když ho položíme těsně vedle silného vedení vysokého napětí 22 kV?",
          moznosti: [
            "Světelný signál bude zcela rušen",
            "Vůbec nijak, protože optické vlákno má absolutní imunitu vůči elektromagnetickému rušení (EMI)",
            "Vlákno začne jiskřit",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Která z těchto vlastností dělá z optických kabelů ideální nástroj pro vojenské a bankovní spoje?",
          moznosti: [
            "Mají vysokou bezpečnost, nejdou jednoduše a bezkontaktně odposlouchávat klasickou anténou jako dráty",
            "Dají se natahovat jako guma",
            "Jsou nezničitelné sekerou",
          ],
          spravna: 0,
        },
        {
          otazka:
            "Jaký je útlum (ztráta) světelného signálu u kvalitních optických vláken v praxi?",
          moznosti: [
            "Ztrácí se obrovsky už po pěti metrech",
            "Je nepatrný, umožňuje poslat datový paprsek na desítky kilometrů beze ztrát a bez nutnosti ho v cestě zesilovat",
            "Závisí čistě na barvě izolace kabelu",
          ],
          spravna: 1,
        },
      ],
    },
    {
      id: 21,
      nazev: "21. Typy optických vláken",
      teorie:
        "Vlákna dělíme podle šířených světelných drah (módů) a profilu indexu lomu. Jednovidové vlákno (Single-mode) má extrémně tenké jádro (cca 9 µm). Šíří se jím jen 1 paprsek rovně středem (nemá modovou disperzi = nulové rozmazání). Zdroj je laser, použití na dlouhé spoje (desítky km). Vícevidové se skokovou změnou (Step-index) má silné jádro (50-100 µm). Cestuje v něm mnoho módů odrazem, což tvoří velkou modovou disperzi (paprsky dorazí různě, obdélník signálu se rozmaže). Vícevidové gradientní vlákno má klesající index lomu od středu ke kraji – paprsky letí po sinusoidě, krajem letí rychleji, čímž doženou středové paprsky a disperze se výrazně potlačí.",
      kviz: [
        {
          otazka: "Jaké jsou dvě hlavní kategorie dělení optických vláken?",
          moznosti: [
            "Podle barvy pláště a hmotnosti skla",
            "Podle počtu světelných drah (módů) a podle profilu změny indexu lomu",
            "Podle napájecího napětí a proudu",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Jaký průměr jádra má typicky 'Jednovidové vlákno' (Single-mode)?",
          moznosti: [
            "Extrémně tenké jádro o průměru pouze 8 až 10 µm (mikrometrů)",
            "Velmi tlusté jádro, více než 1 milimetr",
            "Má pouze dutou trubičku bez skla",
          ],
          spravna: 0,
        },
        {
          otazka:
            "Kolik módů (paprsků) světla se může fyzicky šířit jednovidovým vláknem?",
          moznosti: [
            "Tisíce módů současně",
            "Dva hlavní módy (plus a minus)",
            "Pouze jeden jediný mód světla",
          ],
          spravna: 2,
        },
        {
          otazka:
            "Po jaké dráze uvnitř letí světlo u jednovidového (Single-mode) vlákna?",
          moznosti: [
            "Klepáním o hrany vlnovodu",
            "Prakticky v dokonalé přímce přímo středem tenkého jádra, bez odrazů o boční stěny",
            "Točí se v divokých spirálách",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Co to je Modová disperze, která u jednovidových vláken NENÍ přítomna?",
          moznosti: [
            "Rozmazání datového signálu na konci kabelu, vzniklé tím, že odrážející se paprsky dorazily do cíle v odlišných časech",
            "Únik světla do vesmíru",
            "Prasknutí kabelu mrazem",
          ],
          spravna: 0,
        },
        {
          otazka:
            "Jaký velmi silný a přesný zdroj světla se musí vždy použít u jednovidových vláken?",
          moznosti: [
            "Obyčejná halogenová žárovka",
            "Obyčejná blikající LED",
            "Polovodičový Laser",
          ],
          spravna: 2,
        },
        {
          otazka:
            "Na co se výhradně používá jednovidové vlákno v telekomunikacích?",
          moznosti: [
            "Pouze pro připojení PC k routeru doma na stole",
            "Pro dálkové páteřní spoje (spojení měst a států) na desítky a stovky kilometrů",
            "Do ozdobných stolních lampiček",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Co charakterizuje 'Vícevidové vlákno se skokovou změnou' (Multi-mode Step-index)?",
          moznosti: [
            "Změna indexu lomu mezi jádrem a pláštěm je náhlá (skok) a má širší jádro (50–100 µm)",
            "Je složené jen z pláště",
            "Kabel se musí instalovat jen po schodech",
          ],
          spravna: 0,
        },
        {
          otazka:
            "Proč vzniká masivní modová disperze u vícevidového vlákna se skokovou změnou?",
          moznosti: [
            "Protože je do něj pouštěno střídavé napětí",
            "Protože stovky různých paprsků v širokém jádře rotují a odrážejí se pod různými úhly, každý tak urazí jinou vzdálenost a signál se na konci 'rozmaže'",
            "Protože čočka rozloží barvy na duhu",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Co se na výstupu stane s původně ostře řezaným krátkým datovým impulsem (obdélníkem) kvůli modové disperzi?",
          moznosti: [
            "Zaostří se ještě víc",
            "Rozšíří se a rozmaže do nepřehledné boule, takže za sebou jdoucí datové nuly a jedničky splynou",
            "Otočí se mu fáze",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Jaký vylepšený profil indexu lomu má 'Vícevidové vlákno s gradientní změnou'?",
          moznosti: [
            "Index lomu jádra je všude stejný jako u vody",
            "Index lomu je nejvyšší přesně ve středu jádra a směrem ven k plášti plynule a hladce (gradientně) klesá",
            "Má tvar čtverce",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Jakou cestovní dráhu vykreslí světelný paprsek v gradientním vícevidovém vlákně?",
          moznosti: [
            "Neodráží se ostrými hranami, ale plynule se zakřivuje a letí po hladkých sinusoidách",
            "Lítá zcela náhodně a chaoticky",
            "Cestuje po dokonalých přímkách podél stěny",
          ],
          spravna: 0,
        },
        {
          otazka:
            "Jak fyzikálně gradientní vlákno potlačuje časovou ztrátu (disperzi) různě dlouhých paprsků?",
          moznosti: [
            "Používá barevné filtry",
            "Paprsek, který se zakřivuje blízko okraje pláště, letí sice delší trasou, ale v opticky řidším skle cestuje rychleji – tím nakonec dožene přímý paprsek letící pomaleji v hustém středu",
            "Funguje jako kouzlo beze ztrát",
          ],
          spravna: 1,
        },
        {
          otazka: "Kde najde uplatnění gradientní vícevidové vlákno?",
          moznosti: [
            "Při transatlantickém připojení Evropy a Ameriky po dně oceánu",
            "V lokálních počítačových sítích (LAN) a při propojování serverů v datových centrech (na střední vzdálenosti)",
            "Ve výzkumu temné hmoty",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Jaké komponenty se typicky nepoužívají pro přijímání signálu na konci libovolného optického vlákna?",
          moznosti: [
            "Cívky a relé",
            "Optické detektory (např. PIN fotodiody), které překládají světelné záblesky zpět na elektrický proud",
            "Mikrofony",
          ],
          spravna: 1,
        },
      ],
    },
    {
      id: 22,
      nazev: "22. Základy číslicové techniky",
      teorie:
        "Analogový signál je spojitý a náchylný k rušení. Číslicový (digitální) signál je nespojitý, využívá dvoustavové logiky (L a H, 0 a 1), proto je enormně odolný k rušení. Ve standardu TTL logická nula (Low) odpovídá napětí 0 V až 0,8 V. Logická jednička (High) 2 V až 5 V. Pásmo mezi je zakázané. Základní logické funkce definují zpracování: Funkce AND (logický součin, značka '&') dá na výstupu jedničku POUZE tehdy, jsou-li VŠECHNY vstupy 1 (odpovídá sériovému zapojení vypínačů). Funkce OR (logický součet, značka '>=1') dá na výstupu jedničku, pokud je ALESPOŇ JEDEN ze vstupů 1 (paralelní zapojení vypínačů).",
      kviz: [
        {
          otazka:
            "Jaký je hlavní rozdíl mezi analogovým a číslicovým (digitálním) signálem?",
          moznosti: [
            "Analogový signál je hlučný, digitální je tichý",
            "Analogový je plynule spojitý, zatímco digitální je nespojitý (diskrétní) a nabývá pouze jasně definovaných stavů (např. 0 a 1)",
            "Analogový se posílá kabelem, digitální vzduchem",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Proč se moderní počítače a elektronika masivně orientují právě na digitální zpracování a dvojkovou soustavu?",
          moznosti: [
            "Protože je jednodušší na opravu pájkou",
            "Digitální signál o dvou oddělených stavech poskytuje obrovskou imunitu vůči šumu a rušení, a data se z něj snadno ukládají do pamětí bez ztráty přesnosti",
            "Protože šetří drahý hliník v drátech",
          ],
          spravna: 1,
        },
        {
          otazka: "Co znamená pojem 'dvoustavová veličina' v elektronice?",
          moznosti: [
            "Součástka mající dvě nožičky",
            "Fyzikální veličina (často napětí), která v rámci celého systému nabývá jen dvou rozlišitelných stavů (vypnuto / zapnuto)",
            "Počítač, který se musí restartovat",
          ],
          spravna: 1,
        },
        {
          otazka: "Co vyjadřuje logická nula (označovaná písmenem L - Low)?",
          moznosti: [
            "Stav 'zapnuto' nebo 'pravda'",
            "Stav 'vypnuto' nebo 'nepravda', kterému fyzikálně odpovídá velmi nízké napětí",
            "Nulový účet v bance",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Jakým napěťovým rozsahem je definována logická nula v absolutním standardu TTL logiky?",
          moznosti: ["-12 V až 0 V", "2 V až 5 V", "0 V až 0,8 V"],
          spravna: 2,
        },
        {
          otazka:
            "Co vyjadřuje logická jednička (označovaná písmenem H - High)?",
          moznosti: [
            "Stav 'zapnuto' nebo 'pravda', reprezentovaný v TTL obvodech vyšším napětím",
            "Zkrat na základní desce",
            "Přerušení vodiče",
          ],
          spravna: 0,
        },
        {
          otazka:
            "Jakým napěťovým rozsahem je definována logická jednička v TTL technologii?",
          moznosti: ["2 V až 5 V", "0 V až 0,8 V", "230 V"],
          spravna: 0,
        },
        {
          otazka:
            "Co se v obvodech TTL nachází v napěťovém rozmezí mezi 0,8 V a 2 V?",
          moznosti: [
            "Bezpečný pracovní prostor",
            "Zakázané pásmo, kde není stav 0 ani 1 definován, a čip by toto napětí mohl špatně a chaoticky vyhodnotit",
            "Vyhrazené napětí pro nabíjení baterie",
          ],
          spravna: 1,
        },
        {
          otazka: "K čemu v elektronice slouží základní logické funkce?",
          moznosti: [
            "Určují předem daná logická pravidla pro zpracování kombinace vstupních stavů na jasný výstupní stav",
            "Řídí rychlost otáčení větráčků podle teploty",
            "Zvyšují napájecí proud pro USB porty",
          ],
          spravna: 0,
        },
        {
          otazka:
            "Jaká musí být podmínka, aby dalo hradlo vykonávající funkci AND (Logický součin) na svém výstupu jedničku?",
          moznosti: [
            "Stačí, když je v jedničce kterýkoliv z jeho vstupů",
            "Nesmí být v jedničce žádný vstup",
            "Všechny jeho vstupy (bez výjimky) se musí současně nacházet v logické 1",
          ],
          spravna: 2,
        },
        {
          otazka:
            "Jakým znakem se v matematické Booleově algebře zapisuje funkce AND?",
          moznosti: [
            "Znakem pro sčítání (Y = A + B)",
            "Znakem pro násobení, tzv. tečkou (Y = A . B)",
            "Znakem pro rovnítko (Y = A = B)",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Jaké reálné zapojení spínačů ze života přesně odpovídá chování funkce AND?",
          moznosti: [
            "Sériové zapojení dvou vypínačů (žárovka svítí, jen když zmáčknu první A ZÁROVEŇ druhý)",
            "Paralelní zapojení dvou vypínačů vedle sebe",
            "Schodišťové zapojení s přepínačem",
          ],
          spravna: 0,
        },
        {
          otazka:
            "Kdy se objeví logická jednička na výstupu hradla OR (Logický součet)?",
          moznosti: [
            "Pouze pokud je alespoň jeden ze vstupů (nebo oba) v logické 1",
            "Pouze když je právě jeden vstup 1 a druhý je 0 (exkluzivní funkce)",
            "Pouze tehdy, když jsou oba dva vstupy v nule",
          ],
          spravna: 0,
        },
        {
          otazka:
            "Jakým znakem se v matematické rovnici zapisuje funkce logického součtu (OR)?",
          moznosti: [
            "Tečkou (.)",
            "Pruhem nad písmenem",
            "Znakem plus (+) -> Y = A + B",
          ],
          spravna: 2,
        },
        {
          otazka:
            "Jakému fyzickému zapojení světelného obvodu odpovídá funkce OR?",
          moznosti: [
            "Dva vypínače zapojené paralelně (vedle sebe) – žárovka svítí, když zapnu jeden, NEBO druhý, případně oba současně",
            "Dva vypínače v sérii",
            "Kondenzátor a tlumivka proti zemi",
          ],
          spravna: 0,
        },
      ],
    },
    {
      id: 23,
      nazev: "23. Způsoby vyjádření logických funkcí",
      teorie:
        "Logickou funkci lze zapsat: 1. Matematicky (Booleova algebra - Y=A.B, Y=A+B, negace pruhem nahoře). 2. Pravdivostní tabulkou (zobrazí výstup pro VŠECHNY možné kombinace, např. 4 vstupy = 16 řádků). 3. Grafickým schématem z hradel. Podle IEC značení se maluje obdélník, ve kterém má AND znak '&', OR má znak '>=1' a negace na výstupu se kreslí malým prázdným kroužkem. 4. Vennovy diagramy (průnik=AND, sjednocení=OR). 5. Karnaughova mapa (KM) slouží k minimalizaci rovnic. Řadí se podle Grayova kódu, jedničky tvoří smyčky, čímž vypadnou nepodstatné proměnné a obvod se značně zjednoduší z hlediska součástek.",
      kviz: [
        {
          otazka: "Co je to 'Logická funkce' v číslicové technice?",
          moznosti: [
            "Složitý program pro výpočet integrálů",
            "Přesný matematický či logický předpis, který vstupním jedničkám a nulám přiřadí odpovídající výstup",
            "Zařízení pro chlazení procesoru",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Jakými značkami pracuje k zápisu algebraická rovnice (tzv. Booleova algebra)?",
          moznosti: [
            "Písmennými proměnnými, tečkou pro AND, znaménkem + pro OR a pruhem nad písmenem pro negaci",
            "Sinem, kosinem a tangentou",
            "Dlouhými anglickými příkazy",
          ],
          spravna: 0,
        },
        {
          otazka:
            "Co je nejsilnější (ale nejzdlouhavější) zbraní pravdivostní tabulky?",
          moznosti: [
            "Je barevně hezká na pohled",
            "Dokáže vyjmenovat a jasně definovat všechny možné existující stavy vstupů a jejich přesný výstup pro jakoukoliv funkci",
            "Sama od sebe funkci ihned minimalizuje a zkrátí",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Kolik přesně řádků bude muset mít pravdivostní tabulka pro obvod, který zpracovává data ze 4 různých spínačů (4 vstupy)?",
          moznosti: [
            "4 řádky",
            "8 řádků",
            "16 řádků, protože počet kombinací je dán vzorcem 2 na entou (2^4)",
          ],
          spravna: 2,
        },
        {
          otazka:
            "Jakým tvarem se podle evropské normy IEC kreslí schematická logická značka v plánech?",
          moznosti: [
            "Kosočtvercem",
            "Čtverečkem s textem",
            "Stroze a technicky jako obdélník s naznačenými vstupy zleva a výstupy zprava",
          ],
          spravna: 2,
        },
        {
          otazka:
            "Jaký znak má podle normy IEC obdélník uvnitř sebe, jestliže reprezentuje hradlo AND?",
          moznosti: ["Slovo AND", "Znak ampersand (&)", "Znak plus (+)"],
          spravna: 1,
        },
        {
          otazka:
            "Které hradlo bude mít ve schématu v obdélníku zakreslený znak '>=1' (větší nebo rovno 1)?",
          moznosti: [
            "Hradlo NOR",
            "Hradlo AND",
            "Hradlo OR (protože stačí jedna nebo více jedniček k přepnutí)",
          ],
          spravna: 2,
        },
        {
          otazka:
            "Jak se ve schématické obvodové značce vyjadřuje logická operace negace (funkce NOT)?",
          moznosti: [
            "Přeškrtnutím celého obdélníku",
            "Malým, nenápadným prázdným kroužkem nakresleným na vstupu nebo na výstupu hradla",
            "Výrazným červeným trojúhelníkem",
          ],
          spravna: 1,
        },
        {
          otazka: "Jakým způsobem znázorňují logické funkce Vennovy diagramy?",
          moznosti: [
            "Jako časový graf napětí",
            "Množinovými grafickými kruhy, kde se oblasti prolínají",
            "Číslicemi v kostce",
          ],
          spravna: 1,
        },
        {
          otazka: "Co by ve Vennově diagramu označovalo funkci AND?",
          moznosti: [
            "Sjednocení (vybarvení všech kruhů jako celku)",
            "Průnik kruhů (vybarvená by byla pouze část, kde se překrývají)",
            "Prázdné kruhy",
          ],
          spravna: 1,
        },
        {
          otazka: "K čemu v inženýrské praxi slouží Karnaughova mapa?",
          moznosti: [
            "K topografickému hledání součástek na propečené desce",
            "K zásadní minimalizaci a zjednodušování složitých logických rovnic, aby se ušetřila hradla při výrobě",
            "K přepočítávání dekadických čísel",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Jakým netradičním kódem jsou úmyslně seřazeny proměnné na okraji Karnaughovy mapy (např. 00, 01, 11, 10)?",
          moznosti: [
            "Klasickou binární posloupností",
            "Grayovým kódem",
            "ASCII kódem",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Proč se k popisu souřadnic na okraji Karnaughovy mapy používá výhradně Grayův kód?",
          moznosti: [
            "Zajišťuje, aby se sousední políčka mapy (i ta přes okraj) lišila ve svém zápisu VŽDY a POUZE v jediné proměnné, což je matematický základ mapy",
            "Protože to lépe vypadá",
            "Protože ho jako první objevil Gray",
          ],
          spravna: 0,
        },
        {
          otazka:
            "Jaký je postup při zjednodušování rovnice pomocí Karnaughovy mapy?",
          moznosti: [
            "Zpravdivostní tabulky se do mřížky zakreslí nuly a vynásobí se",
            "Z tabulky se do mřížky přepíší výstupní jedničky, pak se v mapě obkrouží do co největších bloků (smyček), přičemž z rovnice vypadne měnící se proměnná",
            "Smažou se všechna políčka, kde není 1 a 0 současně",
          ],
          spravna: 1,
        },
        {
          otazka:
            "O jaké velikosti mohou být tvořeny spojovací smyčky jedniček v Karnaughově mapě?",
          moznosti: [
            "Můžou být zcela libovolné",
            "Musí být vždy o velikosti 3 nebo 6 jedniček",
            "Mohou být pouze o velikosti jakékoliv mocniny dvou (např. 1, 2, 4, 8 nebo 16 jedniček spojených dohromady)",
          ],
          spravna: 2,
        },
      ],
    },
    {
      id: 24,
      nazev: "24. Klopné obvody v logice",
      teorie:
        "Zatímco kombinační hradla jsou bez paměti, klopné obvody jsou SEKVENČNÍ logické obvody mající paměť (díky vnitřní zpětné vazbě část výstupu vede na vstup). Výstupy jsou dva: přímý Q a negovaný /Q. Asynchronní RS klopný obvod má vstup S (Set - nastaví paměť na 1) a R (Reset - vynuluje na 0). Jeho tragédií je zakázaný stav (S=1, R=1), kdy hrozí chaos obvodu. D klopný obvod je moderní, synchronní obvod, odstranil chybu RS. Řídí ho hodinový impulz CLK, se kterým bezpečně uloží do paměti Q vstupní signál Data. JK klopný obvod je univerzální, také nemá zakázaný stav a při stavu (J=1, K=1) vstoupí do režimu 'toggle' – s každým hodinovým pulzem překlopí výstup. Slouží ke stavbě pamětí a děliček frekvence.",
      kviz: [
        {
          otazka:
            "Čím se kombinační obvody (AND, OR) radikálně liší od klopných obvodů?",
          moznosti: [
            "Jsou rychlejší a hřejí",
            "Nemají žádnou vnitřní zpětnou vazbu a neobsahují paměť (jejich výstup závisí okamžitě na aktuálním vstupu)",
            "Nepotřebují žádné napájení zvenčí",
          ],
          spravna: 1,
        },
        {
          otazka: "Klopné obvody patří do rodiny obvodů zvaných:",
          moznosti: [
            "Kombinační logické obvody",
            "Pasivní obvody",
            "Sekvenční logické obvody, protože kromě vstupů závisí i na časovém sledu (paměti)",
          ],
          spravna: 2,
        },
        {
          otazka:
            "Jakým technickým 'trikem' získá sekvenční obvod svou drahocennou schopnost paměti?",
          moznosti: [
            "Připojením mikroSD karty",
            "Zavedením zpětné vazby, část výstupního signálu se vrátí zpátky na vstup (vytvoří zadržovací smyčku)",
            "Zpomalením tranzistorů kondenzátorem",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Co označují typické výstupy každého logického klopného obvodu: písmeno Q a písmeno Q s pruhem (nebo /Q)?",
          moznosti: [
            "Dva absolutně stejné datové výstupy",
            "Q je přímý (hlavní) výstup stavu paměti a /Q je jeho komplementární (negovaný) protějšek",
            "Q je datový vstup a /Q je zemnící drát",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Jak se říká klopnému obvodu (např. běžný RS z NOR hradel), který reaguje na vstupy okamžitě bez ohledu na nějaký hodinový takt?",
          moznosti: [
            "Asynchronní klopný obvod",
            "Synchronní klopný obvod",
            "Analogový klopný obvod",
          ],
          spravna: 0,
        },
        {
          otazka:
            "K čemu slouží řídicí vstup S (z anglického Set) u obvodu RS?",
          moznosti: [
            "Vynuluje výstup na nulu",
            "Nastaví (zápíše) paměť do logické 1 (přímý výstup Q se stane vysokým)",
            "Vymaže celou vnitřní RAM",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Co se stane, pokud u obvodu RS přivedeme signál logické 1 na vstup R (Reset)?",
          moznosti: [
            "Paměťový obvod bezpečně vynuluje svůj stav (Q klesne na logickou nulu)",
            "Zkratuje se",
            "Trvale zmrzne v jedničce",
          ],
          spravna: 0,
        },
        {
          otazka:
            "V čem spočívá obrovská (až kritická) nevýhoda základního asynchronního RS obvodu?",
          moznosti: [
            "Má obrovskou elektrickou spotřebu a pomalu spíná",
            "Hrozí mu nebezpečný 'zakázaný stav' (pokud S=1 a R=1), což poruší pravidlo negovaných výstupů a může vyústit v náhodný chaos po odpojení",
            "Nedá se vyrobit z běžných součástek",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Co je hlavním vylepšením moderních 'synchronních' klopných obvodů (např. u procesorů)?",
          moznosti: [
            "Jsou řízeny jednotným hodinovým impulsním signálem zvaným CLK (Clock) a překlápí se jen na jeho hranu, což vylepšuje stabilitu",
            "Používají rádio k synchronizaci hodin s vysílačem",
            "Fungují bez chybění pouze v zimě",
          ],
          spravna: 0,
        },
        {
          otazka:
            "Jak funguje velmi oblíbený synchronní D klopný obvod (Data / Delay)?",
          moznosti: [
            "Chová se nepředvídatelně a náhodně přepíná logické úrovně",
            "Eliminuje RS chybu; v momentě hodinového taktu vezme aktuální stav z jednoho vstupu D a bezpečně ho překlopí a drží na svém výstupu",
            "Nedokáže uchovat 1, dokáže paměť pouze nulovat",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Který pokročilý klopný obvod platí za obvod 'univerzální', který nemá zakázaný stav a nahrazuje všechny předchozí typy?",
          moznosti: ["Klopný obvod JK", "Hradlo NAND", "Obvod Schmitt-RS"],
          spravna: 0,
        },
        {
          otazka:
            "K čemu slouží dodatečné piny na obvodu často označené jako SET a RESET s pruhem?",
          moznosti: [
            "Slouží jako napájení pro kondenzátor",
            "Jsou to asynchronní (nadřazené) vstupy pro okamžité a bezpečné nastavení výchozího stavu ihned po zapnutí napájení do desky (ignorují hodiny)",
            "Zajišťují uzemnění v případě přepětí sítě",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Co se začne dít u klopného obvodu JK, pokud mu 'natvrdo' přivedeme logické jedničky na oba vstupy (J=1 a K=1)?",
          moznosti: [
            "Shoří",
            "Dostane se do úsporného módu s minimální spotřebou proudu",
            "Vstoupí do režimu 'toggle', kde se s každým jedním hodinovým taktem neustále a sám od sebe překlopí do opačného stavu",
          ],
          spravna: 2,
        },
        {
          otazka:
            "Režim toggle (neustálé překlápění s každým hodinovým pulzem) u JK obvodu je dokonalý pro konstrukci kterého složitějšího celku?",
          moznosti: [
            "Přesného napěťového zdroje LDO",
            "Tepelného čidla",
            "Binárních čítačů a děliček frekvence",
          ],
          spravna: 2,
        },
        {
          otazka:
            "Co vlastně v technické praxi a mikroprocesorech fyzicky zastupuje jeden sestavený logický klopný obvod?",
          moznosti: [
            "Napěťový stabilizátor pro paměti SSD",
            "Nejzákladnější paměťovou buňku schopnou spolehlivě držet a uchovat 1 bit elektronické informace (0 nebo 1)",
            "Nic, je to pouze teoretický pojem z učebnice bez využití",
          ],
          spravna: 1,
        },
      ],
    },
    {
      id: 25,
      nazev: "25. Kombinační a sekvenční obvody; posuvný registr",
      teorie:
        "Zatímco výstup kombinačních obvodů závisí POUZE na aktuálních vstupech a řídí se zpožděním šíření (nepamatují si historii), sekvenční obvody kombinují vstupy s pamětí předchozího kroku a jsou většinou synchronizovány hodinovým pulsem (CLK). Z klopných obvodů se skládají 'posuvné registry'. Každý blok/stupeň v registru hlídá přesně 1 bit. Při pulzu CLK se data přesouvají mezi bloky jako po běžícím pásu. Zapojení se dělí např. na SISO (Sériový In / Sériový Out), což funguje jako čisté zpoždění, nebo na SIPO (Sériový In / Paralelní Out). SIPO je spásou pro procesory: pošleme mu data po jednom vodiči (sériově) a on je na konci najednou vystaví vedle sebe pro 8-bitový displej, čímž zásadně ušetříme zapojování pinů na čipu. Matematicky je posun binárního zápisu vlevo násobení 2, posun vpravo dělení.",
      kviz: [
        {
          otazka:
            "Jak se matematicky definuje chování kombinačních logických obvodů?",
          moznosti: [
            "Výstupní hodnoty obvodu jsou funkcí čistě a pouze okamžitých hodnot vstupních proměnných (nemá zpětnou vazbu z historie)",
            "Výstup se generuje náhodně pomocí termistoru",
            "Výstup se plynule mění bez závislosti na vstupech",
          ],
          spravna: 0,
        },
        {
          otazka:
            "Čím jediným je u kombinačních obvodů omezena rychlost změny na výstupu?",
          moznosti: [
            "Pouze kapacitou kondenzátoru ve zpětné vazbě",
            "Pouze dobou, po kterou signál fyzicky cestuje jednotlivými hradly (tzv. zpoždění šíření)",
            "Pracovním taktem z krystalového oscilátoru",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Vyber, který z následujících obvodů je zástupce kombinační logiky:",
          moznosti: [
            "Bistabilní klopný obvod RS",
            "Demultiplexor a sčítačka (jednotka ALU)",
            "Posuvný registr a statická paměť RAM",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Proč u sekvenčních logických obvodů potřebujeme hodiny (taktování CLK)?",
          moznosti: [
            "Aby procesor věděl, jaký je reálný čas",
            "Slouží k synchronizaci – ke změně vnitřního stavu (překlopení a uložení do paměti) dochází spořádaně a bezpečně pouze s příchodem hodinového impulzu, ne libovolně",
            "Zajišťují, aby procesor nevychladl a nezamrzl",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Z čeho se z pohledu hardwaru skládá typický posuvný registr?",
          moznosti: [
            "Z lineární řady spojených a na sebe navazujících klopných obvodů ovládaných společnými hodinami",
            "Z řady velkých elektrolytických kondenzátorů",
            "Z jednoho obřího transformátoru, cívky a relé",
          ],
          spravna: 0,
        },
        {
          otazka:
            "Kolik dat (informací) fyzicky hlídá a pamatuje si jedna buňka (jeden vnitřní stupeň) posuvného registru?",
          moznosti: [
            "Přesně jeden byte (8 bitů)",
            "Teoreticky nespočet bajtů",
            "Přesně 1 samostatný bit logické informace (0 nebo 1)",
          ],
          spravna: 2,
        },
        {
          otazka:
            "Kdy u synchronního posuvného registru dochází k fyzickému přesunu informace z jedné buňky do vedlejší buňky?",
          moznosti: [
            "Zcela volně a kontinuálně",
            "Jen tehdy, když klesne napájecí napětí pod povolené minimum",
            "K posunu dojde pouze v momentě příchodu aktivní hrany hodinového impulzu (signál CLK)",
          ],
          spravna: 2,
        },
        {
          otazka: "Co do praxe znamená zapojení registru jako režim SISO?",
          moznosti: [
            "Sériový vstup a sériový výstup (Serial-In, Serial-Out)",
            "Sériový vstup a paralelní výstup",
            "Složený integrovaný statický obvod",
          ],
          spravna: 0,
        },
        {
          otazka:
            "K čemu lze velmi chytře využít posuvný registr v provedení SISO?",
          moznosti: [
            "K rychlému ovládání pětadvaceti blikajících diod najednou",
            "Uloží data, prožene je buňkami a vysype ven úplně stejná, slouží tedy jako mimořádně přesná zpožďovací linka",
            "Ke stabilizaci napětí ze sítě z 12V na 5V",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Co znamená provedení registru typu SIPO (Serial-In, Parallel-Out)?",
          moznosti: [
            "Že převádí signály střídavé sítě na sériový kód",
            "Má sériový vstup (čte postupně blikající 0/1 data na jediném drátě) a paralelní výstup (nakonec vystaví všechny stavy najednou vedle sebe na X pinoch)",
            "Jde o záchranný systém proti zkratu",
          ],
          spravna: 1,
        },
        {
          otazka:
            "Jak se v praxi ulehčí mikrokontroléru (např. Arduinu) zapojení velkého a složitého segmentového displeje pomocí SIPO registru?",
          moznosti: [
            "Procesor nemusí použít svých 8 pinů k ovládání. Pošle data sériově jedním drátem do registru, a ten na povel celých 8 částí displeje naráz rozsvítí",
            "Registr vygeneruje svému displeji mnohem větší svítivé napětí",
            "Registr funguje jako externí ventilátor pro chlazení displeje a procesoru",
          ],
          spravna: 0,
        },
        {
          otazka:
            "Pokud v binární soustavě uvnitř registru posuneme bitové jedničky a nuly o jedno místo do doleva (tzv. Shift Left), jaký to má matematický význam?",
          moznosti: [
            "Číslo se vymaže",
            "Jedná se o hardwarové rychlé dělení dvěma",
            "Jedná se o bleskové hardwarové násobení celého čísla dvěma",
          ],
          spravna: 2,
        },
        {
          otazka:
            "Co se z logiky věci naopak stane s binárním číslem uloženým v buňkách posuvného registru, když posuneme všechny jeho bity o jedno místo doprava (Shift Right)?",
          moznosti: [
            "Číslo se změní na záporné a otočí se",
            "Jde o rychlé celočíselné hardwarové dělení dvěma",
            "Číslo se umocní na druhou",
          ],
          spravna: 1,
        },
        {
          otazka: "Co je to obousměrný posuvný registr?",
          moznosti: [
            "Posouvá bity naprosto náhodně tam a zpět v závislosti na šumu v okolí, čímž šifruje přenos",
            "Zpracovává střídavý proud o vysokém napětí",
            "Díky přidání vnitřního kombinačního hradla dokáže na povel řídicího pinu směrovat tok a posouvat svá data doleva nebo naopak doprava podle přání uživatele",
          ],
          spravna: 2,
        },
        {
          otazka:
            "Co z hlediska napájení a paměti spojuje všechny klopné obvody i registry z nich sestavené?",
          moznosti: [
            "Mohou k provozu používat baterie i solární panely střídavě",
            "Při vypnutí a odpojení od stejnosměrného napájení jejich vnitřní zpětná vazba zanikne a celá uložená sekvenční paměť se nenávratně ztratí a smaže",
            "Fungují čistě na optických světelných signálech",
          ],
          spravna: 1,
        },
      ],
    },
  ],
  // Kód pro další předměty (epoData, programovaniData atd.) ponechej beze změny!
};
