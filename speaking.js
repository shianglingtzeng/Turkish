/* =================================
   Turkish Survival System
   Speaking Practice
================================= */

function startSpeaking(text) {

    const result =
        document.getElementById("speakingResult");

    if (!result) return;

    result.innerHTML = `
        <p>請朗讀：</p>

        <h2>🇹🇷 ${escapeSpeechText(text)}</h2>

        <button
            type="button"
            onclick='listenUser(${JSON.stringify(text)})'>

            🎤 開始錄音

        </button>
    `;
}


/* =================================
   相容舊版
================================= */

function practiceSpeaking(text) {

    startSpeaking(text);

}


/* =================================
   語音辨識
================================= */

function listenUser(target) {

    const result =
        document.getElementById(
            "speakingResult"
        );

    if (!result) return;


    const SpeechRecognition =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition;


    if (!SpeechRecognition) {

        result.innerHTML += `
            <p>
                ⚠️ 此瀏覽器不支援語音辨識
            </p>
        `;

        return;
    }


    const recognition =
        new SpeechRecognition();


    recognition.lang = "tr-TR";

    recognition.interimResults = false;

    recognition.maxAlternatives = 1;


    result.innerHTML += `
        <p>
            🎤 正在聽……
        </p>

        <p>
            請說：
            <strong>
                ${escapeSpeechText(target)}
            </strong>
        </p>
    `;


    recognition.onresult =
        function(event) {

            const answer =
                event.results[0][0]
                .transcript
                .trim();


            compareSpeech(
                target,
                answer
            );

        };


    recognition.onerror =
        function(event) {

            result.innerHTML += `
                <p>
                    ⚠️ 語音辨識失敗：
                    ${escapeSpeechText(
                        event.error
                    )}
                </p>
            `;

        };


    recognition.start();

}


/* =================================
   發音比較
================================= */

function compareSpeech(
    target,
    answer
) {

    const result =
        document.getElementById(
            "speakingResult"
        );


    if (!result) return;


    const normalize =
        text => String(text)
            .toLowerCase()
            .trim()
            .replace(/[.,!?;:]/g, "")
            .replace(/\s+/g, " ");


    const correct =
        normalize(target) ===
        normalize(answer);


    result.innerHTML += `

        <hr>

        <p>
            你說：
            <strong>
                ${escapeSpeechText(answer)}
            </strong>
        </p>

        <p>
            ${
                correct
                ? "🎉 發音正確！"
                : "🔁 再試一次"
            }
        </p>

        ${
            correct
            ? ""
            : `
                <p>
                    正確答案：
                    <strong>
                        ${escapeSpeechText(target)}
                    </strong>
                </p>
            `
        }

    `;

}


/* =================================
   ★ A1 課程單字發音
================================= */

function openLesson(day) {

    const lesson =
        a1ThirtyDays.find(
            x => x.day === day
        );


    const area =
        document.getElementById(
            "lessonArea"
        );


    if (!lesson || !area) return;


    const wordHtml =
        lesson.words

        ? lesson.words.map(word => {

            const parts =
                String(word).split(" ");


            const turkish =
                parts.shift();


            const chinese =
                parts.join(" ");


            return `

                <div class="lesson-word">

                    <span class="word-text">

                        🇹🇷

                        <strong>
                            ${escapeSpeechText(
                                turkish
                            )}
                        </strong>

                        <span class="word-chinese">

                            ${escapeSpeechText(
                                chinese
                            )}

                        </span>

                    </span>


                    <button
                        type="button"
                        class="pronunciation-button"

                        onclick='speakTurkish(${JSON.stringify(turkish)})'

                        title="播放土耳其文發音">

                        🔊

                    </button>

                </div>

            `;

        }).join("")

        : "";


    area.innerHTML = `

        <h2>
            Day ${lesson.day}
        </h2>


        <h3>
            ${escapeSpeechText(
                lesson.title
            )}
        </h3>


        <h4>
            單字：
        </h4>


        <div class="lesson-words">

            ${wordHtml}

        </div>


        <h4>
            今日任務：
        </h4>


        <p>
            ${escapeSpeechText(
                lesson.task
            )}
        </p>

    `;

}


/* =================================
   ★ 土耳其文自動朗讀
================================= */

function speakTurkish(text) {

    if (
        !("speechSynthesis" in window)
    ) {

        alert(
            "⚠️ 此瀏覽器不支援語音朗讀"
        );

        return;
    }


    // 停止上一個發音
    window.speechSynthesis.cancel();


    const utterance =
        new SpeechSynthesisUtterance(
            text
        );


    // 土耳其語
    utterance.lang = "tr-TR";


    // A1 學習速度
    utterance.rate = 0.78;


    utterance.pitch = 1;


    window.speechSynthesis.speak(
        utterance
    );

}


/* =================================
   HTML 安全處理
================================= */

function escapeSpeechText(text) {

    return String(text)

        .replace(
            /&/g,
            "&amp;"
        )

        .replace(
            /</g,
            "&lt;"
        )

        .replace(
            />/g,
            "&gt;"
        )

        .replace(
            /"/g,
            "&quot;"
        )

        .replace(
            /'/g,
            "&#039;"
        );

}


/* =================================
   ★ v8.0 追加
   把土耳其文塞進 onclick="speakTurkish('...')" 時，
   İstanbul'da / Ne kadar' 這類含單引號的字會把 HTML 屬性打斷，
   造成整顆按鈕 SyntaxError。所有動態產生的發音按鈕都要經過這裡。
================================= */

function ttsArg(text) {
    return String(text == null ? "" : text)
        .replace(/\\/g, "\\\\")
        .replace(/'/g, "\\'")
        .replace(/"/g, "&quot;")
        .replace(/\n/g, " ");
}
