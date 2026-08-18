"use client";

import * as React from "react";
import { Toaster as Sonner, toast } from "sonner";

/**
 * Toasts as message plates sliding in from the edge — the entry follows the
 * sheet's logic (drawn out, not faded in place). No shadow, no tinted wash
 * (DECISIONS 04): severity arrives as a coloured left seam plus the text
 * itself, exactly like `alert`. toast.error is 緋, toast.warning is 黄土;
 * plain toast() stays neutral — colour is severity, never decoration
 * (DECISIONS 01).
 */
function PlateToaster(props: React.ComponentProps<typeof Sonner>) {
  return (
    <Sonner
      position="bottom-right"
      gap={8}
      toastOptions={{
        unstyled: true,
        classNames: {
          toast:
            "group flex w-[340px] items-start gap-3 rounded-[var(--ss-radius)] border border-[var(--ss-seam-strong)] border-l-2 border-l-[var(--ss-rivet)] bg-[var(--ss-plate-3)] p-[14px] font-[family-name:var(--ss-sans)]",
          title: "text-[13.5px] leading-[1.5] text-[var(--ss-text)]",
          description: "mt-1 text-[12.5px] leading-[1.7] text-[var(--ss-text-2)]",
          error: "!border-l-[var(--ss-crit)] [&_[data-title]]:!text-[var(--ss-crit)]",
          warning: "!border-l-[var(--ss-warn)] [&_[data-title]]:!text-[var(--ss-warn)]",
          success: "!border-l-[var(--ss-rivet)]",
          info: "!border-l-[var(--ss-live)] [&_[data-title]]:!text-[var(--ss-live)]",
          actionButton:
            "ml-auto shrink-0 rounded-[var(--ss-radius)] border border-[var(--ss-seam-strong)] px-[8px] py-[3px] font-[family-name:var(--ss-mono)] text-[10.5px] uppercase tracking-[var(--ss-track-label)] text-[var(--ss-text-2)]",
          cancelButton:
            "ml-2 shrink-0 rounded-[var(--ss-radius)] px-[8px] py-[3px] font-[family-name:var(--ss-mono)] text-[10.5px] uppercase tracking-[var(--ss-track-label)] text-[var(--ss-text-3)]",
        },
      }}
      {...props}
    />
  );
}

export { PlateToaster, toast };
