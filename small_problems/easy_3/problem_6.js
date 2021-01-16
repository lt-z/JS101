// (P)roblem
/*
Input: Strings
Output: Strings

Explicit Requirements:
- Four inputs are taken in: noun, verb, adjective, adverb
- Insert the inputs into a story.

Implicit Requirements:
- Some inputs are used multiple times.

*/

// (E)xamples
/*
dog, walk, blue, quickly -> Do you walk your blue dog quickly? That's hilarous
-> The blue dog walks quickly over the lazy dog.
-> The dog quickly walks up blue Joe's turtle.
*/

// (D)ata Structure
/*
Data structure remains strings.
*/

// (A)lgorithm
/*
Save each noun, verb, adj, adv as separate variables.
Log each via string literals.
*/

// (C)ode
let readline = require('readline-sync');
let noun = readline.question('Enter a noun: ');
let verb = readline.question('Enter a verb: ');
let adjective = readline.question('Enter a adjective: ');
let adverb = readline.question('Enter a adverb: ');

console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarous!`);
console.log(`The ${adjective} ${noun} ${verb}s ${adverb} over the lazy dog.`);
console.log(`The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.`);
