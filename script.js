// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu elements
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');
    const body = document.body;

    // Toggle mobile menu function
    const toggleMobileMenu = () => {
        navLinks.classList.toggle('active');
        burgerMenu.classList.toggle('active');
        body.classList.toggle('no-scroll');
    };

    // Close mobile menu function
    const closeMobileMenu = () => {
        navLinks.classList.remove('active');
        burgerMenu.classList.remove('active');
        body.classList.remove('no-scroll');
    };

    // Burger menu click handler
    burgerMenu.addEventListener('click', toggleMobileMenu);

    // Nav item click handlers
    navItems.forEach(item => {
        item.addEventListener('click', closeMobileMenu);
    });

    // Close menu on window resize (desktop breakpoint)
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            closeMobileMenu();
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!burgerMenu.contains(e.target) && !navLinks.contains(e.target)) {
            closeMobileMenu();
        }
    });
});