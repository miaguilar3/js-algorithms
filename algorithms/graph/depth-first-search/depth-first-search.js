function depthFirstSearch(vertex, callback){
  function dfsHelper(vertex){
    visited.add(vertex);
    stop = callback(vertex);
    if(stop){ return; }

    for(let i = 0; i < vertex.edges.length; i++){
      let edge = vertex.edges[i];
      let nextVertex = edge.endVertex;
      if(!visited.has(nextVertex)){
        dfsHelper(nextVertex);
      }
    }
  }

  const visited = new Set();
  let stop = false;
  dfsHelper(vertex);
}

module.exports = depthFirstSearch;