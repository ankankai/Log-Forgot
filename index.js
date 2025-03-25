const hamburger = document.getElementById('hamburger-menu');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});