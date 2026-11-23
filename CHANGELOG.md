# Turkish Survival System v8.0 — 修復紀錄

## 一、語法錯誤（原本整支檔案無法執行）

| 檔案 | 問題 | 處理 |
|---|---|---|
| `js/survival_dictionary.js` | 檔頭 27 行有兩個沒有變數名、沒有逗號的裸物件 | 移除，保留 19 筆詞條 |
| `js/listening_exam.js` | 第 116 行字串中間換行沒閉合 | 修正 |
| `listening_training.js`（根目錄） | 物件屬性之間缺逗號 | 修好語法後移入 `_archive/` |

## 二、功能修復

- **搜尋完全失效**：`search.js` 需要的 `survivalDictionary` 沒被 `index.html` 載入 → 已載入，並補上欄位防呆與發音按鈕。
- **`showIstanbul()` 不存在**：`istanbul_life.js` 只有資料沒有函式 → 於新增的 `js/ui_bridge.js` 實作，同時整合 `survivalMap`、`istanbulLocations`，附 Google Maps 按鈕。
- **30 天課程只有 10 天**：`app.js` 用 `getDate() % 30`，每月 11–30 號都找不到課。Day 11–30 依 `turkish_database.js` 主題補齊，取餘數改用實際課程長度。
- **`review.js` 用未定義的 `learnedWords`** → 改為依打卡進度自 `turkishDatabase` 取出已學單字，並補上 `#reviewArea`。
- **`ai_teacher.js` 輸出 undefined**：`turkishDatabase` 有 169 個單字沒有 `example` 欄位 → 有才顯示，並改為一次列出多筆。
- **`dialogue.js` 呼叫不存在的 `speak()`** → 改為 `speakTurkish()`，並補上 `#dialogueArea`。
- **`life_ai.js` 缺容器** → 補 `#lifeQuestion` / `#lifeAnswer`。
- **`app.js` 三處重複定義**（`scanTurkish` / `askTeacher` / `openLesson`）原本靠載入順序覆蓋 → 移除死碼，每個函式只留一個擁有者。

## 三、實際測試後才發現的 bug

- **含單引號的土耳其文會打斷按鈕**：`İstanbul'da yaşıyorum.` 塞進 `onclick="speakTurkish('...')"` 造成 SyntaxError。新增 `ttsArg()`（在 `speaking.js`），所有動態發音按鈕都改走它。
- **聽力測驗做完後再按「開始」會崩潰**：`currentListening` 停在陣列長度 → 加入重設。
- **文法填空最後一題按確認會崩潰**：`quizIndex` 無上限 → 加入結束畫面與重來。
- **情境生存包永遠對不上**：`istanbul_life_ai.js` 用 `title.substring(2,4)` 比對，emoji 佔 2 個 UTF-16 字元，切出來是「 銀」→ 改為索引選擇，下拉選單依資料自動生成。

## 四、PWA

- `service-worker.js` 快取清單寫成 `./app.js` 等根目錄路徑（實際在 `js/`），`cache.addAll` 只要一個 404 就整批 reject，**離線功能從來沒有生效過**。改為逐檔容錯快取（80 個檔）、加上 `activate` 清除舊快取、`skipWaiting` 與 `clients.claim()`。
- `pwa/manifest.json` 指向不存在的 `icons/icon-192.png`（實際檔名 `192.png`，且是 320×213）→ 產生真正的 192×192、512×512 與 maskable 圖示，路徑同步修正，補上 `scope`。
- `pwa/service-worker.js`（沒被註冊的第二份）移入 `_archive/`。

## 五、孤兒檔

原本 91 個檔案只有 20 個被載入。現在 **73 支 js 全部接上畫面**，新增功能卡：

購物字彙、交通字彙、料理查詢、社交用語、文法查詢／規則速查／填空測驗、動詞變化表＋字尾分析＋測驗、公文解讀、包裝文字查詢、折扣計算機、單字閃卡、A1 聽力測驗、每日跟讀、生活短句庫（自我介紹／鄰居／餐廳／點餐／結帳／飲食禁忌／公家機關／辦公室／Istanbulkart）、辦事文件清單、課程速覽、我的常用場景。另加 sticky 快速導覽列。

### 移入 `_archive/` 的重複或失效檔

`indexold.html`、`voice.js`(1 byte)、`pwa/service-worker.js`、`js/speech_engine.js`（`speakTurkish` 與 speaking.js 衝突）、`js/verb_training.js`（`verbs` 與 grammar.js 衝突）、`js/conjugation_engine.js`（與 verb_analyzer 重複）、`js/listening_quiz.js`（硬寫死答案）、`js/a1_curriculum.js`（與 a1_course 重複）、`js/navigation.js`（指向不存在的分頁）、`listening_training.js`（根目錄）、`icons/192.png`。

