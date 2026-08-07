// ===================================
// Turkish Survival System v2.0
// Core Engine
// ===================================



let learnedWords =
JSON.parse(
localStorage.getItem("learnedWords")
)
|| [];



let currentWord="Su";




// 啟動

window.onload=function(){

loadDays();

showProgress();

loadMission();

};





// =======================
// 30天課程
// =======================


function loadDays(){


let menu=
document.getElementById("dayMenu");


if(typeof turkishDatabase==="undefined"){

menu.innerHTML=
"等待資料庫";

return;

}



let html="";


turkishDatabase.forEach(day=>{


html +=

`

<button

class="dayButton"

onclick="openDay(${day.day})"

>

Day ${day.day}

<br>

${day.category}

</button>


`;



});


menu.innerHTML=html;


}





// =======================
// 打開課程
// =======================


function openDay(day){


let lesson=

turkishDatabase.find(

x=>x.day===day

);



let area=

document.getElementById("wordArea");



let html="";



lesson.words.forEach(word=>{


html +=

`

<div class="wordCard">


<div class="word">

${word.turkish}

</div>


<div class="pronunciation">

🔊 ${word.pronunciation}

</div>


<div class="chinese">

${word.chinese}

</div>



<p>

${word.example}

<br>

${word.exampleChinese}

</p>



<button onclick="speak('${word.turkish}')">

🔊 發音

</button>


<button onclick="learn('${word.turkish}')">

✅ 完成

</button>


</div>


`;



});


area.innerHTML=html;


}




// =======================
// 搜尋
// =======================


function searchWord(){


let keyword=

document
.getElementById("searchInput")
.value
.toLowerCase();



let result=[];



turkishDatabase.forEach(day=>{


day.words.forEach(word=>{


if(

word.turkish
.toLowerCase()
.includes(keyword)

||

word.chinese
.includes(keyword)

){


result.push(word);


}


});


});



let area=

document.getElementById("searchResult");



if(result.length===0){

area.innerHTML=
"找不到";

return;

}



area.innerHTML=

result.map(word=>


`

<p>

<b>${word.turkish}</b>

<br>

${word.chinese}

<br>

🔊 ${word.pronunciation}

</p>

<button onclick="speak('${word.turkish}')">

播放

</button>

`

).join("");



}





// =======================
// 發音
// =======================


function speak(text){


let speech=

new SpeechSynthesisUtterance(text);



speech.lang="tr-TR";

speech.rate=0.75;



speechSynthesis.speak(speech);


}




function speakTest(){

speak(currentWord);

}





// =======================
// 學習紀錄
// =======================


function learn(word){


if(!learnedWords.includes(word)){


learnedWords.push(word);


localStorage.setItem(

"learnedWords",

JSON.stringify(learnedWords)

);


}


showProgress();


}





function showProgress(){


let area=

document.getElementById("progressArea");



area.innerHTML=

`

已學習：

<b>${learnedWords.length}</b>

個單字

<br><br>

目標：

3000個生活單字

`;

}




// =======================
// 今日任務
// =======================


function loadMission(){


document
.getElementById("dailyMission")
.innerHTML=

`

今天任務：

<br>

🛒 完成超市單字

<br>

🔊 聽10次發音

<br>

⭐ 收藏5個單字

`;

}
