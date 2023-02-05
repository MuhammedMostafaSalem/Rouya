// section navigation
window.addEventListener('scroll', ()=> {
    let navbar = document.querySelector('.navbar');
    navbar.classList.toggle('sticky', window.scrollY > 150);
});
/* create open and close in navBar media query */
let navbarToggler = document.querySelector('.navbar-toggler');
let iconBar = document.querySelector('.fa-bars');
let navbarNav = document.querySelector('.navbar-nav');
navbarToggler.addEventListener('click' , ()=> {
    iconBar.classList.toggle('fa-xmark');
    navbarNav.classList.toggle('active');
});