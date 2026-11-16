// Wspólny silnik interaktywnych quizów Akademii APEX (z Fajerwerkiem Reakcji Awatara .jpg)
document.addEventListener('DOMContentLoaded', () => {
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

    function loadQuestion() {
        answered = false;
        const current = quizQuestions[currentIndex];

        questionCounter.textContent = `Pytanie ${currentIndex + 1} / ${quizQuestions.length}`;
        scoreCounter.textContent = `Wynik: ${score} pkt`;
        questionText.textContent = current.question;

        answersContainer.innerHTML = '';
        feedbackBox.className = 'feedback hidden';
        feedbackBox.innerHTML = '';
        nextBtn.classList.add('hidden');

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

        // Wybór grafiki reakcji awatara (.jpg) z nadrzędnego katalogu quizy/
        const avatarImg = isCorrect ? '../bartek_brawo.jpg' : '../bartek_uwaga.jpg';
        const reactionTitle = isCorrect
            ? '🎉 Brawo! Świetna odpowiedź!'
            : '☝️ Uwaga, pułapka! Sprawdź wyjaśnienie poniżej:';
        const borderColor = isCorrect ? '#56D364' : '#f85149';

        feedbackBox.className = 'feedback ' + (isCorrect ? 'correct' : 'wrong');
        feedbackBox.innerHTML = `
            <div style="display: flex; align-items: center; gap: 1rem; flex-wrap: wrap;">
                <img src="${avatarImg}" alt="Reakcja Bartka" onerror="this.style.display='none'"
                     style="width: 95px; height: 95px; object-fit: contain; background: #ffffff; border-radius: 10px; border: 2px solid ${borderColor}; padding: 3px;">
                <div style="flex: 1; min-width: 200px;">
                    <div style="font-weight: bold; font-size: 1rem; margin-bottom: 0.35rem; color: ${borderColor};">
                        ${reactionTitle}
                    </div>
                    <div style="font-size: 0.92rem; line-height: 1.45;">
                        ${current.explanation || ''}
                    </div>
                </div>
            </div>
        `;

        nextBtn.textContent = (currentIndex < quizQuestions.length - 1)
            ? 'Następne pytanie ➔'
            : '🏆 Zobacz wynik końcowy';
        nextBtn.classList.remove('hidden');
    }

    nextBtn.addEventListener('click', () => {
        currentIndex++;
        if (currentIndex < quizQuestions.length) {
            loadQuestion();
        } else {
            showFinalResults();
        }
    });

    function showFinalResults() {
        quizBox.classList.add('hidden');
        resultBox.classList.remove('hidden');

        const percent = Math.round((score / quizQuestions.length) * 100);
        let comment = 'Dobra robota! Powtórz jeszcze raz pytania, w których pojawiły się błędy.';
        if (percent === 100) {
            comment = 'MISTRZOSTWO ŚWIATA! Bezbłędny wynik — jesteś w 100% gotowy na szóstkę ze sprawdzianu!';
        } else if (percent >= 80) {
            comment = 'Świetny wynik! Jeszcze jedno szybkie powtórzenie i masz murowaną piątkę lub szóstkę!';
        }

        finalScoreText.innerHTML = `
            <div style="display: flex; align-items: center; gap: 1.2rem; flex-wrap: wrap; margin: 1rem 0;">
                <img src="../bartek_brawo.jpg" alt="Gratulacje" onerror="this.style.display='none'"
                     style="width: 110px; height: 110px; object-fit: contain; background: #ffffff; border-radius: 12px; border: 2px solid #56D364; padding: 4px;">
                <div style="flex: 1; min-width: 220px;">
                    <p style="font-size: 1.2rem; font-weight: bold; margin: 0 0 0.4rem 0;">
                        Zdobyłeś ${score} z ${quizQuestions.length} punktów (${percent}%)!
                    </p>
                    <p style="margin: 0; color: #8b949e;">${comment}</p>
                </div>
            </div>
        `;
    }

    restartBtn.addEventListener('click', () => {
        currentIndex = 0;
        score = 0;
        resultBox.classList.add('hidden');
        quizBox.classList.remove('hidden');
        loadQuestion();
    });

    loadQuestion();
});
