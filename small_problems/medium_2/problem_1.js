// (P)roblem
/*
Input: String
Output: Object

Explicit Requirements:
- Calculate percentages of each type of case in the input string.
- Three types:
  Uppercase
  Lowercase
  Neither
- Input string is always at least one character.

Implicit Requirements:
- Spaces count as 'neither'
*/

// (E)xamples
/*
'abCdef 123' -> { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }
'abCd +Ef' -> { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }
*/

// (D)ata Structure
/*
Convert string into an array, then calculate into an object.
*/

// (A)lgorithm
/*
1. Convert string to 'array'.
2. Create empty 'object'.
3. Iterate through the 'array':
  if iteration is uppercase -> object.uppercase += 1
  if iteration is lowercase -> object.lowercase += 1
  if iteration is neither -> object.neither += 1
*/

// (C)ode
function letterPercentages(string) {
  let object = {
    lowercase: 0, uppercase: 0, neither: 0
  };

  let array = string.split('');
  array.forEach(char => {
    if (char >= 'a' && char <= 'z') {
      object.lowercase += 1;
    } else if (char >= 'A' && char <= 'Z') {
      object.uppercase += 1;
    } else {
      object.neither += 1;
    }
  });
  for (let key in object) {
    object[key] = (object[key] / (array.length / 100)).toFixed(2);
  }

  return object;
}

console.log(letterPercentages('aaa 123 ABC'));
console.log(letterPercentages('abCdef 123'));
console.log(letterPercentages('AbCd +Ef'));
console.log(letterPercentages('123'));

function letterPercentagesRegex(string) {
  let length = string.length;

  function percentage(regex) {
    let count = string.match(regex) || [];
    return ((count.length / length) * 100).toFixed(2);
  }

  return {
    lowercase: percentage(/[a-z]/g),
    uppercase: percentage(/[A-Z]/g),
    neither: percentage(/[^a-z]/gi)
  };
}


console.log(letterPercentagesRegex('aaa 123 ABC'));
console.log(letterPercentagesRegex('abCdef 123'));
console.log(letterPercentagesRegex('AbCd +Ef'));
console.log(letterPercentagesRegex('123'));