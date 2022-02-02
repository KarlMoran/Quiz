const startButton = document.getElementById('start-btn');
const questionContainerBox = document.getElementById('question-container');
const questionShuffled, currentQuestionIndex;

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

function showQuestion(sportsQuestion){
    
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