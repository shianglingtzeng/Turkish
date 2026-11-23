/* =================================
   ui_bridge.js  (v8.0 新增)

   專案裡有很多「只有資料、沒有畫面」的檔案，
   原本永遠不會被用到。這支檔案負責把它們接到畫面上。

   接上的資料檔：
   istanbul_life / my_istanbul / istanbul_survival_map / location_database
   official_phrases / neighbor_mode / restaurant_dialogue / allergy_helper
   workplace_dialogue / conversation_trainer / istanbulkart_ai
   speaking_exam / grammar(grammarRules) / pronunciation_teacher
   document_checklist / document_helper / daily_a1 / a1_course
================================= */

/* 注意：資料檔都用 const 宣告，const 不會掛到 window 上，
   所以不能用 window[name] 判斷，必須用 typeof。 */

function ttsButton(text) {
    if (!text) return "";
    return `<button onclick="speakTurkish('${ttsArg(text)}')">🔊</button>`;
}

function renderPairs(list, opt) {
    const o = opt || {};
    return (list || []).map(x => `
        <div class="wordCard">
            ${x.scene || x.role ? `<p><b>${x.scene || x.role}</b></p>` : ""}
            <p>🇹🇷 ${x.tr}</p>
            <p>🇨🇳 ${x.zh}</p>
            ${x.reply ? `<p>👉 回答：${x.reply}</p>` : ""}
            ${x.answer ? `<p>👉 回答：${x.answer}</p>` : ""}
            ${x.note ? `<p>💡 ${x.note}</p>` : ""}
            ${o.noAudio ? "" : ttsButton(x.tr)}
        </div>
    `).join("");
}


/* ---------- 📍 我的伊斯坦堡生活圈 ---------- */

function showIstanbul() {
    const box = document.getElementById("istanbulResult");
    if (!box) return;

    let html = "";

    if (typeof istanbulLife !== "undefined") {
        html += istanbulLife.map(area => `
            <div class="wordCard">
                <h3>${area.place}</h3>
                ${area.items.map(i => `<p>${i}</p>`).join("")}
                <button onclick="openMap('${area.place} Istanbul')">🗺 開地圖</button>
            </div>
        `).join("");
    }

    if (typeof survivalMap !== "undefined") {
        html += survivalMap.map(a => `
            <div class="wordCard">
                <h3>🧭 ${a.area} 周邊生存字</h3>
                ${a.nearby.map(n =>
                    `<p>${n.place}（${n.turkish}）→ 關鍵字：<b>${n.word}</b></p>`
                ).join("")}
            </div>
        `).join("");
    }

    if (typeof istanbulLocations !== "undefined") {
        html += istanbulLocations.map(loc => `
            <div class="wordCard">
                <h3>📌 ${loc.name}（${loc.zh}）</h3>
                ${(loc.phrases || []).map(p =>
                    `<p>🇹🇷 ${p.tr}<br>🇨🇳 ${p.zh} ${ttsButton(p.tr)}</p>`
                ).join("")}
            </div>
        `).join("");
    }

    box.innerHTML = html || "生活圈資料未載入";
}


/* ---------- 💬 生活短句庫 ---------- */

function showPhrasebook(topic) {
    const box = document.getElementById("phraseBox");
    if (!box) return;

    const map = {
        intro:      { title: "🙋 自我介紹",   data: typeof introduction !== "undefined" ? introduction : [] },
        greeting:   { title: "👋 鄰居問候",   data: typeof neighborDialogue !== "undefined" ? neighborDialogue : [] },
        restaurant: { title: "🍽 餐廳",       data: typeof restaurantDialogue !== "undefined" ? restaurantDialogue : [] },
        order:      { title: "🥙 點餐",       data: typeof orderPhrases !== "undefined" ? orderPhrases : [] },
        checkout:   { title: "🧾 結帳",       data: typeof checkoutPhrase !== "undefined" ? checkoutPhrase : [] },
        allergy:    { title: "🚫 飲食禁忌",   data: typeof allergyPhrase !== "undefined" ? allergyPhrase : [] },
        official:   { title: "🏛 公家機關",   data: typeof officialPhrases !== "undefined" ? officialPhrases : [] },
        work:       { title: "💼 辦公室",     data: typeof workplaceDialogue !== "undefined" ? workplaceDialogue : [] },
        kart:       { title: "🎫 Istanbulkart", data: typeof istanbulKartWords !== "undefined" ? istanbulKartWords : [] }
    };

    const picked = map[topic];

    if (!picked || !picked.data.length) {
        box.innerHTML = "此主題尚未收錄";
        return;
    }

    box.innerHTML = `<h3>${picked.title}</h3>` + renderPairs(picked.data);
}


