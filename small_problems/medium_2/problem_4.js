// (P)roblem
/*
Input: Number
Output: Number

Explicit Requirements:
- Return number of days Friday 13th occurs for the input year.
- Assume year is greater than 1752.

Implicit Requirements:
- ?
*/

// (E)xamples
/*
1986 -> 1
2015 -> 3
2017 -> 2
*/

// (D)ata Structure
/*
Structure to turn into date structure.
*/

// (A)lgorithm
/*
1. Create a counter.
2. Loop through the months for the input year for the 13th day.
3. Find day of week for that 13th day.
4. If on Friday, count += 1.
5. Return count.
*/

// (C)ode
function fridayThe13ths(year) {
  let count = 0;

  for (let month = 0; month <= 12; month += 1) {
    let date = new Date(year, month, 13);
    let dayOfWeek = date.getDay();

    if (dayOfWeek === 5) {
      count += 1;
    }
  }
  return count;
}

console.log(fridayThe13ths(1986));
console.log(fridayThe13ths(2015));
console.log(fridayThe13ths(2017));
