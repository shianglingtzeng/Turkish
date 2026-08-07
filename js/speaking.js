function startSpeaking(text){


let result =
document.getElementById(
"speakingResult"
);



result.innerHTML=

`

請朗讀：

<h2>

${text}

</h2>

<button onclick="listenUser('${text}')">

開始錄音

</button>

`;

}



function listenUser(target){


let recognition =
new webkitSpeechRecognition();



recognition.lang="tr-TR";


recognition.start();



recognition.onresult=function(event){


let answer=

event.results[0][0].transcript;



compareSpeech(
target,
answer
);


};



}



function compareSpeech(
target,
answer
){


let result=

document.getElementById(
"speakingResult"
);



if(
target===answer
){


result.innerHTML+=

`

<br>

✅ 很好！

發音正確

`;

}


else{


result.innerHTML+=

`

<br>

再試一次

<br>

你說：

${answer}

`;

}


}
