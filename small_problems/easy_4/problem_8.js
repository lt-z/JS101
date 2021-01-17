// (P)roblem
/*
Input: String
Output: Object

Explicit Requirements:
- Word = Non-space characters

Implicit Requirements:
- Lengths of words includes any non-alphanumeric characters BUT spaces.
*/

// (E)xamples
/*
Four score and seven. -> { "3": 1, "4": 1, "5": 1, "6": 1 }
Hey diddle diddle, the cat and the fiddle! -> { "3": 5, "6": 1, "7": 2 }
What's up doc? -> { "2": 1, "4": 1, "6": 1 }
*/

// (D)ata Structure
/*
String -> array -> object
*/

// (A)lgorithm
/*
1. Convert the string to array while splitting by spaces.
2. Create an empty object.
3. Iterate through the array:
  Length of item += 1;
4. Return object.
  */

// (C)ode
let wordSizes = (string) => {
  let wordArray = string.split(' ');
  let wordObject = {};

  for (let word in wordArray) {
    let wordLength = wordArray[word].length;
    if (wordLength > 0) {
      wordObject[wordLength] = wordObject[wordLength] + 1 || 1;
    }
  }

  return wordObject;
};

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}
