import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Rows are lames. The head and the body are two plates that meet, so that one
 * boundary carries rivets; the lines between body rows are scored hairlines,
 * because the rows are one continuous plate. DECISIONS 03.
 */
function Table({ className, ...props }: React.ComponentProps<"table">) {
  return (
    <div data-slot="table-wrapper" className="w-full overflow-x-auto">
      <table
        data-slot="table"
        className={cn("w-full border-collapse text-[13px]", className)}
        {...props}
      />
    </div>
  );
}

function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return (
    <thead
      data-slot="table-header"
      className={cn(
        "relative",
        // the riveted join between head and body
        "after:absolute after:inset-x-0 after:bottom-0 after:h-[var(--ss-rivet-size)]",
        "after:translate-y-1/2 after:content-['']",
        "after:bg-[radial-gradient(circle,var(--ss-rivet)_0_calc(var(--ss-rivet-size)/2),transparent_calc(var(--ss-rivet-size)/2+0.5px))]",
        "after:[background-size:var(--ss-rivet-pitch)_var(--ss-rivet-size)]",
        "after:bg-repeat-x after:pointer-events-none",
        className
      )}
      {...props}
    />
  );
}

function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return <tbody data-slot="table-body" className={className} {...props} />;
}

function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        "border-b border-[var(--ss-seam)] last:border-b-0",
        "transition-colors duration-[var(--ss-dur)] ease-[var(--ss-ease)]",
        "hover:bg-[var(--ss-plate-1)]",
        className
      )}
      {...props}
    />
  );
}

function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        "border-b border-[var(--ss-seam)] px-[calc(var(--ss-em)*0.75)] py-[calc(var(--ss-em)*0.6)]",
        "text-left font-[family-name:var(--ss-mono)] text-[10px] font-medium uppercase",
        "tracking-[var(--ss-track-label)] text-[var(--ss-text-3)]",
        className
      )}
      {...props}
    />
  );
}

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "px-[calc(var(--ss-em)*0.75)] py-[calc(var(--ss-em)*0.6)] text-[var(--ss-text-2)]",
        className
      )}
      {...props}
    />
  );
}

function TableCaption({ className, ...props }: React.ComponentProps<"caption">) {
  return (
    <caption
      data-slot="table-caption"
      className={cn("mt-[var(--ss-em)] text-[12px] text-[var(--ss-text-3)]", className)}
      {...props}
    />
  );
}

export { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, TableCaption };
