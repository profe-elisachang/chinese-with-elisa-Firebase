# 識字專案教學與數據規格書 (V2.2 - 憲法校對版)
## 🔒 Project Invariants (專案教學憲法)
1. Core vs Support 核心二元論：部件即便以圖片顯示，仍屬 Core（核心），因為它是理解字義的結構單位。
2. 教學情境定錨 (Teaching Contexts)：分為 Admin (管理)、Lesson (學生手機版)、Teaching Presentation (65 吋電視版) 三種情境，渲染器須依情境調整字體與圖片尺寸。
3. 數據真相來源：Firestore 是唯一真相來源。Admin 是為了方便編寫，不應引入替代邏輯。
4. 空值隱藏原則：若選填欄位值為 ""，前端渲染器 「絕對不可」 產生該 HTML 容器或顯示標題。

--------------------------------------------------------------------------------

## 📊 Firebase Firestore 資料結構
1. lessons Collection (課程內容)
每個 Document（如 lesson11）包含以下區塊：
A. 核心文字區 (Core)
• character: 漢字文字。
• display_image: (字形補丁) 專用於當 character 無法正常顯示時的字體圖。與文字地位相同，套用「字形補丁規範」。
• pinyin: 拼音（部件不強求發音，目標字必考）。
• meaning: 英文意義。
• type: "component" 或 "target"。
B. 教學支援區 (Support - 支援 Markdown)
• components_breakdown: 部件拆解字串。
• book_explanation: 書本解釋。
• story: 記憶故事。
• pronunciation_cue: 發音提示。
• image: (輔助插圖) 專用於故事圖、象形演變圖或聯想圖。套用「通用圖片規範」。
• example: 記憶例句。
C. 列表與權變格式 (需用 .split('|') 解析)
• vocabulary: 字|音|義 (例如：通|tōng|open)。
• phrases: 詞組|音|義。
• grammar: 語法規則|英文說明。

--------------------------------------------------------------------------------

## 📝 渲染規則與圖片規範
1. 🖼️ 字形補丁系統 (Character Patch)
包含 display_image 欄位與 Markdown 中的 ![comp](url)。
• Teaching Presentation (電視)：固定寬高 120px。
• Lesson / Admin (行內)：高度設定為 1.8em (約 35px)，使其視覺上與文字對齊。
2. 🖼️ Markdown 圖片分類 (Alt-based)
渲染器根據 Alt 文字自動分配 CSS Class：
• ![comp](url)：套用「字形補丁系統」樣式。
• ![origin](url)：象形演變圖，適中尺寸並置中。
• ![story](url)：故事插圖，較大尺寸，視覺重心。
• 無標註或 ![small/large]：套用 .modal-image-container，max-width: 100% 自適應。

--------------------------------------------------------------------------------

## 💾 查詢與開發基準
// 1. 渲染字卡主標題邏輯
const charDisplay = char.display_image 
    ? `<img src="${char.display_image}" class="img-comp">` 
    : char.character;

// 2. 解析權變格式
const vocab = data.vocabulary.map(v => v.content.split('|').map(s => s.trim())); [12, 18]

