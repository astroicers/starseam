"use client";

import { PlateButton } from "@/components/ui/plate-button";
import { PlateToaster, toast } from "@/components/ui/plate-toast";

/**
 * Demo glue for the showcase, not a design-system component: two buttons that
 * fire toasts, plus the toaster mount. All copy arrives as data.
 */
export function ToastDemo({
  neutralButton,
  critButton,
  neutralTitle,
  neutralBody,
  critTitle,
  critBody,
}: Readonly<{
  neutralButton: string;
  critButton: string;
  neutralTitle: string;
  neutralBody: string;
  critTitle: string;
  critBody: string;
}>) {
  return (
    <div className="flex flex-wrap gap-3">
      <PlateToaster />
      <PlateButton onClick={() => toast(neutralTitle, { description: neutralBody })}>
        {neutralButton}
      </PlateButton>
      <PlateButton onClick={() => toast.error(critTitle, { description: critBody })}>
        {critButton}
      </PlateButton>
    </div>
  );
}
