let n = 5;
let p = 4;

function pageCount(n, p) {
  // Write your code here
  let firstside = [];
  let secondside = [];
  let half = n / 2;
  if (half > p) firstside.push(p);
  if (half < p) secondside.push(p);
  let a = firstside / 2;
  let b = (n - secondside) / 2;
  //   console.log(half, firstside, secondside, a, b);
  if (a > 0) return Math.round(a);
  if (b >= 0) return Math.round(b);
}
console.log(pageCount(n, p));
// pageCount(n, p);

// let a = [4];
// console.log(a / 2);
