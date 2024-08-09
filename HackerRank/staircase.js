// staircase(5);

// function staircase(n) {
  // for (let i = n; i >= 1; i--) {
  //   let pattern = "";
  //   for (let j = 1; j <= i; j++) pattern += "#";
  //   console.log(pattern);
//   }
// }

// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

// ("    #");
// ("   ##");
// ("  ###");
// (" ####");
// ("#####");

staircase(5);

function staircase(n) {
  // Write your code here
  for (let row = 1; row <= n; row++) {
    let pattern = "";
    for (let i = n; i >= 1; i--) {
      let pattern = "";
      for (let j = 1; j <= i; j++) pattern += "#";
      console.log(pattern);
  }
}

(staircase(n));
