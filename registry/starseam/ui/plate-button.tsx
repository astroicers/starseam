"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type Variant = "quiet" | "live";

const VARIANT: Record<Variant, string> = {
  quiet:
    "border-[var(--ss-seam-strong)] text-[var(--ss-text-2)] hover:text-[var(--ss-text)] hover:border-[var(--ss-rivet)]",
  live: "border-[var(--ss-live)] text-[var(--ss-live)] hover:bg-[color-mix(in_srgb,var(--ss-live)_10%,transparent)]",
};

export interface PlateButtonProps extends React.ComponentProps<"button"> {
  /**
   * `live` spends the one blue moment on the screen. At most one per view.
   * DECISIONS 02.
   */
  variant?: Variant;
}

/** A cut plate you can press. Square corners, hairline edge, no fill. */
function PlateButton({ className, variant = "quiet", ...props }: PlateButtonProps) {
  return (
    <button
      data-slot="plate-button"
      className={cn(
        "inline-flex items-center gap-2 border rounded-[var(--ss-radius)]",
        "bg-transparent px-[calc(var(--ss-em)*0.875)] py-[calc(var(--ss-em)*0.4)]",
        "font-[family-name:var(--ss-mono)] text-[11px] uppercase tracking-[var(--ss-track-label)]",
        "transition-colors duration-[var(--ss-dur)] ease-[var(--ss-ease)]",
        "disabled:opacity-40 disabled:pointer-events-none",
        VARIANT[variant],
        className
      )}
      {...props}
    />
  );
}

export { PlateButton };
