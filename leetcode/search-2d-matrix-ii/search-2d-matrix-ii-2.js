/**
 * Iterate diagnol cells, perform binary search along 
 *  rows and columns starting from the diagnol cell
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
  
  const numRows = matrix.length;
  const numCols = matrix[0].length;
  const minDim = Math.min(numRows, numCols);

  for(let rc = 0; rc < minDim; rc++){
      if(binarySearchRow(matrix, target, rc, rc, matrix[0].length - 1)){
          return true;
      }
      if(binarySearchCol(matrix, target, rc, rc, matrix.length - 1)){
          return true;
      }
  }
  return false;
};

var binarySearchRow = function(matrix, target, row, start, end){
  
  while(start <= end){
      let mid = Math.floor((start + end)/2);
      if(matrix[row][mid] === target){
          return true;
      }
      else if(matrix[row][mid] > target){
          end = mid - 1;
      }
      else{
          start = mid + 1;
      }
  }
  return false;
}

var binarySearchCol = function(matrix, target, col, start, end){
  while(start <= end){
      let mid = Math.floor((start + 1 + end)/2);
      if(matrix[mid][col] === target){
          return true;
      }
      else if(matrix[mid][col] > target){
          end = mid - 1;
      }
      else{
          start = mid + 1;
      }
  }
  return false;
}