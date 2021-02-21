// (P)roblem
/*
Input: Number
Output: Number

Explicit Requirements:
- Compute nth Fibonacci number.

Implicit Requirements:
- input number is above 0.
*/

// (E)xamples
/*
1 -> 1
2 -> 1
3 -> 2
4 -> 3
5 -> 5
12 -> 144
20 -> 6765
*/

// (D)ata Structure
/*
Keep the structure a number.
*/

// (A)lgorithm
/*
1. Create base case:
  If number is equal to or smaller than 2 -> return 1
2. Else:
  Return itself - 2 plus itself - 1. (sum of two previous numbers)
*/

// (C)ode
function fibonacci(number) {
  if (number <= 2) {
    return 1;
  } else {
    return fibonacci(number - 2) + fibonacci(number - 1);
  }
}

console.log(fibonacci(1)); // 1
console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3
console.log(fibonacci(5)); // 5
console.log(fibonacci(12)); // 144

