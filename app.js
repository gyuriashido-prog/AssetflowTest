document.addEventListener("DOMContentLoaded", () => {
    // We removed the animation code from here because CSS handles it now.
    // This is safer and prevents the "invisible text" bug.

    const heroSection = document.querySelector('.hero');
    
    if (heroSection) {
        heroSection.addEventListener('click', () => {
            // Ensure this file exists in your repository!
            window.location.href = 'login.html'; 
        });
    }
});
