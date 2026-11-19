const quizQuestions = [
  {
    question: "1. Na jakie pytania odpowiada liczebnik?",
    answers: [
      "Kto? Co?",
      "Ile? Który z kolei?",
      "Jaki? Jaka? Jakie?",
      "Co robi? Co się z nim dzieje?"
    ],
    correct: 1,
    explanation: "Liczebnik nazywa liczbę lub kolejność i odpowiada na pytania: ile? oraz który z kolei?"
  },
  {
    question: "2. W którym zestawie znajdują się WYŁĄCZNIE liczebniki?",
    answers: [
      "pięć, drugi, kilkanaście, dwoje",
      "trzy, piątka, dziesiąty, wiele",
      "jeden, podwójnie, sto, czwarty",
      "osiem, tuzin, półtora, szósty"
    ],
    correct: 0,
    explanation: "Słowa 'piątka' i 'tuzin' to rzeczowniki (kto? co?), a 'podwójnie' to przysłówek (jak?). W zestawie A wszystkie słowa to liczebniki."
  },
  {
    question: "3. Jakiego rodzaju jest liczebnik w zdaniu: „Bartek zajął drugie miejsce w turnieju”?",
    answers: [
      "Liczebnik główny",
      "Liczebnik porządkowy",
      "Liczebnik zbiorowy",
      "Liczebnik ułamkowy"
    ],
    correct: 1,
    explanation: "Słowo 'drugie' odpowiada na pytanie 'które z kolei?', więc jest to liczebnik porządkowy."
  },
  {
    question: "4. Kiedy używamy liczebników zbiorowych (np. dwoje, troje, pięcioro)?",
    answers: [
      "Zawsze wtedy, gdy liczymy duże przedmioty",
      "Przy nazwach dzieci, młodych zwierząt oraz rzeczowników mających tylko liczbę mnogą (np. drzwi, okulary)",
      "Wyłącznie wtedy, gdy mówimy o ułamkach i częściach całości",
      "Tylko w liczbie pojedynczej rodzaju męskiego"
    ],
    correct: 1,
    explanation: "Liczebników zbiorowych używamy m.in. z nazwami dzieci (troje dzieci), młodych zwierząt (czworo kociąt) oraz rzeczownikami bez liczby pojedynczej (dwoje drzwi)."
  },
  {
    question: "5. Wybierz poprawną formę w zdaniu: „W naszym domu są ______ drzwi wejściowe.”",
    answers: [
      "dwa",
      "dwie",
      "dwoje",
      "dwóch"
    ],
    correct: 2,
    explanation: "Rzeczownik 'drzwi' nie ma liczby pojedynczej, dlatego łączymy go z liczebnikiem zbiorowym: 'dwoje drzwi'."
  },
  {
    question: "6. Które zdanie jest napisane POPRAWNIE?",
    answers: [
      "Czekałem na autobus półtora godziny.",
      "Czekałem na autobus półtorej godziny.",
      "Czekałem na autobus półtorej roku.",
      "Czekałem na autobus półtora minuty."
    ],
    correct: 1,
    explanation: "Mówimy 'półtora' dla rodzaju męskiego i nijakiego (półtora roku, półtora jabłka), ale 'półtorej' dla rodzaju żeńskiego (półtorej godziny, półtorej minuty)."
  },
  {
    question: "7. Jakiego rodzaju jest liczebnik „kilkadziesiąt”?",
    answers: [
      "Liczebnik główny",
      "Liczebnik zbiorowy",
      "Liczebnik nieokreślony",
      "Liczebnik porządkowy"
    ],
    correct: 2,
    explanation: "Słowo 'kilkadziesiąt' nie podaje dokładnej liczby, dlatego jest to liczebnik nieokreślony."
  },
  {
    question: "8. Który wyraz w zdaniu: „Kupiłem w sklepie półtora kilograma jabłek i dwadzieścia śliwek” to liczebnik ułamkowy?",
    answers: [
      "kilograma",
      "dwadzieścia",
      "półtora",
      "śliwek"
    ],
    correct: 2,
    explanation: "Liczebnik 'półtora' (czyli 1 i 1/2) oznacza część całości, więc jest liczebnikiem ułamkowym."
  },
  {
    question: "9. W którym zdaniu słowo „dwójka” NIE JEST liczebnikiem?",
    answers: [
      "W żadnym — słowo 'dwójka' to zawsze rzeczownik (kto? co?)",
      "Tylko wtedy, gdy stoi przed czasownikiem",
      "Tylko wtedy, gdy oznacza ocenę szkolną",
      "Słowo 'dwójka' to zawsze liczebnik główny"
    ],
    correct: 0,
    explanation: "Słowa zakończone na -ka (jedynka, dwójka, dziesiątka, setka) odmieniają się przez liczby i przypadki jak rzeczowniki (ta dwójka, te dwójki)."
  },
  {
    question: "10. Wybierz poprawną pisownię daty i wieku:",
    answers: [
      "Żyjemy w XXI. wieku, a dziś jest 19. listopada.",
      "Żyjemy w XXI wieku, a dziś jest 19 listopada.",
      "Żyjemy w 21 wieku, a dziś jest 19. listopada.",
      "Żyjemy w XXI-ym wieku, a dziś jest 19-go listopada."
    ],
    correct: 1,
    explanation: "Po cyfrach rzymskich (XXI) nigdy nie stawiamy kropki, a przy datach z nazwą miesiąca piszemy 19 listopada (bez kropki i bez końcówek '-go' czy '-ym')."
  },
  {
    question: "11. Która forma liczebnika w zdaniu jest poprawna: „Na wycieczkę pojechało ______ uczniów”?",
    answers: [
      "dwadzieścia jeden",
      "dwudziestu jeden",
      "dwudziestu jednego",
      "dwadzieścia jednego"
    ],
    correct: 1,
    explanation: "W połączeniu z rzeczownikiem męskoosobowym (uczniów) używamy formy 'dwudziestu jeden uczniów'."
  },
  {
    question: "12. Wskaż liczebnik w zdaniu: „Na podwórku bawiło się sześcioro małych kociąt.”",
    answers: [
      "podwórku",
      "małych",
      "sześcioro",
      "kociąt"
    ],
    correct: 2,
    explanation: "'Sześcioro' to liczebnik zbiorowy określający liczbę młodych zwierząt (kociąt)."
  },
  {
    question: "13. Jaką częścią mowy jest wyróżniony wyraz: „Bata sprawdził zadanie dwukrotnie”?",
    answers: [
      "Liczebnikiem głównym",
      "Liczebnikiem porządkowym",
      "Przysłówkiem (odpowiada na pytanie: jak?)",
      "Rzeczownikiem"
    ],
    correct: 2,
    explanation: "Słowo 'dwukrotnie' odpowiada na pytanie 'jak?' i jest nieodmienne — to przysłówek, a nie liczebnik."
  },
  {
    question: "14. Wskaż poprawną formę w zdaniu: „Do mety dobiegło ______ zawodników.”",
    answers: [
      "pięć",
      "pięciu",
      "pięcioro",
      "piąty"
    ],
    correct: 1,
    explanation: "Z rzeczownikami rodzaju męskoosobowego (zawodników) używamy formy 'pięciu'."
  },
  {
    question: "15. Które z poniższych słów to liczebnik ułamkowy?",
    answers: [
      "ćwierć",
      "czwarty",
      "czworo",
      "cztery"
    ],
    correct: 0,
    explanation: "'Ćwierć' (czyli 1/4) to liczebnik ułamkowy."
  },
  {
    question: "16. Ile liczebników znajduje się w zdaniu: „Troje dzieci zjadło po półtora pączka i wypiło dwie szklanki soku”?",
    answers: [
      "1",
      "2",
      "3",
      "4"
    ],
    correct: 2,
    explanation: "W zdaniu są 3 liczebniki: 'troje' (zbiorowy), 'półtora' (ułamkowy) oraz 'dwie' (główny)."
  },
  {
    question: "17. Który zapis liczebnika porządkowego cyfrą jest poprawny?",
    answers: [
      "Zająłem 1. miejsce w konkursie.",
      "Zająłem 1-sze miejsce w konkursie.",
      "Zająłem 1-wsze miejsce w konkursie.",
      "Zająłem 1 miejsce w konkursie."
    ],
    correct: 0,
    explanation: "Liczebnik porządkowy zapisany cyfrą arabską oznaczamy kropką: '1. miejsce' (nigdy '-sze' ani '-wsze')."
  },
  {
    question: "18. Wybierz poprawną formę: „Brakuje mi jeszcze ______ złotych do nowej gry.”",
    answers: [
      "pięćdziesiąt",
      "pięćdziesięciu",
      "pięćdziesięcioro",
      "pięćdziesiąty"
    ],
    correct: 1,
    explanation: "Czasownik 'brakuje (czego?)' wymaga dopełniacza: 'pięćdziesięciu złotych'."
  },
  {
    question: "19. Jakiego rodzaju jest liczebnik „kilkanaście” w zdaniu: „Przeczytałem już kilkanaście stron książki”?",
    answers: [
      "Liczebnik główny",
      "Liczebnik porządkowy",
      "Liczebnik nieokreślony",
      "Liczebnik zbiorowy"
    ],
    correct: 2,
    explanation: "'Kilkanaście' oznacza przybliżoną liczbę z przedziału 11–19, dlatego jest to liczebnik nieokreślony."
  },
  {
    question: "20. W którym zdaniu poprawnie użyto liczebnika zbiorowego?",
    answers: [
      "Na ławce siedziało czworo chłopców.",
      "Na ławce siedziało czworo dziewczynek.",
      "Na ławce siedziało czworo dzieci.",
      "Na ławce siedziało czworo kotów."
    ],
    correct: 2,
    explanation: "Liczebnika zbiorowego używamy przy grupie mieszanej lub słowie 'dzieci' ('czworo dzieci'). Dla samych chłopców powiemy 'czterech chłopców', a dla dziewczynek 'cztery dziewczynki'."
  }
];
