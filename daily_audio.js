let currentShadowing=null;



function startShadowing(){



let index=

Math.floor(

Math.random()

*

listeningShadowing.length

);



currentShadowing=

listeningShadowing[index];



document
.getElementById(
"shadowBox"
)

.innerHTML=

`

<h3>

${currentShadowing.category}

</h3>


<p>

🎧 聽土耳其語

</p>



<button onclick="playSlow('${ttsArg(currentShadowing.turkish)}')">

慢速

</button>



<button onclick="playNormal('${ttsArg(currentShadowing.turkish)}')">

正常速度

</button>



`;



}




function showShadowAnswer(){



document
.getElementById(
"shadowAnswer"
)

.innerHTML=

`

🇹🇷

${currentShadowing.turkish}


<br><br>


中文：

${currentShadowing.chinese}


<br><br>


回答：

${currentShadowing.answer}


<br>

${currentShadowing.answerZh}

`;



}
