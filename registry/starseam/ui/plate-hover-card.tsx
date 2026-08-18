"use client";

import * as React from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import { cn } from "@/lib/utils";

const HoverCard = HoverCardPrimitive.Root;
const HoverCardTrigger = HoverCardPrimitive.Trigger;

/**
 * A dossier plate raised on hover: the popover's read-only sibling for
 * previewing a reference without following it. Same surface rules — lightest
 * plate, hairline edge, no shadow (DECISIONS 04); entry and exit from the
 * theme (DECISIONS 08).
 */
function HoverCardContent({
  className,
  align = "start",
  sideOffset = 5,
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Content>) {
  return (
    <HoverCardPrimitive.Portal>
      <HoverCardPrimitive.Content
        data-slot="hover-card-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "z-50 w-[300px] rounded-[var(--ss-radius)] border border-[var(--ss-seam-strong)]",
          "bg-[var(--ss-plate-3)] p-[calc(var(--ss-em)*0.875)] shadow-none outline-none",
          className
        )}
        {...props}
      />
    </HoverCardPrimitive.Portal>
  );
}

export { HoverCard, HoverCardTrigger, HoverCardContent };
