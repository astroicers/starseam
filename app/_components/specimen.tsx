import { Plate } from "@/components/ui/plate";
import { Seam } from "@/components/ui/seam";
import { CodeTag } from "@/components/ui/code-tag";
import { CopyButton } from "@/components/ui/copy-button";

const REGISTRY_BASE = "https://starseam.astroicers.link/r";

/**
 * Page-level scaffolding for the showcase, not a design-system component: it
 * arranges existing primitives around a rendered specimen. Each specimen sits
 * on its own flush plate; the install commands sit past a seam at the foot of
 * the plate. Long commands wrap instead of scrolling — a scrollbar inside
 * every plate would put a machine part on armour.
 */
export function Specimen({
  names,
  note,
  className,
  children,
}: Readonly<{
  /** Registry item names — one install command is printed per name. */
  names: string[];
  note?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}>) {
  return (
    <Plate elevation="flush" className={`min-w-0 ${className ?? ""}`}>
      <div className="flex flex-wrap gap-2">
        {names.map((n) => (
          <CodeTag key={n}>{n}</CodeTag>
        ))}
      </div>
      {note ? (
        <p className="mt-3 max-w-[560px] text-[15px] leading-[1.85] text-[var(--ss-text-2)]">
          {note}
        </p>
      ) : null}
      <div className="mt-5">{children}</div>
      <div className="mt-6">
        <Seam />
        {names.map((n) => {
          const cmd = `npx shadcn@latest add ${REGISTRY_BASE}/${n}.json`;
          return (
            <div key={n} className="flex items-start justify-between gap-4 py-[8px]">
              {/* The constant prefix recedes; the item name is the reading. */}
              <code className="min-w-0 select-all break-all font-[family-name:var(--ss-mono)] text-[13px] leading-[1.8]">
                <span className="text-[var(--ss-text-3)]">{`npx shadcn@latest add ${REGISTRY_BASE}/`}</span>
                <span className="text-[var(--ss-text)]">{n}</span>
                <span className="text-[var(--ss-text-3)]">.json</span>
              </code>
              <CopyButton value={cmd} className="mt-[3px] shrink-0" />
            </div>
          );
        })}
      </div>
    </Plate>
  );
}
