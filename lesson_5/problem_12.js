let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

let multipleOfThreeArr = arr.map(ar => {
  return ar.filter(number => (number % 3 === 0));
});

console.log(multipleOfThreeArr);
