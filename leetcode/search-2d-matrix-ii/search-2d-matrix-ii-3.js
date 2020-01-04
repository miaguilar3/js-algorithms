/**
 * Starting at lower left corner, 
 *  continously compare to target to eliminate either a row or column,
 *  and move to next possible cell which is either up a row or to next column 
 *  depending on which was eliminated
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if(!matrix || !matrix.length || !matrix[0].length){
      return false;
  }
  
  let row = matrix.length - 1;
  let col = 0;
  
  while(col < matrix[0].length && row >= 0){
      if(matrix[row][col] === target){
          return true;
      }
      else if(matrix[row][col] > target){
          row--;
      }
      else{
          col++;
      }  
  }

  return false;
};