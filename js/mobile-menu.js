// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.querySelector('[aria-controls="mobile-menu"]');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcons = mobileMenuButton.querySelectorAll('svg');

    // Add transition styles
    mobileMenu.style.transition = 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out, background-color 0.3s ease-in-out';
    mobileMenu.style.transform = 'translateY(-10px)';
    mobileMenu.style.opacity = '0';
    mobileMenu.style.display = 'none';
    mobileMenu.style.backgroundColor = '#1f2937'; // Set background color explicitly

    mobileMenuButton.addEventListener('click', () => {
        const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
        mobileMenuButton.setAttribute('aria-expanded', !isExpanded);

        // Toggle icons
        menuIcons.forEach(icon => icon.classList.toggle('hidden'));

        // Toggle menu with animation
        if (!isExpanded) {
            mobileMenu.style.display = 'block';
            // Trigger reflow
            mobileMenu.offsetHeight;
            mobileMenu.style.transform = 'translateY(0)';
            mobileMenu.style.opacity = '1';
            mobileMenu.style.backgroundColor = '#1f2937'; // Ensure background color is set when showing
        } else {
            mobileMenu.style.transform = 'translateY(-10px)';
            mobileMenu.style.opacity = '0';
            setTimeout(() => {
                mobileMenu.style.display = 'none';
            }, 300);
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target) && mobileMenu.style.display === 'block') {
            mobileMenuButton.click();
        }
    });

    // Add smooth transition to menu items
    const menuItems = mobileMenu.querySelectorAll('a');
    menuItems.forEach((item, index) => {
        item.style.transition = 'all 0.3s ease-in-out';
        item.style.transitionDelay = `${index * 0.05}s`;
        item.style.opacity = '0';
        item.style.transform = 'translateX(-10px)';
    });

    // Animate menu items when opening
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.target.style.display === 'block') {
                menuItems.forEach((item) => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateX(0)';
                });
            } else {
                menuItems.forEach((item) => {
                    item.style.opacity = '0';
                    item.style.transform = 'translateX(-10px)';
                });
            }
        });
    });

    observer.observe(mobileMenu, { attributes: true, attributeFilter: ['style'] });
}); 