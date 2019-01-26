const { candidates } = require('./data/candidates-data.js');

const calculateBestMatch = function(quizSubmissions) {

  let bestMatch = candidates[0];
  let maxScore = 0;
  for (let i = 0; i < candidates.length; i += 1) {
    let score = 0;
    for (let j = 2; j < quizSubmissions.length; j += 1) {
      for (let k = 0; k < quizSubmissions[j].length; k += 1) {
        if (candidates[i][j][k].value === quizSubmissions[j][k].value) {
          score += 2;
        }
        if (Math.abs(parseInt(candidates[i][j][k].value, 10) - parseInt(quizSubmissions[j][k].value, 10)) === 1) {
          score += 1;
        }
      }
    }
    if (score > maxScore) {
      bestMatch = candidates[i];
      maxScore = score;
    }
  }
  return bestMatch[0][0];
};

module.exports = {
  calculateBestMatch,
};
