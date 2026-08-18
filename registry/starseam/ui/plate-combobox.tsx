"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandItem,
} from "@/registry/starseam/ui/plate-command";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/registry/starseam/ui/plate-popover";

export interface PlateComboboxProps {
  /** Options are data, never render functions (DECISIONS 11). */
  options: { value: string; label: string }[];
  /** Form field name — the chosen value is submitted via a hidden input. */
  name?: string;
  defaultValue?: string;
  placeholder?: string;
  /** Placeholder for the filter line. */
  searchPlaceholder?: string;
  /** Message when the filter matches nothing. */
  emptyMessage?: string;
  className?: string;
  disabled?: boolean;
}

/**
 * A select with a filter line: popover plate, command list, and a hidden
 * input carrying the value into forms — no callback required, the public API
 * is data only (DECISIONS 11). The chosen option holds a rivet (DECISIONS 10).
 */
function PlateCombobox({
  options,
  name,
  defaultValue,
  placeholder = "Select…",
  searchPlaceholder = "Filter…",
  emptyMessage = "No match.",
  className,
  disabled,
}: PlateComboboxProps) {
  const [value, setValue] = React.useState(defaultValue ?? "");
  const [open, setOpen] = React.useState(false);
  const listId = React.useId();
  const selected = options.find((o) => o.value === value);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          role="combobox"
          aria-expanded={open}
          aria-controls={listId}
          disabled={disabled}
          data-slot="combobox-trigger"
          className={cn(
            "flex h-[34px] w-full min-w-[180px] items-center justify-between gap-3 rounded-[var(--ss-radius)]",
            "border border-[var(--ss-seam-strong)] bg-[var(--ss-plate-1)] px-[10px] text-[13.5px]",
            selected ? "text-[var(--ss-text)]" : "text-[var(--ss-text-3)]",
            "transition-colors duration-[var(--ss-dur)] ease-[var(--ss-ease)]",
            "hover:border-[var(--ss-rivet-quiet)]",
            "focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-[var(--ss-live)]",
            "disabled:cursor-not-allowed disabled:opacity-40",
            className
          )}
        >
          {selected ? selected.label : placeholder}
          <svg viewBox="0 0 12 12" aria-hidden="true" className="size-[10px] shrink-0 text-[var(--ss-text-3)]">
            <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
          </svg>
        </button>
      </PopoverTrigger>
      {name ? <input type="hidden" name={name} value={value} /> : null}
      <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0">
        <Command className="border-0">
          <CommandInput placeholder={searchPlaceholder} />
          <CommandList id={listId}>
            <CommandEmpty>{emptyMessage}</CommandEmpty>
            {options.map((o) => (
              <CommandItem
                key={o.value}
                value={o.value}
                keywords={[o.label]}
                data-checked={o.value === value || undefined}
                className="data-[checked]:text-[var(--ss-text)] [&[data-checked]>span]:bg-[var(--ss-rivet)]"
                onSelect={(v) => {
                  setValue(v === value ? "" : v);
                  setOpen(false);
                }}
              >
                {o.label}
              </CommandItem>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export { PlateCombobox };
