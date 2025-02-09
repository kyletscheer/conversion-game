const API_URL = 'https://open.er-api.com/v6/latest/';
let baseCurrency = '';
let targetCurrency = '';
let reverseMode = false;
let timerDuration = 30;
let remainingTime;
let gameInterval;
let results = [];
const flagsBaseUrl = './flags/';

let countdownInterval;
const popularCurrencies = ['USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD', 'CHF', 'NZD', 'CNY', 'INR'];
const currencyToCountryCode = {
    'USD': { code: 'us', name: 'United States Dollar', country: 'United States' },
    'EUR': { code: 'eu', name: 'Euro', country: 'Eurozone' },
    'JPY': { code: 'jp', name: 'Japanese Yen', country: 'Japan' },
    'GBP': { code: 'gb', name: 'British Pound Sterling', country: 'United Kingdom' },
    'AUD': { code: 'au', name: 'Australian Dollar', country: 'Australia' },
    'CAD': { code: 'ca', name: 'Canadian Dollar', country: 'Canada' },
    'CNY': { code: 'cn', name: 'Chinese Yuan', country: 'China' },
    'INR': { code: 'in', name: 'Indian Rupee', country: 'India' },
    'CHF': { code: 'ch', name: 'Swiss Franc', country: 'Switzerland' },
    'SEK': { code: 'se', name: 'Swedish Krona', country: 'Sweden' },
    'NZD': { code: 'nz', name: 'New Zealand Dollar', country: 'New Zealand' },
    'XOF': { code: 'sn', name: 'West African CFA Franc', country: 'West African States' },
    'XAF': { code: 'cm', name: 'Central African CFA Franc', country: 'Central African States' },
    'AED': { code: 'ae', name: 'United Arab Emirates Dirham', country: 'United Arab Emirates' },
    'AFN': { code: 'af', name: 'Afghan Afghani', country: 'Afghanistan' },
    'ALL': { code: 'al', name: 'Albanian Lek', country: 'Albania' },
    'AMD': { code: 'am', name: 'Armenian Dram', country: 'Armenia' },
    'ANG': { code: 'cw', name: 'Netherlands Antillean Guilder', country: 'Curaçao and Sint Maarten' },
    'AOA': { code: 'ao', name: 'Angolan Kwanza', country: 'Angola' },
    'ARS': { code: 'ar', name: 'Argentine Peso', country: 'Argentina' },
    'AWG': { code: 'aw', name: 'Aruban Florin', country: 'Aruba' },
    'AZN': { code: 'az', name: 'Azerbaijani Manat', country: 'Azerbaijan' },
    'BAM': { code: 'ba', name: 'Bosnia and Herzegovina Convertible Mark', country: 'Bosnia and Herzegovina' },
    'BBD': { code: 'bb', name: 'Barbadian Dollar', country: 'Barbados' },
    'BDT': { code: 'bd', name: 'Bangladeshi Taka', country: 'Bangladesh' },
    'BGN': { code: 'bg', name: 'Bulgarian Lev', country: 'Bulgaria' },
    'BHD': { code: 'bh', name: 'Bahraini Dinar', country: 'Bahrain' },
    'BIF': { code: 'bi', name: 'Burundian Franc', country: 'Burundi' },
    'BMD': { code: 'bm', name: 'Bermudian Dollar', country: 'Bermuda' },
    'BND': { code: 'bn', name: 'Brunei Dollar', country: 'Brunei' },
    'BOB': { code: 'bo', name: 'Bolivian Boliviano', country: 'Bolivia' },
    'BRL': { code: 'br', name: 'Brazilian Real', country: 'Brazil' },
    'BSD': { code: 'bs', name: 'Bahamian Dollar', country: 'Bahamas' },
    'BTN': { code: 'bt', name: 'Bhutanese Ngultrum', country: 'Bhutan' },
    'BWP': { code: 'bw', name: 'Botswana Pula', country: 'Botswana' },
    'BYN': { code: 'by', name: 'Belarusian Ruble', country: 'Belarus' },
    'BZD': { code: 'bz', name: 'Belize Dollar', country: 'Belize' },
    'CDF': { code: 'cd', name: 'Congolese Franc', country: 'Democratic Republic of the Congo' },
    'CLP': { code: 'cl', name: 'Chilean Peso', country: 'Chile' },
    'COP': { code: 'co', name: 'Colombian Peso', country: 'Colombia' },
    'CRC': { code: 'cr', name: 'Costa Rican Colón', country: 'Costa Rica' },
    'CUP': { code: 'cu', name: 'Cuban Peso', country: 'Cuba' },
    'CVE': { code: 'cv', name: 'Cape Verdean Escudo', country: 'Cape Verde' },
    'CZK': { code: 'cz', name: 'Czech Koruna', country: 'Czech Republic' },
    'DJF': { code: 'dj', name: 'Djiboutian Franc', country: 'Djibouti' },
    'DKK': { code: 'dk', name: 'Danish Krone', country: 'Denmark' },
    'DOP': { code: 'do', name: 'Dominican Peso', country: 'Dominican Republic' },
    'DZD': { code: 'dz', name: 'Algerian Dinar', country: 'Algeria' },
    'EGP': { code: 'eg', name: 'Egyptian Pound', country: 'Egypt' },
    'ERN': { code: 'er', name: 'Eritrean Nakfa', country: 'Eritrea' },
    'ETB': { code: 'et', name: 'Ethiopian Birr', country: 'Ethiopia' },
    'FJD': { code: 'fj', name: 'Fijian Dollar', country: 'Fiji' },
    'FKP': { code: 'fk', name: 'Falkland Islands Pound', country: 'Falkland Islands' },
    'FOK': { code: 'fo', name: 'Faroese Króna', country: 'Faroe Islands' },
    'GEL': { code: 'ge', name: 'Georgian Lari', country: 'Georgia' },
    'GGP': { code: 'gg', name: 'Guernsey Pound', country: 'Guernsey' },
    'GHS': { code: 'gh', name: 'Ghanaian Cedi', country: 'Ghana' },
    'GIP': { code: 'gi', name: 'Gibraltar Pound', country: 'Gibraltar' },
    'GMD': { code: 'gm', name: 'Gambian Dalasi', country: 'Gambia' },
    'GNF': { code: 'gn', name: 'Guinean Franc', country: 'Guinea' },
    'GTQ': { code: 'gt', name: 'Guatemalan Quetzal', country: 'Guatemala' },
    'GYD': { code: 'gy', name: 'Guyanese Dollar', country: 'Guyana' },
    'HKD': { code: 'hk', name: 'Hong Kong Dollar', country: 'Hong Kong' },
    'HNL': { code: 'hn', name: 'Honduran Lempira', country: 'Honduras' },
    'HRK': { code: 'hr', name: 'Croatian Kuna', country: 'Croatia' },
    'HTG': { code: 'ht', name: 'Haitian Gourde', country: 'Haiti' },
    'HUF': { code: 'hu', name: 'Hungarian Forint', country: 'Hungary' },
    'IDR': { code: 'id', name: 'Indonesian Rupiah', country: 'Indonesia' },
    'ILS': { code: 'il', name: 'Israeli New Shekel', country: 'Israel' },
    'IMP': { code: 'im', name: 'Isle of Man Pound', country: 'Isle of Man' },
    'IQD': { code: 'iq', name: 'Iraqi Dinar', country: 'Iraq' },
    'IRR': { code: 'ir', name: 'Iranian Rial', country: 'Iran' },
    'ISK': { code: 'is', name: 'Icelandic Króna', country: 'Iceland' },
    'JEP': { code: 'je', name: 'Jersey Pound', country: 'Jersey' },
    'JMD': { code: 'jm', name: 'Jamaican Dollar', country: 'Jamaica' },
    'JOD': { code: 'jo', name: 'Jordanian Dinar', country: 'Jordan' },
    'KES': { code: 'ke', name: 'Kenyan Shilling', country: 'Kenya' },
    'KGS': { code: 'kg', name: 'Kyrgyzstani Som', country: 'Kyrgyzstan' },
    'KHR': { code: 'kh', name: 'Cambodian Riel', country: 'Cambodia' },
    'KID': { code: 'ki', name: 'Kiribati Dollar', country: 'Kiribati' },
    'KMF': { code: 'km', name: 'Comorian Franc', country: 'Comoros' },
    'KRW': { code: 'kr', name: 'South Korean Won', country: 'South Korea' },
    'KWD': { code: 'kw', name: 'Kuwaiti Dinar', country: 'Kuwait' },
    'KYD': { code: 'ky', name: 'Cayman Islands Dollar', country: 'Cayman Islands' },
    'KZT': { code: 'kz', name: 'Kazakhstani Tenge', country: 'Kazakhstan' },
    'LAK': { code: 'la', name: 'Lao Kip', country: 'Laos' },
    'LBP': { code: 'lb', name: 'Lebanese Pound', country: 'Lebanon' },
    'LKR': { code: 'lk', name: 'Sri Lankan Rupee', country: 'Sri Lanka' },
    'LRD': { code: 'lr', name: 'Liberian Dollar', country: 'Liberia' },
    'LSL': { code: 'ls', name: 'Lesotho Loti', country: 'Lesotho' },
    'LYD': { code: 'ly', name: 'Libyan Dinar', country: 'Libya' },
    'MAD': { code: 'ma', name: 'Moroccan Dirham', country: 'Morocco' },
    'MDL': { code: 'md', name: 'Moldovan Leu', country: 'Moldova' },
    'MGA': { code: 'mg', name: 'Malagasy Ariary', country: 'Madagascar' },
    'MKD': { code: 'mk', name: 'Macedonian Denar', country: 'North Macedonia' },
    'MMK': { code: 'mm', name: 'Myanmar Kyat', country: 'Myanmar' },
    'MNT': { code: 'mn', name: 'Mongolian Tögrög', country: 'Mongolia' },
    'MOP': { code: 'mo', name: 'Macanese Pataca', country: 'Macau' },
    'MRU': { code: 'mr', name: 'Mauritanian Ouguiya', country: 'Mauritania' },
    'MUR': { code: 'mu', name: 'Mauritian Rupee', country: 'Mauritius' },
    'MVR': { code: 'mv', name: 'Maldivian Rufiyaa', country: 'Maldives' },
    'MWK': { code: 'mw', name: 'Malawian Kwacha', country: 'Malawi' },
    'MXN': { code: 'mx', name: 'Mexican Peso', country: 'Mexico' },
    'MYR': { code: 'my', name: 'Malaysian Ringgit', country: 'Malaysia' },
    'MZN': { code: 'mz', name: 'Mozambican Metical', country: 'Mozambique' },
    'NAD': { code: 'na', name: 'Namibian Dollar', country: 'Namibia' },
    'NGN': { code: 'ng', name: 'Nigerian Naira', country: 'Nigeria' },
    'NIO': { code: 'ni', name: 'Nicaraguan Córdoba', country: 'Nicaragua' },
    'NOK': { code: 'no', name: 'Norwegian Krone', country: 'Norway' },
    'NPR': { code: 'np', name: 'Nepalese Rupee', country: 'Nepal' },
    'OMR': { code: 'om', name: 'Omani Rial', country: 'Oman' },
    'PAB': { code: 'pa', name: 'Panamanian Balboa', country: 'Panama' },
    'PEN': { code: 'pe', name: 'Peruvian Sol', country: 'Peru' },
    'PGK': { code: 'pg', name: 'Papua New Guinean Kina', country: 'Papua New Guinea' },
    'PHP': { code: 'ph', name: 'Philippine Peso', country: 'Philippines' },
    'PKR': { code: 'pk', name: 'Pakistani Rupee', country: 'Pakistan' },
    'PLN': { code: 'pl', name: 'Polish Złoty', country: 'Poland' },
    'PYG': { code: 'py', name: 'Paraguayan Guaraní', country: 'Paraguay' },
    'QAR': { code: 'qa', name: 'Qatari Riyal', country: 'Qatar' },
    'RON': { code: 'ro', name: 'Romanian Leu', country: 'Romania' },
    'RSD': { code: 'rs', name: 'Serbian Dinar', country: 'Serbia' },
    'RUB': { code: 'ru', name: 'Russian Ruble', country: 'Russia' },
    'RWF': { code: 'rw', name: 'Rwandan Franc', country: 'Rwanda' },
    'SAR': { code: 'sa', name: 'Saudi Riyal', country: 'Saudi Arabia' },
    'SBD': { code: 'sb', name: 'Solomon Islands Dollar', country: 'Solomon Islands' },
    'SCR': { code: 'sc', name: 'Seychellois Rupee', country: 'Seychelles' },
    'SDG': { code: 'sd', name: 'Sudanese Pound', country: 'Sudan' },
    'SGD': { code: 'sg', name: 'Singapore Dollar', country: 'Singapore' },
    'SHP': { code: 'sh', name: 'Saint Helena Pound', country: 'Saint Helena' },
    'SLE': { code: 'sl', name: 'Sierra Leonean Leone', country: 'Sierra Leone' },
    'SLL': { code: 'sl', name: 'Sierra Leonean Leone', country: 'Sierra Leone' },
    'SOS': { code: 'so', name: 'Somali Shilling', country: 'Somalia' },
    'SRD': { code: 'sr', name: 'Surinamese Dollar', country: 'Suriname' },
    'SSP': { code: 'ss', name: 'South Sudanese Pound', country: 'South Sudan' },
    'STN': { code: 'st', name: 'São Tomé and Príncipe Dobra', country: 'São Tomé and Príncipe' },
    'SYP': { code: 'sy', name: 'Syrian Pound', country: 'Syria' },
    'SZL': { code: 'sz', name: 'Eswatini Lilangeni', country: 'Eswatini' },
    'THB': { code: 'th', name: 'Thai Baht', country: 'Thailand' },
    'TJS': { code: 'tj', name: 'Tajikistani Somoni', country: 'Tajikistan' },
    'TMT': { code: 'tm', name: 'Turkmenistani Manat', country: 'Turkmenistan' },
    'TND': { code: 'tn', name: 'Tunisian Dinar', country: 'Tunisia' },
    'TOP': { code: 'to', name: 'Tongan Paʻanga', country: 'Tonga' },
    'TRY': { code: 'tr', name: 'Turkish Lira', country: 'Turkey' },
    'TTD': { code: 'tt', name: 'Trinidad and Tobago Dollar', country: 'Trinidad and Tobago' },
    'TVD': { code: 'tv', name: 'Tuvaluan Dollar', country: 'Tuvalu' },
    'TWD': { code: 'tw', name: 'New Taiwan Dollar', country: 'Taiwan' },
    'TZS': { code: 'tz', name: 'Tanzanian Shilling', country: 'Tanzania' },
    'UAH': { code: 'ua', name: 'Ukrainian Hryvnia', country: 'Ukraine' },
    'UGX': { code: 'ug', name: 'Ugandan Shilling', country: 'Uganda' },
    'UYU': { code: 'uy', name: 'Uruguayan Peso', country: 'Uruguay' },
    'UZS': { code: 'uz', name: 'Uzbekistani Som', country: 'Uzbekistan' },
    'VES': { code: 've', name: 'Venezuelan Bolívar', country: 'Venezuela' },
    'VND': { code: 'vn', name: 'Vietnamese Đồng', country: 'Vietnam' },
    'VUV': { code: 'vu', name: 'Vanuatu Vatu', country: 'Vanuatu' },
    'WST': { code: 'ws', name: 'Samoan Tālā', country: 'Samoa' },
    'XCD': { code: 'ag', name: 'East Caribbean Dollar', country: 'Eastern Caribbean' },
    'XDR': { code: 'xdr', name: 'Special Drawing Rights', country: 'International' },
    'XPF': { code: 'pf', name: 'CFP Franc', country: 'French Polynesia' },
    'YER': { code: 'ye', name: 'Yemeni Rial', country: 'Yemen' },
    'ZAR': { code: 'za', name: 'South African Rand', country: 'South Africa' },
    'ZMW': { code: 'zm', name: 'Zambian Kwacha', country: 'Zambia' },
    'ZWL': { code: 'zw', name: 'Zimbabwean Dollar', country: 'Zimbabwe' }
};
//require answer
const answerInput = document.getElementById("answer");
const submitButton = document.getElementById("submit-answer");

