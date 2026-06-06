// האזנה לאירועים מרכזיים כשה-DOM נטען
document.addEventListener('DOMContentLoaded', () => {
    // הגדרת משתנים לתפריט המובייל
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    // פתיחה וסגירה של המבורגר
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
});

// פונקציית ניווט בין ה"עמודים"
function navigateTo(viewId) {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
        mobileMenu.classList.add('hidden'); // סגירת תפריט מובייל בעת לחיצה
    }
    
    // הסתרת כל התצוגות
    document.querySelectorAll('.page-view').forEach(view => {
        view.classList.remove('active');
    });
    
    // הצגת התצוגה המבוקשת
    const targetView = document.getElementById(`view-${viewId}`);
    if (targetView) {
        targetView.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' }); // גלילה למעלה
    }
}