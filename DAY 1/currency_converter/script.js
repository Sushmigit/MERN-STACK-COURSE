// Global variables
let currencies = [];  // Array to hold the currency options
const apiKey = '81d152f6c2e44e35e556fb66';  // You'll need to sign up for an API key (for example, from https://exchangeratesapi.io/)
//const url = ' https://v6.exchangerate-api.com';  // API endpoint for exchange rates
const url = 'https://v6.exchangerate-api.com/v6/81d152f6c2e44e35e556fb66/latest/USD';
// Fetch exchange rates and populate the currency dropdowns
async function getExchangeRates() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (!response.ok) {
            throw new Error(`API Error: ${response.status} ${response.statusText}`);
        }
        if (data && typeof data === "object") {
            console.log(Object.keys(data));  // Only access Object.keys() if data is a valid object
          } else {
            console.error("Data is not an object or it's null/undefined");
          }
        currencies = Object.keys(data.rates);
        populateCurrencySelectors(currencies);
    } catch (error) {
        console.log(error);
        document.getElementById("error-message").innerText = "Error fetching exchange rates.";
    }
}

// Populate the currency dropdown lists
function populateCurrencySelectors(currencies) {
    const fromCurrencySelect = document.getElementById('from-currency');
    const toCurrencySelect = document.getElementById('to-currency');
    
    currencies.forEach(currency => {
        const option = document.createElement('option');
        option.value = currency;
        option.textContent = currency;
        fromCurrencySelect.appendChild(option);

        const option2 = document.createElement('option');
        option2.value = currency;
        option2.textContent = currency;
        toCurrencySelect.appendChild(option2);
    });
}

// Handle the conversion process
async function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;

    if (!amount || isNaN(amount) || amount <= 0) {
        document.getElementById("error-message").innerText = "Please enter a valid amount.";
        return;
    }

    try {
        const response = await fetch(`${url}?base=${fromCurrency}&symbols=${toCurrency}`);
        const data = await response.json();
        
        const conversionRate = data.rates[toCurrency];
        const convertedAmount = (amount * conversionRate).toFixed(2);
        document.getElementById('result').value = convertedAmount;
        document.getElementById("error-message").innerText = '';  // Clear error message
    } catch (error) {
        console.log(error);
        document.getElementById("error-message").innerText = "Error converting currency.";
    }
}

// Event listener for the convert button
document.getElementById('convert-btn').addEventListener('click', convertCurrency);

// Initial call to fetch exchange rates
getExchangeRates();
