const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let intermediateArray = [];
  let resultArray = [];
  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '--discard-next' && i + 1 < arr.length) {
        intermediateArray.push(arr[i]);
        i++;
      } else if (arr[i] === '--double-next' && i + 1 < arr.length) {
        intermediateArray.push(arr[i + 1]);
      } else {
        intermediateArray.push(arr[i]);
      }
    }

    for (let i = 0; i < intermediateArray.length; i++) {
      if (intermediateArray[i] === '--discard-prev' && i > 0) {
        resultArray.splice(resultArray.length - 1, 1);
      } else if (intermediateArray[i] === '--double-prev' && i > 0) {
        resultArray.push(intermediateArray[i - 1]);
      } else {
        resultArray.push(intermediateArray[i]);
      }
    }

    resultArray = resultArray.filter(function (number) {
      if (number !== '--discard-next' && number !== '--double-next' && number !== '--discard-prev' && number !== '--double-prev') {
        return true;
      } else {
        return false;
      }
    });

    return resultArray;
  } else {
    throw new Error("Error!");
  }
};
