import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * The glyph set: instrument marks drawn on the 24-unit grid with a 1.5
 * hairline, butt caps and miter joins — cut, not moulded (DECISIONS 09).
 * Monochrome currentColor only; a glyph never carries severity by itself
 * (DECISIONS 01). Rivet dots are the only filled elements, except brand
 * marks, which keep their canonical silhouettes — a logo redrawn past
 * recognition is a costume (DECISIONS 07, in spirit).
 *
 * Named by what they mean on this instrument panel: `report` and
 * `console` are the two duty shifts of DECISIONS 05.
 */

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "butt",
  strokeLinejoin: "miter",
} as const;

const GLYPHS = {
  search: (
    <g {...stroke}>
      <circle cx="10.5" cy="10.5" r="6.25" />
      <path d="M15 15l5.5 5.5" />
    </g>
  ),
  rss: (
    <g {...stroke}>
      <path d="M4.75 11a8.25 8.25 0 0 1 8.25 8.25" />
      <path d="M4.75 4.5A14.75 14.75 0 0 1 19.5 19.25" />
      <circle cx="6" cy="18" r="1.6" fill="currentColor" stroke="none" />
    </g>
  ),
  external: (
    <g {...stroke}>
      <path d="M11 5.25H4.75V19.25H18.75V13" />
      <path d="M13.75 4.75h5.5v5.5" />
      <path d="M19 5L10.75 13.25" />
    </g>
  ),
  calendar: (
    <g {...stroke}>
      <rect x="3.75" y="5.75" width="16.5" height="14" rx="1" />
      <path d="M3.75 10.25h16.5" />
      <path d="M8 3.25V7M16 3.25V7" />
    </g>
  ),
  clock: (
    <g {...stroke}>
      <circle cx="12" cy="12" r="8.25" />
      <path d="M12 7.5V12l3.5 2" />
    </g>
  ),
  tag: (
    <g {...stroke}>
      <path d="M4.75 4.75H11.5L19.75 13 13 19.75 4.75 11.5Z" />
      <circle cx="8.75" cy="8.75" r="1.5" fill="currentColor" stroke="none" />
    </g>
  ),
  folder: (
    <g {...stroke}>
      <path d="M3.75 5.5H10l2 2.25h8.25v10.5H3.75Z" />
    </g>
  ),
  archive: (
    <g {...stroke}>
      <rect x="3.25" y="4" width="17.5" height="4.5" />
      <path d="M5 8.5v11h14v-11" />
      <path d="M10 12.5h4" />
    </g>
  ),
  user: (
    <g {...stroke}>
      <circle cx="12" cy="8" r="3.75" />
      <path d="M4.75 20c0-3.6 3.25-6 7.25-6s7.25 2.4 7.25 6" />
    </g>
  ),
  talk: (
    <g {...stroke}>
      <path d="M3.75 5h16.5v10.5H12l-4 4v-4H3.75Z" />
    </g>
  ),
  certificate: (
    <g {...stroke}>
      <circle cx="12" cy="9.5" r="4.75" />
      <path d="M9.25 13.5 8 20.5l4-2.5 4 2.5-1.25-7" />
    </g>
  ),
  copy: (
    <g {...stroke}>
      <rect x="8.75" y="8.75" width="11" height="11" />
      <path d="M15.25 4.5H4.5v10.75" />
    </g>
  ),
  check: (
    <g {...stroke}>
      <path d="M4.75 12.75 10 18 19.25 6.5" />
    </g>
  ),
  close: (
    <g {...stroke}>
      <path d="M5.5 5.5l13 13M18.5 5.5l-13 13" />
    </g>
  ),
  "chevron-down": (
    <g {...stroke}>
      <path d="M5.5 9l6.5 6.5L18.5 9" />
    </g>
  ),
  "arrow-left": (
    <g {...stroke}>
      <path d="M20 12H4.5" />
      <path d="M10.5 5.75 4.25 12l6.25 6.25" />
    </g>
  ),
  "arrow-right": (
    <g {...stroke}>
      <path d="M4 12h15.5" />
      <path d="M13.5 5.75 19.75 12l-6.25 6.25" />
    </g>
  ),
  /* report — day shift, ink on paper (DECISIONS 05) */
  report: (
    <g {...stroke}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 3v2.5M12 18.5V21M3 12h2.5M18.5 12H21M5.64 5.64l1.77 1.77M16.59 16.59l1.77 1.77M18.36 5.64l-1.77 1.77M7.41 16.59l-1.77 1.77" />
    </g>
  ),
  /* console — night shift, light from the screen (DECISIONS 05) */
  console: (
    <g {...stroke}>
      <path d="M20 14.5A8.75 8.75 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z" />
    </g>
  ),
  github: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      transform="scale(1.5)"
      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"
    />
  ),
  linkedin: (
    <path
      fill="currentColor"
      d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.25 2.36 4.25 5.43v6.31ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z"
    />
  ),
} as const;

export type GlyphName = keyof typeof GLYPHS;

const GLYPH_NAMES = Object.keys(GLYPHS) as GlyphName[];

function Glyph({
  name,
  label,
  className,
  ...props
}: Omit<React.ComponentProps<"svg">, "children"> & {
  name: GlyphName;
  /** Accessible name. Without it the glyph is decorative and hidden. */
  label?: string;
}) {
  return (
    <svg
      data-slot="glyph"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      role={label ? "img" : undefined}
      aria-hidden={label ? undefined : true}
      className={cn("inline-block shrink-0 align-[-0.125em]", className)}
      {...props}
    >
      {label ? <title>{label}</title> : null}
      {GLYPHS[name]}
    </svg>
  );
}

export { Glyph, GLYPH_NAMES };
