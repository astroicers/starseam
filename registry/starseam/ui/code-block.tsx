"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Seam } from "@/registry/starseam/ui/seam";
import { CopyButton } from "@/registry/starseam/ui/copy-button";

const LINE_HEIGHT = 1.75;
const FONT_SIZE = 13;
/** Must match the py-[10px] on both <pre> blocks — border-box eats it. */
const PAD_Y = 10;

export interface CodeBlockProps {
  /** The exact source. Copying always yields all of it, collapsed or not. */
  code: string;
  /** Shown as an instrument label in the head row. */
  filename?: string;
  /** Shown beside the filename, e.g. "TSX", "JSON". Display only. */
  lang?: string;
  /** Render a line-number gutter behind a vertical seam. */
  lineNumbers?: boolean;
  /**
   * Lines visible while collapsed. Longer code gets an expand row at the
   * plate's foot; 0 disables collapsing. Ignored when the code is shorter.
   */
  collapsedLines?: number;
  /** Soft-wrap long lines instead of scrolling. Disables the gutter. */
  wrap?: boolean;
  /**
   * Pre-highlighted HTML from the `highlight` lib (ink shades only, no hues
   * — DECISIONS 01). Plain `code` renders monochrome when absent. Data across
   * the boundary, never a function (DECISIONS 11).
   */
  highlightedHtml?: string;
  /** Control labels — data, never functions. */
  labels?: { expand?: string; collapse?: string };
  className?: string;
}

/**
 * A plate that holds source code. The head row carries the filename as an
 * instrument label with a copy button; the body is ink on lacquer; long code
 * folds at a seam, and the expand row below it is marked by a rivet while
 * open — an open panel is a selection, never a severity (DECISIONS 10).
 * The collapsed state clips; it never scrolls vertically (DECISIONS 08 —
 * folding is stillness, the expand row is the only way down).
 */
function CodeBlock({
  code,
  filename,
  lang,
  lineNumbers = false,
  collapsedLines = 12,
  wrap = false,
  highlightedHtml,
  labels,
  className,
}: CodeBlockProps) {
  const lines = React.useMemo(() => code.replace(/\n$/, "").split("\n"), [code]);
  const collapsible = collapsedLines > 0 && lines.length > collapsedLines;
  const [open, setOpen] = React.useState(false);
  const clipped = collapsible && !open;
  const gutter = lineNumbers && !wrap;

  const codeStyle: React.CSSProperties = {
    fontSize: `${FONT_SIZE}px`,
    lineHeight: LINE_HEIGHT,
    maxHeight: clipped
      ? `${collapsedLines * FONT_SIZE * LINE_HEIGHT + PAD_Y * 2}px`
      : undefined,
  };

  return (
    <div
      data-slot="code-block"
      data-state={collapsible ? (open ? "open" : "collapsed") : undefined}
      className={cn(
        "min-w-0 rounded-[var(--ss-radius)] border border-[var(--ss-seam-strong)] bg-[var(--ss-plate-1)]",
        className
      )}
    >
      <div className="flex items-center justify-between gap-4 px-[12px] py-[7px]">
        <span className="flex min-w-0 items-baseline gap-3 font-[family-name:var(--ss-mono)] text-[11px] uppercase tracking-[var(--ss-track-label)]">
          {filename ? (
            <span className="truncate text-[var(--ss-text-2)]">{filename}</span>
          ) : null}
          {lang ? <span className="shrink-0 text-[var(--ss-text-3)]">{lang}</span> : null}
        </span>
        <CopyButton value={code} className="shrink-0" />
      </div>
      <Seam />
      {/* Long lines pan here; the fold is a clip, never a vertical scroll. */}
      <div
        data-slot="code-block-viewport"
        className="flex overflow-x-auto overflow-y-hidden"
      >
        {gutter ? (
          <>
            <pre
              aria-hidden="true"
              className="select-none overflow-hidden px-[10px] py-[10px] text-right font-[family-name:var(--ss-mono)] tabular-nums text-[var(--ss-text-3)]"
              style={codeStyle}
            >
              {(clipped ? lines.slice(0, collapsedLines) : lines)
                .map((_, i) => i + 1)
                .join("\n")}
            </pre>
            <Seam orientation="vertical" />
          </>
        ) : null}
        <pre
          className={cn(
            "min-w-0 flex-1 px-[12px] py-[10px] font-[family-name:var(--ss-mono)] text-[var(--ss-text-2)]",
            wrap && "whitespace-pre-wrap break-all"
          )}
          style={codeStyle}
        >
          {highlightedHtml ? (
            <code dangerouslySetInnerHTML={{ __html: highlightedHtml }} />
          ) : (
            <code>{code}</code>
          )}
        </pre>
      </div>
      {collapsible ? (
        <>
          <Seam />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className={cn(
              "flex w-full items-center gap-[8px] px-[12px] py-[7px] text-left",
              "font-[family-name:var(--ss-mono)] text-[10.5px] uppercase tracking-[var(--ss-track-label)]",
              "text-[var(--ss-text-3)] transition-colors duration-[var(--ss-dur)] ease-[var(--ss-ease)]",
              "hover:text-[var(--ss-text-2)]",
              "focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-[-1px] focus-visible:outline-[var(--ss-live)]",
              open && "text-[var(--ss-text-2)]"
            )}
          >
            {/* The open state is marked by a rivet, not a colour wash. */}
            <span
              aria-hidden="true"
              className={cn(
                "block size-[5px] rounded-full",
                open ? "bg-[var(--ss-rivet)]" : "bg-transparent"
              )}
            />
            {open ? (labels?.collapse ?? "COLLAPSE") : (labels?.expand ?? "EXPAND")}
            {" · "}
            {lines.length}
          </button>
        </>
      ) : null}
    </div>
  );
}

export { CodeBlock };
