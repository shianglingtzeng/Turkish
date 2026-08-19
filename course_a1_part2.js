/* =================================
   A1 生存課程 Day 11-20
   居住、行政與健康：外籍人士最容易卡住的區塊
================================= */

const courseA1_2 = [

{
    day: 11,
    title: "看房與租屋",
    scene: "🏠 找房子、看合約",
    grammar: {
        point: "-lı / -li　有～的",
        note: "eşyalı（有家具的）、asansörlü（有電梯的）、balkonlu（有陽台的）。母音和諧決定用 -lı/-li/-lu/-lü。"
    },
    words: [
        { tr: "kiralık", pron: "ki-ra-LIK", zh: "出租的", ex: "Kiralık daire arıyorum.", exZh: "我在找出租的公寓。" },
        { tr: "daire", pron: "da-i-RE", zh: "公寓單位", ex: "Bu daire kaç oda?", exZh: "這間公寓幾房？" },
        { tr: "kira", pron: "ki-RA", zh: "租金", ex: "Kira ne kadar?", exZh: "租金多少？" },
        { tr: "depozito", pron: "de-po-zi-TO", zh: "押金", ex: "Depozito kaç kira?", exZh: "押金是幾個月租金？" },
        { tr: "aidat", pron: "ai-DAT", zh: "大樓管理費", ex: "Aidat dahil mi?", exZh: "含管理費嗎？" },
        { tr: "eşyalı", pron: "eş-ya-LI", zh: "附家具的", ex: "Eşyalı bir daire istiyorum.", exZh: "我想要附家具的公寓。" },
        { tr: "asansör", pron: "a-san-SÖR", zh: "電梯", ex: "Binada asansör var mı?", exZh: "大樓有電梯嗎？" },
        { tr: "sözleşme", pron: "söz-leş-ME", zh: "合約", ex: "Sözleşmeyi okuyabilir miyim?", exZh: "我可以看一下合約嗎？" },
        { tr: "ev sahibi", pron: "EV sa-hi-Bİ", zh: "房東", ex: "Ev sahibiyle konuşmak istiyorum.", exZh: "我想跟房東談。" },
        { tr: "dahil / hariç", pron: "da-HİL / ha-RİÇ", zh: "包含／不含", ex: "Faturalar hariç.", exZh: "不含帳單。" }
    ],
    dialogue: {
        title: "看房",
        lines: [
            { who: "仲介", tr: "Bu daire iki artı bir, eşyalı.", zh: "這間是兩房一廳，附家具。" },
            { who: "你", tr: "Kira ne kadar? Aidat dahil mi?", zh: "租金多少？含管理費嗎？" },
            { who: "仲介", tr: "Kira otuz bin, aidat hariç.", zh: "租金三萬，不含管理費。" },
            { who: "你", tr: "Depozito kaç kira? Sözleşmeyi görebilir miyim?", zh: "押金幾個月？我可以看合約嗎？" }
        ]
    },
    task: "把你目前住處的條件用土耳其文描述一次：幾房、有沒有電梯、管理費多少。",
    quiz: [
        { q: "aidat 是什麼？", options: ["押金", "大樓管理費", "租金"], a: "大樓管理費" },
        { q: "「附家具的」怎麼說？", options: ["eşyalı", "kiralık", "dahil"], a: "eşyalı" },
        { q: "hariç 的意思是？", options: ["包含", "不含", "免費"], a: "不含" }
    ]
},

{
    day: 12,
    title: "房屋問題與報修",
    scene: "🔧 漏水、停電、電梯壞了",
    grammar: {
        point: "... bozuk / ... çalışmıyor　～壞了／～不能用",
        note: "bozuk 是形容詞（壞的），çalışmıyor 是動詞否定（沒在運作）。兩個都很常用。"
    },
    words: [
        { tr: "bozuk", pron: "bo-ZUK", zh: "壞掉的", ex: "Asansör bozuk.", exZh: "電梯壞了。" },
        { tr: "çalışmıyor", pron: "ça-lış-mı-YOR", zh: "不能運作", ex: "Klima çalışmıyor.", exZh: "冷氣不能運作。" },
        { tr: "su kaçağı", pron: "SU ka-ça-ĞI", zh: "漏水", ex: "Banyoda su kaçağı var.", exZh: "浴室有漏水。" },
        { tr: "tıkandı", pron: "tı-kan-DI", zh: "堵住了", ex: "Lavabo tıkandı.", exZh: "洗手台堵住了。" },
        { tr: "elektrik kesildi", pron: "e-lek-TRİK ke-sil-Dİ", zh: "停電了", ex: "Elektrik kesildi.", exZh: "停電了。" },
        { tr: "su kesildi", pron: "SU ke-sil-Dİ", zh: "停水了", ex: "Sabahtan beri su kesildi.", exZh: "從早上就停水了。" },
        { tr: "kapıcı", pron: "ka-pı-CI", zh: "大樓管理員", ex: "Kapıcıyı çağırabilir misiniz?", exZh: "可以幫我叫管理員嗎？" },
        { tr: "usta", pron: "us-TA", zh: "師傅、技師", ex: "Usta ne zaman gelir?", exZh: "師傅什麼時候來？" },
        { tr: "tamir", pron: "ta-MİR", zh: "修理", ex: "Tamir gerekiyor.", exZh: "需要修理。" },
        { tr: "acil", pron: "a-CİL", zh: "緊急的", ex: "Bu acil, lütfen.", exZh: "這很緊急，拜託。" }
    ],
    dialogue: {
        title: "打給房東",
        lines: [
            { who: "你", tr: "Merhaba, ben üçüncü kattan Eva.", zh: "你好，我是三樓的 Eva。" },
            { who: "房東", tr: "Buyurun, bir sorun mu var?", zh: "請說，有什麼問題嗎？" },
            { who: "你", tr: "Banyoda su kaçağı var, acil. Usta gönderebilir misiniz?", zh: "浴室漏水，很緊急。可以派師傅來嗎？" },
            { who: "房東", tr: "Tamam, yarın sabah usta gelir.", zh: "好，明天早上師傅會來。" }
        ]
    },
    task: "把家裡目前有點小問題的東西（水龍頭、燈、冷氣）用「... bozuk」造一句。",
    quiz: [
        { q: "「停電了」怎麼說？", options: ["Su kesildi", "Elektrik kesildi", "Lavabo tıkandı"], a: "Elektrik kesildi" },
        { q: "kapıcı 是誰？", options: ["房東", "大樓管理員", "水電師傅"], a: "大樓管理員" },
        { q: "冷氣不能運作，說？", options: ["Klima çalışmıyor", "Klima acil", "Klima dahil"], a: "Klima çalışmıyor" }
    ]
},

{
    day: 13,
    title: "帳單與繳費",
    scene: "💡 電、水、瓦斯、網路",
    grammar: {
        point: "Nasıl öderim?　我要怎麼付？",
        note: "-erim/-arım 是「我做～」的簡單現在式。Nasıl öderim? 我怎麼付？Nereden alırım? 我從哪拿？"
    },
    words: [
        { tr: "fatura", pron: "fa-tu-RA", zh: "帳單", ex: "Elektrik faturası geldi.", exZh: "電費帳單來了。" },
        { tr: "elektrik", pron: "e-lek-TRİK", zh: "電", ex: "Elektrik faturası çok yüksek.", exZh: "電費很高。" },
        { tr: "doğalgaz", pron: "do-ğal-GAZ", zh: "天然氣", ex: "Doğalgaz faturasını ödedim.", exZh: "我付了瓦斯費。" },
        { tr: "internet", pron: "in-ter-NET", zh: "網路", ex: "İnternet çok yavaş.", exZh: "網路很慢。" },
        { tr: "ödemek", pron: "ö-de-MEK", zh: "付款", ex: "Nasıl ödeyebilirim?", exZh: "我可以怎麼付？" },
        { tr: "son ödeme tarihi", pron: "SON ö-de-ME ta-ri-Hİ", zh: "最後繳款日", ex: "Son ödeme tarihi ne zaman?", exZh: "最後繳款日是什麼時候？" },
        { tr: "gecikme", pron: "ge-cik-ME", zh: "逾期", ex: "Gecikme cezası var mı?", exZh: "有逾期罰款嗎？" },
        { tr: "abonelik", pron: "a-bo-ne-LİK", zh: "訂閱、開戶（水電）", ex: "Abonelik başlatmak istiyorum.", exZh: "我想申辦開通。" },
        { tr: "sayaç", pron: "sa-YAÇ", zh: "電錶／水錶", ex: "Sayaç nerede?", exZh: "電錶在哪裡？" },
        { tr: "otomatik ödeme", pron: "o-to-ma-TİK ö-de-ME", zh: "自動扣款", ex: "Otomatik ödeme talimatı verdim.", exZh: "我設定了自動扣款。" }
    ],
    dialogue: {
        title: "在繳費櫃檯",
        lines: [
            { who: "你", tr: "Merhaba, elektrik faturamı ödemek istiyorum.", zh: "你好，我想繳電費。" },
            { who: "櫃檯", tr: "Abone numaranız var mı?", zh: "您有用戶編號嗎？" },
            { who: "你", tr: "Evet, burada. Son ödeme tarihi ne zaman?", zh: "有，在這裡。最後繳款日是什麼時候？" },
            { who: "櫃檯", tr: "Ayın yirmisi. Kartla ödeyebilirsiniz.", zh: "這個月二十號。您可以刷卡。" }
        ]
    },
    task: "找出一張真實帳單，指出 fatura、son ödeme tarihi、abone no 三個欄位。",
    quiz: [
        { q: "fatura 是什麼？", options: ["帳單", "收據", "合約"], a: "帳單" },
        { q: "「最後繳款日」是？", options: ["son kullanma tarihi", "son ödeme tarihi", "gecikme"], a: "son ödeme tarihi" },
        { q: "doğalgaz 指的是？", options: ["電", "天然氣", "水"], a: "天然氣" }
    ]
},

{
    day: 14,
    title: "銀行",
    scene: "🏦 開戶、提款、轉帳",
    grammar: {
        point: "... istiyorum / ... lazım　我想要～／我需要～",
        note: "lazım 放句尾表示「需要」：Pasaport lazım mı?（需要護照嗎？）"
    },
    words: [
        { tr: "banka", pron: "ban-KA", zh: "銀行", ex: "En yakın banka nerede?", exZh: "最近的銀行在哪？" },
        { tr: "hesap açmak", pron: "he-SAP aç-MAK", zh: "開戶", ex: "Hesap açmak istiyorum.", exZh: "我想開戶。" },
        { tr: "vergi numarası", pron: "ver-Gİ nu-ma-ra-SI", zh: "稅號（外國人必備）", ex: "Vergi numaram var.", exZh: "我有稅號。" },
        { tr: "para çekmek", pron: "pa-RA çek-MEK", zh: "提款", ex: "Para çekmek istiyorum.", exZh: "我想提款。" },
        { tr: "havale / EFT", pron: "ha-va-LE", zh: "轉帳", ex: "Havale yapmak istiyorum.", exZh: "我想轉帳。" },
        { tr: "IBAN", pron: "i-BAN", zh: "帳號（IBAN）", ex: "IBAN numaranız nedir?", exZh: "您的 IBAN 是多少？" },
        { tr: "şifre", pron: "şif-RE", zh: "密碼", ex: "Şifremi unuttum.", exZh: "我忘記密碼了。" },
        { tr: "kredi kartı", pron: "kre-Dİ kar-TI", zh: "信用卡", ex: "Kredi kartı başvurusu yapmak istiyorum.", exZh: "我想申請信用卡。" },
        { tr: "sıra numarası", pron: "sı-RA nu-ma-ra-SI", zh: "號碼牌", ex: "Sıra numarası aldım.", exZh: "我拿了號碼牌。" },
        { tr: "imza", pron: "im-ZA", zh: "簽名", ex: "Buraya imza atın lütfen.", exZh: "請在這裡簽名。" }
    ],
    dialogue: {
        title: "銀行開戶",
        lines: [
            { who: "行員", tr: "Buyurun, nasıl yardımcı olabilirim?", zh: "請說，我能怎麼協助您？" },
            { who: "你", tr: "Hesap açmak istiyorum. Hangi belgeler lazım?", zh: "我想開戶。需要哪些文件？" },
            { who: "行員", tr: "Pasaport, vergi numarası ve adres belgesi.", zh: "護照、稅號和地址證明。" },
            { who: "你", tr: "Tamam, hepsi yanımda. Buraya imza mı atıyorum?", zh: "好，我都帶了。我在這裡簽名嗎？" }
        ]
    },
    task: "用土耳其文列出開戶要帶的三樣文件。",
    quiz: [
        { q: "「我想開戶」怎麼說？", options: ["Hesap açmak istiyorum", "Para çekmek istiyorum", "Havale yapmak istiyorum"], a: "Hesap açmak istiyorum" },
        { q: "外國人辦事最常被要求的 vergi numarası 是？", options: ["護照號碼", "稅號", "帳號"], a: "稅號" },
        { q: "imza 是什麼？", options: ["簽名", "密碼", "號碼牌"], a: "簽名" }
    ]
},

{
    day: 15,
    title: "手機與網路",
    scene: "📱 辦門號、加值、修網路",
    grammar: {
        point: "Çekmiyor / Bitti　沒訊號／用完了",
        note: "Çekmiyor 是手機沒訊號的固定說法。Bitti 表示「結束、用完」：Paketim bitti.（我的方案用完了。）"
    },
    words: [
        { tr: "hat", pron: "HAT", zh: "門號", ex: "Yeni hat almak istiyorum.", exZh: "我想辦新門號。" },
        { tr: "numara", pron: "nu-ma-RA", zh: "號碼", ex: "Numaranızı alabilir miyim?", exZh: "可以給我您的號碼嗎？" },
        { tr: "paket", pron: "pa-KET", zh: "資費方案", ex: "Hangi paket daha uygun?", exZh: "哪個方案比較划算？" },
        { tr: "kontör / TL yükleme", pron: "kon-TÖR", zh: "儲值", ex: "Kontör yüklemek istiyorum.", exZh: "我想儲值。" },
        { tr: "çekmiyor", pron: "çek-mi-YOR", zh: "沒訊號", ex: "Telefonum çekmiyor.", exZh: "我的手機沒訊號。" },
        { tr: "yavaş", pron: "ya-VAŞ", zh: "慢的", ex: "İnternet çok yavaş.", exZh: "網路很慢。" },
        { tr: "wifi şifresi", pron: "vay-FAY şif-re-Sİ", zh: "wifi 密碼", ex: "Wifi şifresi nedir?", exZh: "wifi 密碼是什麼？" },
        { tr: "modem", pron: "mo-DEM", zh: "數據機", ex: "Modem çalışmıyor.", exZh: "數據機不能用。" },
        { tr: "arıza kaydı", pron: "a-rı-ZA kay-DI", zh: "報修紀錄", ex: "Arıza kaydı açmak istiyorum.", exZh: "我想開一張報修單。" },
        { tr: "iptal etmek", pron: "ip-TAL et-MEK", zh: "取消", ex: "Aboneliği iptal etmek istiyorum.", exZh: "我想取消訂閱。" }
    ],
    dialogue: {
        title: "在電信門市",
        lines: [
            { who: "店員", tr: "Buyurun, nasıl yardımcı olabilirim?", zh: "請說，需要什麼協助？" },
            { who: "你", tr: "İnternetim çok yavaş ve bazen hiç çekmiyor.", zh: "我的網路很慢，有時候完全沒訊號。" },
            { who: "店員", tr: "Arıza kaydı açalım. Numaranızı alabilir miyim?", zh: "我們開一張報修單。可以給我您的號碼嗎？" },
            { who: "你", tr: "Tabii. Ne kadar sürer?", zh: "當然。要多久？" }
        ]
    },
    task: "用土耳其文說一次「我的網路很慢，我想報修」。",
    quiz: [
        { q: "手機沒訊號，說？", options: ["Çekmiyor", "Bitti", "Yavaş"], a: "Çekmiyor" },
        { q: "「取消」怎麼說？", options: ["iptal etmek", "yüklemek", "açmak"], a: "iptal etmek" },
        { q: "arıza kaydı 是？", options: ["報修單", "帳單", "合約"], a: "報修單" }
    ]
},

{
    day: 16,
    title: "郵局與包裹",
    scene: "📦 PTT、kargo、收退貨",
    grammar: {
        point: "被動與完成：geldi / gelmedi　到了／沒到",
        note: "-di 是過去式。Kargom geldi mi?（我的包裹到了嗎？）否定加 -me：gelmedi（沒到）。"
    },
    words: [
        { tr: "kargo", pron: "kar-GO", zh: "宅配、包裹", ex: "Kargom geldi mi?", exZh: "我的包裹到了嗎？" },
        { tr: "PTT", pron: "pe-te-TE", zh: "土耳其郵局", ex: "PTT saat kaçta kapanıyor?", exZh: "郵局幾點關門？" },
        { tr: "gönderi", pron: "gön-de-Rİ", zh: "寄件", ex: "Gönderi numarası nedir?", exZh: "寄件編號是多少？" },
        { tr: "takip numarası", pron: "ta-KİP nu-ma-ra-SI", zh: "追蹤碼", ex: "Takip numarasını verebilir misiniz?", exZh: "可以給我追蹤碼嗎？" },
        { tr: "teslimat", pron: "tes-li-MAT", zh: "配送", ex: "Teslimat ne zaman?", exZh: "什麼時候送到？" },
        { tr: "kurye", pron: "kur-YE", zh: "送貨員", ex: "Kurye aradı mı?", exZh: "送貨員有打電話嗎？" },
        { tr: "adres", pron: "ad-RES", zh: "地址", ex: "Adresi değiştirmek istiyorum.", exZh: "我想改地址。" },
        { tr: "iade", pron: "i-a-DE", zh: "退貨", ex: "İade etmek istiyorum.", exZh: "我想退貨。" },
        { tr: "alıcı / gönderici", pron: "a-lı-CI / gön-de-ri-Cİ", zh: "收件人／寄件人", ex: "Alıcı adı nedir?", exZh: "收件人姓名是？" },
        { tr: "imzalamak", pron: "im-za-la-MAK", zh: "簽收", ex: "Burayı imzalayın lütfen.", exZh: "請在這裡簽收。" }
    ],
    dialogue: {
        title: "領包裹",
        lines: [
            { who: "你", tr: "Merhaba, bir kargom var. Takip numarası burada.", zh: "你好，我有個包裹。追蹤碼在這裡。" },
            { who: "櫃檯", tr: "Kimliğinizi alabilir miyim?", zh: "可以給我您的證件嗎？" },
            { who: "你", tr: "Buyurun. Nereyi imzalayacağım?", zh: "請。我要簽哪裡？" },
            { who: "櫃檯", tr: "Şurayı imzalayın lütfen.", zh: "請簽這裡。" }
        ]
    },
    task: "查一次你的 kargo 追蹤狀態，把 teslimat、kurye、adres 三個字認出來。",
    quiz: [
        { q: "kargo 是什麼？", options: ["包裹／宅配", "帳單", "收據"], a: "包裹／宅配" },
        { q: "「我想退貨」怎麼說？", options: ["İade etmek istiyorum", "İptal etmek istiyorum", "Teslimat istiyorum"], a: "İade etmek istiyorum" },
        { q: "alıcı 指的是？", options: ["寄件人", "收件人", "送貨員"], a: "收件人" }
    ]
},

{
    day: 17,
    title: "藥局",
    scene: "💊 Eczane，土耳其藥師權限很大",
    grammar: {
        point: "... ağrıyor　～在痛",
        note: "Başım ağrıyor（我頭痛）、Karnım ağrıyor（我肚子痛）。身體部位＋-ım/-im 表示「我的」。"
    },
    words: [
        { tr: "eczane", pron: "ec-za-NE", zh: "藥局", ex: "Nöbetçi eczane nerede?", exZh: "值班藥局在哪裡？" },
        { tr: "ilaç", pron: "i-LAÇ", zh: "藥", ex: "Bu ilaç reçetesiz mi?", exZh: "這個藥不用處方嗎？" },
        { tr: "reçete", pron: "re-çe-TE", zh: "處方箋", ex: "Reçetem var.", exZh: "我有處方箋。" },
        { tr: "ağrı kesici", pron: "ağ-RI ke-si-Cİ", zh: "止痛藥", ex: "Ağrı kesici var mı?", exZh: "有止痛藥嗎？" },
        { tr: "ateş", pron: "a-TEŞ", zh: "發燒", ex: "Ateşim var.", exZh: "我發燒了。" },
        { tr: "öksürük", pron: "ök-sü-RÜK", zh: "咳嗽", ex: "Öksürüğüm var.", exZh: "我在咳嗽。" },
        { tr: "başım ağrıyor", pron: "ba-ŞIM ağ-rı-YOR", zh: "我頭痛", ex: "Başım çok ağrıyor.", exZh: "我頭很痛。" },
        { tr: "günde kaç kere", pron: "gün-DE KAÇ ke-re", zh: "一天幾次", ex: "Günde kaç kere alacağım?", exZh: "我一天要吃幾次？" },
        { tr: "aç karnına / tok karnına", pron: "AÇ kar-nı-NA", zh: "空腹／飯後", ex: "Tok karnına alın.", exZh: "請飯後服用。" },
        { tr: "alerjim var", pron: "a-ler-JİM VAR", zh: "我有過敏", ex: "Penisiline alerjim var.", exZh: "我對盤尼西林過敏。" }
    ],
    dialogue: {
        title: "在藥局",
        lines: [
            { who: "藥師", tr: "Buyurun, geçmiş olsun.", zh: "請說，祝早日康復。" },
            { who: "你", tr: "Başım ağrıyor ve biraz ateşim var.", zh: "我頭痛，還有點發燒。" },
            { who: "藥師", tr: "Bu ağrı kesiciyi alabilirsiniz. Günde iki kere.", zh: "您可以吃這個止痛藥。一天兩次。" },
            { who: "你", tr: "Aç karnına mı, tok karnına mı?", zh: "空腹還是飯後？" },
            { who: "藥師", tr: "Tok karnına alın.", zh: "請飯後服用。" }
        ]
    },
    task: "把自己的過敏或不能吃的藥用 ...-e alerjim var 造一句，存在手機裡備用。",
    quiz: [
        { q: "「我頭痛」怎麼說？", options: ["Başım ağrıyor", "Ateşim var", "Öksürüğüm var"], a: "Başım ağrıyor" },
        { q: "reçete 是什麼？", options: ["處方箋", "收據", "藥局"], a: "處方箋" },
        { q: "tok karnına 表示？", options: ["空腹", "飯後", "睡前"], a: "飯後" }
    ]
},

{
    day: 18,
    title: "看醫生",
    scene: "🏥 醫院掛號與看診",
    grammar: {
        point: "身體部位＋-ım/-im ağrıyor",
        note: "boğazım（我的喉嚨）、midem（我的胃）、dişim（我的牙齒）。ağrıyor 不變。"
    },
    words: [
        { tr: "hastane", pron: "has-ta-NE", zh: "醫院", ex: "En yakın hastane nerede?", exZh: "最近的醫院在哪？" },
        { tr: "doktor", pron: "dok-TOR", zh: "醫生", ex: "Doktora görünmek istiyorum.", exZh: "我想看醫生。" },
        { tr: "randevu almak", pron: "ran-de-VU al-MAK", zh: "掛號、預約", ex: "Randevu almak istiyorum.", exZh: "我想掛號。" },
        { tr: "sigorta", pron: "si-gor-TA", zh: "保險", ex: "Özel sigortam var.", exZh: "我有私人保險。" },
        { tr: "boğazım ağrıyor", pron: "bo-ğa-ZIM ağ-rı-YOR", zh: "我喉嚨痛", ex: "Boğazım çok ağrıyor.", exZh: "我喉嚨很痛。" },
        { tr: "midem bulanıyor", pron: "mi-DEM bu-la-nı-YOR", zh: "我想吐", ex: "Midem bulanıyor.", exZh: "我覺得噁心想吐。" },
        { tr: "kaç gündür", pron: "KAÇ gün-DÜR", zh: "已經幾天了", ex: "Üç gündür böyle.", exZh: "這樣三天了。" },
        { tr: "tahlil", pron: "tah-LİL", zh: "檢驗", ex: "Kan tahlili gerekiyor mu?", exZh: "需要驗血嗎？" },
        { tr: "rapor", pron: "ra-POR", zh: "診斷書", ex: "Rapor alabilir miyim?", exZh: "我可以拿診斷書嗎？" },
        { tr: "Geçmiş olsun", pron: "geç-MİŞ ol-SUN", zh: "祝早日康復", ex: "Geçmiş olsun!", exZh: "祝你早日康復！" }
    ],
    dialogue: {
        title: "看診",
        lines: [
            { who: "醫生", tr: "Geçmiş olsun, şikayetiniz nedir?", zh: "早日康復，您哪裡不舒服？" },
            { who: "你", tr: "Boğazım ağrıyor ve ateşim var. Üç gündür böyle.", zh: "我喉嚨痛而且發燒。已經三天了。" },
            { who: "醫生", tr: "Alerjiniz var mı?", zh: "您有過敏嗎？" },
            { who: "你", tr: "Penisiline alerjim var.", zh: "我對盤尼西林過敏。" },
            { who: "醫生", tr: "Tamam, reçete yazıyorum.", zh: "好，我開處方。" }
        ]
    },
    task: "練習描述症狀＋持續天數：「... ağrıyor, ... gündür böyle.」",
    quiz: [
        { q: "「已經三天了」怎麼說？", options: ["Üç gündür böyle", "Üç gün sonra", "Saat üçte"], a: "Üç gündür böyle" },
        { q: "Geçmiş olsun 什麼時候說？", options: ["對方生病或剛出事時", "吃飯前", "道別時"], a: "對方生病或剛出事時" },
        { q: "rapor 指的是？", options: ["診斷書", "處方箋", "保險卡"], a: "診斷書" }
    ]
},

{
    day: 19,
    title: "緊急狀況",
    scene: "🚨 報警、求助、丟東西",
    grammar: {
        point: "Yardım edin!　救命／幫幫我",
        note: "命令句直接用動詞語幹＋-in/-ın（禮貌複數）。Yardım edin! / Dikkat edin!（小心！）"
    },
    words: [
        { tr: "İmdat!", pron: "im-DAT", zh: "救命！", ex: "İmdat! Yardım edin!", exZh: "救命！幫幫我！" },
        { tr: "polis", pron: "po-LİS", zh: "警察", ex: "Polis çağırın lütfen.", exZh: "請叫警察。" },
        { tr: "ambulans", pron: "am-bu-LANS", zh: "救護車", ex: "Ambulans lazım!", exZh: "需要救護車！" },
        { tr: "112", pron: "yüz on i-Kİ", zh: "緊急電話（統一號碼）", ex: "112'yi arayın.", exZh: "打 112。" },
        { tr: "yangın", pron: "yan-GIN", zh: "火災", ex: "Yangın var!", exZh: "失火了！" },
        { tr: "kaza", pron: "ka-ZA", zh: "事故", ex: "Kaza oldu.", exZh: "發生事故了。" },
        { tr: "çantamı çaldılar", pron: "çan-ta-MI çal-dı-LAR", zh: "我的包被偷了", ex: "Çantamı çaldılar.", exZh: "我的包被偷了。" },
        { tr: "kayıp", pron: "ka-YIP", zh: "遺失", ex: "Pasaportum kayıp.", exZh: "我的護照不見了。" },
        { tr: "Türkçe bilmiyorum", pron: "TÜRK-çe bil-mi-yo-RUM", zh: "我不會土耳其文", ex: "Türkçe bilmiyorum, İngilizce?", exZh: "我不會土耳其文，能說英文嗎？" },
        { tr: "Tayvan Ticaret Merkezi", pron: "tay-VAN ti-ca-RET mer-ke-Zİ", zh: "台灣貿易中心", ex: "Tayvan Ticaret Merkezi'nde çalışıyorum.", exZh: "我在台灣貿易中心工作。" }
    ],
    dialogue: {
        title: "報案",
        lines: [
            { who: "你", tr: "Yardım edin, çantamı çaldılar.", zh: "幫幫我，我的包被偷了。" },
            { who: "警察", tr: "Nerede oldu? Ne zaman?", zh: "在哪裡發生的？什麼時候？" },
            { who: "你", tr: "Metroda, yaklaşık yarım saat önce.", zh: "在地鐵上，大約半小時前。" },
            { who: "警察", tr: "Kimliğiniz var mı?", zh: "您有證件嗎？" },
            { who: "你", tr: "Pasaportumun fotokopisi var.", zh: "我有護照影本。" }
        ]
    },
    task: "把「我不會土耳其文，可以說英文嗎？」和 112 記在手機備忘錄，並存好護照影本。",
    quiz: [
        { q: "土耳其的統一緊急電話是？", options: ["110", "112", "119"], a: "112" },
        { q: "「救命」怎麼說？", options: ["İmdat", "Dikkat", "Buyurun"], a: "İmdat" },
        { q: "Pasaportum kayıp 是什麼意思？", options: ["護照過期", "護照不見了", "護照在辦"], a: "護照不見了" }
    ]
},

{
    day: 20,
    title: "天氣與穿著",
    scene: "🌦 每天出門前的閒聊題",
    grammar: {
        point: "Hava nasıl?　天氣如何？",
        note: "Hava + 形容詞：Hava sıcak（天氣熱）、Hava soğuk（天氣冷）。要說「會下雨」用 Yağmur yağacak。"
    },
    words: [
        { tr: "hava", pron: "ha-VA", zh: "天氣", ex: "Bugün hava nasıl?", exZh: "今天天氣如何？" },
        { tr: "sıcak / soğuk", pron: "sı-CAK / so-ĞUK", zh: "熱／冷", ex: "Bugün çok sıcak.", exZh: "今天很熱。" },
        { tr: "yağmur", pron: "yağ-MUR", zh: "雨", ex: "Yağmur yağıyor.", exZh: "正在下雨。" },
        { tr: "kar", pron: "KAR", zh: "雪", ex: "Kar yağacak.", exZh: "會下雪。" },
        { tr: "rüzgar", pron: "rüz-GÂR", zh: "風", ex: "Rüzgar çok kuvvetli.", exZh: "風很強。" },
        { tr: "güneşli / bulutlu", pron: "gü-neş-Lİ / bu-lut-LU", zh: "晴／多雲", ex: "Yarın güneşli olacak.", exZh: "明天會是晴天。" },
        { tr: "şemsiye", pron: "şem-si-YE", zh: "雨傘", ex: "Şemsiye al, yağmur yağacak.", exZh: "帶傘，會下雨。" },
        { tr: "mont", pron: "MONT", zh: "外套", ex: "Mont giy, hava soğuk.", exZh: "穿外套，天氣冷。" },
        { tr: "derece", pron: "de-re-CE", zh: "度（溫度）", ex: "Bugün on derece.", exZh: "今天十度。" },
        { tr: "nem", pron: "NEM", zh: "濕度", ex: "İstanbul'da nem yüksek.", exZh: "伊斯坦堡濕度很高。" }
    ],
    dialogue: {
        title: "電梯裡的閒聊",
        lines: [
            { who: "鄰居", tr: "Günaydın, bugün hava çok soğuk değil mi?", zh: "早安，今天天氣很冷對吧？" },
            { who: "你", tr: "Evet, çok soğuk. Kar yağacak galiba.", zh: "對，很冷。大概會下雪。" },
            { who: "鄰居", tr: "Şemsiye aldınız mı?", zh: "您帶傘了嗎？" },
            { who: "你", tr: "Aldım, teşekkürler. İyi günler!", zh: "帶了，謝謝。祝您有美好的一天！" }
        ]
    },
    task: "連續三天用一句土耳其文描述當天天氣，這是最容易開啟閒聊的題目。",
    quiz: [
        { q: "「正在下雨」怎麼說？", options: ["Yağmur yağıyor", "Hava güneşli", "Rüzgar var"], a: "Yağmur yağıyor" },
        { q: "soğuk 是什麼意思？", options: ["熱", "冷", "濕"], a: "冷" },
        { q: "şemsiye 是？", options: ["外套", "雨傘", "圍巾"], a: "雨傘" }
    ]
}

];
