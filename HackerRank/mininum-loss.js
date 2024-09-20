let s = ["thebwatgbwublqibgql"];

function pangrams(s) {
  // Write your code here

  let abc = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  for (let value of s) {
    if (s[value].includes(abc)) console.log("pangram");
    else console.log("non");
  }
}
pangrams(s);
