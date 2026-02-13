// This script adds a simple "reveal" animation when the page loads
document.addEventListener("DOMContentLoaded", () => {
    
    const elements = document.querySelectorAll('.fade-in');
    
    // Stagger the animation for each element
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('visible');
        }, index * 300); // 300ms delay between each item
    });
});
const heroSection = document.querySelector('.hero');

heroSection.addEventListener('click', () => {
    // Replace 'login.html' with the actual URL or filename
    window.location.href = 'login.html';
});
