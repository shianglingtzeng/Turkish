function playTurkishAudio(text,speed=1){


let speech=

new SpeechSynthesisUtterance();


speech.text=text;


speech.lang="tr-TR";


speech.rate=speed;



speechSynthesis.speak(
speech
);


}




function playSlow(text){


playTurkishAudio(

text,

0.5

);


}



function playNormal(text){


playTurkishAudio(

text,

0.85

);


}
