const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerBox = document.getElementById('question-container');
const questionSection = document.getElementById('question');
const answerButton = document.getElementById('answer-buttons');

let questionShuffled, currentQuestionIndex;
startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    selectNextQuestion();

});


/* Set up for the Game */

function startGame() {
startButton.classList.add('hide');
questionShuffled = sportsQuestion.sort(() => Math.random() - .5);
currentQuestionIndex = 0;
questionContainerBox.classList.remove('hide');
selectNextQuestion();
}

function selectNextQuestion(){
    rest();
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

function rest(){
    clearStatus(document.body);
    nextButton.classList.add('hide');
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const buttonSelected = e.target;
    const correct = buttonSelected.dataset.correct;
    setStatus(document.body, correct);
    Array.from(answerButton.children).forEach(button => {
        setStatus(button, button.dataset.correct);
    })
    if (questionShuffled.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');
    }
    
}

function setStatus(element, correct) {
    clearStatus(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }

}

function clearStatus (element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
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
    },
    {
        question: 'Which team won the NBA championship 2020-21',
        answers: [
            {text: 'Los Angeles Lakers', correct: false},
            {text: 'Phoenix Suns', correct: false},
            {text: 'Milwaukee Bucks', correct: true },
            {text: 'Golden State Warriors', correct: false},
        ]
    },
    {
        question: 'Tiger Woods won his first major in over a decade at which 2019 tournament?',
        answers: [
            {text: 'U.S. Open', correct: false},
            {text: 'The Masters', correct: true },
            {text: 'PGA Championship', correct: false },
            {text: 'Ryder Cup', correct: false},
        ]
    },
    {
        question: 'Lewis Hamilton won the Formula1 World Drivers title in 2020, but what is the name of his Mercedes teammate who came second?',
        answers: [
            {text: 'Max Verstappen', correct: false},
            {text: 'Lando Norris', correct: false },
            {text: 'Fernando Alonso', correct: false },
            {text: 'Valtteri Bottas', correct: true},
        ]
    },
    {
        question: 'In which sport do teams compete to win the Stanley Cup?',
        answers: [
            {text: 'NHL', correct: true},
            {text: 'NBA', correct: false },
            {text: 'NFL', correct: false },
            {text: 'NASCAR', correct: false},
        ]
    },
]