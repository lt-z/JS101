// (P)roblem
/*
Input: String
Output: Boolean

Explicit Requirements:
- '(' and ')' must match in count
- ')' cannot start without '('

Implicit Requirements:
- ?
*/

// (E)xamples
/*
"What (is) this?" -> true
)Hey!( -> false
What ((is))) up( -> false
((What) (is this))? -> true
*/

// (D)ata Structure
/*
Keep structure as string.
*/

// (A)lgorithm
/*
1. Create an 'paren' string to store '(' and ')' values
2. Iterate through each character of the string:
  If '(':
    add to 'paren'
  Else if ')' and 'paren' is not empty:
    pop 'paren'
  Else if ')':
    return false

*/

// (C)ode
function isBalanced(string) {
  let paren = [];
  for (let char in string) {
    if (string[char] === '(') {
      paren.push(string[char]);
    } else if (string[char] === ')' && paren.length) {
      paren.pop();
    } else if (string[char] === ')') return false;
  }

  return !paren.length;
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);

// Further Exploration sans quotes
function isBalanced1(string) {
  let paren = [];
  let obj = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for (let char in string) {
    if (Object.values(obj).includes(string[char])) {
      paren.push(string[char]);
    } else if (Object.keys(obj).includes(string[char]) &&
              paren[paren.length - 1] === obj[string[char]]) {
      paren.pop();
    } else if (Object.keys(obj).includes(string[char]) &&
              !(paren[paren.length - 1] === obj[string[char]])) {
      return false;
    }
  }
  return !paren.length;
}

console.log(isBalanced1("[()]")); // true
console.log(isBalanced1("[](){}")); // true
console.log(isBalanced1("[(})]")); // false
console.log(isBalanced1("{[}]"));  // false
console.log(isBalanced1("{[{}}]"));  // false
console.log(isBalanced1('([{}])'));  // true
console.log(isBalanced1('"[{}]"'));  // true
console.log(isBalanced1("{['test']}")); // true
