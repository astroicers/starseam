import * as React from "react";
import { cn } from "@/lib/utils";

type PlateElevation = "flush" | "raised" | "float";

const ELEVATION: Record<PlateElevation, string> = {
  flush: "bg-[var(--ss-plate-1)] border-[var(--ss-seam)]",
  raised: "bg-[var(--ss-plate-2)] border-[var(--ss-seam)]",
  float: "bg-[var(--ss-plate-3)] border-[var(--ss-seam-strong)]",
};

export interface PlateProps extends React.ComponentProps<"div"> {
  /**
   * Depth is physical. A plate sits higher because it is a lighter cut of the
   * same lacquer — never because of a shadow. DECISIONS 04.
   */
  elevation?: PlateElevation;
}

/**
 * The base surface. A single iron plate.
 *
 * No box-shadow, no backdrop-filter, no glow. If you reach for one of those,
 * the layout problem is somewhere else.
 */
function Plate({ className, elevation = "raised", ...props }: PlateProps) {
  return (
    <div
      data-slot="plate"
      className={cn(
        "border rounded-[var(--ss-radius)] p-[var(--ss-em)] px-[calc(var(--ss-em)*1.25)]",
        "shadow-none transition-colors duration-[var(--ss-dur)] ease-[var(--ss-ease)]",
        ELEVATION[elevation],
        className
      )}
      {...props}
    />
  );
}

export { Plate };
