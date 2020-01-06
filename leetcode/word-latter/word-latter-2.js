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

// iterate word list
// iterate through word (split)
// change a char to asterick
// and insert into map
// will create asterick map

// use asterick map to create oneOffMap

var getOneOffMap = function(wordList){
  const astMap = new Map();
  for(let w of wordList){
      let wsplit = w.split('');
      for(let i = 0; i < wsplit.length; i++){
          let origchar = wsplit[i];
          wsplit[i] = '*';
          let astword = wsplit.join('');
          if(astMap.has(astword)){
              let astArr = astMap.get(astword);
              astArr.push(w);
              astMap.set(astword, astArr);
          }
          else{
              astMap.set(astword, [w]);
          }
          wsplit[i] = origchar;
      }
  }

  const oneOffMap = new Map();
  for(let w of wordList){
      let wsplit = w.split('');
      let oneOff = [];
      for(let i = 0; i < wsplit.length; i++){
          let origchar = wsplit[i];
          wsplit[i] = '*';
          let astword = wsplit.join('');
          Array.prototype.push.apply(oneOff, (astMap.get(astword)));
          wsplit[i] = origchar;
      }
      oneOffMap.set(w, oneOff);
  }
  return oneOffMap;
}