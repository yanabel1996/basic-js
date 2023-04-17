const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  const array = arr;
  if (typeof array === 'array') throw new Error('\'arr\' parameter must be an instance of the Array!');
  if (array.includes('--discard-next')) {
    return array.splice(array[array.indexOf('--discard-next') + 1], 1);
  } else if (array.includes('--discard-prev')) {
    return array.splice(array[array.indexOf('--discard-prev') - 1], 1);
  } else if (array.includes('--double-next')) {
    const elem = array.slice(array[array.indexOf('--discard-next') + 1], -1)
    return array.splice(array[array.indexOf('--discard-next') + 1], 0, elem);
  } else if (array.includes('--double-prev')) {
    const elem = array.slice(array[array.indexOf('--discard-prev') - 1], -1)
    return array.splice(array[array.indexOf('--discard-prev') - 1], 0, elem);
  }
}

module.exports = {
  transform
};
