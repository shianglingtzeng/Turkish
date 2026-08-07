function scanTurkish(){


let input =
document
.getElementById("cameraText")
.value;



let result =
document
.getElementById("scanResult");



let found =
istanbulDatabase.find(

x=>

input
.toLowerCase()
.includes(

x.word.toLowerCase()

)

);



if(found){


result.innerHTML=

`

<div class="wordCard">


<h2>

${found.word}

</h2>


<h3>

${found.meaning}

</h3>


<p>

🔊 ${found.sound}

</p>


<p>

位置：
${found.place}

</p>


<hr>


${found.sentence}

<br>

${found.translation}


</div>


`;


}

else{


result.innerHTML=

`

找不到

建議：

嘗試輸入包裝上的完整土文

`;

}


}
