document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.querySelector('[aria-controls="mobile-menu"]');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuOpenIcon = document.querySelector('.block.h-6.w-6');
    const menuCloseIcon = document.querySelector('.hidden.h-6.w-6');

    let isMenuOpen = false;

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        
        // Toggle menu visibility
        mobileMenu.classList.toggle('hidden', !isMenuOpen);
        
        // Toggle icons
        menuOpenIcon.classList.toggle('hidden', isMenuOpen);
        menuCloseIcon.classList.toggle('hidden', !isMenuOpen);
        
        // Update aria-expanded
        mobileMenuButton.setAttribute('aria-expanded', isMenuOpen);
    }

    // Add click event listener to menu button
    mobileMenuButton.addEventListener('click', toggleMenu);

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInside = mobileMenuButton.contains(event.target) || mobileMenu.contains(event.target);
        if (!isClickInside && isMenuOpen) {
            toggleMenu();
        }
    });
}); 