const grammarRules=[


{

title:"現在式",

rule:"動詞 + yor",

example:

"Geliyorum",

meaning:

"我正在來"


},



{

title:"地點 -de/-da",

rule:"在哪裡",

example:

"İstanbul'da",

meaning:

"在伊斯坦堡"


},



{

title:"方向 -e/-a",

rule:"去某地",

example:

"Metroya",

meaning:

"去地鐵"


},



{

title:"所有格",

rule:"我的/你的",

example:

"Benim evim",

meaning:

"我的家"


}



];


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
