const exists = require('../../util/util').exists;

class Vertex{
  constructor(value, edges = []){
    if(!exists(value)){
      throw new Error('Invalid Vertex');
    }

    this.value = value;
    this.edges = edges;
  }

  addEdge(edge){
    this.edges.push(edge);
  }


  getKey(){
    return`${this.value}`
  }


  toString(){
    return `${this.value}: [ ` +
      `${this.edges.map(edge => (edge.toString())).join(', ')} ]`;
  }
}

module.exports = Vertex;