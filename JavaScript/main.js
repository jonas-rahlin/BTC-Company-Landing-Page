function hamburgerAnimation(){
    document.querySelector(".hamburger").classList.toggle("is-active");
};

function showMenu(){
    document.querySelector("#nav-list").classList.toggle("display");
}

document.querySelector("#nav-hamburger").addEventListener("click", ()=> {
    hamburgerAnimation();
    showMenu();
})

window.onscroll = function() {
    const logo = document.querySelector("#nav-logo__logo");
    if (window.pageYOffset > 100 && !logo.classList.contains("undisplay")) {
        logo.classList.add("undisplay");
    }

    else if (window.pageYOffset < 1) {
        logo.classList.remove("undisplay");
    }
}