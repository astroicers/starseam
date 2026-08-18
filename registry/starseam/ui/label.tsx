import * as React from "react";
import { cn } from "@/lib/utils";

export interface LabelProps extends React.ComponentProps<"span"> {
  /** When present the label renders as a real <label> bound to that control. */
  htmlFor?: string;
}

/**
 * An instrument label. Mono, small, widely tracked — the scale printed beside
 * a gauge, not a sentence. Latin and digits only; Chinese belongs in prose.
 * DECISIONS 07, 09.
 *
 * Form fields use the same label as the gauges do: in an ops room, an input is
 * just another readout you can write to.
 */
function Label({ className, htmlFor, ...props }: LabelProps) {
  const Comp = htmlFor ? "label" : "span";
  return (
    <Comp
      data-slot="label"
      {...(htmlFor ? { htmlFor } : {})}
      className={cn(
        "font-[family-name:var(--ss-mono)] text-[9px] font-medium uppercase",
        "tracking-[var(--ss-track-label)] text-[var(--ss-text-3)]",
        htmlFor && "cursor-pointer",
        className
      )}
      {...(props as React.ComponentProps<"label">)}
    />
  );
}

export { Label };
