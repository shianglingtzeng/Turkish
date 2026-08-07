function showPage(page){


const pages=[

"homePage",

"coursePage",

"searchPage",

"chatPage",

"profilePage"

];



pages.forEach(

p=>{


let el=

document.getElementById(p);



if(el)

el.style.display="none";


}

);



let target=

document.getElementById(

page+"Page"

);



if(target)

target.style.display="block";



}
