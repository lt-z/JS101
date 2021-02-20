// (P)roblem
/*
Input: Number
Output: Number

Explicit Requirements:
- Move n number to last

Implicit Requirements:
- Inputs are only numbers.
- Rotation digits amount is greater than 0.
- Rotation digits amount is equal to or less than
   the amount of digits in the number.
*/

// (E)xamples
/*
735291 -> 321579
3 -> 3
35 -> 53
105 -> 15
8703529146 -> 7321609845
*/

// (D)ata Structure
/*
Convert the number into an array then back into a number.
*/

// (A)lgorithm
/*
1. Convert number to an array of strings.
2. Iterate through from the length of the array to 1:
  Let the new array equal to modified array from rotateRightmostDigits.
  rotateRightmostDigits's inputs should be the existing array and iteration.
*/

// (C)ode
function rotateRightmostDigits(array, rotateAmount) {
  let index = array.length - rotateAmount;

  let frontArray = array.slice(0, index);
  let backArray = array.slice(index).slice(1);
  let putToEnd = array.slice(index)[0];

  return frontArray.concat(backArray, putToEnd);
}

function maxRotation(number) {
  let array = String(number).split('');

  for (let num = array.length; num > 0; num -= 1) {
    console.log(num);
    array = rotateRightmostDigits(array, num);
  }
  return +array.join('');
}

console.log(maxRotation(735291)); // 321579
console.log(maxRotation(3)); // 3
console.log(maxRotation(35)); // 53
console.log(maxRotation(105)); // 15
console.log(maxRotation(8703529146)); // 7321609845
