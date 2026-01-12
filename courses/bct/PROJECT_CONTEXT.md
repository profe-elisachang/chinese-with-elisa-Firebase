# Business Chinese (BCT) 課程網站

## 項目信息
- 名稱：Business Chinese Test (BCT)
- 類型：中文商務課程教學平台
- 老師：Elisa
- 技術棧：HTML/CSS/JavaScript (無框架)

## 核心設計原則
- 簡體中文內容 + 英文導航
- 6 個 Tab：生词 | 语法 | 对话 | 短文 | 练习 | 补充
- 每個 Tab 可以有獨立的 HTML + CSS 樣式
- 響應式設計（手機/平板/電腦）

## 資料夾結構
```
courses/bct/
├─ lessons/
│  ├─ lesson.html(入口)
│  ├─ lesson-1.html
│  ├─ lesson-2.html
│  └─ lesson-X.html
├─ tabs/
│  ├─ lesson-1-vocab.html
│  ├─ lesson-1-grammar.html
│  └─ ...
└─ assets/
   ├─ css/style.css
   └─ js/tabs.js
```

## 重要決議
- 課程列表用 `lessons.json` 管理
- lessons.json 簡單格式：`[1, 2, 3, ...]`
- 導航欄有「Lessons」下拉選單
- 每個 Tab 獨立設計，不強制用共同 CSS
- 每天可能新增課程（L1~最多L30）

## 已實現功能
- ✅ 首頁
- ✅ lesson-1.html 和 lesson-2.html（含範例內容）
- ✅ L1 的 6 個 Tab
- ✅ 基本樣式和 Tab 切換邏輯

## 待做事項
- [ ] lessons.json 和下拉選單
- [ ] 刪除課程選擇頁（lessons/index.html）
- [ ] 改名 bct → bct
- [ ] Tab 切換時插件重新掃描拼音

## 設計系統
- 主色：#0891b2（藍綠色）
- 字體：簡體中文字體 + Segoe UI 英文
- 響應式斷點：640px (手機), 768px (平板), 1024px (筆電)
```



