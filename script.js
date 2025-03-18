const questions = [
    { question: "¿Cuánto es 2 + 2?", answers: ["3", "4", "5"], correct: "4" },
    { question: "¿Capital de Francia?", answers: ["Madrid", "París", "Londres"], correct: "París" },
    { question: "¿Cuántos lados tiene un triángulo?", answers: ["4", "3", "5"], correct: "3" },
    { question: "¿Color del cielo en un día despejado?", answers: ["Rojo", "Azul", "Verde"], correct: "Azul" },
    { question: "¿Cuánto es 10 x 2?", answers: ["20", "30", "10"], correct: "20" },
    { question: "¿Animal que ladra?", answers: ["Gato", "Perro", "Pájaro"], correct: "Perro" },
    { question: "¿Mes con 28 o 29 días?", answers: ["Enero", "Febrero", "Marzo"], correct: "Febrero" },
    { question: "¿Planeta más cercano al sol?", answers: ["Marte", "Venus", "Mercurio"], correct: "Mercurio" },
    { question: "¿Instrumento de cuerda?", answers: ["Piano", "Guitarra", "Flauta"], correct: "Guitarra" },
    { question: "¿Idioma más hablado del mundo?", answers: ["Inglés", "Chino", "Español"], correct: "Chino" },
    { question: "¿Día de la Independencia de Colombia?", answers: ["7 de agosto", "20 de julio", "5 de junio"], correct: "20 de julio" },
    { question: "¿En qué año llegó el hombre a la Luna?", answers: ["1965", "1969", "1971"], correct: "1969" },
    { question: "¿Metal más utilizado en la construcción?", answers: ["Oro", "Hierro", "Plata"], correct: "Hierro" },
    { question: "¿País con más habitantes?", answers: ["EE.UU.", "China", "India"], correct: "China" },
    { question: "¿Moneda de Japón?", answers: ["Yen", "Dólar", "Euro"], correct: "Yen" }
];

let currentQuestionIndex = 0;
let score = 0;

const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");
const scoreDisplay = document.getElementById("score-display");

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    answersContainer.innerHTML = "";

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.addEventListener("click", () => checkAnswer(answer));
        answersContainer.appendChild(button);
    });
}

function checkAnswer(selectedAnswer) {
    const correctAnswer = questions[currentQuestionIndex].correct;
    if (selectedAnswer === correctAnswer) {
        score += 10;
    }
    scoreDisplay.textContent = `Puntaje: ${score}`;
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        nextButton.style.display = "none";
    } else {
        endGame();
    }
});

function endGame() {
    questionText.textContent = `Juego terminado. Puntaje final: ${score}`;
    answersContainer.innerHTML = "";
    nextButton.style.display = "none";
}

loadQuestion();
