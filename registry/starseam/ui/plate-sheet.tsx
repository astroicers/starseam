"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";
import { Seam } from "@/registry/starseam/ui/seam";

const Sheet = DialogPrimitive.Root;
const SheetTrigger = DialogPrimitive.Trigger;
const SheetClose = DialogPrimitive.Close;

const SIDE = {
  right: "inset-y-0 right-0 h-full w-[min(24rem,100%-2rem)] border-l",
  bottom: "inset-x-0 bottom-0 max-h-[80svh] w-full border-t",
} as const;

export interface SheetContentProps
  extends React.ComponentProps<typeof DialogPrimitive.Content> {
  side?: keyof typeof SIDE;
}

/**
 * A panel drawn out from an edge. It slides rather than fades, because a panel
 * that appears in place reads as a dialog — see the sheet keyframes in the
 * theme, which are the one directional exception to DECISIONS 08.
 */
function SheetContent({
  className,
  children,
  side = "right",
  ...props
}: SheetContentProps) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay
        data-slot="sheet-overlay"
        className="fixed inset-0 z-50 bg-[var(--ss-scrim)]"
      />
      <DialogPrimitive.Content
        data-slot="sheet-content"
        data-side={side}
        className={cn(
          "fixed z-50 flex flex-col border-[var(--ss-seam-strong)]",
          "bg-[var(--ss-plate-2)] shadow-none",
          SIDE[side],
          className
        )}
        {...props}
      >
        {children}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}

function SheetHeader({ className, children, ...props }: React.ComponentProps<"div">) {
  return (
    <>
      <div
        data-slot="sheet-header"
        className={cn("flex flex-col gap-[6px] p-[calc(var(--ss-em)*1.25)]", className)}
        {...props}
      >
        {children}
      </div>
      <Seam />
    </>
  );
}

function SheetBody({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-body"
      className={cn(
        "flex-1 overflow-y-auto p-[calc(var(--ss-em)*1.25)] text-[13.5px] text-[var(--ss-text-2)]",
        className
      )}
      {...props}
    />
  );
}

function SheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="sheet-title"
      className={cn("text-[16px] tracking-[var(--ss-track-head)] text-[var(--ss-text)]", className)}
      {...props}
    />
  );
}

function SheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="sheet-description"
      className={cn("text-[12.5px] text-[var(--ss-text-3)]", className)}
      {...props}
    />
  );
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetBody,
  SheetTitle,
  SheetDescription,
};
