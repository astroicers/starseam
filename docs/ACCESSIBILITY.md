# Accessibility

`starseam` 的目標是 **WCAG 2.2 AA**。這份文件記錄實際量到的數字、方法,以及**記錄在案的例外**。
數字是算出來的,不是宣稱的——重算方式見文末。

最後稽核:v0.3.0(2026-08-19,含真實瀏覽器實測,方法見「真實瀏覽器實測」一節)

---

## 對比度

每一組 token 都對照**它實際會坐落的每一個底面**計算,而不是只對頁面底色。
儀器標籤是 9px 等寬字,屬於一般文字,門檻 4.5:1,沒有放寬。

| 組合 | console 夜勤 | report 日勤 | 門檻 |
| --- | --- | --- | --- |
| `text` / ground | 15.31 ✅ | 15.43 ✅ | 4.5 |
| `text-2` / ground | 7.77 ✅ | 5.23 ✅ | 4.5 |
| `text-3` / ground | 5.27 ✅ | 4.52 ✅ | 4.5 |
| `text-3` / plate-2 | 4.81 ✅ | 5.06 ✅ | 4.5 |
| `text-3` / plate-3 | 4.52 ✅ | 5.28 ✅ | 4.5 |
| `live` 瑠璃 / ground | 5.38 ✅ | 6.64 ✅ | 4.5 |
| `warn` 黄土 / ground | 6.71 ✅ | 4.91 ✅ | 4.5 |
| `crit` 緋 / ground | 4.95 ✅ | 5.81 ✅ | 4.5 |
| `crit` 緋 / plate-2 | 4.51 ✅ | 6.51 ✅ | 4.5 |
| `rivet` 銀鼠 / ground | 5.44 ✅ | 4.13 ✅ | 3.0 |

v0.1.0 修正前有五組不合格,其中 `text-3` 兩個模式都失敗——而 `text-3` 是**所有儀器標籤的顏色**。
修正記錄見 DECISIONS「量測稽核」一節。

---

## 記錄在案的例外

**接縫線 `--ss-seam` 對比僅 1.19:1。**
這是刻意的。接縫是純裝飾的髮絲線,標了 `role="presentation"` 與 `aria-hidden="true"`,
分組資訊由版面與標題結構承載,不依賴那條線。WCAG 1.4.11 適用於「理解內容所必需」的圖形物件,
接縫不在其中。**若把接縫改成唯一的分組線索,這個例外即失效。**

**`report` 模式的鉚釘 4.13:1。**
達到圖形物件的 3:1,未達文字的 4.5:1。鉚釘不承載文字,亦為 `aria-hidden`。
若未來讓鉚釘代表可互動的節點,必須拉到 4.5:1。

**`word-break: auto-phrase`、`text-spacing-trim`、`text-autospace` 目前支援度不一。**
三者皆為漸進增強,不支援時退回瀏覽器預設斷行,無功能損失。
Chromium 151 實測(2026-08-19):三者皆支援且實際生效——`getComputedStyle` 回報
`lang="ja"` 節點 `word-break: auto-phrase`、`zh-Hant` 根節點 `text-spacing-trim: trim-start`
與 `text-autospace: normal`;標題 `text-wrap: balance`、段落 `text-wrap: pretty` 亦生效。
Firefox 與 Safari 的支援狀態未實測,仍視為漸進增強。

---

## 顏色不是唯一線索

`StatusDot` 一律接受 `label`,狀態同時以文字表達。
`Value` 的 `state` 只改顏色,因此**任何以顏色表示嚴重度的地方都必須併同文字或圖示**——
這是使用端的責任,元件不會替你補。

危急狀態的脈動是系統中唯一的循環動畫,且在 `prefers-reduced-motion: reduce` 下停止。

---

## 真實瀏覽器實測

v0.2.0 起,以 Playwright 驅動 Chromium 151 對匯出後的靜態站實測
(2026-08-19;v0.3.0 的全目錄展示頁與雙語重構後全項重跑,兩個 locale 皆通過):

- **200% 縮放**(等效 640px viewport):`scrollWidth` = `clientWidth` = 640,無橫向溢出。
- **320px 回流**(WCAG 1.4.10):`scrollWidth` = `clientWidth` = 320,無橫向捲軸、無內容互蓋。
- **`prefers-reduced-motion: reduce`**:dialog 與 sheet 的進出動畫時長被壓至
  `0.01ms`(等同即時);crit 脈動由 `1.6s infinite` 變為 `0.01ms` 且只跑一次。
  正常模式下 crit 脈動為全站唯一 `infinite` 動畫,與 DECISIONS 08 相符。
- **console 錯誤**:兩種模式載入與互動全程零錯誤。

---

## 鍵盤與焦點

焦點環為 `1px solid var(--ss-live)` 搭配 `2px` offset,使用 `:focus-visible`,
在兩種模式下對底面皆達 3:1 以上。焦點順序即 DOM 順序;`lames` 的視覺交疊
以 `margin-top` 負值達成,**不改變 DOM 順序**,因此交疊不會讓焦點跳來跳去。

v0.3.0 真實瀏覽器實測(Chromium 151,console 與 report 兩模式各跑一輪,結果相同):

- **dialog / sheet**:Enter 開啟、初始焦點落在浮層內、Tab 循環不逃出(焦點陷阱)、
  Esc 關閉、關閉後焦點回到觸發按鈕。
- **dropdown / select**:Enter 開啟、方向鍵在項目間移動、Esc 關閉、焦點回到觸發元素。
- **tabs**:方向鍵移動並即時啟用、`Home`/`End` 跳至首末、方向鍵在兩端循環、
  Tab 離開 tablist(roving tabindex,整個 tablist 只佔一個 Tab 停留點)。
- **Tab 順序**:全目錄展示頁 36 個可聚焦元素,實走順序與 DOM 順序一致;
  無任何正值 `tabindex`;`lames` 交疊區內無可聚焦元素,不構成跳躍點。
- **mode-switch**(v0.3.0):`radiogroup` / `radio` 語意(Radix ToggleGroup single),
  整個群組佔一個 Tab 停留點,方向鍵在自動/夜勤/日勤間移動、Enter/Space 選取;
  點擊已選中段不會清空選取;「自動」清除 `localStorage` 並回到跟隨系統偏好。
  選中標記為鉚釘 + 填色,不依賴顏色單獨傳達(裁決 10)。
- **語言切換**(v0.3.0):純連結(`/` 繁中、`/en` 英文),各 locale 是獨立
  root layout,`<html lang>` 各自正確;現行 locale 標 `aria-current="page"` +
  鉚釘;切換為整頁載入,模式偏好經 localStorage 跨 locale 保持。

---

## 尚未涵蓋

誠實列出來,不假裝做過:

- **未經螢幕報讀器實測**(NVDA / VoiceOver / TalkBack)。
  表單控制項(input / textarea / checkbox / switch / select / field)的鍵盤操作與
  對比度已實測涵蓋,但 `field` 的錯誤訊息經 `aria-describedby` 的實際播報行為
  仍待螢幕報讀器驗證
- 未做動態內容的即時區域(live region)規範
- CJK 排版屬性僅在 Chromium 實測;Firefox / Safari 未驗證

---

## 重算方式

```bash
node scripts/audit-contrast.mjs
```

相對亮度依 WCAG 2.x 定義,色差為 CIEDE2000。
CI 會在每次 PR 執行,任何一組低於門檻即失敗。
