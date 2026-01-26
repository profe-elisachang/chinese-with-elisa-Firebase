# 故事閱讀測驗數據格式規範

本文檔說明如何為故事閱讀測驗建立題目數據，供 AI 自動生成或手動編寫使用。

## 題目結構要求

每個故事的測驗應包含：
- **6-10 個選擇題**（單選題）
- **3-5 個問答題**（開放式問題）

## HTML 格式範例

### 選擇題格式

```html
<div class="question-item" data-type="multiple-choice">
    <div class="question-number">1.</div>
    <div class="question-text">問題內容？</div>
    <div class="options">
        <label>
            <input type="radio" name="q1" value="A">
            <span>A. 選項A</span>
        </label>
        <label>
            <input type="radio" name="q2" value="B">
            <span>B. 選項B</span>
        </label>
        <label>
            <input type="radio" name="q3" value="C">
            <span>C. 選項C</span>
        </label>
    </div>
    <div class="answer-feedback" style="display: none;">
        <div class="correct-answer">
            <strong>正確答案：</strong>A. 選項A
            <span class="correct-answer-value">A</span>
        </div>
        <div class="user-answer">
            <strong>您的答案：</strong><span class="user-choice"></span>
        </div>
    </div>
</div>
```

**重要注意事項：**
- `name` 屬性必須唯一（q1, q2, q3...）
- `value` 必須是 A, B, C 等單一字母
- `correct-answer-value` 必須與正確選項的 `value` 一致
- `answer-feedback` 必須設定 `style="display: none;"`

### 問答題格式

```html
<div class="question-item" data-type="open-ended">
    <div class="question-number">1.</div>
    <div class="question-text">問題內容？</div>
    <textarea 
        class="answer-input" 
        placeholder="請輸入您的答案..."
        rows="4"
    ></textarea>
    <div class="answer-feedback" style="display: none;">
        <div class="correct-answer">
            <strong>參考答案：</strong>
            <p>這裡是參考答案的詳細內容...</p>
        </div>
        <div class="user-answer">
            <strong>您的答案：</strong>
            <p class="user-text"></p>
        </div>
    </div>
</div>
```

**重要注意事項：**
- `answer-feedback` 必須設定 `style="display: none;"`
- 參考答案應包含完整的解釋或說明

## JSON 格式（供 AI 生成使用）

如果使用 AI 生成，可以輸出 JSON 格式，然後轉換為 HTML：

```json
{
  "storyTitle": "故事標題",
  "multipleChoice": [
    {
      "number": 1,
      "question": "問題內容？",
      "options": [
        {"label": "A", "text": "選項A"},
        {"label": "B", "text": "選項B"},
        {"label": "C", "text": "選項C"}
      ],
      "correctAnswer": "A",
      "explanation": "可選：解釋為什麼這個答案是正確的"
    }
  ],
  "openEnded": [
    {
      "number": 1,
      "question": "問題內容？",
      "referenceAnswer": "參考答案的完整內容，應該包含詳細的解釋和說明。"
    }
  ]
}
```

## 題目設計建議

### 選擇題
- 問題應基於故事內容，測試理解能力
- 選項應清晰明確，避免模糊
- 錯誤選項應具有迷惑性，但明顯錯誤
- 涵蓋故事的主要情節、人物、主題

### 問答題
- 問題應鼓勵學生思考和表達
- 可以問「為什麼」、「如何」、「什麼道理」等
- 參考答案應提供完整的解釋
- 可以包含多個要點

## 完整範例

請參考 `story-1.html` 中的練習題部分作為完整範例。

## 注意事項

1. 所有題目必須放在 `<div id="quiz-tab" class="story-tab-content">` 內
2. 選擇題和問答題應分別放在 `<section class="quiz-section">` 中
3. 控制按鈕和得分統計必須包含在測驗容器中
4. 確保所有 `name` 屬性唯一
5. 確保所有 `correct-answer-value` 與正確答案一致

