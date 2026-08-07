function scanText(){


let text=

document
.getElementById(
"ocrInput"
)
.value;



let result=

document
.getElementById(
"ocrResult"
);



let found=

packageDictionary.find(

item=>

text

.toLowerCase()

.includes(

item.tr.toLowerCase()

)

);



if(found){


result.innerHTML=

`

<h3>

🇹🇷 ${found.tr}

</h3>


<p>

🔊 ${found.pronunciation}

</p>


<p>

🇨🇳 ${found.zh}

</p>


<hr>


💡生活解釋：

<br>

${found.explain}


<br><br>


<button onclick="speakTurkish('${found.tr}')">

🔊 播放

</button>


`;



}

else{


result.innerHTML=

`

尚未收錄。

<br>

建議加入資料庫。

`;

}


}
