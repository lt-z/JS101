const readline = require('readline-sync');

let prompt = (message) => console.log(`=> ${message}`);

let getValidNumber = (number) => {
  while (Number.isNaN(Number(number)) || number.trimStart() === '' || Number(number) <= 0) {
    prompt('Please enter a positive number.');
    number = readline.question();
  }
  return number;
};

let getValidInput = (input) => {
  while (!['y', 'n'].includes(input)) {
    prompt('Invalid selection. Please select y/n.');
    input = readline.question().toLowerCase();
  }
  return input;
};

let calculateMonthlyPayment = (loanAmount, yearlyAPR, loanDuration) => {
  let monthlyAPR = (yearlyAPR / 100) / 12;
  let monthlyPayment = loanAmount * (
    monthlyAPR / (1 - Math.pow((1 + monthlyAPR), (-loanDuration))));
  return monthlyPayment.toFixed(2);
};

while (true) {
  console.clear();
  prompt('Welcome to Mortgage Calculator!');

  prompt('What is your loan amount?');
  let amount = getValidNumber(readline.question());

  prompt('What is your Annual Percentage Rate (APR)? (3% -> 3)');
  let interestRate = getValidNumber(readline.question());

  prompt('What is your loan duration in months?');
  let duration = getValidNumber(readline.question());

  let payment = calculateMonthlyPayment(amount, interestRate, duration);
  prompt(`Your monthly payment is $${payment}.`);

  prompt('Would you like to perform another mortgage calculation? y/n.');
  let repeat = getValidInput(readline.question().toLowerCase());
  if (repeat === 'n') break;
}
