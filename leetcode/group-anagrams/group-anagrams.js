/*
  Space O(NK)? K is length of longest string
*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const anagramMap = new Map(); 
  for(let s of strs){
      let sorted = s.split('').sort((a,b)=>( a==b ? 0 : a < b ? -1 : 1)).join('');
      if(anagramMap.has(sorted)){
          anagramMap.get(sorted).push(s);
      }
      else{
          anagramMap.set(sorted, [s]);
      }
  }
  
  const groups = [];
  anagramMap.forEach((value, key)=>{
      groups.push(value);
  });
  
  return groups;
};