import * as React from "react";
import { Plate } from "@/components/ui/plate";
import { Seam } from "@/components/ui/seam";
import { Lames } from "@/components/ui/lames";
import { Mark } from "@/components/ui/mark";
import { Label } from "@/components/ui/label";
import { Value } from "@/components/ui/value";
import { StatusDot } from "@/components/ui/status-dot";
import { StatBand } from "@/components/ui/stat-band";
import { CodeTag } from "@/components/ui/code-tag";
import { PlateButton } from "@/components/ui/plate-button";
import { ModeSwitch } from "@/components/ui/mode-switch";
import { PlateInput } from "@/components/ui/plate-input";
import { PlateTextarea } from "@/components/ui/plate-textarea";
import { Field } from "@/components/ui/field";
import { PlateCheckbox } from "@/components/ui/plate-checkbox";
import { PlateSwitch } from "@/components/ui/plate-switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/plate-select";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogBody,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/plate-dialog";
import {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetBody,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/plate-sheet";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/plate-dropdown-menu";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/plate-tabs";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/plate-table";
import { CopyButton } from "@/components/ui/copy-button";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { Kbd } from "@/components/ui/kbd";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Pagination,
  PaginationList,
  PaginationItem,
  PaginationLink,
  PaginationEllipsis,
} from "@/components/ui/pagination";
import { PlateRadioGroup, PlateRadioItem } from "@/components/ui/plate-radio-group";
import { PlateSlider } from "@/components/ui/plate-slider";
import { PlateToggle } from "@/components/ui/plate-toggle";
import {
  PlateAccordion,
  PlateAccordionItem,
  PlateAccordionTrigger,
  PlateAccordionContent,
} from "@/components/ui/plate-accordion";
import {
  PlateCollapsible,
  PlateCollapsibleTrigger,
  PlateCollapsibleContent,
} from "@/components/ui/plate-collapsible";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/plate-tooltip";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/plate-popover";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/plate-hover-card";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from "@/components/ui/plate-alert-dialog";
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
} from "@/components/ui/plate-context-menu";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
} from "@/components/ui/plate-menubar";
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/plate-command";
import { PlateCalendar } from "@/components/ui/plate-calendar";
import { PlateDatePicker } from "@/components/ui/plate-date-picker";
import { PlateCombobox } from "@/components/ui/plate-combobox";
import {
  PlateInputOTP,
  PlateInputOTPGroup,
  PlateInputOTPSlot,
  PlateInputOTPSeparator,
} from "@/components/ui/plate-input-otp";
import { ToastDemo } from "./toast-demo";
import { Specimen } from "./specimen";
import { SiteHeader } from "./site-header";
import type { Dictionary, SectionHead } from "../_content/types";
import registryIndex from "../../registry.json";

/**
 * Swatch metadata lives here; the hex values come from registry.json's theme
 * cssVars — the single source the audit script and the shipped theme share.
 */
const PALETTE_TOKENS = [
  { key: "ss-ground", role: "ground", name: "黒漆" },
  { key: "ss-plate-1", role: "plate1", name: null },
  { key: "ss-plate-2", role: "plate2", name: null },
  { key: "ss-plate-3", role: "plate3", name: null },
  { key: "ss-seam", role: "seam", name: null },
  { key: "ss-seam-strong", role: "seamStrong", name: null },
  { key: "ss-rivet", role: "rivet", name: "銀鼠" },
  { key: "ss-rivet-quiet", role: "rivetQuiet", name: null },
  { key: "ss-text", role: "text", name: null },
  { key: "ss-text-2", role: "text2", name: null },
  { key: "ss-text-3", role: "text3", name: null },
  { key: "ss-live", role: "live", name: "瑠璃" },
  { key: "ss-warn", role: "warn", name: "黄土" },
  { key: "ss-crit", role: "crit", name: "緋" },
] as const;

function themeHex(): { light: Record<string, string>; dark: Record<string, string> } {
  const theme = registryIndex.items.find((i) => i.name === "theme");
  const cssVars = (theme as { cssVars?: { light?: Record<string, string>; dark?: Record<string, string> } })?.cssVars;
  return { light: cssVars?.light ?? {}, dark: cssVars?.dark ?? {} };
}

export type Locale = "zh-Hant" | "en";

