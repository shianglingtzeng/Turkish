function searchFood(){


let input=

document
.getElementById(
"foodInput"
)
.value;



let result=

document
.getElementById(
"foodResult"
);



let food=

foodDatabase.find(

x=>

x.tr
.toLowerCase()
.includes(

input.toLowerCase()

)

||

x.zh.includes(input)

);



if(food){


result.innerHTML=

`

<div class="wordCard">


<h3>
🇹🇷 ${food.tr}
</h3>


<p>
🔊 ${food.pronunciation}
</p>


<p>
🇨🇳 ${food.zh}
</p>


<hr>


分類：

${food.category}


<br><br>


介紹：

${food.description}



<button onclick="speakTurkish('${food.tr}')">

🔊 發音

</button>


</div>


`;



}

else{


result.innerHTML=

"尚未找到料理";


}


}
