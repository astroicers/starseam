"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";
import { Seam } from "@/registry/starseam/ui/seam";

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogClose = DialogPrimitive.Close;

function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn("fixed inset-0 z-50 bg-[var(--ss-scrim)]", className)}
      {...props}
    />
  );
}

/**
 * A dialog is a plate lifted clear of the page.
 *
 * It floats on --ss-plate-3, the lightest cut of the lacquer, edged with a
 * strengthened seam. No shadow, no backdrop blur — a plate does not glow and
 * it does not go translucent. DECISIONS 04.
 *
 * Entry and exit come from the theme, keyed off data-slot. DECISIONS 08.
 */
function DialogContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content>) {
  return (
    <DialogPrimitive.Portal>
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          "fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-[440px]",
          "-translate-x-1/2 -translate-y-1/2",
          "rounded-[var(--ss-radius)] border border-[var(--ss-seam-strong)]",
          "bg-[var(--ss-plate-3)] shadow-none",
          className
        )}
        {...props}
      >
        {children}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}

/**
 * The header and the body are two different things that meet, so the boundary
 * between them is a real seam and earns its rivets. DECISIONS 03.
 */
function DialogHeader({ className, children, ...props }: React.ComponentProps<"div">) {
  return (
    <>
      <div
        data-slot="dialog-header"
        className={cn("flex flex-col gap-[6px] p-[calc(var(--ss-em)*1.25)]", className)}
        {...props}
      >
        {children}
      </div>
      <Seam />
    </>
  );
}

function DialogBody({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-body"
      className={cn("p-[calc(var(--ss-em)*1.25)] text-[13.5px] text-[var(--ss-text-2)]", className)}
      {...props}
    />
  );
}

function DialogFooter({ className, children, ...props }: React.ComponentProps<"div">) {
  return (
    <>
      <Seam />
      <div
        data-slot="dialog-footer"
        className={cn(
          "flex flex-col-reverse gap-[8px] p-[calc(var(--ss-em)*1.25)] sm:flex-row sm:justify-end",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </>
  );
}

function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn(
        "text-[16px] tracking-[var(--ss-track-head)] text-[var(--ss-text)]",
        className
      )}
      {...props}
    />
  );
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn("text-[12.5px] text-[var(--ss-text-3)]", className)}
      {...props}
    />
  );
}

export {
  Dialog,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogBody,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
