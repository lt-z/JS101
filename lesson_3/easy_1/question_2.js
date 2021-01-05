let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

function findExclamation(string) {
  return string[string.length - 1] === '!';
}

console.log(findExclamation(str1));
console.log(findExclamation(str2));