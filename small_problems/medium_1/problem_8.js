// (P)roblem
/*
Input: Number
Output: Number

Explicit Requirements:
- Utilize memoization (saving a computed answer for future reuse)
- Refactor the recursive fibonacci function

Implicit Requirements:
- ?
*/

// (E)xamples
/*
4 -> 3
12 -> 144
*/

// (D)ata Structure
/*
Keep structure as a number.
*/

// (A)lgorithm
/*
1. Store solved numbers in memo (starts at 3)
2. If the number is in the memo:
  Return the solved number.
3. Base case, if the number is smaller or bigger than 2:
  Return 1.
4. Else:
  Store current number in memo as (number - 2) + (number - 1)
5. Return the current number in memo.
*/

// (C)ode
let memo = {};
function fibonacci(number) {
  console.log(memo);
  console.log(`Num: ${number}`);
  if (memo[number]) {
    return memo[number];
  }

  if (number <= 2) {
    return 1;
  } else {
    memo[number] = fibonacci(number - 2) + fibonacci(number - 1);
  }
  return memo[number];
}

console.log(fibonacci(1)); // 1
console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(7)); // 13
console.log(fibonacci(12)); // 144
console.log(fibonacci(50)); // 6765
console.log(fibonacci(50)); // 12586269025
console.log(fibonacci(75)); // 2111485077978050
