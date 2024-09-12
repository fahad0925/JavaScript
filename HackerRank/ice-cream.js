let m = 4;
let arr = [1, 4, 5, 3, 2];

function icecreamParlor(m, arr) {
  // Write your code here
  let d = [];
  for (let i = 0; i < arr.length; i++) {
    let one = arr[0] + arr[i] === m;
    // d.push(g);
    // d.push(one);
    console.log(one);
  }
}
icecreamParlor(m, arr);
