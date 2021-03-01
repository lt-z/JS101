function neutralize(sentence) {
  let words = sentence.split(" ");

  words.slice().forEach(word => {
    if (isNegative(word)) {
      let index = words.indexOf(word);
      words.splice(index, 1);
    }
  });
  return words.join(" ");
}

function isNegative(word) {
  return ["dull", "boring", "annoying", "chaotic"].includes(word);
}

console.log(
  neutralize("These dull boring cards are part of a chaotic board game.")
);
// Expected: These cards are part of a board game.
// Actual: These boring cards are part of a board game.