/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
  if(root === null){
      return new TreeNode(val);
  }
  
  var node = root;
  while(true){
      if(val > node.val){
          if(node.right === null){
              node.right = new TreeNode(val);
              break;
          }
          node = node.right;
      }
      else{
          if(node.left === null){
              node.left = new TreeNode(val);
              break;
          }
          node = node.left;
      }
  }
  
  return root;
};

/**
* @param {TreeNode} root
* @param {number} val
* @return {TreeNode}
*/
var recursiveInsertIntoBST = function(root, val) {
  if(root === null){
      return new TreeNode(val);
  }
  
  if(val > root.val){
      root.right = insertIntoBST(root.right, val);
  }
  else{
      root.left = insertIntoBST(root.left, val);
  }
  
  return root;
};