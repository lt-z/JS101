// (P)roblem
/*
Input: Number
Output: Number

Explicit Requirements:
- One number.
- No input validation.

Implicit Requirements:
- ?
*/

// (E)xamples
/*
5 -> 25
10 -> 100
-3 -> 9
*/

// (D)ata Structure
/*
Data structures remains as numbers.
*/

// (A)lgorithm
// number * number

// (C)ode
let multiply = (number1, number2) => number1 * number2;
let square = (number) => multiply(number, number);

console.log(square(-8));
console.log(square(5));
console.log(square(41));

//Further Exploration
let power = (number, pow) => multiply(number, 1) ** pow;

console.log(power(6, 3));