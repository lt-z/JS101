let statement = "The Flintstones Rock";

let statementArray = statement.split('').filter(char => char !== ' ');
let frequency = {};
statementArray.forEach(letter => {
  frequency[letter] = frequency[letter] || 0;
  frequency[letter] += 1;
});
console.log(frequency);