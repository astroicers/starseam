import { CodeTag } from "@/components/ui/code-tag";
import type { Dictionary } from "./types";

export const zh: Dictionary = {
  meta: {
    title: "starseam — 星,長在甲板相接之處",
    description:
      "星兜為型:板疊板、以星鉚之。A shadcn registry on a lacquer ground, with structural rivets and first-class Traditional Chinese typography.",
  },
  header: {
    nav: [
      { id: "index", label: "索引" },
      { id: "palette", label: "配色" },
      { id: "surfaces", label: "板面" },
      { id: "instruments", label: "儀表" },
      { id: "controls", label: "控制項" },
      { id: "overlays", label: "浮層" },
      { id: "structure", label: "結構" },
      { id: "decisions", label: "裁決" },
      { id: "install", label: "安裝" },
    ],
    commandK: { placeholder: "搜尋元件或分區…", empty: "沒有符合的項目。", aria: "快速跳轉" },
    navAria: "區塊導覽",
    mode: { auto: "自動", console: "夜勤", report: "日勤" },
    modeAria: "色彩模式",
    langAria: "語言",
  },
  hero: {
    tagline: (
      <>
        星兜為型:數十片鐵板拼成一頂鉢,固定板片的鉚釘刻意不磨平、突出成點——
        <span lang="ja" className="text-[var(--ss-text)]">
          那些鉚釘的名字就叫「星」
        </span>
        。古人望向鉢頂,見密佈的鉚釘宛如繁星滿天;於是兜上的星與天上的星,從此是同一個字。
        板疊板、以星鉚之,本身就是縱深防禦。
      </>
    ),
  },
  stats: [
    { label: "ITEMS", value: "50" },
    { label: "MODES", value: "2" },
    { label: "SHADOWS", value: "0" },
    { label: "STATUS", value: "LIVE", state: "live" },
  ],
  readings: {
    label: "THREE READINGS",
    title: "一個記號,三種讀法",
    cards: [
      {
        en: "PLAN OF A HELMET",
        title: "兜的俯視圖",
        body: "板片自頂端的八幡座放射而出,鉚釘沿接縫排列。這是真實的甲冑構造。",
      },
      {
        en: "STAR CHART",
        title: "星圖",
        body: "同一張圖,把鉚釘讀成星、接縫讀成星座連線。連星成座,就是一張天圖。",
      },
      {
        en: "PPI SCOPE",
        title: "雷達幕",
        body: "同心圈、方位線、掃描扇區——夜裡盯著天空的那台儀器。",
      },
    ],
  },
  componentIndex: {
    label: "INDEX",
    title: "索引",
    intro: "五十件原件,按分區排列。點名字直達那一片板。",
  },
  palette: {
    label: "PALETTE",
    title: "配色",
    intro:
      "十四個 token,兩種材質:夜勤是漆下的光,日勤是紙上的顏料。色票隨當前模式渲染;兩組十六進位值都列在票上。命名沿用傳統色,且只在名實相符時使用。",
    consoleLabel: "console",
    reportLabel: "report",
    roles: {
      ground: "底。黒漆的地",
      plate1: "板・第一階",
      plate2: "板・第二階",
      plate3: "板・最高階",
      seam: "接縫髮絲線",
      seamStrong: "接縫・加重",
      rivet: "鉚釘;選取狀態",
      rivetQuiet: "鉚釘・靜",
      text: "本文",
      text2: "次要文字",
      text3: "儀表標籤",
      live: "存活訊號與焦點,僅此而已",
      warn: "需要注意",
      crit: "現在就要處理",
    },
  },
  surfaces: {
    label: "SURFACES",
    title: "板面",
    intro: "層級只有兩種合法表達:填色深淺,或實體交疊。沒有陰影。",
    plate: {
      note: "三種切法:flush 與底同面、raised 高一階、float 最高階。",
      flush: "與底同面",
      raised: "高一階",
      float: "最高階",
    },
    lames: {
      note: "一片壓一片,接縫可見——甲冑的板,就是這樣疊的。交疊是署名手法,保留給英雄區與名片。",
      cyTitle: "鉢",
      cyBody: "頂上的碗。數十片鐵板自八幡座放射鉚合,星沿著每一道接縫。",
      cyLive: "展示中",
      assetsLabel: "PLATES",
      exposedLabel: "MISSING",
      merakTitle: "眼庇",
      merakBody: "前庇。擋正午的光,也擋迎面的刃。",
      aspTitle: "錣",
      aspBody: "垂下的頸甲,五段板以縅緒連綴,隨頸而動。",
    },
    seam: {
      note: "同一片板上的劃線,純裝飾髮絲線;分組資訊由標題結構承載,不依賴這條線。",
      rows: ["分節之間", "清單項目之間", "導覽與內容的交界"],
    },
    alert: {
      note: "訊息板,左緣一道嚴重度色的加重接縫。顏色永遠不單獨傳達——標題自己把話說完。",
      title: "亂紀元,觀測暫停",
      body: "三日的軌道不可預測,今夜排程封存,待恆紀元再啟。",
      critTitle: "智子干擾",
      critBody: "對撞機讀數失真,基礎物理暫不可信——切換至目視觀測。",
    },
    skeleton: {
      note: "佔位板。不閃爍、不脈動——系統唯一的循環動畫屬於 crit。安靜地等,是誠實的等。",
    },
  },
  instruments: {
    label: "INSTRUMENTS",
    title: "儀表",
    intro: "監聽站的儀表:刻度、讀數、狀態點。顏色即嚴重度——沒有狀態的東西就是中性的,那才是常態。宇宙大部分時間是安靜的,儀表也該是。",
    mark: { note: "同一枚記號:板數、圈數、主鉚釘的疏密,都由使用端決定。" },
    labelSpec: {
      note: "儀表面板上的刻度。等寬、全大寫、0.20em 字距。",
      samples: ["TARGET SOURCE", "FREQUENCY", "LAST SWEEP"],
    },
    value: {
      note: "讀數。狀態即嚴重度,不是裝飾——不得因為「這裡需要一點顏色」就給它一個狀態。",
      rows: [
        { label: "SIGNALS", value: "1,379", state: "nominal" },
        { label: "FLICKER", value: "17", state: "warn" },
        { label: "ECHO", value: "1", state: "crit" },
      ],
    },
    statusDot: {
      note: "一顆鉚釘代表一個狀態,永遠同時附文字。只有 crit 會脈動——系統中唯一允許的循環動畫。",
      rows: [
        { state: "nominal", label: "恆紀元" },
        { state: "live", label: "監聽中" },
        { state: "warn", label: "亂紀元" },
        { state: "crit", label: "鎖死" },
      ],
    },
    statBand: {
      note: "帶狀儀表列,鉚釘沿分隔線排列——星只長在接縫上。",
      stats: [
        { label: "SWEEPS", value: "148" },
        { label: "QUEUE", value: "3" },
        { label: "FLICKER", value: "1", state: "warn" },
      ],
    },
    codeTag: {
      note: "行內代碼與版本標籤。",
      samples: ["theme", "v0.4.0", "MIT"],
    },
    modeSwitch: {
      note: "三態:自動把選擇交還系統。整頁只有一個真值,這顆與頁首那顆永遠同步。",
    },
    badge: {
      note: "戳印式狀態籤:髮絲框、不填色。有色的徽章是對狀態的斷言,不是裝飾。",
      rows: [
        { state: "nominal", label: "待聽" },
        { state: "live", label: "監聽中" },
        { state: "warn", label: "亂紀元" },
        { state: "crit", label: "鎖死" },
      ],
    },
    kbd: { note: "鍵帽:一顆按鍵大小的凸起板,用填色與下緣加重接縫表達,沒有陰影。" },
    avatar: { note: "身分板:方形、2px 圓角、髮絲接縫;備援字樣是儀表刻字,不是粉彩圓盤。" },
    progress: {
      note: "確定值的讀數,鉚釘鋼填色。沒有不定態掃描——無盡的循環只屬於 crit;長度未知就用文字說。",
      label: "SWEEP 64% · α CEN",
    },
  },
  controls: {
    label: "CONTROLS",
    title: "控制項",
    intro: (
      <>
        選取狀態是<b className="font-medium text-[var(--ss-text)]">銀鼠</b>而非瑠璃——
        被勾選不是一種嚴重度,而藍色必須稀有到還有意義。瑠璃留給焦點,
        而任何時刻只有一個東西被聚焦。
      </>
    ),
    button: {
      note: "quiet 是常態;live 花掉畫面上唯一的藍,一個畫面至多一顆;crit 只給毀滅性動作,且永遠附文字;ghost 是無框的靜音鈕。四種尺寸,含方形圖示鈕。",
      quiet: "Read decisions",
      live: "Get started",
      disabled: "Disabled",
      crit: "Delete run",
      ghost: "Details",
    },
    buttonGroup: {
      note: "數顆按鈕鉚成一條:一圈髮絲外框,成員之間是接縫——邊界屬於群組,不屬於各自的鈕。",
      run: "監聽",
      pause: "暫停",
      seal: "封存",
    },
    scenario: {
      title: "情境:監聽任務",
      note: "欄位自己把標籤、提示與錯誤接到控制項上——使用端一行函式都不用寫。",
      domainLabel: "TARGET SOURCE",
      domainHint: "訊號源或星表編號",
      domainPlaceholder: "半人馬座 α",
      profileLabel: "LISTENING MODE",
      profilePlaceholder: "選擇監聽模式",
      profiles: [
        { value: "passive", label: "被動 — 全頻掃描" },
        { value: "directed", label: "定向 — 單源追蹤" },
        { value: "transmit", label: "發射 — 需要授權" },
      ],
      notifyLabel: "NOTIFY ADDRESS",
      notifyError: "這不是一個有效的信箱位址",
      noteLabel: "LISTENING NOTE",
      notePlaceholder: "太陽活動、亂紀元預測與注意事項…",
    },
    toggles: {
      note: "打勾的方塊是一顆被釘進去的鉚釘,開啟的滑鈕也是。",
      checkbox: "納入外圍頻段",
      checkboxLocked: "已鎖定的訊號源",
      switch: "排程每夜執行",
    },
    copy: {
      note: "把值放上剪貼簿。確認訊息是一顆鉚釘加標籤替換——完成的動作是選取語彙,不是嚴重度。本頁每條安裝指令旁都有一顆。",
      sample: "RA 14h 39m 36s · Dec −60° 50′",
    },
    radio: {
      note: "被選的選項中心釘進一顆鉚釘。選取是銀鼠,瑠璃只以焦點環出現。",
      legend: "LISTENING CADENCE",
      options: [
        { value: "nightly", label: "每夜" },
        { value: "weekly", label: "每週" },
        { value: "event", label: "僅特異訊號" },
      ],
    },
    slider: {
      note: "沿著接縫拖動的設定值:軌是髮絲槽,已填範圍與滑鈕是鉚釘鋼。",
      label: "GAIN",
    },
    toggle: {
      note: "壓下狀態的按鈕。壓下是鉚釘加深填,不是藍。",
      label: "RAW FRAME",
    },
    combobox: {
      note: "帶過濾行的選單。選項是純資料,選好的值自己跟著表單送出。",
      label: "ASSIGN WATCH",
      placeholder: "指派監聽崗…",
      searchPlaceholder: "過濾…",
      empty: "沒有符合的崗位。",
      options: [
        { value: "1379", label: "1379 號崗" },
        { value: "1380", label: "1380 號崗" },
        { value: "redcoast", label: "紅岸值班" },
        { value: "duty", label: "輪替" },
      ],
    },
    datePicker: {
      note: "浮層裡的月曆,選好的日期自己跟著表單送出。被選的那天,是一顆釘進去的鉚釘。",
      label: "STABLE ERA WINDOW",
    },
    otp: {
      note: "一板一碼。作用中的格子以瑠璃描邊——因為它持有焦點,那是藍唯一合法的家。游標是靜止的短棒:閃爍是循環,循環只屬於 crit。",
      label: "BASE ACCESS CODE",
    },
  },
  overlays: {
    label: "OVERLAYS",
    title: "浮層",
    intro: "浮層怎麼進、怎麼出,由佈景統一決定——元件不得自己發明進場方式。",
    dialog: {
      note: "置中浮層,漆幕壓底。焦點留在板內,Esc 關閉,關上之後回到來處。",
      trigger: "Open dialog",
      title: "確認刪除監聽任務",
      description: "此動作無法復原。",
      body: "任務刪除後,今夜的排程會一併停止,但既有的訊號紀錄會保留。",
      cancel: "取消",
      confirm: "刪除",
    },
    sheet: {
      note: "自邊緣抽出的側板。它用滑入而非淡入——原地出現的板會被讀成 dialog。",
      trigger: "Open sheet",
      title: "監聽任務詳情",
      description: "定向 — 單源追蹤",
      body: "目標半人馬座 α,4.22 光年。一句話的往返要 8.6 年——按下發射之前,先想清楚。",
      close: "關閉",
    },
    dropdown: {
      note: "選中的列旁出現一顆鉚釘;毀滅性動作以緋標示並永遠附文字。",
      trigger: "Actions",
      groupLabel: "LISTEN",
      run: "立即監聽",
      exportReport: "匯出訊號紀錄",
      destructive: "刪除任務",
    },
    alertDialog: {
      note: "dialog 的嚴格版:點外面不會關,必須明確回答;Esc 視同取消,鍵盤使用者永遠有出口。",
      trigger: "回覆訊號",
      title: "確定要回覆這則訊號?",
      description: "對方將在 4.2 年後收到。",
      body: "同一則警告重複了三次:不要回答。回覆等同於暴露自己的座標。",
      cancel: "不要回答",
      confirm: "回覆",
    },
    popover: {
      note: "貼著觸發元素浮起的小板,最亮的一階、髮絲框、無陰影。",
      trigger: "恆紀元窗口",
      title: "恆紀元窗口",
      body: "未來 72 小時預測為恆紀元;三日連珠機率低於 1%,可安排長時間監聽。",
    },
    tooltip: {
      note: "儀表註記:hover 或聚焦時出現,無箭頭——板不會收束成泡泡。",
      trigger: "ly?",
      tip: "光年 — 光走一年的距離;半人馬座 α 在 4.22 光年外",
    },
    hoverCard: {
      note: "hover 展開的卷宗板:popover 的唯讀親戚,預覽一個參照而不跳轉。",
      trigger: "南門二",
      title: "南門二 · 半人馬座 α",
      body: "三合星,4.22 光年。三顆太陽跳著不可預測的舞——亂紀元的源頭,也是離我們最近的鄰居。",
    },
    contextMenu: {
      note: "在指標處召出的選單,右鍵(或長按)觸發。表面規則與 dropdown 完全相同。",
      area: "在這個訊號源上按右鍵",
      groupLabel: "SOURCE",
      run: "立即監聽",
      exportReport: "複製座標",
      destructive: "永久靜默此源",
    },
    menubar: {
      note: "監聽站選單列:一片帶框的板,選單以 dropdown 板落下。開啟中的觸發鈕取較深的填色。",
      scanMenu: "Listen",
      viewMenu: "View",
      run: "立即監聽",
      exportReport: "匯出訊號紀錄",
      destructive: "刪除任務",
      modeConsole: "夜勤模式",
      modeReport: "日勤模式",
    },
    command: {
      note: "監聽站調色盤:輸入、過濾、執行。查詢行與結果之間是一道真正的接縫;高亮列是鉚釘。",
      inputPlaceholder: "輸入指令或搜尋…",
      empty: "沒有符合的指令。",
      groupLabel: "LISTEN",
      items: ["開始全頻監聽", "校準紅岸天線", "匯出本夜訊號紀錄", "開啟監聽日誌"],
    },
    toast: {
      note: "自邊緣滑入的訊息板,嚴重度是一道左緣色縫加文字本身——與 alert 同一套語言。",
      neutralButton: "Notify",
      critButton: "Notify crit",
      neutralTitle: "訊號紀錄已匯出",
      neutralBody: "alpha-cen.json 已寫入 out/。",
      critTitle: "收到回波",
      critBody: "1420 MHz,同一段訊號重複三次——解碼進行中。",
    },
  },
  structure: {
    label: "STRUCTURE",
    title: "結構",
    intro: "資料的骨架:分頁與表格。列與列之間是髮絲接縫,不是斑馬紋。",
    tabs: {
      note: "分頁的選中指示是一段鉚釘線;方向鍵移動、Home/End 跳至首末。",
      assets: "訊號源",
      findings: "警報",
      history: "日誌",
      findingsBody: "本夜尚無特異訊號。宇宙很安靜——也許太安靜了。",
      historyBody: "上次監聽:2 小時前,恆紀元,萬里無雲。",
      host: "SOURCE",
      service: "DIST",
      exposure: "STATE",
      rows: [
        { host: "織女一 · α Lyr", service: "25 ly", state: "nominal", label: "恆定" },
        { host: "參宿四 · α Ori", service: "548 ly", state: "warn", label: "變光" },
        { host: "南門二 · α Cen", service: "4.22 ly", state: "crit", label: "回波" },
      ],
    },
    accordion: {
      note: "疊板沿接縫展開;開啟的那件持有一顆鉚釘。面板現身不滑動。",
      items: [
        { title: "被動監聽收集什麼?", body: "全頻段的背景掃描:氫線附近的窄帶訊號、脈衝星計時、宇宙背景的異常閃爍。不發射任何東西。" },
        { title: "為什麼發射需要授權?", body: "黑暗森林的第一課:暴露座標的風險由全體承擔。一次發射,不能撤回,也不能道歉。" },
        { title: "訊號紀錄保留多久?", body: "監聽紀錄保留 180 天,之後彙整歸檔。被標記為回波的紀錄永久保存。" },
      ],
    },
    collapsible: {
      note: "沿接縫開闔的單一段落——accordion 的獨生版。",
      trigger: "RAW READOUT",
      body: "freq 1420.405 MHz · gain 120 · SNR 1.2 · drift +0.3 Hz/s · era: stable",
    },
    breadcrumb: {
      note: "結構中的路徑。每個節點交界都是真實邊界,所以分隔符是鉚釘——星只長在接縫上。",
      segments: ["星圖", "半人馬座"],
      current: "南門二",
    },
    pagination: { note: "頁碼是純連結;當前頁是一顆鉚釘加全強度文字,不是藍膠囊。" },
    scrollArea: {
      note: "帶儀表捲軸的視窗:髮絲槽、鋼滑塊,沒有浮動膠囊。",
      lines: [
        "22:00:01 全頻監聽開始 · 指向 α Cen",
        "22:04:12 1420 MHz 峰值 ×3 · 記錄",
        "22:31:07 天線鎖定 · 漂移 +0.3 Hz/s",
        "23:12:45 宇宙背景正常 · 續行",
        "00:02:18 回波?SNR 1.2 · 複核中",
        "01:44:52 紀錄寫入 · out/alpha-cen-0818.json",
        "03:00:00 監聽結束 · 封存",
      ],
    },
  },
  decisions: {
    label: "DECISIONS",
    title: "裁決",
    intro: "顏色與元件會改,裁決不會。新元件動工前,先確認它沒有違反下面任何一條。",
    rulings: [
      ["01", "顏色即嚴重度", "在觀測台裡,顏色從來不是裝飾。"],
      ["02", "瑠璃必須稀有", "一個畫面至多一到兩次。鉚釘是銀鼠,不是藍的。"],
      ["03", "星只長在接縫上", "拿掉星,若版面關係不變,那顆星就是假的。"],
      ["04", "深度不靠陰影", "沒有 box-shadow、沒有毛玻璃、沒有輝光。"],
      ["05", "兩種模式是兩種材質", "夜是漆下的光,日是紙上的顏料。"],
      ["06", "字體分語系宣告", "骨 直 海 令 在繁中與日文不是同一個字形。"],
      ["07", "日文只用於甲冑術語", "典故要深,表面要誠實。"],
      ["08", "靜止是預設", "會動的東西代表出事了。"],
      ["09", "漢字對齊全形格", "拉丁與數字對齊半形格。"],
      ["10", "選取不得使用瑠璃", "被勾選不是嚴重度。選取一律銀鼠,一顆釘進去的鉚釘。"],
      ["11", "公開 API 不收函式", "元件接收元素與資料,注入而非回呼——使用端不必變成 client。"],
    ],
  },
  install: {
    label: "INSTALL",
    title: "安裝",
    intro: undefined,
    body: (
      <>
        每個元件都會自動帶入 <CodeTag>theme</CodeTag> 這層 token。
        需要 Tailwind CSS v4 與已初始化的 shadcn 專案。
        上面每個元件旁都附了自己的安裝指令。
      </>
    ),
    namespaceNote: (
      <>
        也可以在 <CodeTag>components.json</CodeTag> 註冊 <CodeTag>@starseam</CodeTag>{" "}
        命名空間,之後用短名安裝:
      </>
    ),
  },
  footer: {
    license: (
      <>
        MIT ©{" "}
        <a
          href="https://github.com/astroicers"
          className="underline underline-offset-4 hover:text-[var(--ss-text-2)]"
        >
          astroicers
        </a>
      </>
    ),
  },
};
