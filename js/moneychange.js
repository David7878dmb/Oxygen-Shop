const currencySymbols = {
    eur: '€',
    usd: '$',
    gbp: '£'
};

const currencyButtons = document.querySelectorAll(".pricing__button__money");

//datos api
function fetchExchangeRates() {
    const apiEndpoint = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json`;

    return fetch(apiEndpoint)
    .then((response) =>{
        if (!response.ok) {
            throw new Error("Failed to fetch exchange rates");
        }
        return response.json();
    })
    .then((data) => data.eur)
    .catch((error) => {
        console.log("Error fetching exchanges rates", error.message);
        return null;
    });
}

function updatePrices(exchangeRates, baseCurrency) {
    const prices = document.querySelectorAll(".price");
    const pricesEur = [
        0,
        25,
        60
    ];

    prices.forEach((element, index) => {
        let newPrice;
        if (baseCurrency === "eur") {
          newPrice =  Math.round(pricesEur[index]);
        } else if (baseCurrency === "usd") {
          newPrice = Math.round((pricesEur[index] * exchangeRates.usd).toFixed(2));
        } else if (baseCurrency === "gbp") {
          newPrice = Math.round((pricesEur[index] * exchangeRates.gbp).toFixed(2));
        }
        element.textContent = `${currencySymbols[baseCurrency]} ${newPrice}`;
      });
}

function handleCurrencyChangeSelector(event) {
    const baseCurrency = event.target.value;

    fetchExchangeRates()
    .then((exchangeRates) => {
        if (exchangeRates) {
            updatePrices(exchangeRates, baseCurrency);
        }
    })
    .catch((error) =>{
        console.error("Error", error);
    });
}

currencyButtons.forEach((button) => {
    button.addEventListener("click", handleCurrencyChangeSelector)
})

















        // // Llama a la API
        // function getExchangeRates() {
        //     fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json")
        //         .then(response => response.json())
        //         .then(data => {
        //             currencyRates.eur = data.eur;
        //         })
        //         .catch(error => console.error('Error al obtener los tipos de cambio:', error));
        // }

        // // Objeto con los diferentes precios
        // function updatePrices(currency) {
        //     const pricesInEUR = {
        //         product1: 0,
        //         product2: 25,
        //         product3: 60
        //     };

        //     const rate = currencyRates.eur ? currencyRates.eur[currency] : 1;
        //     const symbol = currencySymbols[currency];

        //     // Cambio de precios
        //     if (rate) {
        //         document.getElementById('price1').innerText = symbol + Math.round(pricesInEUR.product1 * rate);
        //         document.getElementById('price2').innerText = symbol + Math.round(pricesInEUR.product2 * rate);
        //         document.getElementById('price3').innerText = symbol + Math.round(pricesInEUR.product3 * rate);
        //     } else {
        //         document.getElementById('price1').innerText = '€' + pricesInEUR.product1;
        //         document.getElementById('price2').innerText = '€' + pricesInEUR.product2;
        //         document.getElementById('price3').innerText = '€' + pricesInEUR.product3;
        //     }
        // }





