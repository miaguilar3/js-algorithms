/**
 * Remove one connection at a time and execute a dfs to
 * check if all servers can be reached. Non-optimal.
 */

/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
var criticalConnections = function(n, connections) {
  const critical = [];
  for(let i = 0; i < n; i++){
    const conMap = getConMap(n, connections, i);
    const visited = traverseNetwork(conMap);
    if(visited.size !== n){
      critical.push(connections[i]);
    }
  }
  
  return critical;
};

var traverseNetwork = function(conMap){
  const visited = new Set();
  const dfs = function(server){
    for(let s of conMap.get(server)){
      if(!visited.has(s)){
        visited.add(s);
        dfs(s);
      }
    }
  }
  visited.add(0);
  dfs(0);
  return visited;
}

var getConMap = function(n, connections, exclude){
  const conMap = new Map();
  for( let i = 0; i < n; i++){
    conMap.set(i, []);
  }
  for( let i = 0; i < connections.length; i++){
    if(i === exclude){ continue; }
    conMap.get(connections[i][0]).push(connections[i][1]);
    conMap.get(connections[i][1]).push(connections[i][0]);
  }
  
  return conMap;
}