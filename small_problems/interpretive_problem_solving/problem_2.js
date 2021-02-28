// (P)roblem
/*
Input: Number
Output: Strings

Explicit Requirements:
- Create an nxn grid based on input
- Input is only odd numbers.

Implicit Requirements:
- ?
*/

// (E)xamples
/*
3 ->
 *
***
 *
*/

// (D)ata Structure
/*
Convert number into a string structure.
*/

// (A)lgorithm
/*
1. Create space padding variable equal to the middle + 1.
2. Loop from 1 to number in increments of 2:
  Log '*' with padding.
  Increment padding up by 1.
3. Reduce padding by 2.
4. Loop from number - 2 to 0 in increments of 2:
  Log '*' with padding.
  Incremeng padding down by 1.
*/

// (C)ode
function diamond(number) {
  let padCount = Math.floor(number / 2) + 1;
  for (let num = 1; num <= number; num += 2) {
    console.log('*'.repeat(num).padStart(padCount));
    padCount += 1;
  }
  padCount -= 2;

  for (let num = number - 2; num > 0; num -= 2) {
    console.log('*'.repeat(num).padStart(padCount));
    padCount -= 1;
  }
}

diamond(7);
diamond(9);
diamond(11);
diamond(13);
diamond(15);
