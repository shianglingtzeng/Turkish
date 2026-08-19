/* =================================
   A1 模擬測驗（v8.1：加入成績與錯題紀錄）
================================= */

/* 題目改由 course_loader 的 90 題題庫隨機抽，每次都不一樣 */
let A1Questions = [];

let testIndex = 0;
let testScore = 0;


function startA1Test() {
    A1Questions = (typeof buildA1Questions === "function")
        ? buildA1Questions(10)
        : A1Questions;

    window.A1Questions = A1Questions;

    testIndex = 0;
    testScore = 0;
    showQuestion();
}


function showQuestion() {
    const area = document.getElementById("testArea");
    if (!area) return;

    if (testIndex >= A1Questions.length) return finishA1Test();

    const q = A1Questions[testIndex];

    area.innerHTML = `
        <p>第 ${testIndex + 1} / ${A1Questions.length} 題</p>
        <h3>${q.question}</h3>
        ${q.options.map(x =>
            `<button onclick="checkAnswer('${ttsArg(x)}')">${x}</button>`
        ).join("")}
    `;
}


function checkAnswer(answer) {
    const q = A1Questions[testIndex];
    if (!q) return;

    const ok = (answer === q.answer);

    if (ok) { testScore++; alert("✅ 正確"); }
    else { alert("❌ 正確答案：" + q.answer); }

    TS.recordWord(q.word, ok, q.answer);

    testIndex++;

    if (testIndex >= A1Questions.length) finishA1Test();
    else showQuestion();
}


function finishA1Test() {
    TS.recordQuiz("a1", testScore, A1Questions.length);

    const area = document.getElementById("testArea");
    if (area) {
        area.innerHTML = `
            <h3>🎉 測驗完成</h3>
            <p>本次分數：<b>${testScore} / ${A1Questions.length}</b></p>
            <button onclick="startA1Test()">再測一次</button>
        `;
    }

    loadProgress();
}
