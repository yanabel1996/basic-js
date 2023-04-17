const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  ABC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  constructor(type = true) {
    this.type = type;
  }

  encrypt(string, key) {
    const arrayOfString = [];
    const arrayOfKey = [];
    let lengthOfString = 0;
    let count = 0;
    if (string === undefined || key === undefined) throw new Error('Incorrect arguments!');

    for (let elem of string) {
      const element = elem.toUpperCase();
      if (this.ABC.includes(element)) {
        count++;
      }
      arrayOfString.push(element);
    }

    lengthOfString = Math.max(count, key.length);

    for (let i = 0; key.length < lengthOfString; i++) {
      key = key + key[i];
    }

    for (let elem of key) {
      const element = elem.toUpperCase();
      const index = this.ABC.indexOf(element);
      arrayOfKey.push(index);
    }

    let keyIndex = 0;

    for (let i = 0; i < arrayOfString.length; i++) {
      if (this.ABC.includes(arrayOfString[i])) {
        const index = this.ABC.indexOf(arrayOfString[i]);
        let sum = index + arrayOfKey[keyIndex];

        if (sum < 0) {
         sum = this.ABC.length + Math.abs(sum);
        }

        if (sum >= this.ABC.length) {
         sum = sum - this.ABC.length;
        }

        arrayOfString[i] = this.ABC.slice(sum, sum + 1);
        keyIndex++;
      }
    }

    let answer = arrayOfString.join('');
    let reverseAnswer = arrayOfString.reverse().join('');
    return this.type ? answer : reverseAnswer;
  }
  decrypt(string, key) {
    const arrayOfString = [];
    const arrayOfKey = [];
    let lengthOfString = 0;
    let count = 0;

    if (string === undefined || key === undefined) throw new Error('Incorrect arguments!');

    for (let elem of string) {
      const element = elem.toUpperCase();
      if (this.ABC.includes(element)) {
        count++;
      }
      arrayOfString.push(element);
    }

    lengthOfString = Math.max(count, key.length);

    for (let i = 0; key.length < lengthOfString; i++) {
      key = key + key[i];
    }

    for (let elem of key) {
      const element = elem.toUpperCase();
      const index = this.ABC.indexOf(element);
      arrayOfKey.push(index);
    }

    let keyIndex = 0;

    for (let i = 0; i < arrayOfString.length; i++) {
      if (this.ABC.includes(arrayOfString[i])) {
        const index = this.ABC.indexOf(arrayOfString[i]);
        let sum = index - arrayOfKey[keyIndex];

        if (sum < 0) {
          sum = this.ABC.length - Math.abs(sum);
        }

        if (index >= this.ABC.length) {
          sum = sum - this.ABC.length;
        }

        arrayOfString[i] = this.ABC.slice(sum, sum + 1);
        keyIndex++;
      }
    }

    let answer = arrayOfString.join('');
    let reverseAnswer = arrayOfString.reverse().join('');
    return this.type ? answer : reverseAnswer;
  }
}

const directMachine = new VigenereCipheringMachine();

console.log(directMachine.encrypt('Same length key', 'Samelengthkey'));


module.exports = {
  VigenereCipheringMachine
};
