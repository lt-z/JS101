let arr = [['a', 1], ['b', 'two'], ['sea', {c: 3}], ['D', ['a', 'b', 'c']]];


let newArr = {};
for (let subArr in arr) {
  newArr[arr[subArr][0]] = arr[subArr][1];
}
console.log(newArr);

// expected return value of function call
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }
