"use client";

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cn } from "@/lib/utils";

/**
 * An identity plate. Square with the system 2px radius — plates are cut, not
 * moulded (DECISIONS 09) — and a hairline seam around the image. The fallback
 * is instrument lettering on steel, not a pastel disc.
 */
function Avatar({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(
        "relative flex size-[36px] shrink-0 overflow-hidden rounded-[var(--ss-radius)]",
        "border border-[var(--ss-seam-strong)] bg-[var(--ss-plate-1)]",
        className
      )}
      {...props}
    />
  );
}

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full object-cover", className)}
      {...props}
    />
  );
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "flex size-full items-center justify-center",
        "font-[family-name:var(--ss-mono)] text-[11px] uppercase tracking-[0.08em] text-[var(--ss-text-3)]",
        className
      )}
      {...props}
    />
  );
}

export { Avatar, AvatarImage, AvatarFallback };
