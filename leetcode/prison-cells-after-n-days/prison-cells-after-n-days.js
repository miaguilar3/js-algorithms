/**
 * @param {number[]} cells
 * @param {number} N
 * @return {number[]}
 */
var prisonAfterNDays = function(cells, N) {
  let seenMap = new Map();
  for(let i = 0; i < N; i++){
    if(seenMap.has(cells.join(''))){
      let cycleStart = seenMap.get(cells.join(''));
      let daysInCycle = i - cycleStart;
      let daysLeft = (N - i) % daysInCycle;
      return prisonAfterNDays(cells, daysLeft);
    }
    seenMap.set(cells.join(''), i);
    cells = nextState(cells);
  }
  return cells;
};

var nextState = function(cells){
  let next = [];
  for(let j = 0; j < cells.length; j++){
    if(j === 0 || j === cells.length - 1){
      next[j] = 0;
    }
    else{
      next[j] = cells[j-1] === cells[j+1] ? 1 : 0;
    }
  }
  return next;
}