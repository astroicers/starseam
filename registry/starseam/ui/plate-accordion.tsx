"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cn } from "@/lib/utils";

const PlateAccordion = AccordionPrimitive.Root;

/**
 * Stacked plates that open along their seams. Items are separated by
 * hairlines; the open item's trigger holds a rivet — an open panel is a
 * selection, never a severity (DECISIONS 10). The indicator is a rotating
 * chevron drawn square, and the only motion is the 160ms transition
 * (DECISIONS 08) — the panel itself appears without a slide.
 */
function PlateAccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b border-[var(--ss-seam)]", className)}
      {...props}
    />
  );
}

function PlateAccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "flex flex-1 items-center justify-between gap-4 py-[12px] text-left",
          "text-[14.5px] tracking-[0.04em] text-[var(--ss-text-2)]",
          "transition-colors duration-[var(--ss-dur)] ease-[var(--ss-ease)]",
          "hover:text-[var(--ss-text)] data-[state=open]:text-[var(--ss-text)]",
          "focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-[var(--ss-live)]",
          className
        )}
        {...props}
      >
        <span className="flex items-center gap-[8px]">
          {/* The open item is marked by a rivet, not a colour wash. */}
          <span
            aria-hidden="true"
            className="block size-[5px] rounded-full bg-transparent [[data-state=open]_&]:bg-[var(--ss-rivet)]"
          />
          {children}
        </span>
        <svg
          viewBox="0 0 12 12"
          aria-hidden="true"
          className="size-[10px] shrink-0 text-[var(--ss-text-3)] transition-transform duration-[var(--ss-dur)] ease-[var(--ss-ease)] [[data-state=open]_&]:rotate-180"
        >
          <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
        </svg>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function PlateAccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-panel"
      className="overflow-hidden"
      {...props}
    >
      <div className={cn("pb-[14px] pl-[13px] text-[14px] leading-[1.8] text-[var(--ss-text-2)]", className)}>
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
}

export { PlateAccordion, PlateAccordionItem, PlateAccordionTrigger, PlateAccordionContent };
