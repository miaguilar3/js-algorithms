/**
 * @param {number} N
 * @param {number[][]} connections
 * @return {number}
 */
var minimumCost = function(N, connections) {
  const parents  = [];
  let parentsCount = N;
  let costTotal = 0;
  
  // each node/city is initialized to be a parent of itself
  for(let i = 0; i < N; i++){ parents[i] = i; }
  
  function find(u){
    if(parents[u] === u){
      return u;
    }
    else{
      parents[u] = find(parents[u]);
      return parents[u];
    }
  }
  
  function union(u, v){
    const p1 = find(u);
    const p2 = find(v);
    if(p1 !== p2){
      parents[p2] = p1;
    }
  }
  
  connections.sort(function(a,b){
    return a[2] - b[2];
  });
  
  for(let c of connections){
    let u = c[0];
    let v = c[1];
    let cost = c[2];
    if(find(u) !== find(v)){
      union(u,v);
      costTotal += cost;
      parentsCount--;
    }
  }
  
  return parentsCount === 1 ? costTotal : -1;
};