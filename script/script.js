
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
});


document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const dropdownMenu = document.getElementById('dropdown-menu');

    if (menuToggle && dropdownMenu) {
        // Toggle the dropdown menu when the hamburger button is clicked
        menuToggle.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent event from propagating
            dropdownMenu.classList.toggle('hidden'); // Toggle visibility
            dropdownMenu.classList.toggle('show');   // Add/Remove show class for visibility
        });

        document.addEventListener('click', (event) => {
            if (!dropdownMenu.contains(event.target) && event.target !== menuToggle) {
                dropdownMenu.classList.add('hidden');
                dropdownMenu.classList.remove('show');
            }
        });
    }

    document.querySelectorAll('.dropdown-item > a').forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            const dropdown = item.nextElementSibling;
            if (dropdown) {
                dropdown.classList.toggle('hidden');
            }
        });
    });
});


// Services 
function goToSlide(slideIndex) {
    const carouselTrack = document.getElementById('carouselTrack');
    const dots = document.querySelectorAll('.carousel-dot');

    carouselTrack.style.transform = `translateX(-${slideIndex * 100}%)`;
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
    const translatePercentage = -100 * slideIndex;
    carouselTrack.style.transform = `translateX(${translatePercentage}%)`;
    dots.forEach(dot => dot.classList.remove('bg-blue-500', 'bg-gray-300'));
    dots[slideIndex].classList.add('bg-blue-500');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlide(currentSlide);
}

updateSlide(currentSlide);



// Select all elements with the 'counter' class
document.querySelectorAll('.counter').forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-count');
        const speed = 200;
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


// CUSTOMER REVIEW
const carousel = document.getElementById('carousel');
const carouselPrev = document.getElementById('carouselPrev');
const carouselNext = document.getElementById('carouselNext');

let current = 0;
let visibleCards = getVisibleCards();
const totalItems = carousel.children.length;

function getVisibleCards() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1024) {
        return 3; // Laptop/Desktop
    } else if (screenWidth >= 768) {
        return 2; // Tablet
    } else {
        return 1; // Mobile
    }
}


function updateCarousel() {
    const cardWidth = carousel.children[0].offsetWidth + 32;
    carousel.style.transform = `translateX(-${current * cardWidth}px)`;
}


carouselNext.addEventListener('click', () => {
    if (current + visibleCards < totalItems) {
        current += visibleCards;
    } else {
        current = 0;
    }
    updateCarousel();
});


carouselPrev.addEventListener('click', () => {
    if (current - visibleCards >= 0) {
        current -= visibleCards;
    } else {
        current = totalItems - visibleCards;
    }
    updateCarousel();
});


window.addEventListener('resize', () => {
    visibleCards = getVisibleCards();
    current = 0;
    updateCarousel();
});


updateCarousel();



AOS.init({
    offset: 200,
    duration: 800,
    easing: 'ease-in-out',
    once: true,
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
    section.style.backgroundPosition = `center ${scrollPosition * 0.8}px`;
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

// service page

const { motion } = framerMotion;
document.querySelectorAll('[id^="card"]').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.05)';
        card.style.transition = 'transform 0.3s ease-in-out';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const menuItems = document.querySelectorAll("#sidebar-menu a");

    menuItems.forEach(item => {
        item.addEventListener("click", () => {
            menuItems.forEach(i => i.classList.remove("text-blue-600", "border-blue-500"));
            i.classList.add("text-gray-700", "border-transparent");

            item.classList.add("text-blue-600", "border-blue-500");
            item.classList.remove("text-gray-700", "border-transparent");
        });
    });
});