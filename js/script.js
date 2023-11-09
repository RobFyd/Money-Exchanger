{
  const calculateResult = (amount, currency) => {
    const ratePLN = 5.14;
    const rateEUR = 1.13;
    const rateUSD = 1.23;
    const rateTHB = 42.07;

    switch (currency) {
      case "PLN":
        return amount * ratePLN;

      case "EUR":
        return amount * rateEUR;

      case "USD":
        return amount * rateUSD;

      case "THB":
        return amount * rateTHB;
    }
  };

  const updateResultText = (amount, result, currency) => {
    const resultElement = document.querySelector(".js-result");
    resultElement.innerHTML = `${amount.toFixed(2)} GBP =<br>${result.toFixed(
      2
    )} ${currency}`;
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const amountElement = document.querySelector(".js-amount");
    const currencyElement = document.querySelector(".js-currency");

    const amount = +amountElement.value;
    const currency = currencyElement.value;

    const result = calculateResult(amount, currency);

    updateResultText(amount, result, currency);
  };

  const init = () => {
    const formElement = document.querySelector(".js-form");
    formElement.addEventListener("submit", onFormSubmit);
  };

  init();
}
