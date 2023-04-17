const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  array: [],
  getLength() {
    this.array.length;
    return this;
  },

  addLink(value) {
    this.array.push(`( ${value} )`);
    return this;
  },

  removeLink(position) {
    if (typeof position === 'number' && position !== 0 && this.array[position]) {
      this.array = [
        ...this.array.slice(0, position - 1),
        ...this.array.slice(position),
      ]
      return this;
    } else {
      this.array = [];
      throw new Error('You can\'t remove incorrect link!');
    }
  },
  reverseChain() {
    this.array.reverse();
    return this;
  },

  finishChain() {
    let result = this.array.join('~~');
    this.array = [];
    return result;
  }
};

// console.log(chainMaker.reverseChain());


module.exports = {
  chainMaker
};
