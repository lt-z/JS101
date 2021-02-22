// (P)roblem
/*
Input: Number
Output: Number

Explicit Requirements:
- Square of sums = Sum numbers to input number and square
- Sum of squares = Square numbers to input number and sum

Implicit Requirements:
- Numbers are above 0.
*/

// (E)xamples
/*
3 -> 22
10 -> 2640
1 -> 0
100 -> 25164150
*/

// (D)ata Structure
/*
Keep structure as number.
*/

// (A)lgorithm
/*
1. Create empty variables for sum of square and square of sum
2. Loop through array from 1 to number:
  Add iteration to square of sums
  Add iteration^2 to sum of squares
3. Square square of sums.
4. Return difference.
*/

// (C)ode
function sumSquareDifference(number) {
  let sumOfSquares = 0;
  let squareOfSums = 0;

  for (let num = 1; num <= number; num += 1) {
    sumOfSquares += num ** 2;
    squareOfSums += num;
  }
  squareOfSums **= 2;

  return squareOfSums - sumOfSquares;
}

console.log(sumSquareDifference(3));
console.log(sumSquareDifference(10));
console.log(sumSquareDifference(1));
console.log(sumSquareDifference(100));
