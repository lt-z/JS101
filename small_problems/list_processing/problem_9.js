// (P)roblem
/*
Input: Number, Array of objects
Output: Array of objects

Explicit Requirements:
- Return only an array of objects that pertain to the same id as the number.

Implicit Requirements:
- Assumes the id's are valid and there are objects that have the ids.
*/

// (E)xamples
/*
Omitted transacations array of objects.

Input: 101, transactions
Output: [ { id: 101, movement: "in",  quantity:  5 },
          { id: 101, movement: "in",  quantity: 12 },
          { id: 101, movement: "out", quantity: 18 }, ]
*/

// (D)ata Structure
/*
Use the data structure from the variable (array of objects).
*/

// (A)lgorithm
/*
1. Filter the array of objects by the id.
*/

// (C)ode
function transactionsFor(id, array) {
  return array.filter(item => item.id === id);
}

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
  { id: 105, movement: 'in',  quantity: 10 },
  { id: 102, movement: 'out', quantity: 17 },
  { id: 101, movement: 'in',  quantity: 12 },
  { id: 103, movement: 'out', quantity: 20 },
  { id: 102, movement: 'out', quantity: 15 },
  { id: 105, movement: 'in',  quantity: 25 },
  { id: 101, movement: 'out', quantity: 18 },
  { id: 102, movement: 'in',  quantity: 22 },
  { id: 103, movement: 'out', quantity: 15 }, ];

console.log(transactionsFor(101, transactions));
