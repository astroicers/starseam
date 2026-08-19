import * as React from "react";
import { cn } from "@/lib/utils";

type Elevation = "flush" | "raised" | "float";

// Depth is fill, never shadow (DECISIONS 04) — the same three cuts as Plate.
const ELEVATION: Record<Elevation, string> = {
  flush: "bg-[var(--ss-plate-1)] border-[var(--ss-seam)]",
  raised: "bg-[var(--ss-plate-2)] border-[var(--ss-seam)]",
  float: "bg-[var(--ss-plate-3)] border-[var(--ss-seam-strong)]",
};

/**
 * An instrument list: dated or labelled entries riveted onto one plate,
 * each row cut from the next by a seam (DECISIONS 03 — the seams are real,
 * the rows really adjoin). The optional head row carries an instrument
 * label. Rows are data laid out in composition — no render props cross the
 * boundary (DECISIONS 11).
 *
 * The archetype is a logbook page: archives, recent posts, related
 * reading, term indexes.
 */
function Ledger({
  label,
  meta,
  elevation = "flush",
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  /** Instrument label shown in the head row, e.g. "2025 · 48". */
  label?: string;
  /**
   * Readout at the head row's far end — data, never a function
   * (DECISIONS 11). The archetype is a year's month chart of stars.
   */
  meta?: React.ReactNode;
  /**
   * How high the ledger sits. Depth is fill, never shadow (DECISIONS 04):
   * float is the highest cut, for a card meant to read as lifted off the
   * ground.
   */
  elevation?: Elevation;
}) {
  return (
    <div
      data-slot="ledger"
      className={cn(
        "rounded-[var(--ss-radius)] border",
        ELEVATION[elevation],
        className
      )}
      {...props}
    >
      {label || meta ? (
        <div
          data-slot="ledger-label"
          className="flex items-baseline justify-between gap-4 border-b border-[var(--ss-seam)] px-6 py-3"
        >
          <p className="font-[family-name:var(--ss-mono)] text-[10.5px] uppercase tracking-[var(--ss-track-label)] text-[var(--ss-text-3)]">
            {label}
          </p>
          {meta ? <span className="shrink-0 self-center">{meta}</span> : null}
        </div>
      ) : null}
      <ol data-slot="ledger-rows">{children}</ol>
    </div>
  );
}

function LedgerRow({
  label,
  trailing,
  href,
  className,
  children,
  ...props
}: React.ComponentProps<"li"> & {
  /** Row label, set in the mono instrument face — a date, a count, an id. */
  label?: string;
  /** Instrument readout at the row's far end — a category, a count. */
  trailing?: React.ReactNode;
  /** When set, the whole row is a link. */
  href?: string;
}) {
  const body = (
    <>
      {label ? (
        <span className="shrink-0 font-[family-name:var(--ss-mono)] text-[11px] tabular-nums tracking-[var(--ss-track-label)] text-[var(--ss-text-3)]">
          {label}
        </span>
      ) : null}
      <span
        className={cn(
          "min-w-0 flex-1 text-[15px] text-[var(--ss-text-2)]",
          href &&
            "transition-colors duration-[var(--ss-dur)] ease-[var(--ss-ease)] group-hover:text-[var(--ss-text)]"
        )}
      >
        {children}
      </span>
      {trailing ? (
        <span className="shrink-0 font-[family-name:var(--ss-mono)] text-[10.5px] uppercase tracking-[var(--ss-track-label)] text-[var(--ss-text-3)] max-sm:hidden">
          {trailing}
        </span>
      ) : null}
    </>
  );
  const rowClass = "flex items-baseline gap-5 px-6 py-4 max-sm:flex-col max-sm:gap-1";
  return (
    <li
      data-slot="ledger-row"
      className={cn("border-t border-[var(--ss-seam)] first:border-t-0", className)}
      {...props}
    >
      {href ? (
        <a href={href} className={cn("group", rowClass)}>
          {body}
        </a>
      ) : (
        <div className={rowClass}>{body}</div>
      )}
    </li>
  );
}

export { Ledger, LedgerRow };
