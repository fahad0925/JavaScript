let s = "lmnop";

function funnyString(s) {
  // Write your code here
  let charcode = s.split("").map((value) => value.charCodeAt());
  let reversed = charcode.slice().reverse();
  let firstArrayValue = [];
  let secondArrayValue = [];
  for (let i = 0; i < charcode.length - 1; i++) {
    let a = charcode[i] - charcode[i + 1];
    firstArrayValue.push(a);
  }
  for (let i = 0; i < reversed.length - 1; i++) {
    let a = reversed[i] - reversed[i + 1];
    secondArrayValue.push(a);
  }

  let negToPostiveValue = firstArrayValue.map((num) => Math.abs(num));
  let negToPostiveValuetwo = secondArrayValue.map((num) => Math.abs(num));

  //   console.log(
  //     charcode,
  //     reversed,
  //     firstArrayValue,
  //     secondArrayValue,
  //     negToPostiveValue,
  //     negToPostiveValuetwo
  //   );
  for (let i = 0; i <= negToPostiveValuetwo.length; i++) {
    if (negToPostiveValue[i] !== negToPostiveValuetwo[i]) return "Not Funny";
  }
  return "Funny";
}

console.log(funnyString(s));

// let a = [1, -1, -2];

// console.log(a.map((n) => Math.abs(n)));
