let bill = [3, 10, 2, 9];
let k = 1;
let b = 7;

function bonAppetit(bill, k, b) {
  // Write your code here
  let firstsubs = bill.splice(k, 1);
  let secondsubs = bill.reduce((a, b) => a + b);
  if (secondsubs / 2 === b) console.log("Bon Appetit");
  else console.log(b - secondsubs / 2);
  //   for (let i = 1; i <= bill.length; i++) {
  //   }
}

bonAppetit(bill, k, b);

// console.log(i, bill[k], b);
// if (i - bill[k] === b) console.log("BonAppetit");
// let subs = bill.splice(bill[k], k.length);
// else
