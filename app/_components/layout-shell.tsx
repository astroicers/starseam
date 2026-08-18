import { MODE_SCRIPT } from "@/components/ui/mode-switch";
import { mono, sansTC, sansJP, sansEN } from "../fonts";
import "../globals.css";

/**
 * The shared <html>/<body> shell for both root layouts (zh at /, en at /en).
 * Each locale is its own route group with its own root layout, so language
 * switching is a plain link and a full document load — which is what changing
 * the document language should be.
 */
export function LayoutShell({
  lang,
  children,
}: Readonly<{ lang: "zh-Hant" | "en"; children: React.ReactNode }>) {
  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: MODE_SCRIPT }} />
      </head>
      <body
        className={`${mono.variable} ${sansTC.variable} ${sansJP.variable} ${sansEN.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
