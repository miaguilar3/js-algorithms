/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function(root) {
  var q = [root];
  var level = 0;
  var max = null;
  var maxLevel = null;
  
  while(q.length !== 0){
      level += 1;
      var nodesInLevel = q.length;
      var sum = 0;
      for(var i = 0; i < nodesInLevel; i++){       
          var node = q.shift();
          sum += node.val;
          if(node.right){q.push(node.right);}
          if(node.left){q.push(node.left);}
      }
      if(max === null || sum > max){
          max = sum;
          maxLevel = level;
      }
  }

  return maxLevel;
};

var maxLevelSum