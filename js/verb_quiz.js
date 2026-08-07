const verbQuiz=[

{

question:"Ben ____ (gitmek)",

answer:"gidiyorum"

},

{

question:"Sen ____ (gelmek)",

answer:"geliyorsun"

},

{

question:"Ben ____ (içmek)",

answer:"içiyorum"

}

];

let currentVerbQuiz=0;

function loadVerbQuiz(){

    let q=verbQuiz[currentVerbQuiz];

    document.getElementById("verbQuizBox").innerHTML=`

<h3>${q.question}</h3>

<input id="verbAnswer">

<button onclick="checkVerbAnswer()">

確認

</button>

`;

}

function checkVerbAnswer(){

    let answer=

    document

    .getElementById("verbAnswer")

    .value

    .trim()

    .toLowerCase();

    if(answer===verbQuiz[currentVerbQuiz].answer){

        alert("✅ 正確");

    }

    else{

        alert(

        "正確答案："+verbQuiz[currentVerbQuiz].answer

        );

    }

    currentVerbQuiz++;

    if(currentVerbQuiz<verbQuiz.length){

        loadVerbQuiz();

    }

    else{

        document.getElementById("verbQuizBox").innerHTML=

        "<h2>🎉 完成測驗！</h2>";

    }

}
