function startLifeGuide(){



let situation=

document

.getElementById(

"lifeSituation"

)

.value;



let result=

document

.getElementById(

"lifeResult"

);



let data=

survivalSituations.find(

x=>

situation.includes(

x.title.substring(2,4)

)

);



if(!data){

result.innerHTML=

"請選擇情境";

return;

}



result.innerHTML=

`

<h3>

${data.title}

</h3>


<h4>

你可以說：

</h4>


${

data.sentence.map(

x=>

`

<p>

🇹🇷 ${x.tr}

<br>

🇨🇳 ${x.zh}

</p>

`

).join("")

}



`;



}
