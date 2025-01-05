
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
});


// Navbar 
/*document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const dropdownMenu = document.getElementById('dropdown-menu');

    if (menuToggle && dropdownMenu) {
        menuToggle.addEventListener('click', (event) => {
            event.stopPropagation();
            dropdownMenu.classList.toggle('hidden');
            dropdownMenu.classList.toggle('show');
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


function toggleDropdown(dropdownId) {
    var dropdown = document.getElementById(dropdownId);
    dropdown.classList.toggle('hidden');
}*/

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const dropdownMenu = document.getElementById('dropdown-menu');

    if (menuToggle && dropdownMenu) {
        menuToggle.addEventListener('click', (event) => {
            event.stopPropagation();
            dropdownMenu.classList.toggle('hidden');
            dropdownMenu.classList.toggle('show');
        });

        document.addEventListener('click', (event) => {
            if (!dropdownMenu.contains(event.target) && event.target !== menuToggle) {
                dropdownMenu.classList.add('hidden');
                dropdownMenu.classList.remove('show');
            }
        });
    }

    document.querySelectorAll('.dropdown-icon').forEach(icon => {
        icon.addEventListener('click', (event) => {
            event.stopPropagation();
            const dropdown = icon.nextElementSibling;
            if (dropdown) {
                dropdown.classList.toggle('hidden');
                dropdown.classList.toggle('show');
            }
        });
    });
});


// Services Carousel

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


// Swipe functionality ( Service Carousel)
let startX = 0;
let currentX = 0;
let isDragging = false;

const handleTouchStart = (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
};

const handleTouchMove = (e) => {
    if (!isDragging) return;
    currentX = e.touches[0].clientX;
    const diffX = currentX - startX;

    carouselTrack.style.transform = `translateX(${-(currentSlide * 100) + diffX / window.innerWidth * 100}%)`;
};

const handleTouchEnd = () => {
    if (!isDragging) return;
    const diffX = currentX - startX;

    if (Math.abs(diffX) > 50) {
        if (diffX > 0) {
            currentSlide = Math.max(0, currentSlide - 1);
        } else {
            currentSlide = Math.min(totalSlides - 1, currentSlide + 1);
        }
    }

    updateSlide(currentSlide);
    isDragging = false;
};

carouselTrack.addEventListener('touchstart', handleTouchStart);
carouselTrack.addEventListener('touchmove', handleTouchMove);
carouselTrack.addEventListener('touchend', handleTouchEnd);



// Counter (Plumbing Care Section)
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

// Sidebar
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



