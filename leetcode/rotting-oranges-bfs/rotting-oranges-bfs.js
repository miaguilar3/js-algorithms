/**
 * Idea is to do a BFS starting from 'rotten' cells.
 * We initialize a queue with initial 'rotten' cells
 * and initialize a 'depth' counter to zero.
 * We iterate through each depth level, queue any adjacent cells
 * with fresh oranges, and mark them rotten.
 * After cells at each depth level are visited the depth counter
 * is incremented. Before returning last depth level, the grid is
 * traversed to ensure no unreachable 'fresh' cells were present
 * in the grid.
 *
 * O(N) since at worst, each cell in the grid will be visited.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
  const q = [];
  
  // Add rotten cells to queue
  iterateGrid(grid, function(r,c){
      if(hasRottenOrange(r,c,grid)){
          q.push(r + '_' + c);
      }
  });

  let bHasFresh;
  if(!q.length){
      // No rotten, check fresh
      bHasFresh = false;
      iterateGrid(grid, function(r,c){
          if(hasFreshOrange(r,c,grid)){
              bHasFresh = true;
          }
      });
      // If any fresh then return -1 for impossible
      //  else return 0 minutes
      return bHasFresh ? -1 : 0;
  }
  
  // bfs
  let lastDepthLevelIterated = -1;
  while(q.length){
      let cellsInDepthLevel = q.length;
      for(let i = 0; i < cellsInDepthLevel; i++){
          let shiftedKey = q.shift();
          
          let shifted_r = parseInt(shiftedKey.split('_')[0]);
          let shifted_c = parseInt(shiftedKey.split('_')[1]);
          
          const adjacentPairs = [
              [shifted_r + 1, shifted_c],
              [shifted_r - 1, shifted_c],
              [shifted_r, shifted_c + 1],
              [shifted_r, shifted_c - 1]
          ];
          
          for(ap of adjacentPairs){
              if(hasFreshOrange(ap[0], ap[1], grid)){
                  q.push(ap[0] + '_' + ap[1]);
                  // effectively marked visited
                  grid[ap[0]][ap[1]] = 2;
              }
          }
      }
      lastDepthLevelIterated++;
  }
  
  bHasFresh = false;
  iterateGrid(grid, function(r,c){
      if(hasFreshOrange(r,c,grid)){
          bHasFresh = true;
      }
  });
  
  return bHasFresh ? -1 : lastDepthLevelIterated;
};

const iterateGrid = function(grid, callback){
  for(let r = 0; r < grid.length; r++){
      for(let c = 0; c < grid[r].length; c++){
          callback(r, c);
      }
  }
}
  
const isValidCell = function(r, c, grid){
  if(r < 0 || r >= grid.length || c < 0 || c > grid[r].length){
      return false;
  }
  return true;
}

const hasFreshOrange = function(r, c, grid){
  return isValidCell(r,c,grid) && grid[r][c] === 1;
}

const hasRottenOrange = function(r, c, grid){
  return isValidCell(r,c,grid) && grid[r][c] === 2;
}