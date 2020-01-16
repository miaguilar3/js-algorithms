/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  const leftMaxs = [height[0]];
  for(let i = 1; i < height.length; i++){
    leftMaxs[i] = Math.max(height[i], leftMaxs[i-1])
  }
  const rightMaxs = [];
  rightMaxs[height.length - 1] = height[height.length - 1];
  for(let i = height.length - 2; i >= 0; i--){
    rightMaxs[i] = Math.max(height[i], rightMaxs[i + 1]);
  }
  
  let sum = 0;
  for(let i = 0; i < height.length; i++){
    sum += Math.min(leftMaxs[i], rightMaxs[i]) - height[i]
  }
  return sum;
};