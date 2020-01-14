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
  let n1 = head;
  let clonedHead = new Node(n1.val);
  let n2 = clonedHead;
  
  const clonedMap = new Map();
  clonedMap.set(head, clonedHead);
  
  function getOrCreateCloned(node){
      if(!node){ return null; }
      if(clonedMap.has(node)){
          return clonedMap.get(node);
      }
      else{
          const clone = new Node(node.val);
          clonedMap.set(node, clone);
          return clone;
      }
  }
  
  while(n1){
      n2.next = getOrCreateCloned(n1.next);
      n2.random = getOrCreateCloned(n1.random);
      n2 = n2.next;
      n1 = n1.next;
  }
  
  return clonedHead;
};