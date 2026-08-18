"use client";

import * as React from "react";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { cn } from "@/lib/utils";

/**
 * A single section that opens along its seam — the one-item cousin of the
 * accordion. The trigger carries a rivet while open (DECISIONS 10); the
 * content appears without a slide (DECISIONS 08).
 */
const PlateCollapsible = CollapsiblePrimitive.Root;

function PlateCollapsibleTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.Trigger>) {
  return (
    <CollapsiblePrimitive.Trigger
      data-slot="collapsible-trigger"
      className={cn(
        "flex items-center gap-[8px]",
        "font-[family-name:var(--ss-mono)] text-[11px] uppercase tracking-[var(--ss-track-label)]",
        "text-[var(--ss-text-3)] transition-colors duration-[var(--ss-dur)] ease-[var(--ss-ease)]",
        "hover:text-[var(--ss-text-2)] data-[state=open]:text-[var(--ss-text)]",
        "focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-[var(--ss-live)]",
        className
      )}
      {...props}
    >
      <span
        aria-hidden="true"
        className="block size-[5px] rounded-full bg-transparent [[data-state=open]_&]:bg-[var(--ss-rivet)]"
      />
      {children}
    </CollapsiblePrimitive.Trigger>
  );
}

function PlateCollapsibleContent({
  className,
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.Content>) {
  return (
    <CollapsiblePrimitive.Content
      data-slot="collapsible-panel"
      className={cn("mt-3 text-[14px] leading-[1.8] text-[var(--ss-text-2)]", className)}
      {...props}
    />
  );
}

export { PlateCollapsible, PlateCollapsibleTrigger, PlateCollapsibleContent };
