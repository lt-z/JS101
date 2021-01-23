// (P)roblem
/*
Input: String
Output: String

Explicit Requirements:
- Every character is doubled.

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
  Use repeat method to each letter and add into 'string'.
*/

// (C)ode
let repeater = (string) => {
  let repeatString = '';
  for (let letter in string) {
    repeatString += string[letter].repeat(2);
  }
  return repeatString;
};

console.log(repeater('test'));
console.log(repeater(''));
