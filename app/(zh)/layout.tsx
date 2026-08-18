import type { Metadata } from "next";
import { LayoutShell } from "../_components/layout-shell";
import { zh } from "../_content/zh";

export const metadata: Metadata = {
  metadataBase: new URL("https://starseam.astroicers.link"),
  title: zh.meta.title,
  description: zh.meta.description,
  alternates: {
    canonical: "/",
    languages: { "zh-Hant": "/", en: "/en", "x-default": "/" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <LayoutShell lang="zh-Hant">{children}</LayoutShell>;
}
