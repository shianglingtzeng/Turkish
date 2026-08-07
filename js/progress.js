let userProgress = JSON.parse(

localStorage.getItem(
"userProgress"
)

)
||
{

days:0,

words:0,

streak:0,

lastDate:""

};



function saveProgress(){

localStorage.setItem(

"userProgress",

JSON.stringify(userProgress)

);

}



function dailyCheckIn(){


let today =
new Date()
.toISOString()
.substring(0,10);



if(userProgress.lastDate!==today){


userProgress.days++;

userProgress.streak++;

userProgress.lastDate=today;


saveProgress();


alert(
"🎉 今日學習完成！"
);


}


showDashboard();


}




function showDashboard(){


let box=

document.getElementById(
"dashboard"
);



box.innerHTML=

`

📅 完成天數：

${userProgress.days}

<br><br>

🔥 連續學習：

${userProgress.streak}

天

<br><br>

📚 已學單字：

${learnedWords.length}

個


`;

}



window.addEventListener(

"load",

showDashboard

);
