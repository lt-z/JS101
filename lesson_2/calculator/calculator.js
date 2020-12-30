const readline = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');
let language;

function languageChange() {
  prompt('language');
  let setLanguage = readline.question();
  while (!['en', 'es'].includes(setLanguage)) {
    prompt('invalid_lang');
    setLanguage = readline.question();
  }
  language = setLanguage;
}

function prompt(key, number = '') {
  let message = messages(key, language);
  console.log(`=> ${message}${number}`);
}

function invalidNumber(number) {
  while (number.trimStart() === '' || Number.isNaN(Number(number))) {
    prompt('NaN');
    number = readline.question();
  }
  return number;
}

function messages(message, lang = 'en') {
  return MESSAGES[lang][message];
}

languageChange();

while (true) {
  console.clear();
  prompt('welcome');

  prompt('first');
  let number1 = invalidNumber(readline.question());

  prompt('second');
  let number2 = invalidNumber(readline.question());

  prompt('operation');
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt('choice');
    operation = readline.question();
  }

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
  let repeat = readline.question();

  while (!['y', 'n'].includes(repeat)) {
    prompt('invalid');
    repeat = readline.question();
  }
  if (repeat === 'n') break;
}