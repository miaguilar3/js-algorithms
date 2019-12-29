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
var addTwoNumbers2 = function(l1, l2, carry = 0){
  if(!l1 && !l2 && !carry){ return null; }
  let sum = carry;
  if(l1){ sum += l1.val; }
  if(l2){ sum += l2.val; }
  const l3 = new ListNode(sum % 10);
  l3.next = addTwoNumbers(
    l1 ? l1.next : null,
    l2 ? l2.next : null,
    Math.floor(sum / 10)
  );
  return l3;
}