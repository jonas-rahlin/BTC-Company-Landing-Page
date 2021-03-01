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