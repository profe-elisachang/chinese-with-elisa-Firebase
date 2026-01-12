# 🎨 Business Chinese 課程 - 設計系統文件

## 📌 設計原則

### 核心理念
- **簡潔明瞭**：不過度裝飾，突出內容
- **專注學習**：配色不刺眼，適合長時間閱讀
- **一致性**：所有頁面使用統一的設計語言
- **響應式**：手機、平板、電腦都能良好顯示

### 風格定位
- **清新教育風**：適合中文學習平台
- **專業但親切**：既專業又不嚴肅
- **簡體中文**：全站使用簡体中文內容（導航欄英文）

---

## 🎨 配色系統（CSS 變數）

### ⚠️ 重要規範

**所有 CSS 必須使用變數，禁止寫死顏色值！**

**為什麼？**
- ✅ 老師未來會調整配色
- ✅ 一處修改，全站生效
- ✅ 易於維護和擴展

---

### 主要配色（當前版本：藍綠色系）

```css
:root {
  /* ━━━ 主色調 ━━━ */
  --primary-color: #0891b2;        /* 主要藍綠色 - 按鈕、連結、標題、Tab 活躍 */
  --primary-light: #06b6d4;        /* 淺藍綠色 - hover 狀態、輔助元素 */
  --primary-dark: #0e7490;         /* 深藍綠色 - active 狀態、陰影 */
  
  /* ━━━ 輔助色 ━━━ */
  --secondary-color: #10b981;      /* 綠色 - 成功提示 */
  --accent-color: #f59e0b;         /* 橙色 - 強調、警告 */
  --danger-color: #ef4444;         /* 紅色 - 錯誤、刪除 */
  
  /* ━━━ 中性色 ━━━ */
  --text-primary: #1f2937;         /* 主要文字 */
  --text-secondary: #6b7280;       /* 次要文字 */
  --text-muted: #9ca3af;           /* 淡化文字（提示、說明） */
  
  /* ━━━ 背景色 ━━━ */
  --bg-page: #f9fafb;              /* 頁面背景 */
  --bg-card: #ffffff;              /* 卡片背景 */
  --bg-hover: #f3f4f6;             /* hover 背景 */
  --bg-light: #e5e7eb;             /* 淺背景（區塊分隔） */
  
  /* ━━━ 邊框色 ━━━ */
  --border-light: #e5e7eb;         /* 淺邊框 */
  --border-medium: #d1d5db;        /* 中等邊框 */
  --border-dark: #9ca3af;          /* 深邊框 */
}
```

---

### 🚫 禁止的配色

```css
/* ❌ 不要使用 */
--purple-color: #8b5cf6;          /* 禁用紫色 */
--gradient-bg: linear-gradient(); /* 禁用漸變（除非特殊需求） */
```

---

### 使用範例

#### ✅ 正確寫法
```css
.header {
  background-color: var(--primary-color);
  color: var(--bg-card);
}

.tab-button.active {
  color: var(--primary-color);
  border-bottom-color: var(--primary-color);
}
```

#### ❌ 錯誤寫法
```css
.header {
  background-color: #0891b2;  /* ❌ 不要寫死顏色 */
}
```

---

## 🔤 字體系統

### 字體變數

```css
:root {
  /* ━━━ 字體家族 ━━━ */
  --font-primary: 'Microsoft JhengHei', 'Noto Sans SC', 'SimHei', sans-serif;
  --font-english: 'Segoe UI', 'Roboto', 'Inter', sans-serif;
  
  /* ━━━ 字體大小 ━━━ */
  --text-sm: 0.875rem;   /* 14px - 小字（輔助資訊） */
  --text-base: 1rem;     /* 16px - 基準大小 */
  --text-lg: 1.125rem;   /* 18px - 大字（強調） */
  --text-xl: 1.25rem;    /* 20px - 標題 */
  --text-2xl: 1.5rem;    /* 24px - 大標題 */
  --text-3xl: 2rem;      /* 32px - 主標題 */
  --text-4xl: 2.5rem;    /* 40px - 超大標題 */
  
  /* ━━━ 字重 ━━━ */
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
}
```

### 語言規範

- **導航欄**：English
- **頁面內容**：簡體中文
- **Tab 名稱**：簡体中文（生词 | 语法 | 对话 | 短文 | 练习 | 补充）

### 使用範例

