/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
  const words = 
      paragraph.split(/[ !?',;.]/)
      .map(w=>(w.toLowerCase()))
      .filter(w=>(w.length));
  
  const countmap = new Map();
  const bannedset = new Set(banned);
  
  for(w of words){
      countmap.set(w, (countmap.get(w) || 0) + 1);
  }
  
  let mostcommon;
  let mostcommoncount = 0;
  countmap.forEach(function(value, key){
      if(!bannedset.has(key)){
          if(value > mostcommoncount){
              mostcommon = key;
              mostcommoncount = value;
          }
      }
  });
  
  return mostcommon;
};