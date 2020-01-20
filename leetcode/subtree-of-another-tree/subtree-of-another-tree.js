/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
  if(!s && !t){ return true; }
  if(!s && t){ return false; }
  if(s && !t){ return true; }
  
  if(s.val === t.val){
      // potential sub tree
      if(matchSubtree(s, t)){
          return true;
      }
  }

  return isSubtree(s.left, t) || isSubtree(s.right, t);
};

var matchSubtree = function(t1, t2){
  if(!t1 && !t2){ return true; }
  if(!t1 && t2){ return false; }
  if(t1 && !t2){ return false; }
  
  if(t1.val !== t2.val){ return false; }
  return matchSubtree(t1.left, t2.left) && matchSubtree(t1.right, t2.right);
}