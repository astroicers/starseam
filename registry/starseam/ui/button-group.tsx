import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Buttons riveted into one strip: a single hairline frame, hairline seams
 * between the members — several actions presented as one instrument, the
 * general-purpose cousin of mode-switch. Children keep their own semantics;
 * the group only takes their individual frames away, because the boundary
 * between members is the group's seam, not each button's edge (DECISIONS 03).
 */
function ButtonGroup({
  className,
  ...props
}: React.ComponentProps<"div"> & { "aria-label"?: string }) {
  return (
    <div
      role="group"
      data-slot="button-group"
      className={cn(
        "inline-flex items-stretch rounded-[var(--ss-radius)]",
        "border border-[var(--ss-seam-strong)] divide-x divide-[var(--ss-seam)]",
        "[&>[data-slot=plate-button]]:rounded-none [&>[data-slot=plate-button]]:border-0",
        "[&>[data-slot=plate-button]]:focus-visible:outline-offset-[-1px]",
        className
      )}
      {...props}
    />
  );
}

export { ButtonGroup };
