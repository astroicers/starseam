import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * A path through the structure. Each junction between two segments is a real
 * boundary, so the separator is a rivet — stars live where the plates meet
 * (DECISIONS 03). The current page is marked by tone, never by lapis
 * (DECISIONS 10).
 */
function Breadcrumb({ className, ...props }: React.ComponentProps<"nav">) {
  return <nav aria-label="breadcrumb" data-slot="breadcrumb" className={className} {...props} />;
}

function BreadcrumbList({ className, ...props }: React.ComponentProps<"ol">) {
  return (
    <ol
      data-slot="breadcrumb-list"
      className={cn(
        "flex flex-wrap items-center gap-x-[10px] gap-y-1",
        "font-[family-name:var(--ss-mono)] text-[12px] uppercase tracking-[0.08em]",
        className
      )}
      {...props}
    />
  );
}

function BreadcrumbItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-item"
      className={cn("inline-flex items-center gap-[10px]", className)}
      {...props}
    />
  );
}

function BreadcrumbLink({ className, ...props }: React.ComponentProps<"a">) {
  return (
    <a
      data-slot="breadcrumb-link"
      className={cn(
        "text-[var(--ss-text-3)] transition-colors duration-[var(--ss-dur)] ease-[var(--ss-ease)] hover:text-[var(--ss-text-2)]",
        className
      )}
      {...props}
    />
  );
}

function BreadcrumbPage({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-page"
      aria-current="page"
      className={cn("text-[var(--ss-text)]", className)}
      {...props}
    />
  );
}

/** The junction between two segments — a rivet, because the boundary is real. */
function BreadcrumbSeparator({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={cn("flex items-center", className)}
      {...props}
    >
      <span className="block size-[3.5px] rounded-full bg-[var(--ss-rivet-quiet)]" />
    </li>
  );
}

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
};
