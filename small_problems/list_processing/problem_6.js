// (P)roblem
/*
Input: String
Output: Array

Explicit Requirements:
- Case of characters matters.
- Single characters are not palindromes.

Implicit Requirements:
- ?
*/

// (E)xamples
/*
'knitting cassettes' -> [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
*/

// (D)ata Structure
/*
String to array.
*/

// (A)lgorithm
/*
1. Create an 'array' with all possibilities via substrings function.
2. Create an empty array to keep palindromes.
2. Iterate through the 'array':
  Compare each item with its reversed version and if it is longer than 1:
  Push to palindromes array.
3. Return palindromes array.
*/

// (C)ode
function leadingSubstrings(string) {
  return string.split('').reduce((acc, char) => {
    if (!acc.length) {
      acc.push(char);
    } else {
      acc.push(acc[acc.length - 1] + char);
    }
    return acc;
  }, []);
}

function substrings(string) {
  return string.split('').reduce((acc, _, index) => {
    acc = acc.concat(leadingSubstrings(string.slice(index)));
    return acc;
  }, []);
}


function palindromes(string) {
  let allArray = substrings(string);
  let palindromeArray = [];

  for (let item in allArray) {
    if (allArray[item] === allArray[item].split('').reverse().join('') && allArray[item].length > 1) {
      palindromeArray.push(allArray[item]);
    }
  }
  return palindromeArray;
}

console.log(palindromes('knitting cassettes'));
console.log(palindromes('hello-madam-did-madam-goodbye'));
