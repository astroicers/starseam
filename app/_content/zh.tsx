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
      { id: "palette", label: "配色" },
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
    { label: "ITEMS", value: "49" },
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
    alert: {
      note: "訊息板,左緣一道嚴重度色的加重接縫。顏色永遠不單獨傳達——標題自己把話說完。",
      title: "排程已暫停",
      body: "掃描佇列超過三件,新任務將延後至下一個時窗。",
      critTitle: "憑證即將到期",
      critBody: "vpn.example.gov.tw 的憑證將於 3 天後到期,請立即更換。",
    },
    skeleton: {
      note: "佔位板。不閃爍、不脈動——系統唯一的循環動畫屬於 crit。安靜地等,是誠實的等。",
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
    badge: {
      note: "戳印式狀態籤:髮絲框、不填色。有色的徽章是對狀態的斷言,不是裝飾。",
      rows: [
        { state: "nominal", label: "queued" },
        { state: "live", label: "scanning" },
        { state: "warn", label: "degraded" },
        { state: "crit", label: "breached" },
      ],
    },
    kbd: { note: "鍵帽:一顆按鍵大小的凸起板,用填色與下緣加重接縫表達,沒有陰影。" },
    avatar: { note: "身分板:方形、2px 圓角、髮絲接縫;備援字樣是儀表刻字,不是粉彩圓盤。" },
    progress: {
      note: "確定值的讀數,鉚釘鋼填色。沒有不定態掃描——無盡的循環只屬於 crit;長度未知就用文字說。",
      label: "SCAN 64%",
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
    copy: {
      note: "把值放上剪貼簿。確認訊息是一顆鉚釘加標籤替換——完成的動作是選取語彙,不是嚴重度。本頁每條安裝指令旁都有一顆。",
      sample: "ssh soc@ops.example.gov.tw",
    },
    radio: {
      note: "被選的選項中心釘進一顆鉚釘。選取是銀鼠,瑠璃只以焦點環出現。",
      legend: "REPORT CADENCE",
      options: [
        { value: "daily", label: "每日" },
        { value: "weekly", label: "每週" },
        { value: "incident", label: "僅事件觸發" },
      ],
    },
    slider: {
      note: "沿著接縫拖動的設定值:軌是髮絲槽,已填範圍與滑鈕是鉚釘鋼。",
      label: "SCAN INTENSITY",
    },
    toggle: {
      note: "壓下狀態的按鈕。壓下是鉚釘加深填,不是藍。",
      label: "RAW VIEW",
    },
    combobox: {
      note: "帶過濾行的選單。選項是資料、值走隱藏 input 進表單——公開 API 不收函式。",
      label: "ASSIGN ANALYST",
      placeholder: "指派分析師…",
      searchPlaceholder: "過濾…",
      empty: "沒有符合的人。",
      options: [
        { value: "chen", label: "陳 O 安" },
        { value: "lin", label: "林 O 蓉" },
        { value: "wang", label: "王 O 廷" },
        { value: "duty", label: "值班輪替" },
      ],
    },
    datePicker: {
      note: "浮層裡的月曆,日期落進隱藏 input——不需要回呼。被選的那天是一顆釘進去的鉚釘。",
      label: "ENGAGEMENT START",
    },
    otp: {
      note: "一板一碼。作用中的格子以瑠璃描邊——因為它持有焦點,那是藍唯一合法的家。游標是靜止的短棒:閃爍是循環,循環只屬於 crit。",
      label: "VERIFICATION CODE",
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
    alertDialog: {
      note: "dialog 的嚴格版:點外面不會關,必須明確回答;Esc 視同取消,鍵盤使用者永遠有出口。",
      trigger: "Revoke access",
      title: "撤銷這把 API 金鑰?",
      description: "使用這把金鑰的整合將立即失效。",
      body: "撤銷後無法復原,只能重新簽發一把新的金鑰。",
      cancel: "取消",
      confirm: "撤銷",
    },
    popover: {
      note: "貼著觸發元素浮起的小板,最亮的一階、髮絲框、無陰影。",
      trigger: "Scan window",
      title: "掃描時窗",
      body: "每日 02:00–05:00(UTC+8),避開業務尖峰。",
    },
    tooltip: {
      note: "儀表註記:hover 或聚焦時出現,無箭頭——板不會收束成泡泡。",
      trigger: "CT?",
      tip: "Certificate Transparency — 憑證透明度日誌",
    },
    hoverCard: {
      note: "hover 展開的卷宗板:popover 的唯讀親戚,預覽一個參照而不跳轉。",
      trigger: "@astroicers",
      title: "astroicers",
      body: "starseam 的作者。開源外部攻擊面管理、零信任、AI 治理框架。",
    },
    contextMenu: {
      note: "在指標處召出的選單,右鍵(或長按)觸發。表面規則與 dropdown 完全相同。",
      area: "在這個區域按右鍵",
      groupLabel: "ASSET",
      run: "立即重掃",
      exportReport: "複製主機名",
      destructive: "自資產清單移除",
    },
    menubar: {
      note: "主控台選單列:一片帶框的板,選單以 dropdown 板落下。開啟中的觸發鈕取較深的填色。",
      scanMenu: "Scan",
      viewMenu: "View",
      run: "立即執行",
      exportReport: "匯出報告",
      destructive: "刪除剖面",
      modeConsole: "夜勤模式",
      modeReport: "日勤模式",
    },
    command: {
      note: "主控台調色盤:輸入、過濾、執行。查詢行與結果之間是一道真正的接縫;高亮列是鉚釘。",
      inputPlaceholder: "輸入指令或搜尋…",
      empty: "沒有符合的指令。",
      groupLabel: "SCAN",
      items: ["立即執行完整掃描", "重新驗證憑證鏈", "匯出本週報告", "開啟稽核日誌"],
    },
    toast: {
      note: "自邊緣滑入的訊息板,嚴重度是一道左緣色縫加文字本身——與 alert 同一套語言。",
      neutralButton: "Notify",
      critButton: "Notify crit",
      neutralTitle: "報告已匯出",
      neutralBody: "weekly-report.pdf 已寫入 out/。",
      critTitle: "掃描失敗",
      critBody: "目標拒絕連線,已重試 3 次。",
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
    accordion: {
      note: "疊板沿接縫展開;開啟的那件持有一顆鉚釘。面板現身不滑動。",
      items: [
        { title: "被動掃描收集什麼?", body: "DNS 紀錄與憑證透明度日誌,不對目標發出任何封包。" },
        { title: "主動探測會被察覺嗎?", body: "會。Full 剖面包含 HTTP 指紋與埠掃描,請確認授權時窗。" },
        { title: "歷史結果保留多久?", body: "掃描結果保留 180 天,之後彙整為月報後歸檔。" },
      ],
    },
    collapsible: {
      note: "沿接縫開闔的單一段落——accordion 的獨生版。",
      trigger: "RAW RESPONSE",
      body: "HTTP/2 200 · server: nginx · strict-transport-security: max-age=63072000 · x-frame-options: DENY",
    },
    breadcrumb: {
      note: "結構中的路徑。每個節點交界都是真實邊界,所以分隔符是鉚釘——星只長在接縫上。",
      segments: ["資產", "example.gov.tw"],
      current: "vpn.example.gov.tw",
    },
    pagination: { note: "頁碼是純連結;當前頁是一顆鉚釘加全強度文字,不是藍膠囊。" },
    scrollArea: {
      note: "帶儀表捲軸的視窗:髮絲槽、鋼滑塊,沒有浮動膠囊。",
      lines: [
        "02:00:01 scan start · profile=passive",
        "02:00:04 dns AXFR refused (expected)",
        "02:00:12 ct-log 214 certificates indexed",
        "02:01:33 new subdomain: staging.example.gov.tw",
        "02:02:41 tls chain verified · 61 hosts",
        "02:04:10 report written · out/scan-0818.json",
        "02:04:11 scan complete · exit 0",
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
