// (P)roblem
/*
Input: Number
Output: String

Explicit Requirements:
- Output is an interation from 1 to 'number' of stars.
- The hypotenuse is from lower left to top right.

Implicit Requirements:
- ?
*/

// (E)xamples
/*
5 - >
    *
   **
  ***
 ****
*****
*/

// (D)ata Structure
/*
Number to strings
*/

// (A)lgorithm
/*
Loop from 1 to number:
  Log padStart of number + '*'.repeat(iteration)
*/

// (C)ode
function triangle(number) {
  for (let num = 1; num <= number; num += 1) {
    console.log(String('*'.repeat(num)).padStart(number));
  }
}

triangle(5);
triangle(9);