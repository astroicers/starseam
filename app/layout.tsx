import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans_JP, Noto_Sans_TC } from "next/font/google";
import { MODE_SCRIPT } from "@/components/ui/mode-switch";
import "./globals.css";

const mono = IBM_Plex_Mono({
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
const sansTC = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-plex-tc",
});

const sansJP = IBM_Plex_Sans_JP({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-plex-jp",
});

export const metadata: Metadata = {
  title: "starseam — stars live where the plates meet",
  description:
    "星兜為型:板疊板、以星鉚之。A shadcn registry on a lacquer ground, with structural rivets and first-class Traditional Chinese typography.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-Hant" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: MODE_SCRIPT }} />
      </head>
      <body
        className={`${mono.variable} ${sansTC.variable} ${sansJP.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
