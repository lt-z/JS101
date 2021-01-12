// (P)roblem
/*
Input: Number then string
Output: String

Explicit Requirements:
- The numbers to sum/multiply are inclusive of the last number.
- No numbers below 1 are allowed.
- Need input validation.

Implicit Requirements:
- The numbers received is a positive whole number.
-
*/

// (E)xamples
/*
Enter integer above 0: > 5
Enter 's' to compute sum, or 'p' to compute the product: > s

The sum of integers between 1 and 5 is 15.

Enter integer above 0: > 6
Enter 's' to compute sum, or 'p' to compute the product: > p

The product of integers between 1 and 6 is 720.
*/

// (D)ata Structure
/*
Data structure can be converted to an array then reduced to a single number.
5 -> [1, 2, 3, 4, 5] -> 15
6 -> [1, 2, 3, 4, 5, 6] -> 720
*/

// (A)lgorithm
/*
Validate number is > 0.
Validate input for string: s or p
Create an array from 1 to number

If s:
  Reduce the array while summing each number to the accumulator
  Return the accumulator
If p:
  Reduce the array while multiply each number by the accumulator
  Return the accumulator
*/

// (C)ode
let readline = require('readline-sync');

function getValidNumber(number) {
  while (number < 0 || Number.isNaN(number)) {
    number = parseInt(readline.question('Please enter an integer above 0: '), 10);
  }

  return number;
}

function getValidString(string) {
  while (!['s', 'p'].includes(string)) {
    string = readline.question('Enter "s" to compute the sum, or "p" to compute the product: ');
  }

  return string;
}

let number = getValidNumber(parseInt(readline.question('Please enter an integer above 0: '), 10));
let string = getValidString(readline.question('Enter "s" to compute the sum, or "p" to compute the product: '));
let strObj = {s: 'string', p: 'product'};
let arr = [];
for (let num = 1; num <= number; num += 1) {
  arr.push(num);
}

let total = 0;
if (string === 's') {
  total = arr.reduce((accumulator, num) => accumulator + num, 0);
} else {
  total = arr.reduce((accumulator, num) => accumulator * num, 1);
}
console.log(`The ${strObj[string]} of the integers between 1 and ${number} is ${total}.`);
