const CustomError = require("../extensions/custom-error");
module.exports = function countCats(matrix) {
  let sum = 0;
  let cat = '^^';

  for(let i = 0; i < matrix.length; i++){
      for(let j = 0; j < matrix[i].length; j++){
        if(matrix[i][j] === cat) sum += 1;
      }   
  }
  return sum;
};