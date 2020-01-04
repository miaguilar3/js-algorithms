/**
 * Binary search along the longer dimension 
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if(!matrix.length || !matrix[0].length){
      return false;
  }
  
  const m = matrix.length;
  const n = matrix[0].length;
  
  if(m > n){
      for(let c = 0; c < n; c++){
          let start = 0;
          let end = m-1;
          while(start <= end){
              let mid = Math.floor((start + end)/2);
              if(target === matrix[mid][c]){
                  return true;
              }
              if(target < matrix[mid][c]){
                  end = mid - 1;
              }
              else{
                  start = mid + 1;
              }
          }  
      }
      return false;
  }
  else{
      for(let r = 0; r < m; r++){
          let start = 0;
          let end = n-1;
          while(start <= end){
              let mid = Math.floor((start + end)/2);
              if(target === matrix[r][mid]){
                  return true;
              }
              if(target < matrix[r][mid]){
                  end = mid - 1;
              }
              else{
                  start = mid + 1;
              }
          }  
      }
      return false;
  }
};