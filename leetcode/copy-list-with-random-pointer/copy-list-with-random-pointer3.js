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
  let n1 = head;
  let clonedHead = null;
  while(n1){
      let clone = new Node(n1.val);
      if(!clonedHead){
          clonedHead = clone;
      }
      cloneMap.set(n1, clone);
      n1 = n1.next;
  }
  
  n1 = head;
  while(n1){
      let clone = cloneMap.get(n1);
      clone.next = cloneMap.get(n1.next) || null;
      clone.random = cloneMap.get(n1.random) || null;
      n1 = n1.next;
  }

  return clonedHead;
};