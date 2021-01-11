let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

let newObject = {};
flintstones.forEach((item, index) => {
  newObject[item] = index;
});
console.log(newObject);
