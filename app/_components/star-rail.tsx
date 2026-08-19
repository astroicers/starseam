"use client";

import * as React from "react";
import type { Dictionary } from "../_content/types";

/**
 * Site chrome, not a design-system component. Once the reader scrolls past
 * the masthead, a vertical seam docks at the left edge with one rivet per
 * section — the constellation of the page. The star for the section you are
 * in is the one that is lit (DECISIONS 03: stars mark real junctions; your
 * position in the page is one of them). Docking is a state change; the panel
 * enters through the theme's floating-layer animation, not a scroll effect.
 */
export function StarRail({
  sections,
  ariaLabel,
}: Readonly<{
  sections: Dictionary["header"]["nav"];
  ariaLabel: string;
}>) {
  const [docked, setDocked] = React.useState(false);
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

  return (
    <nav
      aria-label={ariaLabel}
      data-slot="rail-panel"
      data-state="open"
      className="fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
    >
      <div className="relative flex flex-col items-center gap-[2px] py-[6px]">
        {/* The spine: a vertical seam the stars sit on. */}
        <span
          aria-hidden="true"
          className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-[var(--ss-seam)]"
        />
        {sections.map((s) => {
          const lit = active === s.id;
          return (
            <a
              key={s.id}
              href={`#${s.id}`}
              title={s.label}
              aria-label={s.label}
              aria-current={lit ? "true" : undefined}
              className="relative flex size-[18px] items-center justify-center outline-none focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-1 focus-visible:outline-[var(--ss-live)]"
            >
              <span
                className={`block rounded-full transition-colors duration-[var(--ss-dur)] ease-[var(--ss-ease)] ${
                  lit
                    ? "size-[6px] bg-[var(--ss-rivet)]"
                    : "size-[4px] bg-[var(--ss-rivet-quiet)] hover:bg-[var(--ss-rivet)]"
                }`}
              />
            </a>
          );
        })}
      </div>
    </nav>
  );
}