```css
body {
  font-family: var(--font-primary);
  font-size: var(--text-base);
  color: var(--text-primary);
}

.nav-link {
  font-family: var(--font-english);
  font-size: var(--text-lg);
  font-weight: var(--font-semibold);
}

.tab-button {
  font-family: var(--font-primary);
  font-size: var(--text-lg);
  font-weight: var(--font-semibold);
}
```

---

## 📏 間距系統

### 間距變數

```css
:root {
  /* ━━━ 內邊距 / 外邊距 ━━━ */
  --spacing-xs: 0.25rem;   /* 4px */
  --spacing-sm: 0.5rem;    /* 8px */
  --spacing-md: 1rem;      /* 16px */
  --spacing-lg: 1.5rem;    /* 24px */
  --spacing-xl: 2rem;      /* 32px */
  --spacing-2xl: 3rem;     /* 48px */
  
  /* ━━━ 圓角 ━━━ */
  --radius-sm: 0.25rem;    /* 4px - 小圓角 */
  --radius-md: 0.5rem;     /* 8px - 中等圓角 */
  --radius-lg: 0.75rem;    /* 12px - 大圓角 */
  --radius-xl: 1rem;       /* 16px - 超大圓角 */
  
  /* ━━━ 陰影 ━━━ */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
}
```

### 使用範例

```css
.card {
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-md);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
}
```

---

## 🧩 元件樣式規範

### 導航欄（Navigation Bar）

```css
.top-nav {
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 20px;
  background: var(--bg-card);
  box-shadow: var(--shadow-sm);
  border-bottom: 1px solid var(--border-light);
}

.nav-link {
  font-size: var(--text-lg);
  font-weight: var(--font-semibold);
  color: var(--text-secondary);
  text-decoration: none;
  padding: 8px 16px;
  border-bottom: 3px solid transparent;
  transition: all 0.3s;
}

.nav-link:hover {
  color: var(--primary-color);
}

.nav-link.active {
  color: var(--primary-color);
  border-bottom-color: var(--primary-color);
}

.nav-separator {
  color: var(--text-muted);
  font-size: var(--text-lg);
}
```

**響應式（手機）**
```css
@media (max-width: 640px) {
  .top-nav {
    gap: 12px;
    padding: 12px 8px;
  }

  .nav-link {
    font-size: 0.85rem;
    padding: 6px 10px;
  }

  .nav-separator {
    font-size: 0.85rem;
  }
}
```

---

### Tab 按鈕（Tab Buttons）

```css
.tabs-nav {
  display: flex;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-xl);
  border-bottom: 2px solid var(--border-light);
  flex-wrap: wrap;
  overflow-x: auto;
}

.tab-button {
  padding: var(--spacing-md) var(--spacing-xl);
  background: transparent;
  border: none;
  border-bottom: 3px solid transparent;
  font-size: var(--text-lg);
  font-weight: var(--font-semibold);
  color: var(--text-secondary);
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.tab-button:hover {
  color: var(--primary-color);
  background: var(--bg-hover);
}

.tab-button.active {
  color: var(--primary-color);
  border-bottom-color: var(--primary-color);
}
```

---

### 卡片（Card）

```css
.card {
  background: var(--bg-card);
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  border: 1px solid var(--border-light);
}

.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}

.card-header {
  border-bottom: 2px solid var(--primary-color);
  padding-bottom: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
}

.card-title {
  font-size: var(--text-2xl);
  font-weight: var(--font-bold);
  color: var(--primary-color);
}
```

---

### 按鈕（Button）

```css
.btn {
  padding: var(--spacing-md) var(--spacing-xl);
  font-size: var(--text-base);
  font-weight: var(--font-semibold);
  border-radius: var(--radius-md);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary {
  background: var(--primary-color);
  color: white;
}

.btn-primary:hover {
  background: var(--primary-light);
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.btn-secondary {
  background: transparent;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
}

.btn-secondary:hover {
  background: var(--bg-hover);
}
```

---

## 📱 響應式設計

### 斷點變數

```css
:root {
  --breakpoint-sm: 640px;   /* 手機 */
  --breakpoint-md: 768px;   /* 平板 */
  --breakpoint-lg: 1024px;  /* 筆電 */
  --breakpoint-xl: 1280px;  /* 桌機 */
}
```

### 使用範例

