function searchSocial(){


let input=

document

.getElementById(
"socialInput"
)

.value;



let result=

document

.getElementById(
"socialResult"
);



let item=

socialDatabase.find(

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


使用場合：

<br>

${item.usage}


<button onclick="speakTurkish('${item.tr}')">

🔊 播放

</button>


`;



}

else{


result.innerHTML=

"尚未收錄";


}


}
