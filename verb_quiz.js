/* =================================
   動詞測驗（v8.1：加入成績與錯題紀錄）
================================= */

const verbQuiz = [
    { question: "Ben ____ (gitmek)", answer: "gidiyorum" },
    { question: "Sen ____ (gelmek)", answer: "geliyorsun" },
    { question: "Ben ____ (içmek)", answer: "içiyorum" }
];

let currentVerbQuiz = 0;
let verbScore = 0;


function loadVerbQuiz() {
    const box = document.getElementById("verbQuizBox");
    if (!box) return;

    if (currentVerbQuiz >= verbQuiz.length) {
        currentVerbQuiz = 0;
        verbScore = 0;
    }

    const q = verbQuiz[currentVerbQuiz];

    box.innerHTML = `
        <p>第 ${currentVerbQuiz + 1} / ${verbQuiz.length} 題</p>
        <h3>${q.question}</h3>
        <input id="verbAnswer" placeholder="輸入正確變化">
        <button onclick="checkVerbAnswer()">確認</button>
    `;
}


function checkVerbAnswer() {
    const el = document.getElementById("verbAnswer");
    if (!el) return;

    const q = verbQuiz[currentVerbQuiz];
    const answer = el.value.trim().toLowerCase();
    const ok = (answer === q.answer);

    if (ok) { verbScore++; alert("✅ 正確"); }
    else { alert("❌ 正確答案：" + q.answer); }

    TS.recordWord(q.answer, ok);

    currentVerbQuiz++;

    if (currentVerbQuiz < verbQuiz.length) {
        loadVerbQuiz();
        return;
    }

    TS.recordQuiz("verb", verbScore, verbQuiz.length);

    document.getElementById("verbQuizBox").innerHTML = `
        <h3>🎉 完成測驗</h3>
        <p>本次分數：<b>${verbScore} / ${verbQuiz.length}</b></p>
        <button onclick="loadVerbQuiz()">再測一次</button>
    `;

    currentVerbQuiz = 0;
    verbScore = 0;
    loadProgress();
}
