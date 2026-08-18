"use client";

import * as React from "react";
import { Command as CommandPrimitive } from "cmdk";
import { cn } from "@/lib/utils";
import { Seam } from "@/registry/starseam/ui/seam";

/**
 * The console palette: type, filter, execute. A bordered plate with the query
 * line separated from the results by a real seam. The highlighted row takes a
 * deeper fill and a rivet — selection is never lapis (DECISIONS 10).
 */
function Command({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive>) {
  return (
    <CommandPrimitive
      data-slot="command"
      className={cn(
        "flex w-full flex-col overflow-hidden rounded-[var(--ss-radius)]",
        "border border-[var(--ss-seam-strong)] bg-[var(--ss-plate-2)] text-[var(--ss-text)]",
        className
      )}
      {...props}
    />
  );
}

function CommandInput({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Input>) {
  return (
    <>
      <CommandPrimitive.Input
        data-slot="command-input"
        className={cn(
          "h-[38px] w-full bg-transparent px-[12px] text-[14px] outline-none",
          "placeholder:text-[var(--ss-text-3)]",
          className
        )}
        {...props}
      />
      <Seam />
    </>
  );
}

function CommandList({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.List>) {
  return (
    <CommandPrimitive.List
      data-slot="command-list"
      className={cn("max-h-[280px] overflow-y-auto p-[4px]", className)}
      {...props}
    />
  );
}

function CommandEmpty({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Empty>) {
  return (
    <CommandPrimitive.Empty
      data-slot="command-empty"
      className={cn("px-[9px] py-[14px] text-center text-[13px] text-[var(--ss-text-3)]", className)}
      {...props}
    />
  );
}

function CommandGroup({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Group>) {
  return (
    <CommandPrimitive.Group
      data-slot="command-group"
      className={cn(
        "[&_[cmdk-group-heading]]:px-[9px] [&_[cmdk-group-heading]]:py-[6px]",
        "[&_[cmdk-group-heading]]:font-[family-name:var(--ss-mono)] [&_[cmdk-group-heading]]:text-[10px]",
        "[&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:uppercase",
        "[&_[cmdk-group-heading]]:tracking-[var(--ss-track-label)] [&_[cmdk-group-heading]]:text-[var(--ss-text-3)]",
        className
      )}
      {...props}
    />
  );
}

function CommandItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Item>) {
  return (
    <CommandPrimitive.Item
      data-slot="command-item"
      className={cn(
        "relative flex cursor-default select-none items-center gap-[8px]",
        "rounded-[var(--ss-radius)] px-[9px] py-[6px] text-[13px]",
        "data-[selected=true]:bg-[var(--ss-plate-1)]",
        "data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-40",
        className
      )}
      {...props}
    >
      {/* The highlighted row is marked by a rivet, not a colour wash. */}
      <span
        aria-hidden="true"
        className="block size-[5px] shrink-0 rounded-full bg-transparent [[data-selected=true]>&]:bg-[var(--ss-rivet)]"
      />
      {children}
    </CommandPrimitive.Item>
  );
}

function CommandSeparator({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Separator>) {
  return (
    <CommandPrimitive.Separator
      data-slot="command-separator"
      className={cn("my-[4px] h-px bg-[var(--ss-seam)]", className)}
      {...props}
    />
  );
}

export {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
};
