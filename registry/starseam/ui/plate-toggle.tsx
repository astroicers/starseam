"use client";

import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cn } from "@/lib/utils";

/**
 * A pressed-state button. On is a rivet and a deeper plate fill — pressed is
 * a selection, never a severity, so no lapis (DECISIONS 10). Only the 160ms
 * colour transition moves (DECISIONS 08).
 */
function PlateToggle({
  className,
  children,
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root>) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      className={cn(
        "inline-flex items-center gap-[6px] rounded-[var(--ss-radius)] border px-[10px] py-[5px]",
        "border-[var(--ss-seam-strong)]",
        "font-[family-name:var(--ss-mono)] text-[11px] uppercase tracking-[var(--ss-track-label)]",
        "text-[var(--ss-text-3)] transition-colors duration-[var(--ss-dur)] ease-[var(--ss-ease)]",
        "hover:text-[var(--ss-text-2)] hover:border-[var(--ss-rivet-quiet)]",
        "focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-[var(--ss-live)]",
        "data-[state=on]:border-[var(--ss-rivet)] data-[state=on]:bg-[var(--ss-plate-2)] data-[state=on]:text-[var(--ss-text)]",
        "disabled:pointer-events-none disabled:opacity-40",
        className
      )}
      {...props}
    >
      {/* Pressed is marked by a rivet, not a colour wash. */}
      <span
        aria-hidden="true"
        className="hidden size-[5px] rounded-full bg-[var(--ss-rivet)] [[data-state=on]>&]:block"
      />
      {children}
    </TogglePrimitive.Root>
  );
}

export { PlateToggle };
