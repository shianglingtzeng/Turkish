function searchWord(){


let keyword=

document
.getElementById(
"searchInput"
)
.value
.toLowerCase();



let result=

survivalDictionary.filter(

x=>

x.turkish
.toLowerCase()
.includes(keyword)

||

x.chinese.includes(keyword)

);



let box=

document.getElementById(
"searchResult"
);



if(result.length===0){


box.innerHTML=

"找不到資料";


return;

}



box.innerHTML=

result.map(

x=>

`

<div class="wordCard">


<h3>

🇹🇷 ${x.turkish}

</h3>


<p>

🔊 ${x.pronunciation}

</p>


<p>

${x.chinese}

</p>


<hr>


${x.example}


<br>

${x.exampleZh}


</div>


`

).join("");



}
