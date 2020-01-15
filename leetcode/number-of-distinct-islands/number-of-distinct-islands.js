/**
 * @param {number[][]} grid
 * @return {number}
 */
var numDistinctIslands = function(grid) {
  const visited = new Set();
  const distinctIslands = new Set();
  for(let r = 0; r < grid.length; r++){
    for(let c = 0; c < grid[0].length; c++){
      const rckey = r + '_' + c;
      if(grid[r][c] === 1 && !visited.has(rckey)){
        visited.add(rckey);
        const q = [[r,c]];
        const cells = [];
        while(q.length){
          const shifted = q.shift();
          const sr = shifted[0];
          const sc = shifted[1];
          cells.push((sr-r) + '_' + (sc-c));
          addAdj(sr,sc, grid, visited, q);
        }
        distinctIslands.add(cells.join('*'));
      }
    }
  }
  
  return distinctIslands.size;
};
  
var addAdj = function(r,c, grid, visited, q){
  const adj = [[0,1],[0,-1],[1,0],[-1,0]];
  for(let a of adj){
    const srd = r + a[0];
    const scd = c + a[1];
    const key = srd + '_' + scd;
    if(
      srd >= 0 && srd < grid.length && 
      scd >=0 && scd < grid[srd].length &&
      !visited.has(key) &&
      grid[srd][scd] === 1
    ){
      visited.add(key);
      q.push([srd, scd]); 
    }
  }
}