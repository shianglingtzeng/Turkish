const A1Questions=[


{

question:

"Merhaba 是什麼意思？",

options:[

"謝謝",

"你好",

"再見"

],

answer:"你好"

},



{

question:

"Fiyat ne kadar?",

options:[

"多少錢？",

"在哪裡？",

"幾點？"

],

answer:"多少錢？"

},



{

question:

"Aidat 是？",

options:[

"房租",

"管理費",

"電費"

],

answer:"管理費"

}



];





let testIndex=0;



function startA1Test(){


showQuestion();


}



function showQuestion(){


let q=

A1Questions[testIndex];



document.getElementById(
"testArea"
)

.innerHTML=

`

<h3>

${q.question}

</h3>


${

q.options.map(

x=>

`

<button onclick="checkAnswer('${x}')">

${x}

</button>

`

).join("")

}

`;

}



function checkAnswer(answer){


let q=

A1Questions[testIndex];



if(answer===q.answer){


alert(
"✅ 正確"
);


}

else{


alert(
"❌ 正確答案："
+
q.answer
);


}


testIndex++;


if(
testIndex>=A1Questions.length
){

testIndex=0;

}


showQuestion();


}
