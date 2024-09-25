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


// document.addEventListener('scroll', () => {
//     const Bxes = document.querySelectorAll('.Bx');
//     Bxes.forEach((Bx, index) => {
//         const BxTop = Bx.getBoundingClientRect().top;
//         const windowHeight = window.innerHeight;

//         // Check if the Bx is fully in view
//         if (BxTop < windowHeight && BxTop > 0 && Bx.classList.contains('hidden')) {
//             const loader = Bx.querySelector('.loader');
//             loader.style.display = 'block'; // Show loader

//             setTimeout(() => {
//                 Bx.classList.remove('hidden');
//                 Bx.classList.add('visible');
//                 loader.style.display = 'none'; // Hide loader after content is visible
//             }, (index + 1) * 1000); // Stagger the loading based on index (1s for first, 2s for second, etc.)
//         }
//     });
// });