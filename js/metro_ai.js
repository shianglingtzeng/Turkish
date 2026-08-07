function searchTransport(){


let input=

document
.getElementById(
"transportInput"
)
.value;



let result=

document
.getElementById(
"transportResult"
);



let item=

transportDatabase.find(

x=>

x.tr
.toLowerCase()
.includes(
input.toLowerCase()
)

||

x.zh.includes(input)

);



if(item){


result.innerHTML=

`

<h3>

🇹🇷 ${item.tr}

</h3>


<p>

🔊 ${item.pronunciation}

</p>


<p>

🇨🇳 ${item.zh}

</p>


<hr>


💡

${item.tips}


<button onclick="speakTurkish('${item.tr}')">

🔊 發音

</button>


`;



}

else{


result.innerHTML=

"交通詞尚未收錄";


}


}
