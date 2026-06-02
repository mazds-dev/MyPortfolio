/* 
* Marvin Adorian Zanchi Santos - Portfolio Scripts
* Description: Handles interactive functionalities
*/

// Get the menu toggle button, mobile menu, and overlay elements
let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');

// When the menu button is clicked, show the mobile menu
btnMenu.addEventListener('click', () => {
    menu.classList.add('open-menu');  
});

// When the mobile menu is clicked, hide it
menu.addEventListener('click', () => {
    menu.classList.remove('open-menu');  
});

// When the overlay is clicked, hide the mobile menu
overlay.addEventListener('click', () => {
    menu.classList.remove('open-menu');  
});

// When the Submit button is clicked show message + loader 
const form = document.querySelector("form");
const feedback = document.getElementById("submission-feedback");

form.addEventListener("submit", () => {
    feedback.style.display = "block"; 
});



