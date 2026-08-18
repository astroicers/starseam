import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * A placeholder plate. It does not shimmer and it does not pulse — the only
 * permitted loop in the system belongs to crit (DECISIONS 08). A still
 * placeholder is honest: the room is quiet while the data is on its way.
 */
function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      aria-hidden="true"
      className={cn("rounded-[var(--ss-radius)] bg-[var(--ss-plate-1)]", className)}
      {...props}
    />
  );
}

export { Skeleton };
