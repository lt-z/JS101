// (P)roblem
/*
Input: Number
Output: Number

Explicit Requirements:
- If there are leading zeros when reversed, the leading zeros are dropped.

Implicit Requirements:
- ?
*/

// (E)xamples
/*
12345 -> 54321
12213 -> 31121
456 -> 654
12000 -> 21
1 -> 1
*/

// (D)ata Structure
/*
Number to string back to number.
*/

// (A)lgorithm
/*
1. Convert number to string and set as 'string'
2. Reverse the string and convert back into a number.
*/

// (C)ode
let reverseNumber = (number) => {
  let numToArray = String(number).split('');
  let arrayToString = Number(numToArray.reverse().join(''));
  return arrayToString;
};

console.log(reverseNumber(12345));
console.log(reverseNumber(12213));
console.log(reverseNumber(156));
console.log(reverseNumber(12000));
console.log(reverseNumber(1));
