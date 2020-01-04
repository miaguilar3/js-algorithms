/**
 * Recursively search the matrix's two possible quadrants
 * containing the target.
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
  
  return searchSubMatrices( matrix, target,
      {r: 0, c: 0},            {r:0, c: numCols - 1}, 
      {r: numRows - 1, c: 0},  {r: numRows - 1, c: numCols - 1}
  );
};

var searchSubMatrices = function(matrix, target, tl, tr, bl, br){
  if(tl.r > bl.r || tl.c > tr.c){
      return false;
  }
  if(target < matrix[tl.r][tl.c]){
      return false;
  }
  if(target > matrix[br.r][br.c]){
      return false;
  }
  
  let colmid = Math.floor((tl.c + tr.c) / 2);
  let row = tr.r;

  while(matrix[row][colmid] <= target && row < br.r){
      if(matrix[row][colmid] === target){
          return true;
      }
      row++;
  }
  
  if(matrix[row][colmid] === target){
      return true;
  }

  return(
      searchSubMatrices(matrix, target,
          {r: row,  c: tl.c}, {r: row, c: colmid - 1 },
          {r: bl.r, c: bl.c}, {r: br.r , c: colmid - 1 }
      ) 
      || 
      searchSubMatrices(matrix, target,
          {r: tl.r, c: colmid + 1}, {r: tr.r, c: tr.c},
          {r: row, c: colmid + 1}, {r: row , c: br.c}
      )
  );
}