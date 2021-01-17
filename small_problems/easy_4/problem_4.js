// (P)roblem
/*
Input: String
Output: Boolean

Explicit Requirements:
- Case of all characters matters.
- Can be a string of numbers.
- Location (spacing) also matter.

Implicit Requirements:
- String length can be even or odd.

*/

// (E)xamples
/*
madam -> true
Madam -> false
madam i'm adam -> false
3566653 -> true
*/

// (D)ata Structure
/*
Convert string to an array then to a boolean.
*/

// (A)lgorithm
/*
1. Return comparison of original string with reversed string.
*/

// (C)ode
function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}


console.log(isPalindrome('madam'));
console.log(isPalindrome('Madam'));
console.log(isPalindrome("madam i'm adam"));
console.log(isPalindrome('356653'));
