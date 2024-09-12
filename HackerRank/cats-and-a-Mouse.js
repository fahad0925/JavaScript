let x = 6;
let y = 2;
let z = 5;

// console.log((z - x) / -1);
// console.log((z - y) / 1);
// console.log((x < 0) x = x * 1)

function catAndMouse(x, y, z) {
  let cat1 = z - x;
  let cat2 = z - y;
  if (cat1 < 0) cat1 = cat1 * -1;
  if (cat2 < 0) cat2 = cat2 * -1;

  if (cat1 === cat2) return "Mouse C";
  if (cat1 > cat2) return "Cat B";
  if (cat1 < cat2) return "Cat A";

  //   ask.push(array);
}
console.log(catAndMouse(x, y, z));
