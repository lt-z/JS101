// (P)roblem
/*
Input: Number
Output: Boolean

Explicit Requirements:
- Leap Year is True if:
  * Divisible by 4
  * Divisible by 100 AND divisible by 400
- Leap Year is False if:
  * Divisible by 4 AND divisible by 100
  * Divisible by 100
- Year is always greater than 0.
- No input validation.

Implicit Requirements:
- ?
*/

// (E)xamples
/*
2016 -> true
2015 -> false
2100 -> false
2400 -> true
240000 -> true
1 -> false
100 -> false
400 -> true
*/

// (D)ata Structure
/*
Keep the structure a number.
*/

// (A)lgorithm
/*
If year is divisble by 400:
  Return true
Else if year is divisible by 100:
  Return false
Else:
  Return if year is divisble by 4
*/

// (C)ode
let isLeapYear = (year) => {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else {
    return (year % 4 === 0);
  }
};

console.log(isLeapYear(2016));
console.log(isLeapYear(2015));
console.log(isLeapYear(2100));
console.log(isLeapYear(2400));
console.log(isLeapYear(240000));
console.log(isLeapYear(240001));
console.log(isLeapYear(2000));
console.log(isLeapYear(1900));
console.log(isLeapYear(1752));
console.log(isLeapYear(1700));
console.log(isLeapYear(1));
console.log(isLeapYear(100));
console.log(isLeapYear(400));

//Further Exploration
function isLeapYear2(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      }
      return false;
    }
    return true;
  } else {
    return false;
  }
}

console.log(isLeapYear2(2016));
console.log(isLeapYear2(2015));
console.log(isLeapYear2(2100));
console.log(isLeapYear2(2400));
console.log(isLeapYear2(240000));
console.log(isLeapYear2(240001));
console.log(isLeapYear2(2000));
console.log(isLeapYear2(1900));
console.log(isLeapYear2(1752));
console.log(isLeapYear2(1700));
console.log(isLeapYear2(1));
console.log(isLeapYear2(100));
console.log(isLeapYear2(400));