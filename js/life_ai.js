function askLifeAI(){


let question=

document
.getElementById(
"lifeQuestion"
)
.value;



let answer=

findLifeAnswer(question);



document
.getElementById(
"lifeAnswer"
)
.innerHTML=

answer;


}





function findLifeAnswer(text){


let q=text.toLowerCase();



if(
q.includes("多少")
||
q.includes("錢")
){


return `

🇹🇷

<b>Fiyat ne kadar?</b>


<br>

🔊 菲亞特 內 卡達


<br><br>

意思：

多少錢？

`;

}




if(

q.includes("牛奶")

){


return `

🇹🇷

<b>Süt</b>


<br>

🔊 蘇特


<br>

分類：

🥛 Süt ürünleri


<br>

乳製品區

`;

}




if(

q.includes("地鐵")

){


return `

🇹🇷

<b>Metro nerede?</b>


<br>

🔊 梅特洛 內雷德


<br>

意思：

地鐵在哪？

`;

}



return `

請嘗試：

<br>

• 我要買水

<br>

• 多少錢

<br>

• 地鐵在哪

<br>

• 我要叫車

`;

}
