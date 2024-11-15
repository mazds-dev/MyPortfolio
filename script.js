/* 
* Marvin A. Zanchi - Portfolio
* Description: This JavaScript file contains the interactive functionality 
* Features: Mobile menu toggle
* Last Update: 10/Nov/24
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


