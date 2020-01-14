/**
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  if(!head){ return null; }
  
  const cloneMap = new Map();
  var dfsClone = function(node){
      if(!node){ return null; }
      if(cloneMap.has(node)){
          return cloneMap.get(node);
      }
      const clone = new Node(node.val);
      cloneMap.set(node, clone);
      clone.next = dfsClone(node.next);
      clone.random = dfsClone(node.random);
      return clone;
  }
  
  return dfsClone(head);
};