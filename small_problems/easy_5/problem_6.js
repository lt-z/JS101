// (P)roblem
/*
Input: Array
Output: String

Explicit Requirements:
- Multiply each number and divide by number.
- Round to 3 decimals.

Implicit Requirements:
- ?
*/

// (E)xamples
/*
[3, 5] -> 7.500
[2, 5, 7, 11, 13, 17] -> 28361.667
*/

// (D)ata Structure
/*
Array to number to string.
*/

// (A)lgorithm
/*
Create empty 'number = 1'.
Loop through each item in array:
  multiply the item by the number.
Divide the number by array.length.tofixed(3)
*/

// (C)ode
let multiplicativeAverage = (array) => {
  let number = 1;

  array.forEach(item => {
    number *= item;
  });

  return (number / array.length).toFixed(3);
};

console.log(multiplicativeAverage([3, 5]));
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));