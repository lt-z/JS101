let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};
// Colors of fruits, sizes of vegetables
let titleCase = word => word[0].toUpperCase() + word.slice(1);
let newArray = [];

for (let key in obj) {
  if (obj[key].type === 'fruit') {
    newArray.push(obj[key].colors.map(word => titleCase(word)));
  } else {
    newArray.push(obj[key].size.toUpperCase());
  }
}
console.log(newArray);