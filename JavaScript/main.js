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
        //For targeting and changing colors on :before and :after elements
        // const styleElem = document.head.appendChild(document.createElement("style"));
        // const styleElem2 = document.head.appendChild(document.createElement("style"));
        // styleElem.innerHTML = ".hamburger-inner {background: black;} .hamburger-inner:before {background: black;} .hamburger-inner:after {background: black;}";
        // styleElem2.innerHTML = ".hamburger.is-active .hamburger-inner {background: black;} .hamburger.is-active .hamburger-inner:after {background: black;}";
        // styleElem.className = "styleElem";
        // styleElem2.className = "styleElem2";
}

//Fetches the current BTC price from API
const getPrice = async () => {
    const apiCall = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=USD%2CGBP%2CEUR%2CJPY";
    const res = await fetch(apiCall);
    const data = await res.json();
    currentPrice = data.bitcoin;
    displayPrice();
}

//Runs the getPrice function on pageload and then once every 30s
window.onload = function() {
    getPrice();
    setInterval(()=> {getPrice()},30000);
} 

//Displays BTC price on #info-price
currentPrice = "";
function displayPrice() {
    const selector = document.querySelector("#info-currency").selectedIndex;
    const currency = document.querySelectorAll(".info-currency__option")[selector].value;
    const price = document.querySelector("#info-price");
    if(currency === "USD") {
        price.innerHTML = `1 BTC = ${currentPrice.usd.toString()} $`;
    }
    else if (currency === "GBP") {
        price.innerHTML = `1 BTC = ${currentPrice.gbp.toString()} £`;
    }

    else if (currency === "EUR") {
        price.innerHTML = `1 BTC = ${currentPrice.eur.toString()} €`;
    }

    else if (currency === "JPY") {
        price.innerHTML = `1 BTC = ${currentPrice.jpy.toString()} ¥`;
    }
  }

//Checks for change in the Currency Selector
document.querySelector("#info-currency").addEventListener('change', () => {
    displayPrice();
  });