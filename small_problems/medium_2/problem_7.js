// (P)roblem
/*
Input: Array
Output: Array

Explicit Requirements:
- Sort in-place
- Must contain at least 2 elements.


Implicit Requirements:
- Elements of array can be numbers or strings.
*/

// (E)xamples
/*
[5, 3] -> [3, 5]
[6, 2, 7, 1, 4] -> [1, 2, 4, 6, 7]
['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']
-> ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
*/

// (D)ata Structure
/*
Keep structure as an array.
*/

// (A)lgorithm
/*
1. While the function is true:
  a. Create a variable to determine if a swap occurred. Default value is false.
  b. Loop throught the unsorted array:
    If the second number is smaller than the first number:
      Swap the numbers.
      Change the 'swap' variable to true.
  d. If swapped is false (outside of loop), break.
2. Return the mutated array.
*/

// (C)ode
function swap(num1, num2) {
  return [num2, num1];
}
function bubbleSort(array) {
  while (true) {
    let swapped = false;
    for (let num = 1; num < array.length; num += 1) {
      if (array[num] < array[num - 1]) {
        [array[num], array[num - 1]] = swap(array[num], array[num - 1]);
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return array;
}


let array1 = [6, 2, 7, 1, 4];
console.log(bubbleSort(array1));

let array2 = [5, 3];
console.log(bubbleSort(array2));

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
console.log(bubbleSort(array3));
