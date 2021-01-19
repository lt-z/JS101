// (P)roblem
/*
Input: List
Output: String

Explicit Requirements:
- Count number of occurrences of each element.
- Words are case-sensitive.

Implicit Requirements:
- ?
*/

// (E)xamples
/*
['car', 'car', 'truck', 'SUV'] ->
car => 2
truck => 1
SUV => 1
*/

// (D)ata Structure
/*
Convert array into an object then into a string
*/

// (A)lgorithm
/*
1. Create an empty object.
2. Loop through the array and add into the object.
3. Log each item into the console.
*/

// (C)ode
let countOccurrences = (array) => {
  let obj = {};

  for (let item in array) {
    obj[array[item]] = obj[array[item]] + 1 || 1;
  }

  for (let item in obj) {
    console.log(`${item} => ${obj[item]}`);
  }
};

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);
