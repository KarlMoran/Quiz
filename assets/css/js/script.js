const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerBox = document.getElementById('question-container');
const questionSection = document.getElementById('question');
const answerButton = document.getElementById('answer-buttons');

let questionShuffled, currentQuestionIndex;
startButton.addEventListener('click', startGame);



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
    }
]