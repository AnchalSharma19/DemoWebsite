
AOS.init();

// Dropdown Menu

const menuToggle = document.getElementById('menu-toggle');
const dropdownMenu = document.getElementById('dropdown-menu');

// Toggle dropdown menu visibility
menuToggle.addEventListener('click', () => {
    dropdownMenu.classList.toggle('show');  // Toggle the 'show' class to display the menu
    // Add animation classes for smooth transition
    dropdownMenu.classList.add('animate__animated', 'animate__fadeInRight');

    // Ensure the animation happens only once per toggle
    setTimeout(() => {
        dropdownMenu.classList.remove('animate__animated', 'animate__fadeInRight');
    }, 2000); // The animation lasts around 2 second
});

// Close dropdown if clicked outside
window.addEventListener('click', (e) => {
    if (!dropdownMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        dropdownMenu.classList.remove('show');  // Hide the dropdown when clicking outside
    }
});


// Services 


function goToSlide(slideIndex) {
    const carouselTrack = document.getElementById('carouselTrack');
    const dots = document.querySelectorAll('.carousel-dot');

    // Update the transform style to slide to the correct position
    carouselTrack.style.transform = `translateX(-${slideIndex * 100}%)`;

    // Update dot styles
    dots.forEach(dot => dot.classList.remove('bg-blue-500'));
    dots[slideIndex].classList.add('bg-blue-500');
}