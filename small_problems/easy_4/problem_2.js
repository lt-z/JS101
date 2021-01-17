// (P)roblem
/*
Input: 6 Numbers
Output: String

Explicit Requirements:
- Determine if the last num is in the first 5 numbers.

Implicit Requirements:
- No input validation. Assume numbers are only inputted.

*/

// (E)xamples
/*
25
16
20
17
23
17
-> 17 is in 25, 16, 20, 17, 23.
*/

// (D)ata Structure
/*
Structure will be from a number -> string -> array -> string
*/

// (A)lgorithm
/*
1. Receive input from 6 numbers via readline-sync.
2. Convert the first 5 numbers into an array of numbers.
3. Use the .includes function to see if the last number is inside the array.
4. Return log of whether the number does/does not appear in the array.
*/

// (C)ode
let readline = require('readline-sync');
let array = [];

array.push(readline.questionFloat('Enter the 1st number: '));
array.push(readline.questionFloat('Enter the 2nd number: '));
array.push(readline.questionFloat('Enter the 3rd number: '));
array.push(readline.questionFloat('Enter the 4th number: '));
array.push(readline.questionFloat('Enter the 5th number: '));
let lastNum = readline.questionFloat('Enter the last number: ');

if (array.includes(lastNum)) {
  console.log(`The number ${lastNum} appears in ${array.join(', ')}.`);
} else {
  console.log(`The number ${lastNum} does not appear in ${array.join(', ')}.`);
}

// Further Exploration
function condition(array, num) {
  return array.some(element => element > num);
}

console.log(condition(array, lastNum));
