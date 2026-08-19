/* =================================
   超市／包裝商品辨識
   修正：找不到時再退回 productDatabase（原本 product_database.js
         與 supermarket_ai.js 完全沒被用到）
================================= */

function scanTurkish() {
    const inputEl = document.getElementById("cameraText");
    const result = document.getElementById("scanResult");
    if (!inputEl || !result) return;

    const input = inputEl.value.trim();

    if (!input) {
        result.innerHTML = "請輸入包裝上的土耳其文";
        return;
    }

    const found = (typeof istanbulDatabase !== "undefined")
        ? istanbulDatabase.find(x =>
            input.toLowerCase().includes(x.word.toLowerCase()))
        : null;

    if (found) {
        result.innerHTML = `
            <div class="wordCard">
                <h2>${found.word}</h2>
                <h3>${found.meaning}</h3>
                <p>🔊 ${found.sound}</p>
                <p>位置：${found.place}</p>
                <hr>
                ${found.sentence}<br>${found.translation}
                <button onclick="speakTurkish('${ttsArg(found.word)}')">🔊 發音</button>
            </div>
        `;
        return;
    }

    if (typeof scanProduct === "function") {
        const fallback = scanProduct(input);
        if (fallback && fallback !== "找不到商品") {
            result.innerHTML = `<div class="wordCard">${fallback}</div>`;
            return;
        }
    }

    result.innerHTML = "找不到。建議輸入包裝上的完整土文，或到下面「包裝文字查詢」試試。";
}
