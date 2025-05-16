'use strict';

//////////////////////////////////////////
// Variables
let score = 0;
let currentQuestionIndex = 0;
let answerDis = false;

//////////////////////////////////////////
// Select DOM elements
const startElement = document.getElementById('startElem');
const quizElement = document.getElementById('quizElem');
const resultsElemetn = document.getElementById('resultsElem');

const startButton = document.getElementById('startBtn');
const restartButton = document.getElementById('restartBtn');

const question = document.getElementById('question');
const posibleAnswers = document.getElementById('posibleAnswers');

const currentQuestionSpan = document.getElementById('currentQuestion');
const totalQuestionsSpan = document.getElementById('totalQuestions');
const scoreSpan = document.getElementById('score');

const finalScore = document.getElementById('finalScore'); 
const totalScore = document.getElementById('totalScore');

const results = document.getElementById('results');
const progressBar = document.getElementById('progress');

const questions = [
    {
        question: 'What is the capital of France?',
        options: ["Madrid", "Berlin", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        options: ["Jupiter", "Venus", "Mars", "Saturn"],
        answer: "Mars"
    },
    {
        question: "Who wrote the play *Romeo and Juliet*?",
        options: ["Charles Dickens", "George Orwell", "William Shakespeare", "Mark Twain"],
        answer: "William Shakespeare"
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["CO₂", "H₂O₂", "NaCl", "H₂O"],
        answer: "H₂O"
    },
    {
        question: "Which continent is the largest by land area?",
        options: ["Africa", "Europe", "Asia", "North America"],
        answer: "Asia"
    }
];


///////////////////////////////////////////////////
// Initialization
totalQuestionsSpan.textContent = questions.length;
totalScore.textContent = questions.length;


///////////////////////////////////////////////////
// Event Listeners
startButton.addEventListener('click', startQuiz);
restartButton.addEventListener('click', restartQuiz);


////////////////////////////////////////////////////
// Functions

function startQuiz(){
    //Reset Score
    score = 0;

    // Reset Currect Question Index
    currentQuestionIndex = 0;

    // Display Score
    scoreSpan.textContent = 0;
    
    // Move from Phase 1 to Phase 2
    startElement.classList.remove('active');
    quizElement.classList.add('active');

    showQuestions();
}

function showQuestions(){
    // Get the question
    let currentQuestion = questions[currentQuestionIndex];

    // Display the question
    question.textContent = currentQuestion.question;

    // Display the question's index number
    currentQuestionSpan.textContent = currentQuestionIndex + 1;

    // Display progress bar
    const progressPerc = (currentQuestionIndex/questions.length)*100;
    progressBar.style.width = progressPerc + "%";

    // Clear the previus question
    posibleAnswers.innerHTML = "";

    currentQuestion.options.forEach((ans) => {
        // Create possible answers
        const btn = document.createElement('button');

        // Display the value of each answer
        btn.textContent = ans;

        // Assign class to Buttons
        btn.classList.add('answerBtn');

        btn.dataset.correctAnswer  = currentQuestion.answer;

        // When user choose answer, check the answer if it is valid
        btn.addEventListener('click', checkAnswer);

        // Append answers
        posibleAnswers.appendChild(btn);
    });
}

function checkAnswer(event){
    // Guard Clause
    if (answerDis) return;

    // Selecting answer
    answerDis = true;

    // Value of selected button
    const selectedButton = event.target.textContent;

    // Value of correct answer
    const correctValue = event.target.dataset.correctAnswer;

    // Get all buttons inside posibleAnswers
    const buttons = posibleAnswers.querySelectorAll('.answerBtn');

    buttons.forEach((btn) => {
        if(btn.textContent === correctValue){
            btn.classList.add('correct');            
        }
        if(btn.textContent === selectedButton && btn.textContent !== correctValue){
            btn.classList.add('incorrect');
        }
    });

    // Checks if selected answer is correct
    if(selectedButton === correctValue){
        score++;
        scoreSpan.textContent = score;
    }

    // Set timeout to move to the next question
    setTimeout(() => {
        // Move to next question
        currentQuestionIndex++;

        // Reset for next question
        answerDis = false; 

        // Checks if there are any other questions
        if(currentQuestionIndex < questions.length){
            showQuestions();
        }else{
            showResults();
        }
    }, 1000);
}

function showResults(){
    // Move from Phase 2 to Phase 3
    quizElement.classList.remove("active");
    resultsElemetn.classList.add("active");

    // Display Final Score
    finalScore.textContent = score;

    // Display Total Score
    const percentage = (score / questions.length)*100;
    if(percentage === 100){
        results.textContent = "Awesome achievement!!!";
    }else if(percentage >= 80){
        results.textContent = "Great job, Keep up!!!";
    }else if(percentage >= 60){
        results.textContent = "Not that bad!";
    }else if(percentage >= 40){
        results.textContent = "You have to improve!";
    }else{
        results.textContent = "Try again!";
    }
}

function restartQuiz(){
    // Move from Phase 3 to Phase 1
    resultsElemetn.classList.remove("active");

    // Start Quiz
    startQuiz()
}