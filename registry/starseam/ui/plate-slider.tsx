"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/lib/utils";

/**
 * A setting dragged along a seam. The track is a hairline channel, the filled
 * range and the thumb are rivet steel — a position is a selection, not a
 * severity, so no lapis (DECISIONS 10); the blue appears only as the focus
 * ring on the thumb.
 */
function PlateSlider({
  className,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Root>) {
  return (
    <SliderPrimitive.Root
      data-slot="slider"
      className={cn(
        "relative flex w-full touch-none select-none items-center",
        "data-[disabled]:opacity-40",
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track
        data-slot="slider-track"
        className="relative h-[4px] w-full grow overflow-hidden rounded-[var(--ss-radius)] border border-[var(--ss-seam)] bg-[var(--ss-plate-1)]"
      >
        <SliderPrimitive.Range
          data-slot="slider-range"
          className="absolute h-full bg-[var(--ss-rivet)]"
        />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb
        data-slot="slider-thumb"
        className={cn(
          "block size-[14px] rounded-full border border-[var(--ss-rivet)] bg-[var(--ss-plate-3)]",
          "transition-colors duration-[var(--ss-dur)] ease-[var(--ss-ease)]",
          "hover:bg-[var(--ss-plate-2)]",
          "focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-[var(--ss-live)]"
        )}
      />
    </SliderPrimitive.Root>
  );
}

export { PlateSlider };
