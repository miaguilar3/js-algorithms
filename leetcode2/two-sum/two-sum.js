/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var map = {};
  for(var i in nums){
      if( map[target - nums[i]] != null ){
          return [map[target-nums[i]], i];
      }
      map[nums[i]] = i;
  }
  return [];
};