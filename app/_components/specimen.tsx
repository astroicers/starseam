import { CodeTag } from "@/components/ui/code-tag";

const REGISTRY_BASE = "https://starseam.astroicers.link/r";

/**
 * Page-level scaffolding for the showcase, not a design-system component: it
 * only arranges existing primitives (CodeTag, text) around a rendered
 * specimen and prints the install command for each registry item involved.
 */
export function Specimen({
  names,
  note,
  children,
}: Readonly<{
  /** Registry item names — one install command is printed per name. */
  names: string[];
  note?: React.ReactNode;
  children: React.ReactNode;
}>) {
  return (
    <div className="mt-10">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        {names.map((n) => (
          <CodeTag key={n}>{n}</CodeTag>
        ))}
        {note ? (
          <span className="text-[12.5px] leading-[1.75] text-[var(--ss-text-2)]">
            {note}
          </span>
        ) : null}
      </div>
      <div className="mt-4">{children}</div>
      <div className="mt-3 overflow-x-auto">
        {names.map((n) => (
          <code
            key={n}
            className="block select-all whitespace-pre font-[family-name:var(--ss-mono)] text-[11px] leading-[1.9] text-[var(--ss-text-3)]"
          >
            {`npx shadcn@latest add ${REGISTRY_BASE}/${n}.json`}
          </code>
        ))}
      </div>
    </div>
  );
}
