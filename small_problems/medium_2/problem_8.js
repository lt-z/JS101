// (P)roblem
/*
Input: String
Output: String

Explicit Requirements:
- Sentences end with periods, exclamation points, or questin marks.
- Words = anything but sentences or sentence enders (above).
- Return string should preserve punctuation.

Implicit Requirements:
- If two sentences have same lengths, return first one.
*/

// (E)xamples
/*
'Where do you think you're going? What's up, Doc?'
-> Where do you think you're going?
-> The longest sentence has 86 words.

*/

// (D)ata Structure
/*
Convert string to an array, then back into a string.
*/

// (A)lgorithm
/*

*/

// (C)ode
let longText =
  'Four score and seven years ago our fathers brought forth on this ' +
  'continent a new nation, conceived in liberty, and dedicated to the ' +
  'proposition that all men are created equal. Now we are engaged in a ' +
  'great civil war, testing whether that nation, or any nation so ' +
  'conceived and so dedicated, can long endure. We are met on a great ' +
  'battlefield of that war.\n We have come to dedicate a portion of that ' +
  'field, as a final resting place for those who here gave their lives ' +
  'that that nation might live. It is altogether fitting and proper that ' +
  'we should do this.';

let longerText = longText +
  'But, in a larger sense, we can not dedicate, we can not consecrate, ' +
  'we can not hallow this ground. The brave men, living and dead, who ' +
  'struggled here, have consecrated it, far above our poor power to add ' +
  'or detract. The world will little note, nor long remember what we say ' +
  'here but it can never forget what they did here. It is for us the ' +
  'living, rather, to be dedicated here to the unfinished work which ' +
  'they who fought here have thus far so nobly advanced. It is rather ' +
  'for us to be here dedicated to the great task remaining before us -- ' +
  'that from these honored dead we take increased devotion to that ' +
  'cause for which they gave the last full measure of devotion -- that ' +
  'we here highly resolve that these dead shall not have died in vain ' +
  '-- that this nation, under God, shall have a new birth of freedom -- ' +
  'and that government of the people, by the people, for the people, ' +
  'shall not perish from the earth.';


function longestSentence(string) {
  let array = string.split(/(?<=\.)|(?<=\?)|(?<=!)/gi);
  let sentenceLengths = array.map(sentence => {
    return sentence.trim().split(' ').length;
  });
  let numOfMostWords = Math.max(...sentenceLengths);

  console.log(array[sentenceLengths.indexOf(numOfMostWords)]);
  console.log(`The longest sentence is ${numOfMostWords} words.`);
}


longestSentence(longText);
// Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.
//
// The longest sentence has 30 words.

longestSentence(longerText);
// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.
//
// The longest sentence has 86 words.

longestSentence("Where do you think you're going? What's up, Doc?");
// Where do you think you're going?
//
// The longest sentence has 6 words.

longestSentence("To be or not to be! Is that the question?");
// To be or not to be!
//
// The longest sentence has 6 words.


function longestParagraph(string) {
  let array = string.split(/(?<=\n)/gi);
  let paragraphLengths = array.map(paragraph => {
    return paragraph.trim().split(' ').length;
  });
  let numOfMostWords = Math.max(...paragraphLengths);

  console.log(array[paragraphLengths.indexOf(numOfMostWords)]);
  console.log(`The longest paragraph is ${numOfMostWords} words.`);
}

longestParagraph(longerText);


// Includes commas, periods, exclamation points, question marks.
function longestWord(string) {
  let array = string.split(' ');
  let wordLengths = array.map(word => {
    return word.length;
  });
  let numOfMostWords = Math.max(...wordLengths);

  console.log(array[wordLengths.indexOf(numOfMostWords)]);
  console.log(`The longest word is ${numOfMostWords} letters.`);
}

longestWord(longerText);
