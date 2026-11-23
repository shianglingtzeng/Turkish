const CACHE_NAME = "turkish-survival-v9-1";

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
    "./js/course_a1_part1.js",
    "./js/course_a1_part2.js",
    "./js/course_a1_part3.js",
    "./js/course_loader.js",
    "./js/istanbul_database.js",
    "./js/product_database.js",
    "./js/package_dictionary.js",
    "./js/shopping_database.js",
    "./js/food_database.js",
    "./js/transport_database.js",
    "./js/social_database.js",
    "./js/verb_database.js",
    "./js/vocabulary_database.js",
    "./js/document_dictionary.js",
    "./js/document_helper.js",
    "./js/document_checklist.js",
    "./js/location_database.js",
    "./js/istanbul_survival_map.js",
    "./js/istanbul_life.js",
    "./js/my_istanbul.js",
    "./js/daily_situation.js",
    "./js/daily_a1.js",
    "./js/a1_course.js",
    "./js/ai_roleplay.js",
    "./js/official_phrases.js",
    "./js/neighbor_mode.js",
    "./js/restaurant_dialogue.js",
    "./js/allergy_helper.js",
    "./js/checkout_phrase.js",
    "./js/food_order.js",
    "./js/istanbulkart_ai.js",
    "./js/speaking_exam.js",
    "./js/grammar.js",
    "./js/pronunciation_teacher.js",
    "./conversation_trainer.js",
    "./workplace_dialogue.js",
    "./js/speaking.js",
    "./js/listening_engine.js",
    "./js/progress_store.js",
    "./js/app.js",
    "./js/progress.js",
    "./js/review.js",
    "./js/search.js",
    "./js/flashcard_engine.js",
    "./js/supermarket_ai.js",
    "./js/camera.js",
    "./js/camera_ocr.js",
    "./js/ai_teacher.js",
    "./js/life_ai.js",
    "./js/istanbul_life_ai.js",
    "./js/dialogue.js",
    "./js/conversation_engine.js",
    "./js/listening_exam.js",
    "./js/daily_audio.js",
    "./js/a1_test.js",
    "./js/grammar_ai.js",
    "./js/grammar_quiz.js",
    "./js/verb_ai.js",
    "./js/verb_analyzer.js",
    "./js/verb_quiz.js",
    "./js/shopping_ai.js",
    "./js/menu_ai.js",
    "./js/metro_ai.js",
    "./js/greeting_ai.js",
    "./js/government_ai.js",
    "./js/tl_calculator.js",
    "./js/sentence_builder.js",
    "./js/favorite_verbs.js",
    "./js/profile.js",
    "./js/map.js",
    "./js/ui_bridge.js"
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
