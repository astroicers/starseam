import type { Metadata } from "next";
import { LayoutShell } from "../_components/layout-shell";
import { en } from "../_content/en";

export const metadata: Metadata = {
  metadataBase: new URL("https://starseam.astroicers.link"),
  title: en.meta.title,
  description: en.meta.description,
  alternates: {
    canonical: "/en",
    languages: { "zh-Hant": "/", en: "/en", "x-default": "/" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <LayoutShell lang="en">{children}</LayoutShell>;
}
