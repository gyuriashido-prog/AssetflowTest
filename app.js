document.addEventListener("DOMContentLoaded", () => {
    const heroSection = document.getElementById('hero-trigger');
    
    if (heroSection) {
        heroSection.addEventListener('click', () => {
            // Redirects specifically to your local login page
            window.location.href = 'login.html'; 
        });
    }
});
