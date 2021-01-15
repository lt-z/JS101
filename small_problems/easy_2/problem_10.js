// (P)roblem
/*
Input: String
Output: Integer

Explicit Requirements:
- Cannot use conventional conversion methods (Number() or parseInt()).
- Do not worry about invalid characters. Assume all are numeric numbers.

Implicit Requirements:
- ?
*/

// (E)xamples
/*
'4321' -> 4321
'-560' -> -560
'+100' -> 100
*/

// (D)ata Structure
/*
From a string to a number.
*/

// (A)lgorithm
/*
If first letter of string is - or +, remove the first letter
and send to 'stringToInteger'.
  Else, send full string.
Return negative or positive, - or +, respectively.
*/

// (C)ode
function stringToInteger(string) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  };
  let arrayOfDigits = string.split("").map(char => DIGITS[char]);
  let value = 0;
  arrayOfDigits.forEach(digit => (value = (10 * value) + digit));
  return value;
}

function stringToSignedInteger(string) {
  switch (string[0]) {
    case '-':
      return -stringToInteger(string.slice(1));
    case '+':
      return stringToInteger(string.slice(1));
    default:
      return stringToInteger(string);
  }
}

console.log(stringToSignedInteger("4321")); // logs true
console.log(stringToSignedInteger("-570")); // logs true
console.log(stringToSignedInteger("+100")); // logs true
