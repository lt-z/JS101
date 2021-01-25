
// (P)roblem
/*
Input: String
Output: String

Explicit Requirements:
- Reverse the sequence of letters in the sentence ONLY if it is 5+ letters

Implicit Requirements:
- Empty string returns empty string
*/

// (E)xamples
/*
'' -> ''
Hello World -> dlroW olleH
Professional -> lanoisseforP
Walk around the block -> Walk dnuora the kcolb
Launch School -> hcnuaL loohcS
*/

// (D)ata Structure
/*
String to array to string.
*/

// (A)lgorithm
/*
1. Split the string into an array separated by spaces.
2. Iterate through the array:
  If the word length is 5+, reverse it.
3. Return joined array as string.
*/

// (C)ode
let reverseWord = (word) => {
  return word.split('').reverse().join('');
};

let reverseWords = (sentence) => {
  let array = sentence.split(' ');
  for (let word in array) {
    if (array[word].length > 5) {
      array[word] = reverseWord(array[word]);
    }
  }

  return array.join(' ');
};

console.log(reverseWords('Professional'));
console.log(reverseWords('Walk around the block'));
console.log(reverseWords('Launch School'));
console.log(reverseWords(''));

// Further Exploration
let reverseWords1 = (sentence) => {
  let array = sentence.split(' ');
  return array.map(word => (word.length > 5 ? reverseWord(word) : word)).join(' ');
};

console.log(reverseWords1('Professional'));
console.log(reverseWords1('Walk around the block'));
console.log(reverseWords1('Launch School'));
console.log(reverseWords1(''));
