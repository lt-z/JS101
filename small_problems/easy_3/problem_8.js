// (P)roblem
/*
Input: Three numbers
Output: String

Explicit Requirements:
- No input validation.
- Values will not be above 100.
- Values are between 0 and 100.

Implicit Requirements:
- ?
*/

// (E)xamples
/*
95, 90, 93 -> A
50, 50, 95 -> D
*/

// (D)ata Structure
/*
Convert numbers into an array then into a string.
*/

// (A)lgorithm
/*
Create array through the three grades.
Create a function that finds average.
  Iterate through each number and sum each number.
  Divide by array length.

Create if cases and return the appropriate grade.
*/

// (C)ode
function getAverage(array) {
  return array.reduce((acc, item) => acc + item, 0) / array.length;
}

function getGrade(num1, num2, num3) {
  let gradeArray = [num1, num2, num3];
  let score = getAverage(gradeArray);
  if (90 <= score) {
    return 'A';
  } else if (80 <= score) {
    return 'B';
  } else if (70 <= score) {
    return 'C';
  } else if (60 <= score) {
    return 'D';
  } else {
    return 'F';
  }
}

console.log(getGrade(89, 90, 89));
console.log(getGrade(50, 50, 95));
