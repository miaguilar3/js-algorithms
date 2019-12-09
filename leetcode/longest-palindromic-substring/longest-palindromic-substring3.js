/**
 *  A set is created to store index pairs of palindromic substrings.
 *  It is initialized with all index pairs [i,j] where i == j
 *   since all strings of length 1 are palindromic.
 *  Index combinations for substrings are iterated through by length
 *  Ex. Length = 1 ([0,1], [1,2], [2,3], [3,4], ...)
 * 
 *  Checking if an index combination [i,j] is a palindrome
 *  is done by checking if the characters at the indices are the same
 *  and if a [i+1, j-1] is in the set.
 *  There is an edge case where i+1 > k-1 which occurs when the 
 *  i,k substring is of length 2.
 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s){
  const set = new Set();
  let max = { start: null, end: null, length: 0 };
  for(let i = 0; i < s.length; i++){
      for(let j = 0, k = j + i; k < s.length; j++, k++){
          if(s[j] === s[k]){
              let substringKey = j + '_' + k;
              if(j === k){
                  set.add(substringKey);
              }
              else{
                  let subsubstringKey = (j+1) + '_' + (k-1);
                  if((j+1 > k-1) || set.has(subsubstringKey)){
                      set.add(substringKey);
                  }
                  else{
                      continue;
                  }
              }
          
              if((k - j) + 1 > max.length){
                  max.start = j;
                  max.end = k;
                  max.length = (k - j) + 1;
              }
          }
      }
  }
  return s.substring(max.start, max.end + 1);
}