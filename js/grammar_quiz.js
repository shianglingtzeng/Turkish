const grammarQuiz=[


{

question:

"Ben ___ Tayvanlı.",

answer:

"ım"

},



{

question:

"Sen Türkçe öğreniyor___?",

answer:

"musun"

},



{

question:

"Ben kahve iç___",

answer:

"iyorum"

}


];



let quizIndex=0;



function loadGrammarQuiz(){


let q=

grammarQuiz[quizIndex];


document

.getElementById(

"quizBox"

)

.innerHTML=

`

<h3>

${q.question}

</h3>


<input id="quizAnswer">


<button onclick="checkGrammarQuiz()">

確認

</button>


`;



}



function checkGrammarQuiz(){


let answer=

document

.getElementById(

"quizAnswer"

)

.value;



if(

answer===grammarQuiz[quizIndex].answer

){

alert("✅ 正確");

}

else{

alert(

"❌ 答案："+

grammarQuiz[quizIndex].answer

);

}


quizIndex++;


loadGrammarQuiz();


}
