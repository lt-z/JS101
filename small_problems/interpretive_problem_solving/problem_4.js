// (P)roblem
/*
Input: Number
Output: Strings

Explicit Requirements:
- Minimum is 7x7 (n = 7)
- n is an odd number.

Implicit Requirements:
- ?
*/

// (E)xamples
/*
7 ->
*  *  *
 * * *
  ***
*******
  ***
 * * *
*  *  *
*/

// (D)ata Structure
/*
Loops into console logs.
*/

// (A)lgorithm
/*
Main function: Input - number.
1. Calculate starting number of 'spaces' between *: Half of number - 1
2. Iterate through starEnds(spaces) and log the array.
3. Log '*' times 'number'.
4. Reverse starEnds(spaces) and iterate and log the array.

starEnds: Create Upper/Lower Ends: Input - spaces.
1. Create empty 'array'.
2. Loop from spaces to 0, minus 1 for every iteration:
  Push ' ' repeat by space - num, *,' ' repeat by num, *, ' ' repeat by num, *
3. Return array
*/

// (C)ode
function star(number) {
  let spaces = Math.floor(number / 2) - 1;

  starEnds(spaces).forEach(item => console.log(item));
  console.log('*'.repeat(number));
  starEnds(spaces).reverse().forEach(item => console.log(item));
}

function starEnds(spaces) {
  let array = [];
  for (let num = spaces; num >= 0; num -= 1) {
    array.push(`${' '.repeat(spaces - num)}*${' '.repeat(num)}*${' '.repeat(num)}*`);
  }
  return array;
}

star(7);
star(9);
star(11);
star(13);
