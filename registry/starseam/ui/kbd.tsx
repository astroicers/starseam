import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * A key cap: a raised plate the size of a keystroke. Depth is fill and a
 * bottom seam one shade stronger — the plate reads as pressed metal without a
 * single shadow (DECISIONS 04).
 */
function Kbd({ className, ...props }: React.ComponentProps<"kbd">) {
  return (
    <kbd
      data-slot="kbd"
      className={cn(
        "inline-flex min-w-[22px] items-center justify-center rounded-[var(--ss-radius)]",
        "border border-[var(--ss-seam-strong)] border-b-2 bg-[var(--ss-plate-2)]",
        "px-[6px] py-[1px] font-[family-name:var(--ss-mono)] text-[11px] text-[var(--ss-text-2)]",
        className
      )}
      {...props}
    />
  );
}

export { Kbd };
