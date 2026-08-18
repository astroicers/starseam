import type { ReactNode } from "react";

/**
 * The showcase copy for one locale. Fields are data only — inline markup
 * (a lang="ja" span, an emphasised word) rides along as ReactNode, evaluated
 * statically inside a server component. No functions cross any boundary.
 */

export type SectionId =
  | "readings"
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
    mode: { auto: string; console: string; report: string };
    modeAria: string;
    langAria: string;
  };
  hero: { tagline: ReactNode };
  stats: { label: string; value: string; state?: "live" }[];
  readings: SectionHead & {
    cards: { en: string; title: string; body: string }[];
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
  };
  controls: SectionHead & {
    button: { note: string; quiet: string; live: string; disabled: string };
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
