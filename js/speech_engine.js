function speakTurkish(text){


let speech=

new SpeechSynthesisUtterance(text);



speech.lang="tr-TR";


speech.rate=0.75;


speech.pitch=1;



window
.speechSynthesis
.speak(speech);


}
