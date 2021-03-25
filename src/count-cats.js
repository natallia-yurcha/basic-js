const CustomError = require("../extensions/custom-error");

module.exports = function countCats(array) {
  let countCats = 0;
  for (let i = 0; i < array.length; i++) {
    let currentElementOfArray = array[i];
    for (let k of currentElementOfArray) {
      if (k === '^^') {
        countCats = countCats + 1;
      }
    }
  }
  return countCats;
};
