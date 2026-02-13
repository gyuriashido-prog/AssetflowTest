document.addEventListener("DOMContentLoaded", () => {
    // 1. Logic for Index -> Login (Hero Click)
    const heroSection = document.getElementById('hero-trigger');
    if (heroSection) {
        heroSection.style.cursor = 'pointer'; // Ensure cursor shows hand
        heroSection.addEventListener('click', () => {
            window.location.href = 'login.html'; 
        });
    }

    // 2. Logic for Login -> Index (Card Click)
    const loginCard = document.querySelector('.login-card');
    if (loginCard) {
        loginCard.style.cursor = 'pointer'; // Ensure cursor shows hand
        loginCard.addEventListener('click', (e) => {
            // Check if user clicked an input, button, or link
            const isInput = e.target.closest('input, button, a');
            
            // If they clicked the background of the card (not a form field), go back
            if (!isInput) {
                window.location.href = 'index.html';
            }
        });
    }
});
