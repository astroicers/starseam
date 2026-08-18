import * as React from "react";
import { cn } from "@/lib/utils";

export interface SeamProps extends React.ComponentProps<"div"> {
  /**
   * A seam carrying a live signal rivets in 瑠璃 instead of steel.
   * Use it sparingly — the whole point is that blue is rare. DECISIONS 02.
   */
  live?: boolean;
  /** Every nth rivet is a major one, matching the mark. */
  majorEvery?: number;
}

/**
 * The signature component. A row of rivets marking where two blocks join.
 *
 * Put a Seam only between things that are actually joined — sections, list
 * items, the boundary between a header and its data. If removing the seam
 * would not change what the layout means, the seam is decoration and must
 * not be there. DECISIONS 03.
 */
function Seam({ className, live = false, majorEvery = 8, ...props }: SeamProps) {
  const rivet = live ? "var(--ss-live)" : "var(--ss-rivet)";

  return (
    <div
      data-slot="seam"
      data-state={live ? "live" : undefined}
      role="presentation"
      aria-hidden="true"
      className={cn("relative h-px w-full bg-[var(--ss-seam)]", className)}
      style={
        {
          "--rivet-color": rivet,
          "--rivet-major": String(majorEvery),
        } as React.CSSProperties
      }
      {...props}
    >
      <span
        className="pointer-events-none absolute inset-x-0 block"
        style={{
          top: "calc(var(--ss-rivet-size) / -2)",
          height: "var(--ss-rivet-size)",
          backgroundImage: `radial-gradient(circle, ${rivet} 0 calc(var(--ss-rivet-size) / 2), transparent calc(var(--ss-rivet-size) / 2 + 0.5px))`,
          backgroundSize: "var(--ss-rivet-pitch) var(--ss-rivet-size)",
          backgroundRepeat: "repeat-x",
        }}
      />
    </div>
  );
}

export { Seam };
