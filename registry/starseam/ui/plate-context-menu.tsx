"use client";

import * as React from "react";
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { cn } from "@/lib/utils";

const ContextMenu = ContextMenuPrimitive.Root;
const ContextMenuTrigger = ContextMenuPrimitive.Trigger;
const ContextMenuGroup = ContextMenuPrimitive.Group;

/**
 * The dropdown menu summoned at the pointer. Identical surface rules —
 * lightest plate, hairline edge, no shadow (DECISIONS 04); a destructive
 * action is a severity and takes 緋, always with text (DECISIONS 01).
 */
function ContextMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Content>) {
  return (
    <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.Content
        data-slot="context-menu-content"
        className={cn(
          "z-50 min-w-[9rem] overflow-hidden rounded-[var(--ss-radius)] border",
          "border-[var(--ss-seam-strong)] bg-[var(--ss-plate-3)] p-[4px]",
          "text-[var(--ss-text)] shadow-none",
          className
        )}
        {...props}
      />
    </ContextMenuPrimitive.Portal>
  );
}

function ContextMenuItem({
  className,
  destructive,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Item> & {
  /** An action that destroys something. A severity, so it takes 緋. */
  destructive?: boolean;
}) {
  return (
    <ContextMenuPrimitive.Item
      data-slot="context-menu-item"
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

function ContextMenuLabel({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Label>) {
  return (
    <ContextMenuPrimitive.Label
      data-slot="context-menu-label"
      className={cn(
        "px-[9px] py-[6px] font-[family-name:var(--ss-mono)] text-[10px]",
        "font-medium uppercase tracking-[var(--ss-track-label)] text-[var(--ss-text-3)]",
        className
      )}
      {...props}
    />
  );
}

function ContextMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Separator>) {
  return (
    <ContextMenuPrimitive.Separator
      data-slot="context-menu-separator"
      className={cn("my-[4px] h-px bg-[var(--ss-seam)]", className)}
      {...props}
    />
  );
}

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuGroup,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
};
