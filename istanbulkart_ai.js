const istanbulKartWords=[


{

tr:"Dolum",

zh:"加值"

},



{

tr:"Bakiye",

zh:"餘額"

},



{

tr:"Kart geçersiz",

zh:"卡片無效"

},



{

tr:"Yükleme",

zh:"充值"

}



];


function checkKartWord(word){


let result=

istanbulKartWords.find(

x=>x.tr===word

);



return result;

}
