// (P)roblem
/*
Input: String
Output: String

Explicit Requirements:
- Consecutive duplicate character becomes 1 character.

Implicit Requirements:
- Empty string returns empty string.

*/

// (E)xamples
/*
ddaaiillyy -> daily
4444abcabccba -> 4abcabcba
ggggg -> g
a -> a
'' -> ''
*/

// (D)ata Structure
/*
The structure will will be converted to an array,
then joined back into a string.
*/

// (A)lgorithm
/*
Convert the string into an array by splitting, set as variable 'array'.
Create an empty array, 'result'.
Iterate through each item in the array:
  If the current item is not in the latest element of 'result':
    Push to 'result'.
Return 'result'.
*/

// (C)ode
function crunch(string) {
  let array = string.split('');
  let result = [];

  array.forEach(item => {
    if (item !== result[result.length - 1]) {
      result.push(item);
    }
  });
  return result.join('');
}

console.log(crunch('ddaaiillyy ddoouubbllee'));
console.log(crunch('4444abcabccba'));
console.log(crunch('ggggggggggggggg'));
console.log(crunch('a'));
console.log(crunch(''));

// Further Exploration - Regex
function crunchRegex(string) {
  let regex = /(.)\1{1,}/g;
  string = string.replace(regex, '$1');
  return string;
}

console.log(crunchRegex('ddaaiillyy ddoouubbllee'));
console.log(crunchRegex('4444abcabccba'));
console.log(crunchRegex('ggggggggggggggg'));
console.log(crunchRegex('a'));
console.log(crunchRegex(''));
