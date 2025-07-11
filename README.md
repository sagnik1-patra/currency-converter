A modern, responsive web application to convert between currencies in real-time using live exchange rates.

 Live App: https://fancy-cocada-694518.netlify.app/

 Overview
This Currency Converter allows users to:
 Select two different currencies (e.g., USD to INR)
 Enter an amount in one currency and instantly see the converted amount in the other
 Swap currencies with one click
 Toggle between light and dark modes
 View last updated timestamp for exchange rates

Built with HTML, CSS, and JavaScript, it uses a real-time currency exchange API for accurate conversions.

 API Used
We use the free ExchangeRate API to fetch live exchange rates.

Example API Call:

bash
Copy
Edit
https://api.exchangerate-api.com/v4/latest/USD
 Features Implemented
 Currency Dropdowns

Select "From" and "To" currencies (supports multiple major currencies).

 Real-Time Conversion

Automatically fetches exchange rates and converts on input/change.

 Swap Button

Swap selected currencies instantly.

 Dark Mode Toggle

Switch between light and dark themes.

 Last Updated Timestamp

Shows when exchange rates were last updated.

 Mobile Responsive Design

Works perfectly on phones, tablets, and desktops.

Glassmorphism UI

Attractive design with a blurred glass effect and background image.

 Setup Guide
 Clone the Repository
bash
Copy
Edit
git clone https://github.com/your-username/currency-converter.git
cd currency-converter
 Run Locally
Open index.html in your browser.

No server or build step needed (pure HTML/CSS/JS).

 Deploy to Netlify (Optional)
Go to https://netlify.com

Drag and drop your project folder.

 Advanced Features
 Dynamic Currency Flags
 Glassmorphism UI Design
 Fully Responsive Mobile Layout
 Future Scope:

Add historical rate charts using Chart.js

 Support for 50+ global currencies dynamically

 Tech Stack
HTML5

CSS3 (Flexbox, Glassmorphism)

JavaScript (ES6) (fetch API, DOM manipulation)

Netlify for hosting

 Live Demo
 https://fancy-cocada-694518.netlify.app/
