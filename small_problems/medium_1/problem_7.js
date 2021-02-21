// (P)roblem
/*
Input: Number
Output: Number

Explicit Requirements:
- Computer nth fibonacci number without recursion.

Implicit Requirements:
- Numbers are above 0.
*/

// (E)xamples
/*
20 -> 6765
50 -> 12586269025
75 -> 2111485077978050
*/

// (D)ata Structure
/*
Use an array to keep track of number.
*/

// (A)lgorithm
/*
1. Create starting array of [1, 1]
2. Iterate from 3 to number:
  Keep reassigning array[0] to be array[1]
  and reassign array[1] to be array[1] + array[0].
3. Return array[1]
*/

// (C)ode
function fibonacci(number) {
  let array = [1, 1];

  for (let num = 3; num <= number; num += 1) {
    array = [array[1], array[0] + array[1]];
  }

  return array[1];
}

console.log(fibonacci(1)); // 1
console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3
console.log(fibonacci(12)); // 144
console.log(fibonacci(20)); // 6765
console.log(fibonacci(50)); // 12586269025
console.log(fibonacci(75)); // 2111485077978050

function fibonacciLessEfficient(number) {
  let array = [1, 1];

  for (let num = 3; num <= number; num += 1) {
    array.push(array[array.length - 1] + array[array.length - 2]);
  }

  return array[array.length - 1];
}
console.log(fibonacciLessEfficient(20)); // 6765
