/**
 * 识字课程 - 通用 JavaScript 功能
 * 包含：Tab 切换、练习题互动、详情展开/折叠
 */

// ======================= Tab 切换功能 =======================
function switchTab(tabId) {
    // 隐藏所有 tab 内容
    const allTabs = document.querySelectorAll('.tab-content');
    allTabs.forEach(tab => tab.classList.remove('active'));
    
    // 移除所有按钮的 active 状态
    const allButtons = document.querySelectorAll('.tab-button');
    allButtons.forEach(btn => btn.classList.remove('active'));
    
    // 显示选中的 tab
    const selectedTab = document.getElementById(tabId + '-tab');
    if (selectedTab) {
        selectedTab.classList.add('active');
    }
    
    // 激活对应按钮
    const selectedButton = event.target;
    selectedButton.classList.add('active');
}

// ======================= 详情展开/折叠 =======================
/**
 * 展开或折叠所有 <details> 元素
 * @param {boolean} expand - true 为展开，false 为折叠
 */
function toggleAllDetails(expand) {
    const detailsElements = document.querySelectorAll('details');
    detailsElements.forEach(detail => {
        detail.open = expand;
    });
}

// ======================= 练习题互动 =======================

// 存储用户选择
let userAnswers = {};
let selectedBlanks = {};

/**
 * 选择填空题的空白位置
 */
function selectBlank(questionId, position) {
    if (!selectedBlanks[questionId]) {
        selectedBlanks[questionId] = [];
    }
    
    // 清除该题之前的选择
    const blanks = document.querySelectorAll(`[data-position]`);
    blanks.forEach(blank => {
        if (blank.closest('.question-card') && 
            blank.closest('.question-card').querySelector('.question-number').textContent.startsWith(questionId + '.')) {
            blank.classList.remove('selected');
        }
    });
    
    // 选中当前空白
    event.target.classList.add('selected');
    selectedBlanks[questionId] = position;
}

/**
 * 选择选择题选项
 */
function selectChoice(questionId, choice, element) {
    // 清除该题之前的选择
    const choices = element.parentElement.querySelectorAll('.choice-btn');
    choices.forEach(btn => btn.classList.remove('selected'));
    
    // 选中当前选项
    element.classList.add('selected');
    userAnswers[questionId] = choice;
}

/**
 * 检查答案
 */
function checkAnswer(questionId, correctAnswer) {
    const feedback = document.getElementById('feedback' + questionId);
    let userAnswer;
    
    // 判断是填空题还是选择题
    if (selectedBlanks[questionId]) {
        userAnswer = selectedBlanks[questionId];
    } else {
        userAnswer = userAnswers[questionId];
    }
    
    if (!userAnswer) {
        feedback.textContent = '请先选择答案！';
        feedback.className = 'feedback incorrect';
        return;
    }
    
    if (userAnswer === correctAnswer) {
        feedback.textContent = '✓ 正确！';
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = '✗ 错误，正确答案是 ' + correctAnswer;
        feedback.className = 'feedback incorrect';
    }
    
    updateProgress();
}

/**
 * 更新练习进度
 */
function updateProgress() {
    const totalQuestions = document.querySelectorAll('.question-card').length;
    const answeredQuestions = Object.keys(userAnswers).length + Object.keys(selectedBlanks).length;
    const percentage = Math.round((answeredQuestions / totalQuestions) * 100);
    
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-percent');
    
    if (progressBar) {
        progressBar.style.width = percentage + '%';
    }
    if (progressText) {
        progressText.textContent = percentage + '%';
    }
}

// ======================= 页面加载完成后执行 =======================
document.addEventListener('DOMContentLoaded', function() {
    console.log('识字课程页面已加载');
    
    // 初始化第一个 tab 为 active
    const firstTab = document.querySelector('.tab-content');
    if (firstTab) {
        firstTab.classList.add('active');
    }
    
    const firstButton = document.querySelector('.tab-button');
    if (firstButton) {
        firstButton.classList.add('active');
    }
});
