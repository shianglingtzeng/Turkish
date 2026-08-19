/* =================================
   AI 土耳其老師
   修正：turkishDatabase 有 169 個單字沒有 example 欄位，
         原本直接輸出會顯示 undefined → 改為有才顯示，
         並改成一次列出多筆結果
================================= */

function askTeacher() {
    const input = document.getElementById("aiInput");
    const answer = document.getElementById("aiAnswer");
    if (!input || !answer) return;

    const question = input.value.trim();

    if (!question) {
        answer.innerHTML = "請輸入你想問的中文，例如：我要買水";
        return;
    }

    answer.innerHTML = searchChinese(question) || teacherReply(question);
}


function searchChinese(text) {
    if (typeof turkishDatabase === "undefined") return "";

    const result = [];

    turkishDatabase.forEach(day => {
        (day.words || []).forEach(word => {
            if (
                word.chinese.includes(text) ||
                word.turkish.toLowerCase().includes(text.toLowerCase())
            ) {
                result.push(word);
            }
        });
    });

    if (!result.length) return "";

    return result.slice(0, 5).map(w => `
        <div class="wordCard">
            <h3>🇹🇷 ${w.turkish}</h3>
            <p>🔊 ${w.pronunciation || ""}　${w.chinese}</p>
            ${w.example ? `<p>${w.example}<br>${w.exampleChinese || ""}</p>` : ""}
            <button onclick="speakTurkish('${ttsArg(w.turkish)}')">
                🔊 發音
            </button>
        </div>
    `).join("");
}


function teacherReply(input) {
    const text = String(input);

    if (text.includes("不懂")) {
        return `不要急 😊<br>土耳其語：Anlamadım.<br>意思：我不懂。<br>請跟著念：An-la-ma-dım`;
    }

    if (text.includes("你好")) {
        return `你可以說：Merhaba<br>更自然：Merhaba, nasılsınız?`;
    }

    return `字典裡沒有這個說法。<br>試試看：我要買水 / 多少錢 / 地鐵在哪`;
}
