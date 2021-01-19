// (P)roblem
/*
Input: String
Output: Object

Explicit Requirements:
- Word = Non-space characters.
- Remove all non-letters within a word.

Implicit Requirements:
- Lengths of words does not include any non-alphanumeric characters BUT spaces.
*/

// (E)xamples
/*
Four score and seven. -> { "3": 1, "4": 1, "5": 1, "6": 1 }
Hey diddle diddle, the cat and the fiddle! -> { "3": 5, "6": 1, "7": 2 }
What's up doc? -> { "2": 1, "4": 1, "5": 1 }
*/

// (D)ata Structure
/*
String -> array -> object
*/

// (A)lgorithm
/*
1. Use regex to remove ".!?".
2. Convert the string to array while splitting by spaces.
3. Create an empty object.
4. Iterate through the array:
  Length of item += 1;
5. Return object.
  */

// (C)ode
let regexString = (string) => {
  let regex = /[!'.?]/g;
  return string.replace(regex, '');
};

let wordSizes = (string) => {
  let wordArray = regexString(string).split(' ');
  let wordObject = {};

  for (let word in wordArray) {
    let wordLength = wordArray[word].length;
    if (wordLength > 0) {
      wordObject[wordLength] = wordObject[wordLength] + 1 || 1;
    }
  }

  return wordObject;
};

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 2, "7": 1 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}
