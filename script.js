/* 
* [Your Name] - Portfolio JavaScript
* Description: This JavaScript file contains the interactive functionality for my portfolio website.
* Features:
    - Mobile menu toggle.
    - Redirects the "thanks" page to the main page after 7 seconds.
* Last Update: 10/Nov/24
*/


// Get the menu toggle button, mobile menu, and overlay elements
let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');

// When the menu button is clicked, show the mobile menu
btnMenu.addEventListener('click', () => {
    menu.classList.add('open-menu');  // Add class to open the menu
});

// When the mobile menu is clicked, hide it
menu.addEventListener('click', () => {
    menu.classList.remove('open-menu');  // Remove class to close the menu
});

// When the overlay is clicked, hide the mobile menu
overlay.addEventListener('click', () => {
    menu.classList.remove('open-menu');  // Remove class to close the menu
});

// Redirection for the thanks page
if (document.body.classList.contains('thanks-page')) {
    // Redirect to the main page after 7 seconds
    setTimeout(function() {
        window.location.href = "index.html"; // Change to your main page URL
    }, 7000); // 7000 milliseconds = 7 seconds
}
