// (P)roblem
/*
Input: Array of arrays
Output: Array

Explicit Requirements:
- Return single array of the fruit for the amount of quantities shown.

Implicit Requirements:
- The inner arrays are always length of two.
*/

// (E)xamples
/*
[['apple', 3], ['orange', 2], ['banana', 1]]
-> ['apple', 'apple', 'apple', 'orange', 'orange', 'banana']
*/

// (D)ata Structure
/*
Keep the structure an array.
*/

// (A)lgorithm
/*
1. Create a new array.
2. Iterate through the input array:
  For each item, use the repeat function for the fruit based on the quantity.
  Push to new array.
3. Return new array.
*/

// (C)ode
function buyFruit(array) {
  let newArray = [];

  array.forEach(item => {
    for (let quant = 1; quant <= item[1]; quant += 1) {
      newArray.push(item[0]);
    }
  });

  return newArray;
}

console.log(buyFruit([['apple', 3], ['orange', 2], ['banana', 1]]));
