/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let left = 0;
  let right = height.length - 1;
  let leftMax = height[left];
  let rightMax = height[right];
  let sum = 0;
  while(left < right){
    leftMax = Math.max(leftMax, height[left]);
    rightMax = Math.max(rightMax, height[right]);
    if(leftMax < rightMax){
      sum += leftMax - height[left];
      left++;
    }
    else{
      sum += rightMax - height[right];
      right--;
    }
  }
  return sum;
};