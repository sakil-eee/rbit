// JavaScript to toggle visibility of navbar links for small screens
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.navbar-nav-left');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
