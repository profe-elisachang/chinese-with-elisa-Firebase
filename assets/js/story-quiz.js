/**
 * 故事閱讀測驗系統
 * 支援選擇題和問答題的互動式測驗
 */

// ======================= Tab 切換功能 =======================
function switchStoryTab(tabName) {
    // 隱藏所有 tab 內容
    const allTabs = document.querySelectorAll('.story-tab-content');
    allTabs.forEach(tab => tab.classList.remove('active'));
    
    // 移除所有按鈕的 active 狀態
    const allButtons = document.querySelectorAll('.story-tab-button');
    allButtons.forEach(btn => btn.classList.remove('active'));
    
    // 顯示選中的 tab
    const selectedTab = document.getElementById(tabName + '-tab');
    if (selectedTab) {
        selectedTab.classList.add('active');
    }
    
    // 激活對應按鈕
    const clickedButton = event.target;
    if (clickedButton) {
        clickedButton.classList.add('active');
    }
}

// ======================= 測驗功能 =======================

/**
 * 檢查所有答案
 */
function checkAllAnswers() {
    // 檢查選擇題
    checkMultipleChoice();
    
    // 顯示問答題答案
    showOpenEndedAnswers();
    
    // 計算得分
    calculateScore();
    
    // 顯示統計
    showScoreSummary();
    
    // 隱藏「查看答案」按鈕，顯示「重新作答」
    const checkBtn = document.querySelector('.btn-check-answers');
    const resetBtn = document.querySelector('.btn-reset');
    if (checkBtn) checkBtn.style.display = 'none';
    if (resetBtn) resetBtn.style.display = 'block';
}

/**
 * 檢查選擇題答案
 */
function checkMultipleChoice() {
    const questions = document.querySelectorAll('[data-type="multiple-choice"]');
    
    questions.forEach((question, index) => {
        const qNum = index + 1;
        const selected = question.querySelector('input[type="radio"]:checked');
        const feedback = question.querySelector('.answer-feedback');
        const userChoice = question.querySelector('.user-choice');
        const correctAnswerEl = question.querySelector('.correct-answer-value');
        
        if (!correctAnswerEl) return;
        
        const correctAnswer = correctAnswerEl.textContent.trim();
        
        if (selected) {
            const selectedValue = selected.value;
            const isCorrect = selectedValue === correctAnswer;
            
            // 顯示反饋
            if (feedback) {
                feedback.style.display = 'block';
            }
            if (userChoice) {
                userChoice.textContent = selectedValue;
                userChoice.parentElement.classList.add(isCorrect ? 'correct' : 'incorrect');
            }
            
            // 視覺反饋
            question.classList.add(isCorrect ? 'answered-correct' : 'answered-incorrect');
        } else {
            // 未作答
            if (feedback) {
                feedback.style.display = 'block';
            }
            if (userChoice) {
                userChoice.textContent = '未作答';
                userChoice.parentElement.classList.add('incorrect');
            }
            question.classList.add('answered-incorrect');
        }
    });
}

/**
 * 顯示問答題答案
 */
function showOpenEndedAnswers() {
    const questions = document.querySelectorAll('[data-type="open-ended"]');
    
    questions.forEach((question) => {
        const textarea = question.querySelector('.answer-input');
        const userText = question.querySelector('.user-text');
        const feedback = question.querySelector('.answer-feedback');
        
        if (textarea && userText && feedback) {
            // 顯示用戶答案
            userText.textContent = textarea.value || '未作答';
            
            // 顯示參考答案
            feedback.style.display = 'block';
            
            // 標記為已回答
            question.classList.add('answered');
        }
    });
}

/**
 * 計算得分
 */
function calculateScore() {
    const mcQuestions = document.querySelectorAll('[data-type="multiple-choice"]');
    let mcCorrect = 0;
    let mcTotal = mcQuestions.length;
    
    mcQuestions.forEach((question) => {
        const selected = question.querySelector('input[type="radio"]:checked');
        const correctAnswerEl = question.querySelector('.correct-answer-value');
        
        if (selected && correctAnswerEl) {
            const correctAnswer = correctAnswerEl.textContent.trim();
            if (selected.value === correctAnswer) {
                mcCorrect++;
            }
        }
    });
    
    // 更新顯示
    const mcScoreEl = document.getElementById('mc-score');
    const mcTotalEl = document.getElementById('mc-total');
    const totalScoreEl = document.getElementById('total-score');
    const totalQuestionsEl = document.getElementById('total-questions');
    
    if (mcScoreEl) mcScoreEl.textContent = mcCorrect;
    if (mcTotalEl) mcTotalEl.textContent = mcTotal;
    if (totalScoreEl) totalScoreEl.textContent = mcCorrect;
    if (totalQuestionsEl) totalQuestionsEl.textContent = mcTotal;
}

/**
 * 顯示得分統計
 */
function showScoreSummary() {
    const scoreSummary = document.querySelector('.score-summary');
    if (scoreSummary) {
        scoreSummary.style.display = 'block';
    }
}

/**
 * 重置測驗
 */
function resetQuiz() {
    // 清除所有選擇
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.checked = false;
    });
    
    // 清除所有文字輸入
    document.querySelectorAll('.answer-input').forEach(textarea => {
        textarea.value = '';
    });
    
    // 隱藏所有反饋
    document.querySelectorAll('.answer-feedback').forEach(feedback => {
        feedback.style.display = 'none';
    });
    
    // 移除所有樣式類
    document.querySelectorAll('.question-item').forEach(item => {
        item.classList.remove('answered-correct', 'answered-incorrect', 'answered');
    });
    
    // 重置按鈕顯示
    const checkBtn = document.querySelector('.btn-check-answers');
    const resetBtn = document.querySelector('.btn-reset');
    const scoreSummary = document.querySelector('.score-summary');
    
    if (checkBtn) checkBtn.style.display = 'block';
    if (resetBtn) resetBtn.style.display = 'none';
    if (scoreSummary) scoreSummary.style.display = 'none';
}

// 頁面載入完成後初始化
document.addEventListener('DOMContentLoaded', function() {
    // 確保第一個 tab 是 active
    const firstTab = document.querySelector('.story-tab-content');
    if (firstTab && !firstTab.classList.contains('active')) {
        firstTab.classList.add('active');
    }
    
    const firstButton = document.querySelector('.story-tab-button');
    if (firstButton && !firstButton.classList.contains('active')) {
        firstButton.classList.add('active');
    }
});

