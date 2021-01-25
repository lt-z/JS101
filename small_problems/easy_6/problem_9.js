
// (P)roblem
/*
Input: String
Output: String

Explicit Requirements:
- Reverse the sequence of words in the sentence

Implicit Requirements:
- Empty string returns empty string
*/

// (E)xamples
/*
'' -> ''
Hello World -> World Hello
reverse these words -> words these reverse
*/

// (D)ata Structure
/*
String to array to string.
*/

// (A)lgorithm
/*
1. Split the string into an array separated by spaces.
2. Return reversed array and convert into a string.
*/

// (C)ode
let reverseSentence = (sentence) => {
  return sentence.split(' ').reverse().join(' ');
};

console.log(reverseSentence('Hello World'));
console.log(reverseSentence('reverse these words'));
console.log(reverseSentence(''));
