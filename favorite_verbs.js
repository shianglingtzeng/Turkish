/* =================================
   收藏動詞
   修正：原本 favoriteVerbs 每次重載都是空陣列，只寫不讀，
         下一次收藏會把先前的紀錄整個蓋掉。改走 TS 統一儲存。
================================= */

function addFavorite(verb) {
    if (!verb) return false;
    return TS.toggleFavorite(verb);
}

function listFavorites() {
    return TS.favorites();
}
