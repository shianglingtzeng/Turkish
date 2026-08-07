const orderPhrases=[


{

tr:
"Bir kebap istiyorum.",

zh:
"我要一份烤肉。"

},



{

tr:
"Acısız olsun lütfen.",

zh:
"請不要辣。"

},



{

tr:
"Az acılı olsun.",

zh:
"微辣即可。"

},



{

tr:
"Hesap lütfen.",

zh:
"請給我帳單。"

},



{

tr:
"Su alabilir miyim?",

zh:
"可以給我水嗎？"

}



];


function showOrderPhrase(){


let box=

document.getElementById(
"orderBox"
);



box.innerHTML=

orderPhrases.map(

x=>`

<p>

🇹🇷 ${x.tr}

<br>

🇨🇳 ${x.zh}

</p>

`

).join("");



}