另外 `js/listening_training.js` 的 `listeningDatabase` 與 `js/listening_database.js` 同名（同時載入會 SyntaxError），已改名為 `listeningShadowing`，`daily_audio.js` 同步改用並改容器為 `#shadowBox` / `#shadowAnswer`。

## 六、測試結果

以 jsdom 實際載入頁面、逐一執行全部 108 個 `onclick`：

- 執行錯誤：0
- 畫面出現 `undefined`：0 次
- 35 個輸出區塊全部有正確內容
- 全專案 js `node --check`：全數通過
- `index.html` 與 service worker 參照的檔案：全部存在

---

# v8.1 — 真正的學習紀錄

## 問題

v8.0 之前只在 localStorage 存兩個值：`studyDays`（打卡計數）與 `lastCheck`（最後打卡日）。測驗分數、學過哪幾課、答錯哪些字全部沒有留下來，關掉就沒了。

## 新增 `js/progress_store.js`

唯一的資料層，所有模組透過 `TS.*` 存取，集中存在 `localStorage["turkishProgress"]`：

```
{ v, createdAt, days{}, checkins[], quiz{}, words{}, favorites[] }
```

- `days`：完成的課程日與完成日期
- `checkins`：打卡日期陣列（可算連續天數）
- `quiz`：各測驗的最佳分數、最近分數、作答次數、最近日期
- `words`：每個單字的答對／答錯次數
- `favorites`：收藏的動詞

首次載入會自動把舊的 `studyDays` / `lastCheck` 搬進新格式，不會歸零。

## 現在會被記住的東西

| 項目 | 說明 |
|---|---|
| 課程完成 | 每課底部「📗 我學完這一課」，課程列表顯示 ✅ 並轉綠，可再點取消 |
| 連續打卡 | 打卡後顯示連續天數，斷天會重算 |
| 測驗成績 | A1 測驗、文法填空、動詞測驗、聽力測驗各自記最佳分數與作答次數 |
| 答錯的字 | 四種測驗答錯的字自動收集，「待加強單字」卡可列出對錯次數 |
| 複習池 | 「單字複習」改為優先抽答錯過的字，不再純隨機 |
| 收藏動詞 | 修好 `favorite_verbs.js` 只寫不讀、下次收藏會洗掉舊資料的 bug |

## 匯出 / 匯入

新增「💾 學習紀錄備份」卡片：

- **匯出**：下載 `turkish-progress-YYYY-MM-DD.json`。沒有 `createObjectURL` 的瀏覽器會退回 data URI。
- **匯入**：採**合併**而非覆蓋——課程取聯集、打卡去重、測驗取較高分、單字次數相加。所以兩台裝置各自練的紀錄可以合起來。
- **清除**：附二次確認。

## 順帶修正

- 四支測驗檔改寫，都補上結束畫面與分數，並修好越界崩潰
- `review.js` 的「已學單字」改為依實際完成的課程日判斷，不再用打卡次數硬套
- service worker 版本升為 `turkish-survival-v8-1`（快取 81 個檔）

## 測試

以 jsdom 跑完整情境：打卡→重複打卡→完成課程→四種測驗全錯再全對→待加強清單→複習→匯出→清除→匯入還原→餵爛資料→舊版資料搬家→全站 110 個 onclick 回歸。

結果：錯誤 0、畫面 `undefined` 0 次、匯入還原後課程數／最佳分數／打卡數皆正確、舊版 `studyDays=7` 正確搬成 7 天打卡。

---

# v9.0 — 全新 30 天課程內容

## 問題

舊資料撐不起練習：`turkish_database.js` 有 240 個單字但其中 169 個沒有例句，`survival_dictionary` 只有 19 筆，A1 測驗只有 3 題、聽力 5 題、文法填空 3 題。做兩輪就沒東西可練了。

## 新增課程檔

`js/course_a1_part1.js`（Day 1-10）、`part2`（Day 11-20）、`part3`（Day 21-30），
以 `js/course_loader.js` 合併為單一資料來源 `courseA1`。

每一天包含：情境說明、一個文法點與解釋、10 個單字（土文／音節重音／中文／例句／例句翻譯）、
一段 4-5 句的情境對話、一個當天可執行的任務、3 題測驗。

### 課綱

