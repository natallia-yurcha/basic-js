const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity === "string" && !isNaN(parseFloat(sampleActivity))
    && Math.log(MODERN_ACTIVITY / sampleActivity) > 0 && sampleActivity > 0) {
    let k = 0.693 / HALF_LIFE_PERIOD;
    let t = Math.log(MODERN_ACTIVITY / sampleActivity) / k;
    return Math.ceil(t);
  } else {
    return false;
  }
};
