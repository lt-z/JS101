// (P)roblem
/*
Input: Two integers
Output: Array

Explicit Requirements:
- First argument is COUNT
- Second argument is STARTING NUMBER
- If COUNT is 0, return an empty array
- COUNT must be larger or equal to 0
- Returning array returns consecutive multiples of the STARTING NUMBER

Implicit Requirements:
- If it is negative, the array numbers are all negative.
*/

// (E)xamples
/*
5, 1 -> [1, 2, 3, 4, 5]
4, -7 -> [-7, -14, -21, -28]
3, 0 -> [0, 0, 0]
0 -> 10000 -> []
*/

// (D)ata Structure
/*
Convert number to array.
*/

// (A)lgorithm
/*
1. Create 'currentNumber' variable = Starting number.
2. Create 'array'.
3. Create a loop from 0 to count:
    'currentNumber' = STARTING NUMBER * 2
    Push to 'array'
4. Return array.
*/

// (C)ode
let sequence = (count, startingNumber) => {
  let array = [];

  for (let num = 1; num <= count; num += 1) {
    array.push(num * startingNumber);
  }

  return array;
};

console.log(sequence(5, 1));
console.log(sequence(4, -7));
console.log(sequence(3, 0));
console.log(sequence(0, 1000));
