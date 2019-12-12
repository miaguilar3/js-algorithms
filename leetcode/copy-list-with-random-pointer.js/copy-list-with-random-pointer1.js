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
  let n2;
  let copy = null;
  while(n1){
      if(n2){
          n2.next = new Node(n1.val, null, null);
          n2 = n2.next;
      }
      else{
          n2 = new Node(n1.val, null, null);
          copy = n2;
      }

      n2.original = n1;
      n1.copy = n2;
      n1 = n1.next;
  }
  
  n2 = copy;
  while(n2){
      n2.random = n2.original.random ? n2.original.random.copy : null;
      delete n2.orignal;
      n2 = n2.next;
  }

  // cleanup
  n1 = head;
  while(n1){
      delete n1.copy;
      n1 = n1.next;
  }

  return copy;
};