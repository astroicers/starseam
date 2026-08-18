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
import { ModeToggle } from "@/components/ui/mode-toggle";
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

const READINGS = [
  {
    title: "兜的俯視圖",
    en: "PLAN OF A HELMET",
    body: "板片自頂端的八幡座放射而出,鉚釘沿接縫排列。這是真實的甲冑構造。",
  },
  {
    title: "星圖",
    en: "STAR CHART",
    body: "同一張圖,把鉚釘讀成星、接縫讀成星座連線。攻擊路徑就是連星成座。",
  },
  {
    title: "雷達幕",
    en: "PPI SCOPE",
    body: "同心圈、方位線、掃描扇區——監控室裡的那台儀器。",
  },
];

const RULINGS = [
  ["01", "顏色即嚴重度", "在監控室裡,顏色從來不是裝飾。"],
  ["02", "瑠璃必須稀有", "一個畫面至多一到兩次。鉚釘是鋼銀,不是藍的。"],
  ["03", "星只長在接縫上", "拿掉星,若版面關係不變,那顆星就是假的。"],
  ["04", "深度不靠陰影", "沒有 box-shadow、沒有毛玻璃、沒有輝光。"],
  ["05", "兩種模式是兩種材質", "夜是漆下的光,日是紙上的顏料。"],
  ["06", "字體分語系宣告", "骨 直 海 令 在繁中與日文不是同一個字形。"],
  ["07", "日文只用於甲冑術語", "典故要深,表面要誠實。"],
  ["08", "靜止是預設", "會動的東西代表出事了。"],
  ["09", "漢字對齊全形格", "拉丁與數字對齊半形格。"],
];

