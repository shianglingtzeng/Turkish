function practiceSpeaking(word){


let box=

document
.getElementById(
"speechPractice"
);



box.innerHTML=

`

<h3>

請朗讀：

${word}

</h3>


<button onclick="recordSpeech('${word}')">

🎙開始

</button>

`;

}





function recordSpeech(target){


let recognition =

new webkitSpeechRecognition();



recognition.lang="tr-TR";


recognition.start();



recognition.onresult=function(e){


let user=

e.results[0][0]
.transcript;



let score=

calculateScore(
target,
user
);



alert(

"你的發音評分："

+

score

+

"/100"

);


};


}





function calculateScore(a,b){


if(a===b){

return 100;

}


return 70;

}
