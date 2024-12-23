
// About Us Progress Bars

function createCircle(containerId, value) {
    const circle = new ProgressBar.Circle(containerId, {
        color: '#FFF689',
        strokeWidth: 8,
        trailColor: '#1a1a1a',
        trailWidth: 8,
        easing: 'easeInOut',
        duration: 1400,
        from: { color: '#FFF689', width: 8 },
        to: { color: '#FFF689', width: 8 },
        text: {
            autoStyleContainer: false
        },
        step: (state, circle) => {
            circle.path.setAttribute('stroke', state.color);
        }
    });

    circle.animate(value);
}

createCircle('#circle1', 0.45);
createCircle('#circle2', 0.9);
createCircle('#circle3', 0.5);
createCircle('#circle4', 0.4);



// About us counter

const counters = [
    { id: "years", target: 25 },
    { id: "projects", target: 25 },
    { id: "customers", target: 100 }
];

const animateCounters = () => {
    counters.forEach(counter => {
        const element = document.getElementById(counter.id);
        const target = counter.target;
        let current = 0;
        const duration = 2000;
        const startTime = performance.now();

        const updateCounter = (timestamp) => {
            const elapsedTime = timestamp - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            current = Math.floor(progress * target);

            if (counter.id === "customers") {
                element.innerText = current + "+";
            } else {
                element.innerText = current;
            }

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            }
        };

        requestAnimationFrame(updateCounter);
    });
};

window.addEventListener("DOMContentLoaded", animateCounters);

