// (P)roblem
/*
Input: Two strings
Output: One string

Explicit Requirements:
- Compare the two string's lengths and returns concatenation of short-long-short
- Strings will always be different lengths, no same length strings.

Implicit Requirements:
- Input validation is not needed.
- If the shorter string is empty space, it doesn't affect other string.
*/

// (E)xamples
/*
'abc', 'defgh' -> 'abcdefghabc'
'abcde', 'fgh' -> 'fghabcdefgh'
'', 'xyz' -> 'xyz'
*/

// (D)ata Structure
/*
Keep the structure strings.
*/

// (A)lgorithm
/*
Create a function that has two parameters.
  Compare length of first string with second string.
  If string1 length is longer than string2 length:
    Return string2 + string1 + string2
  Else:
    Return string1 + string2 + string1
*/

// (C)ode
let shortLongShort = (string1, string2) => {
  if (string1.length > string2.length) {
    return string2 + string1 + string2;
  } else {
    return string1 + string2 + string1;
  }
};

console.log(shortLongShort('abc', 'defgh'));
console.log(shortLongShort('abcde', 'fgh'));
console.log(shortLongShort('hello', 'x'));
