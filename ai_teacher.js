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