function SectionHeading({ head, id }: { head: SectionHead; id: string }) {
  return (
    <>
      <Label id={`${id}-label`}>{head.label}</Label>
      <h2 className="mt-3 text-[24px] tracking-[var(--ss-track-head)]">{head.title}</h2>
      {head.intro ? (
        <p className="mt-3 max-w-[680px] text-[15.5px] leading-[1.9] text-[var(--ss-text-2)]">
          {head.intro}
        </p>
      ) : null}
    </>
  );
}

export function Home({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const d = dict;
  return (
    <main className="mx-auto max-w-[980px] px-6 py-10">
      <SiteHeader dict={d.header} locale={locale} />

      <h1 className="mt-12 font-[family-name:var(--ss-mono)] text-[clamp(30px,6vw,52px)] font-semibold leading-none tracking-[0.005em]">
        starseam
      </h1>
      <p className="mt-4 max-w-[760px] text-[17px] leading-[1.9] text-[var(--ss-text-2)]">
        {d.hero.tagline}
      </p>

      <div className="mt-10">
        <Seam />
        <StatBand stats={d.stats} />
        <Seam />
      </div>

      {/* ---------------------------------------------------------------- */}
      <section id="readings" className="mt-20 scroll-mt-8">
        <SectionHeading id="readings" head={d.readings} />
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {d.readings.cards.map((r) => (
            <Plate key={r.en}>
              <Label>{r.en}</Label>
              <h3 className="mt-2 text-[16px] tracking-[0.06em]">{r.title}</h3>
              <p className="mt-2 text-[14px] leading-[1.8] text-[var(--ss-text-2)]">
                {r.body}
              </p>
            </Plate>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      <section id="palette" className="mt-20 scroll-mt-8">
        <SectionHeading id="palette" head={d.palette} />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PALETTE_TOKENS.map((t) => {
            const hex = themeHex();
            return (
              <Plate key={t.key} elevation="raised">
                <div
                  className="h-12 rounded-[var(--ss-radius)] border border-[var(--ss-seam)]"
                  style={{ background: `var(--${t.key})` }}
                />
                <div className="mt-3 flex items-baseline justify-between gap-2">
                  <code className="font-[family-name:var(--ss-mono)] text-[12px] text-[var(--ss-text)]">
                    --{t.key}
                  </code>
                  {t.name ? (
                    <span lang="ja" className="text-[13px] text-[var(--ss-text-2)]">
                      {t.name}
                    </span>
                  ) : null}
                </div>
                <p className="mt-1 text-[13px] leading-[1.7] text-[var(--ss-text-2)]">
                  {d.palette.roles[t.role]}
                </p>
                <p className="mt-2 font-[family-name:var(--ss-mono)] text-[11px] uppercase tracking-[0.06em] text-[var(--ss-text-3)]">
                  {d.palette.consoleLabel} {hex.dark[t.key]} · {d.palette.reportLabel}{" "}
                  {hex.light[t.key]}
                </p>
              </Plate>
            );
          })}
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      <section id="surfaces" className="mt-20 scroll-mt-8">
        <SectionHeading id="surfaces" head={d.surfaces} />
        <div className="mt-8 space-y-4">
        <Specimen names={["plate"]} note={d.surfaces.plate.note}>
          <div className="grid gap-3 sm:grid-cols-3">
            {(
              [
                ["flush", d.surfaces.plate.flush],
                ["raised", d.surfaces.plate.raised],
                ["float", d.surfaces.plate.float],
              ] as const
            ).map(([elevation, caption]) => (
              <Plate key={elevation} elevation={elevation}>
                <Label>{elevation.toUpperCase()}</Label>
                <p className="mt-2 text-[13.5px] text-[var(--ss-text-2)]">{caption}</p>
              </Plate>
            ))}
          </div>
        </Specimen>

        <Specimen names={["lames"]} note={d.surfaces.lames.note}>
          <Lames>
            <Plate elevation="float">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-[16px] tracking-[0.08em]">{d.surfaces.lames.cyTitle}</h3>
                <StatusDot state="live" label={d.surfaces.lames.cyLive} />
              </div>
              <p className="mt-2 text-[13.5px] text-[var(--ss-text-2)]">
                {d.surfaces.lames.cyBody}
              </p>
              <div className="mt-3 flex gap-6">
                <span>
                  <Label>{d.surfaces.lames.assetsLabel}</Label>
                  <br />
                  <Value className="text-[15px]">1,284</Value>
                </span>
                <span>
                  <Label>{d.surfaces.lames.exposedLabel}</Label>
                  <br />
                  <Value state="warn" className="text-[15px]">
                    17
                  </Value>
                </span>
              </div>
            </Plate>
            <Plate elevation="raised">
              <h3 className="text-[16px] tracking-[0.08em]">{d.surfaces.lames.merakTitle}</h3>
              <p className="mt-2 text-[13.5px] text-[var(--ss-text-2)]">
                {d.surfaces.lames.merakBody}
              </p>
            </Plate>
            <Plate elevation="flush">
              <h3 className="text-[16px] tracking-[0.08em]">{d.surfaces.lames.aspTitle}</h3>
              <p className="mt-2 text-[13.5px] text-[var(--ss-text-2)]">
                {d.surfaces.lames.aspBody}
              </p>
            </Plate>
          </Lames>
        </Specimen>

        <Specimen names={["seam"]} note={d.surfaces.seam.note}>
          <Plate elevation="flush">
            {d.surfaces.seam.rows.map((row, i) => (
              <div key={row}>
                {i > 0 ? <Seam /> : null}
                <p className="py-3 text-[14px] text-[var(--ss-text-2)]">{row}</p>
              </div>
            ))}
          </Plate>
        </Specimen>

        <div className="grid items-start gap-4 sm:grid-cols-2">
        <Specimen names={["alert"]} note={d.surfaces.alert.note}>
          <div className="space-y-3">
            <Alert>
              <AlertTitle>{d.surfaces.alert.title}</AlertTitle>
              <AlertDescription>{d.surfaces.alert.body}</AlertDescription>
            </Alert>
            <Alert state="crit">
              <AlertTitle>{d.surfaces.alert.critTitle}</AlertTitle>
              <AlertDescription>{d.surfaces.alert.critBody}</AlertDescription>
            </Alert>
          </div>
        </Specimen>

        <Specimen names={["skeleton"]} note={d.surfaces.skeleton.note}>
          <div className="flex items-start gap-4">
            <Skeleton className="size-[36px]" />
            <div className="flex-1 space-y-[10px]">
              <Skeleton className="h-[12px] w-3/5" />
              <Skeleton className="h-[12px] w-full" />
              <Skeleton className="h-[12px] w-4/5" />
            </div>
          </div>
        </Specimen>
        </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      <section id="instruments" className="mt-20 scroll-mt-8">
        <SectionHeading id="instruments" head={d.instruments} />
        <div className="mt-8 space-y-4">
        <Specimen names={["mark"]} note={d.instruments.mark.note}>
          <div className="flex flex-wrap items-end gap-8">
            <Mark size={116} plates={24} rings={2} majorEvery={6} />
            <Mark size={84} plates={12} rings={1} majorEvery={3} />
            <Mark size={56} plates={8} rings={1} majorEvery={2} />
          </div>
        </Specimen>

        <div className="grid items-start gap-4 sm:grid-cols-2">
        <Specimen names={["label"]} note={d.instruments.labelSpec.note}>
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {d.instruments.labelSpec.samples.map((s) => (
              <Label key={s}>{s}</Label>
            ))}
          </div>
        </Specimen>

        <Specimen names={["value"]} note={d.instruments.value.note}>
          <div className="flex flex-wrap gap-10">
            {d.instruments.value.rows.map((row) => (
              <span key={row.label}>
                <Label>{row.label}</Label>
                <br />
                <Value state={row.state} className="text-[19px]">
                  {row.value}
                </Value>
              </span>
            ))}
          </div>
        </Specimen>

        <Specimen names={["status-dot"]} note={d.instruments.statusDot.note}>
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {d.instruments.statusDot.rows.map((row) => (
              <StatusDot key={row.state} state={row.state} label={row.label} />
            ))}
          </div>
        </Specimen>

        <Specimen names={["code-tag"]} note={d.instruments.codeTag.note}>
          <div className="flex flex-wrap gap-3">
            {d.instruments.codeTag.samples.map((s) => (
              <CodeTag key={s}>{s}</CodeTag>
            ))}
          </div>
        </Specimen>

        <Specimen names={["mode-switch"]} note={d.instruments.modeSwitch.note}>
          <ModeSwitch />
        </Specimen>

        <Specimen names={["badge"]} note={d.instruments.badge.note}>
          <div className="flex flex-wrap gap-3">
            {d.instruments.badge.rows.map((row) => (
              <Badge key={row.state} state={row.state}>
                {row.label}
              </Badge>
            ))}
          </div>
        </Specimen>

        <Specimen names={["kbd"]} note={d.instruments.kbd.note}>
          <div className="flex flex-wrap items-center gap-2 text-[13px] text-[var(--ss-text-3)]">
            <Kbd>Ctrl</Kbd>+<Kbd>K</Kbd>
            <span className="mx-2" />
            <Kbd>Esc</Kbd>
            <span className="mx-2" />
            <Kbd>↑</Kbd>
            <Kbd>↓</Kbd>
          </div>
        </Specimen>

        <Specimen names={["avatar"]} note={d.instruments.avatar.note}>
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="/mark-small-console.svg" alt="" />
              <AvatarFallback>SS</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>SOC</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>AZ</AvatarFallback>
            </Avatar>
          </div>
        </Specimen>

        <Specimen names={["progress"]} note={d.instruments.progress.note}>
          <div className="max-w-[320px]">
            <Label>{d.instruments.progress.label}</Label>
            <Progress value={64} className="mt-2" />
          </div>
        </Specimen>
        </div>

        <Specimen names={["stat-band"]} note={d.instruments.statBand.note}>
          <div>
            <Seam />
            <StatBand stats={d.instruments.statBand.stats} />
            <Seam />
          </div>
        </Specimen>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      <section id="controls" className="mt-20 scroll-mt-8">
        <SectionHeading id="controls" head={d.controls} />
        <div className="mt-8 space-y-4">
        <div className="grid items-start gap-4 sm:grid-cols-2">
        <Specimen names={["plate-button"]} note={d.controls.button.note}>
          <div className="flex flex-wrap items-center gap-3">
            <PlateButton variant="live">{d.controls.button.live}</PlateButton>
            <PlateButton>{d.controls.button.quiet}</PlateButton>
            <PlateButton disabled>{d.controls.button.disabled}</PlateButton>
          </div>
        </Specimen>

        <Specimen names={["plate-checkbox", "plate-switch"]} note={d.controls.toggles.note}>
          <div className="flex flex-wrap items-center gap-[calc(var(--ss-em)*1.5)]">
            <label className="flex items-center gap-[9px] text-[14px] text-[var(--ss-text-2)]">
              <PlateCheckbox defaultChecked />
              {d.controls.toggles.checkbox}
            </label>
            <label className="flex items-center gap-[9px] text-[14px] text-[var(--ss-text-2)] opacity-60">
              <PlateCheckbox disabled />
              {d.controls.toggles.checkboxLocked}
            </label>
            <label className="flex items-center gap-[9px] text-[14px] text-[var(--ss-text-2)]">
              <PlateSwitch defaultChecked />
              {d.controls.toggles.switch}
            </label>
          </div>
        </Specimen>

        <Specimen names={["copy-button"]} note={d.controls.copy.note} className="sm:col-span-2">
          <div className="flex items-center gap-4">
            <code className="font-[family-name:var(--ss-mono)] text-[13px] text-[var(--ss-text-2)]">
              {d.controls.copy.sample}
            </code>
            <CopyButton value={d.controls.copy.sample} />
          </div>
        </Specimen>

        <Specimen names={["plate-radio-group"]} note={d.controls.radio.note}>
          <div>
            <Label>{d.controls.radio.legend}</Label>
            <PlateRadioGroup defaultValue={d.controls.radio.options[1].value} className="mt-3">
              {d.controls.radio.options.map((o) => (
                <label
                  key={o.value}
                  className="flex items-center gap-[9px] text-[14px] text-[var(--ss-text-2)]"
                >
                  <PlateRadioItem value={o.value} />
                  {o.label}
                </label>
              ))}
            </PlateRadioGroup>
          </div>
        </Specimen>

        <Specimen names={["plate-slider"]} note={d.controls.slider.note}>
          <div>
            <Label>{d.controls.slider.label}</Label>
            <PlateSlider defaultValue={[40]} max={100} step={5} className="mt-4 max-w-[300px]" />
          </div>
        </Specimen>

        <Specimen names={["plate-toggle"]} note={d.controls.toggle.note}>
          <PlateToggle defaultPressed>{d.controls.toggle.label}</PlateToggle>
        </Specimen>

        <Specimen names={["plate-combobox"]} note={d.controls.combobox.note}>
          <div className="max-w-[280px]">
            <Label>{d.controls.combobox.label}</Label>
            <div className="mt-2">
              <PlateCombobox
                options={d.controls.combobox.options}
                placeholder={d.controls.combobox.placeholder}
                searchPlaceholder={d.controls.combobox.searchPlaceholder}
                emptyMessage={d.controls.combobox.empty}
              />
            </div>
          </div>
        </Specimen>

        <Specimen
          names={["plate-calendar", "plate-date-picker"]}
          note={d.controls.datePicker.note}
          className="sm:col-span-2"
        >
          <div className="flex flex-wrap items-start gap-8">
            <PlateCalendar mode="single" />
            <div className="max-w-[220px]">
              <Label>{d.controls.datePicker.label}</Label>
              <div className="mt-2">
                <PlateDatePicker />
              </div>
            </div>
          </div>
        </Specimen>

        <Specimen names={["plate-input-otp"]} note={d.controls.otp.note}>
          <div>
            <Label>{d.controls.otp.label}</Label>
            <div className="mt-3">
              <PlateInputOTP maxLength={6}>
                <PlateInputOTPGroup>
                  <PlateInputOTPSlot index={0} />
                  <PlateInputOTPSlot index={1} />
                  <PlateInputOTPSlot index={2} />
                </PlateInputOTPGroup>
                <PlateInputOTPSeparator />
                <PlateInputOTPGroup>
                  <PlateInputOTPSlot index={3} />
                  <PlateInputOTPSlot index={4} />
                  <PlateInputOTPSlot index={5} />
                </PlateInputOTPGroup>
              </PlateInputOTP>
            </div>
          </div>
        </Specimen>
        </div>

        <Specimen
          names={["field", "plate-input", "plate-select", "plate-textarea"]}
          note={d.controls.scenario.note}
        >
          <div className="grid gap-[var(--ss-em)] sm:grid-cols-2">
            <Field label={d.controls.scenario.domainLabel} hint={d.controls.scenario.domainHint}>
              <PlateInput placeholder={d.controls.scenario.domainPlaceholder} />
            </Field>
            <Field label={d.controls.scenario.profileLabel}>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder={d.controls.scenario.profilePlaceholder} />
                </SelectTrigger>
                <SelectContent>
                  {d.controls.scenario.profiles.map((p) => (
                    <SelectItem key={p.value} value={p.value}>
                      {p.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
            <Field
              label={d.controls.scenario.notifyLabel}
              error={d.controls.scenario.notifyError}
              className="sm:col-span-2"
            >
              <PlateInput defaultValue="soc@" />
            </Field>
            <Field label={d.controls.scenario.noteLabel} className="sm:col-span-2">
              <PlateTextarea placeholder={d.controls.scenario.notePlaceholder} />
            </Field>
          </div>
        </Specimen>

        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      <section id="overlays" className="mt-20 scroll-mt-8">
        <SectionHeading id="overlays" head={d.overlays} />
        <div className="mt-8 grid items-start gap-4 lg:grid-cols-3">
        <Specimen names={["plate-dialog"]} note={d.overlays.dialog.note}>
          <Dialog>
            <DialogTrigger asChild>
              <PlateButton>{d.overlays.dialog.trigger}</PlateButton>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{d.overlays.dialog.title}</DialogTitle>
                <DialogDescription>{d.overlays.dialog.description}</DialogDescription>
              </DialogHeader>
              <DialogBody>{d.overlays.dialog.body}</DialogBody>
              <DialogFooter>
                <DialogClose asChild>
                  <PlateButton>{d.overlays.dialog.cancel}</PlateButton>
                </DialogClose>
                <DialogClose asChild>
                  <PlateButton>{d.overlays.dialog.confirm}</PlateButton>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </Specimen>

        <Specimen names={["plate-sheet"]} note={d.overlays.sheet.note}>
          <Sheet>
            <SheetTrigger asChild>
              <PlateButton>{d.overlays.sheet.trigger}</PlateButton>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>{d.overlays.sheet.title}</SheetTitle>
                <SheetDescription>{d.overlays.sheet.description}</SheetDescription>
              </SheetHeader>
              <SheetBody>
                <p>{d.overlays.sheet.body}</p>
                <div className="mt-[var(--ss-em)]">
                  <SheetClose asChild>
                    <PlateButton>{d.overlays.sheet.close}</PlateButton>
                  </SheetClose>
                </div>
              </SheetBody>
            </SheetContent>
          </Sheet>
        </Specimen>

        <Specimen names={["plate-dropdown-menu"]} note={d.overlays.dropdown.note}>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <PlateButton>{d.overlays.dropdown.trigger}</PlateButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuLabel>{d.overlays.dropdown.groupLabel}</DropdownMenuLabel>
              <DropdownMenuItem>{d.overlays.dropdown.run}</DropdownMenuItem>
              <DropdownMenuItem>{d.overlays.dropdown.exportReport}</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem destructive>{d.overlays.dropdown.destructive}</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </Specimen>

        <Specimen names={["plate-alert-dialog"]} note={d.overlays.alertDialog.note}>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <PlateButton>{d.overlays.alertDialog.trigger}</PlateButton>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>{d.overlays.alertDialog.title}</AlertDialogTitle>
                <AlertDialogDescription>{d.overlays.alertDialog.description}</AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogBody>{d.overlays.alertDialog.body}</AlertDialogBody>
              <AlertDialogFooter>
                <AlertDialogCancel asChild>
                  <PlateButton>{d.overlays.alertDialog.cancel}</PlateButton>
                </AlertDialogCancel>
                <AlertDialogAction asChild>
                  <PlateButton className="border-[var(--ss-crit)] text-[var(--ss-crit)]">
                    {d.overlays.alertDialog.confirm}
                  </PlateButton>
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </Specimen>

        <Specimen names={["plate-popover"]} note={d.overlays.popover.note}>
          <Popover>
            <PopoverTrigger asChild>
              <PlateButton>{d.overlays.popover.trigger}</PlateButton>
            </PopoverTrigger>
            <PopoverContent>
              <Label>{d.overlays.popover.title}</Label>
              <p className="mt-2 text-[13.5px] leading-[1.8] text-[var(--ss-text-2)]">
                {d.overlays.popover.body}
              </p>
            </PopoverContent>
          </Popover>
        </Specimen>

        <Specimen names={["plate-tooltip"]} note={d.overlays.tooltip.note}>
          <TooltipProvider delayDuration={200}>
            <Tooltip>
              <TooltipTrigger asChild>
                <PlateButton>{d.overlays.tooltip.trigger}</PlateButton>
              </TooltipTrigger>
              <TooltipContent>{d.overlays.tooltip.tip}</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </Specimen>

        <Specimen names={["plate-hover-card"]} note={d.overlays.hoverCard.note}>
          <HoverCard openDelay={200}>
            <HoverCardTrigger asChild>
              <a
                href="https://github.com/astroicers"
                className="font-[family-name:var(--ss-mono)] text-[13px] text-[var(--ss-text-2)] underline underline-offset-4 hover:text-[var(--ss-text)]"
              >
                {d.overlays.hoverCard.trigger}
              </a>
            </HoverCardTrigger>
            <HoverCardContent>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback>AZ</AvatarFallback>
                </Avatar>
                <span className="font-[family-name:var(--ss-mono)] text-[13px] text-[var(--ss-text)]">
                  {d.overlays.hoverCard.title}
                </span>
              </div>
              <p className="mt-3 text-[13px] leading-[1.8] text-[var(--ss-text-2)]">
                {d.overlays.hoverCard.body}
              </p>
            </HoverCardContent>
          </HoverCard>
        </Specimen>

        <Specimen names={["plate-context-menu"]} note={d.overlays.contextMenu.note}>
          <ContextMenu>
            <ContextMenuTrigger asChild>
              <div className="flex h-[90px] items-center justify-center rounded-[var(--ss-radius)] border border-dashed border-[var(--ss-seam-strong)] font-[family-name:var(--ss-mono)] text-[11px] uppercase tracking-[var(--ss-track-label)] text-[var(--ss-text-3)]">
                {d.overlays.contextMenu.area}
              </div>
            </ContextMenuTrigger>
            <ContextMenuContent>
              <ContextMenuLabel>{d.overlays.contextMenu.groupLabel}</ContextMenuLabel>
              <ContextMenuItem>{d.overlays.contextMenu.run}</ContextMenuItem>
              <ContextMenuItem>{d.overlays.contextMenu.exportReport}</ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem destructive>{d.overlays.contextMenu.destructive}</ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        </Specimen>

        <Specimen names={["plate-menubar"]} note={d.overlays.menubar.note}>
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>{d.overlays.menubar.scanMenu}</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>{d.overlays.menubar.run}</MenubarItem>
                <MenubarItem>{d.overlays.menubar.exportReport}</MenubarItem>
                <MenubarSeparator />
                <MenubarItem destructive>{d.overlays.menubar.destructive}</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>{d.overlays.menubar.viewMenu}</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>{d.overlays.menubar.modeConsole}</MenubarItem>
                <MenubarItem>{d.overlays.menubar.modeReport}</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </Specimen>

        <Specimen
          names={["plate-command"]}
          note={d.overlays.command.note}
          className="lg:col-span-2"
        >
          <Command className="max-w-[420px]">
            <CommandInput placeholder={d.overlays.command.inputPlaceholder} />
            <CommandList>
              <CommandEmpty>{d.overlays.command.empty}</CommandEmpty>
              <CommandGroup heading={d.overlays.command.groupLabel}>
                {d.overlays.command.items.map((item) => (
                  <CommandItem key={item}>{item}</CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </Specimen>

        <Specimen names={["plate-toast"]} note={d.overlays.toast.note}>
          <ToastDemo
            neutralButton={d.overlays.toast.neutralButton}
            critButton={d.overlays.toast.critButton}
            neutralTitle={d.overlays.toast.neutralTitle}
            neutralBody={d.overlays.toast.neutralBody}
            critTitle={d.overlays.toast.critTitle}
            critBody={d.overlays.toast.critBody}
          />
        </Specimen>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      <section id="structure" className="mt-20 scroll-mt-8">
        <SectionHeading id="structure" head={d.structure} />
        <div className="mt-8 space-y-4">
        <Specimen names={["plate-tabs", "plate-table"]} note={d.structure.tabs.note}>
          <Tabs defaultValue="assets">
            <TabsList>
              <TabsTrigger value="assets">{d.structure.tabs.assets}</TabsTrigger>
              <TabsTrigger value="findings">{d.structure.tabs.findings}</TabsTrigger>
              <TabsTrigger value="history">{d.structure.tabs.history}</TabsTrigger>
            </TabsList>
            <TabsContent value="assets">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>{d.structure.tabs.host}</TableHead>
                    <TableHead>{d.structure.tabs.service}</TableHead>
                    <TableHead>{d.structure.tabs.exposure}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {d.structure.tabs.rows.map((row) => (
                    <TableRow key={row.host}>
                      <TableCell>{row.host}</TableCell>
                      <TableCell>{row.service}</TableCell>
                      <TableCell>
                        <StatusDot state={row.state} label={row.label} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
            <TabsContent value="findings">{d.structure.tabs.findingsBody}</TabsContent>
            <TabsContent value="history">{d.structure.tabs.historyBody}</TabsContent>
          </Tabs>
        </Specimen>

        <Specimen names={["plate-accordion"]} note={d.structure.accordion.note}>
          <PlateAccordion type="single" collapsible className="max-w-[560px]">
            {d.structure.accordion.items.map((item, i) => (
              <PlateAccordionItem key={item.title} value={`item-${i}`}>
                <PlateAccordionTrigger>{item.title}</PlateAccordionTrigger>
                <PlateAccordionContent>{item.body}</PlateAccordionContent>
              </PlateAccordionItem>
            ))}
          </PlateAccordion>
        </Specimen>

        <div className="grid items-start gap-4 sm:grid-cols-2">
        <Specimen names={["breadcrumb"]} note={d.structure.breadcrumb.note}>
          <Breadcrumb>
            <BreadcrumbList>
              {d.structure.breadcrumb.segments.map((seg) => (
                <React.Fragment key={seg}>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#structure">{seg}</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                </React.Fragment>
              ))}
              <BreadcrumbItem>
                <BreadcrumbPage>{d.structure.breadcrumb.current}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </Specimen>

        <Specimen names={["pagination"]} note={d.structure.pagination.note}>
          <Pagination>
            <PaginationList>
              <PaginationItem>
                <PaginationLink href="#structure">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#structure" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#structure">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#structure">12</PaginationLink>
              </PaginationItem>
            </PaginationList>
          </Pagination>
        </Specimen>

        <Specimen names={["plate-collapsible"]} note={d.structure.collapsible.note}>
          <PlateCollapsible>
            <PlateCollapsibleTrigger>{d.structure.collapsible.trigger}</PlateCollapsibleTrigger>
            <PlateCollapsibleContent>
              <code className="font-[family-name:var(--ss-mono)] text-[12px] leading-[1.9] text-[var(--ss-text-2)]">
                {d.structure.collapsible.body}
              </code>
            </PlateCollapsibleContent>
          </PlateCollapsible>
        </Specimen>

        <Specimen names={["scroll-area"]} note={d.structure.scrollArea.note}>
          <ScrollArea className="h-[120px] rounded-[var(--ss-radius)] border border-[var(--ss-seam)]">
            <div className="p-[10px]">
              {d.structure.scrollArea.lines.map((line) => (
                <p
                  key={line}
                  className="py-[3px] font-[family-name:var(--ss-mono)] text-[12px] leading-[1.6] text-[var(--ss-text-2)]"
                >
                  {line}
                </p>
              ))}
            </div>
          </ScrollArea>
        </Specimen>
        </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      <section id="decisions" className="mt-20 scroll-mt-8">
        <SectionHeading id="decisions" head={d.decisions} />
        <div className="mt-6">
          {d.decisions.rulings.map(([no, title, body], i) => (
            <div key={no}>
              {i > 0 ? <Seam /> : null}
              <div className="flex gap-5 py-4">
                <Label className="pt-1 tabular-nums">{no}</Label>
                <div>
                  <h3 className="text-[16px] tracking-[0.06em]">{title}</h3>
                  <p className="mt-1 text-[14px] text-[var(--ss-text-2)]">{body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      <section id="install" className="mt-20 scroll-mt-8">
        <SectionHeading id="install" head={d.install} />
        <p className="mt-3 max-w-[680px] text-[15.5px] leading-[1.9] text-[var(--ss-text-2)]">
          {d.install.body}
        </p>
        <Plate elevation="flush" className="mt-4">
          <div className="flex items-center justify-between gap-4 overflow-x-auto">
            <code className="select-all font-[family-name:var(--ss-mono)] text-[13px] whitespace-pre text-[var(--ss-text-2)]">
              npx shadcn@latest add https://starseam.astroicers.link/r/theme.json
            </code>
            <CopyButton value="npx shadcn@latest add https://starseam.astroicers.link/r/theme.json" />
          </div>
        </Plate>
        <p className="mt-6 max-w-[680px] text-[15.5px] leading-[1.9] text-[var(--ss-text-2)]">
          {d.install.namespaceNote}
        </p>
        <Plate elevation="flush" className="mt-4">
          <div className="flex items-start justify-between gap-4 overflow-x-auto">
            <code className="block select-all font-[family-name:var(--ss-mono)] text-[13px] leading-[1.9] whitespace-pre text-[var(--ss-text-2)]">
              {`"registries": {
  "@starseam": "https://starseam.astroicers.link/r/{name}.json"
}

npx shadcn@latest add @starseam/plate-dialog`}
            </code>
            <CopyButton value={'"registries": { "@starseam": "https://starseam.astroicers.link/r/{name}.json" }'} />
          </div>
        </Plate>
      </section>

      <footer className="mt-16">
        <Seam />
        <p className="pt-6 font-[family-name:var(--ss-mono)] text-[12px] tracking-[0.1em] text-[var(--ss-text-3)]">
          Stars live where the plates meet. — 星,長在甲板相接之處。
        </p>
        <p className="mt-2 text-[12.5px] text-[var(--ss-text-3)]">{d.footer.license}</p>
      </footer>
    </main>
  );
}
