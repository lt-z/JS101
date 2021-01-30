function createUUID() {
  const CHARACTERS = '0123456789abcdef';
  const UUID_LENGTH = 32;
  const DASH_INDEXES = [8, 13, 18, 23];

  let result = '';

  for (let char = 0; char < UUID_LENGTH; char += 1) {
    if (DASH_INDEXES.includes(char)) {
      result += '-';
    }
    let randomize = Math.floor(Math.random() * CHARACTERS.length);
    result += CHARACTERS[randomize];
  }

  return result;
}

console.log(createUUID());
console.log(createUUID());
console.log(createUUID());
console.log(createUUID());
