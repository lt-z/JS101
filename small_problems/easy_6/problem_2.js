// (P)roblem
/*
Input: String
Output: String

Explicit Requirements:
- Every character is doubled except for vowels.

Implicit Requirements:
- Blank string does nothing.
*/

// (E)xamples
/*
Hello -> HHeelloo
Good job! -> GGoooodd jjoobb!!
'' -> ''
*/

// (D)ata Structure
/*
String to string
*/

// (A)lgorithm
/*
1. Create an empty 'string'.
2. Loop through original string:
  3. If letter not in array of vowels, add repeat.
  4. Else add vowels only.
5. Return 'string'.
  */

// (C)ode
let repeater = (string) => {
  let repeatString = '';
  for (let letter in string) {
    if (['a', 'e', 'i', 'o', 'u'].includes(string[letter])) {
      repeatString += string[letter];
    } else {
      repeatString += string[letter].repeat(2);
    }
  }
  return repeatString;
};

console.log(repeater('String'));
console.log(repeater('Hello-World'));
console.log(repeater('July 4th'));
console.log(repeater(''));
