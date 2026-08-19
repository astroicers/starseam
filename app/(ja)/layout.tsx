import type { Metadata } from "next";
import { LayoutShell } from "../_components/layout-shell";
import { ja } from "../_content/ja";

export const metadata: Metadata = {
  metadataBase: new URL("https://starseam.astroicers.link"),
  title: ja.meta.title,
  description: ja.meta.description,
  alternates: {
    canonical: "/ja",
    languages: { "zh-Hant": "/", en: "/en", ja: "/ja", "x-default": "/" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <LayoutShell lang="ja">{children}</LayoutShell>;
}
