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
      { id: "surfaces", label: "板面" },
      { id: "instruments", label: "儀表" },
      { id: "controls", label: "控制項" },
      { id: "overlays", label: "浮層" },
      { id: "structure", label: "結構" },
      { id: "decisions", label: "裁決" },
      { id: "install", label: "安裝" },
    ],
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
        。板疊板、以星鉚之,本身就是縱深防禦。
      </>
    ),
  },
  stats: [
    { label: "ITEMS", value: "22" },
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
        body: "同一張圖,把鉚釘讀成星、接縫讀成星座連線。攻擊路徑就是連星成座。",
      },
      {
        en: "PPI SCOPE",
        title: "雷達幕",
        body: "同心圈、方位線、掃描扇區——監控室裡的那台儀器。",
      },
    ],
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
      note: "一片壓一片,接縫可見。交疊是署名手法,保留給英雄區與名片。",
      cyTitle: "CyPulse",
      cyBody: "開源外部攻擊面管理平台",
      cyLive: "live",
      assetsLabel: "ASSETS",
      exposedLabel: "EXPOSED",
      merakTitle: "Merak",
      merakBody: "零信任平台 · OpenZiti + Keycloak",
      aspTitle: "ASP",
      aspBody: "AI-SOP-Protocol 治理框架",
    },
    seam: {
      note: "同一片板上的劃線,純裝飾髮絲線;分組資訊由標題結構承載,不依賴這條線。",
      rows: ["分節之間", "清單項目之間", "導覽與內容的交界"],
    },
  },
  instruments: {
    label: "INSTRUMENTS",
    title: "儀表",
    intro: "監控室的儀表:刻度、讀數、狀態點。顏色即嚴重度——沒有狀態的東西就是中性的,那才是常態。",
    mark: { note: "參數化的星兜俯視圖:plates 是板數,rings 是同心圈,majorEvery 決定主鉚釘的間距。" },
    labelSpec: {
      note: "儀表面板上的刻度。等寬、全大寫、0.20em 字距。",
      samples: ["TARGET DOMAIN", "EXPOSURE", "LAST SCAN"],
    },
    value: {
      note: "讀數。state 是嚴重度,不是裝飾——不得因為「這裡需要一點顏色」而傳入。",
      rows: [
        { label: "ASSETS", value: "1,284", state: "nominal" },
        { label: "EXPOSED", value: "17", state: "warn" },
        { label: "BREACHED", value: "3", state: "crit" },
      ],
    },
    statusDot: {
      note: "一顆鉚釘代表一個狀態,永遠同時附文字。只有 crit 會脈動——系統中唯一允許的循環動畫。",
      rows: [
        { state: "nominal", label: "nominal" },
        { state: "live", label: "live" },
        { state: "warn", label: "review" },
        { state: "crit", label: "critical" },
      ],
    },
    statBand: {
      note: "帶狀儀表列,鉚釘沿分隔線排列——星只長在接縫上。",
      stats: [
        { label: "SCANS", value: "148" },
        { label: "QUEUE", value: "3" },
        { label: "FAILED", value: "1", state: "warn" },
      ],
    },
    codeTag: {
      note: "行內代碼與版本標籤。",
      samples: ["theme", "v0.3.0", "MIT"],
    },
    modeSwitch: {
      note: "三態:自動把選擇交還系統。文件元素是唯一真值——這顆與 header 那顆永遠同步。",
    },
  },
  controls: {
    label: "CONTROLS",
    title: "控制項",
    intro: (
      <>
        選取狀態是<b className="font-medium text-[var(--ss-text)]">鋼銀</b>而非瑠璃——
        被勾選不是一種嚴重度,而藍色必須稀有到還有意義。瑠璃留給焦點,
        而任何時刻只有一個東西被聚焦。
      </>
    ),
    button: {
      note: "quiet 是常態;live 花掉畫面上唯一的藍,一個畫面至多一顆。",
      quiet: "Read decisions",
      live: "Get started",
      disabled: "Disabled",
    },
    scenario: {
      title: "情境:掃描剖面",
      note: "field 以元素子節點接收控制項,注入 id 與 aria-describedby——公開 API 不收函式。",
      domainLabel: "TARGET DOMAIN",
      domainHint: "單一網域,不含通訊協定",
      domainPlaceholder: "example.gov.tw",
      profileLabel: "SCAN PROFILE",
      profilePlaceholder: "選擇掃描剖面",
      profiles: [
        { value: "passive", label: "Passive — DNS / CT only" },
        { value: "light", label: "Light — HTTP fingerprint" },
        { value: "full", label: "Full — active probing" },
      ],
      notifyLabel: "NOTIFY ADDRESS",
      notifyError: "這不是一個有效的信箱位址",
      noteLabel: "ENGAGEMENT NOTE",
      notePlaceholder: "授權範圍與時窗…",
    },
    toggles: {
      note: "打勾的方塊是一顆被釘進去的鉚釘,開啟的滑鈕也是。",
      checkbox: "納入子網域",
      checkboxLocked: "已鎖定的範圍",
      switch: "排程每日執行",
    },
  },
  overlays: {
    label: "OVERLAYS",
    title: "浮層",
    intro: "浮層的進出動態定義在 theme 的 data-slot 規則裡——元件不得自己發明進場方式。",
    dialog: {
      note: "置中浮層,漆幕壓底。焦點陷阱、Esc 關閉、關閉後焦點歸還觸發元素。",
      trigger: "Open dialog",
      title: "確認刪除掃描剖面",
      description: "此動作無法復原。",
      body: "剖面刪除後,既有的排程任務會一併停止,但歷史掃描結果會保留。",
      cancel: "取消",
      confirm: "刪除",
    },
    sheet: {
      note: "自邊緣抽出的側板。它用滑入而非淡入——原地出現的板會被讀成 dialog。",
      trigger: "Open sheet",
      title: "掃描剖面詳情",
      description: "Passive — DNS / CT only",
      body: "被動剖面只查詢公開來源:DNS 紀錄與憑證透明度日誌,不對目標發出任何封包。",
      close: "關閉",
    },
    dropdown: {
      note: "選中的列旁出現一顆鉚釘;毀滅性動作以緋標示並永遠附文字。",
      trigger: "Actions",
      groupLabel: "SCAN",
      run: "立即執行",
      exportReport: "匯出報告",
      destructive: "刪除剖面",
    },
  },
  structure: {
    label: "STRUCTURE",
    title: "結構",
    intro: "資料的骨架:分頁與表格。列與列之間是髮絲接縫,不是斑馬紋。",
    tabs: {
      note: "分頁的選中指示是一段鉚釘線;方向鍵移動、Home/End 跳至首末。",
      assets: "Assets",
      findings: "Findings",
      history: "History",
      findingsBody: "尚無待處理的發現。",
      historyBody: "最近一次掃描:2 小時前。",
      host: "HOST",
      service: "SERVICE",
      exposure: "EXPOSURE",
      rows: [
        { host: "mail.example.gov.tw", service: "smtp/25", state: "warn", label: "review" },
        { host: "vpn.example.gov.tw", service: "https/443", state: "crit", label: "critical" },
        { host: "www.example.gov.tw", service: "https/443", state: "nominal", label: "nominal" },
      ],
    },
  },
  decisions: {
    label: "DECISIONS",
    title: "裁決",
    intro: "顏色與元件會改,裁決不會。新元件動工前,先確認它沒有違反下面任何一條。",
    rulings: [
      ["01", "顏色即嚴重度", "在監控室裡,顏色從來不是裝飾。"],
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
