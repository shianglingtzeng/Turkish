function askTeacher(){


let question=

document
.getElementById(
"aiInput"
)
.value;



let answer=

searchChinese(question);



document
.getElementById(
"aiAnswer"
)

.innerHTML=

answer;


}





function searchChinese(text){


let result=[];


turkishDatabase.forEach(day=>{


day.words.forEach(word=>{


if(

word.chinese.includes(text)

){

result.push(word);

}


});


});



if(result.length){


return `

🇹🇷 ${result[0].turkish}

<br>

🔊 ${result[0].pronunciation}

<br>

${result[0].example}

`;



}



return "請換個說法";

}
function teacherReply(input){


let text=input;


if(
text.includes("不懂")
){

return `

不要急 😊

土耳其語：

Anlamadım.

意思：

我不懂。

請跟著念：

An-la-ma-dım

`;

}



if(
text.includes("你好")
){

return `

你可以說：

Merhaba

更自然：

Merhaba, nasılsınız?

`;

}



return `

很好，我們練習：

請翻譯：

"我要一杯咖啡"

提示：

Bir ____ lütfen.

`;

}
