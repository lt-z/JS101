// (P)roblem
/*
Input: Array of strings
Output: Array of strings

Explicit Requirements:
- Remove all instances of the vowels from the strings.

Implicit Requirements:
- Vowels are case in-sensitive.

*/

// (E)xamples
/*
['green', 'YELLOW', 'black', 'white'] -> ['grn', 'YLLW', 'blck', 'wht']
['abcdefghijklmnopqrstuvwxyz'] -> ["bcdfghjklmnpqrstvwxyz"]
*/

// (D)ata Structure
/*
Keep the structure an array.
*/

// (A)lgorithm
/*

*/

// (C)ode
function removeVowels(array) {
  return array.map(string => {
    let nonVowels = '';

    for (let char in string) {
      if (!['a', 'e', 'i', 'o', 'u'].includes(string[char].toLowerCase())) {
        nonVowels += string[char];
      }
    }
    return nonVowels;
  });
}

console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));
console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));

// Regex

function removeVowelsRegex(array) {
  return array.map(string => string.replace(/[aeiou]/gi, ''));
}

console.log(removeVowelsRegex(['green', 'YELLOW', 'black', 'white']));
console.log(removeVowelsRegex(['abcdefghijklmnopqrstuvwxyz']));
console.log(removeVowelsRegex(['ABC', 'AEIOU', 'XYZ']));
