"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { PlateCalendar } from "@/registry/starseam/ui/plate-calendar";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/registry/starseam/ui/plate-popover";

export interface PlateDatePickerProps {
  /** Form field name — the chosen date is submitted via a hidden input. */
  name?: string;
  /** ISO date (yyyy-mm-dd) to preselect. */
  defaultValue?: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

function iso(date: Date): string {
  const p = (n: number) => String(n).padStart(2, "0");
  return `${date.getFullYear()}-${p(date.getMonth() + 1)}-${p(date.getDate())}`;
}

/**
 * A calendar in a popover, participating in forms the honest way: the chosen
 * date lands in a hidden input under `name`, so no callback is required —
 * the public API is data only (DECISIONS 11). The trigger shows the ISO date
 * in tabular mono figures (DECISIONS 09).
 */
function PlateDatePicker({
  name,
  defaultValue,
  placeholder = "yyyy-mm-dd",
  className,
  disabled,
}: PlateDatePickerProps) {
  const [date, setDate] = React.useState<Date | undefined>(() =>
    defaultValue ? new Date(`${defaultValue}T00:00:00`) : undefined
  );
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          disabled={disabled}
          data-slot="date-picker-trigger"
          className={cn(
            "flex h-[34px] w-full min-w-[150px] items-center justify-between gap-3 rounded-[var(--ss-radius)]",
            "border border-[var(--ss-seam-strong)] bg-[var(--ss-plate-1)] px-[10px]",
            "font-[family-name:var(--ss-mono)] text-[13px] tabular-nums",
            date ? "text-[var(--ss-text)]" : "text-[var(--ss-text-3)]",
            "transition-colors duration-[var(--ss-dur)] ease-[var(--ss-ease)]",
            "hover:border-[var(--ss-rivet-quiet)]",
            "focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-[var(--ss-live)]",
            "disabled:cursor-not-allowed disabled:opacity-40",
            className
          )}
        >
          {date ? iso(date) : placeholder}
          <svg viewBox="0 0 14 14" aria-hidden="true" className="size-[12px] text-[var(--ss-text-3)]">
            <rect x="1.5" y="2.5" width="11" height="10" fill="none" stroke="currentColor" />
            <line x1="1.5" y1="5.5" x2="12.5" y2="5.5" stroke="currentColor" />
            <line x1="4.5" y1="1" x2="4.5" y2="3.5" stroke="currentColor" />
            <line x1="9.5" y1="1" x2="9.5" y2="3.5" stroke="currentColor" />
          </svg>
        </button>
      </PopoverTrigger>
      {name ? (
        <input type="hidden" name={name} value={date ? iso(date) : ""} />
      ) : null}
      <PopoverContent className="w-auto p-[10px]">
        <PlateCalendar
          mode="single"
          selected={date}
          onSelect={(d) => {
            setDate(d);
            setOpen(false);
          }}
        />
      </PopoverContent>
    </Popover>
  );
}

export { PlateDatePicker };
