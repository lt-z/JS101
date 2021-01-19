// (P)roblem
/*
Input: String
Output: String

Explicit Requirements:
- Swap the first and last letter of each word.
- Keep the order of the sentence.
- Minimum of one word string in the input.
- No repeated, trailing, or leading spaces.

Implicit Requirements:
- Capitalization remains.
*/

// (E)xamples
/*
Oh what a wonderful day it is -> hO thaw a londerfuw yad ti si
Abcde -> ebcdA
a -> a
*/

// (D)ata Structure
/*
Convert from string to an array then back to a string.
*/

// (A)lgorithm
/*
1. Store and split string into 'array'.
2. Loop through each word in the 'array':
  word = concatenate word[-1] + word[1:-1] + word[1]
3. Return joined array.
*/

// (C)ode
function rearrange(word) {
  if (word.length > 1) {
    word = word.slice(-1) + word.slice(1, -1) + word[0];
  }

  return word;
}

function swap(string) {
  let array = string.split(' ');
  for (let word in array) {
    array[word] = rearrange(array[word]);
  }

  return array.join(' ');
}


console.log(swap('Oh what a wonderful day it is'));
console.log(swap('Abcde'));
console.log(swap('a'));

// Further Exploration
function mapSwap(string) {
  let array = string.split(' ');
  return array.map(word => rearrange(word)).join(' ');
}

console.log(mapSwap('Oh what a wonderful day it is'));
console.log(mapSwap('Abcde'));
console.log(mapSwap('a'));
