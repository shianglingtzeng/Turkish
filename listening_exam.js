/* =================================
   A1 聽力測驗（v8.1：加入成績與錯題紀錄）
================================= */

let currentListening = 0;
let score = 0;


function loadListeningQuestion() {
    const box = document.getElementById("listeningBox");
    if (!box) return;

    if (currentListening >= listeningDatabase.length) {
        currentListening = 0;
        score = 0;
    }

    const q = listeningDatabase[currentListening];

    box.innerHTML = `
        <h3>🎧 A1 Listening</h3>
        <button onclick="speakTurkish('${ttsArg(q.audioText)}')">🔊 播放語音</button>
        <p>問題：${q.question}</p>
        <div>
            ${q.options.map(o =>
                `<button onclick="checkListening('${ttsArg(o)}')">${o}</button>`
            ).join("")}
        </div>
        <p>第 ${currentListening + 1} 題 / ${listeningDatabase.length}</p>
    `;
}


function checkListening(answer) {
    const q = listeningDatabase[currentListening];
    if (!q) return;

    const ok = (answer === q.answer);

    if (ok) { score++; alert("✅ 正確!"); }
    else { alert("❌ 答案：" + q.answer); }

    TS.recordWord(q.audioText, ok, q.translation);

    currentListening++;

    if (currentListening < listeningDatabase.length) loadListeningQuestion();
    else showListeningResult();
}


function showListeningResult() {
    TS.recordQuiz("listening", score, listeningDatabase.length);

    const box = document.getElementById("listeningBox");
    if (box) {
        box.innerHTML = `
            <h2>🎉 完成測驗</h2>
            <p>分數：<b>${score} / ${listeningDatabase.length}</b></p>
            <button onclick="restartListening()">重新開始</button>
        `;
    }

    loadProgress();
}


function restartListening() {
    currentListening = 0;
    score = 0;
    loadListeningQuestion();
}
