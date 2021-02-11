//Pair Programming assignment Mitchell Gonzalez Riley Fournier
const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map((ls) => ls.join(""));
  const lettersTranspose = transpose(letters);
  const verticalJoin = lettersTranspose.map((ls) => ls.join(""));
  let wordCheck = false;
  wordCheck = searchForWord(horizontalJoin, word);
  if (wordCheck === false) {
    wordCheck = searchForWord(verticalJoin, word);
  }
  return wordCheck;
};

const searchForWord = (letters, word) => {
  for (l of letters) {
    if (l.includes(word)) return true;
  }
  return false;
};

const transpose = function (matrix) {
  const finalArr = [];
  for (let j = 0; j < matrix[0].length; j++) {
    let val = [];
    for (let a = 0; a < matrix.length; a++) {
      val.push(matrix[a][j]);
    }
    finalArr.push(val);
  }
  return finalArr;
};

// const result = wordSearch(
//   [
//     ["A", "W", "F", "Q", "A", "F", "K", "L"],
//     ["S", "E", "R", "N", "F", "E", "L", "D"],
//     ["Y", "F", "A", "F", "Q", "U", "A", "L"],
//     ["H", "M", "N", "T", "E", "V", "R", "G"],
//     ["W", "H", "K", "S", "Y", "E", "R", "L"],
//     ["B", "F", "R", "E", "N", "E", "Y", "B"],
//     ["U", "B", "T", "W", "A", "P", "A", "I"],
//     ["O", "D", "C", "A", "K", "U", "A", "S"],
//     ["E", "Z", "K", "F", "Q", "U", "A", "L"],
//   ],
//   "FRANK"
// );

// const result2 = wordSearch(
//   [
//     ["A", "W", "C", "F", "Q", "U", "A", "L"],
//     ["S", "E", "I", "N", "F", "E", "L", "D"],
//     ["Y", "F", "C", "F", "Q", "U", "A", "L"],
//     ["H", "M", "J", "T", "E", "V", "R", "G"],
//     ["W", "H", "C", "S", "Y", "E", "R", "L"],
//     ["B", "F", "R", "E", "N", "E", "Y", "B"],
//     ["U", "B", "T", "W", "A", "P", "A", "I"],
//     ["O", "D", "C", "A", "K", "U", "A", "S"],
//     ["E", "Z", "K", "F", "Q", "U", "A", "L"],
//   ],
//   "SEINFELD"
// );

// console.log(result);
// console.log(result2);

module.exports = wordSearch;
