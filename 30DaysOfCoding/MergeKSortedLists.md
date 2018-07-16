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


Optomized solution:
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
const mergeKLists = (lists) => {
    const merge = (beg, end, lists) => {
        if(beg > end) {
            return [];
        }
        if(beg === end) {
            return lists[beg];
        }
        const mid = beg + Math.floor((end - beg)/2);
        const left = merge(beg, mid, lists);
        const right = merge(mid + 1, end, lists);
        
        return mergeTwoLists(left, right);
    }
    
    const mergeTwoLists = (list1, list2) => {
        let head = new ListNode(0);
        let tmp = head;
        while(list1 && list2) {
            if(list1.val < list2.val) {
                tmp.next = list1;
                list1 = list1.next;
            } else {
                tmp.next = list2;
                list2 = list2.next;
            }
            
            tmp = tmp.next;
        }
        
        if(list1) {
            tmp.next = list1;
        } else if(list2) {
            tmp.next = list2;
        }
        tmp = head.next;
        head.next = null;
        
        return tmp;
    }
    return merge(0, lists.length - 1, lists);
};
```
