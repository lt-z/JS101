// (P)roblem
/*
Input: String
Output: Boolean

Explicit Requirements:
- You can only use each block one time.
- Case insensitive string.

Implicit Requirements:
- ?
*/

// (E)xamples
/*
BUTCH -> false (u and h from same block)
BATCH -> true
*/

// (D)ata Structure
/*
Compare string with an array structure.
*/

// (A)lgorithm
/*
1. Create 'blocks' array as sets of strings.
2. Convert string to all lowercase.
3. Loop through string:
  If the letter is not in the string:
    return false
  'blocks' now equals all the sets besides the one that includes the letter.
4. Return true.
*/

// (C)ode

function isBlockWord(string) {
  let blocks = ['bo', 'xk', 'dq', 'cp', 'na', 'gt', 're', 'fs', 'jw', 'hu', 'vi', 'ly', 'zm'];
  string = string.toLowerCase();

  for (let letter in string) {
    if (blocks.filter(block => block.includes(string[letter])).length === 0) {
      return false;
    }
    blocks = blocks.filter(block => !block.includes(string[letter]));
  }
  return true;
}

console.log(isBlockWord('batch'));
console.log(isBlockWord('butch'));
console.log(isBlockWord('jest'));
console.log(isBlockWord('floW'));
console.log(isBlockWord('APPLE'));
console.log(isBlockWord('apple'));
console.log(isBlockWord('apPLE'));
console.log(isBlockWord('Box'));
