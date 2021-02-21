// (P)roblem
/*
Input: Two strings
Output: String

Explicit Requirements:
- Return the matching word but all-caps and with *** around it.
- Punctuation may be in some words

Implicit Requirements:
- Case insensitive.
*/

// (E)xamples
/*
'sed', text -> ***SED***
'est,', text -> ***EST,***
*/

// (D)ata Structure
/*
Convert string to an array then back to a string.
*/

// (A)lgorithm
/*
1. Convert string into an array via map.
2. If word matches with the match word:
  Return the modified word
3. Else return the original word.
4. Convert array into a string.
*/

// (C)ode
const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Sed quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?';

function searchWord(wordMatch, string) {
  return string.split(' ').map(word => {
    if (word.toLowerCase() === wordMatch) {
      return `***${word.toUpperCase()}***`;
    } else {
      return word;
    }
  }).join(' ');
}

console.log(searchWord('sed', text));
console.log(searchWord('est', text));
console.log(searchWord('est,', text));

function searchWordRegex(word, string) {
  let re = new RegExp(word, 'gi');
  return string.replace(re, `***${word.toUpperCase()}***`);
}

console.log(searchWordRegex('sed', text));
