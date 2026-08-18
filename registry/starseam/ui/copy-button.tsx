"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface CopyButtonProps
  extends Omit<React.ComponentProps<"button">, "value" | "children"> {
  /** The exact text placed on the clipboard. */
  value: string;
  /** Button labels — data, never functions. DECISIONS 11. */
  labels?: { copy?: string; copied?: string };
}

/**
 * A quiet text button that copies `value` to the clipboard. The confirmation
 * is a label swap marked by a rivet — an acknowledged action reads as
 * selection, never as severity, so no lapis (DECISIONS 10). The only motion
 * is the 160ms colour transition (DECISIONS 08); after 1.6s the label
 * settles back.
 */
function CopyButton({ className, value, labels, ...props }: CopyButtonProps) {
  const [copied, setCopied] = React.useState(false);

  React.useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 1600);
    return () => clearTimeout(t);
  }, [copied]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
    } catch {
      /* clipboard unavailable (permissions, insecure context) — stay quiet */
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      data-slot="copy-button"
      data-copied={copied || undefined}
      aria-live="polite"
      className={cn(
        "inline-flex items-center gap-[6px]",
        "font-[family-name:var(--ss-mono)] text-[10.5px] uppercase tracking-[var(--ss-track-label)]",
        "transition-colors duration-[var(--ss-dur)] ease-[var(--ss-ease)]",
        copied
          ? "text-[var(--ss-text)]"
          : "text-[var(--ss-text-3)] hover:text-[var(--ss-text-2)]",
        className
      )}
      {...props}
    >
      {/* The acknowledged state is marked by a rivet, not a colour wash. */}
      <span
        aria-hidden="true"
        className={cn(
          "block size-[5px] rounded-full",
          copied ? "bg-[var(--ss-rivet)]" : "bg-transparent"
        )}
      />
      {copied ? (labels?.copied ?? "COPIED") : (labels?.copy ?? "COPY")}
    </button>
  );
}

export { CopyButton };
