/* =================================
   A1 生存課程 Day 21-30
   服務業、行政、職場與社交：從活下去到融入
================================= */

const courseA1_3 = [

{
    day: 21,
    title: "理髮、洗衣與生活服務",
    scene: "💈 Kuaför、Berber、Kuru temizleme",
    grammar: {
        point: "Biraz / Çok kısa　一點點／很短",
        note: "biraz（一點）、çok（很）、sadece（只要）。Sadece uçlarından alın.（只修髮尾。）"
    },
    words: [
        { tr: "kuaför / berber", pron: "ku-a-FÖR / ber-BER", zh: "美髮沙龍／男士理髮", ex: "Kuaförde randevum var.", exZh: "我在美髮店有預約。" },
        { tr: "saç kesimi", pron: "SAÇ ke-si-Mİ", zh: "剪髮", ex: "Saç kesimi ne kadar?", exZh: "剪髮多少錢？" },
        { tr: "kısa / uzun", pron: "kı-SA / u-ZUN", zh: "短／長", ex: "Çok kısa olmasın.", exZh: "不要太短。" },
        { tr: "uçlarından", pron: "uç-la-rın-DAN", zh: "髮尾", ex: "Sadece uçlarından alın.", exZh: "只修髮尾就好。" },
        { tr: "yıkama", pron: "yı-ka-MA", zh: "洗（頭）", ex: "Yıkama dahil mi?", exZh: "含洗髮嗎？" },
        { tr: "kuru temizleme", pron: "ku-RU te-miz-le-ME", zh: "乾洗店", ex: "Bu ceketi kuru temizlemeye vereceğim.", exZh: "這件外套我要送乾洗。" },
        { tr: "leke", pron: "le-KE", zh: "污漬", ex: "Burada bir leke var.", exZh: "這裡有個污漬。" },
        { tr: "ne zaman hazır olur", pron: "NE za-man ha-ZIR o-LUR", zh: "什麼時候好", ex: "Ne zaman hazır olur?", exZh: "什麼時候會好？" },
        { tr: "terzi", pron: "ter-Zİ", zh: "裁縫", ex: "Pantolonu terziye vereceğim.", exZh: "褲子我要送裁縫。" },
        { tr: "beğendim", pron: "be-ğen-DİM", zh: "我很喜歡", ex: "Çok beğendim, teşekkürler.", exZh: "我很喜歡，謝謝。" }
    ],
    dialogue: {
        title: "在美髮店",
        lines: [
            { who: "設計師", tr: "Nasıl keselim?", zh: "要怎麼剪？" },
            { who: "你", tr: "Çok kısa olmasın, sadece uçlarından alın.", zh: "不要太短，只修髮尾。" },
            { who: "設計師", tr: "Yıkama da yapalım mı?", zh: "要不要也洗一下？" },
            { who: "你", tr: "Olur. Toplam ne kadar?", zh: "好。總共多少？" }
        ]
    },
    task: "下次剪頭髮前，先把「不要太短、只修髮尾」練熟，這兩句可以省下很多麻煩。",
    quiz: [
        { q: "「只修髮尾」怎麼說？", options: ["Sadece uçlarından alın", "Çok kısa olsun", "Yıkama dahil"], a: "Sadece uçlarından alın" },
        { q: "kuru temizleme 是？", options: ["乾洗", "理髮", "裁縫"], a: "乾洗" },
        { q: "leke 指的是？", options: ["污漬", "破洞", "顏色"], a: "污漬" }
    ]
},

{
    day: 22,
    title: "網購與外送",
    scene: "📲 Trendyol、Getir、Yemeksepeti",
    grammar: {
        point: "App 上的常見按鈕字",
        note: "Sepete ekle（加入購物車）、Siparişi onayla（確認訂單）、İptal et（取消）。這些字看懂就能自己下單。"
    },
    words: [
        { tr: "sipariş", pron: "si-pa-RİŞ", zh: "訂單", ex: "Siparişim nerede?", exZh: "我的訂單在哪？" },
        { tr: "sepet", pron: "se-PET", zh: "購物車", ex: "Sepete ekle.", exZh: "加入購物車。" },
        { tr: "onayla", pron: "o-nay-LA", zh: "確認", ex: "Siparişi onayla.", exZh: "確認訂單。" },
        { tr: "kapıda ödeme", pron: "ka-pı-DA ö-de-ME", zh: "貨到付款", ex: "Kapıda ödeme var mı?", exZh: "有貨到付款嗎？" },
        { tr: "teslimat süresi", pron: "tes-li-MAT sü-re-Sİ", zh: "配送時間", ex: "Teslimat süresi ne kadar?", exZh: "配送要多久？" },
        { tr: "ücretsiz kargo", pron: "üc-ret-SİZ kar-GO", zh: "免運", ex: "Ücretsiz kargo var.", exZh: "有免運。" },
        { tr: "stokta yok", pron: "stok-TA YOK", zh: "缺貨", ex: "Ürün stokta yok.", exZh: "商品缺貨。" },
        { tr: "değişim", pron: "de-ği-ŞİM", zh: "換貨", ex: "Değişim yapabilir miyim?", exZh: "我可以換貨嗎？" },
        { tr: "kapıcıya bırakın", pron: "ka-pı-cı-YA bı-ra-KIN", zh: "請放給管理員", ex: "Lütfen kapıcıya bırakın.", exZh: "請交給大樓管理員。" },
        { tr: "zile basın", pron: "zi-LE ba-SIN", zh: "請按電鈴", ex: "Lütfen zile basmayın, bebek uyuyor.", exZh: "請不要按電鈴，寶寶在睡覺。" }
    ],
    dialogue: {
        title: "跟外送員通話",
        lines: [
            { who: "外送員", tr: "Merhaba, kapıdayım. Kaçıncı kat?", zh: "你好，我在門口。幾樓？" },
            { who: "你", tr: "Üçüncü kat. Zile basabilirsiniz.", zh: "三樓。您可以按電鈴。" },
            { who: "外送員", tr: "Tamam, kapıda ödeme mi?", zh: "好，是貨到付款嗎？" },
            { who: "你", tr: "Hayır, kartla ödedim.", zh: "不是，我已經刷卡了。" }
        ]
    },
    task: "打開一個外送 App，把 sepet、sipariş、teslimat、iptal 四個字在畫面上找出來。",
    quiz: [
        { q: "sepet 在購物 App 裡是？", options: ["購物車", "訂單", "地址"], a: "購物車" },
        { q: "「缺貨」怎麼說？", options: ["Stokta yok", "Ücretsiz kargo", "Kapıda ödeme"], a: "Stokta yok" },
        { q: "kapıda ödeme 是？", options: ["貨到付款", "免運", "退貨"], a: "貨到付款" }
    ]
},

{
    day: 23,
    title: "居留證與地址登記",
    scene: "🏛 İkamet、Göç İdaresi、Nüfus Müdürlüğü",
    grammar: {
        point: "... için ne gerekiyor?　辦～需要什麼？",
        note: "için 表示「為了」。İkamet için ne gerekiyor?（辦居留需要什麼？）這是辦事最好用的一句。"
    },
    words: [
        { tr: "ikamet izni", pron: "i-ka-MET iz-Nİ", zh: "居留許可", ex: "İkamet izni başvurusu yapacağım.", exZh: "我要申請居留許可。" },
        { tr: "başvuru", pron: "baş-vu-RU", zh: "申請", ex: "Başvurum ne durumda?", exZh: "我的申請進度如何？" },
        { tr: "belge", pron: "bel-GE", zh: "文件", ex: "Hangi belgeler gerekiyor?", exZh: "需要哪些文件？" },
        { tr: "adres kaydı", pron: "ad-RES kay-DI", zh: "地址登記", ex: "Adres kaydı yaptırmak istiyorum.", exZh: "我想辦地址登記。" },
        { tr: "randevu tarihi", pron: "ran-de-VU ta-ri-Hİ", zh: "預約日期", ex: "Randevu tarihim yarın.", exZh: "我的預約在明天。" },
        { tr: "fotokopi", pron: "fo-to-ko-Pİ", zh: "影本", ex: "Pasaport fotokopisi lazım mı?", exZh: "需要護照影本嗎？" },
        { tr: "onay", pron: "o-NAY", zh: "核准", ex: "Onay bekliyorum.", exZh: "我在等核准。" },
        { tr: "eksik", pron: "ek-SİK", zh: "缺少的", ex: "Bir belge eksik.", exZh: "少了一份文件。" },
        { tr: "sıra", pron: "sı-RA", zh: "排隊、順序", ex: "Sıra bende mi?", exZh: "輪到我了嗎？" },
        { tr: "ne kadar sürer", pron: "NE ka-dar sü-RER", zh: "要多久", ex: "İşlem ne kadar sürer?", exZh: "辦理要多久？" }
    ],
    dialogue: {
        title: "在移民局櫃檯",
        lines: [
            { who: "你", tr: "Merhaba, ikamet için ne gerekiyor?", zh: "你好，辦居留需要什麼？" },
            { who: "承辦", tr: "Pasaport, fotoğraf, adres belgesi ve sigorta.", zh: "護照、照片、地址證明和保險。" },
            { who: "你", tr: "Bir belge eksik olursa ne olur?", zh: "如果少一份文件會怎樣？" },
            { who: "承辦", tr: "Yeni randevu almanız gerekir.", zh: "您需要重新預約。" }
        ]
    },
    task: "用 ... için ne gerekiyor? 造三句：居留、地址登記、稅號。",
    quiz: [
        { q: "「辦～需要什麼？」的關鍵字是？", options: ["için ne gerekiyor", "ne kadar", "nerede"], a: "için ne gerekiyor" },
        { q: "eksik 的意思是？", options: ["缺少的", "核准的", "完整的"], a: "缺少的" },
        { q: "adres kaydı 是？", options: ["地址登記", "居留許可", "稅號"], a: "地址登記" }
    ]
},

{
    day: 24,
    title: "文件與表格用語",
    scene: "📄 填表、簽約、看公文",
    grammar: {
        point: "表格欄位怎麼讀",
        note: "Adı Soyadı（姓名）、Doğum Tarihi（出生日期）、Uyruk（國籍）、İmza（簽名）、Tarih（日期）。看懂欄位就能自己填。"
    },
    words: [
        { tr: "adı soyadı", pron: "a-DI so-ya-DI", zh: "姓名", ex: "Adı soyadı buraya.", exZh: "姓名填這裡。" },
        { tr: "uyruk", pron: "uy-RUK", zh: "國籍", ex: "Uyruğunuz nedir?", exZh: "您的國籍是？" },
        { tr: "doğum tarihi", pron: "do-ĞUM ta-ri-Hİ", zh: "出生日期", ex: "Doğum tarihinizi yazın.", exZh: "請寫下出生日期。" },
        { tr: "kimlik numarası", pron: "kim-LİK nu-ma-ra-SI", zh: "身分證號", ex: "Kimlik numaranız var mı?", exZh: "您有身分證號嗎？" },
        { tr: "geçerlilik tarihi", pron: "ge-çer-li-LİK ta-ri-Hİ", zh: "有效期限", ex: "Geçerlilik tarihi geçmiş.", exZh: "已經過期了。" },
        { tr: "kaşe / mühür", pron: "ka-ŞE / mü-HÜR", zh: "印章", ex: "Kaşe gerekiyor mu?", exZh: "需要蓋章嗎？" },
        { tr: "noter", pron: "no-TER", zh: "公證處", ex: "Noterden onaylatmam lazım.", exZh: "我需要去公證處認證。" },
        { tr: "tercüme", pron: "ter-cü-ME", zh: "翻譯", ex: "Yeminli tercüme lazım.", exZh: "需要公證翻譯。" },
        { tr: "kiracı", pron: "ki-ra-CI", zh: "承租人", ex: "Kiracı adı burada.", exZh: "承租人姓名在這裡。" },
        { tr: "yürürlük", pron: "yü-rür-LÜK", zh: "生效", ex: "Sözleşme ne zaman yürürlüğe girer?", exZh: "合約什麼時候生效？" }
    ],
    dialogue: {
        title: "填表格",
        lines: [
            { who: "承辦", tr: "Bu formu doldurun lütfen.", zh: "請填這張表。" },
            { who: "你", tr: "Uyruk kısmına ne yazacağım?", zh: "國籍欄要寫什麼？" },
            { who: "承辦", tr: "Ülkenizin adını yazın.", zh: "寫您國家的名字。" },
            { who: "你", tr: "Anladım. Buraya imza atıyorum, değil mi?", zh: "了解。我在這裡簽名，對吧？" }
        ]
    },
    task: "拿一份手邊的土耳其文表格或合約，圈出 adı soyadı、tarih、imza 三個欄位。",
    quiz: [
        { q: "uyruk 是什麼欄位？", options: ["國籍", "職業", "地址"], a: "國籍" },
        { q: "noter 是？", options: ["公證處", "郵局", "銀行"], a: "公證處" },
        { q: "geçerlilik tarihi 指？", options: ["出生日期", "有效期限", "簽署日期"], a: "有效期限" }
    ]
},

{
    day: 25,
    title: "辦公室與工作",
    scene: "🏢 會議、同事、進度",
    grammar: {
        point: "-abilir misiniz?　可以請您～嗎？",
        note: "職場最有禮貌的請託句型。Kontrol edebilir misiniz?（可以請您確認嗎？）"
    },
    words: [
        { tr: "toplantı", pron: "top-lan-TI", zh: "會議", ex: "Toplantı saat kaçta?", exZh: "會議幾點？" },
        { tr: "dosya", pron: "dos-YA", zh: "檔案", ex: "Dosyayı gönderdim.", exZh: "我把檔案寄出去了。" },
        { tr: "göndermek", pron: "gön-der-MEK", zh: "寄送", ex: "Mail gönderebilir misiniz?", exZh: "可以請您寄封信嗎？" },
        { tr: "kontrol etmek", pron: "kon-TROL et-MEK", zh: "確認、檢查", ex: "Kontrol edebilir misiniz?", exZh: "可以請您確認一下嗎？" },
        { tr: "teslim tarihi", pron: "tes-LİM ta-ri-Hİ", zh: "交件期限", ex: "Teslim tarihi ne zaman?", exZh: "交件期限是什麼時候？" },
        { tr: "müsait misiniz", pron: "mü-sa-İT mi-si-niz", zh: "您有空嗎", ex: "Yarın müsait misiniz?", exZh: "您明天有空嗎？" },
        { tr: "izin", pron: "i-ZİN", zh: "假、許可", ex: "Yarın izinliyim.", exZh: "我明天請假。" },
        { tr: "mesai", pron: "me-sa-İ", zh: "上班時間", ex: "Mesai saat altıda bitiyor.", exZh: "上班時間六點結束。" },
        { tr: "acele", pron: "a-ce-LE", zh: "急件", ex: "Bu acele mi?", exZh: "這個很急嗎？" },
        { tr: "elinize sağlık", pron: "e-li-ni-ZE sağ-LIK", zh: "辛苦了、做得好", ex: "Elinize sağlık, çok güzel olmuş.", exZh: "辛苦了，做得很好。" }
    ],
    dialogue: {
        title: "跟同事確認進度",
        lines: [
            { who: "你", tr: "Merhaba, dosyayı gönderdim. Kontrol edebilir misiniz?", zh: "你好，我把檔案寄了。可以請你確認嗎？" },
            { who: "同事", tr: "Tabii. Teslim tarihi ne zaman?", zh: "當然。交件期限是什麼時候？" },
            { who: "你", tr: "Cuma. Biraz acele.", zh: "星期五。有點急。" },
            { who: "同事", tr: "Tamam, bugün bakarım.", zh: "好，我今天看。" }
        ]
    },
    task: "用 -abilir misiniz? 對同事提出一個請託。",
    quiz: [
        { q: "「可以請您確認嗎？」怎麼說？", options: ["Kontrol edebilir misiniz?", "Kontrol ediyorum", "Kontrol lazım"], a: "Kontrol edebilir misiniz?" },
        { q: "Elinize sağlık 用在？", options: ["稱讚對方的成果或手藝", "道歉", "問路"], a: "稱讚對方的成果或手藝" },
        { q: "teslim tarihi 是？", options: ["交件期限", "上班時間", "會議時間"], a: "交件期限" }
    ]
},

{
    day: 26,
    title: "電話與訊息",
    scene: "📞 打電話、留言、WhatsApp",
    grammar: {
        point: "Alo / Buyurun　喂／請說",
        note: "接電話說 Alo 或 Buyurun。找人用 ... ile görüşebilir miyim?（可以跟～通話嗎？）"
    },
    words: [
        { tr: "Alo", pron: "a-LO", zh: "喂", ex: "Alo, merhaba.", exZh: "喂，你好。" },
        { tr: "Kim arıyor?", pron: "KİM a-rı-yor", zh: "哪位？", ex: "Kim arıyor acaba?", exZh: "請問是哪位？" },
        { tr: "... ile görüşebilir miyim?", pron: "i-LE gö-rü-şe-bi-LİR mi-yim", zh: "可以跟～通話嗎？", ex: "Ahmet Bey ile görüşebilir miyim?", exZh: "可以跟 Ahmet 先生通話嗎？" },
        { tr: "Yanlış numara", pron: "yan-LIŞ nu-ma-RA", zh: "打錯號碼", ex: "Yanlış numara, özür dilerim.", exZh: "打錯了，抱歉。" },
        { tr: "meşgul", pron: "meş-GUL", zh: "忙碌、佔線", ex: "Şu an meşgul.", exZh: "他現在在忙。" },
        { tr: "Sonra arayayım mı?", pron: "son-RA a-ra-ya-YIM mı", zh: "我等等再打好嗎？", ex: "Sonra arayayım mı?", exZh: "我晚點再打好嗎？" },
        { tr: "mesaj atmak", pron: "me-SAJ at-MAK", zh: "傳訊息", ex: "Size mesaj atarım.", exZh: "我傳訊息給您。" },
        { tr: "Sesiniz gelmiyor", pron: "se-si-NİZ gel-mi-YOR", zh: "聽不到您的聲音", ex: "Sesiniz gelmiyor, tekrar eder misiniz?", exZh: "聽不到您的聲音，可以再說一次嗎？" },
        { tr: "Tekrar eder misiniz?", pron: "tek-RAR e-DER mi-si-niz", zh: "可以再說一次嗎？", ex: "Tekrar eder misiniz lütfen?", exZh: "請您再說一次好嗎？" },
        { tr: "İyi günler", pron: "i-Yİ gün-LER", zh: "祝你順心（收尾語）", ex: "Teşekkürler, iyi günler.", exZh: "謝謝，祝你順心。" }
    ],
    dialogue: {
        title: "打電話找人",
        lines: [
            { who: "你", tr: "Alo, merhaba. Ayşe Hanım ile görüşebilir miyim?", zh: "喂，你好。可以跟 Ayşe 女士通話嗎？" },
            { who: "對方", tr: "Şu an meşgul. Kim arıyor?", zh: "她現在在忙。請問哪位？" },
            { who: "你", tr: "Ben Eva. Sonra arayayım mı?", zh: "我是 Eva。我晚點再打好嗎？" },
            { who: "對方", tr: "Olur, yarım saat sonra deneyin.", zh: "可以，半小時後再試。" }
        ]
    },
    task: "把「可以再說一次嗎？」練到不用想就講得出來 — 電話裡最需要它。",
    quiz: [
        { q: "「可以再說一次嗎？」是？", options: ["Tekrar eder misiniz?", "Kim arıyor?", "Yanlış numara"], a: "Tekrar eder misiniz?" },
        { q: "meşgul 的意思是？", options: ["有空", "在忙", "不在"], a: "在忙" },
        { q: "接電話第一句常說？", options: ["Alo", "Görüşürüz", "Buyurun edin"], a: "Alo" }
    ]
},

{
    day: 27,
    title: "作客與禮儀",
    scene: "🎁 被邀請到土耳其人家裡",
    grammar: {
        point: "固定回應句",
        note: "土耳其社交有一套「你講這句、我回那句」的對法：Hoş geldiniz → Hoş bulduk；Afiyet olsun → Elinize sağlık。學會回應比會造句更有用。"
    },
    words: [
        { tr: "Hoş geldiniz", pron: "HOŞ gel-di-NİZ", zh: "歡迎", ex: "Hoş geldiniz, buyurun.", exZh: "歡迎，請進。" },
        { tr: "Hoş bulduk", pron: "HOŞ bul-DUK", zh: "（回應歡迎）謝謝", ex: "Hoş bulduk, teşekkürler.", exZh: "謝謝您的歡迎。" },
        { tr: "Buyurun", pron: "bu-yu-RUN", zh: "請（進／用／說）", ex: "Buyurun, oturun.", exZh: "請，請坐。" },
        { tr: "Ellerinize sağlık", pron: "el-le-ri-ni-ZE sağ-LIK", zh: "您的手藝真好（讚美做菜）", ex: "Ellerinize sağlık, çok lezzetli.", exZh: "您手藝真好，非常好吃。" },
        { tr: "lezzetli", pron: "lez-zet-Lİ", zh: "好吃的", ex: "Çok lezzetli olmuş.", exZh: "非常好吃。" },
        { tr: "Doydum", pron: "doy-DUM", zh: "我飽了", ex: "Doydum, teşekkür ederim.", exZh: "我飽了，謝謝您。" },
        { tr: "Zahmet oldu", pron: "zah-MET ol-DU", zh: "麻煩您了", ex: "Zahmet oldu, çok teşekkürler.", exZh: "麻煩您了，非常感謝。" },
        { tr: "Rica ederim", pron: "ri-CA e-de-RİM", zh: "不客氣", ex: "Rica ederim, ne demek.", exZh: "不客氣，別這麼說。" },
        { tr: "çiçek / tatlı", pron: "çi-ÇEK / tat-LI", zh: "花／甜點（伴手禮）", ex: "Küçük bir tatlı getirdim.", exZh: "我帶了一點甜點。" },
        { tr: "Kolay gelsin", pron: "ko-LAY gel-SİN", zh: "辛苦了（對工作中的人說）", ex: "Kolay gelsin!", exZh: "加油、辛苦了！" }
    ],
    dialogue: {
        title: "到同事家作客",
        lines: [
            { who: "主人", tr: "Hoş geldiniz! Buyurun, buyurun.", zh: "歡迎！請進，請進。" },
            { who: "你", tr: "Hoş bulduk. Küçük bir tatlı getirdim.", zh: "謝謝。我帶了一點甜點。" },
            { who: "主人", tr: "Zahmet ettiniz. Afiyet olsun.", zh: "您太客氣了。請慢用。" },
            { who: "你", tr: "Ellerinize sağlık, çok lezzetli.", zh: "您手藝真好，非常好吃。" }
        ]
    },
    task: "背熟三組對句：Hoş geldiniz→Hoş bulduk、Afiyet olsun→Ellerinize sağlık、Teşekkürler→Rica ederim。",
    quiz: [
        { q: "對方說 Hoş geldiniz，你回？", options: ["Hoş bulduk", "Rica ederim", "Kolay gelsin"], a: "Hoş bulduk" },
        { q: "稱讚主人做的菜，說？", options: ["Ellerinize sağlık", "Kolay gelsin", "Geçmiş olsun"], a: "Ellerinize sağlık" },
        { q: "Kolay gelsin 對誰說？", options: ["正在工作的人", "生病的人", "要出門的人"], a: "正在工作的人" }
    ]
},

{
    day: 28,
    title: "閒聊與自我表達",
    scene: "💬 電梯、茶水間、計程車上",
    grammar: {
        point: "-yorum　我正在／我（習慣）做～",
        note: "çalışıyorum（我工作）、öğreniyorum（我在學）、yaşıyorum（我住）。這三個動詞就能撐起大半閒聊。"
    },
    words: [
        { tr: "Nerelisiniz?", pron: "ne-re-li-si-NİZ", zh: "您是哪裡人？", ex: "Nerelisiniz?", exZh: "您是哪裡人？" },
        { tr: "Tayvanlıyım", pron: "tay-van-lı-YIM", zh: "我是台灣人", ex: "Ben Tayvanlıyım.", exZh: "我是台灣人。" },
        { tr: "yaşıyorum", pron: "ya-şı-yo-RUM", zh: "我住在", ex: "İstanbul'da yaşıyorum.", exZh: "我住在伊斯坦堡。" },
        { tr: "çalışıyorum", pron: "ça-lı-şı-yo-RUM", zh: "我在工作", ex: "Bir ofiste çalışıyorum.", exZh: "我在一間辦公室工作。" },
        { tr: "öğreniyorum", pron: "öğ-re-ni-yo-RUM", zh: "我在學", ex: "Türkçe öğreniyorum.", exZh: "我在學土耳其文。" },
        { tr: "ne kadar zamandır", pron: "NE ka-dar za-man-DIR", zh: "多久了", ex: "Ne kadar zamandır buradasınız?", exZh: "您在這裡多久了？" },
        { tr: "seviyorum", pron: "se-vi-yo-RUM", zh: "我喜歡", ex: "İstanbul'u çok seviyorum.", exZh: "我很喜歡伊斯坦堡。" },
        { tr: "biraz", pron: "bi-RAZ", zh: "一點點", ex: "Türkçem biraz az.", exZh: "我的土耳其文還不太好。" },
        { tr: "Anlamadım", pron: "an-la-ma-DIM", zh: "我沒聽懂", ex: "Pardon, anlamadım.", exZh: "抱歉，我沒聽懂。" },
        { tr: "Ne demek?", pron: "NE de-mek", zh: "什麼意思？", ex: "Bu ne demek?", exZh: "這是什麼意思？" }
    ],
    dialogue: {
        title: "計程車上的閒聊",
        lines: [
            { who: "司機", tr: "Nerelisiniz?", zh: "您是哪裡人？" },
            { who: "你", tr: "Tayvanlıyım. İki yıldır İstanbul'da yaşıyorum.", zh: "我是台灣人。我在伊斯坦堡住兩年了。" },
            { who: "司機", tr: "Türkçeniz güzel!", zh: "您的土耳其文很好！" },
            { who: "你", tr: "Teşekkürler, biraz öğreniyorum.", zh: "謝謝，我在學一點。" }
        ]
    },
    task: "準備一段 30 秒自我介紹：哪裡人、住多久、做什麼、在學土耳其文。",
    quiz: [
        { q: "「我在學土耳其文」怎麼說？", options: ["Türkçe öğreniyorum", "Türkçe biliyorum", "Türkçe seviyorum"], a: "Türkçe öğreniyorum" },
        { q: "沒聽懂的時候說？", options: ["Anlamadım", "Bilmiyorum", "Görüşürüz"], a: "Anlamadım" },
        { q: "Nerelisiniz? 在問？", options: ["您是哪裡人", "您住哪裡", "您要去哪"], a: "您是哪裡人" }
    ]
},

{
    day: 29,
    title: "拒絕、抱怨與客訴",
    scene: "🙅 被推銷、東西有問題、要退錢",
    grammar: {
        point: "禮貌拒絕與抱怨",
        note: "直接說 Hayır 有點硬。用 Teşekkürler, istemiyorum（謝謝，我不需要）比較自然。抱怨用 ... var（有問題）＋ 想要的結果。"
    },
    words: [
        { tr: "İstemiyorum", pron: "is-te-mi-yo-RUM", zh: "我不需要", ex: "Teşekkürler, istemiyorum.", exZh: "謝謝，我不需要。" },
        { tr: "Sadece bakıyorum", pron: "sa-de-CE ba-kı-yo-RUM", zh: "我只是看看", ex: "Sadece bakıyorum, teşekkürler.", exZh: "我只是看看，謝謝。" },
        { tr: "sorun", pron: "so-RUN", zh: "問題", ex: "Bir sorun var.", exZh: "有個問題。" },
        { tr: "şikayet", pron: "şi-ka-YET", zh: "客訴", ex: "Şikayet etmek istiyorum.", exZh: "我想投訴。" },
        { tr: "yanlış", pron: "yan-LIŞ", zh: "錯的", ex: "Hesap yanlış.", exZh: "帳單算錯了。" },
        { tr: "eksik", pron: "ek-SİK", zh: "少了", ex: "Siparişimde bir ürün eksik.", exZh: "我的訂單少了一樣東西。" },
        { tr: "bozuk çıktı", pron: "bo-ZUK çık-TI", zh: "拿到壞的", ex: "Ürün bozuk çıktı.", exZh: "商品是壞的。" },
        { tr: "para iadesi", pron: "pa-RA i-a-de-Sİ", zh: "退款", ex: "Para iadesi istiyorum.", exZh: "我要退款。" },
        { tr: "müdür", pron: "mü-DÜR", zh: "主管", ex: "Müdürle konuşabilir miyim?", exZh: "我可以跟主管談嗎？" },
        { tr: "Maalesef", pron: "ma-a-le-SEF", zh: "很遺憾、抱歉不行", ex: "Maalesef mümkün değil.", exZh: "很抱歉，這不可能。" }
    ],
    dialogue: {
        title: "退貨與退款",
        lines: [
            { who: "你", tr: "Merhaba, bu ürün bozuk çıktı.", zh: "你好，這個商品是壞的。" },
            { who: "店員", tr: "Fişiniz var mı?", zh: "您有收據嗎？" },
            { who: "你", tr: "Evet, buyurun. Para iadesi istiyorum.", zh: "有，請。我要退款。" },
            { who: "店員", tr: "Değişim yapabiliriz ama iade zor.", zh: "我們可以換貨，但退款比較難。" },
            { who: "你", tr: "Müdürle konuşabilir miyim?", zh: "我可以跟主管談嗎？" }
        ]
    },
    task: "練習一次禮貌拒絕：Teşekkürler, istemiyorum. Sadece bakıyorum.",
    quiz: [
        { q: "被店員推銷，想禮貌拒絕？", options: ["Sadece bakıyorum", "Şikayet ediyorum", "Maalesef"], a: "Sadece bakıyorum" },
        { q: "「我要退款」怎麼說？", options: ["Para iadesi istiyorum", "Değişim istiyorum", "Fiş istiyorum"], a: "Para iadesi istiyorum" },
        { q: "Maalesef 的語氣是？", options: ["很遺憾／恐怕不行", "當然可以", "沒問題"], a: "很遺憾／恐怕不行" }
    ]
},

{
    day: 30,
    title: "生存總複習",
    scene: "🎯 一句救命的句子清單",
    grammar: {
        point: "萬用四句",
        note: "土耳其文講不好時，這四句可以撐過大部分場合：Anlamadım（我沒聽懂）、Yavaş konuşur musunuz?（可以說慢一點嗎）、Yazabilir misiniz?（可以寫下來嗎）、Yardım eder misiniz?（可以幫我嗎）。"
    },
    words: [
        { tr: "Anlamadım", pron: "an-la-ma-DIM", zh: "我沒聽懂", ex: "Pardon, anlamadım.", exZh: "抱歉，我沒聽懂。" },
        { tr: "Yavaş konuşur musunuz?", pron: "ya-VAŞ ko-nu-ŞUR mu-su-nuz", zh: "可以說慢一點嗎？", ex: "Lütfen yavaş konuşur musunuz?", exZh: "請您說慢一點好嗎？" },
        { tr: "Yazabilir misiniz?", pron: "ya-za-bi-LİR mi-si-niz", zh: "可以寫下來嗎？", ex: "Buraya yazabilir misiniz?", exZh: "可以寫在這裡嗎？" },
        { tr: "Yardım eder misiniz?", pron: "yar-DIM e-DER mi-si-niz", zh: "可以幫我嗎？", ex: "Yardım eder misiniz lütfen?", exZh: "可以請您幫我嗎？" },
        { tr: "İngilizce biliyor musunuz?", pron: "in-gi-liz-CE bi-li-YOR mu-su-nuz", zh: "您會英文嗎？", ex: "İngilizce biliyor musunuz?", exZh: "您會說英文嗎？" },
        { tr: "Nerede?", pron: "NE-re-de", zh: "在哪裡？", ex: "Tuvalet nerede?", exZh: "廁所在哪裡？" },
        { tr: "Ne kadar?", pron: "NE ka-dar", zh: "多少錢？", ex: "Bu ne kadar?", exZh: "這多少錢？" },
        { tr: "... var mı?", pron: "VAR mı", zh: "有～嗎？", ex: "Boş masa var mı?", exZh: "有空桌嗎？" },
        { tr: "... istiyorum", pron: "is-ti-yo-RUM", zh: "我想要～", ex: "Bir bilet istiyorum.", exZh: "我要一張票。" },
        { tr: "Teşekkür ederim", pron: "te-şek-KÜR e-de-RİM", zh: "謝謝您", ex: "Çok teşekkür ederim.", exZh: "非常謝謝您。" }
    ],
    dialogue: {
        title: "把萬用句串起來",
        lines: [
            { who: "你", tr: "Affedersiniz, yardım eder misiniz?", zh: "不好意思，可以幫我嗎？" },
            { who: "對方", tr: "Tabii, buyurun.", zh: "當然，請說。" },
            { who: "你", tr: "Anlamadım, yavaş konuşur musunuz? Türkçem biraz az.", zh: "我沒聽懂，可以說慢一點嗎？我的土耳其文不太好。" },
            { who: "對方", tr: "Tabii. Yazayım mı?", zh: "當然。要我寫下來嗎？" },
            { who: "你", tr: "Evet lütfen. Çok teşekkür ederim.", zh: "好的麻煩您。非常謝謝您。" }
        ]
    },
    task: "把這十句存成手機桌面截圖。這一頁能解決你在土耳其八成的卡關場合。",
    quiz: [
        { q: "聽不懂時最該說的是？", options: ["Anlamadım", "Teşekkürler", "Görüşürüz"], a: "Anlamadım" },
        { q: "想請對方寫下來？", options: ["Yazabilir misiniz?", "Yavaş konuşur musunuz?", "Nerede?"], a: "Yazabilir misiniz?" },
        { q: "「有～嗎？」的句型是？", options: ["... var mı?", "... istiyorum", "... ne kadar?"], a: "... var mı?" }
    ]
}

];
