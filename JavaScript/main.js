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

//Removes logo and changes Navigation color on scrolldown.
window.onscroll = function() {
    const logo = document.querySelector("#nav-logo__logo");
    const menuAnchors = document.querySelectorAll(".nav-list__a");
    const menuItems = document.querySelectorAll(".nav-list__item");
    const menuHamburger = document.querySelector(".hamburger-inner")
    
    //Logo
    if (window.pageYOffset > 80 && !logo.classList.contains("undisplay")) {
        logo.classList.add("undisplay");
    }
    else if (window.pageYOffset < 80 && logo.classList.contains("undisplay")) {
        logo.classList.remove("undisplay");
    }
    
    //Navigation
    else if (window.pageYOffset > 250 && !menuAnchors[0].classList.contains("black-text")) {
        menuAnchors.forEach(element => {
            element.classList.add("black-text");
        });
        menuItems.forEach(element => {
            element.classList.add("black-text");
        });
        
        //For targeting and changing colors on :before and :after elements
        const styleElem = document.head.appendChild(document.createElement("style"));
        const styleElem2 = document.head.appendChild(document.createElement("style"));
        styleElem.innerHTML = ".hamburger-inner {background: black;} .hamburger-inner:before {background: black;} .hamburger-inner:after {background: black;}";
        styleElem2.innerHTML = ".hamburger.is-active .hamburger-inner {background: black;} .hamburger.is-active .hamburger-inner:after {background: black;}";
        styleElem.className = "styleElem";
        styleElem2.className = "styleElem2";

    }

    else if (window.pageYOffset < 250 && menuAnchors[0].classList.contains("black-text")) {
        menuAnchors.forEach(element => {
            element.classList.remove("black-text");
        });
        menuItems.forEach(element => {
            element.classList.remove("black-text");
        });
        document.querySelector(".styleElem").remove();
        document.querySelector(".styleElem2").remove();
    }
}


