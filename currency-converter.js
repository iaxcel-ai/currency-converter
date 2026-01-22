const prompt = require("prompt-sync")();

console.log("Welcome to the Currency Converter!");

const exchangeRates = {
  USD: 1.0,
  EUR: 0.89,
  JPY: 113.5,
  RUB: 74.36,
  GBP: 0.75
};

console.log("What do you want to do?");
console.log("1. Convert Currencies");
console.log("2. Exit program");

const choice = prompt("Enter your choice (1 or 2): ");

if (choice === "1") {
  console.log("\nAvailable currencies:");
  for (const currency in exchangeRates) {
    console.log(`- ${currency}`);
  }


  const fromCurrency = prompt("Enter the currency you are converting from: ").toUpperCase();
  const amount = parseFloat(prompt("\nEnter the amount you want to convert: "));
  const toCurrency = prompt("Enter the currency you want to convert to: ").toUpperCase();


  if (!exchangeRates[fromCurrency] || !exchangeRates[toCurrency]) {
    console.log("Invalid currency code. Please choose from the list above.");
  } else {
    const amountInUSD = amount / exchangeRates[fromCurrency];
    const convertedAmount = amountInUSD * exchangeRates[toCurrency];

    console.log(`${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`);
  }
} else if (choice === "2") {
  console.log("Exiting program. Goodbye!");
} else {
  console.log("Invalid choice. Please restart and select 1 or 2.");
}