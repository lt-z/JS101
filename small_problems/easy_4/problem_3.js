// (P)roblem
/*
Input: Number
Output: String

Explicit Requirements:
- Receive two Number inputs, output two strings with numbers.

Implicit Requirements:
- Current year is 2021. Base calculation off of this.
*/

// (E)xamples
/*
Age? 30
Retirement Age? 70

-> It's 2021. You will retire in 2061.
-> You have only 40 years of work to go!
*/

// (D)ata Structure
/*
Convert number to string via string literal when logging.
*/

// (A)lgorithm
/*
1. Receive two inputs, age and retirement age.
2. Calculate difference in the two ages.
3. Add difference to current year and store as 'retirementYear'

*/

// (C)ode
let readline = require('readline-sync');

let currentAge = readline.questionFloat('What is your age? ');
let retirementAge = readline.questionFloat('At what age would you like to retire? ');
let ageDiff = retirementAge - currentAge;
let date = Date();
let currentYear = date.getFullYear();

console.log(`It's ${currentYear}. You will retire in ${currentYear + ageDiff}.`);
console.log(`You have only ${ageDiff} years of work to go!`);

// Further Exploration
/*
Without 'new', it does not create an instance of 'Date()',
so a new object is NOT created and the methods are not able to be used.
*/
