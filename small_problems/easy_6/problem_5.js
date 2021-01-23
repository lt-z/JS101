// (P)roblem
/*
Input: Number
Output: Number

Explicit Requirements:
- If positive, turn to negative.
- If negative, remain negative.
- If zero, return negative zero.

Implicit Requirements:
- Only numbers allowed.
*/

// (E)xamples
/*
5 -> -5
-5 -> -5
0 -> -0
*/

// (D)ata Structure
/*
Keep number as number.
*/

// (A)lgorithm
/*
1. If number is above -1, multiply by -1.
  Else, return number.
*/

// (C)ode
let negative = (number) => (number > -1 ? number * -1 : number);

console.log(negative(5));
console.log(negative(-3));
console.log(negative(0));

// Further Exploration
let negative1 = (number) => (Math.abs(number) * -1);

console.log(negative1(5));
console.log(negative1(-3));
console.log(negative1(0));

// Numbers in JS are floating point, so all numbers are signed.