| Day | 主題 | Day | 主題 |
|---|---|---|---|
| 1 | 打招呼與自我介紹 | 16 | 郵局與包裹 |
| 2 | 數字與價格 | 17 | 藥局 |
| 3 | 咖啡店點餐 | 18 | 看醫生 |
| 4 | 超市採買 | 19 | 緊急狀況 |
| 5 | 傳統市場與秤重 | 20 | 天氣與穿著 |
| 6 | 餐廳用餐 | 21 | 理髮、洗衣與生活服務 |
| 7 | 計程車與叫車 | 22 | 網購與外送 |
| 8 | 地鐵、公車與 Istanbulkart | 23 | 居留證與地址登記 |
| 9 | 問路與方向 | 24 | 文件與表格用語 |
| 10 | 時間、日期與約時間 | 25 | 辦公室與工作 |
| 11 | 看房與租屋 | 26 | 電話與訊息 |
| 12 | 房屋問題與報修 | 27 | 作客與禮儀 |
| 13 | 帳單與繳費 | 28 | 閒聊與自我表達 |
| 14 | 銀行 | 29 | 拒絕、抱怨與客訴 |
| 15 | 手機與網路 | 30 | 生存總複習 |

## 一份內容餵所有功能

`course_loader.js` 把 `courseA1` 自動轉成各模組原本期待的格式，不必重複維護：

| 產出 | 數量 | 餵給 |
|---|---|---|
| `a1ThirtyDays` | 30 天 | 課程列表與今日任務 |
| `turkishDatabase` | 30 天 × 10 字 | AI 老師、單字複習 |
| `survivalDictionary` | **300 筆** | 生活字典搜尋 |
| `listeningDatabase` | 30 題 | 聽力測驗（選項自動從其他課抽誘答） |
| `listeningShadowing` | **128 句** | 每日跟讀 |
| `dialogues` | 30 組 | 情境對話卡 |
| `grammarDatabase` | 30 條 | 文法查詢 |
| `A1QuestionBank` | **90 題** | A1 測驗，每次隨機抽 10 題 |

舊的 `turkish_database.js`、`survival_dictionary.js`、`a1_30days.js`、`listening_database.js`、`listening_training.js`、`dialogue_database.js`、`grammar_database.js` 已移入 `_archive/`（宣告同名會撞）。

## 課程頁改寫

`renderLesson(day)` 取代原本只列單字的版本，一頁完整呈現：
情境 → 文法點與說明 → 10 個單字（每字與每句例句都有獨立發音鈕）→ 情境對話（單句朗讀＋整段朗讀）→ 今日任務 → 完成打勾。

## 其他

- 文法查詢改為同時比對標題、規則說明與課程名稱，並可列出多筆、直接跳到該課
- 課程總覽改為 30 天清單，顯示總字數與完成狀態
- 音標改用音節切分並標重音（`mer-ha-BA`），比中文近似音準確；土耳其文重音多半在最後一個音節
- 資料結構明確掛上 `window`，方便除錯
- service worker 升為 `turkish-survival-v9-0`

## 測試

- 完整跑完 10 題 A1 測驗與 30 題聽力測驗，成績正確寫入紀錄
- Day 17 課程頁確認含文法、單字、對話、任務
- 字典中文（押金）與土文（ağrı）雙向搜尋正常
- AI 老師查「漏水」正確回傳 su kaçağı 與例句
- 全站 164 個 onclick 回歸：錯誤 0、畫面 `undefined` 0 次

---

# v9.1 — 修正整段朗讀的順序

## 問題

課程頁的「整段朗讀」沒有按對話順序念，會跳句或亂序。

原因在 `playLesson`：它用迴圈把整段對話的每一句**一次全部丟進語音佇列**，不等上一句結束。
`speechSynthesis.cancel()` 是非同步的，緊接著連續 `speak()` 時，若語音引擎尚未就緒，
Chrome 會丟掉部分佇列或順序錯亂——這是 Chrome 長期存在的行為，手機上更明顯。

## 修正

改為 `onend` 串接，一句念完才排下一句：

- 每句之間留 450ms 停頓，聽起來像兩個人在對話
- `cancel()` 後延遲 120ms 才開始，避免第一句被吃掉
- 明確挑選 `tr-TR` 語音；部分瀏覽器第一次 `getVoices()` 回傳空陣列，改在 `onvoiceschanged` 後再取
- 單句 `onerror` 時跳過該句繼續，不讓整段卡死
- 語速 0.8 → 0.85

## 順帶加上

- 正在念的那一句會高亮（深色模式另有配色）
- 播放鍵變成切換鍵：播放中按下即停止，按鈕文字同步改為「⏹ 停止朗讀」
- 切換課程時自動停止前一課的朗讀，不會兩課疊在一起念
- 播放狀態掛上 `window.getLessonPlayer()` 方便除錯

## 測試

以假的語音引擎模擬逐句回呼，驗證 Day 3 五句對話的實際播放順序與原文完全一致；
停止鍵、按鈕文字切換、高亮清除、`tr-TR` 語音挑選均正常。
