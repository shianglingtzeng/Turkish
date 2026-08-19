/* =================================
   Turkish Survival System v8.0
   app.js — 主控制器

   修正紀錄：
   1. 移除與 camera.js / ai_teacher.js / speaking.js 重複的
      scanTurkish / askTeacher / openLesson（原本靠載入順序覆蓋，很脆弱）
   2. loadTodayMission 改用課程長度取餘數，不再因為
      a1_30days 只有 10 天而在每月 11 號之後失效
   3. dailyCheckIn 併入防重複打卡（原本寫在 index.html 內嵌 script）
================================= */

document.addEventListener("DOMContentLoaded", function () {
    console.log("🇹🇷 Turkish Survival System v9.0 Started");
    initializeApp();
});


function initializeApp() {
    loadTodayMission();
    loadProgress();
    loadDays();
}


/* ---------- 今日任務 ---------- */

function todayLessonNumber() {
    const total =
        (typeof a1ThirtyDays !== "undefined" && a1ThirtyDays.length)
            ? a1ThirtyDays.length
            : 1;

    return ((new Date().getDate() - 1) % total) + 1;
}


function loadTodayMission() {
    const box = document.getElementById("dailyMission");
    if (!box) return;

    const lesson = a1ThirtyDays.find(x => x.day === todayLessonNumber());

    if (!lesson) {
        box.innerHTML = "今天：複習土耳其文";
        return;
    }

    box.innerHTML = `
        <h3>Day ${lesson.day}</h3>
        <h4>${lesson.title}</h4>
        <p>任務：${lesson.task}</p>
        <button onclick="openLesson(${lesson.day})">📖 開啟今日課程</button>
    `;
}


/* ---------- 打卡（每日限一次） ---------- */

function dailyCheckIn() {
    if (TS.checkedInToday()) {
        alert("📚 今天已經打過卡了。");
        loadProgress();
        return;
    }

    TS.checkIn();
    loadProgress();
    alert("🎉 今日學習完成！連續 " + TS.streak() + " 天。");
}


/* ---------- 30 天課程列表 ---------- */

function loadDays() {
    const menu = document.getElementById("dayMenu");
    if (!menu) return;

    menu.innerHTML = "";

    a1ThirtyDays.forEach(lesson => {
        const done = TS.isDayDone(lesson.day);
        const btn = document.createElement("button");
        btn.className = "day-button" + (done ? " day-done" : "");
        btn.innerHTML = `${done ? "✅ " : ""}Day ${lesson.day}<br>${lesson.title}`;
        btn.onclick = function () { openLesson(lesson.day); };
        menu.appendChild(btn);
    });
}


/* ---------- 字典搜尋快捷 ---------- */

function quickSearch(word) {
    const input = document.getElementById("searchInput");
    if (!input) return;
    input.value = word;
    searchWord();
    input.scrollIntoView({ behavior: "smooth", block: "center" });
}


function systemInfo() {
    return {
        version: "9.0",
        language: "Turkish",
        location: "Istanbul",
        course: "A1 Survival",
        lessons: a1ThirtyDays.length
    };
}
