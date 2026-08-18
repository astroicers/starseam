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
        body: "The same figure, rivets read as stars and seams as constellation lines. An attack path is stars joined into a figure.",
      },
      {
        en: "PPI SCOPE",
        title: "PPI scope",
        body: "Concentric rings, bearing lines, sweep sectors — the instrument in the monitoring room.",
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
      note: "Plate pressed over plate, seams visible. Overlap is a signature move, reserved for hero areas and cards.",
      cyTitle: "CyPulse",
      cyBody: "Open-source external attack-surface management",
      cyLive: "live",
      assetsLabel: "ASSETS",
      exposedLabel: "EXPOSED",
      merakTitle: "Merak",
      merakBody: "Zero-trust platform · OpenZiti + Keycloak",
      aspTitle: "ASP",
      aspBody: "AI-SOP-Protocol governance framework",
    },
    seam: {
      note: "A hairline scored into a single plate, decorative only — grouping is carried by the heading structure, never by this line.",
      rows: ["Between sections", "Between list items", "Where navigation meets content"],
    },
    alert: {
      note: "A message plate with a severity edge — a strengthened seam on the left. The colour never stands alone; the title says it in words.",
      title: "Schedule paused",
      body: "More than three scans queued; new jobs wait for the next window.",
      critTitle: "Certificate expiring",
      critBody: "The certificate on vpn.example.gov.tw expires in 3 days. Replace it now.",
    },
    skeleton: {
      note: "A placeholder plate. It does not shimmer and it does not pulse — the only permitted loop belongs to crit. Waiting quietly is honest waiting.",
    },
  },
  instruments: {
    label: "INSTRUMENTS",
    title: "Instruments",
    intro:
      "Monitoring-room instrumentation: scales, readings, status points. Colour is severity — anything without a state is neutral, and neutral is the norm.",
    mark: {
      note: "The parametric helmet plan: plates counts the plates, rings the concentric circles, majorEvery the pitch of the major rivets.",
    },
    labelSpec: {
      note: "Panel-scale lettering. Monospaced, uppercase, 0.20em tracking.",
      samples: ["TARGET DOMAIN", "EXPOSURE", "LAST SCAN"],
    },
    value: {
      note: "A reading. State is severity, never decoration — do not pass one because “this could use some colour”.",
      rows: [
        { label: "ASSETS", value: "1,284", state: "nominal" },
        { label: "EXPOSED", value: "17", state: "warn" },
        { label: "BREACHED", value: "3", state: "crit" },
      ],
    },
    statusDot: {
      note: "A single rivet standing in for a status, always paired with text. Only crit pulses — the one permitted loop in the system.",
      rows: [
        { state: "nominal", label: "nominal" },
        { state: "live", label: "live" },
        { state: "warn", label: "review" },
        { state: "crit", label: "critical" },
      ],
    },
    statBand: {
      note: "A band of readings, rivets set along the dividers — stars live only on seams.",
      stats: [
        { label: "SCANS", value: "148" },
        { label: "QUEUE", value: "3" },
        { label: "FAILED", value: "1", state: "warn" },
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
        { state: "live", label: "scanning" },
        { state: "warn", label: "degraded" },
        { state: "crit", label: "breached" },
      ],
    },
    kbd: { note: "A key cap: a keystroke-sized raised plate, expressed with fill and a strengthened bottom seam — no shadow." },
    avatar: { note: "An identity plate: square, 2px radius, hairline seam; the fallback is instrument lettering, not a pastel disc." },
    progress: {
      note: "A determinate reading in rivet steel. No indeterminate sweep — an endless loop belongs to crit alone; if the length is unknown, say so in text.",
      label: "SCAN 64%",
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
      title: "Scenario: scan profile",
      note: "field receives its control as an element child and injects id and aria-describedby — the public API takes no functions.",
      domainLabel: "TARGET DOMAIN",
      domainHint: "A single domain, no protocol",
      domainPlaceholder: "example.gov.tw",
      profileLabel: "SCAN PROFILE",
      profilePlaceholder: "Choose a scan profile",
      profiles: [
        { value: "passive", label: "Passive — DNS / CT only" },
        { value: "light", label: "Light — HTTP fingerprint" },
        { value: "full", label: "Full — active probing" },
      ],
      notifyLabel: "NOTIFY ADDRESS",
      notifyError: "This is not a valid email address",
      noteLabel: "ENGAGEMENT NOTE",
      notePlaceholder: "Authorised scope and window…",
    },
    toggles: {
      note: "A checked box is a rivet driven home; so is a switch in the on position.",
      checkbox: "Include subdomains",
      checkboxLocked: "Locked scope",
      switch: "Run daily",
    },
    copy: {
      note: "Puts a value on the clipboard. The confirmation is a rivet and a label swap — an acknowledged action reads as selection, not severity. One sits beside every install command on this page.",
      sample: "ssh soc@ops.example.gov.tw",
    },
    radio: {
      note: "The chosen option holds a rivet driven into its centre. Selection is silver; lapis appears only as the focus ring.",
      legend: "REPORT CADENCE",
      options: [
        { value: "daily", label: "Daily" },
        { value: "weekly", label: "Weekly" },
        { value: "incident", label: "On incident only" },
      ],
    },
    slider: {
      note: "A setting dragged along a seam: hairline channel, steel range, steel thumb.",
      label: "SCAN INTENSITY",
    },
    toggle: {
      note: "A pressed-state button. Pressed is a rivet and a deeper fill, not blue.",
      label: "RAW VIEW",
    },
    combobox: {
      note: "A select with a filter line. Options are data and the value rides a hidden input into the form — the public API takes no functions.",
      label: "ASSIGN ANALYST",
      placeholder: "Assign an analyst…",
      searchPlaceholder: "Filter…",
      empty: "No one matches.",
      options: [
        { value: "chen", label: "S. Chen" },
        { value: "lin", label: "J. Lin" },
        { value: "wang", label: "T. Wang" },
        { value: "duty", label: "On-call rotation" },
      ],
    },
    datePicker: {
      note: "A calendar in a popover; the date lands in a hidden input — no callback required. The chosen day is a rivet driven home.",
      label: "ENGAGEMENT START",
    },
    otp: {
      note: "A code entered one plate at a time. The active slot is edged in lapis because it holds focus — the one legal home for the blue. The caret is a still bar: blinking is a loop, and loops belong to crit.",
      label: "VERIFICATION CODE",
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
      title: "Delete this scan profile?",
      description: "This action cannot be undone.",
      body: "Deleting the profile stops its scheduled runs. Historical scan results are kept.",
      cancel: "Cancel",
      confirm: "Delete",
    },
    sheet: {
      note: "A panel drawn out from an edge. It slides rather than fades — a panel that appears in place reads as a dialog.",
      trigger: "Open sheet",
      title: "Scan profile details",
      description: "Passive — DNS / CT only",
      body: "The passive profile queries public sources only: DNS records and certificate-transparency logs. No packets are sent to the target.",
      close: "Close",
    },
    dropdown: {
      note: "The selected row is marked by a rivet; destructive actions are marked in crimson and always carry text.",
      trigger: "Actions",
      groupLabel: "SCAN",
      run: "Run now",
      exportReport: "Export report",
      destructive: "Delete profile",
    },
    alertDialog: {
      note: "The dialog's stricter sibling: clicking outside does not dismiss it — an explicit answer is required. Esc counts as cancel, so keyboard users always have an exit.",
      trigger: "Revoke access",
      title: "Revoke this API key?",
      description: "Integrations using this key stop working immediately.",
      body: "Revocation cannot be undone; the only way back is issuing a new key.",
      cancel: "Cancel",
      confirm: "Revoke",
    },
    popover: {
      note: "A small plate lifted beside its trigger: the lightest cut, hairline edge, no shadow.",
      trigger: "Scan window",
      title: "Scan window",
      body: "Daily 02:00–05:00 (UTC+8), clear of business peaks.",
    },
    tooltip: {
      note: "An instrument annotation on hover or focus. No arrow — a plate does not taper into a bubble.",
      trigger: "CT?",
      tip: "Certificate Transparency — the public certificate log",
    },
    hoverCard: {
      note: "A dossier plate raised on hover: the popover's read-only sibling, previewing a reference without following it.",
      trigger: "@astroicers",
      title: "astroicers",
      body: "Author of starseam. Open-source attack-surface management, zero trust, AI governance.",
    },
    contextMenu: {
      note: "A menu summoned at the pointer — right-click or long-press. Same surface rules as the dropdown.",
      area: "Right-click this area",
      groupLabel: "ASSET",
      run: "Rescan now",
      exportReport: "Copy hostname",
      destructive: "Remove from inventory",
    },
    menubar: {
      note: "A console menu strip: one bordered plate, menus falling as dropdown plates. The open trigger takes a deeper fill.",
      scanMenu: "Scan",
      viewMenu: "View",
      run: "Run now",
      exportReport: "Export report",
      destructive: "Delete profile",
      modeConsole: "Console mode",
      modeReport: "Report mode",
    },
    command: {
      note: "The console palette: type, filter, execute. A real seam separates the query line from the results; the highlighted row is a rivet.",
      inputPlaceholder: "Type a command or search…",
      empty: "No matching command.",
      groupLabel: "SCAN",
      items: ["Run full scan now", "Re-verify certificate chains", "Export weekly report", "Open audit log"],
    },
    toast: {
      note: "Message plates sliding in from the edge. Severity is a coloured left seam plus the text itself — the same language as alert.",
      neutralButton: "Notify",
      critButton: "Notify crit",
      neutralTitle: "Report exported",
      neutralBody: "weekly-report.pdf written to out/.",
      critTitle: "Scan failed",
      critBody: "Target refused the connection after 3 retries.",
    },
  },
  structure: {
    label: "STRUCTURE",
    title: "Structure",
    intro:
      "The skeleton for data: tabs and tables. Rows are separated by hairline seams, not zebra stripes.",
    tabs: {
      note: "The active tab is marked by a run of rivets; arrow keys move, Home/End jump to the ends.",
      assets: "Assets",
      findings: "Findings",
      history: "History",
      findingsBody: "No findings awaiting review.",
      historyBody: "Last scan: 2 hours ago.",
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
      note: "Stacked plates opening along their seams; the open item holds a rivet. The panel appears without a slide.",
      items: [
        { title: "What does a passive scan collect?", body: "DNS records and certificate-transparency logs. No packets are sent to the target." },
        { title: "Will active probing be noticed?", body: "Yes. The Full profile includes HTTP fingerprinting and port scans — confirm the authorised window." },
        { title: "How long are results kept?", body: "Scan results are kept for 180 days, then rolled into monthly reports and archived." },
      ],
    },
    collapsible: {
      note: "A single section opening along its seam — the accordion's only child.",
      trigger: "RAW RESPONSE",
      body: "HTTP/2 200 · server: nginx · strict-transport-security: max-age=63072000 · x-frame-options: DENY",
    },
    breadcrumb: {
      note: "A path through the structure. Every junction is a real boundary, so the separators are rivets — stars live only on seams.",
      segments: ["Assets", "example.gov.tw"],
      current: "vpn.example.gov.tw",
    },
    pagination: { note: "Plain links; the current page is a rivet and full-strength text, not a blue pill." },
    scrollArea: {
      note: "A viewport with an instrument scrollbar: hairline channel, steel thumb, no floating pill.",
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
    title: "Decisions",
    intro:
      "Colours and components will change; the rulings will not. Before building anything new, check it against every line below.",
    rulings: [
      ["01", "Colour is severity", "In a monitoring room, colour was never decoration."],
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
