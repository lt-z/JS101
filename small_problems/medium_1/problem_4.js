// (P)roblem
/*
Input: String
Output: Numbers

Explicit Requirements:
- Create a simulated 'stack'
- Specific variables do specific tasks.

Implicit Requirements:
- Numbers can be negative or positive.
- Stack must have value inputs in order to function.
*/

// (E)xamples
/*
'5 PUSH 3 MULT PRINT' -> '15'
It stores 5 in register.
Pushes the register (5) to the stack.
Store 3 in register.
Multiply the popped stack (5) with the register (3) = register
Prints the register.
*/

// (D)ata Structure
/*
Turn the string into an array structure then log to console.
*/

// (A)lgorithm
/*
1. Create an empty register and stack as array.
2. Split the input string by the spaces into 'arr'
3. Iterate through 'arr':
  If the item is a number -> Save into register.
  If the item equals 'PUSH' -> Push register into stack.
  If the item equals 'PRINT' -> Log current register.
  If the item equals 'ADD' -> Pop stack and add to current register
  If the item equals 'MULT' -> Pop stack and multiply to current register
  If the item equals 'DIV' -> Pop stack and divide to current register
  If the item equals 'MOD' -> Pop stack and modulus to current register
  If the item equals 'POP' -> Pop stack and reassign to current register
4. Other inputs: Log as invalid input.
*/

// (C)ode
function minilang(string) {
  let register;
  let stack = [];
  let array = string.split(' ');
  array.forEach(item => {
    if (!isNaN(item)) register = Number(item);
    else if (item === 'PUSH' && register !== undefined) stack.push(register);
    else if (item === 'PRINT') console.log(register);
    else if (stack.length > 0) {
      if (item === 'ADD') register += stack.pop();
      else if (item === 'SUB') register -= stack.pop();
      else if (item === 'MULT') register *= stack.pop();
      else if (item === 'DIV') register = Math.floor(register / stack.pop());
      else if (item === 'MOD') register = Math.floor(register % stack.pop());
      else if (item === 'POP') register = stack.pop();
    } else {
      console.log('invalid input');
    }
  });
}

console.log(minilang('PRINT'));
console.log(minilang('5 PUSH 3 MULT PRINT'));
console.log(minilang('5 PRINT PUSH 3 PRINT ADD PRINT'));
console.log(minilang('5 PUSH POP PRINT'));
console.log(minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT'));
console.log(minilang('3 PUSH PUSH 7 DIV MULT PRINT'));
console.log(minilang('4 PUSH PUSH 7 MOD MULT PRINT'));
console.log(minilang('-3 PUSH 5 SUB PRINT'));
console.log(minilang('6 PUSH'));

console.log(minilang('test test test'));
console.log(minilang('PUSH DIV PRINT'));
