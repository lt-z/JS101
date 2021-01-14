// (P)roblem
/*
Input: Array
Output: Array

Explicit Requirements:
- Logs explicitly the even number index of the array.

Implicit Requirements:
- Inputs can be strings or numbers in the array

*/

// (E)xamples
/*
[2, 3, 4, 5, 6] -> [2, 4, 6]
[1, 2, 3, 4, 5, 6] -> [1, 3, 5]
['a', 'b', 'c'] -> ['a', 'c']
[] -> []
*/

// (D)ata Structure
/*
Keep the structure an array.
*/

// (A)lgorithm
/*
Create an empty array called 'oddList'
Iterate through the array from 0, in steps of 2:
  Push to 'oddList'
return 'oddList'
*/

// (C)ode
let oddities = (array) => {
  let oddList = [];
  for (let item = 0; item <= array.length - 1; item += 2) {
    oddList.push(array[item]);
  }
  return oddList;
};

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

// Further Exploration
let evens = (array) => {
  let evenList = [];
  for (let item = 1; item <= array.length - 1; item += 2) {
    evenList.push(array[item]);
  }
  return evenList;
};

console.log(evens([2, 3, 4, 5, 6])); // logs [3, 6]
console.log(evens([1, 2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(evens(["abc", "def"])); // logs ['def']
console.log(evens([123])); // logs []
console.log(evens([])); // logs []
