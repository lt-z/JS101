// (P)roblem
/*
Input: None
Output: Number

Explicit requirements:
- Odd numbers between 1 and 99 shall be shown on the console.
- Each odd number is on a separate line.

Implicit requirements:
- No input is required.
*/

// (E)xamples
/*
1
3
5
7
9
*/

// (D)ata Structure
// Data structure will remain numbers.

// (A)lgorithm
/*
Iterate through numbers from 1 to 99:
  In each iteration, check if the number is odd
    If it is odd, log to console
*/

// (C)ode
//Implementation 1
// for (let number = 1; number <= 99; number += 1) {
//   if (number % 2 !== 0) {
//     console.log(number);
//   }
// }

//Implementation 2 - Further Exploration
let readline = require('readline-sync');

console.log('What is the lower limit?');
let lowerLimit = Number(readline.question());
console.log('What is the upper limit?');
let upperLimit = Number(readline.question());
let currentNumber = lowerLimit;

while (currentNumber <= upperLimit) {
  if (currentNumber % 2 !== 0) {
    console.log(currentNumber);
  }
  currentNumber += 1;
}
