"use client";

import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { cn } from "@/lib/utils";

type ModeChoice = "auto" | "console" | "report";

const STORAGE_KEY = "ss-mode";

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-mode"],
  });
  return () => observer.disconnect();
}

/**
 * The segment shown as selected is the *choice*, not the resolved material:
 * "auto" stays selected while the system preference decides between console
 * and report, so no matchMedia subscription is needed here.
 */
function readChoice(): ModeChoice {
  const attr = document.documentElement.getAttribute("data-mode");
  if (attr === "console" || attr === "report") return attr;
  return "auto";
}

/**
 * The server cannot read localStorage, so it renders "auto". A visitor with a
 * stored preference sees the selection correct itself on hydration — the same
 * first-paint constraint the pre-paint script already handles for the colours.
 */
function serverChoice(): ModeChoice {
  return "auto";
}

export interface ModeSwitchProps
  extends Omit<
    React.ComponentProps<typeof ToggleGroupPrimitive.Root>,
    "type" | "value" | "defaultValue" | "onValueChange"
  > {
  /** Segment labels — data, never functions. DECISIONS 11. */
  labels?: { auto?: string; console?: string; report?: string };
}

/**
 * auto / console (夜勤) / report (日勤).
 *
 * Console and report are two materials, not an inversion (DECISIONS 05), and
 * "auto" hands the choice back to the system: it clears the stored preference
 * and removes data-mode so the prefers-color-scheme rules in the theme take
 * over. The selected segment is marked by a rivet and a deeper plate fill —
 * selection is never lapis (DECISIONS 10). The only motion is the 160ms colour
 * transition; there is no sliding thumb (DECISIONS 08).
 *
 * The document element is the source of truth, so the pre-paint script and
 * this control can never disagree.
 */
function ModeSwitch({ className, labels, ...props }: ModeSwitchProps) {
  const choice = React.useSyncExternalStore(subscribe, readChoice, serverChoice);

  const text: Record<ModeChoice, string> = {
    auto: labels?.auto ?? "AUTO",
    console: labels?.console ?? "CONSOLE",
    report: labels?.report ?? "REPORT",
  };

  function choose(next: string) {
    // Radix single toggle groups report "" when the active item is clicked
    // again; a mode is never deselected, so the empty value is ignored.
    if (next !== "auto" && next !== "console" && next !== "report") return;
    if (next === "auto") {
      document.documentElement.removeAttribute("data-mode");
    } else {
      document.documentElement.setAttribute("data-mode", next);
    }
    try {
      if (next === "auto") localStorage.removeItem(STORAGE_KEY);
      else localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage unavailable — the attribute still holds for this session */
    }
  }

  return (
    <ToggleGroupPrimitive.Root
      type="single"
      value={choice}
      onValueChange={choose}
      data-slot="mode-switch"
      aria-label={props["aria-label"] ?? "Colour mode"}
      className={cn(
        "inline-flex items-stretch rounded-[var(--ss-radius)]",
        "border border-[var(--ss-seam-strong)] divide-x divide-[var(--ss-seam)]",
        className
      )}
      {...props}
    >
      {(["auto", "console", "report"] as const).map((value) => (
        <ToggleGroupPrimitive.Item
          key={value}
          value={value}
          data-slot="mode-switch-item"
          className={cn(
            "flex items-center gap-[6px] px-[10px] py-[5px]",
            "font-[family-name:var(--ss-mono)] text-[10.5px] uppercase tracking-[var(--ss-track-label)]",
            "text-[var(--ss-text-3)] hover:text-[var(--ss-text-2)]",
            "transition-colors duration-[var(--ss-dur)] ease-[var(--ss-ease)]",
            "data-[state=on]:bg-[var(--ss-plate-2)] data-[state=on]:text-[var(--ss-text)]",
            "outline-none focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-[-1px] focus-visible:outline-[var(--ss-live)]"
          )}
        >
          {/* The active segment is marked by a rivet, not by a colour wash. */}
          <span
            aria-hidden="true"
            className={cn(
              "block size-[5px] rounded-full",
              choice === value ? "bg-[var(--ss-rivet)]" : "bg-transparent"
            )}
          />
          {text[value]}
        </ToggleGroupPrimitive.Item>
      ))}
    </ToggleGroupPrimitive.Root>
  );
}

/**
 * Applies the stored mode before first paint, so the page never flashes the
 * wrong material. "auto" is simply the absence of a stored value. Drop into
 * <head>.
 */
const MODE_SCRIPT = `(function(){try{var m=localStorage.getItem("${STORAGE_KEY}");if(m==="console"||m==="report"){document.documentElement.setAttribute("data-mode",m)}}catch(e){}})();`;

export { ModeSwitch, MODE_SCRIPT };
