const readline = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');
let language;

function languageChange() {
  prompt('language');
  let setLanguage = readline.question().toLowerCase();
  while (!['en', 'es'].includes(setLanguage)) {
    prompt('invalid_lang');
    setLanguage = readline.question().toLowerCase();
  }
  language = setLanguage;
}

function prompt(key, number = '') {
  let message = messages(key, language);
  console.log(`=> ${message}${number}`);
}

function getValidNumber(number) {
  while (number.trimStart() === '' || Number.isNaN(Number(number))) {
    prompt('NaN');
    number = readline.question();
  }
  return number;
}

function getValidChoice(choice) {
  while (!['1', '2', '3', '4'].includes(choice)) {
    prompt('choice');
    choice = readline.question();
  }
  return choice;
}

function getValidRepeat(repeat) {
  while (!['y', 'n'].includes(repeat)) {
    prompt('invalid');
    repeat = readline.question().toLowerCase();
  }
  return repeat;
}

function messages(message, lang = 'en') {
  return MESSAGES[lang][message];
}

languageChange();

while (true) {
  console.clear();
  prompt('welcome');

  prompt('first');
  let number1 = getValidNumber(readline.question());

  prompt('second');
  let number2 = getValidNumber(readline.question());

  prompt('operation');
  let operation = getValidChoice(readline.question());

  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }
  prompt('result', output);

  prompt('repeat');
  let repeat = getValidRepeat(readline.question().toLowerCase());

  if (repeat === 'n') break;
}