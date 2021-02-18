// (P)roblem
/*
Input: String
Output: String

Explicit Requirements:
- Capitalize the start of every word.
- Uncapitalize all other characters.

Implicit Requirements:
- ?
*/

// (E)xamples
/*
'four score and seven' -> 'Four Score And Seven'
'the javaScript language' -> 'The Javascript Language'
'this is a "quoted" word' -> 'This Is A "quoted" Word'
*/

// (D)ata Structure
/*
Convert structure into an array to manipulate then back into a string.
*/

// (A)lgorithm
/*
1. Convert string to lowercase, then to an array split by the space.
2. Map the array per word and return the Uppercase first char and
    the remaining lowercase characters.
3. Join the map back into a string.
4. Return the string.
*/

// (C)ode
function wordCap(string) {
  let array = string.toLowerCase().split(' ');

  return array.map(word => {
    return word[0].toUpperCase() + word.slice(1);
  }).join(' ');
}

console.log(wordCap('four score and seven'));
console.log(wordCap('the javaScript language'));
console.log(wordCap('this is a "quoted" word'));
