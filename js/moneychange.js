const moneysymbols = {
    eur: "€",
    usd: "$",
    gbp: "£"
};

const currencybuttons = document.querySelectorAll('moneybutton');

function fetchexchange(baseCurrency){
    const apichange = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json`;

    try {
        const reponse = fetch(apichange);
        if (!reponse.ok){
            throw new error("Exchanges rates failed");
        }
        const data = reponse.json();
        return data.eur;
    } catch (error) {
        console.error("Exchanges rates failed", error.message);
        return null;
    }
};


function handlechangeselector(event) {
    const baseCurrency = event.target.value;

    try {
        const exchangeRates = fetchexchange();
        if (exchangeRates) {
            updateprices(exchangeRates, baseCurrency);
        }
    } catch (error) {
        console.error("Error", error);
    }

}



// currencybuttons.forEach((button) => { 
//     button.addEventListener("click", handlechangeselector);
// })

document.addEventListener('DOMContentLoaded', function() {
    var currencybuttons = document.querySelectorAll('moneybutton');
    currencybuttons.forEach((button) => { 
        button.addEventListener("click", handlechangeselector);
    });
});


function updateprices(exchangeRates, baseCurrency) {
    const prices = document.getElementById("priceobject");

    const pricesEur = [0, 25, 60];

    prices.forEach((element, index) => {
        let newprice;
        if (baseCurrency === "eur"){
            newprice = pricesEur[index];
        } else if (baseCurrency === "usd") {
            newPrice = (pricesEur[index] * exchangeRates.usd).toFixed(2);
        } else if (baseCurrency === "gbp") {
            newPrice = (pricesEur[index] * exchangeRates.gbp).toFixed(2);
        }  
        element.textContent = `${currencySymbols[baseCurrency]} ${newPrice}`;
    });
}



