/* =================================
   文法查詢
   v9.0：改為同時搜尋文法標題、說明與課程名稱，
         並可一次列出多筆（30 課文法點）
================================= */

function searchGrammar() {
    const result = document.getElementById("grammarResult");
    if (!result) return;

    const input = document.getElementById("grammarInput").value.trim().toLowerCase();

    if (!input) {
        result.innerHTML = "請輸入關鍵字，例如：現在式 / 我是 / 方向 / 敬語";
        return;
    }

    const found = grammarDatabase.filter(g =>
        (g.title || "").toLowerCase().includes(input) ||
        (g.rule || "").toLowerCase().includes(input) ||
        (g.turkish || "").toLowerCase().includes(input)
    );

    if (!found.length) {
        result.innerHTML = "找不到此文法。試試：我是 / 有嗎 / 方向 / 過去 / 請託";
        return;
    }

    result.innerHTML = found.slice(0, 5).map(g => `
        <div class="wordCard">
            <h3>📚 ${g.title}</h3>
            <h4>Day ${g.id}　${g.turkish}</h4>
            <p>${g.rule}</p>
            <hr>
            <ul>${g.examples.map(e => `<li>${e}</li>`).join("")}</ul>
            <button onclick="renderLesson(${g.id})">📖 看這一課</button>
        </div>
    `).join("");
}
