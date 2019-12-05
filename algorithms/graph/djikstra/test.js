const 
  DirectedGraph = require('../../../data-structures/directed-graph/directed-graph'),
  djikstra = require('./djikstra');

const directedGraph = new DirectedGraph();
directedGraph.addVertex('A');
directedGraph.addVertex('B');
directedGraph.addVertex('C');
directedGraph.addVertex('D');
directedGraph.addVertex('E');
directedGraph.addVertex('F');
directedGraph.addVertex('S');

directedGraph.addEdge('S', 'A', 3);
directedGraph.addEdge('S', 'C', 2);
directedGraph.addEdge('S', 'F', 6);
directedGraph.addEdge('C', 'A', 2);
directedGraph.addEdge('A', 'B', 6);
directedGraph.addEdge('A', 'D', 1);
directedGraph.addEdge('C', 'D', 3);
directedGraph.addEdge('B', 'E', 1);
directedGraph.addEdge('D', 'E', 4);
directedGraph.addEdge('F', 'E', 2);

const startVertex = directedGraph.getVertex('S');
// { vertex: shortestPathWeight }
const paths = djikstra(startVertex, directedGraph);
console.log(paths);
debugger;