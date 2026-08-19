import { CodeTag } from "@/components/ui/code-tag";
import type { Dictionary } from "./types";

export const ja: Dictionary = {
  meta: {
    title: "starseam — 星は、板の合わせ目に宿る",
    description:
      "星兜を型とする:板を重ね、星で鋲留めする。漆黒の地に構造の鋲、CJK 組版を第一級で扱う shadcn レジストリ。",
  },
  header: {
    nav: [
      { id: "palette", label: "配色" },
      { id: "surfaces", label: "板面" },
      { id: "instruments", label: "計器" },
      { id: "controls", label: "操作" },
      { id: "overlays", label: "浮層" },
      { id: "structure", label: "構造" },
      { id: "decisions", label: "裁定" },
      { id: "install", label: "導入" },
    ],
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
        板に板を重ね、星で留める。それ自体が縦深防御である。
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
      title: "雲量超過につき観測中断",
      body: "全天の雲量 80%。今夜の予定は次の晴れ間に繰り延べ。",
      critTitle: "鏡筒に結露",
      critBody: "主鏡温度が露点を下回った。直ちに蓋をし、ヒーターを入れること。",
    },
    skeleton: {
      note: "場所取りの板。きらめかず、脈打たない——系で唯一のループは crit のもの。静かに待つのが、正直な待ち方。",
    },
  },
  instruments: {
    label: "INSTRUMENTS",
    title: "計器",
    intro: "観測所の計器:目盛、読み値、状態点。色は重大度——状態のないものは中立で、それが常態。",
    mark: { note: "パラメトリックな兜の平面図:plates は板数、rings は同心円、majorEvery は主鋲の間隔。" },
    labelSpec: {
      note: "計器盤の目盛文字。等幅、大文字、字間 0.20em。",
      samples: ["TARGET FIELD", "MAGNITUDE", "LAST SWEEP"],
    },
    value: {
      note: "読み値。state は重大度であって装飾ではない——「ここに色が欲しい」では渡さないこと。",
      rows: [
        { label: "STARS", value: "1,284", state: "nominal" },
        { label: "VARIABLE", value: "17", state: "warn" },
        { label: "LOST", value: "3", state: "crit" },
      ],
    },
    statusDot: {
      note: "一粒の鋲がひとつの状態を表し、必ず文字を添える。脈打つのは crit だけ——系で唯一許されたループ。",
      rows: [
        { state: "nominal", label: "恒常" },
        { state: "live", label: "観測中" },
        { state: "warn", label: "変光" },
        { state: "crit", label: "喪失" },
      ],
    },
    statBand: {
      note: "帯状の計器列。仕切りに沿って鋲が並ぶ——星は矧ぎ目にしか宿らない。",
      stats: [
        { label: "SWEEPS", value: "148" },
        { label: "QUEUE", value: "3" },
        { label: "CLOUDED", value: "1", state: "warn" },
      ],
    },
    codeTag: {
      note: "行内コードとバージョン札。",
      samples: ["theme", "v0.3.0", "MIT"],
    },
    modeSwitch: {
      note: "三値:「自動」は選択を系に返す。document 要素が唯一の真実——この一台とヘッダーの一台が食い違うことはない。",
    },
    badge: {
      note: "刻印の状態札:毛筋の枠、塗りなし。色付きの札は状態への断言であって、飾りではない。",
      rows: [
        { state: "nominal", label: "待機" },
        { state: "live", label: "観測中" },
        { state: "warn", label: "雲遮" },
        { state: "crit", label: "喪失" },
      ],
    },
    kbd: { note: "キーキャップ:一打鍵ぶんの小さな凸板。塗りと下縁の強い矧ぎ目で表し、影は使わない。" },
    avatar: { note: "身元の板:正方形、角丸 2px、毛筋の縁。フォールバックは計器の刻字であって、パステルの円盤ではない。" },
    progress: {
      note: "確定値の読み。鋲の鋼で塗る。不定形の掃引はない——果てのないループは crit だけのもの。長さが不明なら文字で言う。",
      label: "SWEEP 64%",
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
      note: "quiet が常態。live は画面で唯一の青を使う——一画面に一つまで。",
      quiet: "Read decisions",
      live: "Get started",
      disabled: "Disabled",
    },
    scenario: {
      title: "シナリオ:観測ラン",
      note: "field は操作部品を要素の子として受け取り、id と aria-describedby を注入する——公開 API は関数を受け取らない。",
      domainLabel: "TARGET FIELD",
      domainHint: "天域またはカタログ番号",
      domainPlaceholder: "M31 · アンドロメダ",
      profileLabel: "OBSERVING MODE",
      profilePlaceholder: "観測モードを選択",
      profiles: [
        { value: "visual", label: "眼視 — 速い掃天" },
        { value: "short", label: "短時間露光 — 位置合わせ" },
        { value: "long", label: "長時間露光 — 深宇宙" },
      ],
      notifyLabel: "NOTIFY ADDRESS",
      notifyError: "有効なメールアドレスではありません",
      noteLabel: "OBSERVATION NOTE",
      notePlaceholder: "天候、月齢、注意事項…",
    },
    toggles: {
      note: "チェックの入った箱は打ち込まれた鋲。入ったスイッチも同じ。",
      checkbox: "周辺天域を含める",
      checkboxLocked: "ロック済みの目標",
      switch: "毎夜実行",
    },
    copy: {
      note: "値をクリップボードへ。確認は鋲一粒とラベルの入れ替え——完了した動作は選択の語彙であり、重大度ではない。本頁の導入コマンドすべてに一つずつ付く。",
      sample: "RA 18h 36m 56s · Dec +38° 47′",
    },
    radio: {
      note: "選ばれた選択肢の中心に鋲が打たれる。選択は銀鼠、瑠璃はフォーカス環にのみ現れる。",
      legend: "OBSERVING CADENCE",
      options: [
        { value: "nightly", label: "毎夜" },
        { value: "weekly", label: "毎週" },
        { value: "event", label: "突発天象のみ" },
      ],
    },
    slider: {
      note: "矧ぎ目に沿って引く設定値:溝は毛筋、充填域とつまみは鋲の鋼。",
      label: "EXPOSURE",
    },
    toggle: {
      note: "押し込み状態のボタン。押されたら鋲と深い塗り——青ではない。",
      label: "RAW FRAME",
    },
    combobox: {
      note: "絞り込み行つきのセレクト。選択肢はデータ、値は隠し input でフォームへ——公開 API は関数を受け取らない。",
      label: "ASSIGN WATCH",
      placeholder: "夜番を割り当て…",
      searchPlaceholder: "絞り込み…",
      empty: "該当する番がありません。",
      options: [
        { value: "shu", label: "天枢番" },
        { value: "xuan", label: "天璇番" },
        { value: "ji", label: "天璣番" },
        { value: "duty", label: "輪番" },
      ],
    },
    datePicker: {
      note: "ポップオーバーの中の暦。日付は隠し input に落ちる——コールバック不要。選ばれた日は打ち込まれた鋲。",
      label: "OBSERVATION WINDOW",
    },
    otp: {
      note: "一板一字。アクティブな枡は瑠璃で縁取る——フォーカスを持つから。青の唯一の正当な居場所である。キャレットは静止した棒:点滅はループであり、ループは crit のもの。",
      label: "DOME ACCESS CODE",
    },
  },
  overlays: {
    label: "OVERLAYS",
    title: "浮層",
    intro: "浮層の出入りは theme の data-slot 規則に定める——部品が勝手に登場の仕方を発明してはならない。",
    dialog: {
      note: "中央の浮層、漆の幕を敷く。フォーカスは閉じ込め、Esc で閉じ、閉じたらトリガーへ返す。",
      trigger: "Open dialog",
      title: "この観測ランを削除しますか",
      description: "この操作は取り消せません。",
      body: "削除すると今夜の予定は止まる。既に得たカタログと画像は残る。",
      cancel: "取消",
      confirm: "削除",
    },
    sheet: {
      note: "縁から引き出す側板。フェードではなくスライド——その場に現れる板は dialog に読めてしまう。",
      trigger: "Open sheet",
      title: "観測ランの詳細",
      description: "長時間露光 — 深宇宙",
      body: "目標 M31。月没後にのみ実行。一枚 300 秒、スタック合成。",
      close: "閉じる",
    },
    dropdown: {
      note: "選択行の脇に鋲が現れる。破壊的操作は緋で示し、必ず文字を添える。",
      trigger: "Actions",
      groupLabel: "OBSERVE",
      run: "今すぐ観測",
      exportReport: "カタログを書き出す",
      destructive: "ランを削除",
    },
    alertDialog: {
      note: "dialog の厳格版:外side を押しても閉じない。明確な回答が要る。Esc は取消として扱い、キーボード利用者に出口を残す。",
      trigger: "Stop tracking",
      title: "この目標の追尾を止めますか",
      description: "指向データの更新は直ちに止まります。",
      body: "止めるとガイド星のロックが外れる。再捕捉には位置合わせのやり直しが要る。",
      cancel: "取消",
      confirm: "停止",
    },
    popover: {
      note: "トリガーに寄り添って浮かぶ小板。最上段の塗り、毛筋の縁、影なし。",
      trigger: "観測窓",
      title: "観測窓",
      body: "毎夜 22:00–03:00、月没後。雲量 40% 超で自動繰り延べ。",
    },
    tooltip: {
      note: "計器の注記:ホバーまたはフォーカスで現れる。矢印なし——板は泡には窄まらない。",
      trigger: "mag?",
      tip: "実視等級 — 地上から見た明るさ。数字が小さいほど明るい",
    },
    hoverCard: {
      note: "ホバーで開く調書の板:popover の読み取り専用の親戚。参照を辿らずに下見する。",
      trigger: "織姫星",
      title: "織姫星 · Vega",
      body: "こと座 α。0.03 等、25 光年——天の川を隔てて彦星と向かい合う、あの星。",
    },
    contextMenu: {
      note: "ポインタの位置に呼び出すメニュー。右クリック(長押し)で開く。表面規則は dropdown と同一。",
      area: "この天域を右クリック",
      groupLabel: "TARGET",
      run: "今すぐ観測",
      exportReport: "座標をコピー",
      destructive: "カタログから外す",
    },
    menubar: {
      note: "観測所のメニュー列:枠付きの一枚板から、dropdown の板が落ちる。開いたトリガーは深い塗りを取る。",
      scanMenu: "Observe",
      viewMenu: "View",
      run: "今すぐ観測",
      exportReport: "カタログを書き出す",
      destructive: "ランを削除",
      modeConsole: "夜勤モード",
      modeReport: "日勤モード",
    },
    command: {
      note: "観測所のパレット:打って、絞って、実行。検索行と結果の間には本物の矧ぎ目。ハイライト行は鋲。",
      inputPlaceholder: "コマンドを入力または検索…",
      empty: "該当するコマンドがありません。",
      groupLabel: "OBSERVE",
      items: ["掃天を開始", "赤道儀を整列", "今夜のカタログを書き出す", "観測ログを開く"],
    },
    toast: {
      note: "縁から滑り込むメッセージの板。重大度は左縁の色の矧ぎ目と、文そのもの——alert と同じ言語。",
      neutralButton: "Notify",
      critButton: "Notify crit",
      neutralTitle: "カタログを書き出しました",
      neutralBody: "vega-field.json を out/ に書き込み。",
      critTitle: "追尾を喪失",
      critBody: "ガイド星が雲に消えた。3 回再試行済み。",
    },
  },
  structure: {
    label: "STRUCTURE",
    title: "構造",
    intro: "データの骨格:タブと表。行と行の間は毛筋の矧ぎ目であって、縞模様ではない。",
    tabs: {
      note: "選択中のタブは鋲の列で示す。矢印キーで移動、Home/End で両端へ。",
      assets: "星表",
      findings: "天象",
      history: "ログ",
      findingsBody: "今夜の突発天象はまだない。",
      historyBody: "前回の観測:2 時間前、快晴。",
      host: "STAR",
      service: "MAG",
      exposure: "STATE",
      rows: [
        { host: "織姫星 · α Lyr", service: "0.03", state: "nominal", label: "恒常" },
        { host: "ベテルギウス · α Ori", service: "0.5 var", state: "warn", label: "変光" },
        { host: "りゅうこつ座η星", service: "4.3", state: "crit", label: "前兆" },
      ],
    },
    accordion: {
      note: "重ねた板が矧ぎ目に沿って開く。開いた札は鋲を持つ。面はスライドせずに現れる。",
      items: [
        { title: "眼視モードは何を集める?", body: "肉眼とファインダーによる速い掃天の記録。主鏡は蓋のまま、画像は残さない。" },
        { title: "長時間露光は月明かりの影響を受ける?", body: "受ける。深宇宙のランは月没後にのみ組む。月齢 12〜18 の夜には長時間露光を入れない。" },
        { title: "星表はどれくらい保存される?", body: "観測記録は 180 日保存し、その後は暦にまとめて保管する。" },
      ],
    },
    collapsible: {
      note: "矧ぎ目に沿って開閉するひとつの節——accordion の一人っ子。",
      trigger: "RAW READOUT",
      body: "exp 300s · gain 120 · sensor −10.2°C · seeing 1.8″ · guiding RMS 0.6″",
    },
    breadcrumb: {
      note: "構造の中の径。節の境はどれも本物の境界だから、区切りは鋲——星は矧ぎ目にしか宿らない。",
      segments: ["星図", "こと座"],
      current: "織姫星",
    },
    pagination: { note: "ページ番号はただのリンク。現在頁は鋲一粒と全強度の文字——青い錠剤ではない。" },
    scrollArea: {
      note: "計器のスクロールバーを持つ窓:毛筋の溝、鋼のつまみ。浮かぶ錠剤はない。",
      lines: [
        "22:00:01 sweep start · sector NE",
        "22:04:12 M31 位置合わせ完了 · 短 ×3",
        "22:31:07 ガイド星ロック · RMS 0.6″",
        "23:12:45 雲量 35% · 続行",
        "00:02:18 長 300s ×12 完了",
        "01:44:52 星表書き込み · out/m31-0818.json",
        "03:00:00 sweep complete · 蓋",
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
