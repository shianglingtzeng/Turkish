/*
=================================
 Turkish Survival System v7.5

 app.js
 Main Controller

=================================
*/


// ===============================
// 啟動
// ===============================


document.addEventListener(

"DOMContentLoaded",

function(){


console.log(

"🇹🇷 Turkish Survival System Started"

);



initializeApp();



});





// ===============================
// 初始化
// ===============================


function initializeApp(){



loadTodayMission();


loadProgress();


loadDays();


if(typeof showPage==="function"){

showPage("home");

}


}






// ===============================
// 今日任務
// ===============================


function loadTodayMission(){



let box =

document.getElementById(

"dailyMission"

);



if(!box) return;



let today =

new Date().getDate();



let day =

(today % 30) || 1;



let lesson =

a1ThirtyDays.find(

x => x.day === day

);



if(!lesson){


box.innerHTML=

`

今天：

複習土耳其文

`;

return;

}



box.innerHTML=

`

<h3>

Day ${lesson.day}

</h3>


<h4>

${lesson.title}

</h4>


<p>

任務：

${lesson.task}

</p>


`;



}








// ===============================
// 打卡
// ===============================


function dailyCheckIn(){



let today =

new Date()

.toLocaleDateString();



localStorage.setItem(

"lastCheck",

today

);



alert(

"🎉 今日學習完成！"

);



loadProgress();


}








// ===============================
// 課程列表
// ===============================


function loadDays(){



let menu=

document.getElementById(

"dayMenu"

);



if(!menu) return;



menu.innerHTML="";



a1ThirtyDays.forEach(

lesson=>{


let btn=

document.createElement(

"button"

);



btn.className=

"day-button";



btn.innerHTML=

`

Day ${lesson.day}

<br>

${lesson.title}

`;



btn.onclick=

function(){


openLesson(

lesson.day

);


};



menu.appendChild(btn);



}

);


}







// ===============================
// 開啟課程
// ===============================


function openLesson(day){



let lesson=

a1ThirtyDays.find(

x=>x.day===day

);



let area=

document.getElementById(

"lessonArea"

);



if(!lesson)return;



area.innerHTML=

`

<h2>

Day ${lesson.day}

</h2>


<h3>

${lesson.title}

</h3>


<h4>

單字：

</h4>


${

lesson.words ?

lesson.words.map(

x=>`

<p>

🇹🇷 ${x}

</p>

`

).join("")

:

""

}



<h4>

今日任務：

</h4>


<p>

${lesson.task}

</p>



`;



}









// ===============================
// 字典搜尋快捷
// ===============================


function quickSearch(word){



let input=

document.getElementById(

"searchInput"

);



if(input){


input.value=word;


searchWord();


}



}








// ===============================
// AI老師入口
// ===============================


function askTeacher(){



let input=

document.getElementById(

"aiInput"

);



let answer=

document.getElementById(

"aiAnswer"

);



if(!input || !answer)

return;



let question=

input.value;



if(question==="")

return;



if(typeof teacherReply==="function"){


answer.innerHTML=

teacherReply(question);


}

else{


answer.innerHTML=

`

🇹🇷

請輸入：

我要買水

多少錢

怎麼走

`;

}



}








// ===============================
// 商品辨識
// ===============================


function scanTurkish(){



let text=

document.getElementById(

"cameraText"

).value;



let result=

document.getElementById(

"scanResult"

);



if(typeof scanProduct==="function"){


result.innerHTML=

scanProduct(text);


}

else{


result.innerHTML=

"資料庫尚未建立";

}



}









// ===============================
// 系統資訊
// ===============================


function systemInfo(){



return {


version:"7.5",


language:"Turkish",


location:"Istanbul",


course:"A1 Survival"



};



}
