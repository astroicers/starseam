import { codeToHtml } from "shiki";

/**
 * Ink-layer highlighting. Colour is severity, never decoration (DECISIONS 01)
 * — so code takes no hues at all. The layers are shades of the same ink:
 * keywords at full text strength, ordinary code one step back, comments and
 * punctuation at instrument grey, strings leaning italic. The sentinel colours
 * below are replaced with the theme's CSS variables, so the ink follows the
 * console/report mode switch for free.
 *
 * Server-side only (build time under static export). Pass the returned HTML
 * to code-block's `highlightedHtml` — data across the boundary, never a
 * function (DECISIONS 11).
 */

const INK_KEYWORD = "#000001";
const INK_CODE = "#000002";
const INK_QUIET = "#000003";
const INK_STRING = "#000004";

const inkTheme = {
  name: "starseam-ink",
  type: "dark" as const,
  colors: {
    "editor.background": "#00000000",
    "editor.foreground": INK_CODE,
  },
  tokenColors: [
    {
      scope: ["keyword", "storage", "constant.language", "support.type.primitive"],
      settings: { foreground: INK_KEYWORD },
    },
    {
      scope: ["comment", "punctuation", "meta.brace"],
      settings: { foreground: INK_QUIET },
    },
    {
      scope: ["string", "string.template"],
      settings: { foreground: INK_STRING, fontStyle: "italic" },
    },
    {
      scope: ["variable", "entity.name", "support", "constant.numeric", "property"],
      settings: { foreground: INK_CODE },
    },
  ],
};

export async function highlight(code: string, lang: string): Promise<string> {
  return codeToHtml(code, {
    lang,
    theme: inkTheme,
    structure: "inline",
    colorReplacements: {
      [INK_KEYWORD]: "var(--ss-text)",
      [INK_CODE]: "var(--ss-text-2)",
      [INK_QUIET]: "var(--ss-text-3)",
      [INK_STRING]: "var(--ss-text-2)",
    },
  });
}
