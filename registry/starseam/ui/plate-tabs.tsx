"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";
import { Seam } from "@/registry/starseam/ui/seam";

const Tabs = TabsPrimitive.Root;

/**
 * The tab strip and the panel are two plates that meet, so a riveted seam runs
 * between them. The active tab is the one whose rivets are driven in.
 * DECISIONS 03.
 */
function TabsList({
  className,
  children,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <>
      <TabsPrimitive.List
        data-slot="tabs-list"
        className={cn("flex items-center gap-[2px]", className)}
        {...props}
      >
        {children}
      </TabsPrimitive.List>
      <Seam />
    </>
  );
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "relative px-[calc(var(--ss-em)*0.75)] py-[calc(var(--ss-em)*0.5)]",
        "font-[family-name:var(--ss-mono)] text-[10.5px] uppercase",
        "tracking-[var(--ss-track-label)] text-[var(--ss-text-3)]",
        "transition-colors duration-[var(--ss-dur)] ease-[var(--ss-ease)]",
        "hover:text-[var(--ss-text-2)]",
        "focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-[-2px]",
        "focus-visible:outline-[var(--ss-live)]",
        "data-[state=active]:text-[var(--ss-text)]",
        "disabled:pointer-events-none disabled:opacity-40",
        className
      )}
      {...props}
    />
  );
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn(
        "pt-[var(--ss-em)] text-[13.5px] text-[var(--ss-text-2)]",
        "focus-visible:outline-none",
        className
      )}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
