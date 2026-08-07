let dialogueIndex=0;



function nextDialogue(){


let box=

document.getElementById(
"dialogueArea"
);



let d=
dialogues[dialogueIndex];



box.innerHTML=

`

<h3>
${d.scene}
</h3>


<p>

🇹🇷 ${d.turkish}

</p>


<p>

中文：

${d.chinese}

</p>


<hr>


<button onclick="speak('${d.turkish}')">

🔊 聽發音

</button>


<p>

回答：

${d.answer}

<br>

${d.answerChinese}

</p>

`;



dialogueIndex++;


if(dialogueIndex>=dialogues.length){

dialogueIndex=0;

}


}
