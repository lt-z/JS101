// (P)roblem
/*
Input: Array
Output: Number

Explicit Requirements:
- Array contains at least one number.

Implicit Requirements:
- Items in arrays are only numbers.

*/

// (E)xamples
/*
[3, 5, 2] -> 21
3 + (3 + 5) + (3 + 5 + 2) = 21
[4] -> 4
[1, 2, 3, 4, 5] -> 35
*/

// (D)ata Structure
/*
Array to number.
*/

// (A)lgorithm
/*
1. Create 'sum' variable that equals to zero.
2. Loop through the original array:
  Slice the original array from 0 to the current iteration + 1.
  Reduce and add the slice together.
  Add to 'sum'
3. Return sum.
*/

// (C)ode
function sumOfSums(array) {
  let sum = 0;

  for (let num = 0; num < array.length; num += 1) {
    sum += array.slice(0, num + 1).reduce((acc, val) => acc + val, 0);
  }

  return sum;
}

console.log(sumOfSums([3, 5, 2])); // 21
console.log(sumOfSums([4])); // 4
console.log(sumOfSums([1, 2, 3, 4, 5])); // 35

// Other way
function sumOfSums2(array) {
  return array.map((_, idx) => {
    return array.slice(0, idx + 1).reduce((acc, val) => acc + val, 0);
  }).reduce((acc, val) => acc + val);
}

console.log(sumOfSums2([3, 5, 2])); // 21
console.log(sumOfSums2([1, 2, 3, 4, 5])); // 35
