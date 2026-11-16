// Wspólny silnik interaktywnych quizów Akademii APEX (Fajerwerk Reakcji + 5 Poziomów Końcowych + Automatyczna Stopka)
document.addEventListener('DOMContentLoaded', () => {
    // 1. Automatyczne wstrzyknięcie spójnej stopki Akademii APEX pod każdym quizem
    const mainContainer = document.querySelector('.container') || document.body;
    if (mainContainer && !document.getElementById('apex-quiz-footer')) {
        const footer = document.createElement('footer');
        footer.id = 'apex-quiz-footer';
        footer.style.cssText = 'margin-top: 2.2rem; padding-top: 1.1rem; border-top: 1px solid #30363d; text-align: center; font-size: 0.85rem; color: #8b949e; line-height: 1.6;';
        footer.innerHTML = `
            <div>
                🚀 Aplikacja stworzona przez <strong>Bartka (11 lat)</strong> w ramach programu 
                <a href="https://github.io" target="_blank" style="color: #56D364; text-decoration: none; font-weight: bold;">
                    🏫 Akademii Cyfrowej Inżynierii APEX (Sarenka Software Kids)
                </a>
            </div>
            <div style="font-size: 0.78rem; margin-top: 0.25rem;">
                Architektura systemu i mentoring: <a href="https://github.io" target="_blank" style="color: #58a6ff; text-decoration: none;">mgr inż. Wojciech Czyżyk</a> • 
                <a href="https://github.io" target="_blank" style="color: #56D364; text-decoration: underline;">Poznaj naszą szkołę i zapisz się na zajęcia ➔</a>
            </div>
        `;
        mainContainer.appendChild(footer);
    }

    // 2. Weryfikacja bazy pytań
    if (typeof quizQuestions === 'undefined' || !Array.isArray(quizQuestions) || quizQuestions.length === 0) {
        return;
    }

    let currentIndex = 0;
    let score = 0;
    let answered = false;

    const questionCounter = document.getElementById('question-counter');
    const scoreCounter = document.getElementById('score-counter');
    const questionText = document.getElementById('question-text');
    const answersContainer = document.getElementById('answers-container');
    const feedbackBox = document.getElementById('feedback-box');
    const nextBtn = document.getElementById('next-btn');
    const quizBox = document.getElementById('quiz-box');
    const resultBox = document.getElementById('result-box');
    const finalScoreText = document.getElementById('final-score-text');
    const restartBtn = document.getElementById('restart-btn');

    if (quizBox) quizBox.style.display = 'block';
    if (resultBox) resultBox.style.display = 'none';

    function loadQuestion() {
        answered = false;
        const current = quizQuestions[currentIndex];

        questionCounter.textContent = `Pytanie ${currentIndex + 1} / ${quizQuestions.length}`;
        scoreCounter.textContent = `Wynik: ${score} pkt`;
        questionText.textContent = current.question;

        answersContainer.innerHTML = '';
        feedbackBox.style.display = 'none';
        feedbackBox.innerHTML = '';
        nextBtn.style.display = 'none';

        current.answers.forEach((answerText, index) => {
            const btn = document.createElement('button');
            btn.className = 'answer-btn';
            btn.textContent = answerText;
            btn.addEventListener('click', () => handleAnswer(index, btn));
            answersContainer.appendChild(btn);
        });
    }

    function handleAnswer(selectedIndex, selectedBtn) {
        if (answered) return;
        answered = true;

        const current = quizQuestions[currentIndex];
        const allButtons = answersContainer.querySelectorAll('.answer-btn');
        const isCorrect = selectedIndex === current.correct;

        allButtons.forEach((btn, idx) => {
            btn.disabled = true;
            if (idx === current.correct) {
                btn.classList.add('correct');
            } else if (idx === selectedIndex && !isCorrect) {
                btn.classList.add('wrong');
            }
        });

        if (isCorrect) {
            score++;
            scoreCounter.textContent = `Wynik: ${score} pkt`;
        }

        // Reakcja awatara przy każdym pojedynczym pytaniu
        const avatarImg = isCorrect ? '../bartek_brawo.jpg' : '../bartek_uwaga.jpg';
        const reactionTitle = isCorrect
            ? '🎉 Brawo! Świetna odpowiedź!'
            : '☝️ Uwaga, pułapka! Sprawdź wyjaśnienie poniżej:';
        const borderColor = isCorrect ? '#56D364' : '#f85149';
        const bgTint = isCorrect ? 'rgba(86, 211, 100, 0.12)' : 'rgba(248, 81, 73, 0.12)';

        feedbackBox.className = 'feedback ' + (isCorrect ? 'correct' : 'wrong');
        feedbackBox.style.cssText = `display: block; margin-top: 1.2rem; padding: 1rem; border-radius: 10px; border: 1px solid ${borderColor}; background: ${bgTint};`;
        feedbackBox.innerHTML = `
            <div style="display: flex; align-items: center; gap: 1rem; flex-wrap: wrap;">
                <img src="${avatarImg}" alt="Reakcja Bartka" onerror="this.style.display='none'"
                     style="width: 95px; height: 95px; object-fit: contain; background: #ffffff; border-radius: 10px; border: 2px solid ${borderColor}; padding: 3px;">
                <div style="flex: 1; min-width: 200px;">
                    <div style="font-weight: bold; font-size: 1rem; margin-bottom: 0.35rem; color: ${borderColor};">
                        ${reactionTitle}
                    </div>
                    <div style="font-size: 0.92rem; line-height: 1.45; color: #e6edf3;">
                        ${current.explanation || ''}
                    </div>
                </div>
            </div>
        `;

        nextBtn.textContent = (currentIndex < quizQuestions.length - 1)
            ? 'Następne pytanie ➔'
            : '🏆 Zobacz wynik końcowy';
        nextBtn.style.display = 'inline-block';
        nextBtn.style.marginTop = '1rem';
    }

    nextBtn.addEventListener('click', () => {
        currentIndex++;
        if (currentIndex < quizQuestions.length) {
            loadQuestion();
        } else {
            showFinalResults();
        }
    });

    // 5-stopniowy system oceny i jednoznacznych plików awatarów na ekranie końcowym
    function showFinalResults() {
        quizBox.style.display = 'none';
        resultBox.style.display = 'block';

        const percent = Math.round((score / quizQuestions.length) * 100);
        let rankTitle = '';
        let comment = '';
        let primaryAvatar = '';
        let fallbackAvatar = '../bartek_uwaga.jpg';
        let rankColor = '#f85149';

        if (percent <= 20) {
            rankTitle = '🥉 Poziom 1 (0–20%): Rozgrzewka';
            comment = 'Dopiero zaczynamy! Przeczytaj uważnie wyjaśnienia pod pytaniami i kliknij „Zagraj jeszcze raz”, żeby rozbić bank!';
            primaryAvatar = '../wynik_poziom1_0_20.jpg';
            fallbackAvatar = '../bartek_uwaga.jpg';
            rankColor = '#f85149';
        } else if (percent <= 40) {
            rankTitle = '🧭 Poziom 2 (21–40%): Odkrywca';
            comment = 'Pierwsze punkty zdobyte, ale kilka pułapek Cię złapało. Spróbuj ponownie i pobij swój wynik!';
            primaryAvatar = '../wynik_poziom2_21_40.jpg';
            fallbackAvatar = '../bartek_uwaga.jpg';
            rankColor = '#d29922';
        } else if (percent <= 60) {
            rankTitle = '⚡ Poziom 3 (41–60%): Uczeń w Formie';
            comment = 'Połowa drogi za Tobą! Jeszcze jedna szybka powtórka i wejdziesz na poziom eksperta.';
            primaryAvatar = '../wynik_poziom3_41_60.jpg';
            fallbackAvatar = '../bartek_uwaga.jpg';
            rankColor = '#d29922';
        } else if (percent <= 80) {
            rankTitle = '🥈 Poziom 4 (61–80%): Solidny Zawodnik';
            comment = 'Bardzo dobry wynik! Niewiele zabrakło do podium — powtórz jeszcze raz trudniejsze pytania, żeby wskoczyć powyżej 80%!';
            primaryAvatar = '../wynik_poziom4_61_80.jpg';
            fallbackAvatar = '../bartek_uwaga.jpg';
            rankColor = '#58a6ff';
        } else {
            rankTitle = '🏆 Poziom 5 (81–100%): Mistrz Akademii APEX!';
            comment = 'REWELACJA! Wynik powyżej 80% — jesteś w mistrzowskiej formie i w 100% gotowy na piątkę lub szóstkę ze sprawdzianu!';
            primaryAvatar = '../wynik_poziom5_81_100.jpg';
            fallbackAvatar = '../bartek_brawo.jpg';
            rankColor = '#56D364';
        }

        finalScoreText.innerHTML = `
            <div style="display: flex; align-items: center; gap: 1.2rem; flex-wrap: wrap; margin: 1rem 0; padding: 1rem; border-radius: 10px; border: 1px solid ${rankColor}; background: rgba(22, 27, 34, 0.9);">
                <img src="${primaryAvatar}" alt="Status końcowy" onerror="this.onerror=null; this.src='${fallbackAvatar}';"
                     style="width: 115px; height: 115px; object-fit: contain; background: #ffffff; border-radius: 12px; border: 2px solid ${rankColor}; padding: 4px;">
                <div style="flex: 1; min-width: 220px;">
                    <div style="font-size: 1.05rem; font-weight: bold; color: ${rankColor}; margin-bottom: 0.3rem;">
                        ${rankTitle}
                    </div>
                    <p style="font-size: 1.25rem; font-weight: bold; margin: 0 0 0.45rem 0; color: #e6edf3;">
                        Zdobyłeś ${score} z ${quizQuestions.length} punktów (${percent}%)!
                    </p>
                    <p style="margin: 0; color: #8b949e; line-height: 1.45;">${comment}</p>
                </div>
            </div>
        `;
    }

    restartBtn.addEventListener('click', () => {
        currentIndex = 0;
        score = 0;
        resultBox.style.display = 'none';
        quizBox.style.display = 'block';
        loadQuestion();
    });

    loadQuestion();
});
