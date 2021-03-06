/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if(!l1 && !l2) return null;
    else if(!l1) return l2;
    else if(!l2) return l1;
    else if(l1.val < l2.val) {
      let current = l1;
      current.next = mergeTwoLists(l1.next, l2);
      return current;
    } else {
      let current = l2;
      current.next = mergeTwoLists(l1, l2.next);
      return current;
    }
};