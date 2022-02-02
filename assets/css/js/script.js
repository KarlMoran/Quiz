const startButton = document.getElementById('start-btn');
const questionContainerBox = document.getElementById('question-container');
const questionSection = document.getElementById('question');
const answerButton = document.getElementById('answer-buttons');

let questionShuffled, currentQuestionIndex;
startButton.addEventListener('click', startGame);



/* Set up for the Game */

function startGame() {
console.log('started');
startButton.classList.add('hide');
questionShuffled = sportsQuestion.sort(() => Math.random() - .5);
currentQuestionIndex = 0;
questionContainerBox.classList.remove('hide');
selectNextQuestion();
}

function selectNextQuestion(){
showQuestion(questionShuffled[currentQuestionIndex]);

}

function showQuestion(question){
    questionSection.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButton.appendChild(button);
    })
}

function selectAnswer(){

}

const sportsQuestion = [
    {
        question: 'Who was the top scorer in the 2019/20 Premier League season?',
        answers: [
            {text: 'Jamie Vardy', correct: true },
            {text: 'Mohamed Salah', correct: false},
            {text: 'Danny Ings', correct: false},
            {text: 'Pierre-Emerick Aubameyang', correct: false},
        ]
    }
]