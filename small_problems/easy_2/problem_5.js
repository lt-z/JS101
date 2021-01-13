// (P)roblem
/*
Input: Two numbers
Output: 6 sets of numbers

Explicit Requirements:
- Input validation not needed.
- Order is +, - , * , / , % , **

Implicit Requirements:
- The division operation appears to round to the lower integer

*/

// (E)xamples
/*
24 + 14 = 40
23 - 17 = 6
23 * 17 = 391
23 / 17 = 1
23 % 17 = 6
23 ** 17 = 141050039560662968926103
*/

// (D)ata Structure
/*
Data structure remains as numbers and outputted into strings.
*/

// (A)lgorithm
/*
'num1' as first number
'num2' as second number
create functions for each operation.
output each.
*/

// (C)ode
let readline = require('readline-sync');

let num1 = readline.questionFloat('==> Enter the first number:\n');
let num2 = readline.questionFloat('==> Enter the second number:\n');

let add = (num1, num2) => num1 + num2;
let sub = (num1, num2) => num1 - num2;
let mul = (num1, num2) => num1 * num2;
let div = (num1, num2) => Math.floor(num1 / num2);
let mod = (num1, num2) => num1 % num2;
let pow = (num1, num2) => num1 ** num2;

console.log(`==> ${num1} + ${num2} = ${add(num1, num2)}`);
console.log(`==> ${num1} - ${num2} = ${sub(num1, num2)}`);
console.log(`==> ${num1} * ${num2} = ${mul(num1, num2)}`);
console.log(`==> ${num1} / ${num2} = ${div(num1, num2)}`);
console.log(`==> ${num1} % ${num2} = ${mod(num1, num2)}`);
console.log(`==> ${num1} ** ${num2} = ${pow(num1, num2)}`);
