// (P)roblem
/*
Input: String
Output: String

Explicit Requirements:
- Input is always 'First Name Last Name'
- Output is 'Last Name, First Name'

Implicit Requirements:
- Always a string.
*/

// (E)xamples
/*
Joe Roberts -> Roberts, Joe
*/

// (D)ata Structure
/*
String to array to string.
*/

// (A)lgorithm
/*
1. Split string into an array.
2. Reverse the array.
3. Join and return with comma.
*/

// (C)ode
function swapName(fullName) {
  return fullName.split(' ').reverse().join(', ');
}

console.log(swapName('Joe Smith'));

// Further Exploration
function swapName1(fullName) {
  let nameArray = fullName.split(' ');
  let lastName = nameArray.pop();
  return `${lastName}, ${nameArray.join(' ')}`;
}

console.log(swapName1('Karl Oskar Henriksson Ragvals'));    // "Ragvals, Karl Oskar Henriksson"