let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

let nameArray = Object.keys(munsters);
nameArray.forEach(name => {
  let age = munsters[name].age;
  let gender = munsters[name].gender;
  console.log(`${name} is a ${age}-year-old ${gender}.`);
});
