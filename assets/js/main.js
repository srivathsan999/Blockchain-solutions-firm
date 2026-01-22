// Theme Toggle Functionality
(function() {
    // Check for saved theme preference or default to light mode
    const getTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            return savedTheme;
        }
        // Check system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        return 'light';
    };

    // Apply theme
    const applyTheme = (theme) => {
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(theme);
        localStorage.setItem('theme', theme);
        
        // Update toggle button icons (sun for dark mode, moon for light mode)
        const toggleButtons = document.querySelectorAll('[data-theme-toggle]');
        toggleButtons.forEach(btn => {
            const sunIcon = btn.querySelector('[data-sun-icon]');
            const moonIcon = btn.querySelector('[data-moon-icon]');
            
            if (theme === 'dark') {
                // Show sun icon (to switch to light mode)
                if (sunIcon) sunIcon.classList.remove('hidden');
                if (moonIcon) moonIcon.classList.add('hidden');
            } else {
                // Show moon icon (to switch to dark mode)
                if (sunIcon) sunIcon.classList.add('hidden');
                if (moonIcon) moonIcon.classList.remove('hidden');
            }
        });
    };

    // Initialize theme on page load
    document.addEventListener('DOMContentLoaded', () => {
        const theme = getTheme();
        applyTheme(theme);

        // Add event listeners to all theme toggle buttons
        const toggleButtons = document.querySelectorAll('[data-theme-toggle]');
        toggleButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
                const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
                applyTheme(newTheme);
            });
        });

        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
        }

        // Initialize animations on page load
        initializeAnimations();
    });

    // Animation initialization
    function initializeAnimations() {
        // Trigger fade-in animations on page load
        const animatedElements = document.querySelectorAll('.animate-fade-in, .animate-fade-in-up, .animate-fade-in-down, .animate-slide-in-left, .animate-slide-in-right, .animate-scale-in');
        animatedElements.forEach((el, index) => {
            setTimeout(() => {
                el.style.opacity = '1';
            }, index * 100);
        });

        // Intersection Observer for scroll-triggered animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.animationPlayState = 'running';
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe all animated elements
        animatedElements.forEach(el => {
            observer.observe(el);
        });

        // Add hover effects to cards
        const cards = document.querySelectorAll('.card-hover, .hover-lift');
        cards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transition = 'all 0.3s ease';
            });
        });
    }
})();

