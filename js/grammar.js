const verbs=[


{
base:"gitmek",
zh:"去",

ben:"gidiyorum",

sen:"gidiyorsun",

o:"gidiyor"

},


{
base:"gelmek",
zh:"來",

ben:"geliyorum",

sen:"geliyorsun",

o:"geliyor"

},


{
base:"istemek",
zh:"想要",

ben:"istiyorum",

sen:"istiyorsun",

o:"istiyor"

}



];




function showVerb(word){


let v=

verbs.find(

x=>x.base===word

);



return `


原形：

${v.base}


<br>

我：

${v.ben}


<br>

你：

${v.sen}


<br>

他：

${v.o}


`;

}
