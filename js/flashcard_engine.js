let currentWord;



function generateCard(){


let index=

Math.floor(

Math.random()

*

A1Vocabulary.length

);



currentWord=

A1Vocabulary[index];



document

.getElementById(

"flashcard"

)

.innerHTML=

`

<h2>

🇹🇷 ${currentWord.tr}

</h2>


<button onclick="showMeaning()">

查看意思

</button>

`;

}



function showMeaning(){


document

.getElementById(

"flashcard"

)

.innerHTML+=

`

<p>

🇨🇳

${currentWord.zh}

</p>

`;

}
