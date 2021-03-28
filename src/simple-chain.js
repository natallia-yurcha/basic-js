const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chainArray: [],
  getLength() {
    return this.chainArray.length;
  },
  addLink(value) {
    this.chainArray.push('( ' + value + ' )');
    return this;
  },
  removeLink(position) {
    if (position > 0 && position <= this.chainArray.length && Number.isInteger(position)) {
      this.chainArray[position - 1] = 'toDelete';
      this.chainArray = this.chainArray.filter(function (number) {
        if (number === 'toDelete') {
          return false;
        }
        else {
          return true;
        }
      });
      return this;
    } else {
      this.chainArray = [];
      throw new Error("---Error!---");
    }
  },
  reverseChain() {
    this.chainArray = this.chainArray.reverse();
    return this;
  },
  finishChain() {
    let result = this.chainArray.join('~~');
    this.chainArray = [];
    return result;
  }
};

module.exports = chainMaker;
