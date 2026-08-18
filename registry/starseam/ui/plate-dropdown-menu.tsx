"use client";

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { cn } from "@/lib/utils";

const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
const DropdownMenuGroup = DropdownMenuPrimitive.Group;

function DropdownMenuContent({
  className,
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Content>) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        data-slot="dropdown-menu-content"
        sideOffset={sideOffset}
        className={cn(
          "z-50 min-w-[9rem] overflow-hidden rounded-[var(--ss-radius)] border",
          "border-[var(--ss-seam-strong)] bg-[var(--ss-plate-3)] p-[4px]",
          "text-[var(--ss-text)] shadow-none",
          className
        )}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  );
}

function DropdownMenuItem({
  className,
  destructive,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
  /** An action that destroys something. A severity, so it takes 緋. */
  destructive?: boolean;
}) {
  return (
    <DropdownMenuPrimitive.Item
      data-slot="dropdown-menu-item"
      className={cn(
        "relative flex cursor-default select-none items-center gap-2",
        "rounded-[var(--ss-radius)] px-[9px] py-[6px] text-[13px] outline-none",
        "focus:bg-[var(--ss-plate-1)]",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-40",
        destructive ? "text-[var(--ss-crit)]" : "text-[var(--ss-text)]",
        className
      )}
      {...props}
    />
  );
}

function DropdownMenuLabel({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Label>) {
  return (
    <DropdownMenuPrimitive.Label
      data-slot="dropdown-menu-label"
      className={cn(
        "px-[9px] py-[6px] font-[family-name:var(--ss-mono)] text-[9px]",
        "font-medium uppercase tracking-[var(--ss-track-label)] text-[var(--ss-text-3)]",
        className
      )}
      {...props}
    />
  );
}

/**
 * Inside a menu the divider is a plain hairline, not a riveted seam: the items
 * are one continuous plate with a scored line, not two plates joined.
 * DECISIONS 03.
 */
function DropdownMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>) {
  return (
    <DropdownMenuPrimitive.Separator
      data-slot="dropdown-menu-separator"
      className={cn("my-[4px] h-px bg-[var(--ss-seam)]", className)}
      {...props}
    />
  );
}

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
};
