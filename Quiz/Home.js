const questions=[{question:"What is the capital city of India ?",answer : [{text:"Mumbai",correct:'false'},
                                                                           {text:"Delhi",correct:'true'},
                                                                           {text:"Hyderabad",correct:'false'},
                                                                           {text:"Bengaluru",correct:'false'}]},
                {question:"What is the capital city of Telangana ?",answer : [{text:"Mumbai",correct:'false'},
                                                                           {text:"Delhi",correct:'false'},
                                                                           {text:"Hyderabad",correct:'true'},
                                                                           {text:"Bengaluru",correct:'false'}]},
                {question:"Bommandevpally present in which district ?",answer : [{text:"Nizamabad",correct:"false"},
                                                                           {text:"Kamareddy",correct:'true'},
                                                                           {text:"Karimnagar",correct:'false'},
                                                                           {text:"Mahabubnagar",correct:'false'}]}];
let currentquestionindex=0;
let score=0;

function startQuiz(){
    score=0;
    currentquestionindex=0;
    document.getElementById('result').classList.add('hidden');
    document.getElementById('quiz').classList.remove('hidden');
    showQuestion();
}

function showQuestion(){
    resetState();
    const questionData=questions[currentquestionindex];
    document.getElementById('question').innerHTML=questionData.question;
    questionData.answer.forEach(answer => {
        const button=document.createElement('button');
        button.innerText=answer.text;
        button.classList.add('btn');
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener('click',selectAnswer);
        document.getElementById('answer-buttons').appendChild(button);
    });

}

function resetState(){
    document.getElementById('nxt-btn').classList.add('hidden');
    while(document.getElementById('answer-buttons').firstChild){
        document.getElementById('answer-buttons').removeChild(document.getElementById('answer-buttons').firstChild);
    }
}

function selectAnswer(e){
    const selectedButton=e.target;
    const correct =selectedButton.dataset.correct==="true";
    if(correct)
        score++;
    Array.from(document.getElementById('answer-buttons').children).forEach(button=>{
        button.classList.add(button.dataset.correct==='true'?'btn-correct':'btn-incorrect');
    });
    document.getElementById('nxt-btn').classList.remove('hidden');
}

function handleNextQuestion(){
    currentquestionindex++;
    if(currentquestionindex < questions.length)
        showQuestion();
    else
    showResult();
}

 function showResult(){
    document.getElementById('quiz').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
    document.getElementById('heading').innerText="Result";
    document.getElementById('score').innerText = "You scored "+score+" out of "+questions.length+"!";
 }

function startAgain(){
    startQuiz();
}

startQuiz();