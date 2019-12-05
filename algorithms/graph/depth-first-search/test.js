const 
  DirectedGraph = require('../../../data-structures/directed-graph/directed-graph'),
  depthFirstSearch = require('./depth-first-search');

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

const startVertex = directedGraph.getVertex('A');
depthFirstSearch(startVertex, function(v){console.log(v.getKey()); return false;})