/* ---------- 📖 文法規則速查 ---------- */

function showGrammarRules() {
    const box = document.getElementById("grammarRuleBox");
    if (!box) return;

    if (typeof grammarRules === "undefined") {
        box.innerHTML = "文法資料未載入";
        return;
    }

    box.innerHTML = grammarRules.map(g => `
        <div class="wordCard">
            <h3>${g.title}</h3>
            <p>規則：${g.rule}</p>
            <p>🇹🇷 ${g.example}　→　${g.meaning} ${ttsButton(g.example)}</p>
        </div>
    `).join("");
}


/* ---------- 📄 文件清單與租約字彙 ---------- */

function showDocuments() {
    const box = document.getElementById("checklistBox");
    if (!box) return;

    let html = "";

    if (typeof checklists !== "undefined") {
        html += checklists.map(c => `
            <div class="wordCard">
                <h3>${c.title}</h3>
                <ul>${c.items.map(i => `<li>${i}</li>`).join("")}</ul>
            </div>
        `).join("");
    }

    if (typeof documentDictionary !== "undefined") {
        html += `<div class="wordCard"><h3>📑 租約／表格常見欄位</h3>` +
            documentDictionary.map(d =>
                `<p>🇹🇷 <b>${d.tr}</b> — ${d.zh}<br>💡 ${d.note}</p>`
            ).join("") + `</div>`;
    }

    box.innerHTML = html || "文件資料未載入";
}


/* ---------- 🔊 發音練習清單 ---------- */

function loadPronunciationList() {
    const box = document.getElementById("pronunciationList");
    if (!box || typeof pronunciationWords === "undefined") return;

    box.innerHTML = pronunciationWords.map(w => `
        <button onclick="startSpeaking('${ttsArg(w.tr)}')">
            ${w.tr}（${w.zh}）
        </button>
    `).join("");
}


/* ---------- 🗣 情境對話（dialogue.js 用） ---------- */

function initDialogue() {
    if (typeof nextDialogue === "function") nextDialogue();
}


/* ---------- 📅 30 天課程總覽 ---------- */

function showCourseOverview() {
    const box = document.getElementById("overviewBox");
    if (!box) return;

    const s = courseStats();

    box.innerHTML = `
        <p>共 <b>${s.days}</b> 天課程　｜　<b>${s.words}</b> 個單字　｜
           <b>${s.dialogueLines}</b> 句對話　｜　<b>${s.quizQuestions}</b> 題測驗</p>
        ${courseA1.map(d => `
            <div class="wordCard">
                <h3>Day ${d.day}　${d.title} ${TS.isDayDone(d.day) ? "✅" : ""}</h3>
                <p>${d.scene}</p>
                <p style="color:#666">📐 ${d.grammar.point}</p>
                <button onclick="renderLesson(${d.day})">開啟</button>
            </div>
        `).join("")}
    `;
}


/* ---------- 啟動時先畫一次 ---------- */

document.addEventListener("DOMContentLoaded", function () {
    loadPronunciationList();
    if (typeof loadMyLife === "function" && document.getElementById("myLife")) {
        loadMyLife();
    }
});


/* =================================
   v9.0：完整課程頁
   直接取代 speaking.js 的 openLesson，
   一頁顯示：情境 → 文法 → 單字（含例句、發音）→ 對話 → 任務
================================= */

function renderLesson(day) {
    const area = document.getElementById("lessonArea");
    if (!area) return;

    /* 換課先停掉上一課的朗讀，否則會疊在一起念 */
    if (typeof stopLesson === "function") stopLesson();

    const lesson = courseA1.find(x => x.day === day);
    if (!lesson) return;

    const done = TS.isDayDone(day);

    area.innerHTML = `
        <h2>Day ${lesson.day}　${lesson.title}</h2>
        <p>${lesson.scene}</p>

        <div class="wordCard">
            <h3>📐 今日文法：${lesson.grammar.point}</h3>
            <p>${lesson.grammar.note}</p>
        </div>

        <h3>🔤 單字（${lesson.words.length}）</h3>
        ${lesson.words.map(w => `
            <div class="wordCard">
                <h3>🇹🇷 ${w.tr}
                    <button onclick="speakTurkish('${ttsArg(w.tr)}')">🔊</button>
                </h3>
                <p>🗣 ${w.pron}　｜　${w.zh}</p>
                <p>${w.ex}<br>${w.exZh}
                    <button onclick="speakTurkish('${ttsArg(w.ex)}')">🔊 例句</button>
                </p>
            </div>
        `).join("")}

        <h3>💬 情境對話：${lesson.dialogue.title}</h3>
        <div class="wordCard">
            <div id="dialogueLines">
                ${lesson.dialogue.lines.map(l => `
                    <p class="dialogue-line"><b>${l.who}</b>：${l.tr}
                        <button onclick="speakTurkish('${ttsArg(l.tr)}')">🔊</button>
                        <br><span style="color:#666">${l.zh}</span></p>
                `).join("")}
            </div>
            <button id="playBtn" onclick="playLesson(${lesson.day})">▶️ 整段朗讀</button>
        </div>

        <div class="wordCard">
            <h3>🎯 今日任務</h3>
            <p>${lesson.task}</p>
        </div>
    `;

    const btn = document.createElement("button");
    btn.className = done ? "day-button day-done" : "";
    btn.innerHTML = done ? "✅ 已完成，點一下取消" : "📗 我學完這一課";
    btn.onclick = function () {
        if (TS.isDayDone(day)) TS.unmarkDay(day);
        else TS.markDay(day);
        loadProgress();
        renderLesson(day);
    };
    area.appendChild(btn);
}


