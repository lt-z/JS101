// (P)roblem
/*
Input: Number
Output: String

Explicit Requirements:
- Input is one positive integer only.
- Output always starts with '1'.
- After '1', it alternates between '0' and '1' for the length of the number.

Implicit Requirements:
- Input validation is not needed.

*/

// (E)xamples
/*
6 -> 101010
9 -> 10101010
4 -> 1010
7 -> 1010101
*/

// (D)ata Structure
/*
Data structure changes from a number to a string.
*/

// (A)lgorithm
/*
Create empty string 'string'.
Iterate from 0 to the input number:
  If index is odd, add '1' to 'string'
  Else, add '0' to 'string'
Return 'string'.
*/

// (C)ode
function stringy(number) {
  let string = '';
  for (let item = 0; item < number; item += 1) {
    switch (item % 2) {
      case 0:
        string += '1';
        break;
      default:
        string += '0';
        break;
    }
  }
  return string;
}

console.log(stringy(6));
console.log(stringy(9));
console.log(stringy(4));
console.log(stringy(7));
console.log(stringy(1));

function stringy2(number) {
  let string = '';
  for (let item = 0; item < number; item += 1) {
    if (item % 2 === 0) {
      string += '1';
    } else {
      string += '0';
    }
  }
  return string;
}

console.log(stringy2(6));
console.log(stringy2(9));
console.log(stringy2(4));
console.log(stringy2(7));
console.log(stringy2(1));