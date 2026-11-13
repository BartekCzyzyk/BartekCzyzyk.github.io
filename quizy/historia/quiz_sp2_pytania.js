const questions = [
    {
        q: "Kiedy nastąpiło uroczyste otwarcie Szkoły Podstawowej nr 2 w Jeleniej Górze?",
        options: ["1 września 1945 r.", "6 lutego 1946 r.", "11 listopada 1946 r.", "3 maja 1947 r."],
        correct: 1,
        info: "Uroczyste otwarcie 'Dwójki' odbyło się 6 lutego 1946 roku. W 2026 roku szkoła świętuje swoje 80-lecie!"
    },
    {
        q: "Kto był założycielem i pierwszym kierownikiem SP nr 2 w Jeleniej Górze?",
        options: ["Franciszek Kosch", "Leopold Wojtowicz", "Aleksander Dobrucki", "Henryk Maj"],
        correct: 1,
        info: "Leopold Wojtowicz przybył do Jeleniej Góry 16 maja 1945 r. ze Sztabem 2. Armii WP i zorganizował nową szkołę."
    },
    {
        q: "Dlaczego w ogóle trzeba było otworzyć drugą szkołę podstawową w powojennej Jeleniej Górze?",
        options: [
            "Bo w mieście nie było żadnej szkoły",
            "Bo istniejąca szkoła nr 1 pękała w szwach (miała już 1000 uczniów)",
            "Bo budynek przy ul. Armii Krajowej stał pusty",
            "Na osobisty rozkaz króla"
        ],
        correct: 1,
        info: "W grudniu 1945 r. jedyna działająca szkoła nr 1 liczyła już 1000 uczniów wracających z wojennej tułaczki."
    },
    {
        q: "Po czym pierwszy kierownik rozpoznał budynek, w którym postanowił założyć 'Dwójkę'?",
        options: [
            "Miał czerwony dach i trzy baszty",
            "Był porośnięty bluszczem i miał wielki zegar na wieży",
            "Stała przed nim rzeźba jelenia",
            "Miał największe boisko na Dolnym Śląsku"
        ],
        correct: 1,
        info: "Leopoldowi Wojtowiczowi od pierwszego pobytu spodobał się budynek porośnięty bluszczem z wielkim zegarem na wieży (ul. Armii Krajowej 8)."
    },
    {
        q: "Kiedy Szkole Podstawowej nr 2 nadano imię Bolesława Chrobrego?",
        options: ["Dopiero w 2000 roku", "Na początku roku szkolnego 1946/1947", "W 1979 roku", "W dniu otwarcia 6 lutego 1946 r."],
        correct: 1,
        info: "Imię Bolesława Chrobrego nadano szkole bardzo szybko – już na początku roku szkolnego 1946/1947."
    },
    {
        q: "Jak brzmi oficjalna misja naszej szkoły zapisana w kronikach SP2?",
        options: [
            "Nauka i sport to nasza przyszłość",
            "Żeby oko widziało, ucho słyszało, głowa myślała, a serce czuło",
            "W zdrowym ciele zdrowy duch",
            "Od wiedzy do gwiazd"
        ],
        correct: 1,
        info: "Misja SP2 brzmi: 'Żeby oko widziało, ucho słyszało, głowa myślała, a serce czuło'."
    },
    {
        q: "Z jakiego wyjątkowego eksperymentu edukacyjnego rozpoczętego w roku 1979/1980 słynie 'Dwójka'?",
        options: [
            "Eksperymentu kosmicznego",
            "Eksperymentu muzycznego i zespołu tańca ludowego",
            "Eksperymentu językowego z łaciną",
            "Eksperymentu pływackiego"
        ],
        correct: 1,
        info: "W roku 1979/80 dyrektor Franciszek Kosch zapoczątkował eksperyment muzyczny (chór, instrumenty i taniec ludowy)."
    },
    {
        q: "Z jaką sąsiednią szkołą połączono SP nr 2 w roku szkolnym 2017/2018?",
        options: ["Z I Liceum Ogólnokształcącym", "Z Gimnazjum nr 1", "Ze Szkołą Podstawową nr 11", "Z Zespołem Szkół Elektronicznych"],
        correct: 1,
        info: "W roku szkolnym 2017/2018 połączono SP nr 2 z Gimnazjum nr 1 – odtąd uczniowie uczą się w dwóch sąsiednich budynkach."
    },
    {
        q: "Kim był patron naszej szkoły, Bolesław Chrobry, w historii Polski?",
        options: [
            "Pierwszym księciem Polan",
            "Pierwszym koronowanym królem Polski",
            "Ostatnim królem z dynastii Piastów",
            "Założycielem Krakowa"
        ],
        correct: 1,
        info: "Bolesław Chrobry był pierwszym koronowanym królem Polski (koronacja odbyła się w 1025 roku)."
    },
    {
        q: "Kto był rodzicami Bolesława Chrobrego?",
        options: [
            "Mieszko I i czeska księżniczka Dobrawa",
            "Kazimierz Odnowiciel i Maria Dobroniega",
            "Władysław Łokietek i Jadwiga",
            "Bolesław Krzywousty i Zbysława"
        ],
        correct: 0,
        info: "Bolesław Chrobry był synem pierwszego historycznego władcy Polski Mieszka I oraz czeskiej księżniczki Dobrawy."
    },
    {
        q: "Jakie ważne wydarzenie miało miejsce w Gnieźnie w 1000 roku za panowania Bolesława Chrobrego?",
        options: [
            "Bitwa pod Grunwaldem",
            "Zjazd Gnieźnieński i spotkanie z cesarzem Ottonem III",
            "Chrzest Polski",
            "Uchwalenie Konstytucji"
        ],
        correct: 1,
        info: "W 1000 roku cesarz Otton III pielgrzymował do grobu św. Wojciecha. Podczas Zjazdu Gnieźnieńskiego nałożył na głowę Bolesława swój diadem."
    },
    {
        q: "W którym roku odbyła się koronacja Bolesława Chrobrego na króla Polski?",
        options: ["966 r.", "1000 r.", "1025 r.", "1076 r."],
        correct: 2,
        info: "Bolesław Chrobry koronował się w 1025 roku – niestety zmarł kilka miesięcy po swojej koronacji."
    },
    {
        q: "Co oznacza przydomek 'Chrobry'?",
        options: ["Mądry i spokojny", "Dzielny, waleczny, mężny", "Wysoki i silny", "Bogaty i hojny"],
        correct: 1,
        info: "Staropolskie słowo 'chrobry' oznacza kogoś niezwykle dzielnego, mężnego i walecznego."
    },
    {
        q: "UWAGA PUŁAPKA! Któremu władcy lokalna legenda przypisuje założenie Jeleniej Góry podczas polowania na jelenia?",
        options: [
            "Bolesławowi Chrobremu (patronowi SP2)",
            "Bolesławowi Krzywoustemu",
            "Mieszkowi I",
            "Kazimierzowi Wielkiemu"
        ],
        correct: 1,
        info: "Haczyk! Patronem SP2 jest Bolesław Chrobry, ale legenda o założeniu Jeleniej Góry (ok. 1108 r.) dotyczy innego Bolesława – Bolesława Krzywoustego!"
    },
    {
        q: "Jaki profil sportowy (we współpracy z klubem Sudety) działa w SP nr 2 od 2010/2011 roku?",
        options: ["Piłka nożna", "Koszykówka", "Pływanie", "Siatkówka"],
        correct: 1,
        info: "Od roku szkolnego 2010/2011 we współpracy z Klubem Sportowym Sudety w SP2 działają klasy o specjalności koszykarskiej."
    },
    {
        q: "Jaki zaszczytny tytuł nadali Szkole Podstawowej nr 2 radni miejscy w 2011 roku?",
        options: [
            "Szkoła Mistrzów Sportu",
            "Zasłużony dla Miasta Jeleniej Góry",
            "Perła Karkonoszy",
            "Złota Szkoła Dolnego Śląska"
        ],
        correct: 1,
        info: "W maju 2011 roku radni Jeleniej Góry nadali SP2 tytuł 'Zasłużonego dla Miasta Jeleniej Góry'. Szkoła ma też tytuł 'Szkoły Tysiąclecia'."
    }
];
