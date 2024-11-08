
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

window.addEventListener('load', () => {
    document.querySelectorAll('.animate-slide-in').forEach(element => {
        element.classList.add('opacity-0');
        setTimeout(() => {
            element.classList.add('opacity-100');
        }, 100);
    });
});


// Select all elements with the 'counter' class
document.querySelectorAll('.counter').forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-count');
        const speed = 200; // Adjust this for faster/slower animation
        const increment = target / speed;
        const count = +counter.innerText;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 20);
        } else {
            counter.innerText = target;
        }
    };

    updateCount();
});


AOS.init({
    offset: 200, // Start the animation when the element is 200px away from the viewport
    duration: 1000, // Animation duration
    easing: 'ease-in-out', // Easing function for the animation
    once: true, // Animate only once (not on every scroll)
});

// Parallax effect
document.addEventListener("scroll", function () {
    const bg = document.querySelector('section');
    const offset = window.pageYOffset;
    bg.style.backgroundPosition = `center ${offset * 0.5}px`;
});


// Parallax effect for background scroll
window.addEventListener('scroll', function () {
    let scrollPosition = window.scrollY;
    const section = document.querySelector('section');

    // Move the background image at a slower pace for parallax effect
    section.style.backgroundPosition = `center ${scrollPosition * 0.8}px`;  // Adjust the 0.5 factor for the desired effect
});



