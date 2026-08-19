/* =================================
   course_loader.js
   把 course_a1_part1~3 合併成 courseA1，
   再灌進舊模組期待的各個資料結構裡。

   這樣 30 天課程只需要維護一份，
   字典、AI老師、複習、聽力測驗、A1測驗、對話卡
   全部自動吃到同一套內容。
================================= */

const courseA1 = []
    .concat(typeof courseA1_1 !== "undefined" ? courseA1_1 : [])
    .concat(typeof courseA1_2 !== "undefined" ? courseA1_2 : [])
    .concat(typeof courseA1_3 !== "undefined" ? courseA1_3 : [])
    .sort((a, b) => a.day - b.day);


/* ---------- 1. 30 天課程列表（app.js / speaking.js 用） ---------- */

const a1ThirtyDays = courseA1.map(d => ({
    day: d.day,
    title: d.title,
    scene: d.scene,
    grammar: d.grammar,
    words: d.words.map(w => w.tr + " " + w.zh),
    task: d.task
}));


/* ---------- 2. 主單字庫（ai_teacher / review 用） ---------- */

const turkishDatabase = courseA1.map(d => ({
    day: d.day,
    category: d.scene || d.title,
    words: d.words.map(w => ({
        turkish: w.tr,
        chinese: w.zh,
        pronunciation: w.pron,
        example: w.ex,
        exampleChinese: w.exZh
    }))
}));


/* ---------- 3. 生活字典（search.js 用） ---------- */

const survivalDictionary = courseA1.reduce((all, d) =>
    all.concat(d.words.map(w => ({
        turkish: w.tr,
        pronunciation: w.pron,
        chinese: w.zh,
        category: d.title,
        location: "Day " + d.day + "　" + (d.scene || ""),
        example: w.ex,
        exampleZh: w.exZh
    }))), []);


/* ---------- 4. 聽力測驗（listening_exam.js 用） ---------- */
/* 每一課的對話抽一句當聽力題，選項用同一課的其他中文意思當誘答 */

const listeningDatabase = courseA1.map(d => {
    const line = d.dialogue.lines[1] || d.dialogue.lines[0];

    const wrong = courseA1
        .filter(x => x.day !== d.day)
        .map(x => (x.dialogue.lines[1] || x.dialogue.lines[0]).zh);

    const pick = [];
    while (pick.length < 2 && wrong.length) {
        pick.push(wrong.splice(Math.floor(Math.random() * wrong.length), 1)[0]);
    }

    const options = [line.zh].concat(pick).sort(() => Math.random() - 0.5);

    return {
        id: d.day,
        level: "A1",
        audioText: line.tr,
        question: "這句話的意思是？",
        translation: line.zh,
        options: options,
        answer: line.zh
    };
});


/* ---------- 5. 跟讀庫（daily_audio.js 用） ---------- */

const listeningShadowing = courseA1.reduce((all, d) =>
    all.concat(d.dialogue.lines.map((l, i) => ({
        id: d.day * 100 + i,
        category: "Day " + d.day + "　" + d.title,
        turkish: l.tr,
        slow: l.tr,
        chinese: l.zh,
        answer: d.dialogue.title,
        answerZh: d.scene || ""
    }))), []);


/* ---------- 6. 情境對話卡（dialogue.js 用） ---------- */

const dialogues = courseA1.map(d => ({
    scene: "Day " + d.day + "　" + d.dialogue.title,
    turkish: d.dialogue.lines[0].tr,
    chinese: d.dialogue.lines[0].zh,
    answer: (d.dialogue.lines[1] || d.dialogue.lines[0]).tr,
    answerChinese: (d.dialogue.lines[1] || d.dialogue.lines[0]).zh
}));


/* ---------- 7. 文法庫（grammar_ai.js 用） ---------- */

const grammarDatabase = courseA1.map(d => ({
    id: d.day,
    title: d.grammar.point,
    turkish: d.title,
    level: "A1",
    rule: d.grammar.note,
    examples: d.words.slice(0, 3).map(w => w.ex + "（" + w.exZh + "）")
}));


/* ---------- 8. A1 測驗題庫 ---------- */
/* 30 課 × 3 題 = 90 題，每次隨機抽 10 題 */

const A1QuestionBank = courseA1.reduce((all, d) =>
    all.concat(d.quiz.map(q => ({
        question: "【Day " + d.day + "】" + q.q,
        word: d.words[0].tr,
        options: q.options,
        answer: q.a
    }))), []);


function buildA1Questions(count) {
    const pool = A1QuestionBank.slice();
    const picked = [];
    const size = Math.min(count || 10, pool.length);

    while (picked.length < size) {
        picked.push(pool.splice(Math.floor(Math.random() * pool.length), 1)[0]);
    }

    return picked;
}


/* 完整課程總覽用 */
function courseStats() {
    return {
        days: courseA1.length,
        words: survivalDictionary.length,
        dialogueLines: listeningShadowing.length,
        quizQuestions: A1QuestionBank.length
    };
}

/* 這些資料是用 const 宣告的，不會自動掛到 window 上。
   明確掛上去，除錯與外部腳本才拿得到。 */
window.courseA1 = courseA1;
window.a1ThirtyDays = a1ThirtyDays;
window.turkishDatabase = turkishDatabase;
window.survivalDictionary = survivalDictionary;
window.listeningDatabase = listeningDatabase;
window.listeningShadowing = listeningShadowing;
window.dialogues = dialogues;
window.grammarDatabase = grammarDatabase;
window.A1QuestionBank = A1QuestionBank;
window.buildA1Questions = buildA1Questions;
window.courseStats = courseStats;
