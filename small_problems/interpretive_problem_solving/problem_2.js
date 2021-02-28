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
// diamond(9);
// diamond(11);
// diamond(13);
// diamond(15);


// Further Exploration
function hollowDiamond(number) {
  let array = [];

  for (let num = 1; num <= number; num += 2) {
    array.push('*'.repeat(num));
  }

  return logDiamond(array);
}

function logDiamond(array) {
  array = array.concat(array.slice(0, -1).reverse());
  array = makeHollow(array);
  let padCount = Math.floor(array.length / 2) + 1;

  array.forEach((item, index) => {
    console.log(item.padStart(padCount));
    if (index < (Math.floor(array.length / 2))) {
      padCount += 1;
    } else {
      padCount -= 1;
    }
  });
}

function makeHollow(array) {
  return array.map(item => {
    if (item.length > 1) {
      return `*${item.slice(1, -1).replaceAll('*', ' ')}*`;
    } else {
      return item;
    }
  });
}

hollowDiamond(7);
hollowDiamond(11);
