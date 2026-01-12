// ==================== Tab Management ==================== 

// 設置導覽連結的活躍狀態
document.addEventListener('DOMContentLoaded', function() {
    setActiveNavLink();
});

function setActiveNavLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        
        if (currentPath.includes('lesson-') && href.includes('lessons')) {
            link.classList.add('active');
        } else if (currentPath.endsWith('index.html') || currentPath.endsWith('/') || currentPath.includes('courses/bct/')) {
            if (href === './' || href.endsWith('index.html')) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        } else if (currentPath.includes('lessons/index.html')) {
            if (href.includes('lessons')) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        } else {
            link.classList.remove('active');
        }
    });
}

// ==================== Utility Functions ====================

/**
 * 延遲執行函數
 */
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * 記錄調試信息
 */
function debugLog(message, data = null) {
    console.log(`[BCT Learning] ${message}`, data || '');
}

/**
 * 更新頁面標題
 */
function updatePageTitle(title) {
    document.title = title;
}

/**
 * 滾動到頂部
 */
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ==================== Export Functions ====================
// (如果需要在其他檔案中使用)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        setActiveNavLink,
        delay,
        debugLog,
        updatePageTitle,
        scrollToTop
    };
}