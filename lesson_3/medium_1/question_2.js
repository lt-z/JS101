let munstersDescription = "The Munsters are creepy and spooky.";

let capsReverse = munstersDescription.split('').map(letter => {
  if (letter.match(/[A-Z]/)) {
    return letter.toLowerCase();
  } else {
    return letter.toUpperCase();
  }
}).join('');

console.log(capsReverse);