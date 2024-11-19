const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const navbar = document.getElementById('navbar');
const headerHeight = document.querySelector('header').offsetHeight;
const track = document.querySelector('.carousel-track');
const clone = track.innerHTML;

window.onload = function () {
    document.body.style.opacity = "1";
};

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
 });

closeMenu.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
 });

const mobileLinks = mobileMenu.querySelectorAll('a');
 mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
 });

 window.addEventListener('scroll', () => {
     if (window.scrollY > headerHeight) {
         navbar.classList.add('bg-black', 'bg-opacity-90');
     } else {
         navbar.classList.remove('bg-black', 'bg-opacity-90');
     }
 });