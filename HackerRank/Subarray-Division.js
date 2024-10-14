// let s = [2, 2, 1, 3, 2];
// let m = 4;
// let d = 2;

// function birthday(s, d, m) {
//   // Write your code here
//   for (let i = 0; i < s.length; i++) {
//     for (let j = 0; j < s.length; j++) {
//         if(s[i] + s[j] )
//     }
//   }
// }
// birthday(s, d, m);

let c = [0, 0, 1, 0, 1, 1, 0];

function jumpingOnClouds(c) {
  let a = 0;
  // Write your code here
  for (let i = c.length - 1; i > 0; i--) {
    let bug = [];
    let evennum = [];
    if (c[i] === 1) bug.push(i);
    console.log(bug);
  }
}
jumpingOnClouds(c);
