let currentRole=null;



function selectRole(role){


currentRole=

roles.find(

x=>x.name===role

);



document
.getElementById(
"chatBox"
)

.innerHTML=

`

<h3>

${currentRole.icon}

${currentRole.name}

</h3>


🇹🇷

${currentRole.opening}


<br><br>


中文：

${currentRole.meaning}

`;



}




function sendMessage(){


let input=

document
.getElementById(
"userMessage"
)
.value;



let reply="";



if(

input.includes("咖啡")

){


reply=

"Bir kahve lütfen.";

}



else if(

input.includes("多少")

){


reply=

"Ne kadar?";

}



else{


reply=

"Anlamadım. Tekrar söyler misiniz?";

}



document
.getElementById(
"chatBox"
)

.innerHTML+=

`

<br>

👤 ${input}


<br>

🤖 ${reply}

`;

}
