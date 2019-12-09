/**
 * O(n^2) time and space dynamic programming
 * 
 * Creates 2D array with
 *  number of rows = number of columns = size of the input string
 * 
 * Cell [i,j] will contain the length of the substring
 *  starting at i and ending at j, if that substring is palindromic.
 * 
 * 2D array is initialized with every [i,j] where i == j being set to 1,
 *  since every string of length 1 is palindromic.
 * 
 * Index combinations for substrings are iterated through by length
 * Ex. Length = 1 ([0,1], [1,2], [2,3], [3,4], ...)
 * 
 * The 2D array is populated in a bottom up fashion.
 * Checking if an index combination [i,j] is a palindrome
 *  is done by checking if the characters at the indices are the same
 *  and if a [i+1, j-1] is also a palindrome.
 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  var arr = new Array(s.length);
  for(var i = 0; i < s.length; i++){
      arr[i] = new Array(s.length);
  }

  var max = { len: 1, j: 0, k: 0 };
  for(var i = 0; i < s.length; i++){
      for(var j = 0, k = i; k < s.length; j++, k++){
          if(j === k){
              arr[j][k] = 1;
          }
          else if(s[j] === s[k]){
              if(j + 1 <= k - 1){
                  arr[j][k] = arr[j + 1][k - 1] ? arr[j + 1][k - 1] + 2 : 0;
              }
              else{
                  arr[j][k] = 2;
              }
              
              if(arr[j][k] > max.len){
                  max = {len: arr[j][k], j: j, k: k};
              }
          }
          else{
              arr[j][k] = 0;
          }
      }
  }

  return s.substring(max.j, max.k + 1);
};




