"use client";

import * as React from "react";
import { Seam } from "@/components/ui/seam";
import type { Dictionary } from "../_content/types";

export const OPEN_COMMAND_EVENT = "ss-open-command";

/**
 * Site chrome, not a design-system component. Once the reader scrolls past
 * the masthead, a vertical seam docks at the left edge with one rivet per
 * section — the constellation of the page; the star for the section you are
 * in is the one that is lit (DECISIONS 03). Hovering or focusing the rail
 * expands it into a plate with the section names beside their stars — the
 * expansion is an instant state flip, not a tween (DECISIONS 08). At the
 * rail's foot, past a seam, sits the search star: it opens the command
 * palette — the rail jumps between sections, the palette between all fifty
 * pieces.
 */
export function StarRail({
  sections,
  ariaLabel,
  searchLabel,
}: Readonly<{
  sections: Dictionary["header"]["nav"];
  ariaLabel: string;
  searchLabel: string;
}>) {
  const [docked, setDocked] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);
  const [active, setActive] = React.useState<string | null>(null);

  React.useEffect(() => {
    const onScroll = () => setDocked(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    const targets = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [sections]);

  if (!docked) return null;

  const rowClass =
    "relative flex h-[34px] w-full min-w-[28px] items-center gap-[12px] outline-none " +
    "focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-[-1px] focus-visible:outline-[var(--ss-live)]";
  const labelClass =
    "whitespace-nowrap font-[family-name:var(--ss-mono)] text-[12px] uppercase tracking-[var(--ss-track-label)]";

  return (
    <nav
      aria-label={ariaLabel}
      data-slot="rail-panel"
      data-state="open"
      data-expanded={expanded || undefined}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      onFocus={() => setExpanded(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setExpanded(false);
      }}
      className={
        "fixed left-3 top-1/2 z-40 hidden -translate-y-1/2 lg:block " +
        (expanded
          ? "rounded-[var(--ss-radius)] border border-[var(--ss-seam-strong)] bg-[var(--ss-plate-1)] px-[14px] py-[10px]"
          : "w-[46px] px-[9px] py-[10px]")
      }
    >
      <div className="relative">
        {/* The spine: a vertical seam the stars sit on. */}
        <span
          aria-hidden="true"
          className="absolute inset-y-[5px] left-[7px] w-px bg-[var(--ss-seam)]"
        />
        {sections.map((s) => {
          const lit = active === s.id;
          return (
            <a key={s.id} href={`#${s.id}`} aria-label={s.label} aria-current={lit ? "true" : undefined} className={rowClass}>
              <span className="flex w-[15px] shrink-0 justify-center">
                <span
                  className={`block rounded-full transition-colors duration-[var(--ss-dur)] ease-[var(--ss-ease)] ${
                    lit
                      ? "size-[10px] bg-[var(--ss-rivet)]"
                      : "size-[8px] bg-[var(--ss-rivet-quiet)] hover:bg-[var(--ss-rivet)]"
                  }`}
                />
              </span>
              {expanded ? (
                <span
                  className={`${labelClass} ${lit ? "text-[var(--ss-text)]" : "text-[var(--ss-text-3)]"}`}
                >
                  {s.label}
                </span>
              ) : null}
            </a>
          );
        })}
      </div>
      <div className="my-[8px]">
        <Seam />
      </div>
      {/* The search star: coarse jumps above the seam, fine jumps below it. */}
      <button
        type="button"
        aria-label={searchLabel}
        onClick={() => window.dispatchEvent(new Event(OPEN_COMMAND_EVENT))}
        className={`${rowClass} w-full text-left`}
      >
        <kbd className="flex size-[20px] shrink-0 items-center justify-center rounded-[var(--ss-radius)] border border-[var(--ss-seam-strong)] border-b-2 bg-[var(--ss-plate-2)] font-[family-name:var(--ss-mono)] text-[10.5px] text-[var(--ss-text-2)]">
          K
        </kbd>
        {expanded ? (
          <span className={`${labelClass} text-[var(--ss-text-3)]`}>
            {searchLabel} · Ctrl K
          </span>
        ) : null}
      </button>
    </nav>
  );
}
