/**
 * Generate all substring index combinations 
 *  ([0,0], [0,1], [0,2], [1,0], [1,1], [1,2], ...) 
 *  and call a memoized isPalindrome fn on each.
 * O(n^2) index combinations
 * Memoization ensures each combination will only be solved for once.
 * O(n^2) time and space
 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s){
  var memo = {};
  var max = 0;
  var maxStart = 0;
  var maxEnd = 0;
  for(var i = 0; i < s.length - 1; i++){
      for(var j = i + 1; j < s.length; j++){
          if(s[i] === s[j]){
              if(j - i > max && isPalindrome(s, i, j, memo)){
                  max = j - i;
                  maxStart = i;
                  maxEnd = j;
              }
          }
      }
  }
  return s.substring(maxStart, maxEnd + 1);
}

var isPalindrome = function(s, start, end, memo) {
  if(start >= end){
      return true;
  }
  else if(memo[start + '-' + end] != null){
      return memo[start + '-' + end];
  }
  else{
      var bool = s[start] === s[end] && isPalindrome(s, start + 1, end - 1, memo);
      memo[start + '-' + end] = bool;
      return bool;
  }
};
