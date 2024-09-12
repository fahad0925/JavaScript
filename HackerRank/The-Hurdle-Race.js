let k = 4;
let height = [1, 6, 3, 5, 2];

function hurdleRace(k, height) {
  // Write your code here
  //   for (let i = 0; i < height.length; i++) {
  let max = Math.max(...height);
  if (k >= max) return 0;
  else {
    let difference = max - k;
    return difference;
  }
}

// }
// else console.log(0);
// }

console.log(hurdleRace(k, height));

// console.log(k >= height[i]);

// console.log(k >= height[i]);
