// (P)roblem
/*
Input: Nested array
Output: Nested array

Explicit Requirements:
- Rotate the array clockwise 90 degrees.
- Do not modify the original matrix.

Implicit Requirements:
- ?
*/

// (E)xamples
/*
  [3, 7, 4, 2],
  [5, 1, 0, 8],
->
[5, 3]
[1, 7]
[0, 4]
[8, 2]

*/

// (D)ata Structure
/*
Keep as an array.
*/

// (A)lgorithm
/*
1. Create a new array 'newMatrix'
2. Iterate through rows of existing 'matrix[0]' (# of rows):
  Create new array 'newRow'.
  Iterate through columns of existing 'matrix' (# of columns) from max to 0:
    Push matrix[col][row] to 'newRow'
  Push 'newRow' to 'newMatrix'
3. Return matrix.
*/

// (C)ode
function rotate90(matrix) {
  let newMatrix = [];
  for (let row = 0; row < matrix[0].length; row += 1) {
    let newRow = [];
    for (let col = matrix.length - 1; col >= 0; col -= 1) {
      newRow.push(matrix[col][row]);
    }
    newMatrix.push(newRow);
  }
  return newMatrix;
}

let matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];
console.log(matrix1);

let matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

let newMatrix1 = rotate90(matrix1);
let newMatrix2 = rotate90(matrix2);
let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]
