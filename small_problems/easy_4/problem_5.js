// (P)roblem
/*
Input: String
Output: Boolean

Explicit Requirements:
- Case-insensitive characters.
- Can be a string of numbers.
- Ignore all non-alphanumeric characters.

Implicit Requirements:
- String length can be even or odd.

*/

// (E)xamples
/*
madam -> true
Madam -> true
Madam I'm Adam -> true
3566653 -> true
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
function isPalindrome(string) {
  let regex = /[^a-z0-9]+/g;
  let regexString = string.toLowerCase().replace(regex, '');
  return regexString === regexString.split('').reverse().join('');
}

console.log(isPalindrome('madam'));
console.log(isPalindrome('Madam'));
console.log(isPalindrome("Madam, I'm Adam"));
console.log(isPalindrome('356653'));
console.log(isPalindrome('356a653'));
console.log(isPalindrome('123ab321'));
