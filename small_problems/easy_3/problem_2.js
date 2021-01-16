// (P)roblem
/*
Input: String
Output: String

Explicit Requirements:
- Create a text box surrounding text.

Implicit Requirements:
- It is one line of text, not multiple.
- If it is empty, the length of the box is 4 columns x 5 rows.
- Text is centered in the box.

*/

// (E)xamples
/*
+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+
*/

// (D)ata Structure
/*
Keep the structure as a string.
*/

// (A)lgorithm
/*
Get length of text + 1 and store as 'boxLength'
Create top and bottom borders by multiply boxLength with '-' and adding '+'.
Create side borders by multiplying boxLength with blank spaces and '|'

*/

// (C)ode
function logInBox(string) {
  let boxLength = string.length + 2;
  let topBotBorder = `+${'-'.repeat(boxLength)}+`;
  let sideBorder = `|${' '.repeat(boxLength)}|`;
  let textBorder = `| ${string} |`;

  console.log(topBotBorder);
  console.log(sideBorder);
  console.log(textBorder);
  console.log(sideBorder);
  console.log(topBotBorder);
}


logInBox('test');
logInBox('To boldly go where no one has gone before.');
logInBox('');

// Further Exploration - Truncated
function logInBoxTruncated(string, boxWidth) {
  let topBotBorder = `+${'-'.repeat(string.length + 2)}+`;
  let sideBorder = `|${' '.repeat(string.length + 2)}|`;
  let textBorder = `| ${string} |`;

  if (boxWidth < string.length + 2) {
    topBotBorder = `+${'-'.repeat(boxWidth)}+`;
    sideBorder = `|${' '.repeat(boxWidth)}|`;
    textBorder = `| ${string.slice(0, boxWidth - 2)} |`;
  }

  console.log(topBotBorder);
  console.log(sideBorder);
  console.log(textBorder);
  console.log(sideBorder);
  console.log(topBotBorder);
}
logInBoxTruncated('truncated', 8);
logInBoxTruncated('truncated', 9);
logInBoxTruncated('truncated', 10);
logInBoxTruncated('truncated', 11);
logInBoxTruncated('To boldly go where no one has gone before.', 7);
logInBoxTruncated('', 5);


// Further Exploration - Wrapped
function wrapText(string, boxWidth) {
  let arr = [];
  for (let item = 0; item < string.length; item += boxWidth - 2) {
    arr.push(string.slice(item, item + boxWidth - 2));
  }
  arr[arr.length - 1] = arr[arr.length - 1].padEnd(boxWidth - 2, ' ');
  return arr;
}

function createTextBorder(array) {
  for (let item = 0; item < array.length; item += 1) {
    console.log(`| ${array[item]} |`);
  }
}

function logInBoxWrapped(string, boxWidth) {
  let topBotBorder = `+${'-'.repeat(string.length + 2)}+`;
  let sideBorder = `|${' '.repeat(string.length + 2)}|`;
  let textBorder = `| ${string} |`;

  if (boxWidth < string.length) {
    topBotBorder = `+${'-'.repeat(boxWidth)}+`;
    sideBorder = `|${' '.repeat(boxWidth)}|`;
    textBorder = wrapText(string, boxWidth);
  }

  console.log(topBotBorder);
  console.log(sideBorder);
  createTextBorder(textBorder);
  console.log(sideBorder);
  console.log(topBotBorder);
}

logInBoxWrapped('To boldly go where no one has gone before.', 15);
logInBoxWrapped('Hello world, this is test text to see how long this can be wrapped.', 20);

