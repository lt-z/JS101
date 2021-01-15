// (P)roblem
/*
Input: Number
Output: String

Explicit Requirements:
- Cannot use standard conversion functions like String(), .toString(),
or '' + number.

Implicit Requirements:
- ?

*/

// (E)xamples
/*
4321 -> '4321'
0 -> '0'
5000 -> '5000'
*/

// (D)ata Structure
/*
Convert from number to string.
*/

// (A)lgorithm
/*
Create an array of string digits.
Create an empty string 'result'.
While the current number is above 0:
  'remainder' should equal to the remainder of the number / 10.
  Convert the remainder to a string via the 'digits' array.
  Add the remainder to the result.
  Divide the 'number' by 10 and round down to nearest integer.
Return 'result'.
*/

// (C)ode
function integerToString(number) {
  let DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let result = '';

  do {
    let remainder = number % 10;
    result = DIGITS[remainder] + result;
    number = Math.floor(number / 10);

  } while (number > 0);

  return result;
}

console.log(integerToString(4321));
console.log(integerToString(0));
console.log(integerToString(5000));
console.log(integerToString(1293080));
