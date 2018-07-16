Sort a linked list in O(n log n) time using constant space complexity.

Example 1:

Input: 4->2->1->3
Output: 1->2->3->4
Example 2:

Input: -1->5->3->4->0
Output: -1->0->3->4->5


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
var sortList = function(head) {
    if(!head){
        return head;
    }
    const arr = [];
    let result;
    let secondCounter;
    let counter = head;
    while(counter){
        arr.push(counter.val);
        counter = counter.next;
    }
    arr.sort((a,b) => {
        if(a > b){
            return 1;
        } else if(a < b){
            return -1;
        } else {
            return 0;
        }
    });
    result = new ListNode(arr.splice(0, 1)[0]);
    secondCounter = result;
    while(arr.length){
        secondCounter.next = new ListNode(arr.splice(0, 1)[0]);
        secondCounter = secondCounter.next;
    }
    return result;
};
```
Time: O(n * log(n) + n);
Space: O(n);


Supposedly faster approach, less memory:
O(n log n)
```
var sortList = function(head) {
    if(head === null || head.next === null) return head;
    
    // recursively mergeSort
    
    // 1 - Find middle
    let middle = getMiddle(head);
    
    // 2 - Sort Right side
    let right = sortList(middle.next);
    
    // 3 - delete everything past middle
    middle.next = null;
    
    // 4 - sort the left side
    let left = sortList(head);
    
    // 5 - merge them together
    return merge(left, right);
};

var getMiddle = function(head) {
    let slow = head;
    let fast = head;
    
    while(fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

var merge = function(a, b) {
    let dummy = new ListNode(0);
    let cur = dummy;
    while(a && b) {
        if(a.val <= b.val) {
            cur.next = a;
            a = a.next;
        } else {
            cur.next = b;
            b = b.next
        }
        cur = cur.next;
    }
    if(!a) {
        cur.next = b;
    } else {
        cur.next = a;
    }
    
    return dummy.next;
}
```
Time: O(n * log(n));
Memory: O(n);
