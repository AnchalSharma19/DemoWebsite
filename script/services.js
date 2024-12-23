
// Service Image Carousel 

const carouselImages = document.getElementById('carousel-images');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
let currentInd = 0;

function updateCarouselPosition() {
    const imageWidth = document.querySelector('.carousel-container').offsetWidth;
    carouselImages.style.transform = `translateX(-${imageWidth * currentInd}px)`;
}

nextBtn.addEventListener('click', () => {
    if (currentInd < carouselImages.children.length - 1) {
        currentInd++;
        updateCarouselPosition();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentInd > 0) {
        currentInd--;
        updateCarouselPosition();
    }
});

window.addEventListener('resize', updateCarouselPosition);
