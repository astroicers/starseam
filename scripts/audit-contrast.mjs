/**
 * Contrast + colour-lineage audit.
 *
 * Reads the token values straight out of the theme file so the numbers can
 * never drift from what ships. Exits non-zero if any pair misses its target,
 * which is what makes this a gate rather than a claim.
 */
import { readFileSync } from "node:fs";

const CSS = readFileSync(
  new URL("../registry/starseam/theme/starseam.css", import.meta.url),
  "utf8"
);

/** Pull a token out of a given block of the theme file. */
function token(name, blockStart) {
  const from = CSS.indexOf(blockStart);
  if (from === -1) throw new Error(`block not found: ${blockStart}`);
  const block = CSS.slice(from, CSS.indexOf("}", from));
  const match = block.match(new RegExp(`--${name}:\\s*(#[0-9a-fA-F]{6})`));
  if (!match) throw new Error(`token not found: --${name} in ${blockStart}`);
  return match[1];
}

const channel = (c) => {
  const v = c / 255;
  return v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
};

const luminance = (hex) => {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
};

const contrast = (a, b) => {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
};

const CONSOLE_BLOCK = ":root {";
const REPORT_BLOCK = ':root[data-mode="report"] {';

/** [token, ground, target] — ground list covers every surface it can sit on. */
const PAIRS = [
  ["ss-text", ["ss-ground"], 4.5],
  ["ss-text-2", ["ss-ground"], 4.5],
  ["ss-text-3", ["ss-ground", "ss-plate-2", "ss-plate-3"], 4.5],
  ["ss-live", ["ss-ground", "ss-plate-2"], 4.5],
  ["ss-warn", ["ss-ground", "ss-plate-2"], 4.5],
  ["ss-crit", ["ss-ground", "ss-plate-2"], 4.5],
  // Rivets are aria-hidden graphical objects: 1.4.11 non-text contrast.
  ["ss-rivet", ["ss-ground"], 3.0],
];

let failed = 0;

for (const [mode, block] of [
  ["console", CONSOLE_BLOCK],
  ["report", REPORT_BLOCK],
]) {
  console.log(`\n${mode}`);
  for (const [fg, grounds, target] of PAIRS) {
    for (const bg of grounds) {
      const ratio = contrast(token(fg, block), token(bg, block));
      const ok = ratio >= target;
      if (!ok) failed++;
      console.log(
        `  ${ok ? "PASS" : "FAIL"}  ${fg} / ${bg}`.padEnd(44) +
          `${ratio.toFixed(2)} (needs ${target})`
      );
    }
  }
}

if (failed > 0) {
  console.error(`\n${failed} pair(s) below target. See docs/ACCESSIBILITY.md.`);
  process.exit(1);
}
console.log("\nAll pairs clear WCAG 2.2 AA.");
