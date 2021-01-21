// (P)roblem
/*
Input: Number
Output: Array

Explicit Requirements:
- Returns the individual digits of the number as a single array.
- Number must be positive

Implicit Requirements:
- ?
*/

// (E)xamples
/*
12345 -> [1, 2, 3, 4, 5]
7 -> [7]
*/

// (D)ata Structure
/*
Number to string to an array.
*/

// (A)lgorithm
/*
1. Convert the number into a string.
*/

// (C)ode
let digitList = (number) => {
  let arrayString = String(number).split('');
  return arrayString.map(item => {
    return Number(item);
  });
};

console.log(digitList(12345));
