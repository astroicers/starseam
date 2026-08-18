"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { cn } from "@/lib/utils";

const Select = SelectPrimitive.Root;
const SelectGroup = SelectPrimitive.Group;
const SelectValue = SelectPrimitive.Value;

function SelectTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger>) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      className={cn(
        "flex w-full items-center justify-between gap-2 rounded-[var(--ss-radius)] border",
        "border-[var(--ss-seam-strong)] bg-[var(--ss-plate-1)]",
        "px-[calc(var(--ss-em)*0.75)] py-[calc(var(--ss-em)*0.5)]",
        "text-[13.5px] text-[var(--ss-text)]",
        "transition-colors duration-[var(--ss-dur)] ease-[var(--ss-ease)]",
        "hover:border-[var(--ss-rivet-quiet)]",
        "focus:outline-none focus-visible:border-[var(--ss-live)]",
        "data-[placeholder]:text-[var(--ss-text-3)]",
        "aria-invalid:border-[var(--ss-crit)]",
        "disabled:cursor-not-allowed disabled:opacity-40",
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <svg viewBox="0 0 16 16" className="size-[12px] text-[var(--ss-text-3)]" aria-hidden="true">
          <path d="M4 6.5L8 10.5L12 6.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
}

/**
 * The list floats on the lightest cut of lacquer with a strengthened seam.
 * No shadow and no blur — depth is a lighter plate, nothing else. DECISIONS 04.
 */
function SelectContent({
  className,
  children,
  position = "popper",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        position={position}
        className={cn(
          "relative z-50 max-h-[--radix-select-content-available-height] min-w-[8rem]",
          "overflow-hidden rounded-[var(--ss-radius)] border",
          "border-[var(--ss-seam-strong)] bg-[var(--ss-plate-3)]",
          "text-[var(--ss-text)] shadow-none",
          position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=top]:-translate-y-1",
          className
        )}
        {...props}
      >
        <SelectPrimitive.Viewport
          className={cn(
            "p-[4px]",
            position === "popper" && "w-full min-w-[var(--radix-select-trigger-width)]"
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "relative flex cursor-default select-none items-center gap-2 rounded-[var(--ss-radius)]",
        "py-[6px] pl-[26px] pr-[8px] text-[13px] outline-none",
        "focus:bg-[var(--ss-plate-1)] focus:text-[var(--ss-text)]",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-40",
        className
      )}
      {...props}
    >
      {/* The selected row is marked by a rivet, not by a colour wash. */}
      <span className="absolute left-[9px] flex size-[6px] items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <span className="block size-[5px] rounded-full bg-[var(--ss-rivet)]" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
}

function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn("my-[4px] h-px bg-[var(--ss-seam)]", className)}
      {...props}
    />
  );
}

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectSeparator,
};
