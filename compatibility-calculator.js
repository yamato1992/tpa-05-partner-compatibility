const { candidates } = require('./data/candidates-data.js');

const EXACT_ANSWER_POINT = 2;
const NEARLY_ANSWER_POINT = 1;

const calculateAnswerAbsDiff = function(candidateValue, quizSubmission) {
  return Math.abs(parseInt(candidateValue, 10) - parseInt(quizSubmission, 10));
};

const calculateBestMatch = function(quizSubmissions) {
  let bestMatch = candidates[0];
  let maxScore = 0;

  candidates.forEach((candidate) => {
    let score = 0;
    for (let i = 2; i < quizSubmissions.length; i += 1) {
      for (let j = 0; j < quizSubmissions[i].length; j += 1) {
        const diff = calculateAnswerAbsDiff(candidate[i][j].value, quizSubmissions[i][j]);
        switch (diff) {
        case 0:
          score += EXACT_ANSWER_POINT;
          break;
        case 1:
          score += NEARLY_ANSWER_POINT;
          break;
        default:
          break;
        }
      }
    }
    if (score > maxScore) {
      bestMatch = candidate;
      maxScore = score;
    }
  });

  return bestMatch[0][0];
};

module.exports = {
  calculateBestMatch,
};
