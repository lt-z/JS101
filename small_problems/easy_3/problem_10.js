// (P)roblem
/*
Input: Number
Output: String

Explicit Requirements:
- 'st', 'nd', 'rd', 'th' for each appropriate number.

Implicit Requirements:
- ?
*/

// (E)xamples
/*
2000 -> 20th
1901 - 2000 -> 20th
256 -> 3rd
5 -> 1st
10103 -> 102nd
*/

// (D)ata Structure
/*
Keep structure a number then conver it into a string.
*/

// (A)lgorithm
/*
Divide the year by 100 and round up to nearest hundred.

Create an if statment depending on number:
1 - st
2 - nd
3 - rd
4 - th
5 - th
6 - th
7 - th
8 - th
9 - th
10 - 13 - th
...remaining is th

*/

// (C)ode
function century (year) {
  let numCentury = String(Math.ceil(year / 100));
  let lastNum = numCentury.slice(-2);

  if (['11', '12', '13'].includes(lastNum)) {
    return `${numCentury}th`;
  } else if (lastNum.endsWith('1')) {
    return `${numCentury}st`;
  } else if (lastNum.endsWith('2')) {
    return `${numCentury}nd`;
  } else if (lastNum.endsWith('3')) {
    return `${numCentury}rd`;
  } else {
    return `${numCentury}th`;
  }
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"
