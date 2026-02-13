document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Handle the Fade-in Animation
    const elements = document.querySelectorAll('.fade-in');
    
    elements.forEach((el, index) => {
        // We use setTimeout to create a delay between each item
        setTimeout(() => {
            el.classList.add('visible');
        }, index * 300); // 300ms delay multiplied by the index (0ms, 300ms, 600ms...)
    });

    // 2. Handle the Click on the Hero Section
    const heroSection = document.querySelector('.hero');
    
    if (heroSection) {
        heroSection.addEventListener('click', () => {
            // Navigate to login.html
            // Make sure you have a file named 'login.html' in your folder!
            window.location.href = 'login.html'; 
        });
    }
});
