const exists = require('../../util/util').exists;

class Edge{
  constructor(startVertex, endVertex, weight){
    if(!exists(startVertex, endVertex, weight)){
      throw new Error('Invalid Edge');
    }

    this.startVertex = startVertex;
    this.endVertex = endVertex;
    this.weight = weight;
  }

  toString(){
    return `${this.startVertex.value}_(${this.weight})_${this.endVertex.value}`;
  }
}

module.exports = Edge;