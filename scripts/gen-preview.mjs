/**
 * Specimen sheet generator.
 *
 * Reads token values from the theme file and draws the sheet with them, so the
 * preview in the README can never show colours the system no longer ships.
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import opentype from "opentype.js";

/**
 * Text is converted to outlines. An SVG loaded through <img> — which is how
 * GitHub renders it — cannot fetch a webfont, so anything left as <text>
 * falls back to whatever the viewer happens to have installed, and CJK turns
 * to tofu on machines without a Han font. Paths render identically anywhere.
 */
/** Node returns a Buffer view; opentype needs the exact ArrayBuffer slice. */
function loadFont(file) {
  const b = readFileSync(new URL(`../.fonts/${file}`, import.meta.url));
  return opentype.parse(b.buffer.slice(b.byteOffset, b.byteOffset + b.byteLength));
}

const FONTS = {
  mono: loadFont("IBMPlexMono-Regular.ttf"),
  monoMedium: loadFont("IBMPlexMono-Medium.ttf"),
  monoBold: loadFont("IBMPlexMono-SemiBold.ttf"),
  han: loadFont("NotoSansTC.otf"),
};

const isHan = (ch) => /[　-鿿豈-﫿＀-￯]/u.test(ch);

/** Latin from Plex, CJK from Noto — the same split the token stack declares. */
function runs(str, latin) {
  const out = [];
  for (const ch of str) {
    const font = isHan(ch) ? FONTS.han : latin;
    const last = out[out.length - 1];
    if (last && last.font === font) last.text += ch;
    else out.push({ font, text: ch });
  }
  return out;
}

function measure(str, latin, size, track) {
  let w = 0;
  for (const { font, text } of runs(str, latin)) {
    w += font.getAdvanceWidth(text, size) + track * text.length;
  }
  return w;
}

/**
 * opentype's own toPathData() emits NaN when a coordinate lands on a whole
 * number, which silently deletes glyphs. Format the commands directly.
 */
function pathData(path, dp = 2) {
  const n = (v) => {
    const r = Number(v.toFixed(dp));
    return Number.isFinite(r) ? String(r) : "0";
  };
  let d = "";
  for (const c of path.commands) {
    if (c.type === "M") d += `M${n(c.x)} ${n(c.y)}`;
    else if (c.type === "L") d += `L${n(c.x)} ${n(c.y)}`;
    else if (c.type === "Q") d += `Q${n(c.x1)} ${n(c.y1)} ${n(c.x)} ${n(c.y)}`;
    else if (c.type === "C") d += `C${n(c.x1)} ${n(c.y1)} ${n(c.x2)} ${n(c.y2)} ${n(c.x)} ${n(c.y)}`;
    else if (c.type === "Z") d += "Z";
  }
  return d;
}

function outline(str, x, y, size, fill, { latin = FONTS.mono, track = 0, anchor } = {}) {
  const total = measure(str, latin, size, track);
  let cx = anchor === "end" ? x - total : anchor === "middle" ? x - total / 2 : x;
  const glyphs = [];
  for (const { font, text } of runs(str, latin)) {
    for (const ch of text) {
      // One <path> per glyph. Merging every glyph into a single path makes
      // their contours share one fill rule, and neighbouring counters can
      // cancel each other out — glyphs silently vanish in some renderers.
      const d = pathData(font.getPath(ch, cx, y, size));
      if (d) glyphs.push(`<path d="${d}" fill="${fill}"/>`);
      cx += font.getAdvanceWidth(ch, size) + track;
    }
  }
  return glyphs.join("");
}

const CSS = readFileSync(
  new URL("../registry/starseam/theme/starseam.css", import.meta.url),
  "utf8"
);

