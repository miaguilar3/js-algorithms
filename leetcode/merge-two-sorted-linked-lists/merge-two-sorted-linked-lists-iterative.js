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
var mergeTwoLists = function(l1, l2) {
    if( l1 == null && l2 == null ){ return null; }
    if( l2 == null){ return l1; }
    if( l1 == null ){ return l2; }
    var n1 = l1;
    var n2 = l2;
    var l3 = null;
    var n3 = null;
    
    while(n1 != null && n2 != null){
        if( n1.val < n2.val ){
            if(l3 == null){ 
              l3 = n1; 
              n3 = n1; 
            }
            else{ n3.next = n1; n3 = n3.next; }
            n1 = n1.next;
        }
        else{
            if(l3 == null){ 
                l3 = n2;
                n3 = n2;
            }
            else{ n3.next = n2; n3 = n3.next; }
            n2 = n2.next;
        }
    }
    n3.next = n1 != null ? n1 : n2;
    return l3;
};