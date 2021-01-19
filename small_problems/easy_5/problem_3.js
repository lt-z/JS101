// (P)roblem
/*
Input: Array
Output: Arrays

Explicit Requirements:
- Split array in two separate arrays.
- If odd # elements, middle element goes in left array.

Implicit Requirements:
- If empty array, return two empty arrays.
*/

// (E)xamples
/*
[1, 2, 3, 4] -> [[1, 2], [3, 4]]
[1, 5, 2, 4, 3] -> [[1, 5, 2], [4, 3]]
[5] -> [[5], []]
[] -> [[], []]
*/

// (D)ata Structure
/*
Keep structure an array.
*/

// (A)lgorithm
/*
1. 'arrayLenHalf' equals to array.length / 2
2. If it not divisible by 2 (odd):
  Slice 'arrayLenHalf' + 1
3. Return the first half slice and second half slice.
*/

// (C)ode
function halvsies(array) {
  let arrayLenHalf = Math.ceil(array.length / 2);
  let leftHalf = array.slice(0, arrayLenHalf);
  let rightHalf = array.slice(arrayLenHalf);

  return [leftHalf, rightHalf];
}

console.log(halvsies([1, 2, 3, 4]));
console.log(halvsies([1, 5, 2, 4, 3]));
console.log(halvsies([1]));
console.log(halvsies([]));
