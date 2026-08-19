import * as React from "react";
import { cn } from "@/lib/utils";

export interface RailItem {
  /** Anchor target — the element id the star links to. */
  id: string;
  label: string;
}

/**
 * A constellation of anchors: one vertical seam, one star per entry, and
 * the star for the section you are in is the one that is lit
 * (DECISIONS 03 — stars only grow on seams). Pure structure: the lit state
 * is read from `aria-current="true"` on a star, so any consumer — React
 * state or a plain DOM scroll-spy — can drive it by flipping the
 * attribute. Labels render always and show when the rail carries
 * `data-expanded`, is hovered, or holds focus; positioning, plate chrome
 * and docking belong to the consumer.
 */
function Rail({
  items,
  label,
  expanded,
  currentId,
  className,
  ...props
}: Omit<React.ComponentProps<"nav">, "children"> & {
  items: RailItem[];
  /** Accessible name for the nav landmark. */
  label?: string;
  /** Pin labels visible (hover and focus reveal them regardless). */
  expanded?: boolean;
  /**
   * The lit star. React consumers pass state here; static consumers may
   * instead flip aria-current="true" on a star from a DOM scroll-spy.
   */
  currentId?: string;
}) {
  return (
    <nav
      data-slot="rail"
      data-expanded={expanded || undefined}
      aria-label={label}
      className={cn("group/rail relative", className)}
      {...props}
    >
      {/* The spine: a vertical seam the stars sit on. */}
      <span
        aria-hidden="true"
        className="absolute inset-y-[10px] left-[7px] w-px bg-[var(--ss-seam)]"
      />
      {items.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          data-slot="rail-star"
          aria-label={item.label}
          aria-current={currentId === item.id ? "true" : undefined}
          className={cn(
            "group/star relative flex h-[34px] w-full min-w-[28px] items-center gap-[12px] outline-none",
            "focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-[-1px] focus-visible:outline-[var(--ss-live)]"
          )}
        >
          <span className="flex w-[15px] shrink-0 justify-center">
            <span
              className={cn(
                "block size-[8px] rounded-full bg-[var(--ss-rivet-quiet)]",
                "transition-colors duration-[var(--ss-dur)] ease-[var(--ss-ease)]",
                "group-hover/star:bg-[var(--ss-rivet)]",
                "group-aria-[current=true]/star:size-[10px] group-aria-[current=true]/star:bg-[var(--ss-rivet)]"
              )}
            />
          </span>
          <span
            data-slot="rail-label"
            className={cn(
              "hidden whitespace-nowrap font-[family-name:var(--ss-mono)] text-[12px] uppercase tracking-[var(--ss-track-label)]",
              "text-[var(--ss-text-3)] group-aria-[current=true]/star:text-[var(--ss-text)]",
              "group-data-[expanded]/rail:inline group-hover/rail:inline group-focus-within/rail:inline"
            )}
          >
            {item.label}
          </span>
        </a>
      ))}
    </nav>
  );
}

export { Rail };
