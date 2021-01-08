/*
Algorithm:

---Substrings Function---
Create an empty array
Create an array of all possible 2+ letter substrings:
  first loop: iterate thru each letter in original string to 2nd to last letter
    second loop -> iterate from starting index + 2 to length of string.
      push each iteration to array
return array

---Substring Palindrome Function---
Return comparison of reversed string to original string. -> T/F

---Main Palindrome Function---
Store Substrings Function into variable 'substring array'
Store results into 'results'

Iterate through 'substring array':
  Call Substring Palindrome to each iteration.
    If true, push to 'results' array.
Return 'results' array.
*/


function createArray(string) {
  let result = [];
  for (let letter = 0; letter < string.length - 1; letter += 1) {
    for (let numChar = letter + 2; numChar <= string.length; numChar += 1) {
      result.push(string.slice(letter, numChar));
    }
  }

  return result;
}

function palindromeSubstring(substring) {
  return substring.split('').reverse().join('') === substring;
}

function isPalindrome(string) {
  let subStrings = createArray(string);
  let result = [];

  for (let item in subStrings) {
    if (palindromeSubstring(subStrings[item])) {
      result.push(subStrings[item]);
    }
  }

  return result;
}

console.log(isPalindrome('helleh'));
console.log(isPalindrome("supercalifragilisticexpialidocious")); // ["ili"]
console.log(isPalindrome("abcddcbA"));   // ["bcddcb", "cddc", "dd"]
console.log(isPalindrome("palindrome")); // []
console.log(isPalindrome(""));
