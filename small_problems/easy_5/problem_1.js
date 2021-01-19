// (P)roblem
/*
Input: Number (float)
Output: String (degrees)

Explicit Requirements:
- Convert the floating point number to angle (degrees, minutes, seconds)
- Results may be slightly different, depending on how it is rounded.

Implicit Requirements:
- ?
*/

// (E)xamples
/*
30 -> 30°00'00"
76.73 -> 76°43'48"
254.6 -> 254°35'59"
93.034773 -> 93°02'05"
0 -> 0°00'00"
360 -> 360°00'00" or 0°00'00"
*/

// (D)ata Structure
/*
Data structure will convert from number to a string.
*/

// (A)lgorithm
/*
1. Store whole number portion into 'degree'.
2. Convert 'decimal' to minutes and seconds:
  Multiply by 60, then round -> keep whole portion as 'minutes'.
  Multiply by 60, then round -> keep all as 'seconds'.
Return as string.
  */

// (C)ode
const DEGREES_TO_MINUTES = 60;
const MINUTES_TO_SECONDS = 60;

let padZero = (number) => {
  return String(Math.floor(number)).padStart(2, 0);
};

let dms = (number) => {
  let degrees = Math.floor(number);
  let minutes = (number - degrees) * DEGREES_TO_MINUTES;
  let seconds = (minutes - Math.floor(minutes)) * MINUTES_TO_SECONDS;

  return `${degrees}°${padZero(minutes)}'${padZero(seconds)}"`;
};

console.log(dms(30));
console.log(dms(76.73));
console.log(dms(254.6));
console.log(dms(93.034773));
console.log(dms(0));
console.log(dms(360));

// Further Exploration

let checkNegative = (number) => {
  return String(number)[0] === '-' ? '-' : '';
};

let dms2 = (number) => {
  let negative = checkNegative(number);

  if (negative) {
    number = Number(String(number).slice(1));
  }

  let degrees = Math.floor(number);
  let minutes = (number - degrees) * DEGREES_TO_MINUTES;
  let seconds = (minutes - Math.floor(minutes)) * MINUTES_TO_SECONDS;

  return `${negative}${degrees}°${padZero(minutes)}'${padZero(seconds)}"`;
};

console.log(dms2(-1));
console.log(dms2(400));
console.log(dms2(-40));
console.log(dms2(-420));

// Further Exploration 2
let dmsRange = (number) => {
  while (number < 0) {
    number += 360;
  }
  while (number > 360) {
    number -= 360;
  }
  return number;
};

let dms3 = (number) => {
  number = dmsRange(number);

  let degrees = Math.floor(number);
  let minutes = (number - degrees) * DEGREES_TO_MINUTES;
  let seconds = (minutes - Math.floor(minutes)) * MINUTES_TO_SECONDS;

  return `${degrees}°${padZero(minutes)}'${padZero(seconds)}"`;
};

console.log(dms3(-1));
console.log(dms3(400));
console.log(dms3(-40));
console.log(dms3(-420));
