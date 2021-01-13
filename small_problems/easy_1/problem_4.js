// (P)roblem
/*
Input: Two numbers (in meters)
Output: Two numbers (one in meters, one in square feet)

Explicit Requirements:
- Inputs are in meters.
- Validation of inputs is not required.

Implicit Requirements:
- Round the number to two decimals.
*/

// (E)xamples
/*
Enter length of room in meters:
> 10
Enter width of room in meters:
> 7
The area of the room is 70.00 square meters (753.47 square feet)
*/

// (D)ata Structure
// Keep the data structure as numbers.

// (A)lgorithm
/*
Receive two inputs (length and width) in meters from user.
Create 'areaInMeters' to equal to the multiplication of the two inputs received.
Create 'areaInSF' to equal to 'areaInMeters' times 10.7639.
Log both to user.
*/

// (C)ode
// let readline = require('readline-sync');
// const SQMETERS_TO_SQFEET = 10.7639;

// console.log('Enter length of room in meters');
// let length = Number(readline.prompt());
// console.log('Enter width of room in meters');
// let width = Number(readline.prompt());

// let areaInMeters = parseFloat(length * width).toFixed(2);
// let areaInSF = parseFloat(areaInMeters * SQMETERS_TO_SQFEET).toFixed(2);

// console.log(`The area of the room is ${areaInMeters}
// square meters (${areaInSF} square feet).`);

//Further Exploration
let readline = require('readline-sync');
const SQMETERS_TO_SQFEET = 10.7639;

let convertToFt = (sqMeters) => sqMeters * SQMETERS_TO_SQFEET;
let convertToMeters = (sqFeet) => sqFeet / SQMETERS_TO_SQFEET;

console.log('Please input the unit (meter or feet)');
let unit = readline.prompt();
console.log('Enter length of room:');
let length = parseInt(readline.prompt(), 10);
console.log('Enter width of room:');
let width = parseInt(readline.prompt(), 10);

if (unit === 'feet') {
  let areaInSF = parseFloat(length * width).toFixed(2);
  let areaInMeters = parseFloat(convertToMeters(areaInSF)).toFixed(2);
  console.log(`The area of the room is ${areaInSF} square feet (${areaInMeters} square meters).`);
} else {
  let areaInMeters = parseFloat(length * width).toFixed(2);
  let areaInSF = parseFloat(convertToFt(areaInMeters)).toFixed(2);
  console.log(`The area of the room is ${areaInMeters} square meters (${areaInSF} square feet).`);
}
