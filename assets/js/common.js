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








    // const btn = document.getElementById('buttonn');

    // document.getElementById('form')
    //  .addEventListener('submit', function(event) {
    //    event.preventDefault();
    
    //    btn.innerText = 'Sending...'; // Use innerText instead of .value for <button>
    
    //    const serviceID = 'service_124';
    //    const templateID = 'template_1dost7p';
    
    //    emailjs.sendForm(serviceID, templateID, this)
    //     .then(() => {
    //       btn.innerText = 'Send Email';
    //       alert('Sent!');
    //     }, (err) => {
    //       btn.innerText = 'Send Email';
    //       alert(JSON.stringify(err));
    //     });
    // });
    

const btn = document.getElementById('buttonn');

document.getElementById('form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    btn.value = 'Sending...';

    const serviceID = 'service_124';
    const templateID = 'template_1dost7p';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Send Email';
        alert('Message sent successfully!');
      }, (err) => {
        btn.value = 'Send Email';
        alert(JSON.stringify(err));
      });
  });







document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    navLinks.forEach(link => {
      link.addEventListener("click", function () {
        // Remove 'active' class from all links
        navLinks.forEach(nav => nav.classList.remove("active"));
        // Add 'active' class to the clicked link
        this.classList.add("active");
      });
    });
  });



