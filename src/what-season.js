const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (Object.prototype.toString.call(date) === '[object Date]') {
    let monthNumber = date.getMonth();
    if ((monthNumber >= 0 && monthNumber <= 1) || monthNumber === 11) {
      return 'winter';
    } else if (monthNumber >= 2 && monthNumber <= 4) {
      return 'spring';
    } else if (monthNumber >= 5 && monthNumber <= 7) {
      return 'summer';
    } else if (monthNumber >= 8 && monthNumber <= 10) {
      return 'fall';
    } else {
      throw new Error('Error!');
    }
  } else if (date === NaN || date === null || date === undefined) {
    return 'Unable to determine the time of year!';
  } else {
    throw new Error('Error!');
  }
};
