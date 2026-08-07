function searchGrammar(){


let input=

document

.getElementById(
"grammarInput"
)

.value;



let result=

document

.getElementById(
"grammarResult"
);



let grammar=

grammarDatabase.find(

x =>

x.title.includes(input)

||

x.turkish

.toLowerCase()

.includes(

input.toLowerCase()

)

);



if(grammar){


result.innerHTML=

`

<div class="grammarCard">


<h3>

📚 ${grammar.title}

</h3>


<h4>

🇹🇷 ${grammar.turkish}

</h4>


<p>

規則：

<br>

${grammar.rule}

</p>


<hr>


例句：


<ul>

${

grammar.examples

.map(

e=>`<li>${e}</li>`

)

.join("")

}

</ul>



</div>


`;



}

else{


result.innerHTML=

"找不到此文法";


}


}