function tokens(blockStart) {
  const from = CSS.indexOf(blockStart);
  const block = CSS.slice(from, CSS.indexOf("}", from));
  const out = {};
  for (const [, k, v] of block.matchAll(/--(ss-[a-z0-9-]+):\s*(#[0-9a-fA-F]{6})/g)) {
    out[k] = v;
  }
  return out;
}

const MODES = {
  console: tokens(":root {"),
  report: tokens(':root[data-mode="report"] {'),
};

const W = 960, H = 540;

function mark(cx, cy, size, t) {
  const rO = (size / 2) * 0.9, rI = (size / 2) * 0.185;
  let out = `<circle cx="${cx}" cy="${cy}" r="${rO}" fill="none" stroke="${t["ss-seam-strong"]}"/>`;
  for (let i = 0; i < 24; i++) {
    const a = (i / 24) * Math.PI * 2 - Math.PI / 2;
    out += `<line x1="${(cx + Math.cos(a) * rI).toFixed(1)}" y1="${(cy + Math.sin(a) * rI).toFixed(1)}" x2="${(cx + Math.cos(a) * rO).toFixed(1)}" y2="${(cy + Math.sin(a) * rO).toFixed(1)}" stroke="${t["ss-seam-strong"]}" stroke-width=".75"/>`;
    for (let j = 0; j < 2; j++) {
      const d = rI + (rO - rI) * ((j + 0.7) / 2), major = i % 6 === 0;
      out += `<circle cx="${(cx + Math.cos(a) * d).toFixed(1)}" cy="${(cy + Math.sin(a) * d).toFixed(1)}" r="${major ? size * 0.017 : size * 0.0095}" fill="${major ? t["ss-rivet"] : t["ss-rivet-quiet"]}"/>`;
    }
  }
  return out +
    `<circle cx="${cx}" cy="${cy}" r="${rI}" fill="${t["ss-ground"]}" stroke="${t["ss-live"]}" stroke-width="1.2"/>` +
    `<circle cx="${cx}" cy="${cy}" r="${(rI * 0.38).toFixed(1)}" fill="${t["ss-live"]}"/>`;
}

function seam(y, x0, x1, t, pitch = 9) {
  let out = `<line x1="${x0}" y1="${y}" x2="${x1}" y2="${y}" stroke="${t["ss-seam"]}"/>`;
  for (let x = x0 + 8, i = 0; x <= x1 - 8; x += pitch, i++) {
    const major = i % 8 === 0;
    out += `<circle cx="${x.toFixed(1)}" cy="${y}" r="${major ? 2.6 : 1.75}" fill="${major ? t["ss-rivet"] : t["ss-rivet-quiet"]}"/>`;
  }
  return out;
}

const txt = (x, y, s, fill, size, opts = {}) =>
  outline(s, x, y, size, fill, {
    latin: opts.weight >= 600 ? FONTS.monoBold : opts.weight >= 500 ? FONTS.monoMedium : FONTS.mono,
    track: opts.track ?? 0,
    anchor: opts.anchor,
  });

function sheet(mode) {
  const t = MODES[mode];
  let g = `<rect width="${W}" height="${H}" fill="${t["ss-ground"]}"/>`;

  g += mark(88, 84, 104, t);
  g += txt(168, 76, "starseam", t["ss-text"], 40, { mono: true, weight: 600 });
  g += txt(170, 104, "STARS LIVE WHERE THE PLATES MEET", t["ss-text-3"], 11, { mono: true, track: 3.4 });
  g += txt(W - 40, 40, mode === "console" ? "夜勤 / CONSOLE" : "日勤 / REPORT", t["ss-text-3"], 11, { mono: true, track: 2.6, anchor: "end" });

  g += seam(152, 0, W, t);

  // instrument band
  const cells = [["ITEMS", "11", null], ["MODES", "2", null], ["SHADOWS", "0", null], ["STATUS", "LIVE", "ss-live"]];
  cells.forEach(([k, v, state], i) => {
    const x = (W / 4) * i + 40;
    if (i) g += `<line x1="${(W / 4) * i}" y1="152" x2="${(W / 4) * i}" y2="216" stroke="${t["ss-seam"]}"/>`;
    g += txt(x, 178, k, t["ss-text-3"], 9.5, { mono: true, track: 2 });
    if (state) g += `<circle cx="${x + 4}" cy="${198}" r="4" fill="${t[state]}"/>`;
    g += txt(state ? x + 16 : x, 203, v, state ? t[state] : t["ss-text"], 15, { mono: true, weight: 500 });
  });
  g += seam(216, 0, W, t);

  // plate specimens
  const plates = [
    ["CyPulse", "外部攻擊面管理", "ss-plate-3", "LIVE", "ss-live"],
    ["Merak", "零信任平台", "ss-plate-2", "SHIPPED", null],
    ["ASP", "AI-SOP-Protocol", "ss-plate-1", "v5", null],
  ];
  plates.forEach(([name, desc, fill, tag, state], i) => {
    const y = 258 + i * 74;
    g += `<rect x="40" y="${y}" width="${W - 80}" height="64" rx="2" fill="${t[fill]}" stroke="${t["ss-seam"]}"/>`;
    g += txt(60, y + 27, name, t["ss-text"], 15, { track: 1.2 });
    g += txt(60, y + 48, desc, t["ss-text-2"], 12.5);
    if (state) g += `<circle cx="${W - 118}" cy="${y + 23}" r="4" fill="${t[state]}"/>`;
    g += txt(W - 60, y + 27, tag, state ? t[state] : t["ss-text-3"], 10, { mono: true, track: 1.8, anchor: "end" });
  });

  // severity swatches
  const sev = [["瑠璃 LIVE", "ss-live"], ["黄土 WARN", "ss-warn"], ["緋 CRIT", "ss-crit"], ["銀鼠 RIVET", "ss-rivet"]];
  sev.forEach(([label, key], i) => {
    const x = 40 + i * 150;
    g += `<rect x="${x}" y="${H - 74}" width="26" height="26" rx="2" fill="${t[key]}"/>`;
    g += txt(x + 36, H - 56, label, t["ss-text-2"], 11, { mono: true, track: 1.2 });
  });

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="starseam specimen sheet — ${mode} mode"><title>starseam — ${mode}</title>${g}</svg>\n`;
}

mkdirSync(new URL("../docs/", import.meta.url), { recursive: true });
for (const mode of Object.keys(MODES)) {
  writeFileSync(new URL(`../docs/preview-${mode}.svg`, import.meta.url), sheet(mode));
  console.log(`docs/preview-${mode}.svg`);
}
