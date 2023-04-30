const formElement = document.querySelector(".js-form");
const amountElement = document.querySelector(".js-amount");
const currencyElement = document.querySelector(".js-currency");
const resultElement = document.querySelector(".js-result");

const ratePLN = 5.14;
const rateEUR = 1.13;
const rateUSD = 1.23;
const rateTHB = 42.07;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    const amount = +amountElement.value;
    const currency = currencyElement.value;

    let result;

    switch (currency) {
        case "PLN":
            result = amount / ratePLN;

            break;
        case "EUR":
            result = amount / rateEUR;

            break;
        case "USD":
            result = amount / rateUSD;

        case "THB":
            result = amount / rateTHB;
            break;
    }

    resultElement.innerHTML = `${amount.toFixed(2)} GBP = <strong>${result.toFixed(2)} ${currency}</strong>`;
});
