import { CodeTag } from "@/components/ui/code-tag";
import type { Dictionary } from "./types";

export const ja: Dictionary = {
  meta: {
    title: "starseam — きらめく星々は、板のぶつかり合う場所に生まれる",
    description:
      "星兜を型とする:大地は衝突のなかで折り重なり、星空はその不朽の封印。漆黒の地に構造の鋲、CJK 組版を第一級で扱う shadcn レジストリ。",
  },
  header: {
    nav: [
      { id: "index", label: "索引" },
      { id: "palette", label: "配色" },
      { id: "surfaces", label: "板面" },
      { id: "instruments", label: "計器" },
      { id: "controls", label: "操作" },
      { id: "overlays", label: "浮層" },
      { id: "structure", label: "構造" },
      { id: "decisions", label: "裁定" },
      { id: "install", label: "導入" },
    ],
    commandK: { placeholder: "部品またはセクションを検索…", empty: "該当なし。", aria: "クイックジャンプ" },
    navAria: "セクション",
    mode: { auto: "自動", console: "夜勤", report: "日勤" },
    modeAria: "カラーモード",
    langAria: "言語",
  },
  hero: {
    tagline: (
      <>
        星兜を型とする:数十枚の鉄板を鉢に矧ぎ合わせ、板を留める鋲は
        あえて磨き残して点として立てる——
        <span className="text-[var(--ss-text)]">その鋲の名を「星」という</span>。
        鉢を覆う無数の鋲を、昔の人は満天の星に見立てた。兜の星と天の星は、
        それ以来ひとつの字である。大地は衝突のなかで折り重なり、星空はその不朽の封印——時間に抗う、長い防衛戦である。
      </>
    ),
  },
  stats: [
    { label: "ITEMS", value: "51" },
    { label: "MODES", value: "2" },
    { label: "SHADOWS", value: "0" },
    { label: "STATUS", value: "LIVE", state: "live" },
  ],
  readings: {
    label: "THREE READINGS",
    title: "ひとつの図に、三つの読み",
    cards: [
      {
        en: "PLAN OF A HELMET",
        title: "兜の平面図",
        body: "頂の八幡座から板が放射し、鋲が矧ぎ目に並ぶ。実在の甲冑の構造そのもの。",
      },
      {
        en: "STAR CHART",
        title: "星図",
        body: "同じ図を、鋲は星、矧ぎ目は星座線と読む。星を結べば、そこに天がある。",
      },
      {
        en: "PPI SCOPE",
        title: "レーダースコープ",
        body: "同心円、方位線、掃引扇形——夜空を見張るあの計器。",
      },
    ],
  },
  componentIndex: {
    label: "INDEX",
    intro: "五十一の部品を、区分ごとに並べた。名前を押せば、その板へまっすぐ届く。",
    title: "索引",
  },
  palette: {
    label: "PALETTE",
    title: "配色",
    intro:
      "十四のトークン、二つの質感:夜勤は漆の下の光、日勤は紙の上の顔料。色票は現在のモードで描画され、両モードの十六進値を票に記す。命名は伝統色に倣い、名が実に適う場合に限る。",
    consoleLabel: "console",
    reportLabel: "report",
    roles: {
      ground: "地。黒漆の地",
      plate1: "板・一段目",
      plate2: "板・二段目",
      plate3: "板・最上段",
      seam: "矧ぎ目の毛筋",
      seamStrong: "矧ぎ目・強",
      rivet: "鋲。選択状態",
      rivetQuiet: "鋲・静",
      text: "本文",
      text2: "二次テキスト",
      text3: "計器ラベル",
      live: "生存信号とフォーカス、それのみ",
      warn: "要注意",
      crit: "即時対応",
    },
  },
  surfaces: {
    label: "SURFACES",
    title: "板面",
    intro: "階層の表現は二つだけ:塗りの濃淡か、実体の重なり。影は使わない。",
    plate: {
      note: "三つの段:flush は地と同面、raised は一段上、float は最上段。",
      flush: "地と同面",
      raised: "一段上",
      float: "最上段",
    },
    lames: {
      note: "板の上に板を重ね、矧ぎ目を見せる——甲冑の札板の重ね方そのもの。重なりは署名の技法として、ヒーロー領域と名札にのみ許す。",
      cyTitle: "鉢",
      cyBody: "頂の椀。数十枚の板が八幡座から放射し、すべての矧ぎ目に星が並ぶ。",
      cyLive: "展示中",
      assetsLabel: "PLATES",
      exposedLabel: "MISSING",
      merakTitle: "眼庇",
      merakBody: "額の庇。真昼の光も、迎えの刃も受ける。",
      aspTitle: "錣",
      aspBody: "首を守る垂れ。五段の板を縅で綴じ、首の動きに従う。",
    },
    seam: {
      note: "同じ板に刻む筋。純粋な装飾の毛筋であり、区分の情報は見出し構造が担う。",
      rows: ["節と節のあいだ", "項目と項目のあいだ", "ナビと本文の境"],
    },
    alert: {
      note: "メッセージの板。左縁に重大度色の強い矧ぎ目を一本。色だけでは決して語らせない——結論は見出しが言葉で言う。",
      title: "乱紀元につき観測中断",
      body: "三つの太陽の軌道が読めない。今夜の予定は封印し、恒紀元を待つ。",
      critTitle: "智子による干渉",
      critBody: "加速器の読みが崩れている。基礎物理は当面信用できない——眼視観測に切り替えよ。",
    },
    skeleton: {
      note: "場所取りの板。きらめかず、脈打たない——系で唯一のループは crit のもの。静かに待つのが、正直な待ち方。",
    },
  },
  instruments: {
    label: "INSTRUMENTS",
    title: "計器",
    intro: "傍受局の計器:目盛、読み値、状態点。色は重大度——状態のないものは中立で、それが常態。宇宙はほとんどの時間、静かだ。計器盤もそうあるべきだ。",
    mark: { note: "同じ記号。板の数、円の数、主鋲の疎密は、使う側が決める。" },
    labelSpec: {
      note: "計器盤の目盛文字。等幅、大文字、字間 0.20em。",
      samples: ["TARGET SOURCE", "FREQUENCY", "LAST SWEEP"],
    },
    value: {
      note: "読み値。状態は重大度であって装飾ではない——「ここに色が欲しい」で状態を与えないこと。",
      rows: [
        { label: "SIGNALS", value: "1,379", state: "nominal" },
        { label: "FLICKER", value: "17", state: "warn" },
        { label: "ECHO", value: "1", state: "crit" },
      ],
    },
    statusDot: {
      note: "一粒の鋲がひとつの状態を表し、必ず文字を添える。脈打つのは crit だけ——系で唯一許されたループ。",
      rows: [
        { state: "nominal", label: "恒紀元" },
        { state: "live", label: "傍受中" },
        { state: "warn", label: "乱紀元" },
        { state: "crit", label: "ロック" },
      ],
    },
    statBand: {
      note: "帯状の計器列。仕切りに沿って鋲が並ぶ——星は矧ぎ目にしか宿らない。",
      stats: [
        { label: "SWEEPS", value: "148" },
        { label: "QUEUE", value: "3" },
        { label: "FLICKER", value: "1", state: "warn" },
      ],
    },
    codeTag: {
      note: "行内コードとバージョン札。",
      samples: ["theme", "v0.4.0", "MIT"],
    },
    modeSwitch: {
      note: "三値:「自動」は選択を系に返す。頁にひとつの真実——この一台とヘッダーの一台が食い違うことはない。",
    },
    badge: {
      note: "刻印の状態札:毛筋の枠、塗りなし。色付きの札は状態への断言であって、飾りではない。",
      rows: [
        { state: "nominal", label: "待受" },
        { state: "live", label: "傍受中" },
        { state: "warn", label: "乱紀元" },
        { state: "crit", label: "ロック" },
      ],
    },
    kbd: { note: "キーキャップ:一打鍵ぶんの小さな凸板。塗りと下縁の強い矧ぎ目で表し、影は使わない。" },
    avatar: { note: "身元の板:正方形、角丸 2px、毛筋の縁。フォールバックは計器の刻字であって、パステルの円盤ではない。" },
    progress: {
      note: "確定値の読み。鋲の鋼で塗る。不定形の掃引はない——果てのないループは crit だけのもの。長さが不明なら文字で言う。",
      label: "SWEEP 64% · α CEN",
    },
  },
  controls: {
    label: "CONTROLS",
    title: "操作",
    intro: (
      <>
        選択状態は<b className="font-medium text-[var(--ss-text)]">銀鼠</b>であって瑠璃ではない——
        選ばれていることは重大度ではなく、青は意味を保てるだけ稀でなければならない。
        瑠璃はフォーカスのためにある。フォーカスを持つものは、常にひとつ。
      </>
    ),
    button: {
      note: "quiet が常態。live は画面で唯一の青を使う——一画面に一つまで。crit は破壊的操作にのみ、必ず文字を添えて。ghost は枠なしの静かな一手。四つの寸法、正方形のアイコン鈕を含む。",
      quiet: "Read decisions",
      live: "Get started",
      disabled: "Disabled",
      crit: "Delete run",
      ghost: "Details",
    },
    buttonGroup: {
      note: "数個の鈕を一条に鋲留め:外枠は毛筋一周、部材の間は矧ぎ目——境界は群のもので、各々の鈕のものではない。",
      run: "傍受",
      pause: "一時停止",
      seal: "封印",
    },
    scenario: {
      title: "シナリオ:傍受ラン",
      note: "欄はラベルと補足と誤りを自分で部品につなぐ——使う側は関数を一行も書かない。",
      domainLabel: "TARGET SOURCE",
      domainHint: "信号源またはカタログ番号",
      domainPlaceholder: "ケンタウルス座 α",
      profileLabel: "LISTENING MODE",
      profilePlaceholder: "傍受モードを選択",
      profiles: [
        { value: "passive", label: "受動 — 全帯域走査" },
        { value: "directed", label: "指向 — 単一源追尾" },
        { value: "transmit", label: "送信 — 要認可" },
      ],
      notifyLabel: "NOTIFY ADDRESS",
      notifyError: "有効なメールアドレスではありません",
      noteLabel: "LISTENING NOTE",
      notePlaceholder: "太陽活動、乱紀元の予報、注意事項…",
    },
    toggles: {
      note: "チェックの入った箱は打ち込まれた鋲。入ったスイッチも同じ。",
      checkbox: "周辺帯域を含める",
      checkboxLocked: "ロック済みの信号源",
      switch: "毎夜実行",
    },
    copy: {
      note: "値をクリップボードへ。確認は鋲一粒とラベルの入れ替え——完了した動作は選択の語彙であり、重大度ではない。本頁の導入コマンドすべてに一つずつ付く。",
      sample: "RA 14h 39m 36s · Dec −60° 50′",
    },
    radio: {
      note: "選ばれた選択肢の中心に鋲が打たれる。選択は銀鼠、瑠璃はフォーカス環にのみ現れる。",
      legend: "LISTENING CADENCE",
      options: [
        { value: "nightly", label: "毎夜" },
        { value: "weekly", label: "毎週" },
        { value: "event", label: "異常信号のみ" },
      ],
    },
    slider: {
      note: "矧ぎ目に沿って引く設定値:溝は毛筋、充填域とつまみは鋲の鋼。",
      label: "GAIN",
    },
    toggle: {
      note: "押し込み状態のボタン。押されたら鋲と深い塗り——青ではない。",
      label: "RAW FRAME",
    },
    combobox: {
      note: "絞り込み行つきのセレクト。選択肢はただのデータ、選んだ値はそのままフォームと共に送られる。",
      label: "ASSIGN WATCH",
      placeholder: "傍受当番を割り当て…",
      searchPlaceholder: "絞り込み…",
      empty: "該当する当番がありません。",
      options: [
        { value: "1379", label: "1379 号哨" },
        { value: "1380", label: "1380 号哨" },
        { value: "redcoast", label: "紅岸当直" },
        { value: "duty", label: "輪番" },
      ],
    },
    datePicker: {
      note: "ポップオーバーの中の暦。選んだ日付はそのままフォームと共に送られる。選ばれた日は、打ち込まれた鋲。",
      label: "STABLE ERA WINDOW",
    },
    otp: {
      note: "一板一字。アクティブな枡は瑠璃で縁取る——フォーカスを持つから。青の唯一の正当な居場所である。キャレットは静止した棒:点滅はループであり、ループは crit のもの。",
      label: "BASE ACCESS CODE",
    },
  },
  overlays: {
    label: "OVERLAYS",
    title: "浮層",
    intro: "浮層の入りと出は、舞台がまとめて決める——部品が勝手に登場の仕方を発明してはならない。",
    dialog: {
      note: "中央の浮層、漆の幕を敷く。フォーカスは板の内に留まり、Esc で閉じ、閉じたら元の場所へ戻る。",
      trigger: "Open dialog",
      title: "この傍受ランを削除しますか",
      description: "この操作は取り消せません。",
      body: "削除すると今夜の予定は止まる。既に得た信号記録は残る。",
      cancel: "取消",
      confirm: "削除",
    },
    sheet: {
      note: "縁から引き出す側板。フェードではなくスライド——その場に現れる板は dialog に読めてしまう。",
      trigger: "Open sheet",
      title: "傍受ランの詳細",
      description: "指向 — 単一源追尾",
      body: "目標ケンタウルス座 α、4.22 光年。ひとことの往復に 8.6 年——送信を押す前に、よく考えること。",
      close: "閉じる",
    },
    dropdown: {
      note: "選択行の脇に鋲が現れる。破壊的操作は緋で示し、必ず文字を添える。",
      trigger: "Actions",
      groupLabel: "LISTEN",
      run: "今すぐ傍受",
      exportReport: "信号記録を書き出す",
      destructive: "ランを削除",
    },
    alertDialog: {
      note: "dialog の厳格版:外を押しても閉じない。明確な回答が要る。Esc は取消として扱い、キーボード利用者に出口を残す。",
      trigger: "信号に応答",
      title: "この信号に応答しますか",
      description: "相手に届くのは 4.2 年後です。",
      body: "同じ警告が三度届いている:応答するな。応答とは、自分の座標を差し出すことである。",
      cancel: "応答しない",
      confirm: "応答する",
    },
    popover: {
      note: "トリガーに寄り添って浮かぶ小板。最上段の塗り、毛筋の縁、影なし。",
      trigger: "恒紀元の窓",
      title: "恒紀元の窓",
      body: "向こう 72 時間は恒紀元の予報。三太陽連珠の確率は 1% 未満——長時間の傍受を組んでよい。",
    },
    tooltip: {
      note: "計器の注記:ホバーまたはフォーカスで現れる。矢印なし——板は泡には窄まらない。",
      trigger: "ly?",
      tip: "光年 — 光が一年に進む距離。ケンタウルス座 α までは 4.22 光年",
    },
    hoverCard: {
      note: "ホバーで開く調書の板:popover の読み取り専用の親戚。参照を辿らずに下見する。",
      trigger: "ケンタウルス座α",
      title: "ケンタウルス座 α · 南門二",
      body: "三重星、4.22 光年。三つの太陽が予測不能に舞う——乱紀元の源にして、最も近い隣人。",
    },
    contextMenu: {
      note: "ポインタの位置に呼び出すメニュー。右クリック(長押し)で開く。表面規則は dropdown と同一。",
      area: "この信号源を右クリック",
      groupLabel: "SOURCE",
      run: "今すぐ傍受",
      exportReport: "座標をコピー",
      destructive: "この源を永久に沈黙",
    },
    menubar: {
      note: "傍受局のメニュー列:枠付きの一枚板から、dropdown の板が落ちる。開いたトリガーは深い塗りを取る。",
      scanMenu: "Listen",
      viewMenu: "View",
      run: "今すぐ傍受",
      exportReport: "信号記録を書き出す",
      destructive: "ランを削除",
      modeConsole: "夜勤モード",
      modeReport: "日勤モード",
    },
    command: {
      note: "傍受局のパレット:打って、絞って、実行。検索行と結果の間には本物の矧ぎ目。ハイライト行は鋲。",
      inputPlaceholder: "コマンドを入力または検索…",
      empty: "該当するコマンドがありません。",
      groupLabel: "LISTEN",
      items: ["全帯域の傍受を開始", "紅岸アンテナを整列", "今夜の信号記録を書き出す", "傍受ログを開く"],
    },
    toast: {
      note: "縁から滑り込むメッセージの板。重大度は左縁の色の矧ぎ目と、文そのもの——alert と同じ言語。",
      neutralButton: "Notify",
      critButton: "Notify crit",
      neutralTitle: "信号記録を書き出しました",
      neutralBody: "alpha-cen.json を out/ に書き込み。",
      critTitle: "反響を受信",
      critBody: "1420 MHz、同じ列が三度——解読を進めている。",
    },
  },
  structure: {
    label: "STRUCTURE",
    title: "構造",
    intro: "データの骨格:タブと表。行と行の間は毛筋の矧ぎ目であって、縞模様ではない。",
    tabs: {
      note: "選択中のタブは鋲の列で示す。矢印キーで移動、Home/End で両端へ。",
      assets: "信号源",
      findings: "警報",
      history: "ログ",
      findingsBody: "今夜の異常信号はまだない。宇宙は静かだ——静かすぎるのかもしれない。",
      historyBody: "前回の傍受:2 時間前、恒紀元、快晴。",
      host: "SOURCE",
      service: "DIST",
      exposure: "STATE",
      rows: [
        { host: "織姫星 · α Lyr", service: "25 ly", state: "nominal", label: "恒常" },
        { host: "ベテルギウス · α Ori", service: "548 ly", state: "warn", label: "変光" },
        { host: "ケンタウルス座 α", service: "4.22 ly", state: "crit", label: "反響" },
      ],
    },
    accordion: {
      note: "重ねた板が矧ぎ目に沿って開く。開いた札は鋲を持つ。面はスライドせずに現れる。",
      items: [
        { title: "受動傍受は何を集める?", body: "全帯域の背景走査:水素線付近の狭帯域信号、パルサーのタイミング、宇宙背景の異常な明滅。何も送信しない。" },
        { title: "なぜ送信に認可が要る?", body: "黒暗森林の第一課:座標を晒す危険は全員が負う。送信は取り消せず、詫びることもできない。" },
        { title: "信号記録はどれくらい保存される?", body: "傍受記録は 180 日保存し、その後は保管庫へ。反響と印の付いた記録は永久保存。" },
      ],
    },
    collapsible: {
      note: "矧ぎ目に沿って開閉するひとつの節——accordion の一人っ子。",
      trigger: "RAW READOUT",
      body: "freq 1420.405 MHz · gain 120 · SNR 1.2 · drift +0.3 Hz/s · era: stable",
    },
    breadcrumb: {
      note: "構造の中の径。節の境はどれも本物の境界だから、区切りは鋲——星は矧ぎ目にしか宿らない。",
      segments: ["星図", "ケンタウルス座"],
      current: "南門二",
    },
    pagination: { note: "ページ番号はただのリンク。現在頁は鋲一粒と全強度の文字——青い錠剤ではない。" },
    codeBlock: {
      note: "ソースコードを載せる板:ファイル名の行にコピー鈕、長いコードは矧ぎ目で畳む。ハイライトは墨の濃淡のみ——色は重大度であって、構文ではない。",
      filename: "listening-run.ts",
      expand: "展開",
      collapse: "畳む",
    },
    prose: {
      note: "長文の組版——裁定 12。本文の墨は一段退き、章は矧ぎ目で切り、リンクは鋲で標す。",
      heading: "矧ぎ目にある章",
      lead: "本文は地の色。見出しと強調だけが全墨に戻る。章の区切りは髪の毛ほどの矧ぎ目であって、文字サイズの演出ではない。",
      bodyA: "インラインコードは ",
      bodyB: " のような小さな板;",
      linkText: "リンクは二つの文書の矧ぎ目",
      bodyC: "であり、瑠璃ではなく鋲の色で標す。",
      quote: "長文とは報告書である——夜勤のコンソールで読んでいても。",
    },
    ledger: {
      note: "計器のリスト:同じ板の上の項目を、行ごとに矧ぎ目で裁ち分ける。原型は勤務日誌の一頁——アーカイブ、近況、関連読み物。",
      label: "2026 · 勤務記録",
      rows: [
        { label: "2026-06-30", text: "聴取ラン:ケンタウルス座 α", trailing: "SIGNAL" },
        { label: "2026-06-22", text: "板の記録:六十二間", trailing: "PLATE" },
        { label: "2026-06-14", text: "暗い森の第一課:返信しない", trailing: "DOCTRINE" },
      ],
    },
    glyph: {
      note: "グリフ集:24 グリッド上の髪の毛ほどの計器記号、切り落としの線端——裁つのであって、鋳るのではない。単色 currentColor、記号自体は重大度を帯びない。",
    },
    scrollArea: {
      note: "計器のスクロールバーを持つ窓:毛筋の溝、鋼のつまみ。浮かぶ錠剤はない。",
      lines: [
        "22:00:01 全帯域傍受を開始 · α Cen へ指向",
        "22:04:12 1420 MHz ピーク ×3 · 記録",
        "22:31:07 アンテナ固定 · ドリフト +0.3 Hz/s",
        "23:12:45 宇宙背景は正常 · 続行",
        "00:02:18 反響? SNR 1.2 · 再確認中",
        "01:44:52 記録書き込み · out/alpha-cen-0818.json",
        "03:00:00 傍受終了 · 封印",
      ],
    },
  },
  decisions: {
    label: "DECISIONS",
    title: "裁定",
    intro: "色や部品は変わっても、裁定は変わらない。新しい部品に取りかかる前に、以下のすべてに照らすこと。",
    rulings: [
      ["01", "色は重大度である", "観測所で、色が飾りだったことはない。"],
      ["02", "瑠璃は稀でなければならない", "一画面に一、二度まで。鋲は銀鼠であって、青ではない。"],
      ["03", "星は矧ぎ目にしか宿らない", "星を外して版面が変わらないなら、その星は偽物だ。"],
      ["04", "深さは影に頼らない", "box-shadow なし、すりガラスなし、光暈なし。"],
      ["05", "二つのモードは二つの質感", "夜は漆の下の光、昼は紙の上の顔料。"],
      ["06", "書体は言語ごとに宣言する", "骨 直 海 令 は繁体字と日本語で同じ字形ではない。"],
      ["07", "日本語は甲冑の用語にのみ", "由緒は深く、表面は正直に。"],
      ["08", "静止が既定である", "動くものは、何かが起きたということ。"],
      ["09", "漢字は全角グリッドに載せる", "ラテン文字と数字は半角グリッドに。"],
      ["10", "選択に瑠璃を使わない", "選ばれていることは重大度ではない。選択は銀鼠——打ち込まれた鋲一粒。"],
      ["11", "公開 API は関数を受け取らない", "部品は要素とデータを受け取り、コールバックせず注入する——使う側は server component のままでいられる。"],
    ],
  },
  install: {
    label: "INSTALL",
    title: "導入",
    intro: undefined,
    body: (
      <>
        どの部品も <CodeTag>theme</CodeTag> のトークン層を自動で引き込む。
        Tailwind CSS v4 と初期化済みの shadcn プロジェクトが必要。
        上の各部品に、それぞれの導入コマンドを添えてある。
      </>
    ),
    namespaceNote: (
      <>
        <CodeTag>components.json</CodeTag> に <CodeTag>@starseam</CodeTag>{" "}
        名前空間を登録すれば、短い名前で導入できる:
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