/* =================================
   整段對話依序朗讀（v9.1 重寫）

   舊版把每一句都丟進 speechSynthesis 佇列就不管了。
   Chrome 的 cancel() 是非同步的，連續 speak() 在語音引擎
   還沒就緒時會丟句或亂序，手機尤其明顯。
   改成用 onend 一句播完再播下一句，並標出正在念的那句。
================================= */

let lessonPlayer = { day: null, index: 0, playing: false };


function pickTurkishVoice() {
    const voices = window.speechSynthesis.getVoices() || [];
    return voices.find(v => v.lang === "tr-TR")
        || voices.find(v => (v.lang || "").indexOf("tr") === 0)
        || null;
}


function highlightLine(i) {
    const rows = document.querySelectorAll("#dialogueLines .dialogue-line");
    rows.forEach((el, n) => el.classList.toggle("speaking", n === i));
}


function stopLesson() {
    lessonPlayer.playing = false;
    window.speechSynthesis.cancel();
    highlightLine(-1);

    const btn = document.getElementById("playBtn");
    if (btn) btn.innerHTML = "▶️ 整段朗讀";
}


function playLesson(day) {
    if (!("speechSynthesis" in window)) {
        alert("⚠️ 此瀏覽器不支援語音朗讀");
        return;
    }

    /* 正在念就當成停止鍵 */
    if (lessonPlayer.playing) {
        stopLesson();
        return;
    }

    const lesson = courseA1.find(x => x.day === day);
    if (!lesson) return;

    window.speechSynthesis.cancel();

    lessonPlayer = { day: day, index: 0, playing: true };

    const btn = document.getElementById("playBtn");
    if (btn) btn.innerHTML = "⏹ 停止朗讀";

    /* cancel() 是非同步的，等一下再開始，避免第一句被吃掉 */
    setTimeout(function () { speakNextLine(lesson); }, 120);
}


function speakNextLine(lesson) {
    if (!lessonPlayer.playing) return;

    const i = lessonPlayer.index;
    const line = lesson.dialogue.lines[i];

    if (!line) {
        stopLesson();
        return;
    }

    highlightLine(i);

    const u = new SpeechSynthesisUtterance(line.tr);
    const voice = pickTurkishVoice();

    if (voice) u.voice = voice;
    u.lang = "tr-TR";
    u.rate = 0.85;

    /* 念完才排下一句，中間留一點停頓，聽起來像兩個人在對話 */
    u.onend = function () {
        if (!lessonPlayer.playing) return;
        lessonPlayer.index++;
        setTimeout(function () { speakNextLine(lesson); }, 450);
    };

    /* 萬一某一句出錯，不要整段卡死，跳過它繼續 */
    u.onerror = function () {
        if (!lessonPlayer.playing) return;
        lessonPlayer.index++;
        setTimeout(function () { speakNextLine(lesson); }, 200);
    };

    window.speechSynthesis.speak(u);
}


/* 有些瀏覽器第一次取 voices 會是空的，載好後再取一次 */
if ("speechSynthesis" in window) {
    window.speechSynthesis.onvoiceschanged = function () { pickTurkishVoice(); };
}


window.openLesson = renderLesson;
window.renderLesson = renderLesson;
window.playLesson = playLesson;
window.stopLesson = stopLesson;
window.speakNextLine = speakNextLine;
window.pickTurkishVoice = pickTurkishVoice;
/* let 宣告不會自動掛到 window，除錯時要看播放狀態才拿得到 */
window.getLessonPlayer = function () { return lessonPlayer; };
