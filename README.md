# Group3
Global Explorer
An Angular web application that allows users to search for detailed information about any country in the world using the REST Countries API.

Features
Search for any country by its full name
Dropdown with all available country names
Displays country details: flag, capital, region, subregion, population, languages, currencies, and timezones
Dark mode support (persisted via localStorage)
Tech Stack
Angular 21
REST Countries API v3.1
TypeScript
CSS
Getting Started
Prerequisites
Node.js >= 18
npm >= 11
Installation
npm install
Run Development Server
npm start
Open your browser at http://localhost:4200.

Build
npm run build
Run Tests
npm test
Project Structure
src/
├── app/
│   ├── components/
│   │   ├── country-card/     # Displays country details
│   │   ├── country-list/     # Renders a list of country cards
│   │   └── search-bar/       # Search input with dropdown
│   ├── models/
│   │   └── country.model.ts  # Country data interface
│   ├── pages/
│   │   └── home/             # Main page with search logic
│   └── services/
│       └── country.service.ts # API calls to REST Countries
└── styles.css                 # Global styles
