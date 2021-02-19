// (P)roblem
/*
Input: Two strings
Output: Number;

Explicit Requirements:
- Return number of times first argument is in second argument.
- Punctuation may be in some words.

Implicit Requirements:
- Case insensitive.
*/

// (E)xamples
/*
'sed', text -> 4
'est', text -> 0
'est,', text -> 2
*/

// (D)ata Structure
/*
Convert the string to an array and reduce to a number.
*/

// (A)lgorithm
/*
1. Find matches
*/

// (C)ode
const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Sed quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?';

function searchWord(wordMatch, string) {
  let array = string.toLowerCase().split(' ');
  return array.reduce((acc, word) => {
    if (word === wordMatch) {
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);
}

console.log(searchWord('sed', text));
console.log(searchWord('est', text));
console.log(searchWord('est,', text));
