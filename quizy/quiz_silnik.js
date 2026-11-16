let current = 0;
let score = 0;
let answered = false;

function loadQuestion() {
    answered = false;
    const item = questions[current];
    document.getElementById("q-meta").innerText = `Pytanie ${current + 1} z ${questions.length}`;
    document.getElementById("q-text").innerText = item.q;
    document.getElementById("progress").style.width = `${(current / questions.length) * 100}%`;
    document.getElementById("feedback").style.display = "none";
    document.getElementById("next-btn").style.display = "none";

    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";
    item.options.forEach((opt, idx) => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(idx, btn);
        optionsDiv.appendChild(btn);
    });
}

function checkAnswer(selected, btn) {
    if (answered) return;
    answered = true;
    const item = questions[current];
    const buttons = document.querySelectorAll(".option-btn");

    if (selected === item.correct) {
        btn.classList.add("correct");
        score++;
    } else {
        btn.classList.add("wrong");
        buttons[item.correct].classList.add("correct");
    }

    buttons.forEach(b => b.disabled = true);
    const fb = document.getElementById("feedback");
    fb.innerHTML = `💡 <strong>Warto wiedzieć:</strong> ${item.info}`;
    fb.style.display = "block";
    document.getElementById("next-btn").style.display = "inline-block";
}

function nextQuestion() {
    current++;
    if (current < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById("quiz-screen").style.display = "none";
    document.getElementById("result-screen").style.display = "block";
    document.getElementById("final-score").innerText = `${score} / ${questions.length}`;
    const pct = Math.round((score / questions.length) * 100);
    let msg = "";
    if (pct >= 90) msg = "Mistrzostwo! Znasz historię Dwójki i Bolesława Chrobrego jak prawdziwy kronikarz!";
    else if (pct >= 70) msg = "Świetny wynik! Bardzo dobrze znasz swoją szkołę i jej patrona.";
    else msg = "Dobra rozgrzewka! Przeczytaj ciekawostki i spróbuj pobić swój rekord.";
    document.getElementById("result-msg").innerText = msg;
}

function restartQuiz() {
    current = 0;
    score = 0;
    document.getElementById("result-screen").style.display = "none";
    document.getElementById("quiz-screen").style.display = "block";
    loadQuestion();
}

loadQuestion();
