Given a singly linked list and an integer k, remove the kth last element from the list. k is guaranteed to be smaller than the length of the list.

The list is very long, so making more than one pass is prohibitively expensive.

Do this in constant space and in one pass.

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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const dummy = new ListNode(0);
    dummy.next = head
    let fast = head;
    while (n > 0) {
        fast = fast.next;
        n--;
    }
    let slow = dummy;
    while (fast !== null) {
        slow = slow.next;
        fast = fast.next;
    }
    slow.next = slow.next.next;
    return dummy.next;
    
};
```

Slower approach

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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const start = head;
    let slow = head;
    let fast = head;
    if(start.next === null){
        return [];
    }
    for(let i = 0; i < n; i++){
        fast = fast.next;
    }
    let prev = null;
    while(fast){
        prev = slow;
        slow = slow.next;
        fast = fast.next;
    }
    if(prev === null){
      return start.next;
    }
    
    prev.next = slow.next;
    return start;
};
```
