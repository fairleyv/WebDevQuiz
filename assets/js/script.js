let question = document.getElementById('question');
let answers = document.getElementById('answerButtons');
let starterButton = document.getElementById('starterButton');
let intro = document.getElementById('introText');
let footer = document.getElementById('footer')
// helper Functions for each question
function question1(event) {

    footer.setAttribute('class', 'border-top');
    let chosen = document.getElementById('chosen');
    chosen.textContent = this.value;
    console.log(this.value)
}

function startQuiz() {
    // change project heading into question
    question.textContent='Commonly used data types DO NOT include ______.';
    // hide starter button and intro text
    starterButton.setAttribute('class', 'hidden');
    intro.setAttribute('class', 'hidden');
    // create answer buttons
    let answer1 = document.createElement('button');
    let answer2 = document.createElement('button');
    let answer3 = document.createElement('button');
    let answer4 = document.createElement('button');
    // set text content to answers to questions
    answer1.textContent = 'Strings';
    answer2.textContent = 'Booleans';
    answer3.textContent = 'Alerts' ;
    answer4.textContent = 'Numbers';
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
    answer1.addEventListener('click', question1)
    answer2.addEventListener('click', question1)
    answer3.addEventListener('click', question1)
    answer4.addEventListener('click', question1)

}