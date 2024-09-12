let a = [1, 2, 5, 4];
let k = 2;
let index = [2, 1];

function circularArrayRotation(a, k, queries) {
  //   // Write your code here
  let array2 = [];
  let c = a;
  for (let i = 0; i < k; i++) {
    let array = a.splice(-1)[0];
    let d = a.splice(0, 0, array);
    //    c;
  }
  for (let j = 0; j < queries.length; j++) {
    let indexs = c[queries[j]];
    array2.push(indexs);
  }
  return array2;
}

console.log(circularArrayRotation(a, k, index));

// let array2 = d.splice(-1)[0];
// let f = d;
// let s = f.splice(0, 0, array);

//   for (let j = 0; j < queries.length; j++) {
//     let index = d.at(j[0]);
//     console.log(index);
//   }

// let k = 10;

// function helloworld(k) {
//   for (i = 1; i <= k; i++) {
//     console.log("helloworld");
//   }
// }
// helloworld(k);
