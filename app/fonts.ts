import {
  IBM_Plex_Mono,
  IBM_Plex_Sans,
  IBM_Plex_Sans_JP,
  Noto_Sans_TC,
} from "next/font/google";

/**
 * Shared across both root layouts (zh at /, en at /en) so a single set of
 * font instances — and a single generated stylesheet — serves the whole site.
 */

export const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
});

/**
 * The intent is IBM Plex Sans TC, but next/font/google ships Plex Sans in JP
 * and KR only — there is no TC cut on Google Fonts. The token stack already
 * names Plex TC first, so self-hosting `@ibm/plex-sans-tc` via next/font/local
 * upgrades this without touching a component. Until then Noto Sans TC is the
 * declared fallback doing real work. DECISIONS 06.
 */
export const sansTC = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-plex-tc",
});

export const sansJP = IBM_Plex_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-jp",
});

/**
 * `:lang(en)` resolves to `--ss-sans`, whose first family is IBM Plex Sans —
 * without this face the entire English locale silently fell through to
 * system-ui. next/font registers the face under its literal family name, so
 * loading it here is the whole fix.
 */
export const sansEN = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-en",
});
