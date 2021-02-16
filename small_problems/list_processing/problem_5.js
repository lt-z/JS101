// (P)roblem
/*
Input: String
Output: Array

Explicit Requirements:
- Order of array is from smallest to longest.
- Index moves up one as it iterates

Implicit Requirements:
- Array length will be length of the string.
- No non-empty string as input.
*/

// (E)xamples
/*
'abc' -> ['a', 'ab', 'abc'
          'b', 'bc'
          'c']
*/

// (D)ata Structure
/*
Convert string to an array.
*/

// (A)lgorithm
/*
1. Create an empty 'array'.
2. Loop through string:
3. Concatenate sliced string based on iteration of string:
4. Return 'array'.
*/

// (C)ode
function leadingSubstrings(string) {
  return string.split('').reduce((acc, char) => {
    if (!acc.length) {
      acc.push(char);
    } else {
      acc.push(acc[acc.length - 1] + char);
    }
    return acc;
  }, []);
}

function substrings(string) {
  let newArr = [];

  for (let index = 0; index < string.length; index += 1) {
    newArr = newArr.concat(leadingSubstrings(string.slice(index)));
  }

  return newArr;
}
console.log(substrings('abc'));


// Further Exploration
function substrings2(string) {
  return string.split('').reduce((acc, _, index) => {
    acc = acc.concat(leadingSubstrings(string.slice(index)));
    return acc;
  }, []);
}

console.log(substrings2('abc'));
console.log(substrings2('abcdef'));