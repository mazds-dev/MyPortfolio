let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click',()=>{
    menu.classList.add('open-menu')
})

menu.addEventListener('click',()=>{
    menu.classList.remove('open-menu')
})

overlay.addEventListener('click',()=>{
    menu.classList.remove('open-menu')
})

// Thanks-page Redirection'
if (document.body.classList.contains('thanks-page')) {
    // Redirect to the main page after 7 seconds
    setTimeout(function() {
        window.location.href = "index.html"; // Change to your main page URL
    }, 7000); // 7000 milliseconds = 7 seconds
}
