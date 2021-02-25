// (P)roblem
/*
Input: Two sorted arrays.
Output: Single sorted array.

Explicit Requirements:
- Cannot use the sort method.
- Must be built one element at a time.

Implicit Requirements:
- ?
*/

// (E)xamples
/*
[1, 5, 9], [2, 6, 8] -> [1, 2, 5, 6, 8, 9]
[1, 1, 3], [2, 2] -> [1, 1, 2, 2, 3]
*/

// (D)ata Structure
/*
Keep as an array.
*/

// (A)lgorithm
/*

*/

// (C)ode
function merge(array1, array2) {
  let totalLength = array1.length + array2.length;
  let newArray = [];
  let [counter1, counter2] = [0, 0];

  for (let num = 0; num < totalLength; num += 1) {
    if (array1[counter1] <= array2[counter2]
      || array2[counter2] === undefined) {
      newArray.push(array1[counter1]);
      counter1 += 1;
    } else {
      newArray.push(array2[counter2]);
      counter2 += 1;
    }
  }

  return newArray;
}


console.log(merge([1, 5, 9], [2, 6, 8]));
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));
console.log(merge([1, 4, 5], []));

function mergePop(array1, array2) {
  let [copy1, copy2] = [array1, array2];
  let newArray = [];

  while (copy1.length > 0 && copy2.length > 0) {
    newArray.push(copy1[0] < copy2[0] ? copy1.shift() : copy2.shift());
  }
  return newArray.concat(copy1.length > 0 ? copy1 : copy2);
}

console.log(mergePop([1, 5, 9], [2, 6, 8]));
console.log(mergePop([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(mergePop([], [1, 4, 5]));
console.log(mergePop([1, 4, 5], []));