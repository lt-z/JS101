// (P)roblem
/*
Input: Two Arrays
Output: One Array

Explicit Requirements:
- Always two arrays as arguments.
- Contains only a list of numbers.

Implicit Requirements:
- Length of the arrays are both the same.
*/

// (E)xamples
/*
[3, 5, 7], [9, 10, 11] -> [27, 50, 77]
*/

// (D)ata Structure
/*
Keep structure as an array.
*/

// (A)lgorithm
/*
1. Create an empty 'array'.
2. Create a for-loop for range in array1:
  Push array1[index] * array2[index] into 'array'.
3. Return array.
*/

// (C)ode
let multiplyList = (array1, array2) => {
  let array = [];

  for (let item = 0; item < array1.length; item += 1) {
    array.push(array1[item] * array2[item]);
  }

  return array;
};

console.log(multiplyList([3, 5, 7], [9, 10, 11]));
