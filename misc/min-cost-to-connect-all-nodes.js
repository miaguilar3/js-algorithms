function minCost(N, edges, newEdges){
  const parents = [];
  for(let i = 0; i < N; i++){
    parents[i] = i;
  }
  let roots = N;
  let res = 0;

  function find(u){
    if(u === parents[u]){
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
      parent[p1] = p2;
    }
  }

  for(let e of edges){
    union(e[0], e[1]);
  }

  newEdges.sort(function(a,b){
    return a[2] - b[2];
  });

  for(let ne of newEdges){
    if(find(ne[0]) !== find(ne[1])){
      res += ne[2];
      union(ne[0], ne[1]);
    }
  }

  return roots === 1 ? res : -1;
}

console.log(minCost(
  6, 
  [[1, 4], [4, 5], [2, 3]], 
  [[1, 2, 5], [1, 3, 10], [1, 6, 2], [5, 6, 5]]
));