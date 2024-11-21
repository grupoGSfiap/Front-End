function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
}

function showSelectedOption(question, option) {
    const selectedText = document.getElementById(`${question}-selected`);
    selectedText.textContent = `Você selecionou: ${option.toUpperCase()}`;
}

function checkAnswers() {
    const answers = {
        q1: 'b',
        q2: 'a',
        q3: 'b',
        q4: 'c',
        q5: 'a'
    };

    let score = 0;
    const form = document.getElementById('quizForm');
    const resultDiv = document.getElementById('result');
    const formData = new FormData(form);

    for (let [question, correctAnswer] of Object.entries(answers)) {
        if (formData.get(question) === correctAnswer) {
            score++;
        }
    }

    resultDiv.textContent = `Você acertou ${score} de ${Object.keys(answers).length} perguntas.`;
}