// (P)roblem
/*
Input: String
Output: String

Explicit Requirements:
- If a string includes a word version of a number, return the number version.

Implicit Requirements:
- Only includes from 0 to 9, nothing below or above.
*/

// (E)xamples
/*
'Call me at five five one two three four'
-> 'Call me at 5 5 1 2 3 4'
*/

// (D)ata Structure
/*
Convert string into an array then back into a string.
*/

// (A)lgorithm
/*
1. Create an object that has:
  Word version: number version for each number.
2. Convert the string into an array.
3. Iterate through array:
  If the iteration is in the object keys, convert to object value.
4. Return array.
*/

// (C)ode
const NUMBER_WORD = {
  zero: '0',
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9'
};

function wordToDigit(string) {
  return string.split(' ').map(word => {
    if (Object.keys(NUMBER_WORD).includes(word)) {
      return NUMBER_WORD[word];
    } else {
      return word;
    }
  }).join(' ');
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));

function wordToDigitRegex(string) {
  Object.keys(NUMBER_WORD).forEach(wordNum => {
    let re = new RegExp('\\b' + wordNum + '\\b', 'g');
    string = string.replace(re, NUMBER_WORD[wordNum]);
  });
  return string;
}

console.log(wordToDigitRegex('fiver weighter tone toner'));
console.log(wordToDigitRegex('five eight one one'));