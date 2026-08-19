import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * A mono identifier — a stack item, a version, a CVE. Quiet by default; it is
 * a fact, not a badge, so it carries no colour. DECISIONS 01.
 */
function CodeTag({ className, ...props }: React.ComponentProps<"code">) {
  return (
    <code
      data-slot="code-tag"
      className={cn(
        "inline-block border border-[var(--ss-seam)] rounded-[var(--ss-radius)]",
        "bg-[var(--ss-plate-1)] px-[7px] py-[2px]",
        "font-[family-name:var(--ss-mono)] text-[12px] tracking-[0.04em]",
        "text-[var(--ss-text-2)]",
        className
      )}
      {...props}
    />
  );
}

export { CodeTag };
