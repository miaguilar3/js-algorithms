/**
 * Interleaved
 */

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
  let n1 = head;
  let copyHead = null
  while(n1){
      let clone = new Node(n1.val);
      if(!copyHead){
          copyHead = clone;
      }
      clone.next = n1.next;
      n1.next = clone;
      n1 = n1.next.next;
  }
  
  n1 = head;
  while(n1){
      n1.next.random = n1.random ? n1.random.next : null;
      n1 = n1.next.next;
  }
  
  n1 = head;
  while(n1){
      let nextOriginal = n1.next.next;
      n1.next.next = nextOriginal ? nextOriginal.next : null;
      n1 = n1.next = nextOriginal
  }
      
  return copyHead;
};