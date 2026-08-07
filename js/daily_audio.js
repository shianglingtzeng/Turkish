let currentListening=null;



function startListening(){



let index=

Math.floor(

Math.random()

*

listeningDatabase.length

);



currentListening=

listeningDatabase[index];



document
.getElementById(
"listeningBox"
)

.innerHTML=

`

<h3>

${currentListening.category}

</h3>


<p>

🎧 聽土耳其語

</p>



<button onclick="playSlow('${currentListening.turkish}')">

慢速

</button>



<button onclick="playNormal('${currentListening.turkish}')">

正常速度

</button>



`;



}




function showAnswer(){



document
.getElementById(
"listeningAnswer"
)

.innerHTML=

`

🇹🇷

${currentListening.turkish}


<br><br>


中文：

${currentListening.chinese}


<br><br>


回答：

${currentListening.answer}


<br>

${currentListening.answerZh}

`;



}
