"use client";

import * as React from "react";
import { OTPInput, OTPInputContext } from "input-otp";
import { cn } from "@/lib/utils";

/**
 * A code entered one plate at a time — each slot is a small plate, the seams
 * between them real boundaries. The active slot is edged in 瑠璃 because it
 * holds the focus, the one legal home for the blue (DECISIONS 10). The caret
 * is a still bar: a blinking caret is a loop, and the only permitted loop
 * belongs to crit (DECISIONS 08).
 */
function PlateInputOTP({
  className,
  containerClassName,
  ...props
}: React.ComponentProps<typeof OTPInput> & { containerClassName?: string }) {
  return (
    <OTPInput
      data-slot="input-otp"
      containerClassName={cn("flex items-center gap-[6px]", containerClassName)}
      className={cn("disabled:cursor-not-allowed", className)}
      {...props}
    />
  );
}

function PlateInputOTPGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-otp-group"
      className={cn("flex items-center gap-[6px]", className)}
      {...props}
    />
  );
}

function PlateInputOTPSlot({
  index,
  className,
  ...props
}: React.ComponentProps<"div"> & { index: number }) {
  const ctx = React.useContext(OTPInputContext);
  const slot = ctx.slots[index];
  return (
    <div
      data-slot="input-otp-slot"
      data-active={slot?.isActive || undefined}
      className={cn(
        "relative flex size-[36px] items-center justify-center rounded-[var(--ss-radius)]",
        "border border-[var(--ss-seam-strong)] bg-[var(--ss-plate-1)]",
        "font-[family-name:var(--ss-mono)] text-[15px] tabular-nums text-[var(--ss-text)]",
        "transition-colors duration-[var(--ss-dur)] ease-[var(--ss-ease)]",
        slot?.isActive && "border-[var(--ss-live)]",
        className
      )}
      {...props}
    >
      {slot?.char}
      {slot?.hasFakeCaret ? (
        <span aria-hidden="true" className="absolute inset-y-[9px] w-px bg-[var(--ss-text)]" />
      ) : null}
    </div>
  );
}

function PlateInputOTPSeparator(props: React.ComponentProps<"div">) {
  return (
    <div data-slot="input-otp-separator" role="presentation" aria-hidden="true" {...props}>
      <span className="block size-[3.5px] rounded-full bg-[var(--ss-rivet-quiet)]" />
    </div>
  );
}

export { PlateInputOTP, PlateInputOTPGroup, PlateInputOTPSlot, PlateInputOTPSeparator };