answerInput.addEventListener("input", function () {
    submitButton.disabled = !answerInput.value.trim();
});



document.getElementById('start-game').addEventListener('click', startGame);
document.getElementById('reverse-toggle').addEventListener('click', toggleReverseMode);
document.getElementById('submit-answer').addEventListener('click', submitAnswer);
document.getElementById('base-currency-dropdown').querySelector('.dropdown-options')
    .addEventListener('click', updateCurrentConversions);

document.getElementById('target-currency-dropdown').querySelector('.dropdown-options')
    .addEventListener('click', updateCurrentConversions);

function fetchCurrencies() {
    fetch(API_URL + 'USD')
        .then(response => response.json())
        .then(data => {
            const currencies = Object.keys(data.rates);
            populateCustomDropdown(currencies, 'base-currency-dropdown');
            populateCustomDropdown(currencies, 'target-currency-dropdown');
            updateCurrentConversions();
        })
        .catch(() => alert('Failed to load currency data. Please try again later.'));
}

function populateCustomDropdown(currencies, dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    const optionsContainer = dropdown.querySelector('.dropdown-options');

    // Define the popular currencies list
    const popularCurrencies = ['USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD', 'CHF', 'CNY', 'SEK', 'NZD'];

    // Add "Popular" header
    const popularHeader = document.createElement('div');
    popularHeader.classList.add('dropdown-popular-header');
    popularHeader.textContent = 'Popular Currencies';
    optionsContainer.appendChild(popularHeader);

    // Add popular currencies to the top of the dropdown
    popularCurrencies.forEach(currency => {
        const currencyData = currencyToCountryCode[currency] || { code: '', name: '' };
        const flagUrl = `${flagsBaseUrl}${currencyData.code}.webp`;

        const optionDiv = document.createElement('div');
        optionDiv.innerHTML = `
            <img src="${flagUrl}" alt="${currency} flag"> &nbsp;&nbsp;
            ${currency} - ${currencyData.name}
        `;
        optionDiv.setAttribute('data-value', currency);

        optionDiv.addEventListener('click', () => {
            const selected = dropdown.querySelector('.dropdown-selected');
            selected.innerHTML = optionDiv.innerHTML;
            selected.setAttribute('data-value', currency);
            optionsContainer.style.display = 'none';
            updateCurrentConversions(); // Update conversion rates after selection
        });

        optionsContainer.appendChild(optionDiv);
    });

    // Add a separator between popular and all currencies
    const separator = document.createElement('div');
    separator.classList.add('dropdown-separator');
    optionsContainer.appendChild(separator);

    // Sort all currencies alphabetically
    const sortedCurrencies = currencies.sort();

    // Add all currencies in alphabetical order
    sortedCurrencies.forEach(currency => {
        const currencyData = currencyToCountryCode[currency] || { code: '', name: '' };
        const flagUrl = `${flagsBaseUrl}${currencyData.code}.webp`;

        const optionDiv = document.createElement('div');
        optionDiv.innerHTML = `
            <img src="${flagUrl}" alt="${currency} flag"> &nbsp;&nbsp;
            ${currency} - ${currencyData.name}
        `;
        optionDiv.setAttribute('data-value', currency);

        optionDiv.addEventListener('click', () => {
            const selected = dropdown.querySelector('.dropdown-selected');
            selected.innerHTML = optionDiv.innerHTML;
            selected.setAttribute('data-value', currency);
            optionsContainer.style.display = 'none';
            updateCurrentConversions(); // Update conversion rates after selection
        });

        optionsContainer.appendChild(optionDiv);
    });

    // Toggle the dropdown visibility when the selected option is clicked
    dropdown.querySelector('.dropdown-selected').addEventListener('click', () => {
        optionsContainer.style.display =
            optionsContainer.style.display === 'none' || optionsContainer.style.display === '' ? 'block' : 'none';
    });

    // Make the dropdown searchable by adding an input field
    const searchInput = document.createElement('input');
    searchInput.setAttribute('type', 'text');
    searchInput.setAttribute('placeholder', 'Search currencies...');
    searchInput.classList.add('dropdown-search-input');
    optionsContainer.insertBefore(searchInput, optionsContainer.firstChild); // Insert the search box at the top

    searchInput.addEventListener('input', () => {
        const searchQuery = searchInput.value.toLowerCase();
        const options = optionsContainer.querySelectorAll('div[data-value]');

        options.forEach(option => {
            const text = option.textContent.toLowerCase();
            option.style.display = text.includes(searchQuery) ? 'block' : 'none';
        });
    });
}

