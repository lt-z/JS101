// (P)roblem
/*
Input: Fraction(Number, Number)
Output: Array

Explicit Requirements:
- Two functions:
  1. Convert rational number and return an array of denominators.
  2. Array of numbers, and calculate the resulting rational number.

Implicit Requirements:
- ?
*/

// (E)xamples
/*
Egyptian:
2, 1 -> [1, 2, 3, 6]
137, 60 -> [1, 2, 3, 4, 5]

Unegyptian:
1, 2 -> 0.5
3, 4 -> 0.75
39, 20 -> 1.95
*/

// (D)ata Structure
/*
Egyptian:
Convert fraction into an array.

Unegyptian:
Convert array into a decimal.
*/

// (A)lgorithm
/*
Egyptian Function:
1. Create variable for the current sum = 0.
2. Create an empty 'array'.
3. Create the denominator starting at 1.
4. While the summation is smaller than the fraction:
  If the summation + the next denomination is smaller or equal to the fraction:
    Perform the summation.
    Push the denominator to the array.
  Denominator + 1
5. Return array.

Unegyptian function:
1. Create variable sum = 0.
2. Create a loop from 0 to the array length:
  Add (1 / iteration) to sum.
3. Return sum.
*/

// (C)ode
let Fraction = require('fraction.js');

function egyptian(fraction) {
  let summation = 0;
  let array = [];
  let denominator = 1;

  while (fraction.compare(summation) === 1) {
    if (summation + (1 / denominator) <= fraction) {
      summation += (1 / denominator);
      array.push(denominator);
    }
    denominator += 1;
  }
  return array;
}

function unegyptian(array) {
  let sum = 0;

  for (let num = 0; num < array.length; num += 1) {
    sum += (1 / array[num]);
  }

  return sum;
}

console.log(egyptian(Fraction(2, 1))); // -> [1, 2, 3, 6]
console.log(egyptian(Fraction(127, 130))); // -> [1, 2, 3, 4, 5]
console.log(egyptian(Fraction(3, 1))); // -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 230, 57960]

console.log(unegyptian(egyptian(new Fraction(1, 2)))); // logs 0.50
console.log(unegyptian(egyptian(new Fraction(3, 4)))); // logs 0.75
console.log(unegyptian(egyptian(new Fraction(39, 20)))); // logs 1.95
console.log(unegyptian(egyptian(new Fraction(127, 130)))); // logs 0.9769230769230768
console.log(unegyptian(egyptian(new Fraction(5, 7)))); // logs 0.7142857142857142
console.log(unegyptian(egyptian(new Fraction(1, 1)))); // logs 1
console.log(unegyptian(egyptian(new Fraction(2, 1)))); // logs 2
console.log(unegyptian(egyptian(new Fraction(3, 1)))); // logs 3
