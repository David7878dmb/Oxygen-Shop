const currencyRates = {};
const currencySymbols = {
    eur: '€',
    usd: '$',
    gbp: '£'
};

function getExchangeRates(){
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json", false);
    xhr.send(null);

    if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        currencyRates.eur = data.eur;
    }
}

function updatePrices(currency){
    const pricesInEUR = {
        product1: 0,
        product2: 25,
        product3: 60
    };

    const rate = currencyRates.eur[currency];
    const symbol = currencySymbols[currency];

    if (rate) {
        document.getElementById('price1').innerText = symbol + Math.round(pricesInEUR.product1 * rate);
        document.getElementById('price2').innerText = symbol + Math.round(pricesInEUR.product2 * rate);
        document.getElementById('price3').innerText = symbol + Math.round(pricesInEUR.product3 * rate);
    } else {
        document.getElementById('price1').innerText = '€' + pricesInEUR.product1;
        document.getElementById('price2').innerText = '€' + pricesInEUR.product2;
        document.getElementById('price3').innerText = '€' + pricesInEUR.product3;
    }
}

//Obtener tipos de cambio cuando se carga la pagina
window.onload = getExchangeRates;
