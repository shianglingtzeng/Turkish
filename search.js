/* =================================
   生活字典搜尋
   修正：survivalDictionary 原本沒有被 index.html 載入，
         且欄位可能缺漏 → 全部加上防呆
================================= */

function searchWord() {
    const box = document.getElementById("searchResult");
    if (!box) return;

    if (typeof survivalDictionary === "undefined") {
        box.innerHTML = "字典資料未載入";
        return;
    }

    const keyword =
        document.getElementById("searchInput").value.trim().toLowerCase();

    if (!keyword) {
        box.innerHTML = "請輸入中文或土耳其文";
        return;
    }

    const result = survivalDictionary.filter(x =>
        (x.turkish || "").toLowerCase().includes(keyword) ||
        (x.chinese || "").includes(keyword) ||
        (x.category || "").includes(keyword)
    );

    if (result.length === 0) {
        box.innerHTML = "找不到資料";
        return;
    }

    box.innerHTML = result.map(x => `
        <div class="wordCard">
            <h3>🇹🇷 ${x.turkish}</h3>
            <p>🔊 ${x.pronunciation || ""}</p>
            <p>${x.chinese || ""}</p>
            ${x.location ? `<p>📍 ${x.location}</p>` : ""}
            ${x.example ? `<hr>${x.example}<br>${x.exampleZh || ""}` : ""}
            <button onclick="speakTurkish('${ttsArg(x.turkish)}')">
                🔊 發音
            </button>
        </div>
    `).join("");
}
