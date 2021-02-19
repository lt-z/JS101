// (P)roblem
/*
Input: String
Output: String

Explicit Requirements:
- Alternate capitalization of characters based on index.
- Non-alphabetic characters do not count towards the index.

Implicit Requirements:
- ?
*/

// (E)xamples
/*
'I love Launch School!' -> 'I lOvE lAuNcH sChOoL!'
'ALL CAPS' -> 'AlL cApS'
'ignore 77 the 4444 numbers' -> 'IgNoRe 77 ThE 444 nUmBeRs'
*/

// (D)ata Structure
/*
Convert the string to array then back to string.
*/

// (A)lgorithm
/*
1. Set a 'counter' to 0.
1. Convert the string into an array and map:
  Iterate through the array:
    If counter is odd, convert to lowercase.
      Return char.
    If counter is even, convert to uppercase.
      Return char.
*/

// (C)ode + Further Exploration
function staggeredCase(string, alphaOnly = false) {
  let needUpper = true;

  return string.toLowerCase().split('').map((char, index) => {
    if (alphaOnly) {
      if (char >= 'a' && char <= 'z') {
        if (needUpper) {
          needUpper = false;
          return char.toUpperCase();
        } else {
          needUpper = true;
          return char.toLowerCase();
        }
      } else {
        return char;
      }
    } else {
      return (index % 2 === 0) ? char.toUpperCase() : char.toLowerCase();
    }
  }).join('');
}

console.log(staggeredCase('I love Launch School!', true));
console.log(staggeredCase('I love Launch School!', false));

// console.log(staggeredCase('ALL CAPS'));
// console.log(staggeredCase('ignore 77 the 4444 numbers'));
