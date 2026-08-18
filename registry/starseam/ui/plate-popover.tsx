"use client";

import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { cn } from "@/lib/utils";

const Popover = PopoverPrimitive.Root;
const PopoverTrigger = PopoverPrimitive.Trigger;
const PopoverAnchor = PopoverPrimitive.Anchor;
const PopoverClose = PopoverPrimitive.Close;

/**
 * A small plate lifted beside its trigger — the lightest cut, hairline-edged,
 * no shadow (DECISIONS 04). Entry and exit come from the theme, keyed off
 * data-slot (DECISIONS 08).
 */
function PopoverContent({
  className,
  align = "start",
  sideOffset = 5,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Content>) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot="popover-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "z-50 w-[280px] rounded-[var(--ss-radius)] border border-[var(--ss-seam-strong)]",
          "bg-[var(--ss-plate-3)] p-[calc(var(--ss-em)*0.875)] shadow-none outline-none",
          className
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  );
}

export { Popover, PopoverTrigger, PopoverAnchor, PopoverClose, PopoverContent };
