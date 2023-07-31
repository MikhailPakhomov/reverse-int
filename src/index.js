module.exports = function reverse (n) {
    let toString = n.toString();
    let reverseNumber;
    if(toString[0] === '-'){
        toString = toString.slice(1);
    }
     reverseNumber = toString.split("").reverse().join("");
  return +reverseNumber;
}

