// (P)roblem
/*
Input: Number
Output: String

Explicit Requirements:
- Random number between 20 and 120.

Implicit Requirements:
- ?
*/

// (E)xamples
/*
Teddy is 30 years old!
*/

// (D)ata Structure
/*
Data structure changes from number to string.
*/

// (A)lgorithm
/*
Utilize Math.random() * 100 + 20;
*/

// (C)ode
function randomBetween(min, max) {
  return Math.round(Math.random() * (max - min + 1)) + min;
}

let age = randomBetween(120, 0);
console.log(age);
console.log(`Teddy is ${age} years old!`);

