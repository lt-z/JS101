// (P)roblem
/*
Input: Array
Output: Array

Explicit Requirements:
- Cannot use Array.prototype.reverse()
- Reverse the elements in the array in-place.

Implicit Requirements:
- If empty array, return empty array
*/

// (E)xamples
/*
[1, 2, 3 , 4] -> [4, 3, 2, 1]
["a", "b", "c", "d", "e"] -> ["e", "d", "c", "b", "a"]
['abc'] -> ['abc']
*/

// (D)ata Structure
/*
Keep the structure an array.
*/

// (A)lgorithm
/*
1. Create start, end, and temporary value variables
2. While start is smaller than end:
  Temporary Value equals to the start value
  Reassign start value = end value
  Reassign end value = temporary value (start value)
  Iterate UP start value
  Iterate DOWN end value
3. Return array
*/

// (C)ode
let reverse = (array) => {
  let start = 0;
  let end = array.length - 1;
  let tempValue;

  while (start < end) {
    tempValue = array[start];
    array[start] = array[end];
    array[end] = tempValue;

    start += 1;
    end -= 1;
  }

  return array;
};

let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true
