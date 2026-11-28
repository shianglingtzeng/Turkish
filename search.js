/* =================================
   土耳其文字典 ＋ 我的單字本（v10）
   - 字典：把 App 裡所有字庫（課程 300 字、購物、料理、交通、社交、
     公文、包裝文字、動詞、生活用語）合在一起查，不再只查課程單字
   - 查不到：可以直接收藏，再一鍵到 Tureng / Google 翻譯查
   - 單字本：收藏存在學習紀錄（TS），備份匯出時會一起帶走
================================= */

/* ---------- 工具 ---------- */

function escHtml(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, c => (
        { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

// 土耳其字母轉成一般英文字母，打字沒有特殊字母也查得到（cay → çay）
function foldTr(s) {
    return String(s || "")
        .replace(/İ/g, "i").replace(/I/g, "ı").toLowerCase()
        .replace(/ç/g, "c").replace(/ğ/g, "g").replace(/ı/g, "i")
        .replace(/ö/g, "o").replace(/ş/g, "s").replace(/ü/g, "u")
        .replace(/â/g, "a").replace(/î/g, "i").replace(/û/g, "u")
        .trim();
}

// 收藏用的 key：一律小寫，避免 Süt / süt 收成兩筆
function wordKey(tr) {
    return String(tr || "").trim().replace(/İ/g, "i").replace(/I/g, "ı").toLowerCase();
}

function jsArg(s) {
    return typeof ttsArg === "function" ? ttsArg(s) : String(s).replace(/\\/g, "\\\\").replace(/'/g, "\\'");
}


/* ---------- 1. 把所有字庫整理成同一種格式 ---------- */

let _wordIndex = null;

function buildWordIndex() {
    if (_wordIndex) return _wordIndex;
    const out = [];
    const seen = new Set();
    function add(o) {
        const tr = (o.tr || "").trim(), zh = (o.zh || "").trim();
        if (!tr) return;
        const k = foldTr(tr) + "|" + zh;
        if (seen.has(k)) return;
        seen.add(k);
        out.push({
            tr, zh,
            pron: o.pron || "",
            src: o.src || "",
            note: o.note || "",
            ex: o.ex || "",
            exZh: o.exZh || "",
            forms: o.forms || ""
        });
    }
    const has = name => typeof window[name] !== "undefined" || (function () { try { return typeof eval(name) !== "undefined"; } catch (e) { return false; } })();
    const get = name => { try { return window[name] || eval(name); } catch (e) { return null; } };

    if (has("survivalDictionary")) get("survivalDictionary").forEach(w => add({
        tr: w.turkish, zh: w.chinese, pron: w.pronunciation, src: w.location || "課程",
        ex: w.example, exZh: w.exampleZh
    }));
    if (has("A1Vocabulary")) get("A1Vocabulary").forEach(w => add({ tr: w.tr, zh: w.zh, pron: w.sound, src: "A1 單字" }));
    if (has("shoppingDatabase")) get("shoppingDatabase").forEach(w => add({ tr: w.tr, zh: w.zh, pron: w.pronunciation, src: "購物 · " + (w.category || ""), note: w.tips || w.tip || "" }));
    if (has("productDatabase")) get("productDatabase").forEach(w => add({ tr: w.turkish, zh: w.chinese, src: "超市 · " + (w.category || ""), note: w.tip || "" }));
    if (has("foodDatabase")) get("foodDatabase").forEach(w => add({ tr: w.tr, zh: w.zh, pron: w.pronunciation, src: "料理 · " + (w.category || ""), note: w.description || "" }));
    if (has("transportDatabase")) get("transportDatabase").forEach(w => add({ tr: w.tr, zh: w.zh, pron: w.pronunciation, src: "交通", note: w.tips || "" }));
    if (has("socialDatabase")) get("socialDatabase").forEach(w => add({ tr: w.tr, zh: w.zh, pron: w.pronunciation, src: "社交用語", note: w.usage || "" }));
    if (has("packageDictionary")) get("packageDictionary").forEach(w => add({ tr: w.tr, zh: w.zh, pron: w.pronunciation, src: "包裝文字 · " + (w.category || ""), note: w.explain || "" }));
    if (has("governmentDictionary")) get("governmentDictionary").forEach(w => add({ tr: w.tr, zh: w.zh, pron: w.pronunciation, src: "公文 · " + (w.category || ""), note: w.explain || "" }));
    if (has("istanbulDatabase")) get("istanbulDatabase").forEach(w => add({ tr: w.word, zh: w.meaning, pron: w.sound, src: "生活 · " + (w.place || ""), ex: w.sentence, exZh: w.translation }));
    if (has("verbDatabase")) get("verbDatabase").forEach(v => add({
        tr: v.infinitive, zh: v.zh, src: "動詞",
        forms: v.present ? Object.keys(v.present).map(p => p + " " + v.present[p]).join("、") : ""
    }));

    _wordIndex = out;
    return out;
}


/* ---------- 2. 查詢 ---------- */

function searchWord() {
    const box = document.getElementById("searchResult");
    if (!box) return;
    const raw = document.getElementById("searchInput").value.trim();
    if (!raw) { box.innerHTML = "請輸入中文或土耳其文"; return; }

    const q = foldTr(raw);
    const all = buildWordIndex();

    // 排序：完全相同 > 開頭相同 > 包含；動詞變化（gidiyorum）也比對得到
    const scored = [];
    all.forEach(w => {
        const t = foldTr(w.tr);
        let s = 0;
        if (t === q || w.zh === raw) s = 3;
        else if (t.startsWith(q)) s = 2;
        else if (t.includes(q) || (w.zh && w.zh.includes(raw))) s = 1;
        else if (w.forms && foldTr(w.forms).includes(q)) s = 1;
        if (s) scored.push({ w, s });
    });
    scored.sort((a, b) => b.s - a.s || a.w.tr.length - b.w.tr.length);
    const list = scored.slice(0, 30).map(x => x.w);

    const lookup = lookupLinks(raw);
    if (!list.length) {
        const isTr = /[a-zçğıöşü]/i.test(raw);
        box.innerHTML = `
            <div class="wordCard">
                <p>字典裡還沒有「<b>${escHtml(raw)}</b>」。</p>
                ${isTr ? `<button onclick="favFromSearch('${jsArg(raw)}')">☆ 先收藏，之後再補意思</button>` : ""}
                <p class="dict-hint">到其他字典查：</p>
                ${lookup}
            </div>`;
        return;
    }
    box.innerHTML =
        `<p class="dict-hint">找到 ${list.length} 筆${scored.length > 30 ? "（只列前 30 筆）" : ""}</p>` +
        list.map(wordCardHtml).join("") +
        `<details class="dict-more"><summary>沒有你要的？到其他字典查「${escHtml(raw)}」</summary>${lookup}</details>`;
}

function lookupLinks(word) {
    const w = encodeURIComponent(word);
    return `<div class="chips">
        <a class="ext-btn" href="https://tureng.com/en/turkish-english/${w}" target="_blank" rel="noopener">Tureng</a>
        <a class="ext-btn" href="https://translate.google.com/?sl=auto&tl=zh-TW&text=${w}&op=translate" target="_blank" rel="noopener">Google 翻譯</a>
        <a class="ext-btn" href="https://sozluk.gov.tr/?q=${w}" target="_blank" rel="noopener">TDK 字典</a>
    </div>`;
}

function wordCardHtml(w) {
    const fav = TS.isFavorite(wordKey(w.tr));
    return `
        <div class="wordCard">
            <div class="wc-head">
                <h3>🇹🇷 ${escHtml(w.tr)}</h3>
                <button class="fav-btn ${fav ? "on" : ""}" title="${fav ? "移出單字本" : "加入單字本"}"
                    onclick="toggleFavWord(this, '${jsArg(w.tr)}', '${jsArg(w.zh)}', '${jsArg(w.pron)}')">${fav ? "★" : "☆"}</button>
            </div>
            <p><b>${escHtml(w.zh)}</b>${w.pron ? `　🔊 ${escHtml(w.pron)}` : ""}</p>
            ${w.src ? `<p class="dict-hint">📂 ${escHtml(w.src)}</p>` : ""}
            ${w.note ? `<p>${escHtml(w.note)}</p>` : ""}
            ${w.forms ? `<p class="dict-hint">現在式：${escHtml(w.forms)}</p>` : ""}
            ${w.ex ? `<hr>${escHtml(w.ex)}<br>${escHtml(w.exZh)}` : ""}
            <button onclick="speakTurkish('${jsArg(w.tr)}')">🔊 發音</button>
        </div>`;
}


/* ---------- 3. 收藏 ---------- */

function toggleFavWord(btn, tr, zh, pron) {
    const on = TS.toggleFavorite(wordKey(tr), { tr, zh: zh || "", pron: pron || "" });
    if (btn) {
        btn.textContent = on ? "★" : "☆";
        btn.classList.toggle("on", on);
        btn.title = on ? "移出單字本" : "加入單字本";
    }
    renderWordbook();
}

function favFromSearch(tr) {
    if (!TS.isFavorite(wordKey(tr))) TS.toggleFavorite(wordKey(tr), { tr, zh: "" });
    renderWordbook();
    const box = document.getElementById("searchResult");
    if (box) box.insertAdjacentHTML("afterbegin", `<p class="dict-ok">已加入單字本，查到意思後回來補上。</p>`);
}

function addOwnWord() {
    const tr = document.getElementById("wbWord").value.trim();
    const zh = document.getElementById("wbZh").value.trim();
    if (!tr) { alert("請輸入土耳其文"); return; }
    const k = wordKey(tr);
    if (TS.isFavorite(k)) TS.setFavInfo(k, zh ? { zh } : {});
    else {
        // 字典裡有的話，自動帶入中文和發音
        const hit = buildWordIndex().find(w => foldTr(w.tr) === foldTr(tr));
        TS.toggleFavorite(k, { tr, zh: zh || (hit ? hit.zh : ""), pron: hit ? hit.pron : "" });
    }
    document.getElementById("wbWord").value = "";
    document.getElementById("wbZh").value = "";
    renderWordbook();
}

function editFavZh(k) {
    const cur = TS.favInfo(k);
    const zh = prompt("「" + (cur.tr || k) + "」的中文意思：", cur.zh || "");
    if (zh === null) return;
    TS.setFavInfo(k, { zh: zh.trim() });
    renderWordbook();
}

function editFavNote(k) {
    const cur = TS.favInfo(k);
    const note = prompt("筆記（例句、在哪裡看到的…）：", cur.note || "");
    if (note === null) return;
    TS.setFavInfo(k, { note: note.trim() });
    renderWordbook();
}

function removeFav(k) {
    const cur = TS.favInfo(k);
    if (!confirm("把「" + (cur.tr || k) + "」移出單字本？")) return;
    TS.toggleFavorite(k);
    renderWordbook();
}

let _wbFilter = "";

function renderWordbook(filter) {
    if (filter !== undefined) _wbFilter = filter;
    const box = document.getElementById("wordbookList");
    if (!box) return;
    let keys = TS.favorites().slice().reverse();          // 新收藏的在上面
    if (_wbFilter === "nozh") keys = keys.filter(k => !(TS.favInfo(k).zh));
    const total = TS.favorites().length;
    if (!keys.length) {
        box.innerHTML = total
            ? `<p class="dict-hint">每個字都寫好意思了 👍</p>`
            : `<p class="dict-hint">還沒有收藏。在字典查到的字按 ☆，或在上面直接輸入。</p>`;
        return;
    }
    box.innerHTML = `<p class="dict-hint">共 ${total} 個字${_wbFilter === "nozh" ? `，其中 ${keys.length} 個還沒寫意思` : ""}</p>` +
        keys.map(k => {
            const f = TS.favInfo(k);
            const tr = f.tr || k;
            return `
            <div class="wordCard wb-card">
                <div class="wc-head">
                    <h3>${escHtml(tr)}</h3>
                    <button class="fav-btn on" title="移出單字本" onclick="removeFav('${jsArg(k)}')">★</button>
                </div>
                ${f.zh ? `<p><b>${escHtml(f.zh)}</b>${f.pron ? `　🔊 ${escHtml(f.pron)}` : ""}</p>`
                       : `<p class="wb-missing">還沒寫意思</p>`}
                ${f.note ? `<p class="dict-hint">📝 ${escHtml(f.note)}</p>` : ""}
                <div class="chips">
                    <button onclick="speakTurkish('${jsArg(tr)}')">🔊</button>
                    <button onclick="editFavZh('${jsArg(k)}')">✏️ 意思</button>
                    <button onclick="editFavNote('${jsArg(k)}')">📝 筆記</button>
                    <a class="ext-btn" href="https://tureng.com/en/turkish-english/${encodeURIComponent(tr)}" target="_blank" rel="noopener">Tureng</a>
                    <a class="ext-btn" href="https://translate.google.com/?sl=tr&tl=zh-TW&text=${encodeURIComponent(tr)}&op=translate" target="_blank" rel="noopener">Google</a>
                </div>
            </div>`;
        }).join("");
}


/* ---------- 4. 用單字本複習（看土耳其文 → 想意思 → 翻牌） ---------- */

let _wbQuiz = [], _wbQi = 0;

function startWordbookQuiz() {
    const keys = TS.favorites().filter(k => TS.favInfo(k).zh);
    const box = document.getElementById("wordbookList");
    if (!keys.length) { box.innerHTML = `<p class="dict-hint">要先有寫好意思的字，才能複習。</p>`; return; }
    _wbQuiz = keys.sort(() => Math.random() - 0.5);
    _wbQi = 0;
    showWordbookCard(false);
}

function showWordbookCard(reveal) {
    const box = document.getElementById("wordbookList");
    if (_wbQi >= _wbQuiz.length) {
        box.innerHTML = `<div class="wordCard"><h3>複習完 ${_wbQuiz.length} 個字 🎉</h3>
            <div class="chips"><button onclick="startWordbookQuiz()">再一輪</button><button onclick="renderWordbook('')">回單字本</button></div></div>`;
        return;
    }
    const k = _wbQuiz[_wbQi], f = TS.favInfo(k), tr = f.tr || k;
    box.innerHTML = `
        <div class="wordCard wb-quiz">
            <p class="dict-hint">${_wbQi + 1} / ${_wbQuiz.length}</p>
            <h2>${escHtml(tr)}</h2>
            <button onclick="speakTurkish('${jsArg(tr)}')">🔊</button>
            ${reveal
                ? `<p class="wb-answer">${escHtml(f.zh)}</p>
                   <div class="chips">
                       <button onclick="wbAnswer(true)">✅ 我會</button>
                       <button onclick="wbAnswer(false)">❌ 還不熟</button>
                   </div>`
                : `<div class="chips"><button onclick="showWordbookCard(true)">看答案</button></div>`}
        </div>`;
}

function wbAnswer(ok) {
    const k = _wbQuiz[_wbQi], f = TS.favInfo(k);
    if (typeof TS.recordWord === "function") {
        try { TS.recordWord(f.tr || k, ok, f.zh); } catch (e) {}
    }
    _wbQi++;
    showWordbookCard(false);
}

document.addEventListener("DOMContentLoaded", () => renderWordbook());
