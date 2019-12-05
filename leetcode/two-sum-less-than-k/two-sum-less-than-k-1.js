/**
 * O(NLogN) solution
 * idea is to sort and then iterate through input array
 * find the difference between each value and K (the cut off sum)
 * and search input array for the max value less than this difference 
 * using a modified binary search. at each iteration we keep track
 * of the max sum, less than the cut off, found so far.
 */

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var twoSumLessThanK = function(A, K) {
  let max = -1;
  A.sort(function(a, b){ return parseInt(a) < parseInt(b) ? -1 : 1; });
  
  for(let i = 0; i < A.length; i++){
      let maxAj = K - A[i] - 1;
      let Aj = binarySearchMaxLessThanT(A, maxAj, i + 1);
      if(Aj !== null){ 
          max = Math.max(A[i] + Aj, max);
      }
  }
  
  return max;
};

// search for element less than or equal to target
var binarySearchMaxLessThanT = function(A, T, initialstart = 0){
  let start = initialstart;
  let end = A.length - 1;
  
  if(start === end){
      return A[start] < T ? A[start] : null;
  }
  
  while(start < end){
      let mid = Math.floor((end + start) / 2);
      
      if(A[mid] === T){
          return T;
      }
      else if(end - start === 1){
          if(A[end] <= T){ return A[end]; }
          else if(A[start] <= T){ return A[start]; }
          return null;
      }
      else if(A[mid] < T){
          start = mid;
      }
      else{
          end = mid;
      }
  }
  return null;
}