const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const option = options;
  let mainArray = [];
  let addArray = [];
  let separationPart = '';

  if (!option.hasOwnProperty(`repeatTimes`)) {
    option.repeatTimes = 1;
  }

  if (!option.hasOwnProperty(`additionRepeatTimes`)) {
    option.additionRepeatTimes = 1;
  }

  if (!option.hasOwnProperty('separator')) {
    option.separator = '+';
  }

  if (!option.hasOwnProperty(`additionSeparator`)) {
    option.additionSeparator = '|';
  }

  if (!option.hasOwnProperty(`addition`)) {
    for (let i = 0; i < option.repeatTimes; i++) {
      mainArray.push(str);
    }
    return mainArray.join(option.separator);
  } else if (option.additionRepeatTimes === 1) {
    str = `${str}${option.addition}`;
    for (let i = 0; i < option.repeatTimes; i++) {
      mainArray.push(str);
    }
    return mainArray.join(`${option.separator}`);
  } else if (option.addition === null) {
    for (let i = 0; i < option.additionRepeatTimes; i++) {
      addArray.push(`${option.addition}`);
    }
    separationPart = addArray.join(option.additionSeparator);
    str = `${str}${separationPart}`;
    for (let i = 0; i < option.repeatTimes; i++) {
      mainArray.push(str);
    }
    return mainArray.join(`${option.separator}`);
  }
  else {
    for (let i = 0; i < option.additionRepeatTimes; i++) {
      addArray.push(option.addition);
    }
    separationPart = addArray.join(option.additionSeparator);
    str = `${str}${separationPart}`;
    for (let i = 0; i < option.repeatTimes; i++) {
      mainArray.push(str);
    }
    return mainArray.join(`${option.separator}`);
  }


}

console.log(repeater(null, { repeatTimes: 3, separator: '??? ', addition: null, additionRepeatTimes: 3, additionSeparator: '!!!' }));


module.exports = {
  repeater
};
