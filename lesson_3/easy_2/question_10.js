let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

console.log(statement1.split('t').length - 1);
console.log((statement2.match(/t/g) || []).length);

console.log(statement1.split('').filter(letter => letter === 't').length);
console.log(statement2.split('').filter(letter => letter === 't').length);