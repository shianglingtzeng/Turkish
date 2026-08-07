let currentListening=0;

let score=0;



function loadListeningQuestion(){


let q=

listeningDatabase[currentListening];



document
.getElementById(
"listeningBox"
)

.innerHTML=

`

<h3>
🎧 A1 Listening
</h3>


<button onclick="speakTurkish('${q.audioText}')">

🔊 播放語音

</button>



<p>

問題：

${q.question}

</p>


<div>

${q.options.map(

option=>


`

<button

onclick="checkListening('${option}')">

${option}

</button>


`

).join("")}

</div>


<p>

第 ${currentListening+1}

題 / ${listeningDatabase.length}

</p>


`;



}



function checkListening(answer){


let q=

listeningDatabase[currentListening];



if(answer===q.answer){


score++;


alert(
"✅ 正確!"
);


}

else{


alert(

"❌ 答案：

"+q.answer

);


}



currentListening++;



if(

currentListening

<

listeningDatabase.length

){


loadListeningQuestion();


}

else{


showListeningResult();


}


}



function showListeningResult(){


document

.getElementById(

"listeningBox"

)

.innerHTML=

`

<h2>

🎉 完成測驗

</h2>


<p>

分數：

${score}

/

${listeningDatabase.length}

</p>


<button onclick="restartListening()">

重新開始

</button>


`;

}



function restartListening(){


currentListening=0;

score=0;


loadListeningQuestion();


}
