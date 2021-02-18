// (P)roblem
/*
Input: String
Output: Object

Explicit Requirements:
- Three properties: lowercase, uppercase, neither

Implicit Requirements:
- Empty string does not count as anything.
- Space counts under 'neither'
- Numbers counts under 'neither'
*/

// (E)xamples
/*
'abCdef 123' -> { lowercase: 5, uppercase: 1, neither: 4 }
'AbCd +Ef' -> { lowercase: 3, uppercase: 3, neither: 2 }
'123' -> { lowercase: 0, uppercase: 0, neither: 3 }
*/

// (D)ata Structure
/*
Convert string into an array then count into object.
*/

// (A)lgorithm
/*
1. Convert string into an 'array'.
2. Create the 'object' to store and count each character.
3. Iterate through the 'array':
  If char is in alphabet:
    If char is uppercase: + 1 to uppercase.
    Else if char is lowercase: + 1 to lowercase.
  Else: + 1 neither
4. Return obj.
*/

// (C)ode
function letterCaseCount(string) {
  const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
  let array = string.split('');
  let obj = { lowercase: 0, uppercase: 0, neither: 0 };

  array.forEach(char => {
    if (ALPHABET.includes(char.toLowerCase())) {
      if (char.toLowerCase() === char) {
        obj.lowercase += 1;
      } else {
        obj.uppercase += 1;
      }
    } else {
      obj.neither += 1;
    }
  });

  return obj;
}

console.log(letterCaseCount('abCdef 123')); // 5, 1, 4
console.log(letterCaseCount('AbCd +Ef')); // 3, 3, 2
console.log(letterCaseCount('123')); // 0, 0, 3
console.log(letterCaseCount('')); // 0, 0, 0

// Regex

function letterCaseCountRegex(string) {
  let lowercase = string.match(/[a-z]/g) || [];
  let uppercase = string.match(/[A-Z]/g) || [];
  let neither = string.match(/[^a-z]/gi) || [];

  return {
    lowercase: lowercase.length,
    uppercase: uppercase.length,
    neither: neither.length
  };
}

console.log(letterCaseCountRegex('abCdef 123')); // 5, 1, 4
console.log(letterCaseCountRegex('AbCd +Ef')); // 3, 3, 2
console.log(letterCaseCountRegex('123')); // 0, 0, 3
console.log(letterCaseCountRegex('')); // 0, 0, 0
