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