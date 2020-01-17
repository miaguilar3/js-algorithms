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
  const q = [root];
  const serial = [];
  while(q.length){
    const sn = q.shift();
    serial.push(sn ? sn.val : 'null');
    if(sn){
      q.push(sn.left ? sn.left : null);
      q.push(sn.right ? sn.right : null);
    }
    
  }
  while(serial[serial.length - 1] === 'null'){
    serial.pop();
  }
  return serial.join(',');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  if(!data){return null;}
  let leftRight = data.split(',').map(function(d){
    return d !== 'null' ? new TreeNode(d) : null;
  });
  let nodes = Array.from(leftRight).filter(function(n){ return n !== null;});
  
  let head = leftRight.shift();
  while(nodes.length){
    const node = nodes.shift();
    node.left = leftRight.shift();
    node.right = leftRight.shift();
  }
  
  return head;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */