function loadMyLife(){


let box=

document.getElementById(
"myLife"
);



box.innerHTML=

`

<h3>
🏠 Esentepe 家
</h3>


${

myIstanbul.home.words

.map(

x=>

`
<p>
🇹🇷 ${x.tr}
<br>
${x.zh}
</p>

`

)

.join("")

}



<h3>
🛒 超市

</h3>


${

myIstanbul.shopping.words

.map(

x=>

`
<p>
${x.tr}
-
${x.zh}

</p>

`

)

.join("")

}



<h3>
🏢 Maslak 工作

</h3>


${

myIstanbul.work.words

.map(

x=>

`
<p>
${x.tr}
-
${x.zh}

</p>

`

)

.join("")

}

`;

}
