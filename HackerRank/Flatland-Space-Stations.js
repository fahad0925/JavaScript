// let c = [1, 4];
// let n = 5;

// function flatlandSpaceStations(n, c) {
//   for (let i = 0; i <= c.length; i++) {
//     if (c.length > n) return 0;
//     if (c.length === 1) return c;
//     if (c.length > 1) return Math.round((c[i] + c[i + 1]) / 2);
//   }
// }
// console.log(flatlandSpaceStations(n, c));
// // flatlandSpaceStations(n, c);
let s = [1, 2, 4, 2, 4, 1, 4, 13, 31, 3, 1, 3, 13, 1];
function reversePrint(llist) {
  // Write your code here
  let half = llist.length / 2;
  for (let i = half; i >= 0; i--) {
    let copy = llist[i];
    console.log(copy);
  }
  for (let i = llist.length - 1; i >= half; i--) {
    let copy = llist[i];
    console.log(copy);
  }
}
console.log(reversePrint(s));
