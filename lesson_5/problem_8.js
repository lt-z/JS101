const VOWELS = 'aeiou';
let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

let strings = Object.values(obj);
strings.forEach(array => {
  array.forEach(word => {
    word.split('').forEach(letter => {
      if (VOWELS.includes(letter)) {
        console.log(letter);
      }
    });
  });
});
