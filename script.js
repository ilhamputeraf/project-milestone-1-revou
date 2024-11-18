const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('close-menu');
const navbar = document.getElementById('navbar');
const headerHeight = document.querySelector('header').offsetHeight;

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