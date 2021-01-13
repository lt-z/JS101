// (P)roblem
/*
Input: String
Output: Number

Explicit Requirements:
- Convert from letter to its ASCII value
- Sum each ASCII value

Implicit Requirements:
- No input validation

*/

// (E)xamples
/*
Four Score -> 984
Launch School -> 1251
a -> 97
'' -> 0
*/

// (D)ata Structure
/*
Convert structure from string to an array then reduce to a
number via  String.charCodeat()
*/

// (A)lgorithm
/*
Split the string into an array and store as 'arr'
Iterate through array via reduce and accumulate each letter's ASCII value
Return accumulator
*/

// (C)ode
let asciiValue = (string) => {
  let arr = string.split('');

  return arr.reduce((accumulator, _, index) => {
    return accumulator + string.charCodeAt(index);
  }, 0);
};

console.log(asciiValue('Four score'));
console.log(asciiValue('Launch School'));
console.log(asciiValue('a'));
console.log(asciiValue(''));

let asciiValue2 = (string) => {
  let sum = 0;

  for (let index = 0; index < string.length; index += 1) {
    sum += string.charCodeAt(index);
  }

  return sum;
};

console.log(asciiValue2('Four score'));
console.log(asciiValue2('Launch School'));
console.log(asciiValue2('a'));
console.log(asciiValue2(''));
