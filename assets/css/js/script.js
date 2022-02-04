const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerBox = document.getElementById('question-container');
const questionSection = document.getElementById('question');
const answerButton = document.getElementById('answer-buttons');
const scoreCounter = document.getElementById('score');

/* Shuffle Question everything time someone plays  */

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
    reset();
showQuestion(questionShuffled[currentQuestionIndex]);

}

/* How the questions are shown */

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

/* Reset the page after the answer */

function reset(){
    clearStatus(document.body);
    nextButton.classList.add('hide');
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

/* When you choose the right answer */

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
        alert('Game Over');
    }
    
}

/* What happens when the answer is correct */

function setStatus(element, correct) {
    clearStatus(element);
    if (correct) {
        element.classList.add('correct');
        incrementScore();
    } else {
        element.classList.add('wrong');
    }
}

/* increment score for game, code from love maths */

function incrementScore() {
    let oldScore = parseInt(document.getElementById('correct').innerText);
    document.getElementById('correct').innerText = ++oldScore;
}

function clearStatus (element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

/* a number of different questions */

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
    {
        question: 'How many MMA fights has UFC star Conor McGregor lost during his career?',
        answers: [
            {text: '2', correct: false},
            {text: '4', correct: false },
            {text: '6', correct: true },
            {text: '7', correct: false},
        ]
    },
    {
        question: 'Who has won more grand slam tennis titles: ',
        answers: [
            {text: 'Serena Williams', correct: true},
            {text: 'Roger Federer?', correct: false },
        ]
    },
    {
        question: 'Who is the Six Nations all-time top try scorer with 26 tries?',
        answers: [
            {text: 'Shane Williams', correct: false},
            {text: 'Ian Smith', correct: false },
            {text: 'George North', correct: false},
            {text: 'Brian O Driscoll', correct: true},
        ]
    },
    {
        question: 'In international rugby, who is the all-time highest points scorer?',
        answers: [
            {text: 'Ronan O Gara', correct: false},
            {text: 'Neil Jenkins', correct: false },
            {text: 'Dan Carter', correct: true },
            {text: 'Jonny Wilkinson', correct: false},
        ]
    },
    {
        question: 'Quarterback Tom Brady guided which team to victory at Super Bowl LV to claim his seventh title?',
        answers: [
            {text: 'Buffalo bills', correct: false},
            {text: 'Tampa Bay Buccaneers', correct: true },
            {text: 'New england patriots', correct: false },
            {text: 'Kansas City Chiefs', correct: false},
        ]
    },
    {
        question: 'Ireland have won three of their last five matches against the All Blacks. Before this run, the teams had met 28 times in 111 years. How many of those games did Ireland win?',
        answers: [
            {text: 'One', correct: false},
            {text: 'Five', correct: false },
            {text: 'None', correct: true },
            {text: 'Three', correct: false},
        ]
    },
    {
        question: 'How many NBA championships did Michael Jordan win with the Chicago Bulls?',
        answers: [
            {text: 'Six', correct: true },
            {text: 'Five', correct: false },
            {text: 'Seven', correct: false },
            {text: 'Eight', correct: false},
        ]
    },
    {
        question: 'Usain Bolt is still the fastest man in the world, running 100m in 9.58 seconds. In which year did he set that record?',
        answers: [
            {text: '2008', correct: false },
            {text: '2010', correct: false },
            {text: '2011', correct: false},
            {text: '2009', correct: true},
        ]
    },
    {
        question: 'Who is the Premier Leagues all-time top scorer?',
        answers: [
            {text: 'Wayne Rooney', correct: false },
            {text: 'Alan Shearer', correct: true },
            {text: 'Cristiano ronaldo', correct: false},
            {text: 'Sergio Agüero', correct: false},
        ]
    },
    {
        question: 'Who was top of the golf world rankings prior to lockdown?',
        answers: [
            {text: 'Rory McIlroy', correct: true },
            {text: 'Jon Rahm', correct: false },
            {text: 'Viktor Hovland', correct: false},
            {text: 'Collin Morikawa', correct: false},
        ]
    },
    {
        question: 'Coco Gauff made headlines at Wimbledon last year when she beat Venus Williams. How old was Gauff?',
        answers: [
            {text: '14', correct: false },
            {text: '16', correct: false },
            {text: '15', correct: true},
            {text: '18', correct: false},
        ]
    },
    {
        question: 'In sport, what is black, 1 inch thick, 3 inches in diameter, and weighs between 5.5 and 6 ounces?',
        answers: [
            {text: 'Snooker', correct: false },
            {text: 'Bowling', correct: false },
            {text: 'Ice Hockey', correct: true},
            {text: 'Golf', correct: false},
        ]
    },
    {
        question: 'Who is the only person to hit a home run and score an NFL touchdown in the same week?',
        answers: [
            {text: 'Michel Jordan', correct: false },
            {text: 'Serbian', correct: false },
            {text: 'barry sanders', correct: false},
            {text: 'deion sanders', correct: true},
        ]
    },
    {
        question: 'Who are the only 2 players in NBA finals history to each score 40+ points in the same game',
        answers: [
            {text: 'Lebron & Kyrie', correct: true },
            {text: 'Michel Jordan & Scottie Pippen', correct: false },
            {text: 'Magic Johnson & James worthy', correct: false},
            {text: 'Kobe & Shaq', correct: false},
        ]
    },
]