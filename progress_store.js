/* =================================
   progress_store.js  (v8.1 新增)
   真正的學習紀錄：集中一個 key，統一讀寫

   舊版只存 studyDays / lastCheck 兩個數字，
   測驗分數、學過哪幾課、答錯哪些字全部沒留。
   這支是唯一的資料層，其他模組都透過 TS.* 存取。
================================= */

var TS = (function () {

    const KEY = "turkishProgress";
    const VERSION = 1;

    function blank() {
        return {
            v: VERSION,
            createdAt: today(),
            days: {},        // { "1": "2026-08-18" }  完成的課程日
            checkins: [],    // ["2026-08-18", ...]    打卡日期
            quiz: {},        // { a1: {best, total, attempts, lastAt} }
            words: {},       // { "Su": {right, wrong, lastAt, zh} }
            favorites: [],
            favMeta: {}      // { "süt": {zh, pron, note, addedAt} }  單字本的中文、發音、筆記
        };
    }

    function today() {
        const d = new Date();
        return d.getFullYear() + "-" +
            String(d.getMonth() + 1).padStart(2, "0") + "-" +
            String(d.getDate()).padStart(2, "0");
    }

    function load() {
        let data;

        try {
            data = JSON.parse(localStorage.getItem(KEY));
        } catch (e) {
            data = null;
        }

        if (!data || typeof data !== "object") data = blank();

        // 舊版資料搬家：studyDays / lastCheck
        const oldDays = Number(localStorage.getItem("studyDays") || 0);
        const oldLast = localStorage.getItem("lastCheck");

        if (oldDays > 0 && !data.checkins.length) {
            data.migratedFrom = { studyDays: oldDays, lastCheck: oldLast };
            for (let i = 0; i < oldDays; i++) data.checkins.push("(舊紀錄)" + (i + 1));
        }

        // 欄位補齊，避免舊格式缺 key
        const b = blank();
        for (const k in b) if (!(k in data)) data[k] = b[k];

        return data;
    }

    function save(data) {
        try {
            localStorage.setItem(KEY, JSON.stringify(data));
            return true;
        } catch (e) {
            console.warn("學習紀錄寫入失敗：", e);
            return false;
        }
    }

    function edit(fn) {
        const data = load();
        fn(data);
        save(data);
        return data;
    }


    /* ---------- 打卡 ---------- */

    function checkedInToday() {
        return load().checkins.includes(today());
    }

    function checkIn() {
        if (checkedInToday()) return false;
        edit(d => d.checkins.push(today()));
        return true;
    }

    function streak() {
        const days = load().checkins
            .filter(x => /^\d{4}-\d{2}-\d{2}$/.test(x))
            .sort()
            .reverse();

        if (!days.length) return 0;

        const d = new Date();
        // 今天沒打卡就從昨天開始算，連續才不會被中斷
        if (days[0] !== today()) d.setDate(d.getDate() - 1);

        let n = 0;

        for (let i = 0; i < days.length; i++) {
            const want = d.getFullYear() + "-" +
                String(d.getMonth() + 1).padStart(2, "0") + "-" +
                String(d.getDate()).padStart(2, "0");

            if (days[i] !== want) break;

            n++;
            d.setDate(d.getDate() - 1);
        }

        return n;
    }


    /* ---------- 課程 ---------- */

    function markDay(day) {
        edit(d => { d.days[String(day)] = today(); });
    }

    function unmarkDay(day) {
        edit(d => { delete d.days[String(day)]; });
    }

    function isDayDone(day) {
        return !!load().days[String(day)];
    }

    function daysDone() {
        return Object.keys(load().days).length;
    }


    /* ---------- 測驗 ---------- */

    function recordQuiz(name, score, total) {
        edit(d => {
            const q = d.quiz[name] || { best: 0, total: total, attempts: 0 };
            q.attempts++;
            q.total = total;
            q.last = score;
            q.lastAt = today();
            if (score > q.best) q.best = score;
            d.quiz[name] = q;
        });
    }

    function quizStats() {
        return load().quiz;
    }


    /* ---------- 單字對錯 ---------- */

    function recordWord(turkish, correct, zh) {
        if (!turkish) return;

        edit(d => {
            const w = d.words[turkish] || { right: 0, wrong: 0 };
            if (correct) w.right++; else w.wrong++;
            if (zh) w.zh = zh;
            w.lastAt = today();
            d.words[turkish] = w;
        });
    }

    /* 錯越多、對越少的排前面 */
    function weakWords(limit) {
        const words = load().words;

        return Object.keys(words)
            .map(k => Object.assign({ turkish: k }, words[k]))
            .filter(w => w.wrong > 0 && w.wrong >= w.right)
            .sort((a, b) => (b.wrong - b.right) - (a.wrong - a.right))
            .slice(0, limit || 10);
    }


    /* ---------- 收藏 ---------- */

    function toggleFavorite(word, info) {
        let on = false;
        edit(d => {
            const i = d.favorites.indexOf(word);
            if (i >= 0) { d.favorites.splice(i, 1); delete d.favMeta[word]; }
            else {
                d.favorites.push(word); on = true;
                d.favMeta[word] = Object.assign({ addedAt: today() }, info || {});
            }
        });
        return on;
    }

    function isFavorite(word) {
        return load().favorites.includes(word);
    }

    function favInfo(word) {
        return load().favMeta[word] || {};
    }

    function setFavInfo(word, info) {
        edit(d => { d.favMeta[word] = Object.assign({}, d.favMeta[word] || {}, info); });
    }

    function favorites() {
        return load().favorites;
    }


    /* ---------- 匯出 / 匯入 / 清除 ---------- */

    function exportJSON() {
        return JSON.stringify(load(), null, 2);
    }

    function download() {
        const text = exportJSON();
        const name = "turkish-progress-" + today() + ".json";
        let url;

        /* 少數瀏覽器（含舊版 iOS Safari）沒有 createObjectURL，退回 data URI */
        try {
            url = URL.createObjectURL(
                new Blob([text], { type: "application/json" })
            );
        } catch (e) {
            url = "data:application/json;charset=utf-8," + encodeURIComponent(text);
        }

        const a = document.createElement("a");
        a.href = url;
        a.download = name;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        try { URL.revokeObjectURL(url); } catch (e) {}
    }

    function importJSON(text) {
        let incoming;

        try {
            incoming = JSON.parse(text);
        } catch (e) {
            return { ok: false, msg: "檔案不是有效的 JSON" };
        }

        if (!incoming || typeof incoming !== "object" || !("days" in incoming)) {
            return { ok: false, msg: "這不像學習紀錄檔" };
        }

        // 合併而不是覆蓋：兩台裝置的紀錄可以併起來
        const data = load();

        Object.assign(data.days, incoming.days || {});

        (incoming.checkins || []).forEach(c => {
            if (!data.checkins.includes(c)) data.checkins.push(c);
        });

        for (const k in (incoming.quiz || {})) {
            const a = data.quiz[k], b = incoming.quiz[k];
            data.quiz[k] = (!a || b.best > a.best) ? b : a;
        }

        for (const k in (incoming.words || {})) {
            const a = data.words[k], b = incoming.words[k];
            if (!a) data.words[k] = b;
            else {
                a.right += b.right || 0;
                a.wrong += b.wrong || 0;
            }
        }

        (incoming.favorites || []).forEach(f => {
            if (!data.favorites.includes(f)) data.favorites.push(f);
        });
        for (const k in (incoming.favMeta || {})) {
            if (!data.favMeta[k]) data.favMeta[k] = incoming.favMeta[k];
        }

        save(data);
        return { ok: true, msg: "已合併匯入的紀錄" };
    }

    function reset() {
        localStorage.removeItem(KEY);
        localStorage.removeItem("studyDays");
        localStorage.removeItem("lastCheck");
    }


    return {
        today, load, save,
        checkIn, checkedInToday, streak,
        markDay, unmarkDay, isDayDone, daysDone,
        recordQuiz, quizStats,
        recordWord, weakWords,
        toggleFavorite, favorites, isFavorite, favInfo, setFavInfo,
        exportJSON, download, importJSON, reset
    };

})();

/* 明確掛到 window，讓 inline onclick 與其他腳本一定拿得到 */
window.TS = TS;
