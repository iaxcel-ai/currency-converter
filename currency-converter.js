const input = require("sync-input");

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

const choice = input("Enter your choice (1 or 2): ");

if (choice === "1") {
  console.log("\nAvailable currencies:");
  for (const currency in exchangeRates) {
    console.log(`- ${currency}`);
  }


  const fromCurrency = input("Enter the currency you are converting from: ").toUpperCase();
  const amount = parseFloat(input("\nEnter the amount you want to convert: "));
  const toCurrency = input("Enter the currency you want to convert to: ").toUpperCase();


  if (!exchangeRates[fromCurrency] || !exchangeRates[toCurrency]) {
    console.log("Invalid currency code. Please choose from the list above.");
  return;
  }

  const convertedAmount = (amount / exchangeRates[fromCurrency]) * exchangeRates[toCurrency];
  console.log(`${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`);

} else if (choice === "2") {
  console.log("Exiting. Goodbye!");
  process.exit();
} else {
  console.log("Invalid choice. Please restart and select a valid option.");
}