
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
```/**
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
    let count = 0;
    let result = new ListNode(0);
    const head = result;
    
    while(l1 || l2){
          if(l1 && l2){
              if(l1.val <= l2.val){
                  result.next = new ListNode(l1.val);
                  l1 = l1.next;
              } else if(l2.val < l1.val) {
                  result.next = new ListNode(l2.val);
                  l2 = l2.next;
              }   
          } else {
              if(l1 && !l2){
                  result.next = new ListNode(l1.val);
                  l1 = l1.next;
              } else if(l2 && !l1){
                  result.next = new ListNode(l2.val);
                  l2 = l2.next; 
              }
          }
          result = result.next;
    }
    return head.next;
};
```


Recursive Faster Solution:

```
var mergeTwoLists = function(l1, l2) {
    if(l1 === null)
        return l2
    if(l2 === null)
        return l1
    let ret = null
    if(l1.val < l2.val){
        ret = l1
        ret.next = mergeTwoLists(l1.next, l2)
    }else{
        ret = l2
        ret.next = mergeTwoLists(l2.next, l1)
    }
    return ret
};
```
