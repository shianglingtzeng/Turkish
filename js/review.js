function getReviewWords(){


let review=[];



learnedWords.forEach(word=>{


if(
Math.random()>0.5
){

review.push(word);

}


});


return review;


}



function startReview(){


let words=

getReviewWords();



alert(

"今日複習："

+

words.length

+

" 個單字"

);


}
