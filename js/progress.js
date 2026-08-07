function loadProgress(){


let box=

document.getElementById(

"dashboard"

);



if(!box)return;



let count=

localStorage.getItem(

"studyDays"

)||0;



box.innerHTML=

`

📚 已完成：

${count}

天


<br><br>


🎯 目標：

30天A1生存

`;



}



function addProgress(){


let count=

Number(

localStorage.getItem(

"studyDays"

)||0

);



count++;


localStorage.setItem(

"studyDays",

count

);


loadProgress();


}
