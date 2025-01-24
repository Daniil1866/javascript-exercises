const sumAll = function (begin, end) {
  if (begin < 0 || end < 0) return 'ERROR';
  if (Math.floor(begin) !== begin || Math.floor(end) !== end) return 'ERROR';
  if (begin === NaN || end === NaN) return 'ERROR';
  if (begin > end) [begin, end] = [end, begin]; // swaps variables without using a temporary one

  let result = 0;
  for (let i = begin; i <= end; i++) {
    result += i;
  }
  return result;
};

// Do not edit below this line
module.exports = sumAll;
