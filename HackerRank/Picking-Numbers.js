let a = [1, 2, 2, 3, 1, 2];

function pickingNumbers(a) {
  // Write your code here
  let equal = [];
  let notequal = [];
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length; j++) {
      if (a[i] - a[j] === 1) console.log(a[i], a[j]);
    }
  }
  //   console.log(notequal);
}
pickingNumbers(a);
