// (P)roblem
/*
Input: Two arrays
Output: One array

Explicit Requirements:
- Both input arrays are non-empty.

Implicit Requirements:
- Both input arrays are numbers.
*/

// (E)xamples
/*
[2, 4], [4, 3, 1, 2] -> [2, 4, 4, 6, 8, 8, 12, 16]
*/

// (D)ata Structure
/*
Keep the structure an array.
*/

// (A)lgorithm
/*
1. Create an empty 'array'.
2. Loop through the first array:
  a. Loop through the second array:
    1. Multiply iteration of second array by iteration of first array.
    2. Push to 'array'
3. Return sorted 'array'
*/

// (C)ode
function multiplyAllPairs(array1, array2) {
  let newArray = [];

  for (let num1 in array1) {
    for (let num2 in array2) {
      newArray.push(array2[num2] * array1[num1]);
    }
  }

  return newArray.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));
