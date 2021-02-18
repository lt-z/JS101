// (P)roblem
/*
Input: String
Output: String

Explicit Requirements:
- Alternate capitalization of characters based on index.
- Non-alphabetic characters count towards the index.
- Start with caps as index 0.

Implicit Requirements:
- ?
*/

// (E)xamples
/*
'I love Launch School!' -> 'I LoVe lAuNcH ScHoOl!'
'ALL_CAPS' -> 'AlL_CaPs'
'ignore 77 the 4444 numbers' -> 'IgNoRe 77 ThE 4444 nUmBeRs'
*/

// (D)ata Structure
/*
Convert the string to array then back to string.
*/

// (A)lgorithm
/*
1. Convert the string into an array and map:
  Iterate through the array:
    If index is odd, convert to lowercase.
      Return char.
    If index is even, convert to uppercase.
      Return char.
*/

// (C)ode
function staggeredCase(string) {
  return string.split('').map((char, index) => {
    if (index % 2 === 0 ) {
      return char.toUpperCase();
    } else {
      return char.toLowerCase();
    }
  }).join('');
}

console.log(staggeredCase('I love Launch School!'));
console.log(staggeredCase('ALL_CAPS'));
console.log(staggeredCase('ignore 77 the 4444 numbers'));
