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
            ${lesson.dialogue.lines.map(l => `
                <p><b>${l.who}</b>：${l.tr}
                    <button onclick="speakTurkish('${ttsArg(l.tr)}')">🔊</button>
                    <br><span style="color:#666">${l.zh}</span></p>
            `).join("")}
            <button onclick="playLesson(${lesson.day})">▶️ 整段朗讀</button>
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


/* 整段對話依序朗讀 */
function playLesson(day) {
    const lesson = courseA1.find(x => x.day === day);
    if (!lesson || !("speechSynthesis" in window)) return;

    window.speechSynthesis.cancel();

    lesson.dialogue.lines.forEach(l => {
        const u = new SpeechSynthesisUtterance(l.tr);
        u.lang = "tr-TR";
        u.rate = 0.8;
        window.speechSynthesis.speak(u);
    });
}


window.openLesson = renderLesson;
window.renderLesson = renderLesson;
window.playLesson = playLesson;
