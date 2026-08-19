/* =================================
   學習儀表板（v8.1 重寫）
   資料一律走 TS.*（progress_store.js）
================================= */

function loadProgress() {
    const box = document.getElementById("dashboard");
    if (!box) return;

    const data = TS.load();
    const total = (typeof a1ThirtyDays !== "undefined") ? a1ThirtyDays.length : 30;
    const done = TS.daysDone();
    const pct = Math.round(done / total * 100);
    const weak = TS.weakWords(50).length;
    const words = Object.keys(data.words).length;

    let html = `
        <p>📚 課程進度：<b>${done} / ${total}</b> 課</p>
        <div class="progress"><div class="progress-bar" style="width:${pct}%"></div></div>
        <p>🔥 連續打卡：<b>${TS.streak()}</b> 天　｜　🗓 累計打卡：<b>${data.checkins.length}</b> 天</p>
        <p>🔤 練習過的單字：<b>${words}</b> 個　｜　⚠️ 待加強：<b>${weak}</b> 個</p>
    `;

    const q = data.quiz;
    const names = {
        a1: "A1模擬測驗",
        grammar: "文法填空",
        verb: "動詞測驗",
        listening: "聽力測驗"
    };
    const keys = Object.keys(q);

    if (keys.length) {
        html += `<h4>🏆 測驗最佳成績</h4>`;
        html += keys.map(k =>
            `<p>${names[k] || k}：<b>${q[k].best} / ${q[k].total}</b>
             （作答 ${q[k].attempts} 次，最近 ${q[k].lastAt || "-"}）</p>`
        ).join("");
    } else {
        html += `<p style="color:#888">還沒有測驗紀錄，做完一輪測驗就會顯示最佳成績。</p>`;
    }

    box.innerHTML = html;

    if (typeof loadDays === "function") loadDays();
}


/* 保留舊名稱，其他地方還在呼叫 */
function addProgress() {
    TS.checkIn();
    loadProgress();
}


/* ---------- 待加強單字 ---------- */

function showWeakWords() {
    const box = document.getElementById("weakBox");
    if (!box) return;

    const weak = TS.weakWords(15);

    if (!weak.length) {
        box.innerHTML = "目前沒有需要加強的單字。做幾輪測驗之後，答錯的字會自動收集到這裡。";
        return;
    }

    box.innerHTML = weak.map(w => `
        <div class="wordCard">
            <h3>🇹🇷 ${w.turkish}</h3>
            <p>${w.zh || ""}</p>
            <p>✅ ${w.right} 次　❌ ${w.wrong} 次　（最近 ${w.lastAt || "-"}）</p>
            <button onclick="speakTurkish('${ttsArg(w.turkish)}')">🔊 發音</button>
        </div>
    `).join("");
}


/* ---------- 匯出 / 匯入 / 清除 ---------- */

function exportProgress() {
    TS.download();
    const box = document.getElementById("backupBox");
    if (box) box.innerHTML = "已產生備份檔，請保存好。換手機或換網址時用它還原。";
}


function importProgress(input) {
    const file = input.files && input.files[0];
    const box = document.getElementById("backupBox");
    if (!file) return;

    const reader = new FileReader();

    reader.onload = function () {
        const r = TS.importJSON(String(reader.result));
        if (box) box.innerHTML = (r.ok ? "✅ " : "❌ ") + r.msg;
        loadProgress();
    };

    reader.onerror = function () {
        if (box) box.innerHTML = "❌ 讀取檔案失敗";
    };

    reader.readAsText(file);
    input.value = "";
}


function resetProgress() {
    if (!confirm("確定要清除全部學習紀錄嗎？這個動作沒辦法復原。")) return;
    TS.reset();
    loadProgress();
    const box = document.getElementById("backupBox");
    if (box) box.innerHTML = "紀錄已清除。";
}
