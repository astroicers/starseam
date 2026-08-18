import * as React from "react";
import { cn } from "@/lib/utils";

export interface LamesProps extends React.ComponentProps<"div"> {
  /** Overlap in pixels. The armourer's default is 9. */
  overlap?: number;
}

/**
 * A stack of plates, each pressing onto the one below — 錣, the laced lames
 * of a neck guard.
 *
 * This is the signature move, so it is rationed: hero sections and the
 * namecard, not general layout. Elsewhere use fill value for depth.
 * DECISIONS 04.
 */
function Lames({ className, overlap = 9, children, ...props }: LamesProps) {
  return (
    <div
      data-slot="lames"
      className={cn("flex flex-col", className)}
      style={{ "--lames-overlap": `${-overlap}px` } as React.CSSProperties}
      {...props}
    >
      {React.Children.map(children, (child, i) =>
        i === 0 ? (
          child
        ) : (
          <div style={{ marginTop: "var(--lames-overlap)", position: "relative" }}>
            {child}
          </div>
        )
      )}
    </div>
  );
}

export { Lames };
