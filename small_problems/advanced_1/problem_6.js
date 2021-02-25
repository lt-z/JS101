// (P)roblem
/*
Input: Array
Output: Sorted Array

Explicit Requirements:
- Sort the array using merge sort rescursively.
- All elements in array are a single data type.
- Can use the merge function from problem_5

Implicit Requirements:
- # of elements in array are larger than 0 up to infinite.
*/

// (E)xamples
/*
[9, 5, 7, 1] -> [1, 5, 7, 9]
*/

// (D)ata Structure
/*
Keep the structure as an array.
*/

// (A)lgorithm
/*
1. Store first half of array as 'leftHalf'
2. Store second half of array as 'rightHalf'
3. Create base case:
  If length of array is 1 -> return the array.
4. Return the merge function with arguments as:
  mergeSort(leftHalf), mergeSort(rightHalf)
  This will recursively call itself until it hits base case,
  then it will return the merged (and sorted) array back recursively
  until it reaches the end of the recursion.
*/

// (C)ode
function merge(array1, array2) {
  let totalLength = array1.length + array2.length;
  let newArray = [];
  let [counter1, counter2] = [0, 0];

  for (let num = 0; num < totalLength; num += 1) {
    if (array1[counter1] <= array2[counter2]
      || array2[counter2] === undefined) {
      newArray.push(array1[counter1]);
      counter1 += 1;
    } else {
      newArray.push(array2[counter2]);
      counter2 += 1;
    }
  }

  return newArray;
}

function mergeSort(array) {
  let half = Math.floor(array.length / 2);
  let leftHalf = array.slice(0, half);
  let rightHalf = array.slice(half);

  if (array.length === 1) return array;

  return merge(mergeSort(leftHalf), mergeSort(rightHalf));
}

console.log(mergeSort([9, 5, 7, 1]));
console.log(mergeSort([5, 3]));
console.log(mergeSort([6, 2, 7, 1, 4]));
console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
