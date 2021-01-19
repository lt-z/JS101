// (P)roblem
/*
Input: Arrays
Output: Array

Explicit Requirements:
- Combine two arrays into one array.
- Values are not duplicated in the returned array.
- No duplicates in the returned array, even if there are duplicates in the
original arrays.

Implicit Requirements:
- Values are numbers only.
- Input validation is not needed.
*/

// (E)xamples
/*
[1, 3, 5], [3, 6, 9] -> [1, 3, 5, 6, 9]
*/

// (D)ata Structure
/*
Structure will remain as arrays.
*/

// (A)lgorithm
/*
1. Create new 'array'.
2. Concatenate both input arrays into one.
3. Iterate through concatenated array:
  If item is not in 'array', push.
4. Return 'array'.
*/

// (C)ode
let removeDuplicates = (array) => {
  let combinedArray = [];

  array.forEach(item => {
    if (!combinedArray.includes(item)) {
      combinedArray.push(item);
    }
  });
  return combinedArray;
};

let union = (array1, array2) => {
  let array3 = array1.concat(array2);

  return removeDuplicates(array3);
};

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9])