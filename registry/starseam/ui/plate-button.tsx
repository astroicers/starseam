"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type Variant = "quiet" | "live" | "crit" | "ghost";
type Size = "sm" | "md" | "lg" | "icon";

const VARIANT: Record<Variant, string> = {
  quiet:
    "border-[var(--ss-seam-strong)] text-[var(--ss-text-2)] hover:text-[var(--ss-text)] hover:border-[var(--ss-rivet)]",
  live: "border-[var(--ss-live)] text-[var(--ss-live)] hover:bg-[color-mix(in_srgb,var(--ss-live)_10%,transparent)]",
  crit: "border-[var(--ss-crit)] text-[var(--ss-crit)] hover:bg-[color-mix(in_srgb,var(--ss-crit)_10%,transparent)]",
  ghost:
    "border-transparent text-[var(--ss-text-2)] hover:text-[var(--ss-text)]",
};

const SIZE: Record<Size, string> = {
  sm: "px-[10px] py-[4px] text-[10.5px]",
  md: "px-[calc(var(--ss-em)*0.875)] py-[calc(var(--ss-em)*0.4)] text-[11px]",
  lg: "px-[calc(var(--ss-em)*1.125)] py-[calc(var(--ss-em)*0.55)] text-[12px]",
  icon: "size-[32px] justify-center p-0 text-[11px]",
};

export interface PlateButtonProps extends React.ComponentProps<"button"> {
  /**
   * `live` spends the one blue moment on the screen — at most one per view
   * (DECISIONS 02). `crit` is for actions that destroy something: a severity,
   * so it takes 緋 and must always carry text (DECISIONS 01). `ghost` is a
   * quiet text button with no border of its own.
   */
  variant?: Variant;
  size?: Size;
}

/** A cut plate you can press. Square corners, hairline edge, no fill. */
function PlateButton({
  className,
  variant = "quiet",
  size = "md",
  ...props
}: PlateButtonProps) {
  return (
    <button
      data-slot="plate-button"
      data-variant={variant}
      className={cn(
        "inline-flex items-center gap-2 border rounded-[var(--ss-radius)]",
        "bg-transparent font-[family-name:var(--ss-mono)] uppercase tracking-[var(--ss-track-label)]",
        "transition-colors duration-[var(--ss-dur)] ease-[var(--ss-ease)]",
        "focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-[var(--ss-live)]",
        "disabled:opacity-40 disabled:pointer-events-none",
        SIZE[size],
        VARIANT[variant],
        className
      )}
      {...props}
    />
  );
}

export { PlateButton };
