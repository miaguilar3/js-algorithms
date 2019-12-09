/**
 * O(n^2) time
 * O(1) space 
 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let max = { start: null, end: null, length: 0 };
  for(let i = 0; i < s.length; i++){
      let expandIndices = [
          [i-1, i+1],
          [i, i+1]
      ];
      for(let ind of expandIndices){
          let res = expand(s, ind[0], ind[1]);
          if(res.length > max.length){
              max.start = res.li;
              max.end = res.ri;
              max.length = res.length;
          }
      }
  }

  return s.substring(max.start, max.end + 1);
};

var expand = function(s, li, ri){
  while(li >= 0 && ri < s.length && s[li] === s[ri]){
      li--;
      ri++;
  }
  li++;
  ri--;
  return { length: (ri - li + 1), li, ri };
};