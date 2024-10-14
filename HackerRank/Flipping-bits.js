// let n = 9;
// let s = n.toString(2).padStart(32, 0);
// let news = "11111111111111111111111111110110";
// let zero = s.split("").map((char) => (char === "1" ? "0" : "1"));
// let wd = zero.toString();
// let answer = wd.split(",").join("");
// console.log(parseInt(answer, 2));

function flippingBits(n) {
  // Write your code here
  let s = n.toString(2).padStart(32, 0);
  let zero = s.split("").map((char) => (char === "1" ? "0" : "1"));
  let wd = zero.toString();
  let answer = wd.split(",").join("");
  return parseInt(answer, 2);
}
console.log(flippingBits(9));
