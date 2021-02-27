// (P)roblem
/*
Input: Sorted Array and String
Output: Number

Explicit Requirements:
- Use binary search to find the index of the searchItem.
- If not found, return -1.
- Assume the array is always sorted.

Implicit Requirements:
- ?
*/

// (E)xamples
/*
[1, 5, 7, 11, 23, 44, 65, 89, 102], 77 -> -1
[1, 5, 7, 11, 23, 44, 65, 89, 102], 89 -> 7
[1, 5, 7, 11, 23, 44, 65, 89, 102], 102 -> 5
*/

// (D)ata Structure
/*
Keep structure as an array.
*/

// (A)lgorithm
/*
1. Create the start variable: Start at 0.
2. Create the end variable: Start at end of array length.
3. While the start number is less or = to the end variable:
  Create the mid var = array len (start + end) / 2. (index of middle of array)
  If the middle of array equals to the item:
    Return the 'middle' (index of mid of array)
  If middle of array val is smaller than item:
    Start should now equal to middle + 1 (all items below mid are discarded)
  If middle of array val is larger than item:
    End should now equal to middle - 1 (all items above mid are discarded)
4. Return -1 (if start > end)
*/

// (C)ode
function binarySearch(array, searchItem) {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (array[mid] === searchItem) {
      return mid;
    } else if (array[mid] < searchItem) {
      start = mid + 1;
    } else if (searchItem < array[mid]) {
      end = mid - 1;
    }
  }
  return -1;
}

let yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
console.log(binarySearch(yellowPages, 'Apple Store'));                // 0

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 7));     // 1

console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6