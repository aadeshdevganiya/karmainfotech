new WOW().init();

const counters = document.querySelectorAll(".count");
let started = false; // ensures it runs only once

const startCounter = () => {
    counters.forEach(counter => {
        const target = +counter.getAttribute("data-target");
        let count = 0;
        const speed = 50; // lower is faster

        const update = () => {
            const increment = Math.ceil(target / speed);
            count += increment;

            if (count < target) {
                counter.innerText = count;
                requestAnimationFrame(update);
            } else {
                counter.innerText = target;
            }
        };

        update();
    });
};

// Trigger when .main-counter is in view
window.addEventListener("scroll", () => {
    const counterSection = document.querySelector(".main-counter");
    const sectionTop = counterSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionTop < screenHeight && !started) {
        startCounter();
        started = true;
    }
});

window.addEventListener("scroll", function () {
    const header = document.querySelector(".main-header");
    if (window.scrollY > 10) {
        header.classList.add("sticky-active");
    } else {
        header.classList.remove("sticky-active");
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        slidesPerView: 1,
        spaceBetween: 30,
    });
});



const buttons = document.querySelectorAll('.filter-buttons .btn');
    const items = document.querySelectorAll('.filter-item');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Set active button
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            items.forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });