import { CodeTag } from "@/components/ui/code-tag";
import type { Dictionary } from "./types";

export const en: Dictionary = {
  meta: {
    title: "starseam — stars live where the plates meet",
    description:
      "Modelled on the hoshi-kabuto: plate over plate, riveted with stars. A shadcn registry on a lacquer ground, with structural rivets and first-class CJK typography.",
  },
  header: {
    nav: [
      { id: "index", label: "Index" },
      { id: "palette", label: "Palette" },
      { id: "surfaces", label: "Surfaces" },
      { id: "instruments", label: "Instruments" },
      { id: "controls", label: "Controls" },
      { id: "overlays", label: "Overlays" },
      { id: "structure", label: "Structure" },
      { id: "decisions", label: "Decisions" },
      { id: "install", label: "Install" },
    ],
    navAria: "Sections",
    mode: { auto: "AUTO", console: "CONSOLE", report: "REPORT" },
    modeAria: "Colour mode",
    langAria: "Language",
  },
  hero: {
    tagline: (
      <>
        Modelled on the hoshi-kabuto: dozens of iron plates riveted into a
        bowl, the rivets left deliberately proud — in the armourer&apos;s
        vocabulary those rivets are called{" "}
        <span lang="ja" className="text-[var(--ss-text)]">
          星
        </span>
        , stars. Look down at the bowl and the field of rivets reads as a night
        sky — the star on the helmet and the star in the heavens have shared
        one word ever since. Plate over plate, riveted with stars: defence in
        depth by construction.
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
    title: "One figure, three readings",
    cards: [
      {
        en: "PLAN OF A HELMET",
        title: "Plan of a helmet",
        body: "Plates radiate from the hachimanza at the crown; rivets follow every seam. This is real armour construction.",
      },
      {
        en: "STAR CHART",
        title: "Star chart",
        body: "The same figure, rivets read as stars and seams as constellation lines — join the stars and you have a sky.",
      },
      {
        en: "PPI SCOPE",
        title: "PPI scope",
        body: "Concentric rings, bearing lines, sweep sectors — the instrument that watches the night sky.",
      },
    ],
  },
  componentIndex: {
    label: "INDEX",
    title: "Index",
    intro: "Fifty pieces, arranged by section. A name takes you straight to its plate.",
  },
  palette: {
    label: "PALETTE",
    title: "Palette",
    intro:
      "Fourteen tokens, two materials: console is light under lacquer, report is pigment on paper. Swatches render in the current mode; both hex values are printed on the chip. Names follow traditional colours, and only where the name still holds.",
    consoleLabel: "console",
    reportLabel: "report",
    roles: {
      ground: "The ground. Black lacquer",
      plate1: "Plate, first cut",
      plate2: "Plate, second cut",
      plate3: "Plate, highest cut",
      seam: "Hairline seam",
      seamStrong: "Seam, strong",
      rivet: "Rivets; selection",
      rivetQuiet: "Rivet, quiet",
      text: "Body text",
      text2: "Secondary text",
      text3: "Instrument labels",
      live: "Liveness and focus, nothing else",
      warn: "Needs attention",
      crit: "Act now",
    },
  },
  surfaces: {
    label: "SURFACES",
    title: "Surfaces",
    intro:
      "Depth has exactly two legal expressions: steps of fill, or physical overlap. There are no shadows.",
    plate: {
      note: "Three cuts: flush sits level with the ground, raised one step up, float the highest.",
      flush: "level with the ground",
      raised: "one step up",
      float: "the highest cut",
    },
    lames: {
      note: "Plate pressed over plate, seams visible — exactly how armour laces its lames. Overlap is a signature move, reserved for hero areas and cards.",
      cyTitle: "鉢",
      cyBody: "The bowl at the crown: dozens of plates radiating from the hachimanza, stars along every seam.",
      cyLive: "on display",
      assetsLabel: "PLATES",
      exposedLabel: "MISSING",
      merakTitle: "眼庇",
      merakBody: "The brow plate — against the noon glare and the incoming edge alike.",
      aspTitle: "錣",
      aspBody: "The neck guard: five tiers of plates laced together, moving with the neck.",
    },
    seam: {
      note: "A hairline scored into a single plate, decorative only — grouping is carried by the heading structure, never by this line.",
      rows: ["Between sections", "Between list items", "Where navigation meets content"],
    },
    alert: {
      note: "A message plate with a severity edge — a strengthened seam on the left. The colour never stands alone; the title says it in words.",
      title: "Chaotic Era — observing paused",
      body: "The three suns are unpredictable tonight; the schedule is sealed until the next Stable Era.",
      critTitle: "Sophon interference",
      critBody: "Collider readings are compromised; fundamental physics is not to be trusted. Fall back to visual observation.",
    },
    skeleton: {
      note: "A placeholder plate. It does not shimmer and it does not pulse — the only permitted loop belongs to crit. Waiting quietly is honest waiting.",
    },
  },
  instruments: {
    label: "INSTRUMENTS",
    title: "Instruments",
    intro:
      "Listening-station instrumentation: scales, readings, status points. Colour is severity — anything without a state is neutral, and neutral is the norm. The universe is quiet most of the time; the panel should be too.",
    mark: {
      note: "One figure; the plate count, the rings, and the pitch of the major rivets are all yours to set.",
    },
    labelSpec: {
      note: "Panel-scale lettering. Monospaced, uppercase, 0.20em tracking.",
      samples: ["TARGET SOURCE", "FREQUENCY", "LAST SWEEP"],
    },
    value: {
      note: "A reading. State is severity, never decoration — never give it a state because “this could use some colour”.",
      rows: [
        { label: "SIGNALS", value: "1,379", state: "nominal" },
        { label: "FLICKER", value: "17", state: "warn" },
        { label: "ECHO", value: "1", state: "crit" },
      ],
    },
    statusDot: {
      note: "A single rivet standing in for a status, always paired with text. Only crit pulses — the one permitted loop in the system.",
      rows: [
        { state: "nominal", label: "stable era" },
        { state: "live", label: "listening" },
        { state: "warn", label: "chaotic era" },
        { state: "crit", label: "locked" },
      ],
    },
    statBand: {
      note: "A band of readings, rivets set along the dividers — stars live only on seams.",
      stats: [
        { label: "SWEEPS", value: "148" },
        { label: "QUEUE", value: "3" },
        { label: "FLICKER", value: "1", state: "warn" },
      ],
    },
    codeTag: {
      note: "Inline code and version tags.",
      samples: ["theme", "v0.3.0", "MIT"],
    },
    modeSwitch: {
      note: "Tri-state: auto hands the choice back to the system. One truth for the whole page — this instance and the one in the header can never disagree.",
    },
    badge: {
      note: "A stamped status tag: hairline border, no fill. A coloured badge is a claim about the state of the thing, not decoration.",
      rows: [
        { state: "nominal", label: "queued" },
        { state: "live", label: "listening" },
        { state: "warn", label: "chaotic era" },
        { state: "crit", label: "locked" },
      ],
    },
    kbd: { note: "A key cap: a keystroke-sized raised plate, expressed with fill and a strengthened bottom seam — no shadow." },
    avatar: { note: "An identity plate: square, 2px radius, hairline seam; the fallback is instrument lettering, not a pastel disc." },
    progress: {
      note: "A determinate reading in rivet steel. No indeterminate sweep — an endless loop belongs to crit alone; if the length is unknown, say so in text.",
      label: "SWEEP 64% · α CEN",
    },
  },
  controls: {
    label: "CONTROLS",
    title: "Controls",
    intro: (
      <>
        Selection is <b className="font-medium text-[var(--ss-text)]">silver</b>,
        never lapis — being checked is not a severity, and the blue must stay
        rare enough to mean something. Lapis is reserved for focus, and only one
        thing holds focus at a time.
      </>
    ),
    button: {
      note: "quiet is the norm; live spends the one blue moment on the screen — at most one per view; crit is for destructive actions only, always with text; ghost is the frameless whisper. Four sizes, including a square icon cut.",
      quiet: "Read decisions",
      live: "Get started",
      disabled: "Disabled",
      crit: "Delete run",
      ghost: "Details",
    },
    buttonGroup: {
      note: "Buttons riveted into one strip: one hairline frame, seams between the members — the boundary belongs to the group, not to each button.",
      run: "Listen",
      pause: "Pause",
      seal: "Seal",
    },
    scenario: {
      title: "Scenario: listening run",
      note: "The field wires its label, hint, and error to the control by itself — the consumer writes no functions at all.",
      domainLabel: "TARGET SOURCE",
      domainHint: "A signal source or catalogue number",
      domainPlaceholder: "Alpha Centauri",
      profileLabel: "LISTENING MODE",
      profilePlaceholder: "Choose a listening mode",
      profiles: [
        { value: "passive", label: "Passive — full-band scan" },
        { value: "directed", label: "Directed — single source" },
        { value: "transmit", label: "Transmit — authorisation required" },
      ],
      notifyLabel: "NOTIFY ADDRESS",
      notifyError: "This is not a valid email address",
      noteLabel: "LISTENING NOTE",
      notePlaceholder: "Solar activity, chaotic-era forecast, cautions…",
    },
    toggles: {
      note: "A checked box is a rivet driven home; so is a switch in the on position.",
      checkbox: "Include outer bands",
      checkboxLocked: "Locked source",
      switch: "Run nightly",
    },
    copy: {
      note: "Puts a value on the clipboard. The confirmation is a rivet and a label swap — an acknowledged action reads as selection, not severity. One sits beside every install command on this page.",
      sample: "RA 14h 39m 36s · Dec −60° 50′",
    },
    radio: {
      note: "The chosen option holds a rivet driven into its centre. Selection is silver; lapis appears only as the focus ring.",
      legend: "LISTENING CADENCE",
      options: [
        { value: "nightly", label: "Nightly" },
        { value: "weekly", label: "Weekly" },
        { value: "event", label: "On anomalous signals only" },
      ],
    },
    slider: {
      note: "A setting dragged along a seam: hairline channel, steel range, steel thumb.",
      label: "GAIN",
    },
    toggle: {
      note: "A pressed-state button. Pressed is a rivet and a deeper fill, not blue.",
      label: "RAW FRAME",
    },
    combobox: {
      note: "A select with a filter line. Options are plain data, and the chosen value travels with the form on its own.",
      label: "ASSIGN WATCH",
      placeholder: "Assign a listening post…",
      searchPlaceholder: "Filter…",
      empty: "No post matches.",
      options: [
        { value: "1379", label: "Post 1379" },
        { value: "1380", label: "Post 1380" },
        { value: "redcoast", label: "Red Coast duty" },
        { value: "duty", label: "Rotation" },
      ],
    },
    datePicker: {
      note: "A calendar in a popover; the chosen date travels with the form on its own. The chosen day is a rivet driven home.",
      label: "STABLE ERA WINDOW",
    },
    otp: {
      note: "A code entered one plate at a time. The active slot is edged in lapis because it holds focus — the one legal home for the blue. The caret is a still bar: blinking is a loop, and loops belong to crit.",
      label: "BASE ACCESS CODE",
    },
  },
  overlays: {
    label: "OVERLAYS",
    title: "Overlays",
    intro:
      "How a floating layer enters and leaves is decided once, by the theme — no component invents its own entrance.",
    dialog: {
      note: "A centred layer over a lacquer scrim. Focus stays on the plate, Esc closes, and you return where you came from.",
      trigger: "Open dialog",
      title: "Delete this listening run?",
      description: "This action cannot be undone.",
      body: "Deleting the run stops tonight's schedule. Signal records already taken are kept.",
      cancel: "Cancel",
      confirm: "Delete",
    },
    sheet: {
      note: "A panel drawn out from an edge. It slides rather than fades — a panel that appears in place reads as a dialog.",
      trigger: "Open sheet",
      title: "Listening run details",
      description: "Directed — single source",
      body: "Target Alpha Centauri, 4.22 light-years. A round trip for one sentence takes 8.6 years — think before you press transmit.",
      close: "Close",
    },
    dropdown: {
      note: "The selected row is marked by a rivet; destructive actions are marked in crimson and always carry text.",
      trigger: "Actions",
      groupLabel: "LISTEN",
      run: "Listen now",
      exportReport: "Export signal record",
      destructive: "Delete run",
    },
    alertDialog: {
      note: "The dialog's stricter sibling: clicking outside does not dismiss it — an explicit answer is required. Esc counts as cancel, so keyboard users always have an exit.",
      trigger: "Reply to signal",
      title: "Reply to this signal?",
      description: "It will arrive in 4.2 years.",
      body: "The same warning came through three times: do not answer. A reply is a set of coordinates.",
      cancel: "Do not answer",
      confirm: "Reply",
    },
    popover: {
      note: "A small plate lifted beside its trigger: the lightest cut, hairline edge, no shadow.",
      trigger: "Stable Era window",
      title: "Stable Era window",
      body: "The next 72 hours forecast stable; tri-solar syzygy probability under 1%. Long listening runs may be scheduled.",
    },
    tooltip: {
      note: "An instrument annotation on hover or focus. No arrow — a plate does not taper into a bubble.",
      trigger: "ly?",
      tip: "Light-year — the distance light travels in a year; Alpha Centauri sits 4.22 of them away",
    },
    hoverCard: {
      note: "A dossier plate raised on hover: the popover's read-only sibling, previewing a reference without following it.",
      trigger: "Alpha Centauri",
      title: "Alpha Centauri · 南門二",
      body: "A triple star, 4.22 light-years out. Three suns in an unpredictable dance — the source of every chaotic era, and our nearest neighbour.",
    },
    contextMenu: {
      note: "A menu summoned at the pointer — right-click or long-press. Same surface rules as the dropdown.",
      area: "Right-click this source",
      groupLabel: "SOURCE",
      run: "Listen now",
      exportReport: "Copy coordinates",
      destructive: "Silence this source forever",
    },
    menubar: {
      note: "A listening-station menu strip: one bordered plate, menus falling as dropdown plates. The open trigger takes a deeper fill.",
      scanMenu: "Listen",
      viewMenu: "View",
      run: "Listen now",
      exportReport: "Export signal record",
      destructive: "Delete run",
      modeConsole: "Console mode",
      modeReport: "Report mode",
    },
    command: {
      note: "The listening-station palette: type, filter, execute. A real seam separates the query line from the results; the highlighted row is a rivet.",
      inputPlaceholder: "Type a command or search…",
      empty: "No matching command.",
      groupLabel: "LISTEN",
      items: ["Start full-band listening", "Align the Red Coast antenna", "Export tonight's signal record", "Open the listening log"],
    },
    toast: {
      note: "Message plates sliding in from the edge. Severity is a coloured left seam plus the text itself — the same language as alert.",
      neutralButton: "Notify",
      critButton: "Notify crit",
      neutralTitle: "Signal record exported",
      neutralBody: "alpha-cen.json written to out/.",
      critTitle: "Echo received",
      critBody: "1420 MHz, the same sequence three times over — decoding in progress.",
    },
  },
  structure: {
    label: "STRUCTURE",
    title: "Structure",
    intro:
      "The skeleton for data: tabs and tables. Rows are separated by hairline seams, not zebra stripes.",
    tabs: {
      note: "The active tab is marked by a run of rivets; arrow keys move, Home/End jump to the ends.",
      assets: "Sources",
      findings: "Alerts",
      history: "Log",
      findingsBody: "No anomalous signals tonight. The universe is quiet — perhaps too quiet.",
      historyBody: "Last run: 2 hours ago, stable era, clear skies.",
      host: "SOURCE",
      service: "DIST",
      exposure: "STATE",
      rows: [
        { host: "Vega · α Lyr", service: "25 ly", state: "nominal", label: "steady" },
        { host: "Betelgeuse · α Ori", service: "548 ly", state: "warn", label: "variable" },
        { host: "Alpha Centauri", service: "4.22 ly", state: "crit", label: "echo" },
      ],
    },
    accordion: {
      note: "Stacked plates opening along their seams; the open item holds a rivet. The panel appears without a slide.",
      items: [
        { title: "What does passive listening collect?", body: "A full-band background scan: narrow-band signals near the hydrogen line, pulsar timing, anomalous flicker in the cosmic background. Nothing is transmitted." },
        { title: "Why does transmitting require authorisation?", body: "The first lesson of the dark forest: the risk of exposing coordinates is borne by everyone. A transmission cannot be recalled, and cannot be apologised for." },
        { title: "How long are signal records kept?", body: "Listening records are kept for 180 days, then archived. Records flagged as echoes are kept forever." },
      ],
    },
    collapsible: {
      note: "A single section opening along its seam — the accordion's only child.",
      trigger: "RAW READOUT",
      body: "freq 1420.405 MHz · gain 120 · SNR 1.2 · drift +0.3 Hz/s · era: stable",
    },
    breadcrumb: {
      note: "A path through the structure. Every junction is a real boundary, so the separators are rivets — stars live only on seams.",
      segments: ["Star chart", "Centaurus"],
      current: "Alpha Centauri",
    },
    pagination: { note: "Plain links; the current page is a rivet and full-strength text, not a blue pill." },
    scrollArea: {
      note: "A viewport with an instrument scrollbar: hairline channel, steel thumb, no floating pill.",
      lines: [
        "22:00:01 full-band listening · aimed at α Cen",
        "22:04:12 1420 MHz peak ×3 · recorded",
        "22:31:07 antenna locked · drift +0.3 Hz/s",
        "23:12:45 cosmic background nominal · continuing",
        "00:02:18 echo? SNR 1.2 · re-checking",
        "01:44:52 record written · out/alpha-cen-0818.json",
        "03:00:00 listening complete · sealed",
      ],
    },
  },
  decisions: {
    label: "DECISIONS",
    title: "Decisions",
    intro:
      "Colours and components will change; the rulings will not. Before building anything new, check it against every line below.",
    rulings: [
      ["01", "Colour is severity", "On an observatory floor, colour was never decoration."],
      ["02", "Lapis must stay rare", "Once or twice per view, at most. Rivets are silver, not blue."],
      ["03", "Stars live only on seams", "Remove the star; if the layout still reads the same, that star was fake."],
      ["04", "Depth without shadows", "No box-shadow, no frosted glass, no glow."],
      ["05", "Two modes are two materials", "Night is light under lacquer; day is pigment on paper."],
      ["06", "Fonts declared per language", "骨 直 海 令 are not the same glyphs in Traditional Chinese and Japanese."],
      ["07", "Japanese only for armour terms", "Let the allusion run deep and the surface stay honest."],
      ["08", "Stillness is the default", "Anything moving means something went wrong."],
      ["09", "CJK sits on the full-width grid", "Latin and digits sit on the half-width grid."],
      ["10", "Selection is never lapis", "Being checked is not a severity. Selection is silver — a rivet driven home."],
      ["11", "Public APIs take no functions", "Components receive elements and data, injecting rather than calling back — consumers stay server components."],
    ],
  },
  install: {
    label: "INSTALL",
    title: "Install",
    intro: undefined,
    body: (
      <>
        Every component pulls in the <CodeTag>theme</CodeTag> token layer
        automatically. Requires Tailwind CSS v4 and an initialised shadcn
        project. Each component above carries its own install command.
      </>
    ),
    namespaceNote: (
      <>
        You can also register the <CodeTag>@starseam</CodeTag> namespace in{" "}
        <CodeTag>components.json</CodeTag> and install by short name:
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
