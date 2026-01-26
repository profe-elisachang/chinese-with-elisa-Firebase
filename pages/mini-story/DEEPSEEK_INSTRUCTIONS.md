# DeepSeek 指令模板 - Mini Story 生成

## 🚀 快速版本（推薦）

**最簡單快速的方式，讓 DeepSeek 直接生成完整 HTML 頁面**

```
請將以下中英文對照文字轉換為完整 HTML 頁面。

要求：
- 完整 HTML5 結構（包含 <!DOCTYPE>、<html>、<head>、<body>）
- 標題：故事 X - [標題] - Mandarin with Elisa
- 引入樣式：<link rel="stylesheet" href="../../../assets/css/mini-story.css">
- 中文段落：<p class="cn">內容</p>
- 英文段落：<p class="en">內容</p>
- HSK2+ 詞彙標記：<span class="vocab" data-hsk="等級" data-en="英文">詞彙</span>
- 包含切換按鈕和 JavaScript（參考下方模板）
- 使用簡體中文

HTML 模板結構：
```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>故事 X - [標題] - Mandarin with Elisa</title>
    <link rel="stylesheet" href="../../../assets/css/mini-story.css">
</head>
<body>
    <div class="mini-story-container">
        <h1>故事 X - [標題]</h1>
        <button class="toggle-en-btn" onclick="toggleEnglish()">
            <span id="toggle-text">隐藏英文</span>
        </button>
        <!-- 這裡放故事內容 -->
    </div>
    <script>
        function toggleEnglish() {
            document.body.classList.toggle('hide-en');
            document.getElementById('toggle-text').textContent = 
                document.body.classList.contains('hide-en') ? '显示英文' : '隐藏英文';
        }
    </script>
</body>
</html>
```

請直接生成完整的 HTML 頁面：
[在此貼上 PDF 文字內容]
```

---

## ⚡ 超簡化版本（最快，無 HSK 標記）

如果不需要 HSK 詞彙標記，可以用這個最快版本：

```
請將以下中英文對照文字轉換為完整 HTML 頁面。

要求：
- 完整 HTML5 結構
- 標題：故事 X - [標題] - Mandarin with Elisa
- 引入：<link rel="stylesheet" href="../../../assets/css/mini-story.css">
- 中文：<p class="cn">內容</p>
- 英文：<p class="en">內容</p>
- 包含切換按鈕功能（參考上方模板）
- 簡體中文

[貼上文字]
```

---

## 📋 使用步驟（快速版）

1. **複製 PDF 文字**：從 PDF 複製中英文對照內容
2. **複製指令**：複製上面的快速版本指令
3. **貼上文字**：將 PDF 文字貼到指令最後的 `[在此貼上 PDF 文字內容]` 位置
4. **發送給 DeepSeek**：將完整指令發送給 DeepSeek
5. **複製結果**：複製 DeepSeek 生成的完整 HTML
6. **保存檔案**：另存為 `story-X.html` 在 `pages/mini-story/content/` 目錄
7. **完成！** ✅

---

## 📝 詳細版本（需要更多格式控制時使用）

如果需要更詳細的格式要求，可以使用以下完整版本：

```
請幫我將以下 PDF 文字轉換為 HTML 格式，要求如下：

1. **格式要求**：
   - 每段中文使用：<p class="cn">中文內容</p>
   - 每段英文使用：<p class="en">英文內容</p>
   - 中文和英文段落必須配對出現
   - 保持原文段落順序

2. **高亮規則**：
   - 將 HSK2 以上難度的詞彙（單字或詞組）用以下格式包起來：
     <span class="vocab" data-hsk="難度等級" data-en="英文翻譯">中文詞彙</span>
   - HSK 等級：2, 3, 4, 5, 6
   - 例如：<span class="vocab" data-hsk="3" data-en="marry">結婚</span>

3. **高亮判斷標準**：
   - HSK1 字彙：不標記（不需要高亮）
   - HSK2 及以上：必須標記並高亮
   - 如果一個詞組包含多個字，標記整個詞組（例如「結婚」而不是分別標記「結」和「婚」）
   - 優先標記完整詞組，而非單個字
   - 常用詞組優先（例如「結婚」、「文學」、「小說」）

4. **輸出格式範例**：
```html
<p class="cn">他們<span class="vocab" data-hsk="3" data-en="marry">結婚</span>已經<span class="vocab" data-hsk="2" data-en="already">兩年</span>了。</p>
<p class="en">They have been married for two years.</p>

