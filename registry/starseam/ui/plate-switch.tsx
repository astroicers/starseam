"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";

/**
 * The thumb is a rivet sliding along its seam.
 *
 * Like the checkbox, "on" is steel rather than blue — a switch being on is a
 * setting, not a severity. DECISIONS 01.
 */
function PlateSwitch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="plate-switch"
      className={cn(
        "peer inline-flex h-[18px] w-[34px] shrink-0 items-center rounded-full border",
        "border-[var(--ss-seam-strong)] bg-[var(--ss-plate-1)] p-[2px]",
        "transition-colors duration-[var(--ss-dur)] ease-[var(--ss-ease)]",
        "hover:border-[var(--ss-rivet-quiet)]",
        "focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2",
        "focus-visible:outline-[var(--ss-live)]",
        "data-[state=checked]:border-[var(--ss-rivet)]",
        "disabled:cursor-not-allowed disabled:opacity-40",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        className={cn(
          "block size-[12px] rounded-full bg-[var(--ss-rivet-quiet)]",
          "transition-[transform,background-color] duration-[var(--ss-dur)] ease-[var(--ss-ease)]",
          "data-[state=checked]:translate-x-[16px]",
          "data-[state=checked]:bg-[var(--ss-rivet)]"
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { PlateSwitch };
