// (P)roblem
/*
Input: Number
Output: Number

Explicit Requirements:
- Featured number is odd and multiple of 7.
- All digits occuring exactly once each.
- Largest possible is 9876543201

Implicit Requirements:
- ?
*/

// (E)xamples
/*
12 -> 21
20 -> 21
21 -> 35
997 -> 1029
1029 -> 1043
999999 -> 1023547
*/

// (D)ata Structure
/*
Keep as number.
*/

// (A)lgorithm
/*
1. Create constant for max number allowed due to requirements.
2. While the number is less than the max number:
  Check if it is a featured number:
    If so, +14 to number.
  Check if it is NOT a featured number:
    If so, +1 to number.
  Check if new number is a featured number. If so, return number.
*/

// (C)ode
function occursOnlyOnce(number) {
  let array = String(number).split('');
  for (let len = 1; len < array.length; len += 1) {
    if (array.slice(len).includes(array[len - 1])) {
      return false;
    }
  }
  return true;
}

function checkFeatured(number) {
  if (number % 7 === 0
    && number % 2 === 1
    && occursOnlyOnce(number)) {
    return true;
  } else {
    return false;
  }
}

function featured(number) {
  const MAX_NUMBER = 9876543201;

  while (number < MAX_NUMBER) {
    if (checkFeatured(number)) {
      number += 14;
    } else if (!checkFeatured(number)) {
      number += 1;
    }
    if (checkFeatured(number)) return number;
  }
  return 'No larger number that meets requirements.';
}


console.log(featured(12));
console.log(featured(20));
console.log(featured(21));
console.log(featured(997));
console.log(featured(1029));
console.log(featured(999999));
console.log(featured(999999987));
console.log(featured(9876543200));
console.log(featured(9876543201));
