/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let prev = null,
        cur = head,
        end = head;
    for(let i = 0; i < n; i++) {
        end = end.next;
    }
    while(end) {
        prev = cur;
        cur = cur.next;
        end = end.next;
    }
    if(!prev) return cur.next;
    prev.next = cur.next;
    return head;
};
