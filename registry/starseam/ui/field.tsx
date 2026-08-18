"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Label } from "@/registry/starseam/ui/label";

export interface FieldProps extends React.ComponentProps<"div"> {
  label: string;
  /** Quiet guidance shown under the control. */
  hint?: string;
  /** Failure text. Its presence is what makes the field invalid. */
  error?: string;
}

/**
 * Wires a label, a control, its guidance and its failure text together.
 *
 * The control is passed as a child and the wiring — id, aria-describedby,
 * invalid — is injected onto it. A render prop would be the obvious API here,
 * but functions cannot cross the server/client boundary, so it would force
 * every page using a form to become a client component.
 *
 * The error is the only place a field takes colour, and it takes 緋 because a
 * failed field is a severity. DECISIONS 01. The text is always present
 * alongside the colour — colour is never the only cue.
 */
function Field({ label, hint, error, children, className, ...props }: FieldProps) {
  const id = React.useId();
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [errorId, hintId].filter(Boolean).join(" ") || undefined;
  const invalid = Boolean(error);

  const control = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return child;
    const own = child.props as Record<string, unknown>;
    return React.cloneElement(child as React.ReactElement<Record<string, unknown>>, {
      id: own.id ?? id,
      invalid: own.invalid ?? invalid,
      "aria-describedby": own["aria-describedby"] ?? describedBy,
    });
  });

  return (
    <div data-slot="field" className={cn("flex flex-col gap-[7px]", className)} {...props}>
      <Label htmlFor={id}>{label}</Label>
      {control}
      {error ? (
        <p id={errorId} className="text-[12px] text-[var(--ss-crit)]">
          {error}
        </p>
      ) : null}
      {hint ? (
        <p id={hintId} className="text-[12px] text-[var(--ss-text-3)]">
          {hint}
        </p>
      ) : null}
    </div>
  );
}

export { Field };
