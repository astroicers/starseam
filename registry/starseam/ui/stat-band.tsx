import * as React from "react";
import { cn } from "@/lib/utils";
import { Label } from "@/registry/starseam/ui/label";
import { Value } from "@/registry/starseam/ui/value";
import { StatusDot } from "@/registry/starseam/ui/status-dot";

type Severity = "nominal" | "live" | "warn" | "crit";

export interface Stat {
  label: string;
  value: string;
  state?: Severity;
}

export interface StatBandProps extends React.ComponentProps<"div"> {
  stats: Stat[];
}

/**
 * The instrument strip. Cells divided by seam lines, the way a panel is
 * divided by the gaps between gauges.
 *
 * Sits directly under a seam, because the band and whatever is above it are
 * two different things that meet — which is exactly when rivets are earned.
 */
function StatBand({ stats, className, ...props }: StatBandProps) {
  return (
    <div
      data-slot="stat-band"
      className={cn("grid", className)}
      style={{
        gridTemplateColumns: `repeat(${stats.length}, minmax(0, 1fr))`,
      }}
      {...props}
    >
      {stats.map((s, i) => (
        <div
          key={s.label}
          className={cn(
            "px-[var(--ss-em)] py-[calc(var(--ss-em)*0.75)]",
            i > 0 && "border-l border-[var(--ss-seam)]"
          )}
        >
          <Label>{s.label}</Label>
          <div className="mt-[6px] text-[13px]">
            {s.state && s.state !== "nominal" ? (
              <span className="inline-flex items-center gap-[7px]">
                <StatusDot state={s.state} />
                <Value state={s.state}>{s.value}</Value>
              </span>
            ) : (
              <Value>{s.value}</Value>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export { StatBand };
