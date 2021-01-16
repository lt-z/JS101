// (P)roblem
/*
Input: Number
Output: Number

Explicit Requirements:
- Input number is always greater than 2.
- Input number is the length of the fibonacci number.
- Output number is index (number in sequence) of the series.

Implicit Requirements:
- ?
*/

// (E)xamples
/*
2 -> 7
10 -> 45
16 -> 74
*/

// (D)ata Structure
/*
Structure will be an array, then return the length of the array.
*/

// (A)lgorithm
/*

Create the fibonacci series 'fibonacci':
  'fibonacciArray' = [1];
  Get current fibonacci 'num'.

  While the fibonacci 'num' length is < number:
    Push current 'num' to 'fibonacciArray'
    Update current 'num'.
  Push current num to 'fibonacciArray'
  Return length of array.
*/

// (C)ode
function findFibonacciIndexByLength(number) {
  let fibonacciArray = [1];
  let currentNum = fibonacciArray[fibonacciArray.length - 1];

  while (String(currentNum).length < number &&
   currentNum < Number.MAX_SAFE_INTEGER) {
    fibonacciArray.push(currentNum);
    currentNum += fibonacciArray[fibonacciArray.length - 2];
  }
  fibonacciArray.push(currentNum);
  console.log(fibonacciArray);
  return fibonacciArray.length;
}

console.log(findFibonacciIndexByLength(2));
console.log(findFibonacciIndexByLength(10));
console.log(findFibonacciIndexByLength(17));
