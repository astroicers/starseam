import * as React from "react";
import { cn } from "@/lib/utils";

type Severity = "nominal" | "live" | "warn" | "crit";

const EDGE: Record<Severity, string> = {
  nominal: "border-l-[var(--ss-rivet)] [&_[data-slot=alert-title]]:text-[var(--ss-text)]",
  live: "border-l-[var(--ss-live)] [&_[data-slot=alert-title]]:text-[var(--ss-live)]",
  warn: "border-l-[var(--ss-warn)] [&_[data-slot=alert-title]]:text-[var(--ss-warn)]",
  crit: "border-l-[var(--ss-crit)] [&_[data-slot=alert-title]]:text-[var(--ss-crit)]",
};

export interface AlertProps extends React.ComponentProps<"div"> {
  /**
   * Colour is severity, never decoration (DECISIONS 01). The default is
   * nominal — a neutral notice on steel.
   */
  state?: Severity;
}

/**
 * A message plate with a severity edge. Depth is fill, the accent is a
 * thickened left seam in the severity colour — no shadow, no tinted wash
 * (DECISIONS 04). The colour never stands alone: the title carries the
 * meaning in text, the edge only flags it.
 */
function Alert({ className, state = "nominal", ...props }: AlertProps) {
  return (
    <div
      role="alert"
      data-slot="alert"
      data-state={state}
      className={cn(
        "rounded-[var(--ss-radius)] border border-[var(--ss-seam-strong)]",
        "border-l-2 bg-[var(--ss-plate-2)] p-[calc(var(--ss-em)*0.875)]",
        EDGE[state],
        className
      )}
      {...props}
    />
  );
}

function AlertTitle({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="alert-title"
      className={cn(
        "font-[family-name:var(--ss-mono)] text-[12px] font-medium uppercase tracking-[var(--ss-track-label)]",
        className
      )}
      {...props}
    />
  );
}

function AlertDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="alert-description"
      className={cn("mt-2 text-[14px] leading-[1.8] text-[var(--ss-text-2)]", className)}
      {...props}
    />
  );
}

export { Alert, AlertTitle, AlertDescription };
