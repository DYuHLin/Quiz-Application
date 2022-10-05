const quizData=[
    {
        question: 'What continent is Morocco located?',
        a:'Asia',
        b:'Africa',
        c:'South America',
        d:'Europe',
        correct:'b'
    },{
        question:'What is the most used programming language currently?',
        a:'java',
        b:'C',
        c:'Python',
        d:'Javascript',
        correct:'c'
    },{
        question: 'Which country invented tea?',
        a:'England',
        b:'India',
        c:'Japan',
        d:'China',
        correct:'d'
    },{
        question:'What does HTML stand for?',
        a:'HyperText Markup Language',
        b:'Cascading Style Sheet',
        c:'Jason Object Notation',
        d:'Helicopters Terminals Motorboats lamborginis',
        correct:'a'
    },{
        question:'What is the capital of Italy?',
        a:'Venice',
        b:'Rome',
        c:'Naples',
        d:'Sicily',
        correct:'b'
    },{
        question:'How many continents are there?',
        a:'3',
        b:'5',
        c:'9',
        d:'7',
        correct:'d'
    },{
        question:'What language does Mexico speak?',
        a:'Spanish',
        b:'English',
        c:'Mexican',
        d:'Portuguese',
        correct:'a'
    }
];
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score =0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected(){
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });
    return answer;
}
function deselectAnswers(){
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () =>{
    const answer = getSelected();

    console.log(answer);

    if(answer){
        if(answer=== quizData[currentQuiz].correct){
            score++;
        } 

        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();     
        }else{
            quiz.innerHTML = `<h2> You scored ${score}/${quizData.length} </h2> <button onclick ="location.reload()">Reload</button>`;
        }
    }      
});