function updateCurrentConversions() {
    const baseSelected = document.getElementById('base-currency-dropdown').querySelector('.dropdown-selected');
    const targetSelected = document.getElementById('target-currency-dropdown').querySelector('.dropdown-selected');

    // Ensure both dropdowns have a selected value
    if (!baseSelected || !targetSelected) {
        console.warn('Dropdown elements are not found.');
        return;
    }

    const baseCurrency = baseSelected.getAttribute('data-value');
    const targetCurrency = targetSelected.getAttribute('data-value');

    if (!baseCurrency || !targetCurrency) {
        console.warn('Please select both base and target currencies.');
        return;
    }

    console.log(`Base currency: ${baseCurrency}, Target currency: ${targetCurrency}`);

    fetch(`${API_URL}${baseCurrency}`)
        .then(response => response.json())
        .then(data => {
            const rateToTarget = data.rates[targetCurrency];
            const rateToBase = 1 / rateToTarget;
            document.getElementById('conversion-base-to-target').textContent = `1 ${baseCurrency} = ${rateToTarget.toFixed(4)} ${targetCurrency}`;
            document.getElementById('conversion-target-to-base').textContent = `1 ${targetCurrency} = ${rateToBase.toFixed(4)} ${baseCurrency}`;
        })
        .catch(() => {
            document.getElementById('conversion-base-to-target').textContent = 'Error loading conversion rates';
            document.getElementById('conversion-target-to-base').textContent = '';
        });
}

