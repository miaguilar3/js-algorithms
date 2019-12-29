/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  // O(1) time check if in dict
  // trie could be more space efficient though
  var wordSet = new Set(wordDict);
  // Map from str => word break ans 
  //(str can be broken into words from dict)
  var wordBreakMap = new Map();
  return wordBreakHelper(s, wordSet, wordBreakMap);
};

var wordBreakHelper = function(s, wordSet, wordBreakMap){
  if(wordBreakMap.has(s)){ return wordBreakMap.get(s); }
  if(s === ''){ return true; }
  for(let i = s.length; i >= 0; i--){
    if(wordSet.has(s.substring(0, i))){
      const subWordBreakRes = wordBreakHelper(s.substring(i), wordSet, wordBreakMap);
      if(subWordBreakRes){
        wordBreakMap.set(s, true);
        return true;
      }
    }  
  }
  wordBreakMap.set(s, false);
  return false;
}