```css
/* 預設（手機） */
.header {
  font-size: var(--text-2xl);
  padding: var(--spacing-lg);
}

/* 平板以上 */
@media (min-width: 768px) {
  .header {
    font-size: var(--text-3xl);
    padding: var(--spacing-xl);
  }
}

/* 桌機以上 */
@media (min-width: 1024px) {
  .header {
    font-size: var(--text-4xl);
  }
}
```

---

## 🎯 頁面特定規範

### 首頁（index.html）

- **標題**：🌊 Mandarin with Elisa 🌊
- **副標題**：欢迎来到你的中文课 / Welcome to Your Chinese Class
- **標語**：Progress, Not Perfection.
- **佈局**：居中、寬鬆間距、單欄

### 課程選擇頁（lessons/index.html）

- **網頁版**：細長框顯示課程（類似識字課設計）
- **手機版**：下拉選單（Select 元素）
- **響應式**：@media (max-width: 640px)

### 單課頁面（lessons/lesson-{id}.html）

- **Tab 導航**：生词 | 语法 | 对话 | 短文 | 练习 | 补充
- **內容區**：動態載入（fetch HTML 片段）
- **佈局**：頂部 Tab，下方內容區
- **預留位置**：課堂補充流（日後實現）

---

## 🔄 動態 Tab 邏輯

### Tab 載入（JavaScript）

```javascript
// 簡單的 Tab 切換邏輯
document.querySelectorAll('.tab-button').forEach(btn => {
  btn.addEventListener('click', () => {
    const tabName = btn.dataset.tab;
    const lessonId = getLesonIdFromURL();
    
    // 載入對應的 HTML 片段
    fetch(`/courses/bct/tabs/lesson-${lessonId}-${tabName}.html`)
      .then(r => r.text())
      .then(html => {
        document.getElementById('content').innerHTML = html;
        updateActiveTab(btn);
      });
  });
});
```

### 檔案結構

```
/courses/bct/
├─ index.html (首頁)
├─ lessons/
│  ├─ index.html (課程選擇頁)
│  ├─ lesson-1.html (L1 單課頁面)
│  ├─ lesson-2.html (L2 單課頁面)
│  └─ ... (lesson-{id}.html)
├─ tabs/
│  ├─ lesson-1-vocab.html (生词)
│  ├─ lesson-1-grammar.html (语法)
│  ├─ lesson-1-dialogue.html (对话)
│  ├─ lesson-1-reading.html (短文)
│  ├─ lesson-1-practice.html (练习)
│  ├─ lesson-1-supplement.html (补充)
│  ├─ lesson-2-vocab.html
│  └─ ... (lesson-{id}-{tab}.html)
└─ assets/
   ├─ css/
   │  └─ style.css (統一設計系統)
   └─ js/
      └─ tabs.js (Tab 邏輯)
```

---

## ✅ 檢查清單

技術 AI 開發新頁面時，必須確保：

- [ ] 所有顏色使用 CSS 變數
- [ ] 所有字體大小使用 CSS 變數
- [ ] 所有間距使用 CSS 變數
- [ ] 響應式設計（手機/平板/電腦）
- [ ] 無紫色或漸變（除非特殊需求）
- [ ] Tab 切換正常工作
- [ ] 導航欄英文，內容簡体中文
- [ ] 所有 Tab 名稱正確（生词 | 语法 | 对话 | 短文 | 练习 | 补充）

---

## 🔮 未來升級項

### Markdown 支援
- 在【补充】Tab 支援 Markdown 語法
- 老師只需寫純文字，JS 自動轉換成 HTML
- 實現方式：集成 marked.js 或 showdown.js
- **優先級**：低（MVP 完成後）

### Firestore 動態載入
- 現在使用靜態 HTML 片段
- 日後遷移到 Firestore 存儲課程內容
- 老師在 admin 頁面直接編輯
- **優先級**：中（6 個月後考慮）

### 上課進度記錄
- 利用【补充】Tab 記錄上課日期和進度
- 日後考慮添加「最後上課日期」標記
- **優先級**：低（建議手動維護）

---

## 🔄 未來調整

當老師要換配色時，只需修改 `:root` 中的變數值即可：

```css
/* 例如：改成綠色系 */
:root {
  --primary-color: #10b981;      /* 從藍綠改成綠 */
  --primary-light: #34d399;
  --primary-dark: #059669;
}
```

**全站自動更新，不需改動任何其他代碼！** 🎉

---

**文檔版本**：v1.0（BCT 版本）  
**基於**：識字課 design-system.md  
**最後更新**：2025-01-11  
**負責人**：Elisa Chang
