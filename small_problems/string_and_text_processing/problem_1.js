// (P)roblem
/*
Input: String
Output: Boolean

Explicit Requirements:
- If all letters are uppercase, return true.
- Ignore non-alphanumeric characters.

Implicit Requirements:
- An empty string '' is considered true.

*/

// (E)xamples
/*
'4SCORE' -> true
'Hello' -> false
'HELLO' -> true
*/

// (D)ata Structure
/*
Keep structure a string
*/

// (A)lgorithm
/*
1. Compare original string with uppercase version of string.
2. Return boolean.
*/

// (C)ode
function isUppercase(string) {
  return string.toUpperCase() === string;
}

console.log(isUppercase('t'));
console.log(isUppercase('T'));
console.log(isUppercase('Four Score'));
console.log(isUppercase('FOUR SCORE'));
console.log(isUppercase('4SCORE!'));
console.log(isUppercase(''));
