// let m = 4;
// let arr = [1, 4, 5, 3, 2];

// function icecreamParlor(m, arr) {
//   // Write your code here
// }

// icecreamParlor(m, arr);

// let a = "b";
// let char = a.charCodeAt(0);
// console.log(char);

let arr = [1, 2, 3, 3, 4];
function migratoryBirds(arr) {
  let obj = {};
  for (let value of arr) {
    obj[value] = (obj[value] || 0) + 1;
  }
  for (let value in obj) {
    // console.log(value, obj[value]);
    let max = obj[value];
    let maxx = Math.max();
    console.log(maxx);
  }
}

migratoryBirds(arr);
