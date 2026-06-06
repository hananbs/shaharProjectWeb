// مفت تمونے لكل قطیگوریہ
const galleryImages = {
    ballons: [
        'shaharImages/ballons/568914358_10230747394927808_6488479483311145136_n.jpg',
        'shaharImages/ballons/569410305_10230747412528248_3505374040485472279_n.jpg',
        'shaharImages/ballons/571151961_10230719748636668_3923899167496565402_n.jpg',
        'shaharImages/ballons/577000765_10230873807088033_6202438929573519915_n.jpg',
        'shaharImages/ballons/594967111_10231205881589688_5852845472798815031_n.jpg',
        'shaharImages/ballons/616544228_10231708145025960_5619565773202738474_n.jpg',
        'shaharImages/ballons/616820201_10231708148306042_8798418440909770184_n.jpg',
        'shaharImages/ballons/618097491_10231769424677913_3335886129564641286_n.jpg',
        'shaharImages/ballons/618480997_10231769419517784_4637678029298095661_n.jpg'
    ],
    food: [
        'shaharImages/food/540505335_10230093058729812_5069196991892535758_n.jpg',
        'shaharImages/food/560560382_10230835951781674_9188498317814671550_n.jpg',
        'shaharImages/food/560702489_10230594684750149_2434110380231643803_n.jpg',
        'shaharImages/food/571115644_10230766552406733_3036440818021546007_n.jpg',
        'shaharImages/food/571178460_10230766553126751_9060254337036363474_n.jpg',
        'shaharImages/food/571447978_10230835951661671_5913428809028236271_n.jpg',
        'shaharImages/food/573621741_10230835954301737_111569588078367145_n.jpg',
        'shaharImages/food/618814883_10231742693649654_8963389382696592442_n.jpg'
    ],
    meriage: [],
    games: [
        'shaharImages/games/562329455_10230673619563470_7141604543455030994_n.jpg',
        'shaharImages/games/565183566_10230673629363715_5094693120014039843_n.jpg',
        'shaharImages/games/565703357_10230673626683648_7839034388547848153_n.jpg',
        'shaharImages/games/565926661_10230673635683873_1782767656946776966_n.jpg',
        'shaharImages/games/566212664_10230673633363815_7005599594084486120_n.jpg',
        'shaharImages/games/566354557_10230673626123634_1097337628029676769_n.jpg',
        'shaharImages/games/567704049_10230673620123484_8493909869851752600_n.jpg'
    ]
};

const categoryNames = {
    ballons: 'סידורי בלונים',
    food: 'אוכל',
    meriage: 'הצעות נישואין',
    games: 'משחקים'
};

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    loadGalleryImages('ballons');
});

function navigateTo(viewId) {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
        mobileMenu.classList.add('hidden');
    }

    document.querySelectorAll('.page-view').forEach(view => {
        view.classList.remove('active');
    });

    const targetView = document.getElementById(`view-${viewId}`);
    if (targetView) {
        targetView.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function viewGalleryCategory(category) {
    navigateTo('gallery');
    setTimeout(() => switchGalleryCategory(category), 100);
}

function switchGalleryCategory(category) {
    document.querySelectorAll('.gallery-tab').forEach(tab => {
        tab.classList.remove('active', 'bg-amber-500', 'text-white', 'shadow-md');
        tab.classList.add('bg-slate-200', 'text-slate-700', 'hover:bg-slate-300');
    });

    const activeTab = document.querySelector(`[data-category="${category}"]`);
    if (activeTab) {
        activeTab.classList.remove('bg-slate-200', 'text-slate-700', 'hover:bg-slate-300');
        activeTab.classList.add('active', 'bg-amber-500', 'text-white', 'shadow-md');
    }

    loadGalleryImages(category);
}

function loadGalleryImages(category) {
    const container = document.getElementById('gallery-container');
    const images = galleryImages[category] || [];

    if (images.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px;">
                <p style="font-size: 18px; color: #999; margin-bottom: 12px;">אין תמונות זמינות בקטגוריה זו כרגע.</p>
                <p style="font-size: 14px; color: #bbb;">אנא בדוק שוב בקרוב או צור איתנו קשר לפרטים נוספים.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = images.map((imagePath, index) => `
        <div class="gallery-item">
            <img
                src="${imagePath}"
                alt="תמונה ${index + 1}"
                onerror="this.src='https://images.unsplash.com/photo-1551632440-0121d4af7d0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'"
            >
        </div>
    `).join('');
}
