"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cn } from "@/lib/utils";

/**
 * A checked box is a rivet driven home.
 *
 * The checked state is 銀鼠 steel, not 瑠璃 — being selected is not a severity,
 * and blue has to stay rare enough to mean something. DECISIONS 01, 02.
 * Focus is where the blue goes, and only one thing is focused at a time.
 */
function PlateCheckbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="plate-checkbox"
      className={cn(
        "peer size-[16px] shrink-0 rounded-[var(--ss-radius)] border",
        "border-[var(--ss-seam-strong)] bg-[var(--ss-plate-1)]",
        "transition-colors duration-[var(--ss-dur)] ease-[var(--ss-ease)]",
        "hover:border-[var(--ss-rivet-quiet)]",
        "focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2",
        "focus-visible:outline-[var(--ss-live)] focus-visible:border-[var(--ss-live)]",
        "data-[state=checked]:border-[var(--ss-rivet)]",
        "data-[state=checked]:bg-[var(--ss-rivet)]",
        "aria-invalid:border-[var(--ss-crit)]",
        "disabled:cursor-not-allowed disabled:opacity-40",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator className="flex items-center justify-center text-[var(--ss-ground)]">
        <svg viewBox="0 0 16 16" className="size-[12px]" aria-hidden="true">
          <path
            d="M3.5 8.5L6.5 11.5L12.5 5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="square"
          />
        </svg>
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { PlateCheckbox };
