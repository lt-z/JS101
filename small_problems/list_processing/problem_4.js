// (P)roblem
/*
Input: String
Output: Array

Explicit Requirements:
- Order of array is from smallest to longest.

Implicit Requirements:
- Array length will be length of the string.
- No non-empty string as input.
*/

// (E)xamples
/*
'abc' -> ['a', 'ab', 'abc']
'a' -> ['a']
'xyzzy' -> ['x', 'xy', 'xyz', 'xyzz', 'xyzzy']
*/

// (D)ata Structure
/*
Convert string to an array.
*/

// (A)lgorithm
/*
1. Create an empty 'array'.
2. Split string into an array.
3. Reduce array:
  If accumulator length is 0:
    push character only.
  Else:
    Push previous element + current character.
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

console.log(leadingSubstrings('abc'));
