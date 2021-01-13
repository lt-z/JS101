// (P)roblem
/*
Input: Array and Object
Output: String

Explicit Requirements:
- Object will always contain two keys:
 * 'title' and 'occupation'
- Always return the full array (person's full name)
- Always return the person's title and occupation

Implicit Requirements:
- Return all parts of the array.
*/

// (E)xamples
/*
['John', 'Q', 'Doe'] , { title : 'Master', occupation: 'Plumber' }
-> Hello, John Q Doe! Nice to have a Master Plumber around.
*/

// (D)ata Structure
/*
Convert the array and object's elements into a single string
*/

// (A)lgorithm
/*
Create 'name' and convert array to string with spaces
Create 'title' and convert to string with spaces
Log full sentence with 'name' and 'title'
*/

// (C)ode
function greetings(arr, obj) {
  let name = arr.join(' ');
  let title = obj.title + ' ' + obj.occupation;
  return `Hello, ${name}! Nice to have a ${title} around.`;
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
