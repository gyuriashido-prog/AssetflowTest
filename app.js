document.addEventListener("DOMContentLoaded", () => {
    // Click Handler
    const heroSection = document.querySelector('.hero');
    
    if (heroSection) {
        heroSection.addEventListener('click', () => {
            // Ensure you have a login.html page, or change this link
            window.location.href = 'login.html'; 
        });
    }
});
