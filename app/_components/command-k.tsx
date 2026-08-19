"use client";

import * as React from "react";
import { Kbd } from "@/components/ui/kbd";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/plate-dialog";
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/plate-command";

/**
 * Site chrome: the page's own command palette, eating the design system's
 * dog food. Ctrl/⌘+K opens a plate-dialog holding a plate-command; picking a
 * name jumps to that plate. Groups and items arrive as data.
 */
export function CommandK({
  groups,
  placeholder,
  empty,
  ariaLabel,
}: Readonly<{
  groups: { label: string; items: { id: string; label: string }[] }[];
  placeholder: string;
  empty: string;
  ariaLabel: string;
}>) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function jump(id: string) {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) {
      history.pushState(null, "", `#${id}`);
      el.scrollIntoView();
    }
  }

  return (
    <>
      <button
        type="button"
        aria-label={ariaLabel}
        onClick={() => setOpen(true)}
        className="hidden items-center gap-[5px] text-[var(--ss-text-3)] transition-colors duration-[var(--ss-dur)] ease-[var(--ss-ease)] hover:text-[var(--ss-text-2)] sm:inline-flex"
      >
        <Kbd>Ctrl</Kbd>
        <Kbd>K</Kbd>
      </button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="top-[18%] max-w-[520px] translate-y-0 overflow-hidden p-0">
          <DialogTitle className="sr-only">{ariaLabel}</DialogTitle>
          <Command className="border-0">
            <CommandInput placeholder={placeholder} autoFocus />
            <CommandList>
              <CommandEmpty>{empty}</CommandEmpty>
              {groups.map((g) => (
                <CommandGroup key={g.label} heading={g.label}>
                  {g.items.map((item) => (
                    <CommandItem
                      key={item.id}
                      value={item.label}
                      onSelect={() => jump(item.id)}
                    >
                      {item.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              ))}
            </CommandList>
          </Command>
        </DialogContent>
      </Dialog>
    </>
  );
}