<p class="cn">丈夫<span class="vocab" data-hsk="2" data-en="husband">喜歡</span><span class="vocab" data-hsk="3" data-en="literature">文學</span>，經常<span class="vocab" data-hsk="2" data-en="often">寫</span><span class="vocab" data-hsk="3" data-en="novel">小說</span>。</p>
<p class="en">The husband likes literature and often writes fiction.</p>
```

5. **注意事項**：
   - 保持原文段落順序
   - 確保中英文段落一一對應
   - 標點符號保持原樣
   - 使用簡體中文
   - 英文翻譯要準確
   - 生成完整的 HTML 頁面（包含所有必要的 HTML 標籤）

請開始轉換以下文字：
[在此貼上 PDF 文字內容]
```

---

## ✅ 檢查清單

生成後請確認：
- [ ] 包含完整的 HTML 結構（<!DOCTYPE>、<html>、<head>、<body>）
- [ ] 標題正確（故事 X - [標題] - Mandarin with Elisa）
- [ ] 引入了 `mini-story.css` 樣式
- [ ] 所有中文段落都有對應的英文段落
- [ ] HSK2+ 詞彙都有正確標記（如果使用快速版）
- [ ] `data-hsk` 屬性值為 2-6（如果使用快速版）
- [ ] `data-en` 屬性包含正確的英文翻譯（如果使用快速版）
- [ ] 標點符號正確
- [ ] 簡體中文
- [ ] 切換按鈕功能正常

---

## 🎯 範例輸出

正確的輸出應該像這樣（完整 HTML）：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>故事 6 - 照片 - Mandarin with Elisa</title>
    <link rel="stylesheet" href="../../../assets/css/mini-story.css">
</head>
<body>
    <div class="mini-story-container">
        <h1>故事 6 - 照片</h1>
        <button class="toggle-en-btn" onclick="toggleEnglish()">
            <span id="toggle-text">隐藏英文</span>
        </button>
        
        <p class="cn">他們<span class="vocab" data-hsk="3" data-en="marry">結婚</span>已經<span class="vocab" data-hsk="2" data-en="already">兩年</span>了。</p>
        <p class="en">They have been married for two years.</p>
        
        <p class="cn">丈夫<span class="vocab" data-hsk="2" data-en="husband">喜歡</span><span class="vocab" data-hsk="3" data-en="literature">文學</span>。</p>
        <p class="en">The husband likes literature.</p>
    </div>
    
    <script>
        function toggleEnglish() {
            document.body.classList.toggle('hide-en');
            document.getElementById('toggle-text').textContent = 
                document.body.classList.contains('hide-en') ? '显示英文' : '隐藏英文';
        }
    </script>
</body>
</html>
```

---

## ❓ 常見問題

**Q: 為什麼推薦快速版本？**
A: 快速版本讓 DeepSeek 一次生成完整 HTML，不需要手動貼到模板，速度更快，工作流程更簡單。

**Q: 如果 DeepSeek 生成的格式不完全正確怎麼辦？**
A: 可以手動微調，或者使用詳細版本指令，提供更多格式要求。

**Q: 如何判斷詞彙的 HSK 等級？**
A: 可以使用 HSK 詞彙表查詢，或讓 DeepSeek 根據常見標準判斷。如果不確定，可以標記為 HSK2。

**Q: 如果一個詞組有多個字，應該標記哪個？**
A: 標記整個詞組，例如「結婚」而不是「結」和「婚」分別標記。

**Q: 標點符號需要包含在 `<span>` 裡面嗎？**
A: 不需要，標點符號應該在 `<span>` 外面。

**Q: 如果不需要 HSK 標記怎麼辦？**
A: 使用「超簡化版本」，不包含 HSK 標記要求，生成速度會更快。
