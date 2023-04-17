const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arrayOfNumber = [];
  let array = Array.from(n.toString(), Number);
  for (let i = 0; i < array.length; i++) {
    array.splice(i, 1);
    arrayOfNumber.push(Number(array.join('')));
    array = Array.from(n.toString(), Number);
  }
  arrayOfNumber.sort((a, b) => a - b);
  return arrayOfNumber[arrayOfNumber.length - 1];
}



module.exports = {
  deleteDigit
};
