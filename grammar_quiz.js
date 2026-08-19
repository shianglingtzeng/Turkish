/* =================================
   文法填空（v8.1：加入成績紀錄，並修好越界崩潰）
================================= */

const grammarQuiz = [
    { question: "Ben ___ Tayvanlı.", answer: "ım" },
    { question: "Sen Türkçe öğreniyor___?", answer: "musun" },
    { question: "Ben kahve iç___", answer: "iyorum" }
];

let quizIndex = 0;
let grammarScore = 0;


function loadGrammarQuiz() {
    const box = document.getElementById("quizBox");
    if (!box) return;

    if (quizIndex >= grammarQuiz.length) {
        quizIndex = 0;
        grammarScore = 0;
    }

    const q = grammarQuiz[quizIndex];

    box.innerHTML = `
        <p>第 ${quizIndex + 1} / ${grammarQuiz.length} 題</p>
        <h3>${q.question}</h3>
        <input id="quizAnswer" placeholder="填入正確字尾">
        <button onclick="checkGrammarQuiz()">確認</button>
    `;
}


function checkGrammarQuiz() {
    const el = document.getElementById("quizAnswer");
    if (!el) return;

    const q = grammarQuiz[quizIndex];
    const ok = (el.value.trim().toLowerCase() === q.answer);

    if (ok) { grammarScore++; alert("✅ 正確"); }
    else { alert("❌ 答案：" + q.answer); }

    quizIndex++;

    if (quizIndex < grammarQuiz.length) {
        loadGrammarQuiz();
        return;
    }

    TS.recordQuiz("grammar", grammarScore, grammarQuiz.length);

    document.getElementById("quizBox").innerHTML = `
        <h3>🎉 文法填空完成</h3>
        <p>本次分數：<b>${grammarScore} / ${grammarQuiz.length}</b></p>
        <button onclick="loadGrammarQuiz()">再來一輪</button>
    `;

    quizIndex = 0;
    grammarScore = 0;
    loadProgress();
}
