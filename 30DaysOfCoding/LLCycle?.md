Given a linked list, determine if it has a cycle in it.

Follow up:
Can you solve it without using extra space?
```
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(!head || !head.next){
        return false;
    }
    let turtle = head;
    let hare = head.next;
    while(turtle.val !== hare.val){
        turtle = turtle.next;
        if(!hare.next || !hare.next.next){
            return false;
        }
        hare = hare.next.next;
    }
    return true;
};
```
