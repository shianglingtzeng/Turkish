function searchVerb(){

    const keyword =
    document
    .getElementById("verbSearch")
    .value
    .trim()
    .toLowerCase();

    const result =
    document
    .getElementById("verbResult");

    const verb =
    verbDatabase.find(v=>

        v.infinitive.toLowerCase().includes(keyword)

        ||

        v.zh.includes(keyword)

    );

    if(!verb){

        result.innerHTML="找不到此動詞";

        return;

    }

    result.innerHTML=`

<h2>🇹🇷 ${verb.infinitive}</h2>

<p>中文：${verb.zh}</p>

<table class="verbTable">

<tr><td>Ben</td><td>${verb.present.ben}</td></tr>

<tr><td>Sen</td><td>${verb.present.sen}</td></tr>

<tr><td>O</td><td>${verb.present.o}</td></tr>

<tr><td>Biz</td><td>${verb.present.biz}</td></tr>

<tr><td>Siz</td><td>${verb.present.siz}</td></tr>

<tr><td>Onlar</td><td>${verb.present.onlar}</td></tr>

</table>

<button onclick="speakTurkish('${verb.present.ben}')">

🔊 聽 Ben 發音

</button>

`;

}
