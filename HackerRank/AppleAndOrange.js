let apples = [2, 4, 5];
let oranges = [-4, -3, -3];

let a = 4;
let b = 12;
let s = 7;
let t = 10;
function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  let appleCount = 0;
  let orangeCount = 0;
  for (let i = 0; i < apples.length; i++) {
    if (apples[i] + a >= s && apples[i] + a <= t) appleCount++;
  }

  for (let j = 0; j < oranges.length; j++) {
    if (oranges[j] + b >= s && oranges[j] + b <= t) orangeCount++;
  }
  console.log(appleCount);
  console.log(orangeCount);
}

countApplesAndOranges(s, t, a, b, apples, oranges);
