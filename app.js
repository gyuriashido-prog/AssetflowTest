document.addEventListener("DOMContentLoaded", () => {
    
    // 1. MOBILE VIEWPORT HEIGHT FIX
    // This fixes the issue where the URL bar covers the bottom of your app
    const setAppHeight = () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    // Run on load and on resize
    window.addEventListener('resize', setAppHeight);
    setAppHeight();


    // 2. HERO INTERACTION (Index -> Login)
    const heroSection = document.getElementById('hero-trigger');
    
    if (heroSection) {
        heroSection.addEventListener('click', () => {
            // Simple redirect
            window.location.href = 'login.html';
        });
    }


    // 3. LOGIN CARD INTERACTION (Background Click -> Home)
    const loginWrapper = document.querySelector('.login-wrapper');
    const loginCard = document.querySelector('.login-card');

    // If we are on the login page...
    if (loginWrapper && loginCard) {
        
        // Listen for clicks on the entire wrapper (the dark background)
        loginWrapper.addEventListener('click', (e) => {
            
            // If the click is INSIDE the card, do nothing (let them type)
            if (loginCard.contains(e.target)) {
                return;
            }

            // If the click is OUTSIDE the card (on the background), go home
            window.location.href = 'index.html';
        });
    }
});
