// (P)roblem
/*
Tip Calculator
Input: Two numbers (bill and tip %)
Output: Two numbers (tip $ and total $)

Explicit Requirements:
- Ignore input validation. Assume user will only input numbers.

Implicit Requirements:
- Input tip percentage is in percents.
- Round to the nearest cent.
*/

// (E)xamples
/*
What is the bill? >200
What is the tip percentage? >15

The tip is $30.00
The total is $230.00
*/

// (D)ata Structure
// Keep the data structure as numbers.

// (A)lgorithm
/*
Prompt for bill amount and set as 'bill'.
Prompt for tip percent and set as 'tip'.
Convert 'tip' to a decimal.
Calculate tip amount -> 'bill' * 'tip' and set as 'tipAmount'
Calculate total bill -> 'tipAmount' + 'bill'
Log both calculations to user.
*/
// (C)ode
let readline = require('readline-sync');

let bill = parseFloat(readline.question('What is the bill? '), 10);
let tipPercent = parseFloat(readline.question('What is the tip percentage? '), 10);

let tipAmount = bill * (tipPercent / 100);
let billTotal = bill + tipAmount;

console.log(`The tip is $${tipAmount.toFixed(2)}`);
console.log(`The total is $${billTotal.toFixed(2)}`);
