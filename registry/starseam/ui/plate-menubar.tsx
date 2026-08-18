"use client";

import * as React from "react";
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { cn } from "@/lib/utils";

const MenubarMenu = MenubarPrimitive.Menu;

/**
 * A console menu strip: one bordered plate, triggers in instrument lettering,
 * menus falling as dropdown plates. The open trigger takes a deeper fill —
 * selection is fill and steel, never lapis (DECISIONS 10).
 */
function Menubar({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Root>) {
  return (
    <MenubarPrimitive.Root
      data-slot="menubar"
      className={cn(
        "flex items-stretch rounded-[var(--ss-radius)] border border-[var(--ss-seam-strong)]",
        "divide-x divide-[var(--ss-seam)]",
        className
      )}
      {...props}
    />
  );
}

function MenubarTrigger({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Trigger>) {
  return (
    <MenubarPrimitive.Trigger
      data-slot="menubar-trigger"
      className={cn(
        "flex select-none items-center px-[11px] py-[6px] outline-none",
        "font-[family-name:var(--ss-mono)] text-[11px] uppercase tracking-[var(--ss-track-label)]",
        "text-[var(--ss-text-3)] transition-colors duration-[var(--ss-dur)] ease-[var(--ss-ease)]",
        "hover:text-[var(--ss-text-2)]",
        "focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-[-1px] focus-visible:outline-[var(--ss-live)]",
        "data-[state=open]:bg-[var(--ss-plate-2)] data-[state=open]:text-[var(--ss-text)]",
        className
      )}
      {...props}
    />
  );
}

function MenubarContent({
  className,
  align = "start",
  sideOffset = 6,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Content>) {
  return (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.Content
        data-slot="menubar-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "z-50 min-w-[9rem] overflow-hidden rounded-[var(--ss-radius)] border",
          "border-[var(--ss-seam-strong)] bg-[var(--ss-plate-3)] p-[4px]",
          "text-[var(--ss-text)] shadow-none",
          className
        )}
        {...props}
      />
    </MenubarPrimitive.Portal>
  );
}

function MenubarItem({
  className,
  destructive,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Item> & {
  /** An action that destroys something. A severity, so it takes 緋. */
  destructive?: boolean;
}) {
  return (
    <MenubarPrimitive.Item
      data-slot="menubar-item"
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

function MenubarSeparator({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Separator>) {
  return (
    <MenubarPrimitive.Separator
      data-slot="menubar-separator"
      className={cn("my-[4px] h-px bg-[var(--ss-seam)]", className)}
      {...props}
    />
  );
}

export { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem, MenubarSeparator };
