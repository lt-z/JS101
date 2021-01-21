// (P)roblem
/*
Input: Array
Output: Number

Explicit Requirements:
- Round down the averaged number.

Implicit Requirements:
- ?
*/

// (E)xamples
/*
[1, 5, 87, 45, 8, 8] -> 25
[9, 47, 24, 95, 16, 52] -> 40
*/

// (D)ata Structure
/*
Convert from array to number.
*/

// (A)lgorithm
/*
1. Reduce the array into the sum of numbers.
2. Round the number down.
*/

// (C)ode
let average = (array) => {
  let number = array.reduce((acc, item) => {
    return acc + item;
  }, 0);

  return Math.floor(number / array.length);
};

console.log(average([1, 2, 3, 3]));
console.log(average([1, 5, 87, 45, 8, 8]));
console.log(average([9, 47, 24, 95, 16, 52]));
