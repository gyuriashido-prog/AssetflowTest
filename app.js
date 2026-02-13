document.addEventListener("DOMContentLoaded", () => {
    
    // 1. ANIMATION LOGIC
    const elements = document.querySelectorAll('.fade-in');
    
    if (elements.length > 0) {
        elements.forEach((el, index) => {
            // Stagger the animation: 0ms, 300ms, 600ms...
            setTimeout(() => {
                el.classList.add('visible');
            }, index * 300);
        });
    }

    // 2. CLICK LOGIC
    const heroSection = document.querySelector('.hero');
    
    if (heroSection) {
        heroSection.addEventListener('click', () => {
            // Change 'login.html' to whatever page you want to open
            window.location.href = 'login.html'; 
        });
    }
});
