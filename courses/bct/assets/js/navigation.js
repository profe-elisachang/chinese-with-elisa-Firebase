// ==================== Lesson Configuration ====================
// 🎯 維護指南: 新增課程時,只需在這裡添加課程資訊即可!
const LESSON_CONFIG = {
    availableLessons: [
        { id: 1, title: 'Business Greetings', subtitle: '商务问候' },
        { id: 2, title: 'Office Communication', subtitle: '办公室沟通' },
        // 🔥 新增課程時,在這裡添加:
        // { id: 3, title: 'Meeting Preparation', subtitle: '会议准备' },
        // { id: 4, title: 'Email Writing', subtitle: '邮件写作' },
    ],
    showComingSoon: 0  // 顯示多少個 "Coming Soon" 預告 (0 = 不顯示預告)
};

// Export to global scope for use in lesson.html
window.LESSON_CONFIG = LESSON_CONFIG;

// ==================== Render Lesson Navigation (BBC Style) ====================
function renderLessonNavigation() {
    const currentLesson = getLessonIdFromURL();
    const currentNum = parseInt(currentLesson);

    const lessonNumbers = document.getElementById('lessonNumbers');
    const lessonDropdown = document.getElementById('lessonDropdown');

    if (!lessonNumbers || !lessonDropdown) return;

    // 獲取可用課程 ID 列表
    const availableIds = LESSON_CONFIG.availableLessons.map(lesson => lesson.id);
    const maxAvailableId = Math.max(...availableIds);

    // 計算要顯示的最大課程編號 (已有課程 + Coming Soon 預告)
    const displayMax = maxAvailableId + LESSON_CONFIG.showComingSoon;

    // Generate BBC-style horizontal bars for desktop
    let barsHTML = '';
    for (let i = 1; i <= displayMax; i++) {
        const isActive = i === currentNum;
        const isAvailable = availableIds.includes(i);
        const disabledClass = !isAvailable ? 'disabled' : '';

        barsHTML += `
            <div class="lesson-unit">
                <div class="lesson-bar ${isActive ? 'active' : ''} ${disabledClass}"
                     ${isAvailable ? `onclick="navigateToLesson(${i})"` : ''}
                     title="L${i}${!isAvailable ? ' (Coming Soon)' : ''}">
                </div>
                <span class="lesson-label">${i}</span>
            </div>
        `;
    }
    lessonNumbers.innerHTML = barsHTML;

    // Generate dropdown options for mobile
    let dropdownHTML = '<option value="">-- 选择课程 --</option>';
    for (let i = 1; i <= displayMax; i++) {
        const isSelected = i === currentNum;
        const isAvailable = availableIds.includes(i);
        const lessonInfo = LESSON_CONFIG.availableLessons.find(l => l.id === i);
        const lessonTitle = lessonInfo ? `L${i} - ${lessonInfo.title}` : `L${i} (Coming Soon)`;

        dropdownHTML += `
            <option value="${i}" ${isSelected ? 'selected' : ''} ${!isAvailable ? 'disabled' : ''}>
                ${lessonTitle}
            </option>
        `;
    }
    lessonDropdown.innerHTML = dropdownHTML;
}

// ==================== Navigate to Lesson ====================
function navigateToLesson(lessonNum) {
    if (typeof lessonNum === 'string') {
        lessonNum = parseInt(lessonNum);
    }
    if (lessonNum && lessonNum > 0) {
        window.location.href = `lesson.html?lesson=${lessonNum}`;
    }
}

// ==================== Get Lesson ID from URL ====================
function getLessonIdFromURL() {
    // 優先檢查 query parameter (lesson.html?lesson=X)
    const urlParams = new URLSearchParams(window.location.search);
    const lessonParam = urlParams.get('lesson');
    if (lessonParam) {
        return parseInt(lessonParam);
    }

    // 兼容舊格式 (lesson-X.html)
    const path = window.location.pathname;
    const match = path.match(/lesson-(\d+)/);
    return match ? parseInt(match[1]) : null;
}

// ==================== Initialize Navigation ====================
document.addEventListener('DOMContentLoaded', function() {
    renderLessonNavigation();
});
