var quizDB = [
    {
        Question: "what is full form of HTML ?",
        a: "hyper text lang",
        b: "hyper text markup language",
        c: "none of these",
        d: "hyper text makeup lang",
        ans: "ans2"
    },
    {
        Question: "Is javascrript case sensitive?",
        a: "yes",
        b: "no",
        c: "some times",
        d: "none",
        ans: "ans1"
    },
    {
        Question: "What is the keyword for extracting the year? ",
        a: "getYear",
        b: "getFullYear",
        c: "getDateYear",
        d: "fullYear",
        ans: "ans1"

    },
    {
        Question: "How do you declare a javascript variable?",
        a: "v carName",
        b: "variable carName",
        c: "var carName;",
        d: "var = carName",
        ans: "ans3"
    }

];
var question = document.querySelector('.question');
var option1 = document.querySelector('#option1');
var option1 = document.querySelector('#option2');
var option1 = document.querySelector('#option3');
var option1 = document.querySelector('#option4');
var submit = document.querySelector('#submit');
var btn = document.querySelector("#btun")
var main = document.querySelector('.main-div')

function display() {
    main.style.display = "grid"

}

var answers = document.querySelectorAll('.answer');

const showScore = document.querySelectorAll('#showScore');

var questionCount = 0;
var score = 0;

function loadQuestion() {
    const questionList = quizDB[questionCount];
    question.innerText = questionList.Question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
    btn.style.display = "none"

}
loadQuestion();

function getCheckedAnswer() {
    var answer;

    answers.forEach(function (curAnsElem) {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }

    });
    return answer;
}

submit.addEventListener('click', function () {
    var checkedAnswer = getCheckedAnswer();
    console.log(checkedAnswer);


    if (checkedAnswer === quizDB[questionCount].ans) {
        score++;
    };


    questionCount++;
    if (questionCount < quizDB.length) {
        loadQuestion();
    } else {


        // showScore.innerHTML =`<h3>You scored ${score}/${quizDB.length} </h3>
        // <button class="btn" onclick="location.reload()"></button>
        // `
        
        swal({
            title: "Quiz Submited",
            text: "Your score!" + " " + score,
            icon: "success",
            button: "ok",
        });
    }


});
