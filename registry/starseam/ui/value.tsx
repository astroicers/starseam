import * as React from "react";
import { cn } from "@/lib/utils";

type Severity = "nominal" | "live" | "warn" | "crit";

const SEVERITY: Record<Severity, string> = {
  nominal: "text-[var(--ss-text)]",
  live: "text-[var(--ss-live)]",
  warn: "text-[var(--ss-warn)]",
  crit: "text-[var(--ss-crit)]",
};

export interface ValueProps extends React.ComponentProps<"span"> {
  /**
   * Colour is severity, never decoration. Do not pass a state simply because
   * the layout wants some colour here. DECISIONS 01.
   */
  state?: Severity;
}

/** A readout. Tabular figures so columns of numbers line up. */
function Value({ className, state = "nominal", ...props }: ValueProps) {
  return (
    <span
      data-slot="value"
      data-state={state}
      className={cn(
        "font-[family-name:var(--ss-mono)] font-medium tabular-nums",
        SEVERITY[state],
        className
      )}
      {...props}
    />
  );
}

export { Value };
