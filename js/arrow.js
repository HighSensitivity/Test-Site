document.addEventListener('DOMContentLoaded', function() {
    const scrollTopButton = document.querySelector('.scroll-top');
    
    // Hide the scroll-top button initially
    scrollTopButton.style.display = 'none';

    // Show the scroll-top button when user scrolls past the middle of the page
    window.addEventListener('scroll', function() {
        const middleOfPage = window.innerHeight / 2;
        if (window.scrollY > middleOfPage) {
            scrollTopButton.style.display = 'block';
        } else {
            scrollTopButton.style.display = 'none';
        }
    });

    // Scroll to top functionality when the button is clicked
    scrollTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});