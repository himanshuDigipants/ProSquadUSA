

document.querySelectorAll('.faq-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const toggle = header.querySelector('.faq-toggle');
        content.classList.toggle('show');          
        if (content.classList.contains('show')) {
            toggle.style.transform = 'rotate(180deg)';
        } else {
            toggle.style.transform = 'rotate(0deg)';
        }
    });
});


var menubar = document.getElementById("menubar");
function openbar() {
    
    menubar.style.top = "0"
}
function closebar() {
    menubar.style.top = "-100%"
}

// aniamted answer box start

const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;
let autoSlideInterval;

// Function to update carousel
function updateCarousel() {
    const translateX = -currentIndex * 100;
    carousel.style.transform = `translateX(${translateX}%)`;
}

// Function to go to the previous slide
function prevSlide() {
    currentIndex = (currentIndex === 0) ? carouselItems.length - 1 : currentIndex - 1;
    updateCarousel();
    resetAutoSlide();  // Reset auto-slide after manual navigation
}

// Function to go to the next slide
function nextSlide() {
    currentIndex = (currentIndex === carouselItems.length - 1) ? 0 : currentIndex + 1;
    updateCarousel();
    resetAutoSlide();  // Reset auto-slide after manual navigation
}

// Event listeners for buttons
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Auto slide every 3 seconds
function autoSlide() {
    autoSlideInterval = setInterval(() => {
        nextSlide();
    }, 2000);  // Change slide every 3 seconds
}

// Reset auto-slide when manual button is pressed
function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlide();
}

// Start the auto-slide
autoSlide();



// aniamted answerbox end

// website initial loading

document.addEventListener("DOMContentLoaded", function() {
    let lazySections = [].slice.call(document.querySelectorAll(".lazy-section"));

    if ("IntersectionObserver" in window) {
        let lazySectionObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let lazySection = entry.target;
                    lazySection.setAttribute('data-loaded', 'true');
                    lazySection.classList.add("loaded");
                    lazySectionObserver.unobserve(lazySection);
                }
            });
        });

        lazySections.forEach(function(lazySection) {
            lazySectionObserver.observe(lazySection);
        });
    } else {
        // Fallback for older browsers
        let lazyLoadThrottleTimeout;
        function lazyLoad() {
            if (lazyLoadThrottleTimeout) {
                clearTimeout(lazyLoadThrottleTimeout);
            }

            lazyLoadThrottleTimeout = setTimeout(function() {
                let scrollTop = window.pageYOffset;
                lazySections.forEach(function(section) {
                    if (section.offsetTop < window.innerHeight + scrollTop) {
                        section.setAttribute('data-loaded', 'true');
                        section.classList.add('loaded');
                    }
                });

                if (lazySections.length == 0) { 
                    document.removeEventListener("scroll", lazyLoad);
                    window.removeEventListener("resize", lazyLoad);
                    window.removeEventListener("orientationChange", lazyLoad);
                }
            }, 20);
        }

        document.addEventListener("scroll", lazyLoad);
        window.addEventListener("resize", lazyLoad);
        window.addEventListener("orientationChange", lazyLoad);
    }
});


// login form

// Get elements from the DOM
const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const closeBtn = document.querySelector('.close');
const body = document.body;
const loginForm = document.getElementById('loginForm');

// Open the modal on clicking "Login" button
loginBtn.addEventListener('click', () => {
    loginModal.style.display = 'flex'; // Show modal
    body.add('blur');
    body.style.height='90vh'        // Blur the background
});

// Close the modal when clicking the close button (X)
closeBtn.addEventListener('click', () => {
    loginModal.style.display = 'none'; // Hide modal
    body.classList.remove('blur');     // Remove background blur
});

// Close the modal when clicking outside of the form
window.addEventListener('click', (event) => {
    if (event.target == loginModal) {
        loginModal.style.display = 'none';
        body.classList.remove('blur');
    }
});

// Handle form submission (simple validation and redirect)
loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple authentication (can be replaced with real logic)
    if (username === 'admin' && password === 'password') {
        alert('Login successful!');
        window.location.href = 'index.html'; // Redirect to index.html
    } else {
        alert('Invalid login credentials');
    }
});
