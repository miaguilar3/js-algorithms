/*
powerSet(new Set(1, 2, 3)) => {{1, 2, 3}, {1, 2}, {2, 3}, {1, 3}, {1}, {2}, {3}, {}}
power set included 1,2,3 and 3,2,1
*/

var powerSet = function(set){
  let powerSet = [[]];
  for(let i of set){
    const powerSetClone = powerSet.map(function(s){
      return Array.from(s);
    });
    
    for(let setClone of powerSetClone){
      setClone.push(i);
    }
    powerSet = powerSet.concat(powerSetClone);
  }
  
  return powerSet;
}

// n elements
// 0000
// 0001
// 0010
// 0011
// ...
// 1111


// Run time = space complexity = O(2^n)


var powerSet2 = function(set){
  if(set.size === 0){
    return [[]];
  }
  if(set.size === 1){
    return [Array.from(set), []];
  }
  
  const s = Array.from(set).pop();
  const result = [];
  set.delete(s);
  const subperms = powerSet2(set);
  for(let sp of subperms){
    result.push(sp);
    result.push(sp.concat(s));
  }

  return result;
}

// powerset of (1) = [[], [1]]
/* 
powerset of (1,2) = [
  [],
  [1],
  [2],
  [1, 2]  
]
*/


console.log(powerSet2(new Set([1, 2, 3, 4])));