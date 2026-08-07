function calculateDiscount(){


let price=

Number(

document
.getElementById(
"priceInput"
)
.value

);



let discount=

Number(

document
.getElementById(
"discountInput"
)
.value

);



let finalPrice=

price *

(1-discount/100);



document
.getElementById(
"priceResult"
)

.innerHTML=

`

原價：

${price} TL


<br>


折扣：

${discount}%


<br><br>


優惠價格：

<b>
${finalPrice.toFixed(2)}
TL
</b>

`;



}
