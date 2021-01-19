// (P)roblem
/*
Input: Two arrays
Output: One Array

Explicit Requirements:
- Alternate between array1 and array2 in the new array.

Implicit Requirements:
- Input is non-empty and always have same number of elements.
*/

// (E)xamples
/*
[1, 2, 3], [4, 5, 6] -> [1, 4, 2, 5, 3, 6]
[1,2 , 3], [a, b, c] -> [1, a, 2, b, 3, c]
*/

// (D)ata Structure
/*
Keep structure an array
*/

// (A)lgorithm
/*
1. Map the two arrays together and output them.
*/

// (C)ode
function interleave(array1, array2) {
  let newArray = [];

  array1.forEach((val, idx) => {
    newArray.push(val, array2[idx]);
  });

  return newArray;
}

console.log(interleave([1, 2, 3], [4, 5, 6]));

// Further Exploration
function interleave1(array1, array2) {

  return array1.map((val, idx) => {
    return [val, array2[idx]];
  }).flat();

}

console.log(interleave1([1, 2, 3], [4, 5, 6]));
