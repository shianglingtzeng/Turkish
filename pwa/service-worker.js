const CACHE_NAME =

"turkish-survival-v1";



const filesToCache=[


"../index.html",

"../style.css",



"../js/app.js",

"../js/navigation.js",

"../js/search.js",

"../js/progress.js",



"../js/survival_dictionary.js",

"../js/a1_30days.js",

"../js/ai_roleplay.js"



];






// 安裝

self.addEventListener(

"install",

event=>{


event.waitUntil(


caches.open(

CACHE_NAME

)

.then(cache=>{


return cache.addAll(

filesToCache

);


})


);


}

);








// 開啟

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


}

);
