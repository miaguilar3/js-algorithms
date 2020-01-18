/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  if(!root){ return []; }
  const q = [ root ];
  const zigzag = [];
  let dir = true;
  
  var addLinked = function(n){
    if(n.left != null){q.push(n.left);}
    if(n.right != null){q.push(n.right);}
  }
  
  while(q.length){
    let levelSize = q.length;
    let levelVals = [];
    for(let i = 0; i < levelSize; i++){
      let levelNode = q.shift();
      let index = dir ? i : levelSize - i - 1;
      levelVals[index] = levelNode.val;
      addLinked(levelNode);
    }
    dir = !dir;
    zigzag.push(levelVals);
  }
  
  return zigzag;
};