"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cn } from "@/lib/utils";

function PlateRadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("grid gap-[10px]", className)}
      {...props}
    />
  );
}

/**
 * The chosen option holds a rivet driven into its centre. Selection is 銀鼠
 * steel, never 瑠璃 (DECISIONS 10); the blue appears only as the focus ring.
 */
function PlateRadioItem({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        "aspect-square size-[16px] shrink-0 rounded-full border",
        "border-[var(--ss-seam-strong)] bg-[var(--ss-plate-1)]",
        "transition-colors duration-[var(--ss-dur)] ease-[var(--ss-ease)]",
        "hover:border-[var(--ss-rivet-quiet)]",
        "focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2",
        "focus-visible:outline-[var(--ss-live)] focus-visible:border-[var(--ss-live)]",
        "data-[state=checked]:border-[var(--ss-rivet)]",
        "disabled:cursor-not-allowed disabled:opacity-40",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex size-full items-center justify-center">
        <span className="block size-[7px] rounded-full bg-[var(--ss-rivet)]" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
}

export { PlateRadioGroup, PlateRadioItem };
