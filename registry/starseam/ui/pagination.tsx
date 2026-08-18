import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Page navigation as plain links. The current page is marked by a rivet and
 * full-strength text — selection is silver, never lapis (DECISIONS 10).
 */
function Pagination({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      data-slot="pagination"
      aria-label="pagination"
      className={cn("flex", className)}
      {...props}
    />
  );
}

function PaginationList({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="pagination-list"
      className={cn("flex flex-wrap items-center gap-[2px]", className)}
      {...props}
    />
  );
}

function PaginationItem(props: React.ComponentProps<"li">) {
  return <li data-slot="pagination-item" {...props} />;
}

export interface PaginationLinkProps extends React.ComponentProps<"a"> {
  isActive?: boolean;
}

function PaginationLink({ className, isActive, children, ...props }: PaginationLinkProps) {
  return (
    <a
      data-slot="pagination-link"
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "flex h-[30px] min-w-[30px] items-center justify-center gap-[5px] rounded-[var(--ss-radius)] px-[8px]",
        "font-[family-name:var(--ss-mono)] text-[12px] tabular-nums",
        "transition-colors duration-[var(--ss-dur)] ease-[var(--ss-ease)]",
        isActive
          ? "border border-[var(--ss-seam-strong)] bg-[var(--ss-plate-2)] text-[var(--ss-text)]"
          : "text-[var(--ss-text-3)] hover:text-[var(--ss-text-2)]",
        className
      )}
      {...props}
    >
      {isActive ? (
        <span aria-hidden="true" className="block size-[4px] rounded-full bg-[var(--ss-rivet)]" />
      ) : null}
      {children}
    </a>
  );
}

function PaginationEllipsis({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="pagination-ellipsis"
      aria-hidden="true"
      className={cn(
        "flex h-[30px] min-w-[30px] items-center justify-center font-[family-name:var(--ss-mono)] text-[12px] text-[var(--ss-text-3)]",
        className
      )}
      {...props}
    >
      …
    </span>
  );
}

export { Pagination, PaginationList, PaginationItem, PaginationLink, PaginationEllipsis };
