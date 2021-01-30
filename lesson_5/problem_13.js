let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

let sortedArr = arr.sort((a, b) => {
  a = a.reduce((acc, num) => (num % 2 !== 0 ? acc + num : acc), 0);
  b = b.reduce((acc, num) => (num % 2 !== 0 ? acc + num : acc), 0);
  return a - b;
});

console.log(sortedArr);