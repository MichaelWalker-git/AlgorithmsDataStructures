
Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
Follow up:

A linked list can be reversed either iteratively or recursively. Could you implement both?




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
 * @return {ListNode}
 */
var reverseList = function(head) {
    const stack = [];
    let result;
    if(!head){
        return [];
    }
    while(head !== null){
        stack.push(head.val);
        head = head.next;
    }
    result = new ListNode(stack.pop());
    head = result;
    while(stack.length){
        result.next = new ListNode(stack.pop());
        result = result.next;
    }
    return head;
};

```

Faster

```
const reverseList = (head) => {
  if(head === null || head.next === null){
   return head; 
  }
  let prev = null;
  let curr = head;
  
  while(curr){
    let nxt = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nxt;
  }
  return prev;
}
```
