const
  DirectedGraph = require('./directed-graph');

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

directedGraph.print();