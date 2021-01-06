function isColorValid(color) {
  return (color === "blue" || color === "green");
}

function isColorValid2(color) {
  return (['blue', 'green'].includes(color));
}

let isColorValid3 = color => (color === 'blue' || color === 'green');
