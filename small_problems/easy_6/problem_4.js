// (P)roblem
/*
Input: String
Output: String

Explicit Requirements:
- Return the middle character(s)
- Odd length = one character.
- Even length = two characters.

Implicit Requirements:
- ?
*/

// (E)xamples
/*
I love Javascript -> a
Launch School -> ' '
Launch -> un
Launchschool -> hs
x -> x
*/

// (D)ata Structure
/*
String to an array to string.
*/

// (A)lgorithm
/*
1. Convert string into an array.
2. Find length of array.
3. If odd:
  Return one character.
4. If even:
  Return two characters.
*/

// (C)ode
let centerOf = (string) => {
  let array = string.split('');
  let arrayLength = array.length;
  let middle = Math.floor(arrayLength / 2);

  if (arrayLength % 2 !== 0) {
    return array[middle];
  } else {
    return array.slice(middle - 1, middle + 1).join('');
  }
};

console.log(centerOf('I love Javascript'));
console.log(centerOf('Launch School'));
console.log(centerOf('Launch'));
console.log(centerOf('Launchschool'));
console.log(centerOf('x'));
