const reverseString = function (orig) {
  let reverse = '';
  for (let i = orig.length - 1; i >= 0; i--) {
    reverse += orig[i];
  }
  return reverse;
};

// Do not edit below this line
module.exports = reverseString;

