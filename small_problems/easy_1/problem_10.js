// (P)roblem
/*
Input: Number
Output: Number

Explicit Requirements:
- Lowest number is 1.
- Compute sum of numbers from 1 to number that are divisble by 3 or 5.
- Include the number to sum (if divisible).

Implicit Requirements:
- No input validation.
*/

// (E)xamples
/*
3 -> 3
5 -> 8
10 -> 33
1000 -> 234168
*/

// (D)ata Structure
/*
Keep data structure as numbers.
*/

// (A)lgorithm
/*
Create variable 'sum'.
Create a loop from 1 to number:
  if multiple of 3 or 5:
    add to 'sum'
Return sum
*/

// (C)ode
let multisum = (number) => {
  let sum = 0;

  for (let num = 1; num <= number; num += 1) {
    if (num % 3 === 0 || num % 5 === 0) {
      sum += num;
    }
  }
  return sum;
};

console.log(multisum(3));
console.log(multisum(5));
console.log(multisum(10));
console.log(multisum(1000));
console.log(multisum(20));
