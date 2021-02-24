// (P)roblem
/*
Input: Object
Output: String

Explicit Requirements:
- Input is open-ended.
- Input is randomized nouns, verbs, adj, and adv.
- Return a single string that includes the randomized inputs.

Implicit Requirements:
- ?
*/

// (E)xamples
/*
The "sleepy" brown "cat" "noisily"
"licks" the "sleepy" yellow
"dog", who "lazily" "licks" his
"tail" and looks around.
*/

// (D)ata Structure
/*
Input to be an object -> convert to a string.
*/

// (A)lgorithm
/*
1. Create inner function that will be used as an input for the regex replacement
  Key = Replace the matched text from %{text} and remove all but text.
  Index = Randomize index based on Key
  Return the object[key][randomized index]
2. Return the match of %{type} with the inner function above.
*/

// (C)ode
function madlibs(template) {
  const REPLACEMENT_TEXT = {
    adjective: ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'],
    noun: ['fox', 'dog', 'head', 'leg', 'tail', 'cat'],
    verb: ['jumps', 'lifts', 'bites' ,'licks', 'pats'],
    adverb: ['easily', 'lazily', 'noisily', 'excitedly']
  };

  function replaceText(match) {
    let key = match.replace(/[^a-z]/g, '');
    let index = Math.floor(Math.random() * REPLACEMENT_TEXT[key].length);
    return REPLACEMENT_TEXT[key][index];
  }

  return template.replace(/%{[a-z]+}/g, replaceText);
}


let template1 =
  "The %{adjective} brown %{noun} %{adverb} " +
  "%{verb} the %{adjective} yellow " +
  "%{noun}, who %{adverb} %{verb} his " +
  "%{noun} and looks around.";

console.log(madlibs(template1));