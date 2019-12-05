function djikstra(startVertex, directedGraph){
  let vertexArr = directedGraph.verticesArray();

  for(let v of vertexArr){
    v.pathWeight = Infinity;
  }

  startVertex.pathWeight = 0;
  while(vertexArr.length){
    let currV = extractMinPathVertex(vertexArr);
    vertexArr = vertexArr.filter(v=>(v !== currV));
    currV.edges.forEach((e)=>{
      if( currV.pathWeight + e.weight < e.endVertex.pathWeight){
        e.endVertex.pathWeight = currV.pathWeight + e.weight;
      }
    });
  }

  vertexArr = directedGraph.verticesArray();
  var pathWeightMap = new Map();
  for(let v of vertexArr){
    pathWeightMap.set(v.getKey(), v.pathWeight);
    // Cleanup
    delete v.pathWeight;
  }

  return pathWeightMap;
}

function extractMinPathVertex(vertexArr){
  let minV = vertexArr[0];
  for(let v of vertexArr){
    if(v.pathWeight < minV.pathWeight){
      minV = v;
    }
  }
  return minV;
}

module.exports = djikstra;