/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  
  var dfs = function(node, arr){
    if(!node){
      arr.push('null');
    }
    else{
      arr.push(node.val);
      dfs(node.left, arr);
      dfs(node.right, arr);
    }
  }
  
  const serial = [];
  dfs(root, serial);
  return serial.join(',');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  const nodes = data.split(',').map(function(d){
    return d == 'null' ? null : new TreeNode(d);
  });
  
  var dfs = function(nodes){
    const node = nodes.shift();
    if(node){
      node.left = dfs(nodes);
      node.right = dfs(nodes);
    }
    return node;
  }
  
  return dfs(nodes);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */