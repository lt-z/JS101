// (P)roblem
/*
Input: Array
Output: Number

Explicit Requirements:
- Array has one duplicate value, while all others are non-duplicates.
- Find the single duplicate value.

Implicit Requirements:
- Minimum of two values in array.

*/

// (E)xamples
/*
[1, 5, 3, 1] -> 1
[1, 2, 3, 4, 5, 6, 3, 7, 8, 9, 10] -> 3
*/

// (D)ata Structure
/*
Structure from array to number.
*/

// (A)lgorithm
/*
Create new 'seen' array.
Iterate through 'array'
  Check if current iteration is in 'seen' array:
  If not, push iteration into seen array.
  else:
    return iteration.
*/

// (C)ode
function findDup(array) {
  let seenArray = [];

  for (let num in array) {
    if (!seenArray.includes(array[num])) {
      seenArray.push(array[num]);
    } else {
      return array[num];
    }
  }
  return 'No duplicate';
}

console.log(findDup([1, 5, 3, 1]));                                // 1
console.log(findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
  38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
  14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
  78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
  89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
  41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
  55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
  85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
  40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
  7, 34, 57, 74, 45, 11, 88, 67,  5, 58]));    // 73