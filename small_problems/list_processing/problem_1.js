// (P)roblem
/*
Input: Number
Output: Number

Explicit Requirements:
- Cannot use for loops, while loops, do while loops.
- Can use method calls to perform the sum.

Implicit Requirements:
- ?
*/

// (E)xamples
/*
23 -> 5
496 -> 19
123456789 -> 45
*/

// (D)ata Structure
/*
Change number into a string, then into an array of numbers, sum the numbers.
*/

// (A)lgorithm
/*
1. Convert the number into a string.
2. Convert the string into an array of numbers
3. Loop through array via reduce and sum the number to the accumulator.
4. Return accumulator.
*/

// (C)ode
let sum = (number) => {
  let array = String(number).split('').map(num => Number(num));
  return array.reduce((num, acc) => acc + num, 0);
};

console.log(sum(23));
console.log(sum(496));
console.log(sum(123456789));
