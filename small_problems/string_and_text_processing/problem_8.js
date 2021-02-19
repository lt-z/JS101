// (P)roblem
/*
Input: String
Output: Array

Explicit Requirements:
- Return an array of each string and its associated lengths

Implicit Requirements:
- Empty string = empty array
*/

// (E)xamples
/*
'cow sheep chicken' -> ['cow 3', 'sheep 5', 'chicken 7']
'baseball hot dogs and apple pie' ->
["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]
*/

// (D)ata Structure
/*
Convert string to an array structure.
*/

// (A)lgorithm
/*
1. Split the input string into an array by the spaces.
2. Map the array and return the word and the length of the word.
3. Return the mapped array.
*/

// (C)ode
function wordLengths(string) {
  return string.split(' ').map(word => {
    return `${word} ${word.length}`;
  });
}

console.log(wordLengths('cow sheep chicken'));
console.log(wordLengths('baseball hot dogs and apple pie'));
console.log(wordLengths("It ain't easy, is it?"));
console.log(wordLengths('Supercalifragilisticexpialidocious'));
