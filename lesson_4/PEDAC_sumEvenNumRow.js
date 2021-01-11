// (P)roblem
// (E)xamples
// (D)ata Structure
// (A)lgorithm
// (C)ode

// Problem
/*
Imagine a seqeuce of consecutive even integers beginning with 2. The integers
are grouped in rows, with the first row containing one integer, the second row,
two integers, the third row, three integers, and so on. Given an integer
representing the number of a particular row, return an integer representing
the sum of all integers in that row.

- Sequence of even integers
- Sequence begins with two
- Rows are incrementally larger
- Row 'number' equals to the number of elements within the row
- Input - Number
  - The row number that has that many # of elements to be summed
- Output - Number
  - Sum of the elements within the row
*/

// Examples
/*
Row 1 | 2
Row 2 | 4 6
Row 3 | 8 10 12
Row 4 | 14 16 18 20
Row 5 | 22 24 26 28 30
...

Input: 2 --> Output: 10
Input: 4 --> Output: 68
*/

// Data Structure
/*
- An array of sequence of arrays (rows)
- Each subsequent row's # of elements increases by 1
- The number of elements in a row is equal to the row number.

[
  [2]
  [4, 6]
  [8, 10, 12]
  [14, 16, 18, 20]
  [22, 24, 26, 28, 30]
]
*/

//Algorithm
/*
Find the number from the previous row that is immediately prior to input row:
  E.g., Row 3 --> 6, Row 4 --> 12
  This number equals to the number of TOTAL elements in all previous rows * 2.
  Example: Row 3 - 3 total elements prior to Row 3 -> 3 * 2 = 6
  Example: Row 4 - 6 total elements prior to Row 4 -> 6 * 2 = 12

  Mini algo - (1 + 2 + 3...) * 2 = number

Sum the elements in the input row:
  Starting integer = From the number (above) + 2
  Increment the input row number and accumulate + 2 from the starting integer
  Return sum

  Example: Input: 4 -> Starting integer = 14
  From 1, 2, 3, 4, accumulate and add 14 + 16 + 18 + 20
*/

//Code
function findCount(row) {
  let number = 0;

  for (let num = 1; num < row; num += 1) {
    number += num;
  }
  return number * 2;
}

function sumEvenNumRow(row) {
  let incrementNum = findCount(row) + 2;

  let sumRow = incrementNum;
  for (let num = 1; num < row; num += 1) {
    sumRow += incrementNum + 2;
    incrementNum += 2;

  }
  return sumRow;
}

console.log(sumEvenNumRow(2));
console.log(sumEvenNumRow(3));
console.log(sumEvenNumRow(4));
console.log(sumEvenNumRow(5));
