// (P)roblem
/*
Input: String
Output: String

Explicit Requirements:
- Return the opposite case of each character.
- Other non-alpha characters remain the same.

Implicit Requirements:
- ?
*/

// (E)xamples
/*
'CamelCase' -> 'cAMELcASE'
'Tonight on XYZ-TV' -> 'tONIGHT ON xyz-tv'
*/

// (D)ata Structure
/*
Convert into an array then back into a string.
*/

// (A)lgorithm
/*
1. Iterate through the string:
  If character is uppercase:

*/

// (C)ode
function swapCase(string) {
  let array = string.split('');

  return array.map(char => {
    if ((char >= 'A') && (char <= 'Z')) {
      return char.toLowerCase();
    } else if ((char >= 'a') && (char <= 'z')) {
      return char.toUpperCase();
    } else {
      return char;
    }
  }).join('');
}

console.log(swapCase('CamelCase'));
console.log(swapCase('Tonight on XYZ-TV'));
