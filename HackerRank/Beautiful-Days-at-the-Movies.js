// // let i = 20;
// // let j = 23;

// // function beautifulDays(i, j, k) {
// //   // Write your code here
// //   let answer = 0;
// //   for (let a = i; a <= j; a++) {
// //     if ((a * a) / k !== 0) answer++;
// //   }
// //   console.log(answer);
// // }
// // beautifulDays(i, j);
// let m = 5;
// let arr = [2, 3, 1, 4, 3];

// function icecreamParlor(m, arr) {
//   // Write your code here
//   for (let i = 0; i <= arr.length; i++) {
//     if (i + i === m) console.log(m);
//   }
// }
// icecreamParlor(m, arr);

// let s = "12:00:01PM";

// console.log(s.includes("AM"));

// // s = s.replace("PM", "");
// // console.log(s.split(":"));

// let s = "12:23:00AM";

// function timeConversion(s) {
//   // Write your code heres
//   let time = s.split(":");

//   // if (time.includes("AM")) console.log(time[1] - 12);
//   // if (s.includes("PM")) console.log(s);
//   console.log(time);
// }
// timeConversion(s);
let h = [1, 3, 1, 2, 3, 3, 1, 4, 1, 3, 4, 2, 3, 2, 3, 2, 2, 2, 2, 2, 4, 2, 2];
let word = "abc";

function designerPdfViewer(h, word) {
  // for (let i = 0; i < h.length; i++) {
  // let a = h[i];
  let a = (word[0] = h[0]);

  let b = (word[1] = h[1]);
  let c = (word[2] = h[2]);
  let d = Math.max(a, b, c);
  let e = d * 3;
  return e;
  // }
  // Write your code here
}
console.log(designerPdfViewer(h, word));
