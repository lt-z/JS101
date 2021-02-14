// (P)roblem
/*
Input: Array of integers
Output: Array of integers

Explicit Requirements:
- Return the sorted alphabetic version of numbers.

Implicit Requirements:
- 'eight' vs 'eighteen' -> eight then eigtheen due to more characters.
*/

// (E)xamples
/*
[0, 1, 2, 3] -> [1, 3, 2, 0]
*/

// (D)ata Structure
/*
Keep data structure an array.
*/

// (A)lgorithm
/*
1. Create constant with array of numbers in alpha.
2. Create sort by the alphabetical of the number:
  a. If num1 is alphabetically before num2 -> Return -1 (num1, num2)
  b. If num1 is alphabetically after num2 -> Return 1 (num2, num1)
  c. Else return 0
3. Return sorted array.
*/

// (C)ode
const CHARACTER_NUMBERS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
  'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
  'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];

let alphabeticNumberSort = (array) => {
  return array.sort(alphaSort);
};

function alphaSort(num1, num2) {
  if (CHARACTER_NUMBERS[num1] > CHARACTER_NUMBERS[num2]) { // num2 before num1
    return 1;
  } else if ( CHARACTER_NUMBERS[num1] < CHARACTER_NUMBERS[num2]) { // num1 before num2
    return -1;
  } else { // no change
    return 0;
  }
}

console.log(alphabeticNumberSort([15, 7]));
console.log(alphabeticNumberSort([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 15, 16, 17, 18, 19, 20]));

