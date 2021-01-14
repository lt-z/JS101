// (P)roblem
/*
Input: Truthy/Falsy or Boolean values
Output: Boolean

Explicit Requirements:
- Only return true if ONE of the arguments is true.
- Return false in all other occasions.

Implicit Requirements:
- ?
*/

// (E)xamples
/*
5, 0 -> true
0, 0 -> false
5, 5 -> false
0, 5 -> true
true, true -> false
*/


// (D)ata Structure
/*
Keep the boolean structure.
*/

// (A)lgorithm
/*
If value1 and value2:
  return false
Else if value1 or value2:
  return true
else
  return false
*/

// (C)ode
let xor = (val1, val2) => {
  if ((!val1 && val2) || (val1 && !val2)) {
    return true;
  } else {
    return false;
  }
};
console.log(xor(5, 0)); // true
console.log(xor(0, 5)); // true
console.log(xor(false, true)); // true
console.log(xor(5, 5)); // false
console.log(xor(true, true)); // false
console.log(xor(false, false)); // false
console.log(xor(0, 0)); // false

// Further Exploration
/*
This function does perform short circuit operation. It would check
!val && val2, if it is true, it will not check val1 && !val2, since it
already fulfills the condition.
*/