export default function Home() {
  return (
    <main className="mx-auto max-w-[880px] px-6 py-16">
      <header className="flex items-start justify-between gap-8">
        <Mark size={116} plates={24} rings={2} majorEvery={6} />
        <ModeToggle className="mt-2" />
      </header>

      <h1 className="mt-10 font-[family-name:var(--ss-mono)] text-[clamp(30px,6vw,52px)] font-semibold leading-none tracking-[0.005em]">
        starseam
      </h1>
      <p className="mt-4 text-[15px] leading-[1.9] text-[var(--ss-text-2)]">
        星兜為型:數十片鐵板拼成一頂鉢,固定板片的鉚釘刻意不磨平、突出成點——
        <span lang="ja" className="text-[var(--ss-text)]">
          那些鉚釘的名字就叫「星」
        </span>
        。板疊板、以星鉚之,本身就是縱深防禦。
      </p>

      <div className="mt-10">
        <Seam />
        <StatBand
          stats={[
            { label: "ITEMS", value: "22" },
            { label: "MODES", value: "2" },
            { label: "SHADOWS", value: "0" },
            { label: "STATUS", value: "LIVE", state: "live" },
          ]}
        />
        <Seam />
      </div>

      <section className="mt-16">
        <Label>THREE READINGS</Label>
        <h2 className="mt-3 text-[21px] tracking-[var(--ss-track-head)]">
          一個記號,三種讀法
        </h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {READINGS.map((r) => (
            <Plate key={r.en}>
              <Label>{r.en}</Label>
              <h3 className="mt-2 text-[15px] tracking-[0.06em]">{r.title}</h3>
              <p className="mt-2 text-[12.5px] leading-[1.75] text-[var(--ss-text-2)]">
                {r.body}
              </p>
            </Plate>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <Label>INSTALL</Label>
        <h2 className="mt-3 text-[21px] tracking-[var(--ss-track-head)]">安裝</h2>
        <p className="mt-3 text-[13.5px] leading-[1.9] text-[var(--ss-text-2)]">
          每個元件都會自動帶入 <CodeTag>theme</CodeTag> 這層 token。
          需要 Tailwind CSS v4 與已初始化的 shadcn 專案。
        </p>
        <Plate elevation="flush" className="mt-4 overflow-x-auto">
          <code className="font-[family-name:var(--ss-mono)] text-[12.5px] whitespace-pre text-[var(--ss-text-2)]">
            npx shadcn@latest add https://starseam.astroicers.link/r/seam.json
          </code>
        </Plate>
      </section>

      <section className="mt-16">
        <Label>SPECIMENS</Label>
        <h2 className="mt-3 text-[21px] tracking-[var(--ss-track-head)]">元件</h2>

        <Lames className="mt-6">
          <Plate elevation="float">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-[15px] tracking-[0.08em]">CyPulse</h3>
              <StatusDot state="live" label="live" />
            </div>
            <p className="mt-2 text-[12.5px] text-[var(--ss-text-2)]">
              開源外部攻擊面管理平台
            </p>
            <div className="mt-3 flex gap-6">
              <span>
                <Label>ASSETS</Label>
                <br />
                <Value className="text-[15px]">1,284</Value>
              </span>
              <span>
                <Label>EXPOSED</Label>
                <br />
                <Value state="warn" className="text-[15px]">
                  17
                </Value>
              </span>
            </div>
          </Plate>
          <Plate elevation="raised">
            <h3 className="text-[15px] tracking-[0.08em]">Merak</h3>
            <p className="mt-2 text-[12.5px] text-[var(--ss-text-2)]">
              零信任平台 · OpenZiti + Keycloak
            </p>
          </Plate>
          <Plate elevation="flush">
            <h3 className="text-[15px] tracking-[0.08em]">ASP</h3>
            <p className="mt-2 text-[12.5px] text-[var(--ss-text-2)]">
              AI-SOP-Protocol 治理框架
            </p>
          </Plate>
        </Lames>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <PlateButton variant="live">Get started</PlateButton>
          <PlateButton>Read decisions</PlateButton>
          <CodeTag>v0.1.0</CodeTag>
          <CodeTag>MIT</CodeTag>
          <StatusDot state="crit" label="critical" />
        </div>
      </section>

      <section className="mt-16">
        <Label>CONTROLS</Label>
        <h2 className="mt-3 text-[21px] tracking-[var(--ss-track-head)]">控制項</h2>
        <p className="mt-3 text-[13.5px] leading-[1.9] text-[var(--ss-text-2)]">
          選取狀態是<b className="font-medium text-[var(--ss-text)]">鋼銀</b>而非瑠璃——
          被勾選不是一種嚴重度,而藍色必須稀有到還有意義。瑠璃留給焦點,
          而任何時刻只有一個東西被聚焦。
        </p>

        <div className="mt-6 grid gap-[var(--ss-em)] sm:grid-cols-2">
          <Field label="TARGET DOMAIN" hint="單一網域,不含通訊協定">
            <PlateInput placeholder="example.gov.tw" />
          </Field>
          <Field label="SCAN PROFILE">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="選擇掃描剖面" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="passive">Passive — DNS / CT only</SelectItem>
                <SelectItem value="light">Light — HTTP fingerprint</SelectItem>
                <SelectItem value="full">Full — active probing</SelectItem>
              </SelectContent>
            </Select>
          </Field>
          <Field
            label="NOTIFY ADDRESS"
            error="這不是一個有效的信箱位址"
            className="sm:col-span-2"
          >
            <PlateInput defaultValue="soc@" />
          </Field>
          <Field label="ENGAGEMENT NOTE" className="sm:col-span-2">
            <PlateTextarea placeholder="授權範圍與時窗…" />
          </Field>
        </div>

        <div className="mt-[var(--ss-em)] flex flex-wrap items-center gap-[calc(var(--ss-em)*1.5)]">
          <label className="flex items-center gap-[9px] text-[13px] text-[var(--ss-text-2)]">
            <PlateCheckbox defaultChecked />
            納入子網域
          </label>
          <label className="flex items-center gap-[9px] text-[13px] text-[var(--ss-text-2)]">
            <PlateSwitch defaultChecked />
            排程每日執行
          </label>
        </div>

        <div className="mt-[calc(var(--ss-em)*1.5)] flex flex-wrap items-center gap-[10px]">
          <Dialog>
            <DialogTrigger asChild>
              <PlateButton variant="live">Open dialog</PlateButton>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>確認刪除掃描剖面</DialogTitle>
                <DialogDescription>此動作無法復原。</DialogDescription>
              </DialogHeader>
              <DialogBody>
                剖面刪除後,既有的排程任務會一併停止,但歷史掃描結果會保留。
              </DialogBody>
              <DialogFooter>
                <DialogClose asChild>
                  <PlateButton>取消</PlateButton>
                </DialogClose>
                <DialogClose asChild>
                  <PlateButton>刪除</PlateButton>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <PlateButton>Actions</PlateButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuLabel>SCAN</DropdownMenuLabel>
              <DropdownMenuItem>立即執行</DropdownMenuItem>
              <DropdownMenuItem>匯出報告</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem destructive>刪除剖面</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="mt-[calc(var(--ss-em)*2)]">
          <Tabs defaultValue="assets">
            <TabsList>
              <TabsTrigger value="assets">Assets</TabsTrigger>
              <TabsTrigger value="findings">Findings</TabsTrigger>
              <TabsTrigger value="history">History</TabsTrigger>
            </TabsList>
            <TabsContent value="assets">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>HOST</TableHead>
                    <TableHead>SERVICE</TableHead>
                    <TableHead>EXPOSURE</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>mail.example.gov.tw</TableCell>
                    <TableCell>smtp/25</TableCell>
                    <TableCell>
                      <StatusDot state="warn" label="review" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>vpn.example.gov.tw</TableCell>
                    <TableCell>https/443</TableCell>
                    <TableCell>
                      <StatusDot state="crit" label="critical" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>www.example.gov.tw</TableCell>
                    <TableCell>https/443</TableCell>
                    <TableCell>
                      <StatusDot state="nominal" label="nominal" />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TabsContent>
            <TabsContent value="findings">尚無待處理的發現。</TabsContent>
            <TabsContent value="history">最近一次掃描:2 小時前。</TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="mt-16">
        <Label>DECISIONS</Label>
        <h2 className="mt-3 text-[21px] tracking-[var(--ss-track-head)]">裁決</h2>
        <p className="mt-3 text-[13.5px] leading-[1.9] text-[var(--ss-text-2)]">
          顏色與元件會改,裁決不會。新元件動工前,先確認它沒有違反下面任何一條。
        </p>
        <div className="mt-6">
          {RULINGS.map(([no, title, body], i) => (
            <div key={no}>
              {i > 0 ? <Seam /> : null}
              <div className="flex gap-5 py-4">
                <Label className="pt-1 tabular-nums">{no}</Label>
                <div>
                  <h3 className="text-[14.5px] tracking-[0.06em]">{title}</h3>
                  <p className="mt-1 text-[12.5px] text-[var(--ss-text-2)]">
                    {body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-16">
        <Seam />
        <p className="pt-6 font-[family-name:var(--ss-mono)] text-[11px] tracking-[0.1em] text-[var(--ss-text-3)]">
          Stars live where the plates meet. — 星,長在甲板相接之處。
        </p>
        <p className="mt-2 text-[11.5px] text-[var(--ss-text-3)]">
          MIT ©{" "}
          <a
            href="https://github.com/astroicers"
            className="underline underline-offset-4 hover:text-[var(--ss-text-2)]"
          >
            astroicers
          </a>
        </p>
      </footer>
    </main>
  );
}
