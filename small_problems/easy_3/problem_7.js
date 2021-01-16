// (P)roblem
/*
Input: Number
Output: Number

Explicit Requirements:
- If the left half = the right half, it is a double number.
- If it NOT a double number, double the number.

Implicit Requirements:
- If 0, return 0

*/

// (E)xamples
/*
37 -> 74 (not double num)
33 -> 33 (double num)
334433 -> 668866
*/

// (D)ata Structure
/*
Keep the structure a number
*/

// (A)lgorithm
/*
Check if it is a double number:
  If number length is even:
    Return compare right and left side.
  Else:
    Return false.

If double number:
    Return original number or double number.
*/

// (C)ode
function isDouble(stringNum, stringLength) {
  if (stringLength % 2 === 0) { // EVEN
    let left = stringNum.slice(0, stringLength / 2);
    let right = stringNum.slice(stringLength / 2, stringLength);
    return left === right;
  } else {
    return false;
  }
}

function twice(number) {
  let stringNum = String(number);
  let stringLength = stringNum.length;
  let double = isDouble(stringNum, stringLength);
  return double ? number : number * 2;
}

console.log(twice(37));
console.log(twice(44));
console.log(twice(334433));
console.log(twice(444));
console.log(twice(107));
console.log(twice(103103));
console.log(twice(3333));
console.log(twice(7676));
