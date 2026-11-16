const geoModules = {
    // DZIAŁ 1: Co to jest krajobraz? Krajobrazy Polski (10 pytań)
    krajobrazy: [
        {
            question: "Czym jest krajobraz w geografii?",
            answers: [
                "Określonym wyglądem części powierzchni Ziemi",
                "Wyłącznie zbiorem wszystkich budynków i dróg w mieście",
                "Rodzajem mapy przedstawiającej ukształtowanie terenu",
                "Głębokością rzek i jezior na danym obszarze"
            ],
            correct: 0,
            explanation: "Krajobraz to określony wygląd części powierzchni Ziemi, na który składają się elementy przyrodnicze oraz wytwory człowieka."
        },
        {
            question: "Który z wymienionych elementów NIE należy do przyrodniczych składników krajobrazu?",
            answers: [
                "Ukształtowanie powierzchni i skały",
                "Wody powierzchniowe (rzeki, jeziora)",
                "Szata roślinna i świat zwierząt",
                "Budynki, mosty i sieć dróg"
            ],
            correct: 3,
            explanation: "Budynki, mosty i drogi to wytwory działalności człowieka (elementy kulturowe), a nie składniki przyrodnicze."
        },
        {
            question: "Jak nazywamy krajobraz przekształcony przez działalność człowieka?",
            answers: [
                "Krajobraz naturalny",
                "Krajobraz pierwotny",
                "Krajobraz kulturowy",
                "Krajobraz nizinny"
            ],
            correct: 2,
            explanation: "Krajobraz kulturowy (rolniczy, przemysłowy lub miejski) powstał w wyniku przekształcenia przyrody przez człowieka."
        },
        {
            question: "Jakie trzy rodzaje krajobrazu kulturowego wyróżniamy w podręczniku?",
            answers: [
                "Rolniczy, przemysłowy i miejski",
                "Górski, nizinny i pojezierny",
                "Nadmorski, leśny i bagienny",
                "Klifowy, wydmowy i wydobywczy"
            ],
            correct: 0,
            explanation: "Wyróżniamy krajobraz rolniczy (wsie i pola uprawne), przemysłowy (przewaga fabryk) oraz miejski (gęsta zabudowa i sieć ulic)."
        },
        {
            question: "Gdzie w Polsce zachował się jeszcze krajobraz naturalny (prawie niezmieniony przez człowieka)?",
            answers: [
                "Na niewielkich obszarach, m.in. w najwyższych partiach Tatr oraz w parkach narodowych",
                "W centrach wszystkich największych miast Polski",
                "Wyłącznie w pasie Nizin Środkowopolskich",
                "Na wszystkich polach uprawnych na Mazowszu"
            ],
            correct: 0,
            explanation: "Krajobraz naturalny występuje w Polsce już tylko na niewielkich, chronionych obszarach – m.in. w najwyższych partiach Tatr."
        },
        {
            question: "Ile pasów rzeźby terenu wydzielono na obszarze Polski (licząc od północy na południe)?",
            answers: [
                "Cztery pasy",
                "Pięć pasów",
                "Sześć pasów",
                "Siedem pasów"
            ],
            correct: 2,
            explanation: "W Polsce wydzielamy 6 pasów rzeźby terenu: pobrzeża, pojezierza, Niziny Środkowopolskie, Wyżyny Polskie, Kotliny Podkarpackie oraz góry."
        },
        {
            question: "Jaki charakter ma ukształtowanie powierzchni Polski jako całości?",
            answers: [
                "Polska jest krajem nizinnym (przeważają tereny nizinne w północnej i środkowej części)",
                "Polska jest krajem wybitnie wysokogórskim",
                "Większość Polski leży poniżej poziomu morza",
                "Cała Polska składa się wyłącznie z wyżyn powyżej 500 m n.p.m."
            ],
            correct: 0,
            explanation: "Polska jest krajem nizinnym – w jej północnej i środkowej części dominują niziny, a wyżyny i góry leżą na południu."
        },
        {
            question: "Jaką wysokość nad poziomem morza osiągają wzniesienia na Wyżynach Polskich?",
            answers: [
                "Nie przekraczają 500 m n.p.m.",
                "Przekraczają 2000 m n.p.m.",
                "Leżą poniżej 0 m n.p.m.",
                "Mają od 1000 do 1500 m n.p.m."
            ],
            correct: 0,
            explanation: "Na Wyżynach Polskich występuje wiele wzniesień, ale ich wysokość nie przekracza 500 m n.p.m."
        },
        {
            question: "Czym charakteryzuje się pas Kotlin Podkarpackich?",
            answers: [
                "Przeważają tam płaskie tereny z licznymi dolinami rzek",
                "Składa się wyłącznie z wysokich szczytów skalnych",
                "Jest to pas jezior polodowcowych nad Bałtykiem",
                "Występują tam ruchome wydmy nadmorskie"
            ],
            correct: 0,
            explanation: "Pas Kotlin Podkarpackich leży między Wyżynami Polskimi a Karpatami – przeważają tam płaskie tereny z licznymi dolinami rzek."
        },
        {
            question: "W jakim pasie rzeźby terenu leży Jelenia Góra (w obrębie Sudetów)?",
            answers: [
                "W pasie pobrzeży",
                "W pasie pojezierzy",
                "W pasie Nizin Środkowopolskich",
                "W pasie gór"
            ],
            correct: 3,
            explanation: "Pas gór rozciąga się na południu Polski i obejmuje dwa łańcuchy górskie: Karpaty oraz Sudety."
        }
    ],
    // DZIAŁ 2: Krajobraz nadmorski Wybrzeża Słowińskiego (10 pytań)
    wybrzeze: [
        {
            question: "Jak powstają wydmy na Wybrzeżu Słowińskim i ile metrów mogą mierzyć najwyższe z nich?",
            answers: [
                "Usypuje je wiatr z piasku wyrzuconego przez fale; osiągają nawet 40 m wysokości",
                "Tworzą je rzeki wpadające do Bałtyku; osiągają do 5 m wysokości",
                "Powstały wyłącznie w wyniku budowy falochronów; mają do 10 m wysokości",
                "Zostały usypane przez lądolód ze żwiru; mają ponad 100 m"
            ],
            correct: 0,
            explanation: "Fale wyrzucają na brzeg piasek, z którego silny wiatr usypuje wydmy (w okolicach jeziora Łebsko sięgają one nawet 40 m)."
        },
        {
            question: "O ile metrów w ciągu roku mogą przemieścić się ruchome wydmy w Słowińskim Parku Narodowym?",
            answers: [
                "O około 0,5 m rocznie",
                "Nawet o 10 m rocznie",
                "O dokładnie 100 m rocznie",
                "Wydmy w ogóle nie zmieniają swojego położenia"
            ],
            correct: 1,
            explanation: "Stałe przewiewanie piasku przez wiatr sprawia, że wydmy w Słowińskim Parku Narodowym mogą przesuwać się nawet o 10 metrów rocznie."
        },
        {
            question: "Czym charakteryzuje się wybrzeże klifowe?",
            answers: [
                "Jest płaskie i posiada szerokie, piaszczyste plaże",
                "Jest bardzo strome, wysokie (kilkanaście metrów) i podcinane przez fale sztormowe",
                "Występuje wyłącznie na dnie jezior przybrzeżnych",
                "Składa się wyłącznie z ruchomych wydm porośniętych lasem"
            ],
            correct: 1,
            explanation: "Wybrzeże klifowe to wybrzeże wysokie i strome – fale sztormowe podcinają zbocza, powodując ich osuwanie się."
        },
        {
            question: "W jakim celu na polskim wybrzeżu buduje się kamienne falochrony (np. w Jarosławcu)?",
            answers: [
                "Aby spowolnić proces niszczenia i podmywania brzegu przez fale morskie",
                "Aby zatrzymać wiatr wiejący od strony lądu",
                "Aby ułatwić rybakom suszenie sieci na wydmach",
                "Aby podnieść temperaturę wody w Bałtyku latem"
            ],
            correct: 0,
            explanation: "Kamienne falochrony osłabiają siłę fal uderzających o brzeg i spowalniają przesuwanie się linii brzegowej w głąb lądu."
        },
        {
            question: "Czym są prądy przybrzeżne?",
            answers: [
                "„Strumieniami” wody morskiej płynącymi wzdłuż wybrzeża i przenoszącymi piasek",
                "Silnymi wiatrami wiejącymi znad gór w stronę morza",
                "Kablami elektrycznymi ułożonymi na dnie Bałtyku",
                "Rzekami wpływającymi do jezior mazurskich"
            ],
            correct: 0,
            explanation: "Prądy przybrzeżne to strumienie wody morskiej płynące wzdłuż wybrzeża, które nanoszą duże ilości piasku na załamaniach linii brzegowej."
        },
        {
            question: "W jaki sposób powstają jeziora przybrzeżne (np. Łebsko, Jamno, Gardno)?",
            answers: [
                "Wypełniają kratery dawnych wulkanów nad Bałtykiem",
                "Prąd przybrzeżny nanosi piasek, tworząc mierzeję, która odcina zatokę od morza",
                "Powstają po wykopaniu głębokich kanałów przez rybaków",
                "Tworzą się wyłącznie w wyniku topnienia śniegu w górach"
            ],
            correct: 1,
            explanation: "Prąd przybrzeżny gromadzi piasek i tworzy wąską mierzeję, która stopniowo zamyka zatokę, zmieniając ją w jezioro przybrzeżne."
        },
        {
            question: "Które rośliny należą do tzw. roślin pionierskich zasiedlających ruchome wydmy nad Bałtykiem?",
            answers: [
                "Piaskownica zwyczajna, wydmuchrzyca piaskowa i mikołajek nadmorski",
                "Dęby, buki oraz lipy drobnolistne",
                "Świerki, modrzewie oraz kosodrzewina",
                "Trzcina pospolita i grzybienie białe"
            ],
            correct: 0,
            explanation: "Piaskownica zwyczajna, wydmuchrzyca piaskowa i chroniony mikołajek nadmorski jako pierwsze zasiedlają trudne, piaszczyste podłoże wydm."
        },
        {
            question: "Jak nazywają się zbiorowiska leśne złożone głównie z sosen, rosnące w większej odległości od brzegu morskiego?",
            answers: [
                "Grądy",
                "Bory",
                "Łęgi",
                "Stepy"
            ],
            correct: 1,
            explanation: "Zbiorowiska leśne z przewagą drzew iglastych (najczęściej sosen) nazywamy borami."
        },
        {
            question: "Jakie ptaki są charakterystyczne dla wybrzeża Bałtyku i jezior przybrzeżnych?",
            answers: [
                "Mewa srebrzysta oraz rybołów chwytający ryby długimi szponami",
                "Pingwiny i albatrosy",
                "Flamingi i pelikany",
                "Głuszce i orły przednie"
            ],
            correct: 0,
            explanation: "Nad Bałtykiem najliczniejszym gatunkiem mew jest mewa srebrzysta, a nad jeziorami żyje rybołów wypatrujący ryb z kilkudziesięciu metrów."
        },
        {
            question: "Czym głównie zajmują się mieszkańcy Wybrzeża Słowińskiego?",
            answers: [
                "Turystyką oraz rybołówstwem w małych portach (np. w Ustce, Łebie i Rowach)",
                "Wydobyciem węgla kamiennego i rud miedzi",
                "Uprawą winorośli na stromych zboczach klifów",
                "Przemysłem ciężkim i hutnictwem żelaza"
            ],
            correct: 0,
            explanation: "Mieszkańcy Wybrzeża Słowińskiego utrzymują się głównie z obsługi turystów oraz z rybołówstwa (połów śledzi, dorszy i fląder)."
        }
    ],
    // DZIAŁ 3: Krajobraz Pojezierza Mazurskiego (10 pytań)
    mazury: [
        {
            question: "Który czynnik przyrodniczy ukształtował w głównej mierze rzeźbę terenu Pojezierza Mazurskiego?",
            answers: [
                "Prądy przybrzeżne Morza Bałtyckiego",
                "Lądolód (rozległa pokrywa lodowa zalegająca tam przed tysiącami lat)",
                "Silne wiatry wiejące od strony Sudetów",
                "Działalność współczesnych rzek nizinnych"
            ],
            correct: 1,
            explanation: "Kilkanaście tysięcy lat temu zanikający lądolód pozostawił na Pojezierzu Mazurskim liczne wzniesienia oraz zagłębienia wypełnione wodą."
        },
        {
            question: "Jak nazywają się dwa największe jeziora Polski położone na Pojezierzu Mazurskim?",
            answers: [
                "Łebsko i Gardno",
                "Śniardwy i Mamry",
                "Hańcza i Wigry",
                "Gopło i Jeziorak"
            ],
            correct: 1,
            explanation: "Największe jeziora Polski to Śniardwy (114 km²) oraz Mamry (104 km²) – leżą one w Krainie Wielkich Jezior Mazurskich."
        },
        {
            question: "Która część pasa pojezierzy ma najwięcej jezior, a w której znajdują się jeziora największe?",
            answers: [
                "Najwięcej jezior jest na Pojezierzu Pomorskim, a największe na Pojezierzu Mazurskim",
                "Najwięcej jezior jest na Pojezierzu Wielkopolskim, a największe na Pomorskim",
                "Wszystkie największe i najliczniejsze jeziora leżą na Nizinie Mazowieckiej",
                "Na Pojezierzu Mazurskim jest najmniej jezior w całym pasie"
            ],
            correct: 0,
            explanation: "Najwięcej jezior występuje w zachodniej części pasa (Pojezierze Pomorskie), natomiast największe jeziora leżą we wschodniej części (Pojezierze Mazurskie)."
        },
        {
            question: "Ile jezior w rzeczywistości znajduje się na Pojezierzu Mazurskim (nazywanym Krainą Tysiąca Jezior)?",
            answers: [
                "Dokładnie 1000 jezior",
                "Około 2600 jezior",
                "Zaledwie 150 jezior",
                "Ponad 50 000 jezior"
            ],
            correct: 1,
            explanation: "Choć Mazury nazywa się potocznie Krainą Tysiąca Jezior, w rzeczywistości na ich obszarze znajduje się około 2600 jezior!"
        },
        {
            question: "Jak nazywa się jedno z najwyższych wzniesień Pojezierza Mazurskiego (309 m n.p.m.), obok którego leży ośrodek narciarski Piękna Góra?",
            answers: [
                "Śnieżka",
                "Szeska Góra (koło Gołdapi)",
                "Łysica",
                "Wieżyca"
            ],
            correct: 1,
            explanation: "Szeska Góra (309 m n.p.m.) to wysokie wzniesienie polodowcowe, a pobliska Piękna Góra koło Gołdapi słynie z tras narciarskich."
        },
        {
            question: "Który duży kompleks leśny zachował się na Pojezierzu Mazurskim?",
            answers: [
                "Puszcza Piska",
                "Puszcza Kampinoska",
                "Puszcza Białowieska",
                "Puszcza Notecka"
            ],
            correct: 0,
            explanation: "Na Pojezierzu Mazurskim zachowały się liczne puszcze – jedną z największych jest Puszcza Piska."
        },
        {
            question: "Jakie zabytki i atrakcje turystyczne znajdują się na Pojezierzu Mazurskim?",
            answers: [
                "Sanktuarium w Świętej Lipce, zamek w Reszlu i Twierdza Boyen w Giżycku",
                "Twierdza Modlin, zamek w Czersku i Żelazowa Wola",
                "Słowiński Park Narodowy i latarnia w Rozewiu",
                "Zamek Książ i Świątynia Wang"
            ],
            correct: 0,
            explanation: "Na Pojezierzu Mazurskim turyści chętnie odwiedzają sanktuarium w Świętej Lipce, XIV-wieczny zamek w Reszlu oraz Twierdzę Boyen w Giżycku."
        },
        {
            question: "Co znajduje się obecnie w XIV-wiecznej warowni krzyżackiej w Reszlu?",
            answers: [
                "Muzeum, hotel oraz galeria sztuki",
                "Wielka stocznia jachtowa",
                "Kopalnia bursztynu",
                "Lotnisko międzynarodowe"
            ],
            correct: 0,
            explanation: "W imponującym XIV-wiecznym zamku w Reszlu mieszczą się obecnie muzeum, hotel oraz galeria sztuki."
        },
        {
            question: "Jakie sporty wodne i zimowe można uprawiać na Pojezierzu Mazurskim dzięki jeziorom i urozmaiconej rzeźbie terenu?",
            answers: [
                "Latem żeglarstwo i kajakarstwo, a zimą narciarstwo zjazdowe i biegowe",
                "Wyłącznie surfing na falach oceanicznych",
                "Wyłącznie wspinaczkę wysokogórską na lodowcach",
                "Na Mazurach nie ma warunków do uprawiania sportów"
            ],
            correct: 0,
            explanation: "Połączone jeziora sprzyjają żeglarstwu i kajakarstwu, a wysokie wzgórza polodowcowe (np. koło Gołdapi) pozwalają na uprawianie narciarstwa."
        },
        {
            question: "Jaki negatywny skutek niesie ze sobą bardzo duży ruch turystyczny na Mazurach w okresie letnim?",
            answers: [
                "Wzrost ilości wytwarzanych śmieci oraz większy hałas szkodzący przyrodzie",
                "Całkowite zamarzanie jezior w lipcu i sierpniu",
                "Zanik wszystkich lasów w ciągu jednego lata",
                "Powstawanie nowych ruchomych wydm na środku jezior"
            ],
            correct: 0,
            explanation: "Ogromna liczba turystów latem wiąże się z większą ilością śmieci i hałasem, co niekorzystnie wpływa na czystą przyrodę Mazur."
        }
    ],
    // DZIAŁ 4: Krajobraz Niziny Mazowieckiej (10 pytań)
    mazowsze: [
        {
            question: "Dlaczego na Nizinie Mazowieckiej nie ma dziś tak wielu jezior jak na Pojezierzu Mazurskim?",
            answers: [
                "Lądolód nigdy nie dotarł na teren Niziny Mazowieckiej",
                "Lądolód ustąpił stąd znacznie wcześniej, więc wzniesienia zostały wyrównane, a jeziora zarosły i zanikły",
                "Wszystkie jeziora zostały zasypane podczas budowy Warszawy",
                "Na Nizinie Mazowieckiej w ogóle nie padają deszcze"
            ],
            correct: 1,
            explanation: "Z Niziny Mazowieckiej lądolód wycofał się wcześniej niż z pojezierzy – wzniesienia uległy wyrównaniu, a dawne jeziora zarosły."
        },
        {
            question: "Czym jest wysoczyzna w krajobrazie Niziny Mazowieckiej?",
            answers: [
                "Pofalowanym wzniesieniem otoczonym dolinami rzek, o nieco większej wysokości bezwzględnej niż płaska równina",
                "Głębokim wąwozem wyżłobionym przez potok górski",
                "Piaszczystą wyspą pośrodku Morza Bałtyckiego",
                "Sztucznym zbiornikiem wodnym przy elektrowni"
            ],
            correct: 0,
            explanation: "Obok płaskich równin na Nizinie Mazowieckiej występują wysoczyzny – łagodnie pofalowane wzniesienia otoczone dolinami rzek."
        },
        {
            question: "Jak nazywa się rozległa kotlina położona w centralnej części Niziny Mazowieckiej, w której leży Warszawa?",
            answers: [
                "Kotlina Jeleniogórska",
                "Kotlina Warszawska",
                "Kotlina Sandomierska",
                "Kotlina Kłodzka"
            ],
            correct: 1,
            explanation: "W centralnej części Niziny Mazowieckiej rozciąga się Kotlina Warszawska, gdzie zbiegają się szerokie doliny Wisły, Narwi i Bugu."
        },
        {
            question: "Która rzeka uznawana jest za główny dopływ Wisły wpadający do niej na Nizinie Mazowieckiej?",
            answers: [
                "Narew (mimo że jest krótsza od uchodzącego do niej Bugu)",
                "Odra",
                "Warta",
                "San"
            ],
            correct: 0,
            explanation: "Od północnego wschodu do Wisły wpada Narew (448 km) – choć jest krótsza od Bugu (772 km), to właśnie Narwi przypada miano głównego dopływu Wisły."
        },
        {
            question: "Jaki rodzaj krajobrazu kulturowego przeważa na większości obszaru Niziny Mazowieckiej?",
            answers: [
                "Krajobraz rolniczy (pola uprawne, łąki i pastwiska)",
                "Krajobraz wysokogórski",
                "Krajobraz nadmorski z wydmami",
                "Krajobraz przemysłowy z kopalniami węgla"
            ],
            correct: 0,
            explanation: "Równinny teren Niziny Mazowieckiej sprzyja rolnictwu – dawne lasy w większości wycięto i zamieniono na pola uprawne, łąki oraz pastwiska."
        },
        {
            question: "Jakie zwierzę jest symbolem Kampinoskiego Parku Narodowego położonego obok Warszawy?",
            answers: [
                "Żubr",
                "Łoś",
                "Rybołów",
                "Kozica"
            ],
            correct: 1,
            explanation: "Symbolem Kampinoskiego Parku Narodowego (gdzie bagna sąsiadują z wydmami porośniętymi borem sosnowym) jest łoś."
        },
        {
            question: "Z jakich tradycyjnych wyrobów i wydarzeń słynie region Kurpiów (w północno-wschodniej części Niziny Mazowieckiej)?",
            answers: [
                "Z wycinanek, haftów, Miodobrania w Myszyńcu oraz konkursu palm wielkanocnych we wsi Łyse",
                "Z budowy wielkich statków pełnomorskich i połowu dorszy",
                "Z rzeźbienia w bryłach soli kamiennej",
                "Z produkcji oscypków i gry na trombitach"
            ],
            correct: 0,
            explanation: "Kurpie słyną z bogatego folkloru: misternych wycinanek, haftów, Miodobrania Kurpiowskiego w Myszyńcu oraz barwnych palm wielkanocnych we wsi Łyse."
        },
        {
            question: "Z czego słynie miejscowość Żelazowa Wola na Nizinie Mazowieckiej?",
            answers: [
                "Urodził się tam wielki polski kompozytor Fryderyk Chopin",
                "Znajduje się tam największa latarnia morska w Polsce",
                "Jest to najwyższy szczyt Niziny Mazowieckiej",
                "Odbywa się tam co roku Miodobranie Kurpiowskie"
            ],
            correct: 0,
            explanation: "W dworku w Żelazowej Woli urodził się wybitny polski kompozytor Fryderyk Chopin – dziś mieści się tam muzeum i odbywają koncerty."
        },
        {
            question: "Który obiekt na Nizinie Mazowieckiej stanowi przykład zabytkowej architektury obronnej i należy do największych twierdz w Europie?",
            answers: [
                "Twierdza Modlin",
                "Twierdza Boyen",
                "Zamek w Reszlu",
                "Zamek Królewski na Wawelu"
            ],
            correct: 0,
            explanation: "Twierdza Modlin (położona u zbiegu Wisły i Narwi) to jedna z największych budowli obronnych w Europie."
        },
        {
            question: "Które zamki oprócz Twierdzy Modlin stanowią atrakcję turystyczną Niziny Mazowieckiej?",
            answers: [
                "Zamki w Czersku, Ciechanowie i Pułtusku",
                "Zamki w Malborku i Gniewie",
                "Zamek w Niedzicy i Czorsztynie",
                "Zamek Chojnik i Zamek Książ"
            ],
            correct: 0,
            explanation: "Na Nizinie Mazowieckiej turyści chętnie zwiedzają gotyckie zamki książąt mazowieckich w Czersku, Ciechanowie oraz Pułtusku."
        }
    ]

            {
            question: "Które zamki oprócz Twierdzy Modlin stanowią atrakcję turystyczną Niziny Mazowieckiej?",
            answers: [
                "Zamki w Czersku, Ciechanowie i Pułtusku",
                "Zamki w Malborku i Gniewie",
                "Zamek w Niedzicy i Czorsztynie",
                "Zamek Chojnik i Zamek Książ"
            ],
            correct: 0,
            explanation: "Na Nizinie Mazowieckiej turyści chętnie zwiedzają gotyckie zamki książąt mazowieckich w Czersku, Ciechanowie oraz Pułtusku."
        }
    ],

    // DZIAŁ 5: Mapy, przekroje i przyroda na zdjęciach (6 pytań obrazkowych)
    obrazki: [
        {
            question: "Spójrz na mapę pasów rzeźby terenu Polski. Jaki pas oznaczono numerem 2 (tuż na południe od pobrzeży)?",
            image: "geo_pasy_polski.jpg",
            answers: [
                "Pas pojezierzy (m.in. Mazurskie i Pomorskie)",
                "Pas Wyżyn Polskich",
                "Pas Kotlin Podkarpackich",
                "Pas Nizin Środkowopolskich"
            ],
            correct: 0,
            explanation: "Licząc od północy (od Bałtyku): 1 to pobrzeża, 2 to pas pojezierzy, 3 to Niziny Środkowopolskie, 4 to Wyżyny Polskie, 5 to Kotliny Podkarpackie, a 6 to góry."
        },
        {
            question: "Jaki typ wybrzeża morskiego przedstawia ilustracja (wysoki, stromy brzeg podcinany przez fale sztormowe)?",
            image: "geo_klif_wydma.jpg",
            answers: [
                "Wybrzeże klifowe",
                "Wybrzeże niskie z szeroką plażą",
                "Jezioro przybrzeżne",
                "Dolinę rzeczną"
            ],
            correct: 0,
            explanation: "Wysokie, strome wybrzeże podcinane bezpośrednio przez fale sztormowe nazywamy wybrzeżem klifowym."
        },
        {
            question: "Spójrz na schemat brzegu Bałtyku. Jak nazywa się wąski, piaszczysty wał usypany przez prąd przybrzeżny, który odciął zatokę, tworząc jezioro przybrzeżne?",
            image: "geo_mierzeja_jezioro.jpg",
            answers: [
                "Mierzeja",
                "Wysoczyzna",
                "Klif",
                "Kotlina"
            ],
            correct: 0,
            explanation: "Prąd przybrzeżny nanosi piasek, tworząc wąską mierzeję, która stopniowo odcina zatokę od morza i zamienia ją w jezioro przybrzeżne (np. Łebsko)."
        },
        {
            question: "Rozpoznaj na ilustracji chronioną roślinę pionierską o niebieskawych, kolczastych liściach, która zasiedla ruchome wydmy nad Bałtykiem:",
            image: "geo_mikolajek.jpg",
            answers: [
                "Mikołajek nadmorski",
                "Piaskownica zwyczajna",
                "Sosna zwyczajna",
                "Grzybień biały"
            ],
            correct: 0,
            explanation: "To mikołajek nadmorski – objęta ścisłą ochroną roślina pionierska rosnąca na piaszczystych wydmach Wybrzeża Słowińskiego."
        },
        {
            question: "Jak nazywa się ten rzadki ptak drapieżny widoczny na ilustracji, który gniazduje nad jeziorami i chwyta ryby długimi szponami?",
            image: "geo_rybolow.jpg",
            answers: [
                "Rybołów",
                "Mewa srebrzysta",
                "Bocian biały",
                "Kormoran"
            ],
            correct: 0,
            explanation: "To rybołów – potężny ptak drapieżny potrafiący wypatrzyć rybę z kilkudziesięciu metrów nad powierzchnią wody."
        },
        {
            question: "Jakie zwierzę widoczne na ilustracji znajduje się w herbie Kampinoskiego Parku Narodowego położonego obok Warszawy?",
            image: "geo_los_kampinos.jpg",
            answers: [
                "Łoś",
                "Żubr",
                "Jeleń szlachetny",
                "Wilk"
            ],
            correct: 0,
            explanation: "Symbolem Kampinoskiego Parku Narodowego (gdzie bagna sąsiadują z wydmami porośniętymi borem sosnowym) jest łoś."
        }
    ]
};

let quizQuestions = [
    ...geoModules.krajobrazy,
    ...geoModules.wybrzeze,
    ...geoModules.mazury,
    ...geoModules.mazowsze,
    ...geoModules.obrazki
];
