/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2){
  let n1 = l1;
  let n2 = l2;
  let l3 = null;
  let n3;
  let carry = 0;
  while(n1 || n2 || carry){
      let sum = carry;
      if(n1){ sum += n1.val; }
      if(n2){ sum += n2.val; }
      if(!l3){ l3 = (n3 = new TreeNode(sum % 10)); }
      else{ 
          n3.next = new TreeNode(sum % 10);
          n3 = n3.next;
      }
      n1 = n1 ? n1.next : n1;
      n2 = n2 ? n2.next : n2;
      carry = Math.floor(sum / 10);
  }
  return l3;
}