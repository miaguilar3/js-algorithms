/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
var criticalConnections = function(n, connections) {
  const conMap = createConMap(n, connections);
  const conSet = createConnectionSet(connections);
  const critical = getCritical(conMap, conSet);
  return critical;
};

var createConnectionSet = function(connections){
  const conSet = new Set();
  for(let con of connections){
    conSet.add(con[0] + '_' + con[1]);
  }
  return conSet;
}

var createConMap = function(n, connections){
  var conMap = new Map();
  for(let i = 0; i < n; i++){
    conMap.set(i, []);
  }
  for(let con of connections){
    conMap.get(con[0]).push(con[1]);
    conMap.get(con[1]).push(con[0]);
  }
  return conMap;
}

var getCritical = function(conMap, conSet){
  const rankMap = new Map();
  
  var getMinRank = function(n, parent, rank){
    if(rankMap.has(n)){
      return rankMap.get(n);
    }
    rankMap.set(n, rank);
    let minRankAll = conMap.size;
    for(let adj of conMap.get(n)){
      if(adj == parent){ continue; }
      const minRankAdj = getMinRank(adj, n, rank + 1);
      if(minRankAdj <= rank){
        conSet.delete(adj + '_' + n);
        conSet.delete(n + '_' + adj);
      }
      minRankAll = Math.min(minRankAll, minRankAdj);
    }
    return minRankAll;
  }
        
  getMinRank(0, null, 0);
  return Array.from(conSet).map(function(key){
    const split = key.split('_');
    return [split[0], split[1]];
  });
}