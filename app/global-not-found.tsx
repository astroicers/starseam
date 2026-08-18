import type { Metadata } from "next";
import Link from "next/link";
import { MODE_SCRIPT } from "@/components/ui/mode-switch";
import { Seam } from "@/components/ui/seam";
import { mono, sansTC, sansJP } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "404 — starseam",
};

/**
 * Served for every unmatched path. Carries its own <html>/<body> because each
 * locale owns its root layout and an unmatched path belongs to neither.
 */
export default function GlobalNotFound() {
  return (
    <html lang="zh-Hant" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: MODE_SCRIPT }} />
      </head>
      <body
        className={`${mono.variable} ${sansTC.variable} ${sansJP.variable} antialiased`}
      >
        <main className="mx-auto max-w-[880px] px-6 py-24">
          <p className="font-[family-name:var(--ss-mono)] text-[11px] uppercase tracking-[var(--ss-track-label)] text-[var(--ss-text-3)]">
            404
          </p>
          <h1 className="mt-4 text-[21px] tracking-[var(--ss-track-head)]">
            找不到這片甲板。
          </h1>
          <p className="mt-2 text-[13.5px] leading-[1.9] text-[var(--ss-text-2)]" lang="en">
            No plate at this address.
          </p>
          <div className="mt-10 max-w-[320px]">
            <Seam />
          </div>
          <p className="mt-6 flex gap-6 font-[family-name:var(--ss-mono)] text-[11px] uppercase tracking-[var(--ss-track-label)]">
            <Link href="/" className="text-[var(--ss-text-3)] transition-colors duration-[var(--ss-dur)] ease-[var(--ss-ease)] hover:text-[var(--ss-text-2)]">
              繁中
            </Link>
            <Link href="/en" className="text-[var(--ss-text-3)] transition-colors duration-[var(--ss-dur)] ease-[var(--ss-ease)] hover:text-[var(--ss-text-2)]" lang="en">
              English
            </Link>
          </p>
        </main>
      </body>
    </html>
  );
}