// Function to toggle reverse mode and update the arrow
function toggleReverseMode() {
    reverseMode = !reverseMode;
    document.getElementById('reverse-toggle').textContent = reverseMode ? 'Disable Reverse' : 'And Reverse';

    // Update the arrow based on reverse mode
    const arrow = document.getElementById('currency-arrow');
    if (reverseMode) {
        arrow.textContent = '↔'; // Double-sided arrow for reverse mode
    } else {
        arrow.textContent = '→'; // Right arrow for normal mode
    }
}

function startGame() {
    const baseCurrency = document.getElementById('base-currency-dropdown').querySelector('.dropdown-selected').getAttribute('data-value');
    const targetCurrency = document.getElementById('target-currency-dropdown').querySelector('.dropdown-selected').getAttribute('data-value');
    const timerDuration = parseInt(document.getElementById('timer').value, 10);
    console.log(`Timer Duration: ${timerDuration}`);
    // Validate the selected timer value
    if (isNaN(timerDuration) || timerDuration <= 0) {
        alert('Please select a valid time duration.');
        return;
    }
    if (!baseCurrency || !targetCurrency) {
        alert('Please select both currencies.');
        return;
    }
    // Hide the #choices div
    document.getElementById('choices').style.display = 'none';
    document.getElementById('game-area').style.display = 'block';
    document.getElementById('start-game').disabled = true;
    document.getElementById('all-results').style.display = 'none';
    results = [];
    generateQuestion();

    startCountdown(timerDuration);

    let gameInterval = setTimeout(endGame, timerDuration * 1000);
}

