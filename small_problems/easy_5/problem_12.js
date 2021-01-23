// (P)roblem
/*
Input: String
Output: Number

Explicit Requirements:
- Two functions to be created (one for before and after midnight)
- Cannot use Date class.
- Return number should be in the range of 0 and 1439.

Implicit Requirements:
- ?
*/

// (E)xamples
/*
after, 00:00 -> 0
before, 00:00 -> 0

after, 12:34 -> 754
before, 12:34 -> 686

after, 24:00 -> 0
before, 24:00 -> 0

*/

// (D)ata Structure
/*
Convert from string to number.
*/

// (A)lgorithm
/*
1. Split hours and minutes into separate variables.

after midnight:
2. Multiply hours by 60.
3. Add minutes to hours -> This is final minutes.

before midnight:
2. Split
*/

// (C)ode
const HOURS_PER_DAY = 24;
const MINUTES_PER_HOUR = 60;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

let afterMidnight = (string) => {
  let [hour, minute] = string.split(':').map(item => Number(item));
  return ((hour * MINUTES_PER_HOUR) + minute) % MINUTES_PER_DAY;
};

let beforeMidnight = (string) => {
  let [hour, minute] = string.split(':').map(item => Number(item));
  return ((hour * MINUTES_PER_HOUR) - minute) % MINUTES_PER_DAY;
};


console.log(afterMidnight('00:00'));
console.log(beforeMidnight('00:00'));
console.log(afterMidnight('12:34'));
console.log(beforeMidnight('12:34'));
console.log(afterMidnight('25:00'));
console.log(beforeMidnight('25:00'));
