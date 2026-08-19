function scanProduct(word){


let result=

productDatabase.find(

x=>

x.turkish
.toLowerCase()

===

word.toLowerCase()

);



if(!result){

return "找不到商品";

}



return `


<h3>

${result.turkish}

</h3>


中文：

${result.chinese}


<br>


分類：

${result.category}


<br>


提示：

${result.tip}


`;

}
