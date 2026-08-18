import * as React from "react";
import { cn } from "@/lib/utils";

export interface PlateInputProps extends React.ComponentProps<"input"> {
  /** Marks the field as failing validation. Severity, not decoration. */
  invalid?: boolean;
}

/**
 * A cut plate you can write into. The edge is a hairline; focus drives the one
 * blue rivet on the screen into it.
 */
function PlateInput({ className, invalid, ...props }: PlateInputProps) {
  return (
    <input
      data-slot="plate-input"
      aria-invalid={invalid || undefined}
      className={cn(
        "w-full rounded-[var(--ss-radius)] border bg-[var(--ss-plate-1)]",
        "px-[calc(var(--ss-em)*0.75)] py-[calc(var(--ss-em)*0.5)]",
        "text-[13.5px] text-[var(--ss-text)] placeholder:text-[var(--ss-text-3)]",
        "transition-colors duration-[var(--ss-dur)] ease-[var(--ss-ease)]",
        "hover:border-[var(--ss-rivet-quiet)]",
        "focus:outline-none focus-visible:border-[var(--ss-live)]",
        "disabled:cursor-not-allowed disabled:opacity-40",
        invalid
          ? "border-[var(--ss-crit)]"
          : "border-[var(--ss-seam-strong)]",
        className
      )}
      {...props}
    />
  );
}

export { PlateInput };
