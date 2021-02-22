// (P)roblem
/*
Input: 3 Numbers
Output: String

Explicit Requirements:
- Inputs are three angles
- Angle must be above 0 degrees and exactly 180 degrees.
- Integer values as inputs, no floating points.
- Arguments are in degrees.

Implicit Requirements:
- ?
*/

// (E)xamples
/*
60, 70, 50 -> acute
30, 90, 60 -> right
120, 50, 10 -> obtuse
0, 90, 90 -> invalid
50, 50, 50 -> invalid
*/

// (D)ata Structure
/*
Keep structure a number, return a string.
*/

// (A)lgorithm
/*
1. Consolidate angles into an 'array'.
2. Check if triangle is valid (anlges = 180 deg and all over 0 deg)
3. Filter if one angle is over 90 deg -> obtuse
4. Filter if one angle = 90 deg -> right
5. Else -> acute
*/

// (C)ode
function triangle(angleA, angleB, angleC) {
  const angleArray = [angleA, angleB, angleC];

  if (validTriangle(angleArray)) {
    return triangleTypes(angleArray);
  } else {
    return 'invalid';
  }
}

function triangleTypes(angleArray) {
  if (angleArray.filter(angle => angle > 90).length === 1) {
    return 'obtuse';
  } else if (angleArray.filter(angle => angle === 90).length === 1) {
    return 'right';
  } else {
    return 'acute';
  }
}

function validTriangle(angleArray) {
  const isAboveZero = (angle) => angle > 0;

  if ((angleArray.reduce((acc, num) => acc + num) === 180)
    && angleArray.every(isAboveZero)) {
    return true;
  } else {
    return false;
  }
}

console.log(triangle(60, 70, 50));
console.log(triangle(30, 90, 60));
console.log(triangle(120, 50, 10));
console.log(triangle(0, 90, 90));
console.log(triangle(50, 50, 50));
