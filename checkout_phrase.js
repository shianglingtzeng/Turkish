const checkoutPhrase=[


{
tr:"Poşet ister misiniz?",
zh:"需要袋子嗎？",
answer:
"Evet, lütfen."
},



{
tr:"Kart mı nakit mi?",
zh:"刷卡還是現金？",
answer:
"Kart lütfen."
},



{
tr:"Fiş ister misiniz?",
zh:"需要收據嗎？",
answer:
"Evet, teşekkürler."
}



];


function showCheckoutPhrase(){


let box=

document.getElementById(
"checkoutBox"
);



box.innerHTML=

checkoutPhrase.map(

x=>

`

<p>

🇹🇷 ${x.tr}

<br>

🇨🇳 ${x.zh}

<br>

👉 ${x.answer}

</p>

`

).join("");



}
