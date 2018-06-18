```

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  const allValues = [];
  lists.forEach((ll) => {
     while(ll){
        allValues.push(ll.val);
        ll = ll.next;
     } 
  });
  return allValues.sort((a,b) => a - b)
};

```
