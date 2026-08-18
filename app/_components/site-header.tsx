import Link from "next/link";
import { Mark } from "@/components/ui/mark";
import { Seam } from "@/components/ui/seam";
import { ModeSwitch } from "@/components/ui/mode-switch";
import type { Dictionary } from "../_content/types";
import type { Locale } from "./home";

const LOCALES: { locale: Locale; href: string; label: string }[] = [
  { locale: "zh-Hant", href: "/", label: "繁" },
  { locale: "en", href: "/en", label: "EN" },
];

/**
 * Site chrome for the showcase. The language switch is plain links — each
 * locale is its own root layout, so switching is a full document load, which
 * is what changing the document language should be. The active locale is
 * marked by a rivet, never lapis (DECISIONS 10).
 */
export function SiteHeader({
  dict,
  locale,
}: Readonly<{ dict: Dictionary["header"]; locale: Locale }>) {
  const homeHref = locale === "en" ? "/en" : "/";
  return (
    <header>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        <Link href={homeHref} aria-label="starseam">
          <Mark size={44} plates={16} rings={1} majorEvery={4} />
        </Link>

        <nav
          className="order-3 flex w-full flex-wrap gap-x-5 gap-y-1 sm:order-none sm:w-auto"
          aria-label={dict.navAria}
        >
          {dict.nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="py-1 font-[family-name:var(--ss-mono)] text-[10px] uppercase tracking-[var(--ss-track-label)] text-[var(--ss-text-3)] transition-colors duration-[var(--ss-dur)] ease-[var(--ss-ease)] hover:text-[var(--ss-text-2)]"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://github.com/astroicers/starseam"
            className="py-1 font-[family-name:var(--ss-mono)] text-[10px] uppercase tracking-[var(--ss-track-label)] text-[var(--ss-text-3)] transition-colors duration-[var(--ss-dur)] ease-[var(--ss-ease)] hover:text-[var(--ss-text-2)]"
          >
            GitHub
          </a>
        </nav>

        <div className="ml-auto flex flex-wrap items-center justify-end gap-x-4 gap-y-2">
          <nav
            aria-label={dict.langAria}
            className="flex items-stretch divide-x divide-[var(--ss-seam)]"
          >
            {LOCALES.map((l) => {
              const active = l.locale === locale;
              return (
                <Link
                  key={l.locale}
                  href={l.href}
                  aria-current={active ? "page" : undefined}
                  className={`flex items-center gap-[6px] px-3 py-1 font-[family-name:var(--ss-mono)] text-[10px] uppercase tracking-[var(--ss-track-label)] transition-colors duration-[var(--ss-dur)] ease-[var(--ss-ease)] ${
                    active
                      ? "text-[var(--ss-text)]"
                      : "text-[var(--ss-text-3)] hover:text-[var(--ss-text-2)]"
                  }`}
                >
                  {/* The active locale is marked by a rivet, not a colour wash. */}
                  <span
                    aria-hidden="true"
                    className={`block size-[5px] rounded-full ${
                      active ? "bg-[var(--ss-rivet)]" : "bg-transparent"
                    }`}
                  />
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <ModeSwitch labels={dict.mode} aria-label={dict.modeAria} />
        </div>
      </div>
      {/* Navigation meets content — a legal home for a seam. DECISIONS 03. */}
      <div className="mt-4">
        <Seam />
      </div>
    </header>
  );
}
