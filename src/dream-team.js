const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arrayOfName) {
  if (arrayOfName === null || arrayOfName === undefined) {
    return false;
  } else {
    let firstLettersOfNamesArray = [];
    for (let i = 0; i < arrayOfName.length; i++) {
      if (typeof arrayOfName[i] === 'string' && arrayOfName[i] !== null) {
        let nameWithoutSpaces = arrayOfName[i].trim();
        let firstLetterOfCurrentName = nameWithoutSpaces[0].toUpperCase();
        firstLettersOfNamesArray.push(firstLetterOfCurrentName);
      }
    }
    let teamNameSort = firstLettersOfNamesArray.sort();
    console.log(teamNameSort);
    let teamName = firstLettersOfNamesArray.join('');
    return teamName;
  }
};