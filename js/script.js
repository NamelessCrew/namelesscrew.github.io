// 页面功能脚本
document.addEventListener('DOMContentLoaded', function() {
    // ===== 导航：点击平滑滚动 + 滚动高亮 =====
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('#home, #news, #publications, #experience, #awards');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = document.querySelector(this.getAttribute('href'));
            if (targetSection) {
                const offsetTop = targetSection.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 滚动时更新导航高亮
    function updateActiveNav() {
        let current = '';
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const sectionTop = rect.top + window.scrollY;
            const sectionHeight = rect.height;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
        });
    }

    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            window.cancelAnimationFrame(scrollTimeout);
        }
        scrollTimeout = window.requestAnimationFrame(updateActiveNav);
    });

    // 初始化时更新一次
    updateActiveNav();

    // 导航栏阴影随滚动增强
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        navbar.style.boxShadow = window.pageYOffset > 0
            ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            : '0 1px 3px 0 rgba(0, 0, 0, 0.1)';
    });

    // ===== 黑白主题切换 =====
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('i');
    const isDark = () => document.documentElement.classList.contains('dark');

    themeToggle.addEventListener('click', () => {
        const dark = !isDark();
        document.documentElement.classList.toggle('dark', dark);
        localStorage.setItem('theme', dark ? 'dark' : 'light');
        themeIcon.className = dark ? 'fas fa-sun' : 'fas fa-moon';
    });

    // 同步按钮图标
    themeIcon.className = isDark() ? 'fas fa-sun' : 'fas fa-moon';
});

// 在控制台输出一些有趣的信息
console.log('🎓 Welcome to my academic homepage!');
console.log(`📚 Currently showcasing ${document.querySelectorAll('.publication-item').length} publications`);

// 回到顶部按钮功能
const backToTopButton = document.getElementById('backToTop');

// 显示/隐藏回到顶部按钮
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

// 点击回到顶部
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
