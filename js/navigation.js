function showPage(page){


let pages=[

"homePage",

"coursePage",

"searchPage",

"chatPage",

"profilePage"

];



pages.forEach(

p=>{

document.getElementById(p)

.style.display="none";


}

);



document.getElementById(

page+"Page"

)

.style.display="block";



}
