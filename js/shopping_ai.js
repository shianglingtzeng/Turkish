/*
=================================
Shopping AI Engine
=================================
*/


function searchShopping(){


let input=

document
.getElementById(
"shoppingInput"
)
.value;



let result=

document
.getElementById(
"shoppingResult"
);



let item=

shoppingDatabase.find(

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


分類：

${item.category}


<br><br>


例句：

<br>

${item.example}


<br>

${item.exampleZh}


<button onclick="speakTurkish('${item.tr}')">

🔊 發音

</button>


`;



}

else{


result.innerHTML=

"尚未找到商品";


}


}
