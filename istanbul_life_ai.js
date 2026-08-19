/* =================================
   情境生存包
   修正：原本用 title.substring(2,4) 去比對，emoji 佔 2 個字元，
         切出來是「 銀」這種帶空白的字串，永遠對不上 → 改用索引選擇
================================= */

function startLifeGuide() {
    const select = document.getElementById("lifeSituation");
    const result = document.getElementById("lifeResult");
    if (!select || !result) return;

    if (typeof survivalSituations === "undefined") {
        result.innerHTML = "情境資料未載入";
        return;
    }

    const data = survivalSituations[Number(select.value)];

    if (!data) {
        result.innerHTML = "請選擇情境";
        return;
    }

    result.innerHTML = `
        <h3>${data.title}</h3>
        ${data.need ? `<p>需要帶：${data.need.join("、")}</p>` : ""}
        <h4>你可以說：</h4>
        ${data.sentence.map(x => `
            <div class="wordCard">
                <p>🇹🇷 ${x.tr}</p>
                <p>🇨🇳 ${x.zh}</p>
                <button onclick="speakTurkish('${ttsArg(x.tr)}')">🔊 發音</button>
            </div>
        `).join("")}
    `;
}


/* 依資料自動產生下拉選單，日後新增情境不用改 HTML */
document.addEventListener("DOMContentLoaded", function () {
    const select = document.getElementById("lifeSituation");
    if (!select || typeof survivalSituations === "undefined") return;

    select.innerHTML = survivalSituations
        .map((s, i) => `<option value="${i}">${s.title}</option>`)
        .join("");
});
