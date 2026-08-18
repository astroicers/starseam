"use client";

import * as React from "react";
import { DayPicker } from "react-day-picker";
import { cn } from "@/lib/utils";

/**
 * A month laid out on the full-width grid — dates are tabular mono figures on
 * their half-width grid (DECISIONS 09). The selected day is a rivet driven
 * home: steel fill, ground-coloured figure — selection is never lapis
 * (DECISIONS 10). Today is marked by a dot beneath the figure, so the mark
 * survives selection. No stylesheet import; every class below is the design.
 */
function PlateCalendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: React.ComponentProps<typeof DayPicker>) {
  return (
    <DayPicker
      data-slot="calendar"
      showOutsideDays={showOutsideDays}
      className={cn("inline-block", className)}
      classNames={{
        root: "relative inline-block",
        months: "flex flex-col gap-4 sm:flex-row",
        month: "flex flex-col gap-3",
        month_caption:
          "flex h-[30px] items-center px-[2px] font-[family-name:var(--ss-mono)] text-[12px] font-medium uppercase tracking-[var(--ss-track-label)] text-[var(--ss-text-2)]",
        nav: "absolute right-0 top-0 flex items-center gap-[2px]",
        button_previous:
          "flex size-[26px] items-center justify-center rounded-[var(--ss-radius)] border border-[var(--ss-seam-strong)] text-[var(--ss-text-3)] transition-colors duration-[var(--ss-dur)] ease-[var(--ss-ease)] hover:text-[var(--ss-text)] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-[var(--ss-live)] disabled:opacity-40",
        button_next:
          "flex size-[26px] items-center justify-center rounded-[var(--ss-radius)] border border-[var(--ss-seam-strong)] text-[var(--ss-text-3)] transition-colors duration-[var(--ss-dur)] ease-[var(--ss-ease)] hover:text-[var(--ss-text)] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-[var(--ss-live)] disabled:opacity-40",
        chevron: "size-[12px] fill-current",
        month_grid: "border-collapse",
        weekdays: "",
        weekday:
          "pb-[6px] text-center font-[family-name:var(--ss-mono)] text-[10px] font-medium uppercase tracking-[0.1em] text-[var(--ss-text-3)]",
        week: "",
        day: "p-0 text-center",
        day_button:
          "relative flex size-[32px] items-center justify-center rounded-[var(--ss-radius)] font-[family-name:var(--ss-mono)] text-[12.5px] tabular-nums text-[var(--ss-text-2)] transition-colors duration-[var(--ss-dur)] ease-[var(--ss-ease)] hover:bg-[var(--ss-plate-1)] hover:text-[var(--ss-text)] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-[-1px] focus-visible:outline-[var(--ss-live)]",
        selected:
          "[&>button]:bg-[var(--ss-rivet)] [&>button]:text-[var(--ss-ground)] [&>button:hover]:bg-[var(--ss-rivet)]",
        today:
          "[&>button]:after:absolute [&>button]:after:bottom-[3px] [&>button]:after:left-1/2 [&>button]:after:size-[3px] [&>button]:after:-translate-x-1/2 [&>button]:after:rounded-full [&>button]:after:bg-[var(--ss-rivet)] [&>button]:after:content-[''] data-[selected=true]:[&>button]:after:bg-[var(--ss-ground)]",
        outside: "[&>button]:text-[var(--ss-text-3)] [&>button]:opacity-50",
        disabled: "[&>button]:pointer-events-none [&>button]:opacity-30",
        hidden: "invisible",
        ...classNames,
      }}
      {...props}
    />
  );
}

export { PlateCalendar };
