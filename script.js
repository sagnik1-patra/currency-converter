const fromCurrency = document.getElementById('from-currency');
const toCurrency = document.getElementById('to-currency');
const fromAmount = document.getElementById('from-amount');
const toAmount = document.getElementById('to-amount');
const swapBtn = document.getElementById('swap-btn');
const rateInfo = document.getElementById('rate-info');
const lastUpdated = document.getElementById('last-updated');
const toggleDark = document.getElementById('toggle-dark');

const API_URL = 'https://api.exchangerate-api.com/v4/latest/';

const currencies = {
  "USD": "us",
  "EUR": "eu",
  "INR": "in",
  "GBP": "gb",
  "JPY": "jp",
  "AUD": "au",
  "CAD": "ca",
  "CNY": "cn",
  "BRL": "br",
  "ZAR": "za"
};

function populateDropdown(dropdown) {
  for (let code in currencies) {
    const option = document.createElement('option');
    option.value = code;
    option.innerHTML = `
      <img src="https://flagcdn.com/16x12/${currencies[code]}.png" alt="${code} flag"> ${code}
    `;
    option.textContent = code; // fallback for browsers not supporting innerHTML in option
    dropdown.appendChild(option);
  }
}

populateDropdown(fromCurrency);
populateDropdown(toCurrency);

fromCurrency.value = 'USD';
toCurrency.value = 'INR';

async function getExchangeRate() {
  const base = fromCurrency.value;
  const target = toCurrency.value;
  const amount = parseFloat(fromAmount.value);

  if (isNaN(amount) || amount <= 0) {
    toAmount.value = '';
    rateInfo.textContent = '';
    return;
  }

  try {
    const res = await fetch(API_URL + base);
    const data = await res.json();
    const rate = data.rates[target];
    const converted = (amount * rate).toFixed(2);

    toAmount.value = converted;
    rateInfo.textContent = `1 ${base} = ${rate} ${target}`;
    lastUpdated.textContent = `Last updated: ${new Date(data.time_last_updated * 1000).toLocaleString()}`;
  } catch (error) {
    console.error(error);
    rateInfo.textContent = 'Error fetching exchange rates.';
  }
}

fromAmount.addEventListener('input', getExchangeRate);
fromCurrency.addEventListener('change', getExchangeRate);
toCurrency.addEventListener('change', getExchangeRate);

swapBtn.addEventListener('click', () => {
  [fromCurrency.value, toCurrency.value] = [toCurrency.value, fromCurrency.value];
  getExchangeRate();
});

toggleDark.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

getExchangeRate();
