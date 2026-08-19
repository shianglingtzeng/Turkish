/* =================================
   複習模組
   修正：原本使用未定義的 learnedWords → 直接 ReferenceError
         改為依打卡進度，從 turkishDatabase 取出已學過的單字
================================= */

function getLearnedWords() {
    if (typeof turkishDatabase === "undefined") return [];

    /* 已完成的課程日，沒有的話至少給 Day 1 */
    const done = Object.keys(TS.load().days).map(Number);
    const maxDay = done.length ? Math.max.apply(null, done) : 1;

    return turkishDatabase
        .filter(d => d.day <= maxDay)
        .reduce((all, d) => all.concat(d.words || []), []);
}


function getReviewWords(count) {
    const pool = getLearnedWords().slice();
    const size = count || 5;
    const picked = [];

    /* 先塞答錯過的字，複習才有意義 */
    const weak = TS.weakWords(size);
    weak.forEach(w => {
        const hit = pool.find(x => x.turkish === w.turkish);
        if (hit) {
            picked.push(hit);
            pool.splice(pool.indexOf(hit), 1);
        } else {
            picked.push({ turkish: w.turkish, chinese: w.zh || "", pronunciation: "" });
        }
    });

    while (pool.length && picked.length < size) {
        picked.push(
            pool.splice(Math.floor(Math.random() * pool.length), 1)[0]
        );
    }

    return picked;
}


function startReview() {
    const box = document.getElementById("reviewArea");
    if (!box) return;

    const words = getReviewWords(5);

    if (!words.length) {
        box.innerHTML = "還沒有已學單字，先去完成今日任務吧！";
        return;
    }

    const weakCount = TS.weakWords(5).length;

    box.innerHTML = `
        <p>今日複習 ${words.length} 個單字${weakCount ? "（含 " + weakCount + " 個答錯過的）" : ""}：</p>
        ${words.map(w => `
            <div class="wordCard">
                <h3>🇹🇷 ${w.turkish}</h3>
                <p>🔊 ${w.pronunciation || ""}　${w.chinese}</p>
                ${w.example ? `<p>${w.example}<br>${w.exampleChinese || ""}</p>` : ""}
                <button onclick="speakTurkish('${ttsArg(w.turkish)}')">
                    🔊 發音
                </button>
            </div>
        `).join("")}
    `;
}
