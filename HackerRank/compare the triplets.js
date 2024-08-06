let a = [1, 3, 2];
let b = [2, 3, 1];

function compareTriplets(a, b) {
  let pointA = 0;
  let pointB = 0;
  for (let i = 0; i <= b.length; i++) {
    if (a[i] > b[i]) pointA++;
    if (a[i] < b[i]) pointB++;
  }
  return [pointA, pointB];
}

console.log(compareTriplets(a, b));
