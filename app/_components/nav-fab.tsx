"use client";

import * as React from "react";
import Link from "next/link";
import { Mark } from "@/components/ui/mark";
import { PlateButton } from "@/components/ui/plate-button";
import { ModeSwitch } from "@/components/ui/mode-switch";
import { Seam } from "@/components/ui/seam";
import {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetBody,
  SheetTitle,
} from "@/components/ui/plate-sheet";
import type { Dictionary } from "../_content/types";
import type { Locale } from "./home";

const LOCALES: { locale: Locale; href: string; label: string }[] = [
  { locale: "zh-Hant", href: "/", label: "繁" },
  { locale: "en", href: "/en", label: "EN" },
  { locale: "ja", href: "/ja", label: "日" },
];

/**
 * Site chrome for small screens: a plate button in the thumb's corner —
 * hairline frame, plate fill, no floating shadow (DECISIONS 04) — opening a
 * bottom sheet with the sections, the languages, and the mode switch.
 */
export function NavFab({
  dict,
  locale,
}: Readonly<{ dict: Dictionary["header"]; locale: Locale }>) {
  return (
    <div className="fixed bottom-4 right-4 z-40 lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <PlateButton
            size="icon"
            aria-label={dict.navAria}
            className="size-[40px] bg-[var(--ss-plate-2)]"
          >
            <Mark size={22} plates={8} rings={1} majorEvery={2} />
          </PlateButton>
        </SheetTrigger>
        <SheetContent side="bottom">
          <SheetHeader>
            <SheetTitle>{dict.navAria}</SheetTitle>
          </SheetHeader>
          <SheetBody>
            <nav aria-label={dict.navAria} className="grid grid-cols-2 gap-x-6">
              {dict.nav.map((item) => (
                <SheetClose asChild key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="py-[9px] font-[family-name:var(--ss-mono)] text-[12px] uppercase tracking-[var(--ss-track-label)] text-[var(--ss-text-2)]"
                  >
                    {item.label}
                  </a>
                </SheetClose>
              ))}
            </nav>
            <div className="my-4">
              <Seam />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <nav aria-label={dict.langAria} className="flex items-center gap-5">
                {LOCALES.map((l) => (
                  <Link
                    key={l.locale}
                    href={l.href}
                    aria-current={l.locale === locale ? "page" : undefined}
                    className={`font-[family-name:var(--ss-mono)] text-[12px] uppercase tracking-[var(--ss-track-label)] ${
                      l.locale === locale
                        ? "text-[var(--ss-text)]"
                        : "text-[var(--ss-text-3)]"
                    }`}
                  >
                    {l.label}
                  </Link>
                ))}
              </nav>
              <ModeSwitch labels={dict.mode} aria-label={dict.modeAria} />
            </div>
          </SheetBody>
        </SheetContent>
      </Sheet>
    </div>
  );
}
