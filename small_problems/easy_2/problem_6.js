// (P)roblem
/*
Input: String
Output: String

Explicit Requirements:
- Assumes there are at least two words

Inplicit Requirements:
- A word is separated by a space
*/

// (E)xamples
/*
last word -> last
Launch School is great! -> is
*/

// (D)ata Structure
/*
Keep structure as strings.
*/

// (A)lgorithm
/*
Create 'arr' to store array of string separated by ' '
Return slice arr at -2 to -1.
*/

// (C)ode
let penultimate = (string) => {
  let arr = string.split(' ');
  return arr[arr.length - 2];
};

console.log(penultimate('hello world'));
console.log(penultimate('Launch School is great!'));
console.log(penultimate('This is a test sentence that is very long'));

//Further Exploration
let middle = (string) => {
  let arr = string.trim().split(' ');
  if (arr.length !== 1 && (arr.length - 1) % 2 === 0) {
    return arr[Math.floor((arr.length - 1) / 2)];
  } else {
    return 'Invalid input';
  }
};

console.log(middle('One Two Three Four Five Six Seven'));
console.log(middle('One Two Three Four Five Six'));
console.log(middle('One Two Three Four Five'));
console.log(middle('One Two Three Four'));
console.log(middle('One Two Three'));
console.log(middle('One Two'));
console.log(middle('One'));
console.log(middle('   '));
