// (P)roblem
/*
Input: Number, Array of objects
Output: Boolean

Explicit Requirements:
- 'Movement' determines if the quantity is a positive number.
- If the total quantity is above 0, return true

Implicit Requirements:
- Return false if it's 0, since there is no stock.

*/

// (E)xamples
/*
Omitted: transactions variable

Input: 101, transactions
Output: False
*/

// (D)ata Structure
/*
Use the existing transaction variable and reduce to a number.
Based on the numebr, return a boolean
*/

// (A)lgorithm
/*
1. Using the previous filter function created, set it as a variable.
2. Reduce the variable to add/subtract the 'quantity' based on the 'movement'
3. Return accumulation and compare if it is bigger than 0.
*/

// (C)ode
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

function transactionsFor(id, array) {
  return array.filter(item => item.id === id);
}

function isItemAvailable(id, array) {
  let idTransaction = transactionsFor(id, array);

  return idTransaction.reduce((acc, item) => {
    if (item.movement === 'in') {
      return acc + item.quantity;
    } else {
      return acc - item.quantity;
    }
  }, 0) > 0;
}

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true
