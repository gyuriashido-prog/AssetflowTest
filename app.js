document.addEventListener("DOMContentLoaded", () => {
    
    /* =========================================
       1. MOBILE VIEWPORT HEIGHT FIX
       ========================================= */
    // This calculates the real height of mobile screens to prevent
    // the address bar from covering your bottom menu.
    const setAppHeight = () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    // Run on load and whenever the user resizes/rotates screen
    window.addEventListener('resize', setAppHeight);
    setAppHeight();


    /* =========================================
       2. SMOOTH SCROLLING (New Feature)
       ========================================= */
    // This finds any link starting with '#' (like #features) 
    // and scrolls to it smoothly.
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Stop instant jump
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });


    /* =========================================
       3. HERO INTERACTION (Index -> Login)
       ========================================= */
    const heroSection = document.getElementById('hero-trigger');
    
    if (heroSection) {
        heroSection.addEventListener('click', (e) => {
            // Safety Check: If you add buttons/links inside the Hero later, 
            // clicking them won't trigger this redirect.
            if (e.target.closest('a') || e.target.closest('button')) {
                return; 
            }

            // Redirect to login
            window.location.href = 'login.html';
        });
    }


    /* =========================================
       4. LOGIN CARD INTERACTION (Background -> Home)
       ========================================= */
    const loginWrapper = document.querySelector('.login-wrapper');
    const loginCard = document.querySelector('.login-card');

    if (loginWrapper && loginCard) {
        loginWrapper.addEventListener('click', (e) => {
            
            // If the click is INSIDE the card, let the user type/click buttons
            if (loginCard.contains(e.target)) {
                return;
            }

            // If the click is OUTSIDE the card (on the dark background), go Home
            window.location.href = 'index.html';
        });
    }
});
