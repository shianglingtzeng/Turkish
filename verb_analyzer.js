function analyzeVerb(word){


let result=

document

.getElementById(
"verbResult"
);



if(word.endsWith("yorum")){


result.innerHTML=

`

<h3>
🔍 ${word}
</h3>


<p>

判斷：

現在進行式

</p>


<p>

結構：

動詞詞幹

+

yor

+

um

</p>


<p>

意思：

我正在做某事

</p>


`;



}

else if(word.includes("miyor")){


result.innerHTML=

`

<h3>

🔍 ${word}

</h3>


<p>

否定現在進行式

</p>


例：

Gel-mi-yor-um

<br>

我沒有來 / 我不正在來

`;



}

else{


result.innerHTML=

"尚未辨識";


}


}
