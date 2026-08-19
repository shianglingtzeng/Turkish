/* =================================
   A1 生存課程 Day 1-10
   對象：在伊斯坦堡生活的外籍人士

   欄位說明
   pron   音節切分，大寫是重音（土耳其文重音多半在最後一個音節）
   ex     例句一定要有，這是舊資料最缺的東西
================================= */

const courseA1_1 = [

{
    day: 1,
    title: "打招呼與自我介紹",
    scene: "🤝 第一次見面、進店家、進辦公室",
    grammar: {
        point: "Ben ...-(y)im　我是～",
        note: "接在名詞後面表示「我是」。母音收尾要加 y：Tayvanlı → Tayvanlıyım。子音收尾直接加：öğretmen → öğretmenim。"
    },
    words: [
        { tr: "Merhaba", pron: "mer-ha-BA", zh: "你好（全天通用）", ex: "Merhaba, nasılsınız?", exZh: "你好，您好嗎？" },
        { tr: "Günaydın", pron: "gü-nay-DIN", zh: "早安", ex: "Günaydın, iyi çalışmalar.", exZh: "早安，工作順利。" },
        { tr: "İyi akşamlar", pron: "i-YİAK-şam-lar", zh: "晚安（見面時）", ex: "İyi akşamlar, masanız var mı?", exZh: "晚安，有位子嗎？" },
        { tr: "Nasılsınız?", pron: "na-sıl-sı-NIZ", zh: "您好嗎？（禮貌）", ex: "Merhaba, nasılsınız?", exZh: "你好，您好嗎？" },
        { tr: "İyiyim, teşekkürler", pron: "i-Yİ-yim te-şek-kür-LER", zh: "我很好，謝謝", ex: "İyiyim, teşekkürler. Siz?", exZh: "我很好，謝謝。您呢？" },
        { tr: "Benim adım ...", pron: "be-NİM a-DIM", zh: "我的名字是～", ex: "Benim adım Eva.", exZh: "我的名字是 Eva。" },
        { tr: "Memnun oldum", pron: "mem-NUN ol-DUM", zh: "很高興認識你", ex: "Memnun oldum, ben Tayvanlıyım.", exZh: "很高興認識你，我是台灣人。" },
        { tr: "Görüşürüz", pron: "gö-rü-şü-RÜZ", zh: "再見（下次見）", ex: "Görüşürüz, iyi günler.", exZh: "再見，祝你有美好的一天。" },
        { tr: "Hoşça kalın", pron: "HOŞ-ça ka-LIN", zh: "再見（離開時說）", ex: "Hoşça kalın, teşekkürler.", exZh: "再見，謝謝。" },
        { tr: "Affedersiniz", pron: "af-fe-der-si-NİZ", zh: "不好意思／借過", ex: "Affedersiniz, bir şey sorabilir miyim?", exZh: "不好意思，我可以問個問題嗎？" }
    ],
    dialogue: {
        title: "在辦公室櫃檯",
        lines: [
            { who: "櫃檯", tr: "Günaydın, buyurun.", zh: "早安，請說。" },
            { who: "你", tr: "Günaydın. Benim adım Eva, saat onda randevum var.", zh: "早安。我叫 Eva，我十點有預約。" },
            { who: "櫃檯", tr: "Hoş geldiniz. Bir dakika lütfen.", zh: "歡迎。請稍等一下。" },
            { who: "你", tr: "Teşekkür ederim.", zh: "謝謝您。" }
        ]
    },
    task: "今天出門遇到大樓管理員或店員時，主動說一次 Merhaba 或 Günaydın，並回答 Nasılsınız?",
    quiz: [
        { q: "早上進辦公室要說？", options: ["İyi akşamlar", "Günaydın", "Görüşürüz"], a: "Günaydın" },
        { q: "Memnun oldum 的意思是？", options: ["我很忙", "很高興認識你", "我不懂"], a: "很高興認識你" },
        { q: "想請對方讓路，你會說？", options: ["Affedersiniz", "Teşekkürler", "Merhaba"], a: "Affedersiniz" }
    ]
},

{
    day: 2,
    title: "數字與價格",
    scene: "🏷 買東西、看價目表、聽金額",
    grammar: {
        point: "Kaç? / Ne kadar?　多少？",
        note: "Kaç 問數量（Kaç tane? 幾個？），Ne kadar 問價錢或程度（Bu ne kadar? 這多少錢？）。金額口語常省略 lira，直接說數字。"
    },
    words: [
        { tr: "bir / iki / üç", pron: "BİR / i-Kİ / ÜÇ", zh: "一／二／三", ex: "İki tane lütfen.", exZh: "請給我兩個。" },
        { tr: "dört / beş / altı", pron: "DÖRT / BEŞ / al-TI", zh: "四／五／六", ex: "Beş kilo domates.", exZh: "五公斤番茄。" },
        { tr: "yedi / sekiz / dokuz / on", pron: "ye-Dİ / se-KİZ / do-KUZ / ON", zh: "七／八／九／十", ex: "Saat on.", exZh: "十點。" },
        { tr: "yirmi / elli / yüz", pron: "yir-Mİ / el-Lİ / YÜZ", zh: "二十／五十／一百", ex: "Yüz lira.", exZh: "一百里拉。" },
        { tr: "bin", pron: "BİN", zh: "一千", ex: "İki bin lira.", exZh: "兩千里拉。" },
        { tr: "Ne kadar?", pron: "NE ka-dar", zh: "多少錢？", ex: "Bu ne kadar?", exZh: "這個多少錢？" },
        { tr: "Kaç tane?", pron: "KAÇ ta-ne", zh: "幾個？", ex: "Kaç tane istiyorsunuz?", exZh: "您要幾個？" },
        { tr: "pahalı / ucuz", pron: "pa-ha-LI / u-CUZ", zh: "貴／便宜", ex: "Biraz pahalı.", exZh: "有點貴。" },
        { tr: "indirim", pron: "in-di-RİM", zh: "折扣", ex: "İndirim var mı?", exZh: "有折扣嗎？" },
        { tr: "toplam", pron: "top-LAM", zh: "總共", ex: "Toplam ne kadar?", exZh: "總共多少錢？" }
    ],
    dialogue: {
        title: "在小店結帳",
        lines: [
            { who: "你", tr: "Affedersiniz, bu ne kadar?", zh: "不好意思，這個多少錢？" },
            { who: "店員", tr: "Yüz elli lira.", zh: "一百五十里拉。" },
            { who: "你", tr: "İki tane alayım. Toplam ne kadar?", zh: "我要兩個。總共多少？" },
            { who: "店員", tr: "Üç yüz lira.", zh: "三百里拉。" }
        ]
    },
    task: "去超市看三樣商品的標價，把數字念出來，再用 Bu ne kadar? 問一次店員。",
    quiz: [
        { q: "「總共多少錢？」怎麼說？", options: ["Kaç tane?", "Toplam ne kadar?", "İndirim var mı?"], a: "Toplam ne kadar?" },
        { q: "yüz 是多少？", options: ["十", "一百", "一千"], a: "一百" },
        { q: "想問有沒有折扣？", options: ["İndirim var mı?", "Pahalı mı?", "Kaç tane?"], a: "İndirim var mı?" }
    ]
},

{
    day: 3,
    title: "咖啡店點餐",
    scene: "☕ 每天最常練習的場合",
    grammar: {
        point: "... istiyorum / ... alabilir miyim?　我要～／可以給我～嗎？",
        note: "istiyorum 直接但不失禮；alabilir miyim 更客氣。單點一杯用 bir：Bir çay lütfen."
    },
    words: [
        { tr: "çay", pron: "ÇAY", zh: "紅茶（土耳其國民飲料）", ex: "Bir çay lütfen.", exZh: "請給我一杯茶。" },
        { tr: "Türk kahvesi", pron: "TÜRK kah-ve-Sİ", zh: "土耳其咖啡", ex: "Bir Türk kahvesi, orta şekerli.", exZh: "一杯土耳其咖啡，中糖。" },
        { tr: "sade / az şekerli / şekerli", pron: "sa-DE / AZ şe-ker-Lİ", zh: "無糖／微糖／有糖", ex: "Sade olsun lütfen.", exZh: "請給我無糖的。" },
        { tr: "sütlü", pron: "süt-LÜ", zh: "加牛奶的", ex: "Sütlü kahve alabilir miyim?", exZh: "可以給我一杯牛奶咖啡嗎？" },
        { tr: "buzlu", pron: "buz-LU", zh: "加冰的", ex: "Buzlu americano lütfen.", exZh: "請給我冰美式。" },
        { tr: "burada / paket", pron: "bu-ra-DA / pa-KET", zh: "內用／外帶", ex: "Paket olsun lütfen.", exZh: "請外帶。" },
        { tr: "su", pron: "SU", zh: "水", ex: "Bir su alabilir miyim?", exZh: "可以給我一杯水嗎？" },
        { tr: "Hesap lütfen", pron: "he-SAP lüt-FEN", zh: "請給我帳單", ex: "Hesap lütfen.", exZh: "請結帳。" },
        { tr: "kartla", pron: "kart-LA", zh: "用卡付", ex: "Kartla ödeyebilir miyim?", exZh: "可以刷卡嗎？" },
        { tr: "Afiyet olsun", pron: "a-fi-YET ol-SUN", zh: "請慢用（店員常說）", ex: "Buyurun, afiyet olsun.", exZh: "請用，慢用。" }
    ],
    dialogue: {
        title: "在咖啡店",
        lines: [
            { who: "店員", tr: "Merhaba, ne alırsınız?", zh: "你好，要點什麼？" },
            { who: "你", tr: "Bir Türk kahvesi alabilir miyim? Az şekerli.", zh: "可以給我一杯土耳其咖啡嗎？微糖。" },
            { who: "店員", tr: "Burada mı, paket mi?", zh: "內用還是外帶？" },
            { who: "你", tr: "Burada. Kartla ödeyebilir miyim?", zh: "內用。可以刷卡嗎？" },
            { who: "店員", tr: "Tabii. Afiyet olsun.", zh: "當然。請慢用。" }
        ]
    },
    task: "今天用土耳其文點一杯飲料，說出甜度或冰塊，最後說 Hesap lütfen。",
    quiz: [
        { q: "「外帶」怎麼說？", options: ["Burada", "Paket", "Hesap"], a: "Paket" },
        { q: "土耳其咖啡想要無糖，說？", options: ["Sade", "Şekerli", "Sütlü"], a: "Sade" },
        { q: "店員說 Afiyet olsun 是什麼意思？", options: ["請慢用", "請結帳", "請稍等"], a: "請慢用" }
    ]
},

{
    day: 4,
    title: "超市採買",
    scene: "🛒 Migros、BİM、A101",
    grammar: {
        point: "... var mı?　有～嗎？",
        note: "問店裡有沒有某樣東西最常用。回答 Var（有）／Yok（沒有）。"
    },
    words: [
        { tr: "market", pron: "mar-KET", zh: "超市", ex: "En yakın market nerede?", exZh: "最近的超市在哪？" },
        { tr: "süt", pron: "SÜT", zh: "牛奶", ex: "Yarım yağlı süt var mı?", exZh: "有半脂牛奶嗎？" },
        { tr: "ekmek", pron: "ek-MEK", zh: "麵包", ex: "Bir ekmek lütfen.", exZh: "請給我一條麵包。" },
        { tr: "yumurta", pron: "yu-mur-TA", zh: "雞蛋", ex: "On yumurta alacağım.", exZh: "我要買十顆蛋。" },
        { tr: "peynir", pron: "pey-NİR", zh: "起司", ex: "Beyaz peynir nerede?", exZh: "白起司在哪裡？" },
        { tr: "poşet", pron: "po-ŞET", zh: "塑膠袋（要付費）", ex: "Poşet ister misiniz?", exZh: "需要袋子嗎？" },
        { tr: "kasa", pron: "ka-SA", zh: "收銀台", ex: "Kasa nerede?", exZh: "收銀台在哪？" },
        { tr: "fiş", pron: "FİŞ", zh: "收據", ex: "Fiş alabilir miyim?", exZh: "可以給我收據嗎？" },
        { tr: "son kullanma tarihi", pron: "SON kul-lan-MA ta-ri-Hİ", zh: "有效期限", ex: "Son kullanma tarihi ne zaman?", exZh: "有效期限是什麼時候？" },
        { tr: "Nerede?", pron: "NE-re-de", zh: "在哪裡？", ex: "Süt ürünleri nerede?", exZh: "乳製品區在哪裡？" }
    ],
    dialogue: {
        title: "找東西與結帳",
        lines: [
            { who: "你", tr: "Affedersiniz, yumurta nerede?", zh: "不好意思，雞蛋在哪裡？" },
            { who: "店員", tr: "Şu tarafta, buzdolabının yanında.", zh: "在那邊，冰箱旁邊。" },
            { who: "收銀", tr: "Poşet ister misiniz?", zh: "需要袋子嗎？" },
            { who: "你", tr: "Evet, bir tane lütfen. Fiş alabilir miyim?", zh: "要，請給我一個。可以給我收據嗎？" }
        ]
    },
    task: "在超市找三樣東西，用 ... nerede? 問店員一次，結帳時聽懂 Poşet ister misiniz?",
    quiz: [
        { q: "收銀員問 Poşet ister misiniz? 是在問？", options: ["要不要收據", "要不要袋子", "要不要刷卡"], a: "要不要袋子" },
        { q: "「有嗎？」的句尾是？", options: ["var mı?", "nerede?", "ne kadar?"], a: "var mı?" },
        { q: "fiş 是什麼？", options: ["收據", "折扣", "袋子"], a: "收據" }
    ]
},

{
    day: 5,
    title: "傳統市場與秤重",
    scene: "🍅 每週的 pazar 露天市集",
    grammar: {
        point: "重量與單位",
        note: "kilo（公斤）、yarım kilo（半公斤）、tane（個）、demet（束）。說「半公斤番茄」＝ yarım kilo domates。"
    },
    words: [
        { tr: "pazar", pron: "pa-ZAR", zh: "露天市集（也是星期日）", ex: "Salı pazarı çok ucuz.", exZh: "週二市集很便宜。" },
        { tr: "kilo", pron: "ki-LO", zh: "公斤", ex: "Bir kilo elma lütfen.", exZh: "請給我一公斤蘋果。" },
        { tr: "yarım", pron: "ya-RIM", zh: "一半", ex: "Yarım kilo yeter.", exZh: "半公斤就夠了。" },
        { tr: "domates / salatalık", pron: "do-ma-TES / sa-la-ta-LIK", zh: "番茄／小黃瓜", ex: "İki kilo domates.", exZh: "兩公斤番茄。" },
        { tr: "elma / muz", pron: "el-MA / MUZ", zh: "蘋果／香蕉", ex: "Elma taze mi?", exZh: "蘋果新鮮嗎？" },
        { tr: "taze", pron: "ta-ZE", zh: "新鮮的", ex: "Bunlar çok taze.", exZh: "這些很新鮮。" },
        { tr: "Biraz daha", pron: "bi-RAZ da-HA", zh: "再多一點", ex: "Biraz daha koyun lütfen.", exZh: "請再多放一點。" },
        { tr: "Yeter", pron: "ye-TER", zh: "夠了", ex: "Yeter, teşekkürler.", exZh: "夠了，謝謝。" },
        { tr: "Başka bir şey?", pron: "baş-KA bir ŞEY", zh: "還要別的嗎？", ex: "Başka bir şey ister misiniz?", exZh: "還需要別的嗎？" },
        { tr: "Bu kadar", pron: "BU ka-dar", zh: "就這些", ex: "Bu kadar, teşekkürler.", exZh: "就這些，謝謝。" }
    ],
    dialogue: {
        title: "在市集買菜",
        lines: [
            { who: "攤商", tr: "Buyurun abla, ne istersiniz?", zh: "請說，您要什麼？" },
            { who: "你", tr: "Bir kilo domates ve yarım kilo salatalık lütfen.", zh: "請給我一公斤番茄和半公斤小黃瓜。" },
            { who: "攤商", tr: "Başka bir şey?", zh: "還要別的嗎？" },
            { who: "你", tr: "Bu kadar. Toplam ne kadar?", zh: "就這些。總共多少？" }
        ]
    },
    task: "去一次社區市集，用 kilo 和 yarım kilo 各買一樣東西。",
    quiz: [
        { q: "yarım kilo 是多少？", options: ["半公斤", "兩公斤", "一百公克"], a: "半公斤" },
        { q: "攤商問 Başka bir şey? 你想結束採買，回答？", options: ["Bu kadar", "Biraz daha", "Taze mi?"], a: "Bu kadar" },
        { q: "taze 的意思是？", options: ["便宜", "新鮮", "很多"], a: "新鮮" }
    ]
},

{
    day: 6,
    title: "餐廳用餐",
    scene: "🍽 點菜、加點、結帳",
    grammar: {
        point: "-sız / -siz　不要～、無～",
        note: "接在名詞後表示「沒有」：acısız（不辣）、şekersiz（無糖）、etsiz（不含肉）。母音和諧要跟著變。"
    },
    words: [
        { tr: "menü", pron: "me-NÜ", zh: "菜單", ex: "Menü alabilir miyim?", exZh: "可以給我菜單嗎？" },
        { tr: "çorba", pron: "çor-BA", zh: "湯", ex: "Mercimek çorbası lütfen.", exZh: "請給我扁豆湯。" },
        { tr: "kebap", pron: "ke-BAP", zh: "烤肉", ex: "Bir adana kebap.", exZh: "一份阿達納烤肉。" },
        { tr: "acısız", pron: "a-cı-SIZ", zh: "不辣", ex: "Acısız olsun lütfen.", exZh: "請不要辣。" },
        { tr: "etsiz", pron: "et-SİZ", zh: "不含肉", ex: "Etsiz bir yemek var mı?", exZh: "有不含肉的餐嗎？" },
        { tr: "vejetaryen", pron: "ve-je-tar-YEN", zh: "素食者", ex: "Ben vejetaryenim.", exZh: "我吃素。" },
        { tr: "domuz eti", pron: "do-MUZ e-Tİ", zh: "豬肉", ex: "Domuz eti yemiyorum.", exZh: "我不吃豬肉。" },
        { tr: "Buyurun", pron: "bu-yu-RUN", zh: "請（給您／請說）", ex: "Buyurun, menünüz.", exZh: "請，您的菜單。" },
        { tr: "Bir tabak daha", pron: "BİR ta-bak da-HA", zh: "再一個盤子", ex: "Bir tabak daha alabilir miyim?", exZh: "可以再給我一個盤子嗎？" },
        { tr: "Hesabı alabilir miyim?", pron: "he-sa-BI a-la-bi-LİR mi-yim", zh: "可以結帳嗎？", ex: "Hesabı alabilir miyim?", exZh: "可以幫我結帳嗎？" }
    ],
    dialogue: {
        title: "在餐廳",
        lines: [
            { who: "服務生", tr: "Hoş geldiniz, kaç kişi?", zh: "歡迎，幾位？" },
            { who: "你", tr: "İki kişi. Menü alabilir miyim?", zh: "兩位。可以給我菜單嗎？" },
            { who: "服務生", tr: "Buyurun. Ne içersiniz?", zh: "請。要喝什麼？" },
            { who: "你", tr: "Bir ayran. Yemek acısız olsun lütfen.", zh: "一杯 ayran。餐點請不要辣。" },
            { who: "服務生", tr: "Tabii, afiyet olsun.", zh: "當然，請慢用。" }
        ]
    },
    task: "點餐時說出一個 -sız 結尾的要求（acısız / şekersiz / etsiz），並用土耳其文結帳。",
    quiz: [
        { q: "「請不要辣」怎麼說？", options: ["Acısız olsun", "Etsiz olsun", "Sade olsun"], a: "Acısız olsun" },
        { q: "服務生說 Kaç kişi? 是在問？", options: ["幾點", "幾位", "多少錢"], a: "幾位" },
        { q: "-sız / -siz 表示？", options: ["很多", "沒有／不含", "很小"], a: "沒有／不含" }
    ]
},

{
    day: 7,
    title: "計程車與叫車",
    scene: "🚕 Taksi、BiTaksi、Uber",
    grammar: {
        point: "-e / -a　去～（方向格）",
        note: "地名後加 -e/-a 表示「往」：Taksim'e（去 Taksim）、Maslak'a（去 Maslak）。專有名詞用 ' 隔開。"
    },
    words: [
        { tr: "taksi", pron: "tak-Sİ", zh: "計程車", ex: "Taksi çağırabilir misiniz?", exZh: "可以幫我叫計程車嗎？" },
        { tr: "Nereye?", pron: "NE-re-ye", zh: "去哪裡？", ex: "Nereye gidiyorsunuz?", exZh: "您要去哪裡？" },
        { tr: "... 'e gitmek istiyorum", pron: "e git-MEK is-ti-yo-RUM", zh: "我想去～", ex: "Maslak'a gitmek istiyorum.", exZh: "我想去 Maslak。" },
        { tr: "adres", pron: "ad-RES", zh: "地址", ex: "Adres burada.", exZh: "地址在這裡。" },
        { tr: "taksimetre", pron: "tak-si-met-RE", zh: "計費表", ex: "Taksimetre açık mı?", exZh: "計費表有開嗎？" },
        { tr: "Burada durabilir misiniz?", pron: "bu-ra-DA du-ra-bi-LİR mi-si-niz", zh: "可以在這裡停嗎？", ex: "Burada durabilir misiniz?", exZh: "可以在這裡停嗎？" },
        { tr: "sağ / sol / düz", pron: "SAĞ / SOL / DÜZ", zh: "右／左／直走", ex: "Sağdan dönün lütfen.", exZh: "請右轉。" },
        { tr: "trafik", pron: "tra-FİK", zh: "交通、塞車", ex: "Trafik çok yoğun.", exZh: "交通很壅塞。" },
        { tr: "Ne kadar sürer?", pron: "NE ka-dar sü-RER", zh: "要多久？", ex: "Ne kadar sürer?", exZh: "大概要多久？" },
        { tr: "Üstü kalsın", pron: "üs-TÜ kal-SIN", zh: "不用找零", ex: "Üstü kalsın.", exZh: "不用找了。" }
    ],
    dialogue: {
        title: "搭計程車",
        lines: [
            { who: "司機", tr: "Merhaba, nereye?", zh: "你好，去哪裡？" },
            { who: "你", tr: "Merhaba. Maslak'a gitmek istiyorum. Adres burada.", zh: "你好。我想去 Maslak。地址在這裡。" },
            { who: "司機", tr: "Tamam. Trafik biraz yoğun.", zh: "好。交通有點塞。" },
            { who: "你", tr: "Ne kadar sürer?", zh: "大概要多久？" },
            { who: "司機", tr: "Yaklaşık yirmi dakika.", zh: "大約二十分鐘。" }
        ]
    },
    task: "把你家地址用土耳其文念一次，並練習 ...'a gitmek istiyorum 這個句型。",
    quiz: [
        { q: "司機問 Nereye? 是在問？", options: ["多少錢", "去哪裡", "幾點"], a: "去哪裡" },
        { q: "「不用找零」怎麼說？", options: ["Üstü kalsın", "Burada durun", "Ne kadar sürer?"], a: "Üstü kalsın" },
        { q: "sol 是哪一邊？", options: ["左", "右", "直走"], a: "左" }
    ]
},

{
    day: 8,
    title: "地鐵、公車與 Istanbulkart",
    scene: "🚇 每天通勤",
    grammar: {
        point: "-den / -dan　從～（來源格）",
        note: "Levent'ten Şişli'ye = 從 Levent 到 Şişli。子音清濁會影響拼法（-ten/-tan）。"
    },
    words: [
        { tr: "metro", pron: "met-RO", zh: "地鐵", ex: "Metro istasyonu nerede?", exZh: "地鐵站在哪裡？" },
        { tr: "otobüs", pron: "o-to-BÜS", zh: "公車", ex: "Bu otobüs Şişli'ye gider mi?", exZh: "這班公車有到 Şişli 嗎？" },
        { tr: "durak", pron: "du-RAK", zh: "站牌", ex: "Sonraki durak neresi?", exZh: "下一站是哪裡？" },
        { tr: "İstanbulkart", pron: "is-tan-BUL-kart", zh: "伊斯坦堡交通卡", ex: "İstanbulkart nereden alabilirim?", exZh: "哪裡可以買交通卡？" },
        { tr: "dolum", pron: "do-LUM", zh: "加值", ex: "Dolum yapmak istiyorum.", exZh: "我想加值。" },
        { tr: "bakiye", pron: "ba-ki-YE", zh: "餘額", ex: "Bakiyem ne kadar?", exZh: "我的餘額還有多少？" },
        { tr: "aktarma", pron: "ak-tar-MA", zh: "轉乘", ex: "Burada aktarma var mı?", exZh: "這裡可以轉乘嗎？" },
        { tr: "iniyorum", pron: "i-ni-yo-RUM", zh: "我要下車", ex: "İnecek var, iniyorum!", exZh: "有人要下車，我要下！" },
        { tr: "hangi", pron: "han-Gİ", zh: "哪一個", ex: "Hangi hat Levent'e gidiyor?", exZh: "哪一條線到 Levent？" },
        { tr: "son durak", pron: "SON du-rak", zh: "終點站", ex: "Son durak neresi?", exZh: "終點站是哪裡？" }
    ],
    dialogue: {
        title: "問路線",
        lines: [
            { who: "你", tr: "Affedersiniz, bu metro Levent'e gidiyor mu?", zh: "不好意思，這班地鐵到 Levent 嗎？" },
            { who: "路人", tr: "Evet, ama Şişli'de aktarma yapmanız lazım.", zh: "對，但你要在 Şişli 轉乘。" },
            { who: "你", tr: "Anladım. İstanbulkart'a dolum nerede yapabilirim?", zh: "了解。哪裡可以幫交通卡加值？" },
            { who: "路人", tr: "İstasyonun girişinde makine var.", zh: "車站入口有機器。" }
        ]
    },
    task: "查一次自己的 İstanbulkart 餘額，並用土耳其文說出你的通勤路線（從哪到哪）。",
    quiz: [
        { q: "bakiye 是什麼？", options: ["餘額", "加值", "轉乘"], a: "餘額" },
        { q: "「轉乘」怎麼說？", options: ["aktarma", "durak", "dolum"], a: "aktarma" },
        { q: "想確認公車有沒有到某地，句尾用？", options: ["gider mi?", "ne kadar?", "kaç tane?"], a: "gider mi?" }
    ]
},

{
    day: 9,
    title: "問路與方向",
    scene: "🧭 迷路、找店家、找大樓",
    grammar: {
        point: "Nerede? / Nasıl giderim?　在哪裡？／怎麼去？",
        note: "Nerede 問位置，Nasıl giderim 問路線。回答常用 sağda（在右邊）、solda（在左邊）、karşıda（在對面）。"
    },
    words: [
        { tr: "Nasıl giderim?", pron: "na-SIL gi-de-RİM", zh: "我要怎麼去？", ex: "Eczaneye nasıl giderim?", exZh: "藥局怎麼去？" },
        { tr: "yakın / uzak", pron: "ya-KIN / u-ZAK", zh: "近／遠", ex: "Yakın mı, uzak mı?", exZh: "近還是遠？" },
        { tr: "sağda / solda", pron: "sağ-DA / sol-DA", zh: "在右邊／在左邊", ex: "Market solda.", exZh: "超市在左邊。" },
        { tr: "karşıda", pron: "kar-şı-DA", zh: "在對面", ex: "Banka karşıda.", exZh: "銀行在對面。" },
        { tr: "yanında", pron: "ya-nın-DA", zh: "在～旁邊", ex: "Eczanenin yanında.", exZh: "在藥局旁邊。" },
        { tr: "köşe", pron: "kö-ŞE", zh: "轉角", ex: "Köşeden sağa dönün.", exZh: "在轉角右轉。" },
        { tr: "cadde / sokak", pron: "cad-DE / so-KAK", zh: "大道／街", ex: "Hangi sokakta?", exZh: "在哪一條街？" },
        { tr: "kat", pron: "KAT", zh: "樓層", ex: "Üçüncü katta.", exZh: "在三樓。" },
        { tr: "Kayboldum", pron: "kay-bol-DUM", zh: "我迷路了", ex: "Kayboldum, yardım eder misiniz?", exZh: "我迷路了，可以幫我嗎？" },
        { tr: "Yavaş konuşur musunuz?", pron: "ya-VAŞ ko-nu-ŞUR mu-su-nuz", zh: "可以說慢一點嗎？", ex: "Lütfen yavaş konuşur musunuz?", exZh: "請您說慢一點好嗎？" }
    ],
    dialogue: {
        title: "在街上問路",
        lines: [
            { who: "你", tr: "Affedersiniz, en yakın eczaneye nasıl giderim?", zh: "不好意思，最近的藥局怎麼去？" },
            { who: "路人", tr: "Düz gidin, köşeden sağa dönün. Bankanın yanında.", zh: "直走，在轉角右轉。就在銀行旁邊。" },
            { who: "你", tr: "Biraz yavaş konuşur musunuz? Türkçem az.", zh: "可以說慢一點嗎？我的土耳其文不太好。" },
            { who: "路人", tr: "Tabii. Düz... sonra sağa.", zh: "當然。直走⋯⋯然後右轉。" }
        ]
    },
    task: "問路時一定要說一次 Yavaş konuşur musunuz?，這是外國人最該先學會的一句。",
    quiz: [
        { q: "「我迷路了」怎麼說？", options: ["Kayboldum", "Anlamadım", "Bilmiyorum"], a: "Kayboldum" },
        { q: "karşıda 的意思是？", options: ["在對面", "在旁邊", "在樓上"], a: "在對面" },
        { q: "想請對方講慢一點？", options: ["Yavaş konuşur musunuz?", "Nasıl giderim?", "Ne kadar?"], a: "Yavaş konuşur musunuz?" }
    ]
},

{
    day: 10,
    title: "時間、日期與約時間",
    scene: "⏰ 預約、上班、約人",
    grammar: {
        point: "Saat kaçta?　幾點？",
        note: "Saat üç = 三點；Saat üçte = 在三點。問現在幾點是 Saat kaç?，問約幾點是 Saat kaçta?"
    },
    words: [
        { tr: "Saat kaç?", pron: "sa-AT KAÇ", zh: "現在幾點？", ex: "Affedersiniz, saat kaç?", exZh: "不好意思，現在幾點？" },
        { tr: "bugün / yarın / dün", pron: "bu-GÜN / ya-RIN / DÜN", zh: "今天／明天／昨天", ex: "Yarın müsait misiniz?", exZh: "您明天有空嗎？" },
        { tr: "sabah / öğlen / akşam", pron: "sa-BAH / öğ-LEN / ak-ŞAM", zh: "早上／中午／晚上", ex: "Sabah dokuzda.", exZh: "早上九點。" },
        { tr: "randevu", pron: "ran-de-VU", zh: "預約", ex: "Randevu almak istiyorum.", exZh: "我想預約。" },
        { tr: "müsait", pron: "mü-sa-İT", zh: "有空的", ex: "Saat üçte müsait misiniz?", exZh: "您三點有空嗎？" },
        { tr: "buçuk", pron: "bu-ÇUK", zh: "半（點）", ex: "Saat iki buçuk.", exZh: "兩點半。" },
        { tr: "erken / geç", pron: "er-KEN / GEÇ", zh: "早／晚", ex: "Biraz geç kalacağım.", exZh: "我會晚一點到。" },
        { tr: "hafta / ay", pron: "haf-TA / AY", zh: "週／月", ex: "Gelecek hafta.", exZh: "下週。" },
        { tr: "Pazartesi / Salı", pron: "pa-zar-te-Sİ / sa-LI", zh: "星期一／星期二", ex: "Pazartesi görüşelim.", exZh: "我們星期一見。" },
        { tr: "Ne zaman?", pron: "NE za-man", zh: "什麼時候？", ex: "Toplantı ne zaman?", exZh: "會議是什麼時候？" }
    ],
    dialogue: {
        title: "電話預約",
        lines: [
            { who: "你", tr: "Merhaba, randevu almak istiyorum.", zh: "你好，我想預約。" },
            { who: "對方", tr: "Tabii. Ne zaman müsaitsiniz?", zh: "當然。您什麼時候有空？" },
            { who: "你", tr: "Yarın sabah dokuz buçukta olur mu?", zh: "明天早上九點半可以嗎？" },
            { who: "對方", tr: "Olur. Adınızı alabilir miyim?", zh: "可以。可以給我您的名字嗎？" }
        ]
    },
    task: "用土耳其文說出今天星期幾、現在幾點，再造一句「明天早上十點」。",
    quiz: [
        { q: "buçuk 是什麼意思？", options: ["半（點）", "一刻", "整點"], a: "半（點）" },
        { q: "「我想預約」怎麼說？", options: ["Randevu almak istiyorum", "Müsait misiniz?", "Saat kaç?"], a: "Randevu almak istiyorum" },
        { q: "yarın 是？", options: ["昨天", "今天", "明天"], a: "明天" }
    ]
}

];
