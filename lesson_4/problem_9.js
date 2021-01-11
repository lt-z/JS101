let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let sumAges = Object.values(ages);
console.log(sumAges.reduce((accumulator, age) => {
  return accumulator + age;
}, 0));

let sumOfAges = 0;
console.log(sumAges.forEach(age => {
  sumOfAges += age;
}));
console.log(sumOfAges);
