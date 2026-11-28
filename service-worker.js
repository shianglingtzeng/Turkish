const CACHE_NAME = "turkish-survival-v10";

/* 修正：舊版把 app.js 等寫成根目錄路徑（實際在 js/），
   cache.addAll 只要有一個 404 就整批失敗，service worker 永遠裝不起來。
   這裡改成逐檔加入 + 容錯，並在 activate 清掉舊快取。 */

const FILES = [
    "./",
    "./index.html",
    "./style.css",
    "./pwa/manifest.json",
    "./icons/icon-192.png",
    "./icons/icon-512.png",
    "./icons/icon-512-maskable.png",
    "./course_a1_part1.js",
    "./course_a1_part2.js",
    "./course_a1_part3.js",
    "./course_loader.js",
    "./istanbul_database.js",
    "./product_database.js",
    "./package_dictionary.js",
    "./shopping_database.js",
    "./food_database.js",
    "./transport_database.js",
    "./social_database.js",
    "./verb_database.js",
    "./vocabulary_database.js",
    "./document_dictionary.js",
    "./document_helper.js",
    "./document_checklist.js",
    "./location_database.js",
    "./istanbul_survival_map.js",
    "./istanbul_life.js",
    "./my_istanbul.js",
    "./daily_situation.js",
    "./daily_a1.js",
    "./a1_course.js",
    "./ai_roleplay.js",
    "./official_phrases.js",
    "./neighbor_mode.js",
    "./restaurant_dialogue.js",
    "./allergy_helper.js",
    "./checkout_phrase.js",
    "./food_order.js",
    "./istanbulkart_ai.js",
    "./speaking_exam.js",
    "./grammar.js",
    "./pronunciation_teacher.js",
    "./conversation_trainer.js",
    "./workplace_dialogue.js",
    "./speaking.js",
    "./listening_engine.js",
    "./progress_store.js",
    "./app.js",
    "./progress.js",
    "./review.js",
    "./search.js",
    "./flashcard_engine.js",
    "./supermarket_ai.js",
    "./camera.js",
    "./camera_ocr.js",
    "./ai_teacher.js",
    "./life_ai.js",
    "./istanbul_life_ai.js",
    "./dialogue.js",
    "./conversation_engine.js",
    "./listening_exam.js",
    "./daily_audio.js",
    "./a1_test.js",
    "./grammar_ai.js",
    "./grammar_quiz.js",
    "./verb_ai.js",
    "./verb_analyzer.js",
    "./verb_quiz.js",
    "./shopping_ai.js",
    "./menu_ai.js",
    "./metro_ai.js",
    "./greeting_ai.js",
    "./government_ai.js",
    "./tl_calculator.js",
    "./sentence_builder.js",
    "./favorite_verbs.js",
    "./profile.js",
    "./map.js",
    "./ui_bridge.js"
];


self.addEventListener("install", event => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache =>
            Promise.all(
                FILES.map(url =>
                    cache.add(url).catch(err =>
                        console.warn("快取失敗（略過）：", url, err)
                    )
                )
            )
        )
    );
});


self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(
                keys.filter(k => k !== CACHE_NAME)
                    .map(k => caches.delete(k))
            )
        ).then(() => self.clients.claim())
    );
});


self.addEventListener("fetch", event => {
    if (event.request.method !== "GET") return;

    event.respondWith(
        caches.match(event.request).then(cached => {
            if (cached) return cached;

            return fetch(event.request).then(response => {
                const copy = response.clone();
                caches.open(CACHE_NAME)
                    .then(cache => cache.put(event.request, copy))
                    .catch(() => {});
                return response;
            }).catch(() => cached);
        })
    );
});
