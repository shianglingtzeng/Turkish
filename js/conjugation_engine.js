function explainConjugation(word){

    let result =
    document.getElementById("conjugationResult");

    if(word.endsWith("yorum")){

        result.innerHTML=`

<h3>${word}</h3>

<ul>

<li>詞幹</li>

<li>-iyor = 現在進行</li>

<li>-um = 我(Ben)</li>

</ul>

`;

    }

    else if(word.endsWith("yorsun")){

        result.innerHTML=`

<h3>${word}</h3>

<ul>

<li>詞幹</li>

<li>-iyor = 現在進行</li>

<li>-sun = 你(Sen)</li>

</ul>

`;

    }

    else{

        result.innerHTML="目前尚未支援分析";

    }

}
