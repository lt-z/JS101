let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

let sortedArr = arr.map(subarr => {
  if (typeof subarr[0] === 'number') {
    return subarr.slice().sort((a, b) => b - a);
  } else {
    return subarr.slice().sort().reverse();
  }
});

console.log(sortedArr);
console.log(arr);