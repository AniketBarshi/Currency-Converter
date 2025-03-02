const exchangeRates = {
    USD: { INR: 83, EUR: 0.91, GBP: 0.78, USD: 1 },
    INR: { USD: 0.012, EUR: 0.011, GBP: 0.0094, INR: 1 },
    EUR: { USD: 1.10, INR: 91, GBP: 0.86, EUR: 1 },
    GBP: { USD: 1.28, INR: 107, EUR: 1.16, GBP: 1 }
};

function convertCurrency() {
    let amount = parseFloat(document.getElementById("amount").value);
    let fromCurrency = document.getElementById("fromCurrency").value;
    let toCurrency = document.getElementById("toCurrency").value;

    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount");
        return;
    }

    let convertedAmount = amount * exchangeRates[fromCurrency][toCurrency];
    document.getElementById("result").textContent = convertedAmount.toFixed(2);
}