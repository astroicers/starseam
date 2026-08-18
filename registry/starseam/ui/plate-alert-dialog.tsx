"use client";

import * as React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { cn } from "@/lib/utils";
import { Seam } from "@/registry/starseam/ui/seam";

const AlertDialog = AlertDialogPrimitive.Root;
const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

/**
 * The dialog's stricter sibling: clicking outside does not dismiss it — an
 * explicit answer is required (Esc still cancels; keyboard users always get
 * an exit). Same plate rules as plate-dialog: lightest cut,
 * strengthened seam, no shadow (DECISIONS 04); entry from the theme
 * (DECISIONS 08). The destructive action is a severity and takes 緋 in the
 * consumer's button text, never colour alone.
 */
function AlertDialogContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Content>) {
  return (
    <AlertDialogPrimitive.Portal>
      <AlertDialogPrimitive.Overlay
        data-slot="alert-dialog-overlay"
        className="fixed inset-0 z-50 bg-[var(--ss-scrim)]"
      />
      <AlertDialogPrimitive.Content
        data-slot="alert-dialog-content"
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
      </AlertDialogPrimitive.Content>
    </AlertDialogPrimitive.Portal>
  );
}

function AlertDialogHeader({ className, children, ...props }: React.ComponentProps<"div">) {
  return (
    <>
      <div
        data-slot="alert-dialog-header"
        className={cn("flex flex-col gap-[6px] p-[calc(var(--ss-em)*1.25)]", className)}
        {...props}
      >
        {children}
      </div>
      <Seam />
    </>
  );
}

function AlertDialogBody({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-body"
      className={cn("p-[calc(var(--ss-em)*1.25)] text-[14px] text-[var(--ss-text-2)]", className)}
      {...props}
    />
  );
}

function AlertDialogFooter({ className, children, ...props }: React.ComponentProps<"div">) {
  return (
    <>
      <Seam />
      <div
        data-slot="alert-dialog-footer"
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

function AlertDialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Title>) {
  return (
    <AlertDialogPrimitive.Title
      data-slot="alert-dialog-title"
      className={cn("text-[16px] tracking-[var(--ss-track-head)] text-[var(--ss-text)]", className)}
      {...props}
    />
  );
}

function AlertDialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Description>) {
  return (
    <AlertDialogPrimitive.Description
      data-slot="alert-dialog-description"
      className={cn("text-[13px] text-[var(--ss-text-3)]", className)}
      {...props}
    />
  );
}

const AlertDialogAction = AlertDialogPrimitive.Action;
const AlertDialogCancel = AlertDialogPrimitive.Cancel;

export {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
};
