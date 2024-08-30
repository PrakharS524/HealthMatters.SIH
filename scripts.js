document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for nav links
    const navLinks = document.querySelectorAll('.nav-bar a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Basic search functionality
    const searchBar = document.getElementById('search-bar');
    searchBar.addEventListener('keyup', function(e) {
        const query = e.target.value.toLowerCase();
        const sections = document.querySelectorAll('.section');

        sections.forEach(section => {
            const heading = section.querySelector('h2').textContent.toLowerCase();
            if (heading.includes(query)) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    });
});
document.querySelectorAll('.moving-palette').forEach(palette => {
    const slider = palette.querySelector('.slider');

    // Pause the animation on hover
    palette.addEventListener('mouseover', () => {
        slider.style.animationPlayState = 'paused';
    });

    // Resume the animation when the hover ends
    palette.addEventListener('mouseout', () => {
        slider.style.animationPlayState = 'running';
    });
});
