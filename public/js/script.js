

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



// aniamted answer end
