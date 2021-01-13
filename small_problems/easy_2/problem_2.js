// (P)roblem
/*
Input: String
Output: String

Explicit Requirements:
- If the last input character is '!', return all caps.

Implicit Requirements:
- When '!' is the last char, it will need to be removed in the return string.
*/

// (E)xamples
/*
What is your name? Bob
Hello Bob.

What is your name? Bob!
HELLO BOB! WHY ARE WE SCREAMING?
*/

// (D)ata Structure
/*
Data structure to remain strings.
*/

// (A)lgorithm
/*
Store input as 'name'.
Check if last character of string is '!'.
If it is, return all caps text.
Else, return 'Hello name'.
*/

// (C)ode
let readline = require('readline-sync');
let name = readline.question('What is your name? ');
if (name.slice(-1) === '!') {
  console.log(`HELLO ${name.slice(0, -1).toUpperCase()}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}.`);
}
