/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let count = 0;
  let set = new Set();
  
  for(let r = 0; r < grid.length; r++){
      for(let c = 0; c < grid[r].length; c++){
          let key = r + '_' + c;
          if(grid[r][c] === '1' && !set.has(key)){
              set.add(key);
              count++;
              bfs(key, grid, set);
          }
      }
  }
  return count;
};

var bfs = function(key, grid, set){
  const q = [key];
  while(q.length){
      let pkey = q.shift();
      let r = parseInt(pkey.split('_')[0]);
      let c = parseInt(pkey.split('_')[1]);
      
      let adjacent = [
          [r+1,c],
          [r-1,c],
          [r,c+1],
          [r,c-1]
      ];
      
      for(let a of adjacent){
          let adjkey = a[0] + '_' + a[1];
          if(
              inBounds(grid,a[0],a[1]) && 
              grid[a[0]][a[1]] === '1' && 
              !set.has(adjkey)
          ){
              set.add(adjkey);
              q.push(adjkey);
          }
      }
  }
}

var inBounds = function(grid,r,c){
  let inBound = 
      r >= 0 &&
      r < grid.length &&
      c >= 0 &&
      c < grid[r].length;
  
  return inBound;
}