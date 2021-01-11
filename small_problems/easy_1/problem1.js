// (P)roblem
/*
Input: Number
Output: Boolean

Explicit requirements:
- Argument will always be a valid integer value (0, positive, negative).

Implicit requirements:
- Argument cannot be any other type of value but an integer value.
*/

// (E)xamples
/*
2 -> false
5 -> true
-17 -> true
-8 -> false
0 -> false
7 -> true
*/

// (D)ata Structure
/*
Keep the structure a number. Implement an algorithm to see if the
absolute number is odd.
*/
// (A)lgorithm
/*
If absolute number is divisible by 2 and if there is a remainder:
  return true (odd number)
If there is no remainder:
  return false (even number)
*/

// (C)ode
let isOdd = (number) => Math.abs(number) % 2 !== 0;

// Test Cases
console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true
