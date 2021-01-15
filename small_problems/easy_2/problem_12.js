// (P)roblem
/*
Input: Number
Output: String

Explicit Requirements:
- Cannot use String(), .toString().
- Can use integertoString() from problem_11

Implicit Requirements:
- Cannot use `${}`

*/

// (E)xamples
/*
4321 -> '+4321'
-123 -> '-123'
0 -> '0'
*/

// (D)ata Structure
/*
Convert structure from number to string.
*/

// (A)lgorithm
/*

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

function signedIntegerToString(number) {
  switch (Math.sign(number)) {
    case -1:
      return '-' + integerToString(number * -1);
    case 1:
      return '+' + integerToString(number);
    default:
      return integerToString(number);
  }
}

console.log(signedIntegerToString(4321));
console.log(signedIntegerToString(-123));
console.log(signedIntegerToString(0));