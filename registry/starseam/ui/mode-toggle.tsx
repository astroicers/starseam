"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type Mode = "console" | "report";

const STORAGE_KEY = "ss-mode";

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-mode"],
  });

  const query = window.matchMedia("(prefers-color-scheme: light)");
  query.addEventListener("change", onChange);

  return () => {
    observer.disconnect();
    query.removeEventListener("change", onChange);
  };
}

function readMode(): Mode {
  const attr = document.documentElement.getAttribute("data-mode");
  if (attr === "console" || attr === "report") return attr;
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "report"
    : "console";
}

/** The server has no display and no stored preference. Lacquer is the default. */
function serverMode(): Mode {
  return "console";
}

/**
 * console (夜勤) ↔ report (日勤).
 *
 * These are two materials, not an inversion: lacquer under emitted light, and
 * pigment on paper. DECISIONS 05.
 *
 * The document element is the source of truth, so the pre-paint script and
 * this button can never disagree.
 */
function ModeToggle({ className, ...props }: React.ComponentProps<"button">) {
  const mode = React.useSyncExternalStore(subscribe, readMode, serverMode);

  function toggle() {
    const next: Mode = mode === "console" ? "report" : "console";
    document.documentElement.setAttribute("data-mode", next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage unavailable — the attribute still holds for this session */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${mode === "console" ? "report" : "console"} mode`}
      className={cn(
        "font-[family-name:var(--ss-mono)] text-[10px] uppercase tracking-[var(--ss-track-label)]",
        "text-[var(--ss-text-3)] hover:text-[var(--ss-text-2)]",
        "transition-colors duration-[var(--ss-dur)] ease-[var(--ss-ease)]",
        className
      )}
      {...props}
    >
      {mode === "console" ? "夜勤 / console" : "日勤 / report"}
    </button>
  );
}

/**
 * Applies the stored mode before first paint, so the page never flashes the
 * wrong material. Drop into <head>.
 */
const MODE_SCRIPT = `(function(){try{var m=localStorage.getItem("${STORAGE_KEY}");if(m==="console"||m==="report"){document.documentElement.setAttribute("data-mode",m)}}catch(e){}})();`;

export { ModeToggle, MODE_SCRIPT };
