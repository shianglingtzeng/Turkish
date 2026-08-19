function analyzeDocument(){


let text=

document

.getElementById(

"documentInput"

)

.value;



let result=

document

.getElementById(

"documentResult"

);



let found=

governmentDictionary.find(

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


💡 解釋：

<br>

${found.explain}


`;



}

else{


result.innerHTML=

`

尚未收錄。

建議加入行政資料庫。

`;

}


}
