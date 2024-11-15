
AOS.init({
    duration: 800, // Animation duration
    easing: 'ease-in-out', // Easing type
    once: true,
});

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
    }, 2000);
});

// Close dropdown if clicked outside
document.querySelectorAll('.dropdown-item > a').forEach(item => {
    item.addEventListener('click', () => {
        const dropdown = item.nextElementSibling;
        dropdown.classList.toggle('hidden');
    });
});


document.querySelectorAll('.dropdown-item > a').forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault();  // Prevents page navigation

        const dropdown = item.nextElementSibling;

        // Toggle the visibility of the clicked dropdown only
        dropdown.classList.toggle('hidden');
    });
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



const carouselTrack = document.getElementById('carouselTrack');
const dots = document.querySelectorAll('.carousel-dot');
let currentSlide = 0;
const totalSlides = dots.length;

function updateSlide(slideIndex) {
    // Calculate translation percentage and apply it
    const translatePercentage = -100 * slideIndex;
    carouselTrack.style.transform = `translateX(${translatePercentage}%)`;

    // Update dot colors for active/inactive states
    dots.forEach(dot => dot.classList.remove('bg-blue-500', 'bg-gray-300'));
    dots[slideIndex].classList.add('bg-blue-500');
}

function nextSlide() {
    // Increment slide and loop back to the first slide if necessary
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlide(currentSlide);
}

// Initialize the first slide as active
updateSlide(currentSlide);


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
    duration: 800, // Animation duration
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
    section.style.backgroundPosition = `center ${scrollPosition * 0.8}px`;  // Adjust the 0.5 factor for
});


function toggleAccordion(id) {
    const content = document.getElementById(`content-${id}`);
    const icon = document.getElementById(`icon-${id}`);

    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        icon.textContent = '-';
    } else {
        content.classList.add('hidden');
        icon.textContent = '+';
    }
}



// Fade-in animation on load
window.addEventListener('DOMContentLoaded', () => {
    const section = document.getElementById('fade-in-section');
    section.classList.add('opacity-100', 'transition-opacity', 'duration-1000');
});


// Toggle Accordion function with animation
function toggleAccordion(index) {
    const content = document.getElementById(`content-${index}`);
    const icon = document.getElementById(`icon-${index}`);

    if (content.style.maxHeight) {
        content.style.maxHeight = null;
        icon.classList.remove('rotate-45');
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
        icon.classList.add('rotate-45');
    }
}


document.addEventListener('DOMContentLoaded', function () {
    new Splide('#testimonial-carousel', {
        type: 'loop',
        perPage: 1,
        autoplay: true,
        interval: 5000,
        pauseOnHover: false,
    }).mount();
});




// CUSTOMER REVIEW
// Get elements
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const reviews = document.getElementById('reviews');

// Initialize carousel position
let currentIndex = 0;
const reviewCount = document.querySelectorAll('#reviews > div').length;

function updateCarouselPosition() {
    const offset = -currentIndex * 100; // Move left by 100% width per slide
    reviews.style.transform = `translateX(${offset}%)`;
}

// Handle next button click
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % reviewCount; // Loop back to the first review
    updateCarouselPosition();
});

// Handle prev button click
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + reviewCount) % reviewCount; // Loop back to the last review
    updateCarouselPosition();
});

// Auto move reviews every 5 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % reviewCount;
    updateCarouselPosition();
}, 5000);
