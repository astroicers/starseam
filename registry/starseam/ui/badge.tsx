import * as React from "react";
import { cn } from "@/lib/utils";

type Severity = "nominal" | "live" | "warn" | "crit";

const STATE: Record<Severity, string> = {
  nominal: "border-[var(--ss-seam-strong)] text-[var(--ss-text-2)]",
  live: "border-[var(--ss-live)] text-[var(--ss-live)]",
  warn: "border-[var(--ss-warn)] text-[var(--ss-warn)]",
  crit: "border-[var(--ss-crit)] text-[var(--ss-crit)]",
};

export interface BadgeProps extends React.ComponentProps<"span"> {
  /**
   * Colour is severity, never decoration (DECISIONS 01). Most badges are
   * nominal; a coloured badge is a claim about the state of the thing.
   */
  state?: Severity;
}

/**
 * A stamped status tag: hairline border, no fill, instrument lettering.
 * The severity variants keep an outline treatment rather than a solid wash —
 * the colour marks, it does not paint (DECISIONS 02).
 */
function Badge({ className, state = "nominal", ...props }: BadgeProps) {
  return (
    <span
      data-slot="badge"
      data-state={state}
      className={cn(
        "inline-flex items-center rounded-[var(--ss-radius)] border px-[7px] py-[2px]",
        "font-[family-name:var(--ss-mono)] text-[10.5px] uppercase tracking-[var(--ss-track-label)]",
        STATE[state],
        className
      )}
      {...props}
    />
  );
}

export { Badge };
