let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);
console.log([].concat(...flintstones));

console.log(flintstones.flat(1));

flintstones = [ 'Fred', 'Wilma', [ 'Barney', 'Betty' ], [ 'Bambam', 'Pebbles' ] ];
let newArray = [];
flintstones.forEach(item => {
  newArray = newArray.concat(item);
});
console.log(newArray);

flintstones = [ 'Fred', 'Wilma', [ 'Barney', 'Betty' ], [ 'Bambam', 'Pebbles' ] ];
flintstones = flintstones.reduce((accumulator, element) => {
  return accumulator.concat(element);
}, []);
console.log(flintstones);