// (P)roblem
/*
Input: Nested array
Output: Nested array

Explicit Requirements:
- Transpose the matrix of MxN dimensions.
- Do not modify the original matrix.

Implicit Requirements:
- ?
*/

// (E)xamples
/*
  [1, 5, 8, 5]
  [4, 7, 2, 0]
  [3, 9, 6, 1]
->
  [1, 4, 3]
  [5, 7, 9]
  [8, 2, 6]
  [5, 0, 1]
*/

// (D)ata Structure
/*
Keep as an array.
*/

// (A)lgorithm
/*
1. Create a new array 'newMatrix'
2. Iterate from 0 to number of columns in 'newMatrix' (= # of rows in 'matrix'):
  Create new array 'newRow'.
  Iterate from 0 to number of rows in 'newMatrix' (= # of cols in 'matrix'):
    Push matrix[col][row] to 'newRow'
  Push 'newRow' to 'newMatrix'
3. Return matrix.
*/

// (C)ode
const matrix = [
  [1, 5, 8, 5],
  [4, 7, 2, 0],
  [3, 9, 6, 1]
];

function transpose(matrix) {
  let newMatrix = [];
  for (let row = 0; row < matrix[0].length; row += 1) {
    let newRow = [];
    for (let col = 0; col < matrix.length; col += 1) {
      newRow.push(matrix[col][row]);
    }
    newMatrix.push(newRow);
  }
  return newMatrix;
}

console.log(transpose(matrix));                     // [[1, 4, 3], [5, 7, 9], [8, 2, 6], [5, 0, 1]]
console.log(matrix);                                // [[1, 5, 8, 5], [4, 7, 2, 0], [3, 9, 6, 1]]
console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
console.log(transpose([[1]]));                     // [[1]]
console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
