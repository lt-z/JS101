// (P)roblem
/*
Input: Nested array
Output: Nested array

Explicit Requirements:
- Transpose the matrix.
- Do not modify the original matrix.

Implicit Requirements:
- ?
*/

// (E)xamples
/*
  [1, 5, 8]
  [4, 7, 2]
  [3, 9, 6]
->
  [1, 4, 3]
  [5, 7, 9]
  [8, 2, 6]
*/

// (D)ata Structure
/*
Keep as an array.
*/

// (A)lgorithm
/*
1. Create a new array 'newMatrix'
2. Iterate through rows of existing 'matrix':
  Create new array 'newRow'.
  Iterate through columns of existing 'matrix':
    Push matrix[col][row] to 'newRow'
  Push 'newRow' to 'newMatrix'
3. Return matrix.
*/

// (C)ode
const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

function transpose(matrix) {
  let newMatrix = [];
  for (let row in matrix) {
    let newRow = [];
    for (let col in matrix[row]) {
      newRow.push(matrix[col][row]);
    }
    newMatrix.push(newRow);
  }
  return newMatrix;
}

console.log(transpose(matrix));
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

// Further Exploration
function transposeInPlace(matrix) {
  for (let row = 0; row < matrix.length - 1; row += 1) {
    for (let col = 1; col < matrix[row].length; col += 1) {
      if (col !== row) {
        [matrix[row][col], matrix[col][row]] =
        [matrix[col][row], matrix[row][col]];
      }
    }
  }
  return matrix;
}

console.log(transposeInPlace(matrix));
console.log(matrix);