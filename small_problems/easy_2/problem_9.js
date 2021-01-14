// (P)roblem
/*
Input: String
Output: Integer

Explicit Requirements:
- Cannot use conventional conversion methods (Number() or parseInt()).
- Do not worry about the leading + or - signs.
- Do not worry about invalid characters. Assume all are numeric numbers.

Implicit Requirements:
- ?
*/

// (E)xamples
/*
'4321' -> 4321
'560' -> 560
*/

// (D)ata Structure
/*
From a string to a number.
*/

// (A)lgorithm
/*
Split the string into an array of the string.
Create a counter 'result'.
Create a multiple of tens array that has the same length of the string array.
  Loop through the length of the string array startingfrom highest num to
  lowest and push to tens array.
Iterate through length of tens array and multiply each item with the string.
array item and add to 'result'.
Return result.
*/

// (C)ode
function stringToInteger(string) {
  let array = string.split('');
  let tensArray = [];
  let result = 0;

  for (let iter = 10 ** (array.length - 1); iter >= 1; iter /= 10) {
    tensArray.push(iter);
  }
  for (let item = 0; item < tensArray.length; item += 1) {
    result += tensArray[item] * array[item];
  }
  return result;
}


console.log(stringToInteger('43245451'));
console.log(stringToInteger("570"));

// Further Exploration
function hexadecimalToInteger(number) {
  const DIGITS = {
    0: 0, 1: 1,
    2: 2, 3: 3,
    4: 4, 5: 5,
    6: 6, 7: 7,
    8: 8, 9: 9,
    A: 10, B: 11,
    C: 12, D: 13,
    E: 14, F: 15
  };

  let arrayNum = number.toUpperCase().split('').map(char => DIGITS[char]);
  let value = 0;
  arrayNum.forEach(digit => (value = (16 * value) + digit));
  return value;
}

console.log(hexadecimalToInteger('4D9f')); // 19871