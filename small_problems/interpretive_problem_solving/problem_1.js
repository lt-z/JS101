// (P)roblem
/*
Input: Number
Output: Array

Explicit Requirements:
- As round goes up, iterate +1 of switching.
- Number of repeats depends on the count.

Implicit Requirements:
- Array starts at 1, not 0.
*/

// (E)xamples
/*
5 -> [1, 4]
100 -> [1,  4,  9, 16, 25, 36, 49, 64, 81, 100]
*/

// (D)ata Structure
/*
Conver number to an array.
*/

// (A)lgorithm
/*
Create initial switch array:
1. Create empty 'array'.
2. For the number of switches, push 'off'.
3. Return the 'array'.

Main function:
1. Create variable to store the 'initial array' (above).
2. Create a loop for length of 'array'. (for rounds)
    Create an inner loop for length of 'array'. (for switching switches)
      If switch number is divisible by round, turn on/off switch.
3. Return the array of switches and run it through the function below.

Lights On Index:
1. Receive array of switches.
2. Reduce the array:
  If switch is on:
    Push index to accumulator
  Return accumulator.
3. Return the new array.
*/

// (C)ode
function createSwitchArray(switches) {
  let switchArray = [];

  for (let sw = 1; sw <= switches; sw += 1) {
    switchArray.push('off');
  }
  return switchArray;
}

function lightsOnIndex(array) {
  return array.reduce((acc, sw, index) => {
    if (sw === 'on') acc.push(index + 1);
    return acc;
  }, []);
}

function lightsOn(switches) {
  let switchArray = createSwitchArray(switches);

  for (let round = 1; round <= switchArray.length; round += 1) {
    for (let sw = 1; sw <= switchArray.length; sw += 1) {
      if (sw % round === 0) {
        if (switchArray[sw - 1] === 'off') {
          switchArray[sw - 1] = 'on';
        } else {
          switchArray[sw - 1] = 'off';
        }
      }
    }
  }
  return lightsOnIndex(switchArray);
}

console.log(lightsOn(5));
console.log(lightsOn(100));
