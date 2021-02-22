// (P)roblem
/*
Input: 3 Numbers
Output: String

Explicit Requirements:
- Numbers are above zero.
- Outputs are either 'equilateral', 'isosceles', 'scalene', or 'invalid'

Implicit Requirements:
- ?
*/

// (E)xamples
/*
3, 3, 3 -> equilateral
3, 3, 1.5 -> isosceles
3, 4, 5 -> scalene
0, 3, 3 -> invalid
3, 1, 1 -> invalid
*/

// (D)ata Structure
/*
Keep as a number, but return as a string.
*/

// (A)lgorithm
/*
1. If not valid triangle:
  Return 'invalid'
2. If all numbers are equal:
  Return 'equilateral'
3. If only two numbers are equal:
  Return 'isosceles'
3. Else:
  Return 'scalene'
*/

// (C)ode
function triangle(sideA, sideB, sideC) {

  if (((sideA + sideB) <= sideC)
    || ((sideA + sideC) <= sideB)
    || ((sideB + sideC) <= sideA)) {
    return 'invalid';
  } else if ((sideA === sideB)
      && (sideA === sideC)) {
    return 'equilateral';
  } else if ((sideA === sideB)
    || (sideB === sideC)
    || (sideC === sideA)) {
    return 'isosceles';
  } else {
    return 'scalene';
  }
}

console.log(triangle(3, 3, 3));
console.log(triangle(3, 3, 1.5));
console.log(triangle(3, 4, 5));
console.log(triangle(0, 3, 3));
console.log(triangle(3, 1, 1));
