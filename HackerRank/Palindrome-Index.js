let s = "aaab";

function palindromeIndex(s) {
  // Write your code here
  let charcode = s.split("").map((char) => char.charCodeAt());

  for (let i = 0; i < charcode.length; i++) {
    // if (charcode[i] === charcode[i + 1]) return -1;
    // else return charcode.indexOf(charcode[i] !== charcode[i + 1]);
    console.log(charcode[i] === charcode[i + 1]);
  }
  //   console.log(charcode);
}
console.log(palindromeIndex(s));
// palindromeIndex(s);
