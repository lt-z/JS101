// (P)roblem
/*
Input: None
Output: Number

Explicit requirements:
- Even numbers between 1 and 99 shall be shown on the console.
- Each even number is on a separate line.

Implicit requirements:
- No input is required.
*/

// (E)xamples
/*
2
4
6
8
*/

// (D)ata Structure
// Data structure will remain numbers.

// (A)lgorithm
/*
Iterate through numbers from 1 to 99:
  In each iteration, check if the number is odd
    If it is odd, continue to next number
  Log even number
*/

// (C)ode
for (let number = 1; number <= 99; number += 1) {
  if (number % 2 !== 0) continue;

  console.log(number);
}
