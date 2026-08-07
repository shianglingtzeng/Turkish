/*
=================================
 Turkish Speech Engine
=================================
*/


function speakTurkish(text){


let speech = new SpeechSynthesisUtterance();


speech.text=text;


speech.lang="tr-TR";


speech.rate=0.8;


speech.pitch=1;



window.speechSynthesis.speak(
speech
);


}
