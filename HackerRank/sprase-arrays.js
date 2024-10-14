let a = ["abc", "ab", "abc"];
let b = ["ab", "ab", "abcc"];

function matchingStrings(stringList, queries) {
  // Write your code here
  let op = [];
  for (let i = 0; i < stringList.length; i++) {
    // for (let j = 0; j < stringList.length; j++) {}
    let a = stringList.includes(queries[i]);
    op.push(a);
  }
  console.log(op);
}
matchingStrings(a, b);

// let a = "a";
// console.log(a.charCodeAt());

// let spli = stringList
//   .toString()
//   .split("")
//   .map((char) => char.charCodeAt());
// let spli1 = queries
//   .toString()
//   .split("")
//   .map((char) => char.charCodeAt());