function startCountdown(timerDuration) {
    const timerDisplay = document.getElementById('timer-display');
    remainingTime = timerDuration;  // Use the passed in timerDuration

    // Display the initial time
    timerDisplay.textContent = `Time Remaining: ${remainingTime}s`;

    // Countdown logic
    countdownInterval = setInterval(() => {
        remainingTime--;
        timerDisplay.textContent = `Time Remaining: ${remainingTime}s`;

        // Stop the countdown when time reaches 0
        if (remainingTime <= 0) {
            clearInterval(countdownInterval);
            timerDisplay.textContent = 'Time Up!';
            endGame();  // Automatically trigger endGame when the timer reaches 0

        }
    }, 1000);
}

// Function to generate the currency conversion question
function generateQuestion() {
    let baseCurrency = document.getElementById('base-currency-dropdown').querySelector('.dropdown-selected').getAttribute('data-value');
    let targetCurrency = document.getElementById('target-currency-dropdown').querySelector('.dropdown-selected').getAttribute('data-value');

    if (!baseCurrency || !targetCurrency) {
        alert('Please select both currencies.');
        return;
    }

    // Randomly choose whether to ask in the base-to-target direction or the target-to-base direction
    let direction = Math.random() < 0.5 ? 'normal' : 'reverse'; // 50% chance for either direction

    if (reverseMode && direction === 'reverse') {
        // If reverse mode is enabled and we randomly choose reverse, swap currencies
        [baseCurrency, targetCurrency] = [targetCurrency, baseCurrency];
    } else if (!reverseMode && direction === 'reverse') {
        // If reverse mode is not enabled and we choose reverse, swap currencies
        [baseCurrency, targetCurrency] = [targetCurrency, baseCurrency];
    }

    // Fetch conversion rate
    fetch(`${API_URL}${baseCurrency}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const baseToUsdRate = data.rates['USD'];
            const rate = data.rates[targetCurrency];
            if (!rate) {
                throw new Error('Conversion rate not found');
            }

            // Adjust the amount to be proportional to $1–$100 USD
            const scaledAmount = Math.floor(Math.random() * 100) + 1; // $1-$100 equivalent
            const adjustedAmount = (scaledAmount / baseToUsdRate).toFixed(0);
            const formattedAmount = Number(adjustedAmount).toLocaleString(); // Format the number with commas

            const baseFlagUrl = `${flagsBaseUrl}${currencyToCountryCode[baseCurrency]?.code || ''}.webp`;
            const targetFlagUrl = `${flagsBaseUrl}${currencyToCountryCode[targetCurrency]?.code || ''}.webp`;

            // Create question text with flags
            const questionText = `
    <img src="${baseFlagUrl}" alt="${baseCurrency} flag" style="width:20px; height:15px;"> 
    &nbsp; ${formattedAmount} ${baseCurrency} = ___ 
    <img src="${targetFlagUrl}" alt="${targetCurrency} flag" style="width:20px; height:15px;"> 
    &nbsp; ${targetCurrency}`;

            document.getElementById('question').innerHTML = questionText;

            document.getElementById('question').dataset.correctAnswer = (adjustedAmount * rate).toFixed(2);
        })
        .catch(error => {
            console.error('Error fetching conversion rate:', error);
            alert('Failed to load conversion rate. Please try again later.');
        });
}

//submit answer on pressing Enter
document.getElementById('answer').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent the default Enter action (form submission)
        submitAnswer(); // Call the function to submit the answer
    }
});

function submitAnswer() {
    const userAnswer = parseFloat(document.getElementById('answer').value);
    const correctAnswer = parseFloat(document.getElementById('question').dataset.correctAnswer);
    const accuracy = Math.max(0, 100 - (Math.abs(userAnswer - correctAnswer) / correctAnswer) * 100);

    results.push({
        question: document.getElementById('question').textContent,
        userAnswer,
        correctAnswer,
        accuracy
    });

    document.getElementById('answer').value = '';
    document.getElementById('submit-answer').disabled = true; // Re-disable the button
    generateQuestion();
}

// The function to reset (refresh) the page
function resetGame() {
    location.reload();  // Refreshes the page
}

function stopGame() {
    // Stop the game interval
    clearInterval(countdownInterval);

    // Show a message indicating the game was stopped early and display the remaining time
    const resultsContainer = document.getElementById('early_stop');
    resultsContainer.innerHTML = `
        <p><strong>Game stopped early!</strong></p>
        <p>You stopped the game with ${remainingTime} seconds left out of the ${timerDuration} seconds.</p>
        <p>See your results below:</p>
    `;
    // Add the Reset button to the results container
    const resetButtonHTML = `
    <button id="reset-game" onclick="resetGame()">Reset Game</button>
`;
    resultsContainer.innerHTML += resetButtonHTML;

    clearTimeout(gameInterval);
    clearInterval(countdownInterval);

    // Hide the stop game button
    document.getElementById('stop-game').style.display = 'none';

    displayResults();  // Display the results after the game is stopped early
}

function endGame() {
    // Show the #choices div again after the game is over
    document.getElementById('choices').style.display = 'block';
    clearTimeout(gameInterval);
    clearInterval(countdownInterval);
    document.getElementById('game-area').style.display = 'none';
    document.getElementById('all-results').style.display = 'block';

    document.getElementById('start-game').disabled = false;

    displayResults();  // Display the results when the game ends normally (when time runs out)
}

function displayResults() {
    const resultsTable = document.getElementById('results');
    const tbody = resultsTable.querySelector('tbody');
    tbody.innerHTML = '';

    let totalAccuracy = 0;

    results.forEach(({ question, userAnswer, correctAnswer, accuracy }) => {
        const row = document.createElement('tr');
        const accuracyClass = accuracy >= 98 ? 'accuracy-diamond' :
            accuracy >= 95 ? 'accuracy-platinum' :
                accuracy >= 90 ? 'accuracy-gold' :
                    accuracy >= 80 ? 'accuracy-silver' :
                        'accuracy-none';

        row.innerHTML = `
                    <td>${question}</td>
                    <td>${userAnswer}</td>
                    <td>${correctAnswer}</td>
                    <td class="${accuracyClass}">${accuracy.toFixed(2)}%</td>
                `;
        tbody.appendChild(row);

        totalAccuracy += accuracy;
    });

    resultsTable.style.display = 'table';

    const overallAccuracy = (totalAccuracy / results.length).toFixed(2);
    document.getElementById('accuracy-summary').style.display = 'block';
    document.getElementById('overall-accuracy').textContent = `${overallAccuracy}%`;
}

fetchCurrencies();

// Get modal element
const modal = document.getElementById('aboutModal');
const aboutBtn = document.getElementById('aboutBtn');
const closeBtn = document.getElementsByClassName('close-btn')[0];

// Open the modal
aboutBtn.onclick = function () {
    modal.style.display = 'block';
}

// Close the modal when clicking on the close button
closeBtn.onclick = function () {
    modal.style.display = 'none';
}

// Close the modal if the user clicks outside of it
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}