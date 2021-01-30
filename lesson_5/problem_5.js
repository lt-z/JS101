let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let names = Object.keys(munsters);
let sumAges = 0;

names.forEach(item => {
  if (munsters[item].gender === 'male') {
    sumAges += munsters[item].age;
  }
});

console.log(sumAges);
// let ages = Object.keys(munsters[names]);