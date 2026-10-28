// ===============================================
//  ゆるこ アプリの設定ファイル
//  くじ・お店・ニュースの追加は、アプリ右上の🔒からできます（ここを書く必要なし）
// ===============================================
window.YURUKO = {

  // ---- お店の名前・ひとこと ----
  brand: {
    name: "ゆるこ",
    tagline: "ゆる〜く、たのしく、くじをひこう",
    character: "ゆるこは、顔が大きく、目などの部位が小さい可愛いキャラクターです",
  },

  // ---- スタッフ用ページのパスワード（「」の中を好きなものに変えてね）----
  adminPassword: "yuruko1234",

  // ---- データの保存先（OHinasamaと同じSupabase）----
  // パパが docs/sql/001_yuruko.sql をSupabaseで実行するまでは、この端末の中だけに保存されます
  supabase: {
    url: "https://detrbkhpncnwqdphadcn.supabase.co",
    key: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRldHJia2hwbmNud3FkcGhhZGNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA2NTExODcsImV4cCI6MjA5NjIyNzE4N30.kpojQDLvESLhtmyGXXtxqIsoLUdGdZG88ryiQ1VBGB8",
    table: "yuruko_items",
  },

  // ---- 最初に入っているサンプル（スタッフページから消してOK）----
  seed: {
    kuji: [
      {
        title: "ゆるこ はじまりのくじ", sub: "第1弾", status: "now",
        price: "1回 100円", date: "2026年11月1日(日) 発売", place: "ゆるこ本店（学校のそばの公園）",
        color: "#ff8fa3", emoji: "🎀", photo: "",
        note: "記念すべき第1弾！ぜんぶ手づくりの景品です。",
        prizes: [
          { rank: "S", name: "特大ぬいぐるみ（いちばんすごい賞！）", total: 1, left: 1, photo: "" },
          { rank: "A", name: "てづくり ぬいぐるみ", total: 2, left: 2, photo: "" },
          { rank: "B", name: "でかシール セット", total: 4, left: 3, photo: "" },
          { rank: "C", name: "キーホルダー", total: 6, left: 5, photo: "" },
          { rank: "D", name: "ミニメモちょう", total: 10, left: 8, photo: "" },
          { rank: "E", name: "ゆるこ オリジナル缶バッジ", total: 18, left: 15, photo: "" },
        ],
      },
      {
        title: "ふわふわ どうぶつくじ", sub: "第2弾", status: "soon",
        price: "1回 100円", date: "2026年12月 発売予定", place: "ゆるこ本店",
        color: "#8fd3c7", emoji: "🐰", photo: "",
        note: "どうぶつがいっぱい！どの賞がでるかな？",
        prizes: [
          { rank: "S", name: "ひみつの景品", total: 1, left: 1, photo: "" },
          { rank: "A", name: "うさぎのクッション", total: 1, left: 1, photo: "" },
          { rank: "B", name: "どうぶつマスコット", total: 5, left: 5, photo: "" },
          { rank: "C", name: "どうぶつシール", total: 10, left: 10, photo: "" },
        ],
      },
    ],
    shops: [
      { name: "ゆるこ本店", place: "学校のそばの公園", time: "土日 10:00〜12:00", note: "雨の日はおやすみ", emoji: "🏪" },
    ],
    news: [
      { date: "2026-10-27", tag: "new",  title: "ゆるこ 公式アプリができました！", body: "最新のくじ情報は、このアプリでチェックしてね。" },
      { date: "2026-10-25", tag: "info", title: "第1弾「はじまりのくじ」11月1日 発売決定", body: "ぜんぶ手づくりの景品です。S PRIZEはなにかな？" },
    ],
  },
};
