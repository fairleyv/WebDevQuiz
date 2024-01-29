let question = document.getElementById('question');
let answers = document.getElementById('answerButtons');
let starterButton = document.getElementById('starterButton');
let intro = document.getElementById('introText');
let timer = document.getElementById('timer')
let timeRemaining = 75;
let questionNum = 1;

let footer = document.getElementById('footer');
// Click event for managing quiz questions
function handleClickEvent(event) {
    // Change Footer to reflect previous answer
    footer.setAttribute('class', 'border-top');
    let chosen = document.getElementById('chosen');
    chosen.textContent = this.value;
    console.log(questionNum);
    if (questionNum = 2) {
        //Change question text to new question
        question.textContent = 'The condition in an if / else statement is enclosed with __________ .';
        // Change answer buttons to match new question. 
        answer1.textContent = '1. Quotes';
        answer2.textContent = '2. Parenthesis';
        answer3.textContent = '3. Curly Brackets'; 
        answer4.textContent = '4. Square Brackets';
        // Change values of buttons to reflect new correct answers
        answer3.value = 'incorrect';
        answer2.value = 'correct';
        // Increment questionNum
        questionNum++;
    } else if (questionNum = 3) {
        //Change question text to new question
        question.textContent = 'Arrays in JavaScript can be used to store __________ .';
        // Change answer buttons to match new question. 
        answer1.textContent = '1. Numbers and Strings';
        answer2.textContent = '2. Other Arrays';
        answer3.textContent = '3. Booleans'; 
        answer4.textContent = '4. All of the Above';
        // Change values of buttons to reflect new correct answers
        answer2.value = 'incorrect';
        answer4.value = 'correct';
        // Increment questionNum
        questionNum++;
    } else if (questionNum = 4) {
        //Change question text to new question
        question.textContent = 'String values must be enclosed within ________ when being assigned to variables.';
        // Change answer buttons to match new question. 
        answer1.textContent = '1. Commas';
        answer2.textContent = '2. Curly Brackets';
        answer3.textContent = '3. Quotes'; 
        answer4.textContent = '4. Parenthesis';
        // Change values of buttons to reflect new correct answers
        answer3.value = 'correct';
        answer4.value = 'incorrect';
         // Increment questionNum
         questionNum++;
    } else if (questionNum = 5) {
        //Change question text to new question
        question.textContent = 'A very useful tool used during development and debugging for printing content to the debugger is: ';
        // Change answer buttons to match new question. 
        answer1.textContent = '1. JavaScript';
        answer2.textContent = '2. Terminal/Bash';
        answer3.textContent = '3. For Loops'; 
        answer4.textContent = '4. console.log';
        // Change values of buttons to reflect new correct answers
        answer3.value = 'incorrect';
        answer4.value = 'correct';
         // Increment questionNum
         questionNum++;
    } else if (questionNum = 6) {
        question.textContent = 'All Done!!!';
        intro.removeAttribute('class', 'hidden');
        intro.textContent = 'Your final score is ' + timeRemaining + '.';
        let highScoreContainer = document.createElement('div');
        let initialsText = document.createElement('p');
        let initialsInput = document.createElement('input');
        let submitHighScore = document.createElement('button');
        highScoreContainer.setAttribute('class', 'highScore')
        initialsInput.setAttribute('type', 'text')
        initialsText.textContent = 'Enter Initials Here: ';
        submitHighScore.textContent = 'Submit';
        highScoreContainer.append(initialsText);
        highScoreContainer.append(initialsInput);
        highScoreContainer.append(submitHighScore);

    } 
}

function startQuiz() {
    // change project heading into question
    question.textContent='Commonly used data types DO NOT include ______.';
    // hide starter button and intro text
    starterButton.setAttribute('class', 'hidden');
    intro.setAttribute('class', 'hidden');
    // set Timer
    timer.textContent = timeRemaining;
    // create answer buttons
    let answer1 = document.createElement('button');
    let answer2 = document.createElement('button');
    let answer3 = document.createElement('button');
    let answer4 = document.createElement('button');
    // set text content to answers to questions
    answer1.textContent = '1. Strings';
    answer2.textContent = '2. Booleans';
    answer3.textContent = '3. Alerts' ;
    answer4.textContent = '4. Numbers';
    // set the correct answer
    answer1.setAttribute('value', 'incorrect');
    answer2.setAttribute('value', 'incorrect');
    answer3.setAttribute('value', 'correct');
    answer4.setAttribute('value', 'incorrect');
    // setting id for easier reference
    answer1.setAttribute('class', 'answer');
    answer2.setAttribute('class', 'answer');
    answer3.setAttribute('class', 'answer');
    answer4.setAttribute('class', 'answer');
    // append answer buttons to DOM
    answers.append(answer1);
    answers.append(answer2);
    answers.append(answer3);
    answers.append(answer4);
    // add event listener for first question
    answer1.addEventListener('click', handleClickEvent)
    answer2.addEventListener('click', handleClickEvent)
    answer3.addEventListener('click', handleClickEvent)
    answer4.addEventListener('click', handleClickEvent)
    // Increment questionNum
    questionNum++

}