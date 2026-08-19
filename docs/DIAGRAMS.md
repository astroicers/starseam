# 圖表語彙

裁決 13 的操作手冊:文章與文件裡的 SVG 圖表怎麼畫。
目標讀者是寫文章的人(以及代筆的 agent)。

## 原則

- 圖是結構性內容,不是插畫。拿掉之後文章沒有損失的圖,不放
- 元素只用版面既有語彙:節點是板、連線是縫、端點是星、標籤是儀表刻字
- 不帶色相。`var(--ss-live/warn/crit)` 只在表達嚴重度時出現
- 直角走線;弧線保留給同心/軌道(雷達幕讀法)
- 顏色一律 `var(--ss-*)` token,圖表隨 console/report 模式換裝

## 內嵌範本

放在 prose 裡的 SVG 直接吃頁面的 CSS 變數。最小骨架:

```html
<svg viewBox="0 0 560 200" role="img" aria-label="圖的一句話說明"
     font-family="var(--ss-mono)" font-size="11" letter-spacing="0.1em">
  <!-- 節點:板 -->
  <rect x="24" y="24" width="140" height="48" rx="2"
        fill="var(--ss-plate-2)" stroke="var(--ss-seam-strong)" />
  <text x="94" y="52" text-anchor="middle" fill="var(--ss-text-2)">SOURCE</text>

  <rect x="396" y="24" width="140" height="48" rx="2"
        fill="var(--ss-plate-2)" stroke="var(--ss-seam-strong)" />
  <text x="466" y="52" text-anchor="middle" fill="var(--ss-text-2)">TARGET</text>

  <!-- 連線:縫(直角走線)+ 端點的星 -->
  <path d="M164 48 H 396" fill="none" stroke="var(--ss-seam-strong)" />
  <circle cx="164" cy="48" r="3" fill="var(--ss-rivet)" />
  <!-- 箭頭:方切 chevron -->
  <path d="M388 42 L 396 48 L 388 54" fill="none" stroke="var(--ss-rivet)" stroke-width="1.5" />
</svg>
```

## 規格

| 項目 | 值 |
|---|---|
| 線寬 | 1(髮絲);強調處至多 1.5 |
| 節點圓角 | 2px(`--ss-radius`) |
| 節點填色 | `--ss-plate-2`,巢狀第二層 `--ss-plate-3` |
| 節點框 / 連線 | `--ss-seam-strong`;次要連線 `--ss-seam` |
| 星(接點) | r=3 實心 `--ss-rivet`,只放在線真正相交或終止處 |
| 分區框 | `stroke-dasharray="2 4"`,不填底 |
| 標籤 | mono 11px、uppercase、`letter-spacing: 0.1em`、`--ss-text-3`;主標籤 `--ss-text-2` |
| 繁中說明文字 | `var(--ss-sans-tc)`,不 uppercase |
| 無障礙 | 根元素 `role="img"` + `aria-label` 一句話說明 |

## 判準備忘

- **這顆星是真的嗎**——線沒有真正相交,就不放接點(同裁決 03)
- **這個框是分區還是節點**——實體元件用板(實框),邏輯範圍用扇區(虛線)
- **這條線需要箭頭嗎**——資料/攻擊有方向才加;拓撲連線不加
