# CLAUDE.md

`starseam` — 個人設計系統,以 shadcn registry 形式發布。
物件是**星兜**:板疊板、以星鉚之。

完整裁決在 [`DECISIONS.md`](./DECISIONS.md);那份是規範,這份是操作。
**動工前先讀 DECISIONS.md。** 顏色與元件會改,裁決不會。

---

## 鐵則

違反任何一條就是錯的,不需要討論。

**不得用陰影表達層級。** 禁止 `box-shadow`、`backdrop-filter`、`filter: blur`、
輝光、`text-shadow`。層級只有兩種合法表達:填色深淺(`--ss-plate-1/2/3`)
或實體交疊(`Lames`)。

**鉚釘只出現在兩個區塊真正相接的邊界。** 判準:把鉚釘拿掉,若版面關係不變,
那顆鉚釘就是假的,不准放。同一片板上的劃線用 `--ss-seam` 髮絲線,不用 `Seam` 元件。

**`--ss-live`(瑠璃)只給存活訊號與焦點。** 不給選取、不給勾選、不給開啟、
不給「這裡需要一點顏色」。選取狀態一律 `--ss-rivet`(銀鼠)。
驗證失敗用 `--ss-crit`,且必須同時有文字。

**元件的公開 API 不得要求傳入函式。** 沒有 render prop、沒有 callback child——
那會逼使用端整頁變成 client component。要傳值給子節點就用 `cloneElement` 注入。

**不得硬寫顏色。** 一律 `var(--ss-*)`。新增顏色前先問:它在紙上還是同一個東西嗎?

**動態預設為無。** 允許的只有:hover/focus 的 160ms 顏色轉場、浮層進出、
`crit` 狀態的脈動。沒有視差、沒有捲動觸發、沒有數字跳動、沒有打字機。
浮層動態一律定義在 theme 的 `data-slot$="-content"` 那一段,**元件不得自己發明進場方式**。

---

## 指令

```bash
npm run dev              # demo 站
npm run audit            # 對比度稽核 — CI 第一道關卡,先跑這個
npm run typecheck
npm run lint
npm run registry:build   # 產生 public/r/*.json
npm run preview          # 重新產生 docs/preview-*.svg(需要 .fonts/,見該目錄 README)
npm run build
```

改完 token 一定要跑 `npm run audit`。它直接讀 theme 檔案計算,
任何一組低於 WCAG 2.2 AA 就讓 CI 失敗。

---

## 檔案配置

```
registry/starseam/theme/starseam.css   ← 唯一的 token 來源
registry/starseam/ui/*.tsx             ← 唯一的元件來源
registry.json                          ← 每個新元件都要登記
app/                                   ← demo 站,不是元件來源
docs/ACCESSIBILITY.md                  ← 改 token 或加表單元件時必須同步更新
scripts/audit-contrast.mjs             ← 對比度的真相
```

`app/` 透過 tsconfig 別名 `@/components/ui/*` 指向 `registry/starseam/ui/*`,
所以 demo 的 import 路徑跟使用者裝完之後一樣,**沒有複本會走鐘**。

---

## 新增元件

1. 建立 `registry/starseam/ui/<name>.tsx`
2. 元件之間互相 import 一律寫 `@/registry/starseam/ui/<name>`——
   shadcn CLI 只改寫這個前綴,寫死 `@/components/ui/` 的話使用者換別名就斷
3. 根元素加 `data-slot="<name>"`
4. 在 `registry.json` 登記,`registryDependencies` 用**絕對 URL**
   (裸名字會被解析成官方 registry 的項目),npm 相依放 `dependencies`
5. 在 doc comment 裡指回它遵守的裁決編號
6. 加進 `app/page.tsx` 實際渲染過再收工
7. 跑完整驗證

命名:`plate-*` 是可互動的板件(`plate-button`、`plate-input`)。
結構性的東西用素名(`seam`、`lames`、`mark`)。

---

## 語言

程式碼註解與 doc comment 用英文。文件(README / DECISIONS / ACCESSIBILITY)用繁體中文。
介面標籤用繁中或英文,**日文只留給真正的甲冑術語**(星兜、八幡座、縅、錣、間)並標 `lang="ja"`。

介面上寫「資產」不寫「資産」。日文漢字散落在繁中介面裡會讀成和風扮裝。

---

## 不要做的事

- 不要為了「更好看」而破壞裁決。要改裁決就改 `DECISIONS.md` 並寫明理由
- 不要在 `app/` 裡直接定義元件,那不是元件來源
- 不要在 registry 元件裡用 `next/*`——元件必須框架無關,Next 專屬的東西只能待在 `app/`
- 不要相信 `opentype.js` 的 `toPathData()`,座標剛好落在整數時它會吐 `NaN`
  並靜默刪掉字形。用 `scripts/gen-preview.mjs` 裡的 `pathData()`
- 不要把 `.fonts/` 提交進版控

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
