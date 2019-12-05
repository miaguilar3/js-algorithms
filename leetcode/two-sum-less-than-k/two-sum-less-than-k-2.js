/**
 * Simpler O(NLogN) solution
 * Maintain two pointers starting at beginning and end of sorted array
 * If the sum is less than K (cut off sum), compare against current max,
 * and increment start pointer (increases the sum);
 * Else the sum is greater than or equal to the cut off, 
 * so decrement end pointer (decreases sum).
 */

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var twoSumLessThanK = function(A, K) {
  A.sort(function(a, b){ return parseInt(a) < parseInt(b) ? -1 : 1; });
  let max = -1;
  let start = 0;
  let end = A.length - 1;
  
  while(start < end){
      if(A[start] + A[end] < K){
          max = Math.max(max, A[start] + A[end]);
          start += 1;
      }
      else{
          end -=1;
      }
  }
  
  return max;
};