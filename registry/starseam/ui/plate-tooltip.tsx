"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "@/lib/utils";

const TooltipProvider = TooltipPrimitive.Provider;
const Tooltip = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;

/**
 * An instrument annotation floating beside its subject: the lightest plate,
 * hairline-edged, no shadow and no arrow (DECISIONS 04 — a plate does not
 * taper into a bubble). Entry and exit come from the theme, keyed off
 * data-slot (DECISIONS 08).
 */
function TooltipContent({
  className,
  sideOffset = 5,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn(
          "z-50 max-w-[280px] rounded-[var(--ss-radius)] border border-[var(--ss-seam-strong)]",
          "bg-[var(--ss-plate-3)] px-[9px] py-[5px] shadow-none",
          "font-[family-name:var(--ss-mono)] text-[11px] tracking-[0.04em] text-[var(--ss-text-2)]",
          className
        )}
        {...props}
      />
    </TooltipPrimitive.Portal>
  );
}

export { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent };
