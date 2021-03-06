// (P)roblem
/*
Input: Number, Number
Output: Number

Explicit Requirements:
- Return the first number but flip it by amount in the second number.

Implicit Requirements:
- Inputs are only numbers.
- Rotation digits amount is greater than 0.
- Rotation digits amount is equal to or less than
   the amount of digits in the number.
*/

// (E)xamples
/*
735291, 1 -> 735291
735291, 2 -> 735219
735291, 3 -> 735192
735291, 4 -> 732915
*/

// (D)ata Structure
/*
Convert the number into an array then back into a number.
*/

// (A)lgorithm
/*
1. Convert numbers into an array of strings.
2. Create front array by slicing up to index.
3. Create back array by slicing from index + 1.
4. Create last digit by slicing from index[0].
5. Combine front array, back array, and last digit.
*/

// (C)ode
function rotateRightmostDigits(numbers, rotateAmount) {
  let array = String(numbers).split('');
  let index = array.length - rotateAmount;

  let frontArray = array.slice(0, index);
  let backArray = array.slice(index).slice(1);
  let putToEnd = array.slice(index)[0];

  return +frontArray.concat(backArray, putToEnd).join('');
}

console.log(rotateRightmostDigits(735291, 1)); // 735291
console.log(rotateRightmostDigits(735291, 2)); // 735219
console.log(rotateRightmostDigits(735291, 3)); // 735912
console.log(rotateRightmostDigits(735291, 4)); // 732915
console.log(rotateRightmostDigits(735291, 5)); // 752913
console.log(rotateRightmostDigits(735291, 6)); // 352917
