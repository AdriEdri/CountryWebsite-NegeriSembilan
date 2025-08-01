const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 0);
    const coverHeight = document.querySelector('.home').offsetHeight;
    const ad = document.querySelector('.ad-section');

    if (window.scrollY > coverHeight) {
        ad.style.display = 'flex';
        ad.style.opacity = '1';
    } else {
        ad.style.display = 'none'; 
        ad.style.opacity = '0'; 
    }
});

// Check visibility on page load
window.addEventListener("load", function() {
    const coverHeight = document.querySelector('.home').offsetHeight;
    const ad = document.querySelector('.ad-section');

    if (window.scrollY > coverHeight) {
        ad.style.display = 'flex';
        ad.style.opacity = '1'; 
    } else {
        ad.style.display = 'none';
    }
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};
