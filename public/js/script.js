

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
 

const m = document.getElementById('responsiveImage');

console.log(m);

if (window.matchMedia("(max-width: 500px)").matches) {
    m.src = '/images/bgImg2.png';
}


















