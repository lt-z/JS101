// (P)roblem
/*
Input: Array
Output: Array or undefined

Explicit Requirements:
- Original array is not modified.
- Move first element to become last element.
- If input is not an array, return undefined.

Implicit Requirements:
- Element types within the array do not matter.
- Empty array returns an empty array.
*/

// (E)xamples
/*
[7, 3, 5, 2, 9, 1] -> [3, 5, 2, 9, 1, 7]
[1, 'a', 3, 'c'] -> ["a", 3, "c", 1]
[{ a: 2 }, [1, 2], 3] -> [[1, 2], 3, { a: 2 }]
1 -> undefined
*/

// (D)ata Structure
/*
Keep the structure an array.
*/

// (A)lgorithm
/*
1. If input length is 0:
  Return empty array.
2. If input is an array:
  Return the modified array.
3. Else, return undefined.
*/

// (C)ode
function rotateArray(input) {
  if (input.length === 0) {
    return [];
  } else if (Array.isArray(input)) {
    return input.slice(1).concat(input[0]);
  } else {
    return undefined;
  }
}

let arr = [7, 3, 5, 2, 9, 1];
console.log(arr);
console.log(rotateArray(arr));

let arr1 = [{ a: 2 }, [1, 2], 3];
console.log(arr1);
console.log(rotateArray(arr1));

let arr2 = [1, 'a', 3, 'c'];
console.log(arr2);
console.log(rotateArray(arr2));

console.log(rotateArray([]));
console.log(rotateArray(1));
console.log(rotateArray('1'));
