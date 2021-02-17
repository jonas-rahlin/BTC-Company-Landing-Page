//Starts hamburger animation
function hamburgerAnimation(){
    document.querySelector(".hamburger").classList.toggle("is-active");
}

//Displays navigation menu.
function showMenu(){
    const menu = document.querySelector("#nav-list");  
    menu.classList.toggle("closed");
    menu.classList.toggle("open");
}

//Click event for hamburger menu.
document.querySelector("#nav-hamburger").addEventListener("click", ()=> {hamburgerAnimation(); showMenu();})

//Removes logo on scrolldown.
window.onscroll = function() {
    const logo = document.querySelector("#nav-logo__logo");
    const menuAnchors = document.querySelectorAll(".nav-list__a");
    const menuItems = document.querySelectorAll(".nav-list__item");
    if (window.pageYOffset > 80 && !logo.classList.contains("undisplay")) {
        logo.classList.add("undisplay");
    }
    else if (window.pageYOffset < 80) {
        logo.classList.remove("undisplay");
    }
    else if (window.pageYOffset > 280 && !menuAnchors[0].classList.contains("black-text")) {
        menuAnchors.forEach(element => {
            element.classList.add("black-text");
        });
        menuItems.forEach(element => {
            element.classList.add("black-text");
        });
    }
    else if (window.pageYOffset < 280) {
        menuAnchors.forEach(element => {
            element.classList.remove("black-text");
        });
        menuItems.forEach(element => {
            element.classList.remove("black-text");
        });
    }
}


// window.onscroll = function() {
//     const logo = document.querySelector("#nav-logo__logo");
//     const menuAnchors = document.querySelectorAll(".nav-list__a");
//     if (window.pageYOffset > 120 && !logo.classList.contains("undisplay")) {
//         logo.classList.add("undisplay");
//     }
//     else if (window.pageYOffset < 120) {
//         logo.classList.remove("undisplay");
//     }
// }


// //Changes navigation color on scrolldown
// window.onscroll = function() {
//     const menuAnchors = document.querySelectorAll(".nav-list__a");
//     else if (window.pageYOffset > 300 && !menuAnchors[0].classList.contains("black-text")) {
//         menuAnchors.forEach(element => {
//             element.classList.add("black-text");
//         });
//     }
//     else if (window.pageYOffset < 300) {
//         menuAnchors.forEach(element => {
//             element.classList.remove("black-text");
//         });
//     }
// }
