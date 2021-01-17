// (P)roblem
/*
Input: Array
Output: Array

Explicit Requirements:
- Input is an array of numbers.
- As the numbers iterate through, the numbers are summed together, cumulatively.

Implicit Requirements:
- If empty array, return empty array.
*/

// (E)xamples
/*
[2, 5, 13] -> [2, 7, 20]
[14, 11, 7, 15, 20] -> [14, 25, 32, 47, 67]
[3] -> [3]
[] -> []
*/

// (D)ata Structure
/*
Structure remains an array.
*/

// (A)lgorithm
/*
1. Iterate through the array:
  - Reduce and accumulate sum through each element.
2. Return new array.
*/

// (C)ode
function runningTotal(array) {
  return array.reduce((acc, item) => {
    acc.push(item + (acc[acc.length - 1] || 0));
    return acc;
  },[]);
}

console.log(runningTotal([2, 5, 13]));
console.log(runningTotal([14, 11, 7, 15, 20]));
console.log(runningTotal([3]));
console.log(runningTotal([]));

// Further Exploration
function runningTotalMap(array) {
  let sum = 0;
  return array.map((item) => {
    sum += item;
    return sum;
  });
}

console.log(runningTotalMap([2, 5, 13]));
console.log(runningTotalMap([14, 11, 7, 15, 20]));
console.log(runningTotalMap([3]));
console.log(runningTotalMap([]));
