const 
  DirectedGraph = require('../../data-structures/directed-graph/directed-graph');

const directedGraph = new DirectedGraph();
directedGraph.addVertex('A');
directedGraph.addVertex('B');
directedGraph.addVertex('C');
directedGraph.addVertex('D');
directedGraph.addVertex('E');

directedGraph.addEdge('A', 'B', 4);
directedGraph.addEdge('A', 'C', 3);
directedGraph.addEdge('D', 'B', 7);
directedGraph.addEdge('C', 'D', 4);
directedGraph.addEdge('B', 'E', 1);

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

const startVertex = directedGraph.getVertex('A');
depthFirstSearch(startVertex, function(v){console.log(v.getKey()); return false;})
