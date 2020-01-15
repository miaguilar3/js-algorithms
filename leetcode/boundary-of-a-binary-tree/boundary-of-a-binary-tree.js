/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var boundaryOfBinaryTree = function(root) {
  if(!root){ return []; }
  const left = !root.left ? [root] : getLeftBoundaryNodes(root);
  const right = !root.right? [root] : getRightBoundaryNodes(root);
  const leaves = getLeafNodes(root);
  const unique = new Set();
  return [].concat(
    left,
    leaves,
    right.reverse()
  ).filter(function(n){
    return unique.has(n) ? false : unique.add(n) || true;
  }).map(function(n){
    return n.val;
  });
};

var getLeafNodes = function(node, arr = []){
  if(!node.left && !node.right){
    arr.push(node);
  }
  if(node.left){ getLeafNodes(node.left, arr); }
  if(node.right){ getLeafNodes(node.right, arr)}
  return arr;
}

var getLeftBoundaryNodes = function(node, arr = []){
  arr.push(node);
  if(!node.left && !node.right){
    return arr;
  }
  if(node.left){
    return getLeftBoundaryNodes(node.left, arr);
  }
  else if(node.right){
    return getLeftBoundaryNodes(node.right, arr);
  }
}

var getRightBoundaryNodes = function(node, arr = []){
  arr.push(node);
  if(!node.left && !node.right){
    return arr;
  }
  if(node.right){
    return getRightBoundaryNodes(node.right, arr);
  }
  else if(node.left){
    return getRightBoundaryNodes(node.left, arr);
  }
}