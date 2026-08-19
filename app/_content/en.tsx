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
        , stars. Plate over plate, riveted with stars: defence in depth by
        construction.
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
      title: "Clouded out — observing paused",
      body: "Cloud cover at 80%; tonight's schedule slips to the next clear window.",
      critTitle: "Dew on the corrector",
      critBody: "Mirror temperature is below the dew point. Cap the tube and start the dew heater now.",
    },
    skeleton: {
      note: "A placeholder plate. It does not shimmer and it does not pulse — the only permitted loop belongs to crit. Waiting quietly is honest waiting.",
    },
  },
  instruments: {
    label: "INSTRUMENTS",
    title: "Instruments",
    intro:
      "Observatory instrumentation: scales, readings, status points. Colour is severity — anything without a state is neutral, and neutral is the norm.",
    mark: {
      note: "The parametric helmet plan: plates counts the plates, rings the concentric circles, majorEvery the pitch of the major rivets.",
    },
    labelSpec: {
      note: "Panel-scale lettering. Monospaced, uppercase, 0.20em tracking.",
      samples: ["TARGET FIELD", "MAGNITUDE", "LAST SWEEP"],
    },
    value: {
      note: "A reading. State is severity, never decoration — do not pass one because “this could use some colour”.",
      rows: [
        { label: "STARS", value: "1,284", state: "nominal" },
        { label: "VARIABLE", value: "17", state: "warn" },
        { label: "LOST", value: "3", state: "crit" },
      ],
    },
    statusDot: {
      note: "A single rivet standing in for a status, always paired with text. Only crit pulses — the one permitted loop in the system.",
      rows: [
        { state: "nominal", label: "steady" },
        { state: "live", label: "observing" },
        { state: "warn", label: "variable" },
        { state: "crit", label: "lost" },
      ],
    },
    statBand: {
      note: "A band of readings, rivets set along the dividers — stars live only on seams.",
      stats: [
        { label: "SWEEPS", value: "148" },
        { label: "QUEUE", value: "3" },
        { label: "CLOUDED", value: "1", state: "warn" },
      ],
    },
    codeTag: {
      note: "Inline code and version tags.",
      samples: ["theme", "v0.3.0", "MIT"],
    },
    modeSwitch: {
      note: "Tri-state: auto hands the choice back to the system. The document element is the single source of truth — this instance and the one in the header can never disagree.",
    },
    badge: {
      note: "A stamped status tag: hairline border, no fill. A coloured badge is a claim about the state of the thing, not decoration.",
      rows: [
        { state: "nominal", label: "queued" },
        { state: "live", label: "observing" },
        { state: "warn", label: "clouded" },
        { state: "crit", label: "lost" },
      ],
    },
    kbd: { note: "A key cap: a keystroke-sized raised plate, expressed with fill and a strengthened bottom seam — no shadow." },
    avatar: { note: "An identity plate: square, 2px radius, hairline seam; the fallback is instrument lettering, not a pastel disc." },
    progress: {
      note: "A determinate reading in rivet steel. No indeterminate sweep — an endless loop belongs to crit alone; if the length is unknown, say so in text.",
      label: "SWEEP 64%",
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
      note: "quiet is the norm; live spends the one blue moment on the screen — at most one per view.",
      quiet: "Read decisions",
      live: "Get started",
      disabled: "Disabled",
    },
    scenario: {
      title: "Scenario: observation run",
      note: "field receives its control as an element child and injects id and aria-describedby — the public API takes no functions.",
      domainLabel: "TARGET FIELD",
      domainHint: "A sky field or catalogue number",
      domainPlaceholder: "M31 · Andromeda",
      profileLabel: "OBSERVING MODE",
      profilePlaceholder: "Choose an observing mode",
      profiles: [
        { value: "visual", label: "Visual — quick sweep" },
        { value: "short", label: "Short exposure — plate solve" },
        { value: "long", label: "Long exposure — deep sky" },
      ],
      notifyLabel: "NOTIFY ADDRESS",
      notifyError: "This is not a valid email address",
      noteLabel: "OBSERVATION NOTE",
      notePlaceholder: "Weather, moon phase, cautions…",
    },
    toggles: {
      note: "A checked box is a rivet driven home; so is a switch in the on position.",
      checkbox: "Include outer fields",
      checkboxLocked: "Locked target",
      switch: "Run nightly",
    },
    copy: {
      note: "Puts a value on the clipboard. The confirmation is a rivet and a label swap — an acknowledged action reads as selection, not severity. One sits beside every install command on this page.",
      sample: "RA 18h 36m 56s · Dec +38° 47′",
    },
    radio: {
      note: "The chosen option holds a rivet driven into its centre. Selection is silver; lapis appears only as the focus ring.",
      legend: "OBSERVING CADENCE",
      options: [
        { value: "nightly", label: "Nightly" },
        { value: "weekly", label: "Weekly" },
        { value: "event", label: "On transient events only" },
      ],
    },
    slider: {
      note: "A setting dragged along a seam: hairline channel, steel range, steel thumb.",
      label: "EXPOSURE",
    },
    toggle: {
      note: "A pressed-state button. Pressed is a rivet and a deeper fill, not blue.",
      label: "RAW FRAME",
    },
    combobox: {
      note: "A select with a filter line. Options are data and the value rides a hidden input into the form — the public API takes no functions.",
      label: "ASSIGN WATCH",
      placeholder: "Assign a night watch…",
      searchPlaceholder: "Filter…",
      empty: "No watch matches.",
      options: [
        { value: "shu", label: "Dubhe watch" },
        { value: "xuan", label: "Merak watch" },
        { value: "ji", label: "Phecda watch" },
        { value: "duty", label: "Rotation" },
      ],
    },
    datePicker: {
      note: "A calendar in a popover; the date lands in a hidden input — no callback required. The chosen day is a rivet driven home.",
      label: "OBSERVATION WINDOW",
    },
    otp: {
      note: "A code entered one plate at a time. The active slot is edged in lapis because it holds focus — the one legal home for the blue. The caret is a still bar: blinking is a loop, and loops belong to crit.",
      label: "DOME ACCESS CODE",
    },
  },
  overlays: {
    label: "OVERLAYS",
    title: "Overlays",
    intro:
      "Entry and exit of every floating layer are defined in the theme's data-slot rules — a component cannot invent its own entrance.",
    dialog: {
      note: "A centred layer over a lacquer scrim. Focus is trapped, Esc closes, and focus returns to the trigger.",
      trigger: "Open dialog",
      title: "Delete this observation run?",
      description: "This action cannot be undone.",
      body: "Deleting the run stops tonight's schedule. Catalogues and frames already taken are kept.",
      cancel: "Cancel",
      confirm: "Delete",
    },
    sheet: {
      note: "A panel drawn out from an edge. It slides rather than fades — a panel that appears in place reads as a dialog.",
      trigger: "Open sheet",
      title: "Observation run details",
      description: "Long exposure — deep sky",
      body: "Target M31. Runs only after moonset; 300-second subs, stacked.",
      close: "Close",
    },
    dropdown: {
      note: "The selected row is marked by a rivet; destructive actions are marked in crimson and always carry text.",
      trigger: "Actions",
      groupLabel: "OBSERVE",
      run: "Observe now",
      exportReport: "Export catalogue",
      destructive: "Delete run",
    },
    alertDialog: {
      note: "The dialog's stricter sibling: clicking outside does not dismiss it — an explicit answer is required. Esc counts as cancel, so keyboard users always have an exit.",
      trigger: "Stop tracking",
      title: "Stop tracking this target?",
      description: "Pointing data stops updating immediately.",
      body: "Once stopped, the guide star unlocks; re-acquiring means running the plate solve again.",
      cancel: "Cancel",
      confirm: "Stop",
    },
    popover: {
      note: "A small plate lifted beside its trigger: the lightest cut, hairline edge, no shadow.",
      trigger: "Observing window",
      title: "Observing window",
      body: "Nightly 22:00–03:00, after moonset; slips automatically above 40% cloud.",
    },
    tooltip: {
      note: "An instrument annotation on hover or focus. No arrow — a plate does not taper into a bubble.",
      trigger: "mag?",
      tip: "Apparent magnitude — brightness as seen from the ground; smaller is brighter",
    },
    hoverCard: {
      note: "A dossier plate raised on hover: the popover's read-only sibling, previewing a reference without following it.",
      trigger: "Vega",
      title: "Vega · 織女一",
      body: "α Lyrae. Magnitude 0.03, 25 light-years — the weaver star across the river of stars.",
    },
    contextMenu: {
      note: "A menu summoned at the pointer — right-click or long-press. Same surface rules as the dropdown.",
      area: "Right-click this field",
      groupLabel: "TARGET",
      run: "Observe now",
      exportReport: "Copy coordinates",
      destructive: "Remove from catalogue",
    },
    menubar: {
      note: "An observatory menu strip: one bordered plate, menus falling as dropdown plates. The open trigger takes a deeper fill.",
      scanMenu: "Observe",
      viewMenu: "View",
      run: "Observe now",
      exportReport: "Export catalogue",
      destructive: "Delete run",
      modeConsole: "Console mode",
      modeReport: "Report mode",
    },
    command: {
      note: "The observatory palette: type, filter, execute. A real seam separates the query line from the results; the highlighted row is a rivet.",
      inputPlaceholder: "Type a command or search…",
      empty: "No matching command.",
      groupLabel: "OBSERVE",
      items: ["Start sky sweep", "Align the equatorial mount", "Export tonight's catalogue", "Open the observing log"],
    },
    toast: {
      note: "Message plates sliding in from the edge. Severity is a coloured left seam plus the text itself — the same language as alert.",
      neutralButton: "Notify",
      critButton: "Notify crit",
      neutralTitle: "Catalogue exported",
      neutralBody: "vega-field.json written to out/.",
      critTitle: "Tracking lost",
      critBody: "Guide star vanished behind cloud after 3 retries.",
    },
  },
  structure: {
    label: "STRUCTURE",
    title: "Structure",
    intro:
      "The skeleton for data: tabs and tables. Rows are separated by hairline seams, not zebra stripes.",
    tabs: {
      note: "The active tab is marked by a run of rivets; arrow keys move, Home/End jump to the ends.",
      assets: "Catalogue",
      findings: "Events",
      history: "Log",
      findingsBody: "No transient events tonight.",
      historyBody: "Last run: 2 hours ago, clear.",
      host: "STAR",
      service: "MAG",
      exposure: "STATE",
      rows: [
        { host: "Vega · α Lyr", service: "0.03", state: "nominal", label: "steady" },
        { host: "Betelgeuse · α Ori", service: "0.5 var", state: "warn", label: "variable" },
        { host: "Eta Carinae · η Car", service: "4.3", state: "crit", label: "precursor" },
      ],
    },
    accordion: {
      note: "Stacked plates opening along their seams; the open item holds a rivet. The panel appears without a slide.",
      items: [
        { title: "What does the visual mode collect?", body: "Naked-eye and finder-scope sweep notes. The main mirror stays capped; no frames are taken." },
        { title: "Does moonlight affect long exposures?", body: "Yes. Deep-sky runs are scheduled after moonset only; no long exposures on nights of lunar day 12–18." },
        { title: "How long are catalogues kept?", body: "Observing records are kept for 180 days, then rolled into the ephemeris and archived." },
      ],
    },
    collapsible: {
      note: "A single section opening along its seam — the accordion's only child.",
      trigger: "RAW READOUT",
      body: "exp 300s · gain 120 · sensor −10.2°C · seeing 1.8″ · guiding RMS 0.6″",
    },
    breadcrumb: {
      note: "A path through the structure. Every junction is a real boundary, so the separators are rivets — stars live only on seams.",
      segments: ["Star chart", "Lyra"],
      current: "Vega",
    },
    pagination: { note: "Plain links; the current page is a rivet and full-strength text, not a blue pill." },
    scrollArea: {
      note: "A viewport with an instrument scrollbar: hairline channel, steel thumb, no floating pill.",
      lines: [
        "22:00:01 sweep start · sector NE",
        "22:04:12 M31 plate solved · short ×3",
        "22:31:07 guide star locked · RMS 0.6″",
        "23:12:45 cloud 35% · continuing",
        "00:02:18 long 300s ×12 complete",
        "01:44:52 catalogue written · out/m31-0818.json",
        "03:00:00 sweep complete · tube capped",
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
