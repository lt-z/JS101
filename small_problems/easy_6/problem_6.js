// (P)roblem
/*
Input: Number
Output: Array

Explicit Requirements:
- Number must be above 0 in ascending order.

Implicit Requirements:
- ?
*/

// (E)xamples
/*
5 -> [1, 2, 3, 4, 5]
3 -> [1, 2, 3]
1 -> [1]
*/

// (D)ata Structure
/*
Number to array.
*/

// (A)lgorithm
/*
1. Create an empty array.
2. Iterate through the number.
3. Append interation into array.
*/

// (C)ode
let sequence = (number) => {
  let array = [];

  for (let num = 1; num <= number; num += 1) {
    array.push(num);
  }

  return array;
};

console.log(sequence(5));
console.log(sequence(3));
console.log(sequence(1));

// Further Exploration
/*
Using forEach and map does not seem possible since each of these methods
use the array and we are creating the array.
*/
