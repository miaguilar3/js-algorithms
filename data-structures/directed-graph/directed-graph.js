const 
  Vertex = require('./vertex'),
  Edge = require('./edge'),
  exists = require('../../util/util').exists;

class DirectedGraph{
  constructor(){
    this.vertices = new Map();
  }

  addVertex(v){
    const vertex = new Vertex(v);
    this.vertices.set(vertex.getKey(), vertex);
  }

  getVertex(v){
    return this.vertices.get(v);
  }

  addEdge(v1, v2, weight){
    const startVertex = this.vertices.get(v1);
    const endVertex = this.vertices.get(v2);
    if(!exists(startVertex, endVertex)){
      throw new Error('Vertex Not Found');
    }
    startVertex.addEdge(new Edge(startVertex, endVertex, weight));
  }

  print(){
    console.log(
      Array.from(this.vertices.values()).map(
        val => (val.toString())
      ).join('\n')
    );
  }
}

module.exports = DirectedGraph;
