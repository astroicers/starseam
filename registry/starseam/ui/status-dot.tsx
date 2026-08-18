import * as React from "react";
import { cn } from "@/lib/utils";

type Severity = "nominal" | "live" | "warn" | "crit";

const FILL: Record<Severity, string> = {
  nominal: "var(--ss-rivet-quiet)",
  live: "var(--ss-live)",
  warn: "var(--ss-warn)",
  crit: "var(--ss-crit)",
};

export interface StatusDotProps extends React.ComponentProps<"span"> {
  state?: Severity;
  /** Accessible text. Colour alone must never carry the meaning. */
  label?: string;
}

/**
 * A single rivet standing in for a status. Only the critical state animates —
 * it is the one permitted loop in the system. DECISIONS 08.
 */
function StatusDot({ className, state = "nominal", label, ...props }: StatusDotProps) {
  return (
    <span
      data-slot="status-dot"
      data-state={state}
      className={cn("inline-flex items-center gap-2", className)}
      {...props}
    >
      <span
        aria-hidden="true"
        className="block size-[5px] rounded-full"
        style={{
          background: FILL[state],
          animation:
            state === "crit"
              ? "ss-crit-pulse 1.6s var(--ss-ease) infinite"
              : undefined,
        }}
      />
      {label ? (
        <span className="font-[family-name:var(--ss-mono)] text-[10.5px] uppercase tracking-[var(--ss-track-label)]">
          {label}
        </span>
      ) : null}
    </span>
  );
}

export { StatusDot };
