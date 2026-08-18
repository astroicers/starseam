import * as React from "react";
import { cn } from "@/lib/utils";

export interface MarkProps extends React.ComponentProps<"svg"> {
  size?: number;
  /** Plate count. 8 for favicon sizes, 24–32 for display. */
  plates?: number;
  /** Rings of rivets between the aperture and the brim. */
  rings?: number;
  /** Every nth seam carries a major rivet. */
  majorEvery?: number;
  /** Draw the scanning sector. Off by default — it is a live-state cue. */
  sweep?: boolean;
}

/**
 * The mark. A star-riveted helmet seen from above.
 *
 * Three readings, all of them true:
 *   the plan of a kabuto · a star chart · a PPI radar scope
 *
 * The aperture at the centre is the 八幡座 — the origin every plate radiates
 * from, and the only place 瑠璃 appears.
 */
function Mark({
  size = 240,
  plates = 24,
  rings = 2,
  majorEvery = 6,
  sweep = false,
  className,
  ...props
}: MarkProps) {
  const c = size / 2;
  const rOuter = c * 0.9;
  const rInner = c * 0.185;

  const seams: React.ReactElement[] = [];
  const rivets: React.ReactElement[] = [];

  for (let i = 0; i < plates; i++) {
    const a = (i / plates) * Math.PI * 2 - Math.PI / 2;
    seams.push(
      <line
        key={`s${i}`}
        x1={c + Math.cos(a) * rInner}
        y1={c + Math.sin(a) * rInner}
        x2={c + Math.cos(a) * rOuter}
        y2={c + Math.sin(a) * rOuter}
        stroke="var(--ss-seam-strong)"
        strokeWidth={0.75}
      />
    );
    for (let j = 0; j < rings; j++) {
      const t = rInner + (rOuter - rInner) * ((j + 0.7) / rings);
      const major = i % majorEvery === 0;
      rivets.push(
        <circle
          key={`r${i}-${j}`}
          cx={c + Math.cos(a) * t}
          cy={c + Math.sin(a) * t}
          r={major ? size * 0.017 : size * 0.0095}
          fill={major ? "var(--ss-rivet)" : "var(--ss-rivet-quiet)"}
        />
      );
    }
  }

  const a0 = -Math.PI / 2 + 0.3;
  const a1 = -Math.PI / 2 + 0.92;

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      width={size}
      height={size}
      role="img"
      aria-label="starseam"
      className={cn("block", className)}
      {...props}
    >
      <title>starseam</title>
      <desc>
        Plan of a star-riveted helmet: plates radiating from a central
        aperture, rivets along every seam.
      </desc>
      <circle
        cx={c}
        cy={c}
        r={rOuter}
        fill="none"
        stroke="var(--ss-seam-strong)"
        strokeWidth={1}
      />
      {seams}
      {rivets}
      {sweep ? (
        <path
          d={`M${c},${c} L${c + Math.cos(a0) * rOuter},${c + Math.sin(a0) * rOuter} A${rOuter},${rOuter} 0 0 1 ${c + Math.cos(a1) * rOuter},${c + Math.sin(a1) * rOuter} Z`}
          fill="var(--ss-live)"
          fillOpacity={0.07}
        />
      ) : null}
      <circle
        cx={c}
        cy={c}
        r={rInner}
        fill="var(--ss-ground)"
        stroke="var(--ss-live)"
        strokeWidth={1.2}
      />
      <circle cx={c} cy={c} r={rInner * 0.38} fill="var(--ss-live)" />
    </svg>
  );
}

export { Mark };
