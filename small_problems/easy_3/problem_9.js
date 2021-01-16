// (P)roblem
/*
Input: String
Output: String

Explicit Requirements:
- Remove all non-alphabetic chars with spaces.
- If there is more than one non-alpha chars, return one space.
- No consecutive spaces.

Implicit Requirements:
- ?
*/

// (E)xamples
/*
----what's my +*& line? -> ' what s my line '
*/

// (D)ata Structure
/*
Keep the structure a string.
*/

// (A)lgorithm
/*
Use regex to replace all non-alpha characters to ' '.
*/

// (C)ode
function cleanUp(string) {
  let regex = /[^a-z]+/gi;
  return string.replace(regex, ' ');
}

console.log(cleanUp("---what's my +*& line?"));
