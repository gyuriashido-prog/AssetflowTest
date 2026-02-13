document.addEventListener("DOMContentLoaded", () => {
    // Reveal Animation
    const elements = document.querySelectorAll('.fade-in');
    
    // Stagger the animation for each element
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('visible');
        }, index * 300); // 300ms delay between each item
    });

    // Click handler for Hero section
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.addEventListener('click', () => {
            // Ensure this file exists in your repo, or change to full URL
            window.location.href = 'login.html'; 
        });
    }
});
