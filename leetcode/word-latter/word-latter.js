/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  wordList.push(beginWord);
  const oneOffMap = getOneOffMap(wordList);
  return bfsEndWord(beginWord, endWord, oneOffMap);
};

var bfsEndWord = function(beginWord, endWord, oneOffMap){
  const visited = new Set();
  const q = [beginWord];
  visited.add(beginWord);
  let level = 0;
  while(q.length !== 0){
      let levelSize = q.length;
      level++
      for(let i = 0; i < levelSize; i++){
          let pword = q.shift();
          if(pword === endWord){
              return level;
          }
          for(let adj of oneOffMap.get(pword) || []){
              if(!visited.has(adj)){
                  visited.add(adj);
                  q.push(adj);
              }
          }
      }
  }
  return 0;
}

// [cat, cut, hat ]
// cat => cut

var getOneOffMap = function(wordList){
  const oneOffMap = new Map();
  for(let i = 0; i < wordList.length; i++){
      for(let j = i + 1; j < wordList.length; j++){
          const w1 = wordList[i];
          const w2 = wordList[j];
          if(oneOff(w1, w2)){
              const w1Adj = oneOffMap.get(w1) || [];
              const w2Adj = oneOffMap.get(w2) || [];
              w1Adj.push(w2);
              w2Adj.push(w1);
              oneOffMap.set(w1, w1Adj);
              oneOffMap.set(w2, w2Adj);
          }
      }
  }
  return oneOffMap;
}

var oneOff = function(w1, w2){
  w1 = w1.split('');
  w2 = w2.split('');
  let difs = 0;
  for(let i = 0; i < w1.length; i++){
      if(w1[i] !== w2[i]){
          difs++;
          if(difs > 1){
              return false;
          }
      }
  }
  return difs === 1 ? true : false;
}