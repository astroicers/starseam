import * as React from "react";
import { cn } from "@/lib/utils";

export interface PlateTextareaProps extends React.ComponentProps<"textarea"> {
  invalid?: boolean;
}

/** The long-form plate. Line height follows the body leading, not the UI one. */
function PlateTextarea({ className, invalid, ...props }: PlateTextareaProps) {
  return (
    <textarea
      data-slot="plate-textarea"
      aria-invalid={invalid || undefined}
      className={cn(
        "w-full min-h-[7lh] rounded-[var(--ss-radius)] border bg-[var(--ss-plate-1)]",
        "px-[calc(var(--ss-em)*0.75)] py-[calc(var(--ss-em)*0.5)]",
        "text-[13.5px] leading-[var(--ss-leading-body)] text-[var(--ss-text)]",
        "placeholder:text-[var(--ss-text-3)] resize-y",
        "transition-colors duration-[var(--ss-dur)] ease-[var(--ss-ease)]",
        "hover:border-[var(--ss-rivet-quiet)]",
        "focus:outline-none focus-visible:border-[var(--ss-live)]",
        "disabled:cursor-not-allowed disabled:opacity-40",
        invalid ? "border-[var(--ss-crit)]" : "border-[var(--ss-seam-strong)]",
        className
      )}
      {...props}
    />
  );
}

export { PlateTextarea };
