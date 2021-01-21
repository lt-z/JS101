// (P)roblem
/*
Input: Number
Output: String

Explicit Requirements:
- Positive => Past midnight
- Negative => Before midnight
- Convert from minute based time to 24 hour format.
- Cannot use Date class.

Implicit Requirements:
- ?
*/

// (E)xamples
/*
0 -> 00:00
-3 -> 23:57
35 -> 00:35
-1437 -> 00:03
3000 -> 02:00
800 -> 13:20
-4231 -> 01:29
*/

// (D)ata Structure
/*
Convert from number into a string.
*/

// (A)lgorithm
/*
1. Determine if number is positive or negative.
1. If positive: While number is above 1440, minus 1440.
    Divide number by 60 -> Get integer value.
    Multiply decimal by 60 to get minutes.
3. If negative: While number is below 1440, minus 1440.


*/

// (C)ode
const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = MINUTES_PER_HOUR * HOURS_PER_DAY;

let formatTime = (hour, minute) => {
  hour = String(hour).padStart(2, '0');
  minute = String(minute.toFixed(0)).padStart(2, '0');
  return `${hour}:${minute}`;
};

let timeOfDay = (number) => {
  if (number > 0) {
    while (number > MINUTES_PER_DAY) {
      number -= MINUTES_PER_DAY;
    }
  } else {
    while (number < -MINUTES_PER_DAY) {
      number += MINUTES_PER_DAY;
    }
    number += MINUTES_PER_DAY;
  }

  number /= MINUTES_PER_HOUR;

  let hour = Math.floor(number);
  let minute = (number - hour) * 60;
  return formatTime(hour, minute);
};

console.log(timeOfDay(0)); // 00:00
console.log(timeOfDay(-3)); // 23:57
console.log(timeOfDay(35)); // 00:35
console.log(timeOfDay(-1437)); // 00:03
console.log(timeOfDay(3000)); // 02:00
console.log(timeOfDay(800)); // 13:20
console.log(timeOfDay(-4231)); // 01:29

// Further Exploration

let timeOfDay2 = (number) => {
  let fullDate = new Date('January 24, 2021 00:00:00');
  let dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  fullDate.setMinutes(fullDate.getMinutes() + number);
  return `${dayOfWeek[fullDate.getDay()]} ${fullDate.toLocaleTimeString('en-US')}`;
};

console.log(timeOfDay2(-4231));
