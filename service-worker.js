const CACHE_NAME =
"turkish-survival-v1";


const files=[

"./",

"./index.html",

"./style.css",

"./app.js",

"./turkish_database.js",

"./progress.js",

"./review.js",

"./speaking.js",

"./a1_test.js"

];



self.addEventListener(

"install",

event=>{


event.waitUntil(

caches.open(CACHE_NAME)

.then(cache=>{

return cache.addAll(files);

})

);


});





self.addEventListener(

"fetch",

event=>{


event.respondWith(


caches.match(

event.request

)

.then(response=>{


return response ||

fetch(event.request);


})


);


});
