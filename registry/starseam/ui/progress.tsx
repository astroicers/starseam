"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";

/**
 * A determinate reading, not a spinner. The fill is rivet steel — progress is
 * a measurement, not a severity, so no lapis (DECISIONS 02, 10). There is no
 * indeterminate variant: an endless sweep is a loop, and the only permitted
 * loop belongs to crit (DECISIONS 08). If the length is unknown, say so in
 * text instead.
 */
function Progress({
  className,
  value,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "relative h-[6px] w-full overflow-hidden rounded-[var(--ss-radius)]",
        "border border-[var(--ss-seam)] bg-[var(--ss-plate-1)]",
        className
      )}
      value={value}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="h-full bg-[var(--ss-rivet)] transition-transform duration-[var(--ss-dur)] ease-[var(--ss-ease)]"
        style={{ transform: `translateX(-${100 - (value ?? 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  );
}

export { Progress };
