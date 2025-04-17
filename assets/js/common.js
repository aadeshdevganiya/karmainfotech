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








  var cursor = {
    delay: 8,
    _x: 0,
    _y: 0,
    endX: (window.innerWidth / 2),
    endY: (window.innerHeight / 2),
    cursorVisible: true,
    cursorEnlarged: false,
    $dot: document.querySelector('.cursor-dot'),
    $outline: document.querySelector('.cursor-dot-outline'),
    
    init: function() {
        // Set up element sizes
        this.dotSize = this.$dot.offsetWidth;
        this.outlineSize = this.$outline.offsetWidth;
        
        this.setupEventListeners();
        this.animateDotOutline();
    },
    
//     updateCursor: function(e) {
//         var self = this;
        
//         console.log(e)
        
//         // Show the cursor
//         self.cursorVisible = true;
//         self.toggleCursorVisibility();

//         // Position the dot
//         self.endX = e.pageX;
//         self.endY = e.pageY;
//         self.$dot.style.top = self.endY + 'px';
//         self.$dot.style.left = self.endX + 'px';
//     },
    
    setupEventListeners: function() {
        var self = this;
        
        // Anchor hovering
        document.querySelectorAll('a').forEach(function(el) {
            el.addEventListener('mouseover', function() {
                self.cursorEnlarged = true;
                self.toggleCursorSize();
            });
            el.addEventListener('mouseout', function() {
                self.cursorEnlarged = false;
                self.toggleCursorSize();
            });
        });
        
        // Click events
        document.addEventListener('mousedown', function() {
            self.cursorEnlarged = true;
            self.toggleCursorSize();
        });
        document.addEventListener('mouseup', function() {
            self.cursorEnlarged = false;
            self.toggleCursorSize();
        });
  
  
        document.addEventListener('mousemove', function(e) {
            // Show the cursor
            self.cursorVisible = true;
            self.toggleCursorVisibility();

            // Position the dot
            self.endX = e.pageX;
            self.endY = e.pageY;
            self.$dot.style.top = self.endY + 'px';
            self.$dot.style.left = self.endX + 'px';
        });
        
        // Hide/show cursor
        document.addEventListener('mouseenter', function(e) {
            self.cursorVisible = true;
            self.toggleCursorVisibility();
            self.$dot.style.opacity = 1;
            self.$outline.style.opacity = 1;
        });
        
        document.addEventListener('mouseleave', function(e) {
            self.cursorVisible = true;
            self.toggleCursorVisibility();
            self.$dot.style.opacity = 0;
            self.$outline.style.opacity = 0;
        });
    },
    
    animateDotOutline: function() {
        var self = this;
        
        self._x += (self.endX - self._x) / self.delay;
        self._y += (self.endY - self._y) / self.delay;
        self.$outline.style.top = self._y + 'px';
        self.$outline.style.left = self._x + 'px';
        
        requestAnimationFrame(this.animateDotOutline.bind(self));
    },
    
    toggleCursorSize: function() {
        var self = this;
        
        if (self.cursorEnlarged) {
            self.$dot.style.transform = 'translate(-50%, -50%) scale(0.75)';
            self.$outline.style.transform = 'translate(-50%, -50%) scale(1.5)';
        } else {
            self.$dot.style.transform = 'translate(-50%, -50%) scale(1)';
            self.$outline.style.transform = 'translate(-50%, -50%) scale(1)';
        }
    },
    
    toggleCursorVisibility: function() {
        var self = this;
        
        if (self.cursorVisible) {
            self.$dot.style.opacity = 1;
            self.$outline.style.opacity = 1;
        } else {
            self.$dot.style.opacity = 0;
            self.$outline.style.opacity = 0;
        }
    }
}

cursor.init();