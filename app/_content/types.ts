import type { ReactNode } from "react";

/**
 * The showcase copy for one locale. Fields are data only — inline markup
 * (a lang="ja" span, an emphasised word) rides along as ReactNode, evaluated
 * statically inside a server component. No functions cross any boundary.
 */

export type SectionId =
  | "readings"
  | "index"
  | "palette"
  | "surfaces"
  | "instruments"
  | "controls"
  | "overlays"
  | "structure"
  | "decisions"
  | "install";

export interface SectionHead {
  /** Instrument label above the heading, e.g. "SURFACES". */
  label: string;
  title: string;
  intro?: ReactNode;
}

export interface Dictionary {
  meta: { title: string; description: string };
  header: {
    nav: { id: SectionId; label: string }[];
    navAria: string;
    commandK: { placeholder: string; empty: string; aria: string };
    mode: { auto: string; console: string; report: string };
    modeAria: string;
    langAria: string;
  };
  hero: { tagline: ReactNode };
  stats: { label: string; value: string; state?: "live" }[];
  readings: SectionHead & {
    cards: { en: string; title: string; body: string }[];
  };
  componentIndex: SectionHead;
  palette: SectionHead & {
    consoleLabel: string;
    reportLabel: string;
    roles: {
      ground: string;
      plate1: string;
      plate2: string;
      plate3: string;
      seam: string;
      seamStrong: string;
      rivet: string;
      rivetQuiet: string;
      text: string;
      text2: string;
      text3: string;
      live: string;
      warn: string;
      crit: string;
    };
  };
  surfaces: SectionHead & {
    plate: { note: string; flush: string; raised: string; float: string };
    lames: {
      note: string;
      cyTitle: string;
      cyBody: string;
      cyLive: string;
      assetsLabel: string;
      exposedLabel: string;
      merakTitle: string;
      merakBody: string;
      aspTitle: string;
      aspBody: string;
    };
    seam: { note: string; rows: string[] };
    alert: { note: string; title: string; body: string; critTitle: string; critBody: string };
    skeleton: { note: string };
  };
  instruments: SectionHead & {
    mark: { note: string };
    labelSpec: { note: string; samples: string[] };
    value: {
      note: string;
      rows: { label: string; value: string; state: "nominal" | "warn" | "crit" }[];
    };
    statusDot: {
      note: string;
      rows: { state: "nominal" | "live" | "warn" | "crit"; label: string }[];
    };
    statBand: {
      note: string;
      stats: { label: string; value: string; state?: "warn" }[];
    };
    codeTag: { note: string; samples: string[] };
    modeSwitch: { note: string };
    badge: { note: string; rows: { state: "nominal" | "live" | "warn" | "crit"; label: string }[] };
    kbd: { note: string };
    avatar: { note: string };
    progress: { note: string; label: string };
  };
  controls: SectionHead & {
    button: {
      note: string;
      quiet: string;
      live: string;
      disabled: string;
      crit: string;
      ghost: string;
    };
    buttonGroup: { note: string; run: string; pause: string; seal: string };
    scenario: {
      title: string;
      note: string;
      domainLabel: string;
      domainHint: string;
      domainPlaceholder: string;
      profileLabel: string;
      profilePlaceholder: string;
      profiles: { value: string; label: string }[];
      notifyLabel: string;
      notifyError: string;
      noteLabel: string;
      notePlaceholder: string;
    };
    toggles: {
      note: string;
      checkbox: string;
      checkboxLocked: string;
      switch: string;
    };
    copy: { note: string; sample: string };
    radio: { note: string; legend: string; options: { value: string; label: string }[] };
    slider: { note: string; label: string };
    toggle: { note: string; label: string };
    combobox: {
      note: string;
      label: string;
      placeholder: string;
      searchPlaceholder: string;
      empty: string;
      options: { value: string; label: string }[];
    };
    datePicker: { note: string; label: string };
    otp: { note: string; label: string };
  };
  overlays: SectionHead & {
    dialog: {
      note: string;
      trigger: string;
      title: string;
      description: string;
      body: string;
      cancel: string;
      confirm: string;
    };
    sheet: {
      note: string;
      trigger: string;
      title: string;
      description: string;
      body: string;
      close: string;
    };
    dropdown: {
      note: string;
      trigger: string;
      groupLabel: string;
      run: string;
      exportReport: string;
      destructive: string;
    };
    alertDialog: {
      note: string;
      trigger: string;
      title: string;
      description: string;
      body: string;
      cancel: string;
      confirm: string;
    };
    popover: { note: string; trigger: string; title: string; body: string };
    tooltip: { note: string; trigger: string; tip: string };
    hoverCard: { note: string; trigger: string; title: string; body: string };
    contextMenu: {
      note: string;
      area: string;
      groupLabel: string;
      run: string;
      exportReport: string;
      destructive: string;
    };
    menubar: {
      note: string;
      scanMenu: string;
      viewMenu: string;
      run: string;
      exportReport: string;
      destructive: string;
      modeConsole: string;
      modeReport: string;
    };
    command: {
      note: string;
      inputPlaceholder: string;
      empty: string;
      groupLabel: string;
      items: string[];
    };
    toast: {
      note: string;
      neutralButton: string;
      critButton: string;
      neutralTitle: string;
      neutralBody: string;
      critTitle: string;
      critBody: string;
    };
  };
  structure: SectionHead & {
    tabs: {
      note: string;
      assets: string;
      findings: string;
      history: string;
      findingsBody: string;
      historyBody: string;
      host: string;
      service: string;
      exposure: string;
      rows: {
        host: string;
        service: string;
        state: "nominal" | "warn" | "crit";
        label: string;
      }[];
    };
    accordion: { note: string; items: { title: string; body: string }[] };
    collapsible: { note: string; trigger: string; body: string };
    breadcrumb: { note: string; segments: string[]; current: string };
    pagination: { note: string };
    scrollArea: { note: string; lines: string[] };
    codeBlock: { note: string; filename: string; expand: string; collapse: string };
    prose: {
      note: string;
      heading: string;
      lead: string;
      bodyA: string;
      bodyB: string;
      linkText: string;
      bodyC: string;
      quote: string;
    };
  };
  decisions: SectionHead & {
    rulings: [string, string, string][];
  };
  install: SectionHead & {
    body: ReactNode;
    namespaceNote: ReactNode;
  };
  footer: { license: ReactNode };
}
