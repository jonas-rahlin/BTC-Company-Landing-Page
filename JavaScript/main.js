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

//Fetches the current BTC price from API
const getPrice = async () => {
    const apiCall = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=USD%2CGBP%2CEUR%2CJPY%2CAUS%2CNZD";
    const res = await fetch(apiCall);
    const data = await res.json();
    console.log(data);
}

//Displays BTC price on #info-container__price
function displayPrice() {
    const selector = document.querySelector("#info-container__currency").selectedIndex;
    const currency = document.querySelectorAll(".currency-option")[selector].value;
    const price = document.querySelector("#info-container__price");
    if(currency === "USD") {
        price.innerHTML = "123123123";
    }
    else if (currency === "GBP") {
        price.innerHTML = "GBP";
    }

    else if (currency === "EUR") {
        price.innerHTML = "EUR";
    }

    else if (currency === "JPY") {
        price.innerHTML = "JPY";
    }

    else if (currency === "AUS") {
        price.innerHTML = "AUS";
    }

    else if (currency === "NZD") {
        price.innerHTML = "NZD";
    }
  }

//Checks for change in the Currency Selector
document.querySelector("#info-container__currency").addEventListener('change', () => {
    displayPrice();
  });