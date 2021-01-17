// (P)roblem
/*
Input: Number
Output: Boolean

Explicit Requirements:
- If the numbers read the same backwards or forwards.

Implicit Requirements:
- Number length does not matter.

*/

// (E)xamples
/*
34543 -> true
123210 -> false
22 -> true
5 -> true
*/

// (D)ata Structure
/*
Convert string to an array then to a boolean.
*/

// (A)lgorithm
/*
1. Create a regex to remove all the non-alphanumeric characters.
2. Compare if regex string is the same as reversed regex string.
*/

// (C)ode
function isPalindromicNumber(number) {
  let stringNum = String(number);
  return stringNum === stringNum.split('').reverse().join('');
}

console.log(isPalindromicNumber(34543));
console.log(isPalindromicNumber(123210));
console.log(isPalindromicNumber(22));
console.log(isPalindromicNumber(5));
